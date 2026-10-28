import { sql } from "@/lib/db";

export {
  PUBLIC_CATEGORIES,
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
      file_url text NOT NULL,
      file_name text NOT NULL,
      file_size bigint NOT NULL DEFAULT 0,
      created_at timestamptz NOT NULL DEFAULT now(),
      updated_at timestamptz NOT NULL DEFAULT now()
    )
  `;
  await sql`ALTER TABLE downloads ADD COLUMN IF NOT EXISTS visibility text NOT NULL DEFAULT 'internal'`;
  await sql`ALTER TABLE downloads ADD COLUMN IF NOT EXISTS category text`;
  await sql`CREATE INDEX IF NOT EXISTS downloads_visibility_idx ON downloads (visibility, created_at DESC)`;
  ensured = true;
}
