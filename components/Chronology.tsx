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
              <h2 className="h-serif mt-3 text-[28px] font-bold leading-[1.1] tracking-tight text-ink sm:text-[34px] md:text-[44px]">
                Elf Winter, die zählen.
              </h2>
            </Reveal>
          </div>
          <Reveal variant="up" delay={200} duration={800}>
            <p className="max-w-md text-[15px] leading-relaxed text-ink-500 sm:text-[15.5px]">
              Von einem ausrangierten Gliederbus zu einem beheizten Kältedorf
              mit 40 Schlafplätzen. Eine Chronik.
            </p>
          </Reveal>
        </div>

        <ol className="mt-10 border-t border-line sm:mt-14">
          {CHRONO.map((c, i) => (
            <Reveal
              key={c.year}
              as="li"
              variant={i % 2 === 0 ? "left" : "right"}
              distance={24}
              duration={800}
              delay={40}
            >
              <div className="grid gap-3 border-b border-line py-7 sm:gap-4 sm:py-8 md:grid-cols-[160px_1fr] md:gap-10 md:py-10">
                <div className="text-[13px] font-semibold uppercase tracking-kicker text-rot sm:text-[14px]">
                  {c.year}
                </div>
                <div>
                  <h3 className="h-serif text-[18px] font-bold leading-snug text-ink sm:text-[20px] md:text-[22px]">
                    {c.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-[14.5px] leading-relaxed text-ink-500 sm:text-[15.5px]">
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
