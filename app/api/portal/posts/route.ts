import { NextResponse } from "next/server";
import { sql, type Post } from "@/lib/db";
import { isAdmin } from "@/lib/auth";
import { slugify } from "@/lib/slug";

export async function GET() {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: "Admin-Freigabe erforderlich" }, { status: 403 });
  }
  const rows = (await sql`
    SELECT id, slug, title, excerpt, cover_url, cover_alt, published, published_at, created_at, updated_at
    FROM posts
    ORDER BY updated_at DESC
  `) as Post[];
  return NextResponse.json({ posts: rows });
}

async function uniqueSlug(base: string) {
  let candidate = base || "beitrag";
  let n = 2;
  while (true) {
    const rows = (await sql`SELECT 1 FROM posts WHERE slug = ${candidate} LIMIT 1`) as unknown[];
    if (rows.length === 0) return candidate;
    candidate = `${base}-${n++}`;
  }
}

export async function POST(req: Request) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: "Admin-Freigabe erforderlich" }, { status: 403 });
  }
  let body: Record<string, unknown> = {};
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage" }, { status: 400 });
  }

  const title = typeof body.title === "string" ? body.title.trim() : "";
  if (!title) {
    return NextResponse.json({ error: "Titel fehlt" }, { status: 400 });
  }
  const excerpt = typeof body.excerpt === "string" ? body.excerpt.trim() : "";
  const bodyHtml = typeof body.body_html === "string" ? body.body_html : "";
  const coverUrl = typeof body.cover_url === "string" && body.cover_url ? body.cover_url : null;
  const coverAlt = typeof body.cover_alt === "string" ? body.cover_alt.trim() : "";
  const author = typeof body.author === "string" ? body.author.trim() : "";
  const publish = body.publish === true;

  const slug = await uniqueSlug(slugify(title));

  const rows = (await sql`
    INSERT INTO posts (slug, title, excerpt, cover_url, cover_alt, body_html, author, published, published_at)
    VALUES (${slug}, ${title}, ${excerpt}, ${coverUrl}, ${coverAlt}, ${bodyHtml}, ${author}, ${publish}, ${publish ? new Date().toISOString() : null})
    RETURNING id, slug
  `) as { id: string; slug: string }[];

  return NextResponse.json({ post: rows[0] });
}
