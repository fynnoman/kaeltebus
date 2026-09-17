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
              <h2 className="h-serif mt-3 text-[34px] font-bold leading-[1.1] tracking-tight text-ink md:text-[44px]">
                Ohne Sie kein Kältedorf.
              </h2>
            </Reveal>
          </div>
          <Reveal variant="up" delay={200} duration={800}>
            <p className="max-w-md text-[15px] leading-relaxed text-ink-500">
              Schulen, Firmen, Vereine, Kirchengemeinden und Motorradclubs
              tragen jeden Winter unsere Arbeit mit. Ein paar Momente aus der
              aktuellen Saison, stellvertretend für viele weitere.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 md:mt-16">
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
                    className="h-[320px] w-full object-cover md:h-[380px]"
                  />
                  <div className="absolute right-4 top-4 bg-rot px-3 py-1.5 text-[13px] font-semibold text-white shadow-card">
                    {u.amount}
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-7 md:p-8">
                  <div className="flex items-center justify-between text-[12px] font-semibold uppercase tracking-kicker">
                    <span className="text-rot">{u.kicker}</span>
                    <span className="text-ink-400">{u.date}</span>
                  </div>
                  <h3 className="h-serif mt-4 text-[22px] font-bold leading-tight text-ink md:text-[24px]">
                    {u.name}
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-ink-500">
                    {u.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal variant="up" delay={300} duration={800}>
          <div className="infobox mt-10 text-[14px] leading-relaxed text-ink-600">
            <strong>Sie oder Ihr Unternehmen möchten helfen?</strong> Wir
            freuen uns über jede Spende, ob Geld, Sachwerte oder eine gekochte
            Mahlzeit im Kältedorf. Melden Sie sich bei Phil Sahner oder unserem
            Team unter <a href="tel:+4915156349143" className="text-rot hover:underline">0151 5634 9143</a>{" "}
            oder{" "}
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
