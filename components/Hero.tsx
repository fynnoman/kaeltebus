"use client";

import { SITE, IMAGES } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

export function Hero() {
  return (
    <section id="top" className="relative bg-paper-100">
      <div className="container-x grid gap-12 py-16 md:grid-cols-[1.05fr_1fr] md:gap-16 md:py-24">
        <div className="flex flex-col justify-center">
          <Reveal variant="up" duration={600}>
            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-rot/25 bg-white px-4 py-1.5 text-[12.5px] font-semibold text-rot">
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-rot/60" />
                <span className="relative h-2 w-2 rounded-full bg-rot" />
              </span>
              Kältedorf 2025 / 26 geöffnet
            </div>
          </Reveal>

          <Reveal variant="up" delay={80} duration={800}>
            <h1 className="h-serif text-[42px] font-bold leading-[1.08] tracking-tight text-ink md:text-[56px]">
              Ein warmer Schlafplatz
              <br />
              <span className="text-rot">rettet Leben.</span>
            </h1>
          </Reveal>

          <Reveal variant="up" delay={200} duration={800}>
            <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-ink-500">
              Seit 2014 betreibt der {SITE.name} jeden Winter am Römerkastell
              ein beheiztes Kältedorf mit Schlaf-Iglus, warmer Mahlzeit und
              aufsuchender Hilfe. Ohne Bedürftigkeitsprüfung, unabhängig von
              Herkunft, Aufenthaltsstatus oder Vorgeschichte.
            </p>
          </Reveal>

          <Reveal variant="up" delay={320} duration={800}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#spenden" className="btn-primary">
                Jetzt spenden
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M2 7h10m0 0L8 3m4 4L8 11"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a href="#helfen" className="btn-secondary">
                Ehrenamtlich helfen
              </a>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              {
                label: "Standort",
                body: "Am Römerkastell\n66121 Saarbrücken",
              },
              {
                label: "Saison",
                body: "Mitte Dezember bis\nEnde März",
              },
              {
                label: "Öffnung",
                body: "Täglich\n21:00 bis 06:00 Uhr",
              },
            ].map((k, i) => (
              <Reveal
                key={k.label}
                variant="up"
                delay={440 + i * 80}
                duration={700}
              >
                <div className="text-[12px] font-semibold uppercase tracking-kicker text-rot">
                  {k.label}
                </div>
                <div className="mt-1 whitespace-pre-line text-[14px] leading-snug text-ink-600">
                  {k.body}
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal variant="left" duration={900} distance={40}>
          <div className="relative">
            <div className="overflow-hidden rounded-md border border-line bg-white shadow-card">
              <img
                src={IMAGES.hero}
                alt="Winternacht in Saarbrücken"
                className="h-[380px] w-full object-cover md:h-[520px]"
              />
            </div>
            <Reveal variant="up" delay={400} duration={700}>
              <div className="absolute -bottom-6 left-6 right-6 bg-white p-5 shadow-card md:-bottom-8 md:left-10 md:right-16 md:p-6">
                <div className="text-[12px] font-semibold uppercase tracking-kicker text-rot">
                  Notruf & Meldung
                </div>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-600">
                  Wenn Sie einen Menschen in der Kälte antreffen: bitte
                  ansprechen. Im Notfall sofort die <strong>112</strong>{" "}
                  anrufen. Für Hinweise an das Team: Öffentlichkeitsarbeit{" "}
                  <strong>0151 5634 8029</strong>.
                </p>
              </div>
            </Reveal>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
