"use client";

import Link from "next/link";
import { SITE } from "@/lib/data";
import { Reveal } from "@/components/Reveal";
import { t, type PageTexts } from "@/lib/texts";

export function HelfenDetail({ texts }: { texts?: PageTexts }) {
  const haltung = [
    {
      kicker: t(texts, "haltung1_kicker", "Aufgabe"),
      title: t(texts, "haltung1_title", "Da sein, wo Hilfe gebraucht wird."),
      body: t(
        texts,
        "haltung1_body",
        "Wir heißen unsere Gäste willkommen, hören zu, bereiten Mahlzeiten vor und sorgen dafür, dass es ihnen während ihres Aufenthalts an nichts Wesentlichem fehlt. Für die professionelle Sozialarbeit stehen die entsprechenden Fachstellen und Partner bereit.",
      ),
    },
    {
      kicker: t(texts, "haltung2_kicker", "Miteinander"),
      title: t(texts, "haltung2_title", "Der Mensch steht im Mittelpunkt."),
      body: t(
        texts,
        "haltung2_body",
        "Bei uns begegnen wir jedem Gast mit Respekt und auf Augenhöhe. Herkunft, Lebensgeschichte oder Aufenthaltsstatus spielen dabei keine Rolle. Entscheidend ist der Mensch, der vor uns steht.",
      ),
    },
    {
      kicker: t(texts, "haltung3_kicker", "Engagement"),
      title: t(texts, "haltung3_title", "So viel Zeit, wie für Sie passt."),
      body: t(
        texts,
        "haltung3_body",
        "Ob eine Schicht in der Küche, ein Abend am Kältebus oder Unterstützung beim Auf- und Abbau: Gemeinsam finden wir eine Aufgabe und einen Umfang, der zu Ihren Möglichkeiten passt.",
      ),
    },
  ];

  const schritte = [
    {
      step: "01",
      kicker: t(texts, "schritte1_kicker", "Kontakt"),
      title: t(texts, "schritte1_title", "Einfach kurz schreiben."),
      body: t(
        texts,
        "schritte1_body",
        "Eine kurze E-Mail an info@kaeltebus-saarbruecken.de genügt. Schreiben Sie uns, wobei Sie unterstützen möchten, wie viel Zeit Sie ungefähr mitbringen und ab wann Sie starten könnten.",
      ),
    },
    {
      step: "02",
      kicker: t(texts, "schritte2_kicker", "Kennenlernen"),
      title: t(texts, "schritte2_title", "Erst einmal einen Eindruck bekommen."),
      body: t(
        texts,
        "schritte2_body",
        "Wir melden uns mit allen wichtigen Informationen. Wenn es passt, vereinbaren wir einen kurzen Termin vor Ort, bei dem Sie den Kältebus, das Team und die Abläufe kennenlernen können.",
      ),
    },
    {
      step: "03",
      kicker: t(texts, "schritte3_kicker", "Erster Einsatz"),
      title: t(texts, "schritte3_title", "Gemeinsam den passenden Termin finden."),
      body: t(
        texts,
        "schritte3_body",
        "Anschließend stimmen wir gemeinsam ab, wann und wobei Sie unterstützen möchten. Dabei bleibt das Ehrenamt flexibel: Es gibt keinen festen Vertrag und keine langfristige Verpflichtung.",
      ),
    },
  ];

  return (
    <>
      <section className="section bg-paper-100">
        <div className="container-x">
          <div className="max-w-2xl">
            <Reveal variant="up" duration={700}>
              <div className="kicker-line">
                {t(texts, "haltung_kicker", "Was Ehrenamt hier bedeutet")}
              </div>
            </Reveal>
            <Reveal variant="up" delay={100} duration={800}>
              <h2 className="h-serif mt-4 text-[28px] font-bold leading-[1.1] tracking-tight text-ink sm:text-[34px] md:text-[42px]">
                {t(texts, "haltung_title", "Zeit, die wirklich ankommt.")}
              </h2>
            </Reveal>
            <Reveal variant="up" delay={180} duration={700}>
              <span className="rule-accent mt-6" />
            </Reveal>
            <Reveal variant="up" delay={260} duration={800}>
              <p className="mt-6 text-[15px] leading-relaxed text-ink-500 sm:text-[16px]">
                {t(
                  texts,
                  "haltung_lead",
                  "Der Kältebus lebt vom Engagement freiwilliger Helferinnen und Helfer. Dafür braucht es keine besondere Ausbildung, sondern Offenheit, Verlässlichkeit und die Bereitschaft, für andere da zu sein.",
                )}
              </p>
            </Reveal>
          </div>

          <div className="mt-10 grid gap-4 sm:gap-6 md:mt-14 md:grid-cols-3">
            {haltung.map((h, i) => (
              <Reveal
                key={i}
                variant="up"
                delay={i * 130}
                duration={800}
                distance={26}
              >
                <article className="card card-line relative flex h-full flex-col overflow-hidden p-6 sm:p-8 md:p-10">
                  <span aria-hidden className="ghost-numeral">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="relative z-10 flex items-baseline gap-4">
                    <span className="numeral">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[11.5px] font-semibold uppercase tracking-kicker text-rot sm:text-[12px]">
                      {h.kicker}
                    </span>
                  </div>
                  <span className="relative z-10 mt-5 block h-px w-10 bg-rot" />
                  <h3 className="h-serif relative z-10 mt-5 text-[22px] font-bold leading-[1.15] text-ink sm:text-[24px] md:text-[26px]">
                    {h.title}
                  </h3>
                  <p className="relative z-10 mt-4 text-[14.5px] leading-relaxed text-ink-500 sm:text-[15px]">
                    {h.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x">
          <div className="max-w-2xl">
            <Reveal variant="up" duration={700}>
              <div className="kicker-line">
                {t(texts, "schritte_kicker", "So kommt der Kontakt zustande")}
              </div>
            </Reveal>
            <Reveal variant="up" delay={100} duration={800}>
              <h2 className="h-serif mt-4 text-[28px] font-bold leading-[1.1] tracking-tight text-ink sm:text-[34px] md:text-[42px]">
                {t(texts, "schritte_title", "In drei Schritten ins Ehrenamt.")}
              </h2>
            </Reveal>
            <Reveal variant="up" delay={180} duration={700}>
              <span className="rule-accent mt-6" />
            </Reveal>
            <Reveal variant="up" delay={260} duration={800}>
              <p className="mt-6 text-[15px] leading-relaxed text-ink-500 sm:text-[16px]">
                {t(
                  texts,
                  "schritte_lead",
                  "Der Einstieg ist unkompliziert. Wir lernen uns kurz kennen, zeigen, wie alles abläuft, und schauen gemeinsam, welcher Einsatz gut passt.",
                )}
              </p>
            </Reveal>
          </div>

          <ol className="mt-10 grid gap-4 sm:gap-5 md:mt-14 md:grid-cols-3">
            {schritte.map((s, i) => (
              <Reveal
                key={s.step}
                variant="up"
                delay={i * 110}
                duration={700}
                distance={22}
              >
                <li className="card card-line relative flex h-full flex-col overflow-hidden p-6 sm:p-7">
                  <span aria-hidden className="ghost-numeral">{s.step}</span>
                  <div className="relative z-10 flex items-baseline gap-4">
                    <span className="numeral">{s.step}</span>
                    <span className="text-[11.5px] font-semibold uppercase tracking-kicker text-rot sm:text-[12px]">
                      {s.kicker}
                    </span>
                  </div>
                  <h3 className="h-serif relative z-10 mt-5 text-[19px] font-bold leading-tight text-ink sm:text-[21px]">
                    {s.title}
                  </h3>
                  <p className="relative z-10 mt-3 text-[14.5px] leading-relaxed text-ink-500 sm:text-[15px]">
                    {s.body}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>

          <Reveal variant="up" delay={320} duration={800}>
            <div className="mt-10 flex flex-col gap-2.5 sm:mt-12 sm:flex-row sm:gap-3">
              <a
                href={`mailto:${SITE.contact.email}?subject=Ich%20m%C3%B6chte%20helfen`}
                className="btn-primary w-full sm:w-auto"
              >
                {t(texts, "schritte_cta_primary", "Per E-Mail melden")}
              </a>
              <Link href="/kontakt" className="btn-secondary w-full sm:w-auto">
                {t(texts, "schritte_cta_secondary", "Alle Kontaktwege")}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-paper-100">
        <div className="container-x">
          <div className="grid gap-8 md:grid-cols-[1fr_1fr] md:gap-14">
            <Reveal variant="up" duration={800} distance={22}>
              <div>
                <div className="kicker-line">{t(texts, "alt_kicker", "Wenn Zeit gerade nicht geht")}</div>
                <h3 className="h-serif mt-4 text-[24px] font-bold leading-[1.15] tracking-tight text-ink sm:text-[28px] md:text-[32px]">
                  {t(texts, "alt_title", "Es gibt zwei andere Wege.")}
                </h3>
                <span className="rule-accent mt-5" />
                <p className="mt-5 text-[14.5px] leading-relaxed text-ink-500 sm:text-[15px]">
                  {t(
                    texts,
                    "alt_body",
                    "Nicht jeder kann eine Schicht übernehmen. Wer den Verein trotzdem tragen möchte, hilft am schnellsten mit einer Geldspende oder einer abgestimmten Sachspende.",
                  )}
                </p>
              </div>
            </Reveal>

            <Reveal variant="up" delay={120} duration={800} distance={22}>
              <div className="grid gap-3 sm:gap-4">
                <Link
                  href="/spenden"
                  className="card group flex items-center justify-between p-5 sm:p-6"
                >
                  <div>
                    <div className="text-[11.5px] font-semibold uppercase tracking-kicker text-rot sm:text-[12px]">
                      {t(texts, "alt_geld_kicker", "Geldspende")}
                    </div>
                    <div className="h-serif mt-2 text-[18px] font-bold leading-tight text-ink sm:text-[20px]">
                      {t(texts, "alt_geld_title", "Wärme, die ankommt.")}
                    </div>
                  </div>
                  <span className="text-rot transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </Link>
                <Link
                  href="/bedarf"
                  className="card group flex items-center justify-between p-5 sm:p-6"
                >
                  <div>
                    <div className="text-[11.5px] font-semibold uppercase tracking-kicker text-rot sm:text-[12px]">
                      {t(texts, "alt_sach_kicker", "Sachspende")}
                    </div>
                    <div className="h-serif mt-2 text-[18px] font-bold leading-tight text-ink sm:text-[20px]">
                      {t(texts, "alt_sach_title", "Bedarfsliste ansehen.")}
                    </div>
                  </div>
                  <span className="text-rot transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
