import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { sql } from "@/lib/db";
import {
  PUBLIC_CATEGORIES,
  ensureDownloadsTable,
  formatBytes,
  type DownloadRow,
} from "@/lib/downloads";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Downloads",
  description:
    "Kompass zur Helfertätigkeit und PDFs zu Kochen, Sachspenden, Helfen im Zelt und Versorgungstouren beim Kältebus Saarbrücken e.V.",
  alternates: { canonical: "/downloads" },
};

export default async function DownloadsPage() {
  await ensureDownloadsTable();
  const rows = (await sql`
    SELECT id, title, description, visibility, category, file_url, file_name, file_size, created_at, updated_at
    FROM downloads
    WHERE visibility = 'public'
    ORDER BY created_at DESC
  `) as DownloadRow[];

  const grouped = new Map<string, DownloadRow[]>();
  for (const row of rows) {
    const key = row.category ?? "";
    const list = grouped.get(key) ?? [];
    list.push(row);
    grouped.set(key, list);
  }

  const anyFiles = rows.length > 0;

  return (
    <main>
      <PageHeader
        kicker="Downloads"
        title="Unterlagen zur Mithilfe."
        lead="Unser Kompass zur Helfertätigkeit und die Themen-PDFs zu Kochen, Sachspenden, Helfen im Zelt und Versorgungstouren. Zum Ansehen und Herunterladen."
        crumbs={[{ label: "Start", href: "/" }, { label: "Downloads" }]}
      />

      <section className="section">
        <div className="container-x space-y-8">
          {!anyFiles ? (
            <div className="rounded-md border border-dashed border-line bg-paper-100 p-10 text-center text-ink-500">
              Aktuell sind keine Downloads veröffentlicht.
            </div>
          ) : (
            PUBLIC_CATEGORIES.map((cat) => {
              const items = grouped.get(cat.slug) ?? [];
              if (items.length === 0) return null;
              return (
                <section key={cat.slug} className="rounded-md border border-line bg-white">
                  <header className="border-b border-line px-6 py-4">
                    <div className="text-[11.5px] font-semibold uppercase tracking-kicker text-rot">
                      Thema
                    </div>
                    <h2 className="h-serif mt-1 text-xl font-bold text-ink md:text-2xl">
                      {cat.label}
                    </h2>
                  </header>
                  <ul className="divide-y divide-line">
                    {items.map((row) => (
                      <li
                        key={row.id}
                        className="flex flex-wrap items-start justify-between gap-4 px-6 py-5"
                      >
                        <div className="min-w-0 flex-1">
                          <div className="font-semibold text-ink">{row.title}</div>
                          {row.description && (
                            <div className="mt-1 text-sm text-ink-500">{row.description}</div>
                          )}
                          <div className="mt-2 text-[12.5px] text-ink-400">
                            {row.file_name} · {formatBytes(row.file_size)}
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <a
                            href={row.file_url}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded border border-line bg-white px-3 py-2 text-sm text-ink hover:border-rot hover:text-rot"
                          >
                            Ansehen
                          </a>
                          <a href={row.file_url} download={row.file_name} className="btn-primary">
                            Herunterladen
                          </a>
                        </div>
                      </li>
                    ))}
                  </ul>
                </section>
              );
            })
          )}
        </div>
      </section>
    </main>
  );
}
