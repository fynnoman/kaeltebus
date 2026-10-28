import { sql } from "@/lib/db";

export { formatBytes, type DownloadRow } from "@/lib/downloadsShared";

let ensured = false;
export async function ensureDownloadsTable() {
  if (ensured) return;
  await sql`
    CREATE TABLE IF NOT EXISTS downloads (
      id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
      title text NOT NULL,
      description text,
      file_url text NOT NULL,
      file_name text NOT NULL,
      file_size bigint NOT NULL DEFAULT 0,
      created_at timestamptz NOT NULL DEFAULT now(),
      updated_at timestamptz NOT NULL DEFAULT now()
    )
  `;
  await sql`CREATE INDEX IF NOT EXISTS downloads_created_at_idx ON downloads (created_at DESC)`;
  ensured = true;
}
