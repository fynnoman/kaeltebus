import Link from "next/link";
import { redirect } from "next/navigation";
import { PostForm } from "@/components/portal/PostForm";
import { isAdmin } from "@/lib/auth";

export const dynamic = "force-dynamic";

export default async function NewPostPage() {
  if (!(await isAdmin())) {
    redirect("/portal/downloads");
  }
  return (
    <main className="section">
      <div className="container-x">
        <nav className="mb-6 text-[12.5px] text-ink-400">
          <Link href="/portal" className="hover:text-rot">
            Beiträge
          </Link>
          <span className="mx-1.5 text-ink-300">/</span>
          <span>Neuer Beitrag</span>
        </nav>
        <h1 className="h-serif text-3xl font-bold text-ink md:text-4xl">
          Neuer Beitrag
        </h1>
        <p className="mt-2 text-ink-500">
          Schreibt den Beitrag, ladet ein Titelbild hoch und veröffentlicht ihn mit einem Klick.
        </p>
        <div className="mt-10">
          <PostForm />
        </div>
      </div>
    </main>
  );
}
