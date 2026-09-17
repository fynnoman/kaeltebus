"use client";

import { BEDARF } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

export function Bedarf() {
  return (
    <section id="bedarf" className="section bg-paper-100">
      <div className="container-x">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <Reveal variant="up" duration={700}>
              <div className="kicker">Aktuelle Bedarfsliste</div>
            </Reveal>
            <Reveal variant="up" delay={100} duration={800}>
              <h2 className="h-serif mt-3 text-[28px] font-bold leading-[1.1] tracking-tight text-ink sm:text-[34px] md:text-[44px]">
                Was gerade gebraucht wird.
              </h2>
            </Reveal>
          </div>
          <Reveal variant="up" delay={200} duration={800}>
            <p className="max-w-md text-[14.5px] leading-relaxed text-ink-500 sm:text-[15px]">
              Die Liste wird jede Saison gepflegt. Ein festes Spendenwochenende
              gibt Rhythmus zur Annahme, in der laufenden Saison bitte kurz per
              WhatsApp anmelden.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-6 md:grid-cols-2">
          <Reveal variant="left" duration={800} distance={30}>
            <div className="h-full border border-line bg-white p-6 sm:p-8 md:p-10">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-rot text-white">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M3 7.5 6 10.5 11.5 4"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div>
                  <div className="text-[12px] font-semibold uppercase tracking-kicker text-rot">
                    wir nehmen an
                  </div>
                  <div className="h-serif text-[18px] font-bold leading-tight text-ink sm:text-[20px]">
                    Diese Spenden helfen sofort
                  </div>
                </div>
              </div>
              <ul className="mt-6 space-y-3">
                {BEDARF.yes.map((y, i) => (
                  <Reveal
                    key={y}
                    as="li"
                    variant="up"
                    delay={i * 60}
                    duration={600}
                    distance={12}
                  >
                    <div className="flex items-start gap-3 text-[14.5px] leading-relaxed text-ink-600">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        className="mt-0.5 flex-none text-rot"
                        fill="none"
                      >
                        <path
                          d="M3 8.5 6.5 12 13 4.5"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {y}
                    </div>
                  </Reveal>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal variant="right" duration={800} distance={30}>
            <div className="h-full border border-line bg-white p-6 sm:p-8 md:p-10">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-ink-200 text-ink-500">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M3.5 3.5 10.5 10.5M10.5 3.5 3.5 10.5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <div>
                  <div className="text-[12px] font-semibold uppercase tracking-kicker text-ink-400">
                    bitte nicht
                  </div>
                  <div className="h-serif text-[18px] font-bold leading-tight text-ink sm:text-[20px]">
                    Diese Spenden können wir nicht annehmen
                  </div>
                </div>
              </div>
              <ul className="mt-6 space-y-3">
                {BEDARF.no.map((n, i) => (
                  <Reveal
                    key={n}
                    as="li"
                    variant="up"
                    delay={i * 60}
                    duration={600}
                    distance={12}
                  >
                    <div className="flex items-start gap-3 text-[14.5px] leading-relaxed text-ink-500">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        className="mt-0.5 flex-none text-ink-300"
                        fill="none"
                      >
                        <path
                          d="M4 4l8 8M12 4l-8 8"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                        />
                      </svg>
                      {n}
                    </div>
                  </Reveal>
                ))}
              </ul>
              <Reveal variant="up" delay={200} duration={700}>
                <div className="infobox mt-8 text-[13.5px] leading-relaxed text-ink-600">
                  <strong>Wichtig:</strong> Wir unterhalten keine Kleiderkammer.
                  Kleidung wird gezielt in passender Größe aus Geldspenden
                  gekauft, damit jede Person genau das bekommt, was passt.
                </div>
              </Reveal>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
