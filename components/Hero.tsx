"use client";

import Link from "next/link";
import { SITE, IMAGES } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

export function Hero() {
  return (
    <section id="top" className="relative bg-paper-100">
      <div className="container-x grid gap-10 py-12 sm:py-16 md:grid-cols-[1.05fr_1fr] md:gap-16 md:py-24">
        <div className="flex flex-col justify-center">
          <Reveal variant="up" duration={600}>
            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-rot/25 bg-white px-3.5 py-1.5 text-[12px] font-semibold text-rot sm:text-[12.5px]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-rot/60" />
                <span className="relative h-2 w-2 rounded-full bg-rot" />
              </span>
              {SITE.name}
            </div>
          </Reveal>

          <Reveal variant="up" delay={80} duration={800}>
            <h1 className="display-serif text-[40px] text-ink sm:text-[56px] md:text-[76px] lg:text-[88px]">
              Ein warmer
              <br />
              Schlafplatz
              <br />
              <span className="italic text-rot">rettet Leben.</span>
            </h1>
          </Reveal>

          <Reveal variant="up" delay={200} duration={800}>
            <p className="mt-5 max-w-xl text-[15.5px] leading-relaxed text-ink-500 sm:text-[17px]">
              Jeden Winter am Römerkastell. Ein beheizter Ort für obdachlose
              und bedürftige Menschen. Ohne Bedürftigkeitsprüfung, unabhängig
              von Herkunft, Aufenthaltsstatus oder Vorgeschichte.
            </p>
          </Reveal>

          <Reveal variant="up" delay={320} duration={800}>
            <div className="mt-7 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-3">
              <Link href="/spenden" className="btn-primary w-full sm:w-auto">
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
              </Link>
              <Link href="/helfen" className="btn-secondary w-full sm:w-auto">
                Ehrenamtlich helfen
              </Link>
            </div>
          </Reveal>

          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            <Reveal variant="up" delay={440} duration={700}>
              <div className="text-[11.5px] font-semibold uppercase tracking-kicker text-rot">
                Standort
              </div>
              <div className="mt-1 whitespace-pre-line text-[13.5px] leading-snug text-ink-600 sm:text-[14px]">
                Am Römerkastell{"\n"}66121 Saarbrücken
              </div>
            </Reveal>
            <Reveal variant="up" delay={520} duration={700}>
              <div className="text-[11.5px] font-semibold uppercase tracking-kicker text-rot">
                Rechtsform
              </div>
              <div className="mt-1 whitespace-pre-line text-[13.5px] leading-snug text-ink-600 sm:text-[14px]">
                Gemeinnütziger Verein{"\n"}VR 5477, Amtsgericht Saarbrücken
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal variant="left" duration={900} distance={40}>
          <div className="frame-offset pb-8 md:pb-0 md:pr-8">
            <div className="frame-inner overflow-hidden rounded-md border border-line bg-white shadow-card">
              <img
                src={IMAGES.hero}
                alt="Am Kältebus am Römerkastell in Saarbrücken"
                className="h-[260px] w-full object-cover sm:h-[380px] md:h-[540px]"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
