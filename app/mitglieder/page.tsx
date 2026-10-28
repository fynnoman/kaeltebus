import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { sql } from "@/lib/db";
import {
  DOWNLOAD_CATEGORIES,
  ensureDownloadsTable,
  formatBytes,
  type DownloadRow,
} from "@/lib/downloads";
import { MembersLogoutButton } from "./MembersLogoutButton";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Mitgliederbereich",
  robots: { index: false, follow: false },
};

const MEMBER_CATEGORIES = DOWNLOAD_CATEGORIES.filter((c) => c.visibility === "members");

export default async function MembersPage() {
  await ensureDownloadsTable();
  const rows = (await sql`
    SELECT id, title, description, category, visibility, file_url, file_name, file_size, sort, created_at, updated_at
    FROM downloads
    WHERE visibility = 'members'
    ORDER BY sort ASC, created_at DESC
  `) as DownloadRow[];

  const grouped = new Map<string, DownloadRow[]>();
  for (const row of rows) {
    const list = grouped.get(row.category) ?? [];
    list.push(row);
    grouped.set(row.category, list);
  }

  return (
    <main>
      <PageHeader
        kicker="Mitgliederbereich"
        title="Unterlagen für Vereinsmitglieder."
        lead="Einladungen, Protokolle und interne Dokumente zum Ansehen und Herunterladen. Dieser Bereich ist nicht öffentlich."
        crumbs={[{ label: "Start", href: "/" }, { label: "Mitgliederbereich" }]}
      />

      <section className="section">
        <div className="container-x">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-ink-500">
              Du bist als Mitglied angemeldet. Für öffentliche Downloads siehe{" "}
              <Link href="/downloads" className="text-rot hover:underline">
                /downloads
              </Link>
              .
            </p>
            <MembersLogoutButton />
          </div>

          <div className="space-y-10">
            {rows.length === 0 ? (
              <div className="rounded-md border border-dashed border-line bg-paper-100 p-10 text-center text-ink-500">
                Aktuell sind keine Unterlagen hinterlegt.
              </div>
            ) : (
              MEMBER_CATEGORIES.map((cat) => {
                const items = grouped.get(cat.slug) ?? [];
                if (items.length === 0) return null;
                return (
                  <section key={cat.slug} className="rounded-md border border-line bg-white">
                    <header className="flex items-center justify-between gap-4 border-b border-line px-6 py-4">
                      <div>
                        <div className="text-[11.5px] font-semibold uppercase tracking-kicker text-rot">
                          Intern
                        </div>
                        <h2 className="h-serif mt-1 text-xl font-bold text-ink md:text-2xl">
                          {cat.label}
                        </h2>
                      </div>
                    </header>
                    <ul className="divide-y divide-line">
                      {items.map((row) => (
                        <li key={row.id} className="flex flex-wrap items-start justify-between gap-4 px-6 py-5">
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
                            <a
                              href={row.file_url}
                              download={row.file_name}
                              className="btn-primary"
                            >
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
        </div>
      </section>
    </main>
  );
}
