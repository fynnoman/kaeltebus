"use client";

import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { t, type PageTexts } from "@/lib/texts";

export function Fakten({ texts }: { texts?: PageTexts }) {
  const facts = [
    {
      kicker: t(texts, "fakten1_kicker", "Verein"),
      title: t(texts, "fakten1_title", "Eingetragen und gemeinnützig."),
      body: t(
        texts,
        "fakten1_body",
        "VR 5477, Amtsgericht Saarbrücken. Ein ehrenamtlicher Verein, der jeden Winter den Kältebus am Römerkastell betreibt.",
      ),
      href: "/verein",
      cta: t(texts, "fakten1_cta", "Unser Auftrag"),
    },
    {
      kicker: t(texts, "fakten2_kicker", "Spenden"),
      title: t(texts, "fakten2_title", "Direkt in die Versorgung."),
      body: t(
        texts,
        "fakten2_body",
        "Der Verein arbeitet ehrenamtlich. Jeder Euro fließt in Verpflegung und Ausstattung am Kältebus am Römerkastell.",
      ),
      href: "/spenden",
      cta: t(texts, "fakten2_cta", "Konto und betterplace"),
    },
    {
      kicker: t(texts, "fakten3_kicker", "Ehrenamt"),
      title: t(texts, "fakten3_title", "Zeit statt Geld."),
      body: t(
        texts,
        "fakten3_body",
        "Ob Küche, Ausgabe, Aufbau oder Materialpflege: Wer helfen möchte, meldet sich per E-Mail und bekommt die Details zum Ablauf.",
      ),
      href: "/helfen",
      cta: t(texts, "fakten3_cta", "Mitmachen"),
    },
  ];

  return (
    <section className="section bg-white">
      <div className="container-x">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <Reveal variant="up" duration={700}>
            <div className="kicker-line">{t(texts, "fakten_kicker", "Auf einen Blick")}</div>
          </Reveal>
          <Reveal variant="up" delay={100} duration={800}>
            <h2 className="h-serif mt-4 text-[28px] font-bold leading-[1.1] tracking-tight text-ink sm:text-[34px] md:text-[42px]">
              {t(texts, "fakten_title", "Wer wir sind, wohin es geht.")}
            </h2>
          </Reveal>
          <Reveal variant="up" delay={180} duration={700}>
            <span className="rule-accent mt-6" />
          </Reveal>
          <Reveal variant="up" delay={260} duration={800}>
            <p className="mt-6 text-[15px] leading-relaxed text-ink-500 sm:text-[16px]">
              {t(
                texts,
                "fakten_lead",
                "Drei kurze Wege, mehr über den Verein zu erfahren oder ihn zu unterstützen.",
              )}
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 sm:gap-6 md:mt-14 md:grid-cols-3">
          {facts.map((f, i) => (
            <Reveal
              key={f.href}
              variant="up"
              delay={i * 130}
              duration={800}
              distance={26}
            >
              <Link
                href={f.href}
                className="card card-line group relative flex h-full flex-col overflow-hidden p-6 sm:p-8 md:p-10"
              >
                <div className="text-[11.5px] font-semibold uppercase tracking-kicker text-rot sm:text-[12px]">
                  {f.kicker}
                </div>
                <h3 className="h-serif mt-4 text-[22px] font-bold leading-[1.15] text-ink sm:text-[24px] md:text-[26px]">
                  {f.title}
                </h3>
                <p className="mt-4 flex-1 text-[14.5px] leading-relaxed text-ink-500 sm:text-[15px]">
                  {f.body}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-semibold text-rot">
                  {f.cta}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    className="transition-transform group-hover:translate-x-0.5"
                  >
                    <path
                      d="M2 7h10m0 0L8 3m4 4L8 11"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
