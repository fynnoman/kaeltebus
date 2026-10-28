import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { sql } from "@/lib/db";
import {
  DOWNLOAD_CATEGORIES,
  ensureDownloadsTable,
  type DownloadRow,
  type DownloadVisibility,
} from "@/lib/downloads";

const CATEGORY_SLUGS = new Set(DOWNLOAD_CATEGORIES.map((c) => c.slug));

export async function GET() {
  await ensureDownloadsTable();
  const rows = (await sql`
    SELECT id, title, description, category, visibility, file_url, file_name, file_size, sort, created_at, updated_at
    FROM downloads
    ORDER BY sort ASC, created_at DESC
  `) as DownloadRow[];
  return NextResponse.json({ downloads: rows });
}

export async function POST(req: Request) {
  await ensureDownloadsTable();
  let body: Record<string, unknown> = {};
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage" }, { status: 400 });
  }

  const title = typeof body.title === "string" ? body.title.trim() : "";
  const description = typeof body.description === "string" ? body.description.trim() : "";
  const category = typeof body.category === "string" ? body.category : "";
  const visibility = (typeof body.visibility === "string" ? body.visibility : "") as DownloadVisibility;
  const fileUrl = typeof body.file_url === "string" ? body.file_url : "";
  const fileName = typeof body.file_name === "string" ? body.file_name : "";
  const fileSize =
    typeof body.file_size === "number" && Number.isFinite(body.file_size) ? Math.max(0, Math.round(body.file_size)) : 0;
  const sort = typeof body.sort === "number" && Number.isFinite(body.sort) ? Math.round(body.sort) : 0;

  if (!title) return NextResponse.json({ error: "Titel fehlt" }, { status: 400 });
  if (!CATEGORY_SLUGS.has(category)) return NextResponse.json({ error: "Unbekannte Kategorie" }, { status: 400 });
  if (visibility !== "public" && visibility !== "members") {
    return NextResponse.json({ error: "Sichtbarkeit ungültig" }, { status: 400 });
  }
  if (!fileUrl || !fileName) {
    return NextResponse.json({ error: "Datei fehlt. Bitte zuerst hochladen." }, { status: 400 });
  }

  const rows = (await sql`
    INSERT INTO downloads (title, description, category, visibility, file_url, file_name, file_size, sort)
    VALUES (${title}, ${description || null}, ${category}, ${visibility}, ${fileUrl}, ${fileName}, ${fileSize}, ${sort})
    RETURNING id
  `) as { id: string }[];

  try {
    revalidatePath("/downloads");
    revalidatePath("/mitglieder");
  } catch {
    /* noop */
  }

  return NextResponse.json({ id: rows[0]?.id });
}
