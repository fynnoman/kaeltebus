"use client";

import { Reveal } from "@/components/Reveal";
import { t, type PageTexts } from "@/lib/texts";

export function Pillars({ texts }: { texts?: PageTexts }) {
  const pillars = [
    {
      kicker: t(texts, "pillar1_kicker", "Würde"),
      title: t(texts, "pillar1_title", "Ohne Bedürftigkeitsprüfung."),
      body: t(
        texts,
        "pillar1_body",
        "Wer bei uns ankommt, kommt herein. Unabhängig von Herkunft, Aufenthaltsstatus oder Vorgeschichte.",
      ),
    },
    {
      kicker: t(texts, "pillar2_kicker", "Wärme"),
      title: t(texts, "pillar2_title", "Ein sicherer Ort in der kältesten Nacht."),
      body: t(
        texts,
        "pillar2_body",
        "Ein beheizter Ort am Römerkastell, eine warme Mahlzeit und Ansprechpartner, wenn es sonst niemanden gibt.",
      ),
    },
    {
      kicker: t(texts, "pillar3_kicker", "Ehrenamt"),
      title: t(texts, "pillar3_title", "Getragen von Freiwilligen."),
      body: t(
        texts,
        "pillar3_body",
        "Der Verein arbeitet ehrenamtlich. Spenden fließen direkt in die Versorgung vor Ort.",
      ),
    },
  ];

  return (
    <section id="verein" className="section bg-white">
      <div className="container-x">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <Reveal variant="up" duration={700}>
            <div className="kicker-line">{t(texts, "pillars_kicker", "Unser Auftrag")}</div>
          </Reveal>
          <Reveal variant="up" delay={100} duration={800}>
            <h2 className="h-serif mt-4 text-[28px] font-bold leading-[1.1] tracking-tight text-ink sm:text-[34px] md:text-[44px]">
              {t(texts, "pillars_title", "Drei Sätze, die alles tragen.")}
            </h2>
          </Reveal>
          <Reveal variant="up" delay={180} duration={700}>
            <span className="rule-accent mt-6" />
          </Reveal>
          <Reveal variant="up" delay={260} duration={800}>
            <p className="mt-6 text-[15px] leading-relaxed text-ink-500 sm:text-[16px]">
              {t(
                texts,
                "pillars_lead",
                "Der Kältebus Saarbrücken ist ein eingetragener, gemeinnütziger Verein (VR 5477, Amtsgericht Saarbrücken). Er arbeitet vollständig ehrenamtlich am Kältebus am Römerkastell.",
              )}
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 sm:gap-6 md:mt-16 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal
              key={p.kicker + i}
              variant="up"
              delay={i * 130}
              duration={800}
              distance={28}
            >
              <article className="card card-line relative flex h-full flex-col overflow-hidden p-6 sm:p-8 md:p-10">
                <span aria-hidden className="ghost-numeral">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="relative z-10 flex items-baseline gap-4">
                  <span className="numeral">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-[11.5px] font-semibold uppercase tracking-kicker text-rot sm:text-[12px]">
                    {p.kicker}
                  </span>
                </div>
                <span className="relative z-10 mt-5 block h-px w-10 bg-rot" />
                <h3 className="h-serif relative z-10 mt-5 text-[22px] font-bold leading-[1.15] text-ink sm:text-[24px] md:text-[26px]">
                  {p.title}
                </h3>
                <p className="relative z-10 mt-4 text-[14.5px] leading-relaxed text-ink-500 sm:text-[15px]">
                  {p.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
