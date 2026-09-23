"use client";

import Link from "next/link";
import { IMAGES, SITE } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

export function Winter() {
  return (
    <section className="section bg-paper-100">
      <div className="container-x">
        <div className="grid gap-10 md:grid-cols-[1fr_1.1fr] md:items-center md:gap-16">
          <Reveal variant="up" duration={800} distance={26}>
            <div className="overflow-hidden rounded-md border border-line bg-white shadow-card">
              <img
                src={IMAGES.tent}
                alt="Warme Küche am Kältebus am Römerkastell"
                className="h-[260px] w-full object-cover sm:h-[380px] md:h-[460px]"
              />
            </div>
          </Reveal>

          <div>
            <Reveal variant="up" duration={700}>
              <div className="kicker-line">Der Winter am Römerkastell</div>
            </Reveal>
            <Reveal variant="up" delay={100} duration={800}>
              <h2 className="h-serif mt-4 text-[28px] font-bold leading-[1.1] tracking-tight text-ink sm:text-[34px] md:text-[42px]">
                Ein beheizter Ort, wenn draußen alles gefriert.
              </h2>
            </Reveal>
            <Reveal variant="up" delay={180} duration={700}>
              <span className="rule-accent mt-6" />
            </Reveal>
            <Reveal variant="up" delay={260} duration={800}>
              <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-ink-500 sm:text-[16px]">
                Der Kältebus steht jeden Winter am Römerkastell in Saarbrücken.
                Wer hierher kommt, findet einen beheizten Ort, eine warme
                Mahlzeit und Menschen, die zuhören. Ohne Bedürftigkeitsprüfung,
                unabhängig von Herkunft, Aufenthaltsstatus oder Vorgeschichte.
              </p>
            </Reveal>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 sm:gap-6">
              <Reveal variant="up" delay={340} duration={700}>
                <div>
                  <div className="text-[11.5px] font-semibold uppercase tracking-kicker text-rot sm:text-[12px]">
                    Standort
                  </div>
                  <div className="mt-2 text-[14px] leading-snug text-ink-600 sm:text-[14.5px]">
                    {SITE.standort.location}
                    <br />
                    {SITE.standort.detail}
                  </div>
                </div>
              </Reveal>
              <Reveal variant="up" delay={420} duration={700}>
                <div>
                  <div className="text-[11.5px] font-semibold uppercase tracking-kicker text-rot sm:text-[12px]">
                    Anreise
                  </div>
                  <div className="mt-2 text-[14px] leading-snug text-ink-600 sm:text-[14.5px]">
                    {SITE.standort.tram}
                    <br />
                    Saison: {SITE.standort.season}
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal variant="up" delay={520} duration={700}>
              <div className="mt-8 flex flex-col gap-2.5 sm:flex-row sm:gap-3">
                <Link href="/verein" className="btn-secondary w-full sm:w-auto">
                  Unser Auftrag
                </Link>
                <Link href="/helfen" className="btn-secondary w-full sm:w-auto">
                  Ehrenamt
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
