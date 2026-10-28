import { sql } from "@/lib/db";

export {
  DOWNLOAD_CATEGORIES,
  categoryLabel,
  formatBytes,
  type DownloadRow,
  type DownloadVisibility,
} from "@/lib/downloadsShared";

let ensured = false;
export async function ensureDownloadsTable() {
  if (ensured) return;
  await sql`
    CREATE TABLE IF NOT EXISTS downloads (
      id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
      title text NOT NULL,
      description text,
      category text NOT NULL,
      visibility text NOT NULL CHECK (visibility IN ('public','members')),
      file_url text NOT NULL,
      file_name text NOT NULL,
      file_size bigint NOT NULL DEFAULT 0,
      sort integer NOT NULL DEFAULT 0,
      created_at timestamptz NOT NULL DEFAULT now(),
      updated_at timestamptz NOT NULL DEFAULT now()
    )
  `;
  await sql`CREATE INDEX IF NOT EXISTS downloads_visibility_idx ON downloads (visibility, category, sort, created_at DESC)`;
  ensured = true;
}
