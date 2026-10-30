import Link from "next/link";
import { sql } from "@/lib/db";
import { isAdmin } from "@/lib/auth";
import { ensureDownloadsTable, formatBytes, type DownloadRow } from "@/lib/downloads";
import { DownloadsManager } from "@/components/portal/DownloadsManager";

export const dynamic = "force-dynamic";

export default async function PortalDownloadsPage() {
  await ensureDownloadsTable();
  const admin = await isAdmin();

  if (!admin) {
    const rows = (await sql`
      SELECT id, title, description, visibility, category, file_url, file_name, file_size, created_at, updated_at
      FROM downloads
      WHERE visibility = 'internal'
      ORDER BY created_at DESC
    `) as DownloadRow[];

    return (
      <main className="section">
        <div className="container-x">
          <p className="eyebrow">Interner Bereich</p>
          <h1 className="h-serif mt-3 text-3xl font-bold text-ink md:text-4xl">
            Interne Dateien
          </h1>
          <p className="mt-2 max-w-2xl text-ink-500">
            Hier findet ihr die aktuellen internen Dokumente des Vereins zum Herunterladen.
          </p>

          <section className="mt-10 rounded-md border border-line bg-white">
            {rows.length === 0 ? (
              <div className="p-10 text-center text-ink-500">
                Aktuell sind keine internen Dateien hinterlegt.
              </div>
            ) : (
              <ul className="divide-y divide-line">
                {rows.map((row) => (
                  <li
                    key={row.id}
                    className="flex flex-wrap items-start justify-between gap-4 px-5 py-4"
                  >
                    <div className="min-w-0 flex-1">
                      <div className="font-semibold text-ink">{row.title}</div>
                      {row.description && (
                        <div className="mt-1 text-sm text-ink-500">{row.description}</div>
                      )}
                      <div className="mt-2 flex flex-wrap items-center gap-3 text-[12.5px] text-ink-400">
                        <span>{row.file_name}</span>
                        <span>{formatBytes(row.file_size)}</span>
                      </div>
                    </div>
                    <a
                      href={row.file_url}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-primary"
                    >
                      Herunterladen
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </section>
        </div>
      </main>
    );
  }

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

        <DownloadsManager initial={rows} admin={admin} />
      </div>
    </main>
  );
}
