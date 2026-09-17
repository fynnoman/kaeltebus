"use client";

import { CHRONO } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

export function Chronology() {
  return (
    <section className="section bg-paper-100">
      <div className="container-x">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <Reveal variant="up" duration={700}>
              <div className="kicker">Chronik</div>
            </Reveal>
            <Reveal variant="up" delay={100} duration={800}>
              <h2 className="h-serif mt-3 text-[34px] font-bold leading-[1.1] tracking-tight text-ink md:text-[44px]">
                Elf Winter, die zählen.
              </h2>
            </Reveal>
          </div>
          <Reveal variant="up" delay={200} duration={800}>
            <p className="max-w-md text-[15.5px] leading-relaxed text-ink-500">
              Von einem ausrangierten Gliederbus zu einem beheizten Kältedorf
              mit 40 Schlafplätzen. Eine Chronik.
            </p>
          </Reveal>
        </div>

        <ol className="mt-14 border-t border-line">
          {CHRONO.map((c, i) => (
            <Reveal
              key={c.year}
              as="li"
              variant={i % 2 === 0 ? "left" : "right"}
              distance={24}
              duration={800}
              delay={40}
            >
              <div className="grid gap-4 border-b border-line py-8 md:grid-cols-[160px_1fr] md:gap-10 md:py-10">
                <div className="text-[14px] font-semibold uppercase tracking-kicker text-rot">
                  {c.year}
                </div>
                <div>
                  <h3 className="h-serif text-[20px] font-bold leading-snug text-ink md:text-[22px]">
                    {c.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-[15.5px] leading-relaxed text-ink-500">
                    {c.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
