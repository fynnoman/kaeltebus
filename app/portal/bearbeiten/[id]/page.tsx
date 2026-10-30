import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { sql, type Post } from "@/lib/db";
import { PostForm } from "@/components/portal/PostForm";
import { isAdmin } from "@/lib/auth";

export const dynamic = "force-dynamic";

export default async function EditPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  if (!(await isAdmin())) {
    redirect("/portal/downloads");
  }
  const { id } = await params;
  const rows = (await sql`
    SELECT id, slug, title, excerpt, cover_url, cover_alt, body_html, author, published, published_at, created_at, updated_at
    FROM posts
    WHERE id = ${id}
    LIMIT 1
  `) as Post[];
  const post = rows[0];
  if (!post) notFound();

  return (
    <main className="section">
      <div className="container-x">
        <nav className="mb-6 text-[12.5px] text-ink-400">
          <Link href="/portal" className="hover:text-rot">
            Beiträge
          </Link>
          <span className="mx-1.5 text-ink-300">/</span>
          <span>Bearbeiten</span>
        </nav>
        <h1 className="h-serif text-3xl font-bold text-ink md:text-4xl">
          {post.title || "Beitrag bearbeiten"}
        </h1>
        <p className="mt-2 text-ink-500">
          {post.published ? "Veröffentlicht" : "Entwurf"} · zuletzt geändert am{" "}
          {new Date(post.updated_at).toLocaleDateString("de-DE")}
        </p>
        <div className="mt-10">
          <PostForm
            initial={{
              id: post.id,
              slug: post.slug,
              title: post.title,
              excerpt: post.excerpt,
              body_html: post.body_html,
              cover_url: post.cover_url,
              cover_alt: post.cover_alt,
              author: post.author,
              published: post.published,
            }}
          />
        </div>
      </div>
    </main>
  );
}
