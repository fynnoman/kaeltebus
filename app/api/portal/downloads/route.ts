import { NextResponse } from "next/server";
import { sql } from "@/lib/db";
import { ensureDownloadsTable, type DownloadRow } from "@/lib/downloads";

export async function GET() {
  await ensureDownloadsTable();
  const rows = (await sql`
    SELECT id, title, description, file_url, file_name, file_size, created_at, updated_at
    FROM downloads
    ORDER BY created_at DESC
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
  const fileUrl = typeof body.file_url === "string" ? body.file_url : "";
  const fileName = typeof body.file_name === "string" ? body.file_name : "";
  const fileSize =
    typeof body.file_size === "number" && Number.isFinite(body.file_size)
      ? Math.max(0, Math.round(body.file_size))
      : 0;

  if (!title) return NextResponse.json({ error: "Titel fehlt" }, { status: 400 });
  if (!fileUrl || !fileName) {
    return NextResponse.json({ error: "Datei fehlt. Bitte zuerst hochladen." }, { status: 400 });
  }

  const rows = (await sql`
    INSERT INTO downloads (title, description, file_url, file_name, file_size)
    VALUES (${title}, ${description || null}, ${fileUrl}, ${fileName}, ${fileSize})
    RETURNING id
  `) as { id: string }[];

  return NextResponse.json({ id: rows[0]?.id });
}
