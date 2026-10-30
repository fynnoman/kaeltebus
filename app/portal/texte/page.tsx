import Link from "next/link";
import { redirect } from "next/navigation";
import { sql } from "@/lib/db";
import { PAGE_DEFS } from "@/lib/pageTexts";
import { isAdmin } from "@/lib/auth";

export const dynamic = "force-dynamic";

export default async function TextePortalIndex() {
  if (!(await isAdmin())) {
    redirect("/portal/downloads");
  }
  const rows = (await sql`SELECT page, count(*)::int AS n FROM page_texts GROUP BY page`) as {
    page: string;
    n: number;
  }[];
  const overrideCount = new Map<string, number>();
  for (const r of rows) overrideCount.set(r.page, r.n);

  return (
    <main className="section">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Texte</p>
            <h1 className="h-serif mt-3 text-3xl font-bold text-ink md:text-4xl">
              Texte der Website bearbeiten
            </h1>
            <p className="mt-2 max-w-2xl text-ink-500">
              Wähle eine Seite aus. Du siehst dann jeden Textbaustein mit dem aktuellen Inhalt und kannst ihn direkt im Browser anpassen. Nicht angefasste Texte bleiben wie sie sind.
            </p>
          </div>
        </div>

        <ul className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {PAGE_DEFS.map((p) => {
            const total = p.fields.length;
            const overridden = overrideCount.get(p.slug) ?? 0;
            return (
              <li key={p.slug}>
                <Link
                  href={`/portal/texte/${p.slug}`}
                  className="group block h-full rounded-md border border-line bg-white p-6 transition-colors hover:border-rot"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-[11.5px] font-semibold uppercase tracking-kicker text-rot">
                        {p.slug}
                      </div>
                      <div className="h-serif mt-2 text-lg font-bold text-ink group-hover:text-rot md:text-xl">
                        {p.label}
                      </div>
                    </div>
                    <span className="shrink-0 rounded bg-paper-100 px-2 py-1 text-[11px] font-semibold text-ink-500">
                      {total} Felder
                    </span>
                  </div>
                  <p className="mt-3 text-[13.5px] leading-relaxed text-ink-500">
                    {p.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between text-[12.5px]">
                    <span className="text-ink-400">
                      {overridden > 0
                        ? `${overridden} von ${total} angepasst`
                        : "Alle Texte sind noch im Original"}
                    </span>
                    <span className="font-semibold text-rot transition-transform group-hover:translate-x-0.5">
                      Bearbeiten →
                    </span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
