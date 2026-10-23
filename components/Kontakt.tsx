"use client";

import { SITE } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

export function Kontakt() {
  return (
    <section id="kontakt" className="section bg-paper-100">
      <div className="container-x">
        <div className="grid gap-10 md:grid-cols-[minmax(0,380px)_1fr] md:gap-16">
          <div>
            <Reveal variant="up" duration={700}>
              <div className="kicker">Kontakt</div>
            </Reveal>
            <Reveal variant="up" delay={100} duration={800}>
              <h2 className="h-serif mt-3 text-[28px] font-bold leading-[1.1] tracking-tight text-ink sm:text-[34px] md:text-[44px]">
                Schreiben Sie uns.
              </h2>
            </Reveal>
            <Reveal variant="up" delay={220} duration={800}>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-500 sm:mt-5 sm:text-[15.5px]">
                Für Spenden, Ehrenamt, Presse oder allgemeine Fragen erreichen
                Sie uns am schnellsten per E-Mail.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
            <Reveal
              variant="up"
              duration={800}
              distance={22}
              className="sm:col-span-2"
            >
              <div className="card min-w-0 p-6 sm:p-7 md:p-8">
                <div className="text-[11.5px] font-semibold uppercase tracking-kicker text-rot sm:text-[12px]">
                  E-Mail-Adressen
                </div>
                <p className="mt-3 text-[13.5px] leading-relaxed text-ink-500 sm:text-[14px]">
                  Jedes Thema hat ein eigenes Postfach. So landet Ihre Nachricht
                  schneller bei der richtigen Person.
                </p>
                <ul className="mt-5 divide-y divide-line border-t border-line sm:mt-6">
                  {SITE.emails.map((e) => (
                    <li
                      key={e.key}
                      className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                    >
                      <div className="min-w-0">
                        <div className="text-[11.5px] font-semibold uppercase tracking-kicker text-rot sm:text-[12px]">
                          {e.label}
                        </div>
                        <div className="mt-1 text-[13px] leading-snug text-ink-500 sm:text-[13.5px]">
                          {e.note}
                        </div>
                      </div>
                      <a
                        href={`mailto:${e.address}`}
                        className="break-all font-sans text-[14px] font-semibold leading-snug tracking-tight text-ink hover:text-rot sm:text-[15px] md:text-[15.5px]"
                      >
                        {e.address}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal variant="up" delay={120} duration={800} distance={22}>
              <div className="card flex h-full min-w-0 flex-col p-6 sm:p-7 md:p-8">
                <div className="text-[11.5px] font-semibold uppercase tracking-kicker text-rot sm:text-[12px]">
                  Vereinssitz
                </div>
                <div className="h-serif mt-4 break-words text-[17px] font-bold leading-snug text-ink sm:mt-5 sm:text-[19px]">
                  {SITE.address.street}
                  <br />
                  {SITE.address.zip} {SITE.address.city}
                </div>
                <div className="mt-4 text-[13px] text-ink-500 sm:text-[13.5px]">
                  {SITE.register}
                </div>
              </div>
            </Reveal>

            <Reveal variant="up" delay={240} duration={800} distance={22}>
              <div className="card flex h-full min-w-0 flex-col p-6 sm:p-7 md:p-8">
                <div className="text-[11.5px] font-semibold uppercase tracking-kicker text-rot sm:text-[12px]">
                  Standort
                </div>
                <div className="h-serif mt-4 break-words text-[17px] font-bold leading-snug text-ink sm:mt-5 sm:text-[19px]">
                  {SITE.standort.location}
                  <br />
                  <span className="font-normal text-[14px] text-ink-500 sm:text-[15px]">
                    {SITE.standort.detail}
                  </span>
                </div>
                <div className="mt-4 text-[13px] text-ink-500 sm:text-[13.5px]">
                  {SITE.standort.tram} · {SITE.standort.season}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
