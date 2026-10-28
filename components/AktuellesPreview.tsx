import Link from "next/link";
import { sql, type Post } from "@/lib/db";

function formatDate(iso: string | null) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

type PreviewPost = Pick<
  Post,
  "id" | "slug" | "title" | "excerpt" | "cover_url" | "cover_alt" | "published_at"
>;

async function loadLatest(): Promise<PreviewPost[]> {
  try {
    const rows = (await sql`
      SELECT id, slug, title, excerpt, cover_url, cover_alt, published_at
      FROM posts
      WHERE published = true
      ORDER BY published_at DESC NULLS LAST, created_at DESC
      LIMIT 2
    `) as PreviewPost[];
    return rows;
  } catch {
    return [];
  }
}

export async function AktuellesPreview() {
  const posts = await loadLatest();
  if (posts.length === 0) return null;

  return (
    <section className="section border-t border-line bg-white">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="eyebrow">Aktuelles</div>
            <h2 className="h-serif mt-3 text-3xl font-bold text-ink md:text-4xl">
              Berichte aus unserer Arbeit
            </h2>
          </div>
          <Link
            href="/aktuelles"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-rot hover:text-rot-600"
          >
            Mehr
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path
                d="M4 7h7m0 0-3-3m3 3-3 3"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        <ul className="mt-10 grid gap-8 md:grid-cols-2">
          {posts.map((p) => (
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
                  <h3 className="mt-2 text-xl font-bold text-ink group-hover:text-rot md:text-[22px]">
                    {p.title}
                  </h3>
                  {p.excerpt && (
                    <p className="mt-3 text-[15px] text-ink-500">{p.excerpt}</p>
                  )}
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-rot">
                    Beitrag lesen
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                      <path
                        d="M4 7h7m0 0-3-3m3 3-3 3"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
