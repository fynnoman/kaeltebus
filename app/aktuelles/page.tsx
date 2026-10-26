import type { Metadata } from "next";
import Link from "next/link";
import { sql, type Post } from "@/lib/db";
import { PageHeader } from "@/components/PageHeader";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Aktuelles",
  description:
    "Nachrichten, Berichte und Hinweise aus der Arbeit des Kältebus Saarbrücken e.V.",
  alternates: { canonical: "/aktuelles" },
};

function formatDate(iso: string | null) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default async function AktuellesPage() {
  const rows = (await sql`
    SELECT id, slug, title, excerpt, cover_url, cover_alt, published_at
    FROM posts
    WHERE published = true
    ORDER BY published_at DESC NULLS LAST, created_at DESC
  `) as Pick<Post, "id" | "slug" | "title" | "excerpt" | "cover_url" | "cover_alt" | "published_at">[];

  return (
    <>
      <PageHeader
        kicker="Aktuelles"
        title="Berichte aus unserer Arbeit"
        lead="Was gerade läuft, worum wir bitten und was wir im Dienst erleben. Kurz, nüchtern, aus erster Hand."
        crumbs={[{ label: "Start", href: "/" }, { label: "Aktuelles" }]}
      />
      <section className="section">
        <div className="container-x">
          {rows.length === 0 ? (
            <p className="text-ink-500">
              Es sind noch keine Beiträge veröffentlicht.
            </p>
          ) : (
            <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {rows.map((p) => (
                <li key={p.id}>
                  <Link
                    href={`/aktuelles/${p.slug}`}
                    className="card card-line group block h-full overflow-hidden"
                  >
                    {p.cover_url ? (
                      <div className="aspect-[16/10] overflow-hidden bg-paper-100">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={p.cover_url}
                          alt={p.cover_alt || p.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                        />
                      </div>
                    ) : (
                      <div className="aspect-[16/10] bg-paper-100" />
                    )}
                    <div className="p-5 md:p-6">
                      <p className="text-[12px] uppercase tracking-[0.14em] text-ink-400">
                        {formatDate(p.published_at)}
                      </p>
                      <h2 className="mt-2 text-xl font-bold text-ink group-hover:text-rot md:text-[22px]">
                        {p.title}
                      </h2>
                      {p.excerpt && (
                        <p className="mt-3 text-[15px] text-ink-500">
                          {p.excerpt}
                        </p>
                      )}
                      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-rot">
                        Beitrag lesen
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                          <path d="M4 7h7m0 0-3-3m3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  );
}
