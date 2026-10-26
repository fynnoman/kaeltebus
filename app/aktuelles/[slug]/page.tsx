import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { sql, type Post } from "@/lib/db";
import { JsonLd } from "@/components/JsonLd";

export const dynamic = "force-dynamic";

async function getPost(slug: string) {
  const rows = (await sql`
    SELECT id, slug, title, excerpt, cover_url, cover_alt, body_html, author, published, published_at, created_at, updated_at
    FROM posts
    WHERE slug = ${slug} AND published = true
    LIMIT 1
  `) as Post[];
  return rows[0] ?? null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: "Beitrag nicht gefunden", robots: { index: false } };
  return {
    title: post.title,
    description: post.excerpt || undefined,
    alternates: { canonical: `/aktuelles/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt || undefined,
      type: "article",
      images: post.cover_url ? [{ url: post.cover_url, alt: post.cover_alt || post.title }] : undefined,
      publishedTime: post.published_at ?? undefined,
    },
  };
}

function formatDate(iso: string | null) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const siteUrl = "https://kaeltebus-saarbruecken.de";

  return (
    <main>
      <JsonLd
        id={`ld-article-${post.id}`}
        data={{
          "@context": "https://schema.org",
          "@type": "NewsArticle",
          headline: post.title,
          description: post.excerpt || undefined,
          image: post.cover_url ? [post.cover_url] : undefined,
          datePublished: post.published_at ?? post.created_at,
          dateModified: post.updated_at,
          author: post.author
            ? { "@type": "Organization", name: post.author }
            : { "@type": "Organization", name: "Kältebus Saarbrücken e.V." },
          publisher: {
            "@type": "Organization",
            name: "Kältebus Saarbrücken e.V.",
            logo: { "@type": "ImageObject", url: `${siteUrl}/images/logo.jpg` },
          },
          mainEntityOfPage: `${siteUrl}/aktuelles/${post.slug}`,
        }}
      />
      <article className="section">
        <div className="container-x max-w-3xl">
          <nav
            aria-label="Brotkrumen"
            className="mb-6 flex flex-wrap items-center gap-1.5 text-[12.5px] text-ink-400"
          >
            <Link href="/" className="hover:text-rot">
              Start
            </Link>
            <span aria-hidden className="text-ink-300">/</span>
            <Link href="/aktuelles" className="hover:text-rot">
              Aktuelles
            </Link>
          </nav>
          <p className="eyebrow">Aktuelles</p>
          <h1 className="display-serif mt-5 text-[32px] text-ink sm:text-[44px] md:text-[56px]">
            {post.title}
          </h1>
          <p className="mt-6 text-[13px] uppercase tracking-[0.14em] text-ink-400">
            {formatDate(post.published_at)}
            {post.author ? <> · {post.author}</> : null}
          </p>
          <span className="rule-accent mt-6 inline-block" />
          {post.cover_url && (
            <figure className="mt-10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.cover_url}
                alt={post.cover_alt || post.title}
                className="h-auto w-full"
              />
              {post.cover_alt && (
                <figcaption className="mt-2 text-sm text-ink-400">
                  {post.cover_alt}
                </figcaption>
              )}
            </figure>
          )}
          <div
            className="prose-article mt-10 text-[17px] leading-[1.7] text-ink-700"
            dangerouslySetInnerHTML={{ __html: post.body_html }}
          />
          <div className="mt-14 border-t border-line pt-8">
            <Link href="/aktuelles" className="btn-secondary">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path d="M10 7H3m0 0 3-3m-3 3 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Alle Beiträge
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
