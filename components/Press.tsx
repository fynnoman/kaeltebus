"use client";

import { PRESS, PARTNERS } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

export function Press() {
  return (
    <section id="presse" className="section bg-paper-100">
      <div className="container-x">
        {/* Partners */}
        <Reveal variant="up" duration={700}>
          <div className="text-center">
            <div className="kicker">Getragen von</div>
          </div>
        </Reveal>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[11.5px] font-semibold uppercase tracking-kicker text-ink-400 sm:gap-x-8 sm:gap-y-4 sm:text-[13.5px]">
          {PARTNERS.map((p, i) => (
            <Reveal
              key={p}
              variant="fade"
              delay={i * 60}
              duration={600}
            >
              <span className="flex items-center gap-6 sm:gap-8">
                {p}
                {i < PARTNERS.length - 1 && (
                  <span className="h-1 w-1 rounded-full bg-rot" />
                )}
              </span>
            </Reveal>
          ))}
        </div>

        {/* Press list */}
        <div className="mt-20 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <Reveal variant="up" duration={700}>
              <div className="kicker">Presse und Berichterstattung</div>
            </Reveal>
            <Reveal variant="up" delay={100} duration={800}>
              <h2 className="h-serif mt-3 text-[28px] font-bold leading-[1.1] tracking-tight text-ink sm:text-[34px] md:text-[44px]">
                Was andere über uns schreiben.
              </h2>
            </Reveal>
          </div>
          <Reveal variant="up" delay={200} duration={800}>
            <p className="max-w-md text-[14.5px] leading-relaxed text-ink-500 sm:text-[15px]">
              Für Presseanfragen, Bild- und Filmmaterial: bitte kurz per E-Mail
              an die Öffentlichkeitsarbeit. Wir melden uns in der Regel innerhalb
              eines Tages zurück.
            </p>
          </Reveal>
        </div>

        <ol className="mt-10 border-t border-line">
          {PRESS.map((p, i) => (
            <Reveal
              key={p.headline}
              as="li"
              variant="up"
              delay={i * 70}
              duration={700}
              distance={18}
            >
              <a
                href="#kontakt"
                className="flex flex-col gap-1.5 border-b border-line py-5 transition-colors hover:text-rot sm:grid sm:grid-cols-[110px_1fr_auto] sm:items-center sm:gap-5 sm:py-6 md:grid-cols-[140px_1fr_auto] md:py-7"
              >
                <div className="flex items-center justify-between text-[11.5px] font-semibold uppercase tracking-kicker text-ink-400 sm:text-[12px]">
                  <span>{p.date}</span>
                  <span className="text-rot sm:hidden">{p.outlet}</span>
                </div>
                <div>
                  <div className="hidden text-[12px] font-semibold uppercase tracking-kicker text-rot sm:block">
                    {p.outlet}
                  </div>
                  <h3 className="h-serif text-[16px] font-bold leading-snug text-ink sm:mt-1 sm:text-[17px] md:text-[19px]">
                    {p.headline}
                  </h3>
                </div>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  className="hidden text-ink-300 transition-transform duration-200 group-hover:translate-x-1 sm:block"
                >
                  <path
                    d="M4 9h10m0 0-4-4m4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
