import Link from "next/link";
import { sql } from "@/lib/db";
import { ensureDownloadsTable, type DownloadRow } from "@/lib/downloads";
import { DownloadsManager } from "@/components/portal/DownloadsManager";

export const dynamic = "force-dynamic";

export default async function PortalDownloadsPage() {
  await ensureDownloadsTable();
  const rows = (await sql`
    SELECT id, title, description, visibility, category, file_url, file_name, file_size, created_at, updated_at
    FROM downloads
    ORDER BY created_at DESC
  `) as DownloadRow[];

  return (
    <main className="section">
      <div className="container-x">
        <nav className="mb-6 text-[12.5px] text-ink-400">
          <Link href="/portal" className="hover:text-rot">
            Portal
          </Link>
          <span className="mx-1.5 text-ink-300">/</span>
          <span>Downloads</span>
        </nav>

        <div>
          <p className="eyebrow">Dateien</p>
          <h1 className="h-serif mt-3 text-3xl font-bold text-ink md:text-4xl">
            Dateien hochladen
          </h1>
          <p className="mt-2 max-w-2xl text-ink-500">
            Lade PDFs oder Word-Dokumente hoch. Jede Datei bekommt einen Link, den du bei
            Bedarf per Mail oder Chat teilen kannst.
          </p>
        </div>

        <DownloadsManager initial={rows} />
      </div>
    </main>
  );
}
