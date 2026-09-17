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
              <h2 className="h-serif mt-3 text-[28px] font-bold leading-[1.1] tracking-tight text-ink sm:text-[34px] md:text-[44px]">
                Wenn wir nicht die richtige Tür sind.
              </h2>
            </Reveal>
          </div>
          <Reveal variant="up" delay={200} duration={800}>
            <p className="max-w-md text-[14.5px] leading-relaxed text-ink-500 sm:text-[15px]">
              Wir sind ein Baustein. Für tagsüber, das ganze Jahr, für
              stationäre Hilfe oder Kleidung gibt es andere Anlaufstellen in
              der Stadt. Hier ist die Übersicht.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-6 md:mt-16 md:grid-cols-2">
          {HILFESYSTEM.map((h, i) => (
            <Reveal
              key={h.name}
              variant="up"
              delay={i * 90}
              duration={800}
              distance={22}
            >
              <div className="card h-full p-6 sm:p-7 md:p-8">
                <div className="text-[11.5px] font-semibold uppercase tracking-kicker text-rot sm:text-[12px]">
                  Angebot
                </div>
                <h3 className="h-serif mt-3 text-[17px] font-bold leading-tight text-ink sm:text-[19px] md:text-[21px]">
                  {h.name}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-500 sm:text-[14.5px]">
                  {h.role}
                </p>
                <p className="mt-4 border-t border-line pt-4 text-[13px] leading-relaxed text-ink-500 sm:text-[13.5px]">
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
