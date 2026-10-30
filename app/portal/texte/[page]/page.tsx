import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { sql } from "@/lib/db";
import { getPageDef, defaultTextsFor } from "@/lib/pageTexts";
import { isAdmin } from "@/lib/auth";
import { TexteEditor } from "./TexteEditor";

export const dynamic = "force-dynamic";

export default async function PageTextePage({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  if (!(await isAdmin())) {
    redirect("/portal/downloads");
  }
  const { page } = await params;
  const def = getPageDef(page);
  if (!def) notFound();

  const defaults = defaultTextsFor(page);
  const rows = (await sql`
    SELECT key, value FROM page_texts WHERE page = ${page}
  `) as { key: string; value: string }[];
  const overrides: Record<string, string> = {};
  for (const r of rows) overrides[r.key] = r.value;

  const initialFields = def.fields.map((f) => ({
    key: f.key,
    label: f.label,
    kind: f.kind,
    default: f.default,
    value: overrides[f.key] ?? defaults[f.key] ?? "",
    overridden: Object.prototype.hasOwnProperty.call(overrides, f.key),
  }));

  return (
    <main className="section">
      <div className="container-x">
        <nav className="mb-4 flex flex-wrap items-center gap-1.5 text-[12.5px] text-ink-400">
          <Link href="/portal/texte" className="hover:text-rot">
            Texte
          </Link>
          <span aria-hidden>/</span>
          <span className="text-ink-500">{def.label}</span>
        </nav>

        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Seite · {def.slug}</p>
            <h1 className="h-serif mt-3 text-3xl font-bold text-ink md:text-4xl">
              {def.label}
            </h1>
            <p className="mt-2 max-w-2xl text-ink-500">{def.description}</p>
          </div>
          <Link
            href="/portal/texte"
            className="rounded border border-line bg-white px-3 py-2 text-sm text-ink-500 hover:border-rot hover:text-rot"
          >
            Zurück
          </Link>
        </div>

        <TexteEditor page={def.slug} initialFields={initialFields} />
      </div>
    </main>
  );
}
