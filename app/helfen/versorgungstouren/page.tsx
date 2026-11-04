import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { sql } from "@/lib/db";
import {
  ensureDownloadsTable,
  formatBytes,
  type DownloadRow,
} from "@/lib/downloads";
import { SITE } from "@/lib/data";
import {
  breadcrumbSchema,
  volunteerActionSchema,
  webPageSchema,
} from "@/lib/schema";
import { loadPageTexts, t } from "@/lib/texts";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Versorgungstouren begleiten",
  description:
    "Ehrenamt beim Kältebus Saarbrücken e.V.: Versorgungstouren zu Menschen, die nicht zum Kältebus kommen. Kurzüberblick und Merkblatt zum Download.",
  alternates: { canonical: "/helfen/versorgungstouren" },
  openGraph: {
    title: "Versorgungstouren begleiten · Kältebus Saarbrücken e.V.",
    description:
      "Ehrenamt beim Kältebus Saarbrücken e.V.: Versorgungstouren zu Menschen, die nicht zum Kältebus kommen.",
    url: "https://kaeltebus-saarbruecken.de/helfen/versorgungstouren",
  },
};

const crumbs = [
  { name: "Start", href: "/" },
  { name: "Ehrenamt", href: "/helfen" },
  { name: "Versorgungstouren" },
];

