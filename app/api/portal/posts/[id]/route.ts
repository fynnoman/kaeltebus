import { NextResponse } from "next/server";
import { sql, type Post } from "@/lib/db";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const rows = (await sql`
    SELECT id, slug, title, excerpt, cover_url, cover_alt, body_html, author, published, published_at, created_at, updated_at
    FROM posts
    WHERE id = ${id}
    LIMIT 1
  `) as Post[];
  if (!rows[0]) {
    return NextResponse.json({ error: "Nicht gefunden" }, { status: 404 });
  }
  return NextResponse.json({ post: rows[0] });
}

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  let body: Record<string, unknown> = {};
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage" }, { status: 400 });
  }

  const current = (await sql`
    SELECT published, published_at FROM posts WHERE id = ${id} LIMIT 1
  `) as { published: boolean; published_at: string | null }[];
  if (!current[0]) {
    return NextResponse.json({ error: "Nicht gefunden" }, { status: 404 });
  }

  const title = typeof body.title === "string" ? body.title.trim() : "";
  const excerpt = typeof body.excerpt === "string" ? body.excerpt.trim() : "";
  const bodyHtml = typeof body.body_html === "string" ? body.body_html : "";
  const coverUrl = typeof body.cover_url === "string" && body.cover_url ? body.cover_url : null;
  const coverAlt = typeof body.cover_alt === "string" ? body.cover_alt.trim() : "";
  const author = typeof body.author === "string" ? body.author.trim() : "";
  const publishIntent =
    typeof body.publish === "boolean" ? body.publish : current[0].published;

  const publishedAt =
    publishIntent && !current[0].published
      ? new Date().toISOString()
      : publishIntent
      ? current[0].published_at
      : null;

  if (!title) {
    return NextResponse.json({ error: "Titel fehlt" }, { status: 400 });
  }

  await sql`
    UPDATE posts
    SET title = ${title},
        excerpt = ${excerpt},
        body_html = ${bodyHtml},
        cover_url = ${coverUrl},
        cover_alt = ${coverAlt},
        author = ${author},
        published = ${publishIntent},
        published_at = ${publishedAt},
        updated_at = now()
    WHERE id = ${id}
  `;
  return NextResponse.json({ ok: true });
}

export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  await sql`DELETE FROM posts WHERE id = ${id}`;
  return NextResponse.json({ ok: true });
}
