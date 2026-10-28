import Link from "next/link";
import { sql } from "@/lib/db";
import { ensureDownloadsTable, type DownloadRow } from "@/lib/downloads";
import { DownloadsManager } from "@/components/portal/DownloadsManager";

export const dynamic = "force-dynamic";

export default async function PortalDownloadsPage() {
  await ensureDownloadsTable();
  const rows = (await sql`
    SELECT id, title, description, category, visibility, file_url, file_name, file_size, sort, created_at, updated_at
    FROM downloads
    ORDER BY sort ASC, created_at DESC
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

        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Dateien</p>
            <h1 className="h-serif mt-3 text-3xl font-bold text-ink md:text-4xl">
              Downloads verwalten
            </h1>
            <p className="mt-2 max-w-2xl text-ink-500">
              Legt hier den Kompass zur Helfertätigkeit, die Themen-PDFs und Mitgliederunterlagen
              wie Einladungen und Protokolle ab. Öffentliche Dateien erscheinen unter
              /downloads, Mitgliederdateien im passwortgeschützten Mitgliederbereich.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link href="/downloads" target="_blank" rel="noreferrer" className="btn-secondary">
              Öffentliche Seite ansehen
            </Link>
            <Link href="/mitglieder" target="_blank" rel="noreferrer" className="btn-secondary">
              Mitgliederseite ansehen
            </Link>
          </div>
        </div>

        <DownloadsManager initial={rows} />
      </div>
    </main>
  );
}
