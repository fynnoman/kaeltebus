"use client";

import { HILFESYSTEM } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

export function Netz() {
  return (
    <section className="section bg-white">
      <div className="container-x">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <Reveal variant="up" duration={700}>
              <div className="kicker">Weitere Hilfe in Saarbrücken</div>
            </Reveal>
            <Reveal variant="up" delay={100} duration={800}>
              <h2 className="h-serif mt-3 text-[34px] font-bold leading-[1.1] tracking-tight text-ink md:text-[44px]">
                Wenn wir nicht die richtige Tür sind.
              </h2>
            </Reveal>
          </div>
          <Reveal variant="up" delay={200} duration={800}>
            <p className="max-w-md text-[15px] leading-relaxed text-ink-500">
              Wir sind ein Baustein. Für tagsüber, das ganze Jahr, für
              stationäre Hilfe oder Kleidung gibt es andere Anlaufstellen in
              der Stadt. Hier ist die Übersicht.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 md:mt-16">
          {HILFESYSTEM.map((h, i) => (
            <Reveal
              key={h.name}
              variant="up"
              delay={i * 90}
              duration={800}
              distance={22}
            >
              <div className="card h-full p-7 md:p-8">
                <div className="text-[12px] font-semibold uppercase tracking-kicker text-rot">
                  Angebot
                </div>
                <h3 className="h-serif mt-3 text-[19px] font-bold leading-tight text-ink md:text-[21px]">
                  {h.name}
                </h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-ink-500">
                  {h.role}
                </p>
                <p className="mt-4 border-t border-line pt-4 text-[13.5px] leading-relaxed text-ink-500">
                  {h.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
