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
                Reden. Zuhören. Handeln.
              </h2>
            </Reveal>
            <Reveal variant="up" delay={220} duration={800}>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-500 sm:mt-5 sm:text-[15.5px]">
                Vier Ansprechpartnerinnen und Ansprechpartner, klar sortiert
                nach Thema. So landet Ihre Frage direkt bei der richtigen
                Person. Und nicht in einer Warteschleife.
              </p>
            </Reveal>

            <Reveal variant="up" delay={320} duration={800}>
              <div className="mt-8 space-y-4 text-[14.5px] leading-relaxed text-ink-600">
                <div>
                  <div className="text-[12px] font-semibold uppercase tracking-kicker text-rot">
                    E-Mail
                  </div>
                  <a
                    href="mailto:info@kaeltebussaarbruecken.de"
                    className="mt-1 block text-ink hover:text-rot"
                  >
                    info@kaeltebussaarbruecken.de
                  </a>
                </div>
                <div>
                  <div className="text-[12px] font-semibold uppercase tracking-kicker text-rot">
                    Vereinssitz
                  </div>
                  <div className="mt-1">
                    {SITE.address.street}
                    <br />
                    {SITE.address.zip} {SITE.address.city}
                  </div>
                </div>
                <div>
                  <div className="text-[12px] font-semibold uppercase tracking-kicker text-rot">
                    Register
                  </div>
                  <div className="mt-1">Amtsgericht Saarbrücken · VR 5477</div>
                  <div>Als gemeinnützig anerkannt.</div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
            {SITE.phones.map((p, i) => (
              <Reveal
                key={p.number}
                variant="up"
                delay={i * 100}
                duration={800}
                distance={22}
              >
                <a
                  href={`tel:+49${p.number.replace(/\s|^0/g, "")}`}
                  className="card flex h-full flex-col p-6 sm:p-7 md:p-8"
                >
                  <div className="text-[11.5px] font-semibold uppercase tracking-kicker text-rot sm:text-[12px]">
                    {p.label}
                  </div>
                  <div className="h-serif mt-4 text-[20px] font-bold leading-none tracking-tight text-ink sm:mt-5 sm:text-[22px] md:text-[24px]">
                    {p.number}
                  </div>
                  <div className="mt-5 inline-flex items-center gap-2 text-[13px] text-ink-500 sm:mt-6">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path
                        d="M3 3h3l1 3-2 1a7 7 0 0 0 3 3l1-2 3 1v3a1 1 0 0 1-1 1A10 10 0 0 1 2 4a1 1 0 0 1 1-1Z"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Direkt anrufen
                  </div>
                </a>
              </Reveal>
            ))}

            <Reveal
              variant="up"
              delay={SITE.phones.length * 100}
              duration={800}
              distance={22}
              className="sm:col-span-2"
            >
              <div className="card p-6 sm:p-7 md:p-8">
                <div className="text-[11.5px] font-semibold uppercase tracking-kicker text-rot sm:text-[12px]">
                  Kältedorf am Römerkastell
                </div>
                <div className="h-serif mt-3 text-[18px] font-bold leading-snug text-ink sm:text-[20px] md:text-[22px]">
                  {SITE.kaeltedorf.location}
                  <br />
                  <span className="font-normal text-[14.5px] text-ink-500 sm:text-[16px]">
                    {SITE.kaeltedorf.detail}
                  </span>
                </div>
                <div className="mt-4 text-[13px] text-ink-500 sm:text-[13.5px]">
                  {SITE.kaeltedorf.tram} · {SITE.kaeltedorf.open} ·{" "}
                  {SITE.kaeltedorf.season}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
