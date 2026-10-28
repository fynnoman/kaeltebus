import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { del } from "@vercel/blob";
import { sql } from "@/lib/db";
import {
  DOWNLOAD_CATEGORIES,
  ensureDownloadsTable,
  type DownloadRow,
  type DownloadVisibility,
} from "@/lib/downloads";

const CATEGORY_SLUGS = new Set(DOWNLOAD_CATEGORIES.map((c) => c.slug));

export async function PATCH(req: Request, { params }: { params: Promise<{ id: string }> }) {
  await ensureDownloadsTable();
  const { id } = await params;
  let body: Record<string, unknown> = {};
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage" }, { status: 400 });
  }

  const existingRows = (await sql`SELECT * FROM downloads WHERE id = ${id}`) as DownloadRow[];
  const existing = existingRows[0];
  if (!existing) return NextResponse.json({ error: "Nicht gefunden" }, { status: 404 });

  const title = typeof body.title === "string" ? body.title.trim() : existing.title;
  const description =
    typeof body.description === "string" ? body.description.trim() : (existing.description ?? "");
  const category = typeof body.category === "string" ? body.category : existing.category;
  const visibility = (typeof body.visibility === "string" ? body.visibility : existing.visibility) as DownloadVisibility;
  const sort = typeof body.sort === "number" && Number.isFinite(body.sort) ? Math.round(body.sort) : existing.sort;

  const fileUrl = typeof body.file_url === "string" && body.file_url ? body.file_url : existing.file_url;
  const fileName = typeof body.file_name === "string" && body.file_name ? body.file_name : existing.file_name;
  const fileSize =
    typeof body.file_size === "number" && Number.isFinite(body.file_size)
      ? Math.max(0, Math.round(body.file_size))
      : existing.file_size;

  if (!title) return NextResponse.json({ error: "Titel fehlt" }, { status: 400 });
  if (!CATEGORY_SLUGS.has(category)) return NextResponse.json({ error: "Unbekannte Kategorie" }, { status: 400 });
  if (visibility !== "public" && visibility !== "members") {
    return NextResponse.json({ error: "Sichtbarkeit ungültig" }, { status: 400 });
  }

  await sql`
    UPDATE downloads SET
      title = ${title},
      description = ${description || null},
      category = ${category},
      visibility = ${visibility},
      file_url = ${fileUrl},
      file_name = ${fileName},
      file_size = ${fileSize},
      sort = ${sort},
      updated_at = now()
    WHERE id = ${id}
  `;

  if (fileUrl !== existing.file_url) {
    try {
      await del(existing.file_url, { token: process.env.BLOB_READ_WRITE_TOKEN });
    } catch {
      /* alte Datei konnte nicht gelöscht werden – nicht kritisch */
    }
  }

  try {
    revalidatePath("/downloads");
    revalidatePath("/mitglieder");
  } catch {
    /* noop */
  }

  return NextResponse.json({ ok: true });
}

export async function DELETE(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  await ensureDownloadsTable();
  const { id } = await params;

  const rows = (await sql`SELECT file_url FROM downloads WHERE id = ${id}`) as { file_url: string }[];
  const row = rows[0];
  if (!row) return NextResponse.json({ error: "Nicht gefunden" }, { status: 404 });

  await sql`DELETE FROM downloads WHERE id = ${id}`;

  try {
    await del(row.file_url, { token: process.env.BLOB_READ_WRITE_TOKEN });
  } catch {
    /* alte Datei konnte nicht gelöscht werden – nicht kritisch */
  }

  try {
    revalidatePath("/downloads");
    revalidatePath("/mitglieder");
  } catch {
    /* noop */
  }

  return NextResponse.json({ ok: true });
}
