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
            <Reveal variant="up" duration={800} distance={22}>
              <a
                href={`mailto:${SITE.contact.email}`}
                className="card flex h-full min-w-0 flex-col p-6 sm:p-7 md:p-8"
              >
                <div className="text-[11.5px] font-semibold uppercase tracking-kicker text-rot sm:text-[12px]">
                  E-Mail
                </div>
                <div className="mt-4 break-all font-sans text-[15px] font-semibold leading-snug tracking-tight text-ink sm:mt-5 sm:text-[16px] md:text-[17px]">
                  {SITE.contact.email}
                </div>
                <div className="mt-5 inline-flex items-center gap-2 text-[13px] text-ink-500 sm:mt-6">
                  Direkt schreiben
                </div>
              </a>
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

            <Reveal
              variant="up"
              delay={240}
              duration={800}
              distance={22}
              className="sm:col-span-2"
            >
              <div className="card min-w-0 p-6 sm:p-7 md:p-8">
                <div className="text-[11.5px] font-semibold uppercase tracking-kicker text-rot sm:text-[12px]">
                  Standort
                </div>
                <div className="h-serif mt-3 break-words text-[18px] font-bold leading-snug text-ink sm:text-[20px] md:text-[22px]">
                  {SITE.standort.location}
                  <br />
                  <span className="font-normal text-[14.5px] text-ink-500 sm:text-[16px]">
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