export default async function Page() {
  const texts = await loadPageTexts("helfen-versorgungstouren");

  await ensureDownloadsTable();
  const rows = (await sql`
    SELECT id, title, description, visibility, category, file_url, file_name, file_size, created_at, updated_at
    FROM downloads
    WHERE visibility = 'public' AND category = 'versorgungstouren'
    ORDER BY created_at DESC
  `) as DownloadRow[];

  const bullets = [
    {
      title: t(texts, "bullet1_title", "Was wir tun"),
      body: t(
        texts,
        "bullet1_body",
        "Menschen aufsuchen, die nicht zum Kältebus kommen. Warme Getränke, eine Kleinigkeit zu essen, ein Gespräch, bei Bedarf Hinweise auf weitere Hilfsangebote.",
      ),
    },
    {
      title: t(texts, "bullet2_title", "Wie wir arbeiten"),
      body: t(
        texts,
        "bullet2_body",
        "Immer zu zweit oder zu dritt. Ruhig, respektvoll, ohne Druck. Niemand muss etwas annehmen.",
      ),
    },
    {
      title: t(texts, "bullet3_title", "Was Sie mitbringen sollten"),
      body: t(
        texts,
        "bullet3_body",
        "Offenheit, Verlässlichkeit, festes Schuhwerk und warme Kleidung. Eine besondere Ausbildung ist nicht nötig.",
      ),
    },
    {
      title: t(texts, "bullet4_title", "Vor dem ersten Einsatz"),
      body: t(
        texts,
        "bullet4_body",
        "Wir lernen uns kurz kennen, besprechen den Ablauf und starten erst, wenn Sie sich sicher fühlen. Erfahrene Helferinnen und Helfer begleiten Sie am Anfang.",
      ),
    },
  ];

  return (
    <main>
      <JsonLd
        id="ld-helfen-versorgungstouren"
        data={[
          webPageSchema({
            url: "/helfen/versorgungstouren",
            name: "Versorgungstouren begleiten · Kältebus Saarbrücken e.V.",
            description:
              "Ehrenamt beim Kältebus Saarbrücken e.V.: Versorgungstouren und Merkblatt.",
            breadcrumbs: crumbs,
          }),
          volunteerActionSchema(),
          breadcrumbSchema(crumbs),
        ]}
      />
      <PageHeader
        kicker={t(texts, "header_kicker", "Ehrenamt")}
        title={t(texts, "header_title", "Versorgungstouren begleiten.")}
        lead={t(
          texts,
          "header_lead",
          "Nicht alle, die auf der Straße leben, kommen zum Kältebus. Auf Versorgungstouren fahren kleine Teams zu bekannten Plätzen und bringen Warmes, Trinkbares und ein Gespräch mit.",
        )}
        crumbs={[
          { label: "Start", href: "/" },
          { label: "Ehrenamt", href: "/helfen" },
          { label: "Versorgungstouren" },
        ]}
      />

      <section className="section bg-white">
        <div className="container-x">
          <div className="max-w-2xl">
            <Reveal variant="up" duration={700}>
              <div className="kicker-line">
                {t(texts, "intro_kicker", "Worum es geht")}
              </div>
            </Reveal>
            <Reveal variant="up" delay={100} duration={800}>
              <h2 className="h-serif mt-4 text-[26px] font-bold leading-[1.15] tracking-tight text-ink sm:text-[32px] md:text-[38px]">
                {t(
                  texts,
                  "intro_title",
                  "Hilfe kommt dorthin, wo sie gebraucht wird.",
                )}
              </h2>
            </Reveal>
            <Reveal variant="up" delay={180} duration={700}>
              <span className="rule-accent mt-6" />
            </Reveal>
            <Reveal variant="up" delay={260} duration={800}>
              <p className="mt-6 text-[15px] leading-relaxed text-ink-500 sm:text-[16px]">
                {t(
                  texts,
                  "intro_body",
                  "Eine Versorgungstour ist ein ruhiger, kurzer Rundgang in kleinen Teams. Wir sprechen Menschen an, fragen, wie es ihnen geht, und reichen weiter, was gerade hilft. Alles Weitere steht im Merkblatt.",
                )}
              </p>
            </Reveal>
          </div>

          <ul className="mt-10 grid gap-3 sm:gap-4 md:mt-14 md:grid-cols-2">
            {bullets.map((b, i) => (
              <Reveal
                key={i}
                variant="up"
                delay={i * 110}
                duration={800}
                distance={22}
              >
                <li className="card h-full p-6 sm:p-7">
                  <div className="text-[10.5px] font-semibold uppercase tracking-kicker text-rot sm:text-[11px]">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="h-serif mt-4 text-[18px] font-bold leading-tight text-ink sm:mt-5 sm:text-[20px]">
                    {b.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-ink-500 sm:text-[14.5px]">
                    {b.body}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section bg-paper-100">
        <div className="container-x">
          <div className="max-w-2xl">
            <Reveal variant="up" duration={700}>
              <div className="kicker-line">
                {t(texts, "merkblatt_kicker", "Merkblatt zur Tour")}
              </div>
            </Reveal>
            <Reveal variant="up" delay={100} duration={800}>
              <h2 className="h-serif mt-4 text-[24px] font-bold leading-[1.15] tracking-tight text-ink sm:text-[28px] md:text-[32px]">
                {t(texts, "merkblatt_title", "Alle Details auf einer Seite.")}
              </h2>
            </Reveal>
            <Reveal variant="up" delay={180} duration={700}>
              <span className="rule-accent mt-6" />
            </Reveal>
            <Reveal variant="up" delay={260} duration={800}>
              <p className="mt-6 text-[15px] leading-relaxed text-ink-500 sm:text-[16px]">
                {t(
                  texts,
                  "merkblatt_body",
                  "Im Merkblatt stehen Treffpunkt, Ausrüstung, Abläufe und Verhaltensregeln. Bitte vor dem ersten Einsatz einmal in Ruhe lesen.",
                )}
              </p>
            </Reveal>
          </div>

          <Reveal variant="up" delay={320} duration={800}>
            <div className="mt-8 rounded-md border border-line bg-white">
              {rows.length === 0 ? (
                <div className="px-6 py-8 text-center text-[14.5px] text-ink-500">
                  {t(
                    texts,
                    "merkblatt_empty",
                    "Das Merkblatt steht in Kürze zum Download bereit. Bei Fragen melden Sie sich gern per E-Mail.",
                  )}
                </div>
              ) : (
                <ul className="divide-y divide-line">
                  {rows.map((row) => (
                    <li
                      key={row.id}
                      className="flex flex-wrap items-start justify-between gap-4 px-6 py-5"
                    >
                      <div className="min-w-0 flex-1">
                        <div className="font-semibold text-ink">{row.title}</div>
                        {row.description && (
                          <div className="mt-1 text-sm text-ink-500">
                            {row.description}
                          </div>
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
              )}
            </div>
          </Reveal>

          <Reveal variant="up" delay={400} duration={800}>
            <div className="mt-10 flex flex-col gap-2.5 sm:flex-row sm:gap-3">
              <a
                href={`mailto:${SITE.contact.email}?subject=Versorgungstour%20begleiten`}
                className="btn-primary w-full sm:w-auto"
              >
                {t(texts, "cta_primary", "Per E-Mail melden")}
              </a>
              <Link href="/helfen" className="btn-secondary w-full sm:w-auto">
                {t(texts, "cta_secondary", "Zur Ehrenamt-Übersicht")}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
