import Link from "next/link";
import { sql, type Post } from "@/lib/db";

export const dynamic = "force-dynamic";

function formatDate(iso: string | null) {
  if (!iso) return "—";
  return new Date(iso).toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

export default async function PortalDashboard() {
  const rows = (await sql`
    SELECT id, slug, title, excerpt, cover_url, published, published_at, updated_at
    FROM posts
    ORDER BY updated_at DESC
  `) as Pick<
    Post,
    "id" | "slug" | "title" | "excerpt" | "cover_url" | "published" | "published_at" | "updated_at"
  >[];

  return (
    <main className="section">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Beiträge</p>
            <h1 className="h-serif mt-3 text-3xl font-bold text-ink md:text-4xl">
              Aktuelles verwalten
            </h1>
            <p className="mt-2 text-ink-500">
              Hier könnt ihr neue Beiträge schreiben, speichern und mit einem Klick veröffentlichen.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link href="/portal/texte" className="btn-secondary">
              Texte der Website
            </Link>
            <Link href="/portal/neu" className="btn-primary">
              Neuer Beitrag
            </Link>
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-md border border-line bg-white">
          {rows.length === 0 ? (
            <div className="p-10 text-center text-ink-500">
              Noch keine Beiträge. Erstell euren ersten über „Neuer Beitrag".
            </div>
          ) : (
            <table className="w-full text-left text-sm">
              <thead className="bg-paper-100 text-[12.5px] uppercase tracking-[0.1em] text-ink-500">
                <tr>
                  <th className="px-4 py-3">Titel</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="hidden px-4 py-3 sm:table-cell">Zuletzt geändert</th>
                  <th className="px-4 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {rows.map((p) => (
                  <tr key={p.id} className="border-t border-line">
                    <td className="px-4 py-3 align-top">
                      <div className="font-semibold text-ink">{p.title}</div>
                      {p.excerpt && (
                        <div className="mt-1 text-ink-400 line-clamp-1">{p.excerpt}</div>
                      )}
                    </td>
                    <td className="px-4 py-3 align-top">
                      {p.published ? (
                        <span className="inline-flex items-center gap-1.5 rounded bg-rot-50 px-2 py-1 text-xs font-semibold text-rot-600">
                          <span className="h-1.5 w-1.5 rounded-full bg-rot-500" />
                          Veröffentlicht
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 rounded bg-ink-50 px-2 py-1 text-xs font-semibold text-ink-500">
                          <span className="h-1.5 w-1.5 rounded-full bg-ink-300" />
                          Entwurf
                        </span>
                      )}
                    </td>
                    <td className="hidden px-4 py-3 align-top text-ink-500 sm:table-cell">
                      {formatDate(p.updated_at)}
                    </td>
                    <td className="px-4 py-3 text-right align-top">
                      <div className="inline-flex flex-wrap items-center justify-end gap-2">
                        {p.published && (
                          <a
                            href={`/aktuelles/${p.slug}`}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded border border-line bg-white px-3 py-1.5 text-xs hover:border-rot hover:text-rot"
                          >
                            Ansehen
                          </a>
                        )}
                        <Link
                          href={`/portal/bearbeiten/${p.id}`}
                          className="rounded bg-ink px-3 py-1.5 text-xs text-white hover:bg-ink-700"
                        >
                          Bearbeiten
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </main>
  );
}
