"use client";

import Link from "next/link";
import { SITE } from "@/lib/data";
import { Reveal } from "@/components/Reveal";
import { t, type PageTexts } from "@/lib/texts";

export function HilfeBekommen({ texts }: { texts?: PageTexts }) {
  const faqs = [
    {
      q: t(texts, "faq1_q", "Brauche ich einen Ausweis?"),
      a: t(texts, "faq1_a", "Nein. Du brauchst keinen Ausweis. Du musst dich nicht anmelden."),
    },
    {
      q: t(texts, "faq2_q", "Muss ich etwas erzählen?"),
      a: t(
        texts,
        "faq2_a",
        "Nein. Wir fragen nicht nach deiner Herkunft, deinem Aufenthaltsstatus oder deiner Vorgeschichte.",
      ),
    },
    { q: t(texts, "faq3_q", "Kostet das etwas?"), a: t(texts, "faq3_a", "Nein. Alles ist kostenlos.") },
    { q: t(texts, "faq4_q", "Wer ist da?"), a: t(texts, "faq4_a", "Ehrenamtliche Helferinnen und Helfer.") },
  ];

  return (
    <>
      <section className="section bg-white">
        <div className="container-x">
          <div className="grid gap-10 md:grid-cols-[1.1fr_1fr] md:items-start md:gap-16">
            <div>
              <Reveal variant="up" duration={700}>
                <div className="kicker-line">{t(texts, "intro_kicker", "Für dich")}</div>
              </Reveal>
              <Reveal variant="up" delay={100} duration={800}>
                <h2 className="h-serif mt-4 text-[28px] font-bold leading-[1.15] tracking-tight text-ink sm:text-[34px] md:text-[42px]">
                  {t(texts, "intro_title", "Du bist willkommen.")}
                </h2>
              </Reveal>
              <Reveal variant="up" delay={180} duration={700}>
                <span className="rule-accent mt-6" />
              </Reveal>
              <Reveal variant="up" delay={260} duration={800}>
                <p className="mt-6 text-[16px] leading-relaxed text-ink sm:text-[17px]">
                  {t(
                    texts,
                    "intro_body1",
                    "Wenn es kalt ist und du einen sicheren Ort brauchst, kannst du zum Kältebus kommen. Du bekommst Wärme, etwas zu essen und zu trinken. Und Menschen, die dir zuhören.",
                  )}
                </p>
              </Reveal>
              <Reveal variant="up" delay={340} duration={800}>
                <p className="mt-4 text-[15.5px] leading-relaxed text-ink-500 sm:text-[16px]">
                  {t(
                    texts,
                    "intro_body2",
                    "Du musst keinen Ausweis zeigen. Du musst dich nicht anmelden. Du musst nichts erzählen. Wer kommt, kommt herein.",
                  )}
                </p>
              </Reveal>
            </div>

            <div className="grid gap-4 sm:gap-5">
              <Reveal variant="up" delay={0} duration={700} distance={22}>
                <article className="card card-line relative flex flex-col overflow-hidden p-6 sm:p-7 md:p-8">
                  <span aria-hidden className="ghost-numeral">
                    01
                  </span>
                  <div className="relative z-10 flex items-baseline gap-4">
                    <span className="numeral">01</span>
                    <span className="text-[11.5px] font-semibold uppercase tracking-kicker text-rot sm:text-[12px]">
                      {t(texts, "card1_kicker", "Wo")}
                    </span>
                  </div>
                  <h3 className="h-serif relative z-10 mt-5 text-[19px] font-bold leading-tight text-ink sm:text-[21px]">
                    {t(texts, "card1_title", "Am Römerkastell.")}
                  </h3>
                  <p className="relative z-10 mt-3 text-[15px] leading-relaxed text-ink sm:text-[15.5px]">
                    {t(
                      texts,
                      "card1_body",
                      "Der Kältebus steht am Römerkastell in Saarbrücken. Mit der Saarbahn kommst du direkt hin: Saarbahn-Haltestelle Römerkastell.",
                    )}
                  </p>
                </article>
              </Reveal>

              <Reveal variant="up" delay={110} duration={700} distance={22}>
                <article className="card card-line relative flex flex-col overflow-hidden p-6 sm:p-7 md:p-8">
                  <span aria-hidden className="ghost-numeral">
                    02
                  </span>
                  <div className="relative z-10 flex items-baseline gap-4">
                    <span className="numeral">02</span>
                    <span className="text-[11.5px] font-semibold uppercase tracking-kicker text-rot sm:text-[12px]">
                      {t(texts, "card2_kicker", "Wann")}
                    </span>
                  </div>
                  <h3 className="h-serif relative z-10 mt-5 text-[19px] font-bold leading-tight text-ink sm:text-[21px]">
                    {t(texts, "card2_title", "In der Wintersaison.")}
                  </h3>
                  <p className="relative z-10 mt-3 text-[15px] leading-relaxed text-ink sm:text-[15.5px]">
                    {t(
                      texts,
                      "card2_body",
                      "Der Kältebus ist während der Wintermonate im Einsatz. Wenn du wissen möchtest, wann geöffnet ist, meld dich kurz beim Verein.",
                    )}
                  </p>
                  <a
                    href={`tel:${SITE.contact.phoneHref}`}
                    className="relative z-10 mt-4 inline-flex w-fit items-center gap-1.5 text-[14px] font-semibold text-rot hover:underline"
                  >
                    {SITE.contact.phone} anrufen →
                  </a>
                  <a
                    href={`mailto:${SITE.contact.email}`}
                    className="relative z-10 mt-2 inline-flex w-fit items-center gap-1.5 text-[14px] font-semibold text-rot hover:underline"
                  >
                    {SITE.contact.email} →
                  </a>
                </article>
              </Reveal>

              <Reveal variant="up" delay={220} duration={700} distance={22}>
                <article className="card card-line relative flex flex-col overflow-hidden p-6 sm:p-7 md:p-8">
                  <span aria-hidden className="ghost-numeral">
                    03
                  </span>
                  <div className="relative z-10 flex items-baseline gap-4">
                    <span className="numeral">03</span>
                    <span className="text-[11.5px] font-semibold uppercase tracking-kicker text-rot sm:text-[12px]">
                      {t(texts, "card3_kicker", "Was du bekommst")}
                    </span>
                  </div>
                  <h3 className="h-serif relative z-10 mt-5 text-[19px] font-bold leading-tight text-ink sm:text-[21px]">
                    {t(texts, "card3_title", "Wärme, Essen, Ruhe.")}
                  </h3>
                  <ul className="relative z-10 mt-3 space-y-2 text-[15px] leading-relaxed text-ink sm:text-[15.5px]">
                    <li>{t(texts, "card3_item1", "Ein beheizter Ort zum Sitzen und Ausruhen.")}</li>
                    <li>{t(texts, "card3_item2", "Eine warme Mahlzeit und ein Getränk.")}</li>
                    <li>{t(texts, "card3_item3", "Menschen, die zuhören, wenn du reden möchtest.")}</li>
                    <li>{t(texts, "card3_item4", "Ruhe, wenn du keine Fragen möchtest.")}</li>
                  </ul>
                </article>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-paper-100">
        <div className="container-x">
          <div className="max-w-2xl">
            <Reveal variant="up" duration={700}>
              <div className="kicker-line">{t(texts, "faq_kicker", "Fragen und Antworten")}</div>
            </Reveal>
            <Reveal variant="up" delay={100} duration={800}>
              <h2 className="h-serif mt-4 text-[28px] font-bold leading-[1.15] tracking-tight text-ink sm:text-[34px] md:text-[42px]">
                {t(texts, "faq_title", "Was du wissen solltest.")}
              </h2>
            </Reveal>
            <Reveal variant="up" delay={180} duration={700}>
              <span className="rule-accent mt-6" />
            </Reveal>
          </div>

          <div className="mt-10 divide-y divide-line border-y border-line md:mt-14">
            {faqs.map((f, i) => (
              <Reveal
                key={i}
                variant="up"
                delay={i * 70}
                duration={700}
                distance={18}
              >
                <details className="group">
                  <summary className="flex cursor-pointer items-start justify-between gap-6 py-5 text-[15.5px] font-semibold text-ink transition-colors hover:text-rot sm:py-6 sm:text-[16.5px]">
                    <span className="h-serif tracking-tight">{f.q}</span>
                    <span className="mt-1 flex-none text-rot transition-transform group-open:rotate-45">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path
                          d="M8 3v10M3 8h10"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </summary>
                  <p className="pb-6 pr-10 text-[15px] leading-relaxed text-ink sm:text-[15.5px]">
                    {f.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x">
          <div className="grid gap-10 md:grid-cols-2 md:gap-14">
            <Reveal variant="up" duration={700}>
              <div>
                <div className="kicker-line">
                  {t(texts, "passant_kicker", "Für Angehörige und Passanten")}
                </div>
                <h2 className="h-serif mt-4 text-[24px] font-bold leading-[1.15] tracking-tight text-ink sm:text-[28px] md:text-[32px]">
                  {t(texts, "passant_title", "Du siehst jemanden in Not?")}
                </h2>
                <span className="rule-accent mt-5" />
                <p className="mt-5 text-[15px] leading-relaxed text-ink sm:text-[15.5px]">
                  {t(
                    texts,
                    "passant_body1",
                    "Wenn ein Mensch bei Kälte draußen liegt und du unsicher bist, ob es ihm gut geht: sprich die Person an, wenn möglich. Bleib in ihrer Nähe.",
                  )}
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-ink sm:text-[15.5px]">
                  {t(
                    texts,
                    "passant_body2",
                    "Wenn die Person nicht ansprechbar ist, bewusstlos wirkt oder stark unterkühlt scheint, ruf sofort den Rettungsdienst.",
                  )}
                </p>
              </div>
            </Reveal>

            <Reveal variant="up" delay={120} duration={800} distance={22}>
              <div className="rounded-lg border border-notfall/40 bg-notfall/5 p-6 sm:p-8">
                <div className="text-[11.5px] font-semibold uppercase tracking-kicker text-notfall sm:text-[12px]">
                  {t(texts, "notruf_kicker", "Akute Not · Rettungsdienst")}
                </div>
                <div className="h-serif mt-3 text-[38px] font-bold leading-none text-notfall sm:text-[46px]">
                  112
                </div>
                <p className="mt-4 text-[14.5px] leading-relaxed text-ink sm:text-[15px]">
                  {t(
                    texts,
                    "notruf_body",
                    "Wenn eine Person bewusstlos, nicht ansprechbar oder stark unterkühlt ist: nicht warten. Sofort 112 wählen.",
                  )}
                </p>
                <a
                  href="tel:112"
                  className="mt-6 inline-flex min-h-[52px] items-center justify-center gap-2 rounded bg-notfall px-6 py-3 text-[16px] font-bold text-white transition-colors hover:bg-notfall-600"
                >
                  {t(texts, "notruf_cta", "112 anrufen")}
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal variant="up" delay={260} duration={800}>
            <div className="infobox mt-12 text-[14px] leading-relaxed text-ink-600 sm:mt-16 sm:text-[14.5px]">
              <strong>
                {t(
                  texts,
                  "infobox_body",
                  "Wenn du helfen möchtest: Der Kältebus lebt vom Ehrenamt und von Spenden.",
                )}
              </strong>{" "}
              <Link href="/helfen" className="text-rot hover:underline">
                {t(texts, "infobox_link_helfen", "Ehrenamtlich mithelfen")}
              </Link>{" "}
              oder{" "}
              <Link href="/spenden" className="text-rot hover:underline">
                {t(texts, "infobox_link_spenden", "den Kältebus mit einer Spende unterstützen")}
              </Link>
              .
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
