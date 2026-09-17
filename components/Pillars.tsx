"use client";

import { PILLARS } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

export function Pillars() {
  return (
    <section id="verein" className="section bg-white">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal variant="up" duration={700}>
            <div className="kicker">Unser Auftrag</div>
          </Reveal>
          <Reveal variant="up" delay={100} duration={800}>
            <h2 className="h-serif mt-3 text-[28px] font-bold leading-[1.1] tracking-tight text-ink sm:text-[34px] md:text-[44px]">
              Drei Sätze, die alles tragen.
            </h2>
          </Reveal>
          <Reveal variant="up" delay={220} duration={800}>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-500 sm:text-[16px]">
              Der Kältebus Saarbrücken ist ein eingetragener, gemeinnütziger
              Verein (VR 5477, Amtsgericht Saarbrücken). Getragen wird er von
              einem 10-köpfigen Vorstand und rund 50 Mitgliedern, im Netzwerk
              der AWO Saarland.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 sm:gap-6 md:mt-16 md:grid-cols-3">
          {PILLARS.map((p, i) => (
            <Reveal
              key={p.kicker}
              variant="up"
              delay={i * 130}
              duration={800}
              distance={28}
            >
              <article className="card relative flex h-full flex-col p-6 sm:p-8">
                <span className="absolute inset-x-0 top-0 h-[3px] bg-rot" />
                <div className="text-[11.5px] font-semibold uppercase tracking-kicker text-rot sm:text-[12px]">
                  {String(i + 1).padStart(2, "0")} · {p.kicker}
                </div>
                <h3 className="h-serif mt-4 text-[20px] font-bold leading-tight text-ink sm:text-[22px] md:text-[24px]">
                  {p.title}
                </h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-ink-500 sm:mt-4 sm:text-[15px]">
                  {p.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
