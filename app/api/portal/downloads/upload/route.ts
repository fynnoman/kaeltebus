import { NextResponse } from "next/server";
import { put } from "@vercel/blob";

const ALLOWED = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);
const MAX_BYTES = 40 * 1024 * 1024;

function safeFilename(name: string) {
  const base = name.normalize("NFKD").replace(/[^\w.\- ]+/g, "").trim();
  return base.length > 120 ? base.slice(0, 120) : base;
}

export async function POST(req: Request) {
  const form = await req.formData();
  const file = form.get("file");
  if (!(file instanceof File)) {
    return NextResponse.json({ error: "Keine Datei" }, { status: 400 });
  }
  if (!ALLOWED.has(file.type)) {
    return NextResponse.json(
      { error: "Nur PDF oder Word-Dokumente (.pdf, .doc, .docx)" },
      { status: 400 },
    );
  }
  if (file.size > MAX_BYTES) {
    return NextResponse.json({ error: "Datei zu groß (max. 40 MB)" }, { status: 400 });
  }
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return NextResponse.json(
      { error: "Blob-Storage nicht konfiguriert (BLOB_READ_WRITE_TOKEN fehlt)" },
      { status: 500 },
    );
  }

  const original = safeFilename(file.name) || "dokument.pdf";
  const token = Math.random().toString(36).slice(2, 10);
  const key = `downloads/${Date.now()}-${token}-${original}`;

  const blob = await put(key, file, {
    access: "public",
    contentType: file.type,
    token: process.env.BLOB_READ_WRITE_TOKEN,
  });

  return NextResponse.json({
    url: blob.url,
    file_name: original,
    file_size: file.size,
  });
}
