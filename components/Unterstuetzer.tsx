"use client";

import { UNTERSTUETZER } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

export function Unterstuetzer() {
  return (
    <section className="section bg-paper-100">
      <div className="container-x">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <Reveal variant="up" duration={700}>
              <div className="kicker">Danke an unsere Unterstützer</div>
            </Reveal>
            <Reveal variant="up" delay={100} duration={800}>
              <h2 className="h-serif mt-3 text-[28px] font-bold leading-[1.1] tracking-tight text-ink sm:text-[34px] md:text-[44px]">
                Ohne Sie kein Kältebus.
              </h2>
            </Reveal>
          </div>
          <Reveal variant="up" delay={200} duration={800}>
            <p className="max-w-md text-[14.5px] leading-relaxed text-ink-500 sm:text-[15px]">
              Schulen, Firmen, Vereine, Kirchengemeinden und Motorradclubs
              tragen jeden Winter unsere Arbeit mit. Ein paar Momente aus der
              aktuellen Saison, stellvertretend für viele weitere.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-6 md:mt-16 md:grid-cols-2">
          {UNTERSTUETZER.map((u, i) => (
            <Reveal
              key={u.name}
              variant="up"
              delay={i * 140}
              duration={800}
              distance={26}
            >
              <article className="card flex h-full flex-col overflow-hidden">
                <div className="relative">
                  <img
                    src={u.image}
                    alt={`Spendenübergabe ${u.name} an den Kältebus Saarbrücken`}
                    className="h-[240px] w-full object-cover sm:h-[320px] md:h-[380px]"
                  />
                  <div className="absolute right-3 top-3 bg-rot px-3 py-1.5 text-[12.5px] font-semibold text-white shadow-card sm:right-4 sm:top-4 sm:text-[13px]">
                    {u.amount}
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-7 md:p-8">
                  <div className="text-[11.5px] font-semibold uppercase tracking-kicker text-rot sm:text-[12px]">
                    {u.kicker}
                  </div>
                  <h3 className="h-serif mt-3 text-[20px] font-bold leading-tight text-ink sm:mt-4 sm:text-[22px] md:text-[24px]">
                    {u.name}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-ink-500 sm:text-[14.5px]">
                    {u.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal variant="up" delay={300} duration={800}>
          <div className="infobox mt-8 text-[13.5px] leading-relaxed text-ink-600 sm:mt-10 sm:text-[14px]">
            <strong>Sie oder Ihr Unternehmen möchten helfen?</strong> Melden
            Sie sich per E-Mail an{" "}
            <a
              href="mailto:info@kaeltebussaarbruecken.de"
              className="text-rot hover:underline"
            >
              info@kaeltebussaarbruecken.de
            </a>
            .
          </div>
        </Reveal>
      </div>
    </section>
  );
}
