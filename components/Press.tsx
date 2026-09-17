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
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-[13.5px] font-semibold uppercase tracking-kicker text-ink-400">
          {PARTNERS.map((p, i) => (
            <Reveal
              key={p}
              variant="fade"
              delay={i * 60}
              duration={600}
            >
              <span className="flex items-center gap-8">
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
              <h2 className="h-serif mt-3 text-[34px] font-bold leading-[1.1] tracking-tight text-ink md:text-[44px]">
                Was andere über uns schreiben.
              </h2>
            </Reveal>
          </div>
          <Reveal variant="up" delay={200} duration={800}>
            <p className="max-w-md text-[15px] leading-relaxed text-ink-500">
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
                className="grid grid-cols-[110px_1fr_auto] items-center gap-5 border-b border-line py-6 transition-colors hover:text-rot md:grid-cols-[140px_1fr_auto] md:py-7"
              >
                <div className="text-[12px] font-semibold uppercase tracking-kicker text-ink-400">
                  {p.date}
                </div>
                <div>
                  <div className="text-[12px] font-semibold uppercase tracking-kicker text-rot">
                    {p.outlet}
                  </div>
                  <h3 className="h-serif mt-1 text-[17px] font-bold leading-snug text-ink md:text-[19px]">
                    {p.headline}
                  </h3>
                </div>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  className="text-ink-300 transition-transform duration-200 group-hover:translate-x-1"
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
