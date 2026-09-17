"use client";

import { ABLAUF, IMAGES } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

export function Ablauf() {
  return (
    <section id="kaeltedorf" className="section bg-white">
      <div className="container-x">
        <div className="grid gap-12 md:grid-cols-[minmax(0,400px)_1fr] md:gap-16">
          <div>
            <Reveal variant="up" duration={700}>
              <div className="kicker">Eine Nacht im Kältedorf</div>
            </Reveal>
            <Reveal variant="up" delay={100} duration={800}>
              <h2 className="h-serif mt-3 text-[34px] font-bold leading-[1.1] tracking-tight text-ink md:text-[44px]">
                21 bis 6 Uhr.
                <br />
                Jede Nacht.
              </h2>
            </Reveal>
            <Reveal variant="up" delay={220} duration={800}>
              <p className="mt-5 text-[15.5px] leading-relaxed text-ink-500">
                Ein beheiztes Zelt über 100 m². Individuelle Schlaf-Iglus.
                Warme Küche. Und zweimal pro Woche zieht ein zweites Team mit
                Bollerwagen durch die Stadt zu den Menschen, die den Weg zum
                Zelt nicht mehr schaffen.
              </p>
            </Reveal>

            <Reveal variant="scale" delay={320} duration={900}>
              <div className="mt-8 overflow-hidden rounded-md border border-line">
                <img
                  src={IMAGES.tent}
                  alt="Warme Küche im Kältedorf am Römerkastell"
                  className="h-72 w-full object-cover md:h-80"
                />
                <div className="border-t border-line bg-paper-100 px-5 py-4 text-[13px] text-ink-500">
                  Warme Küche im Container. Standort: Am Römerkastell (Mainzer
                  Straße / Ecke Halbergstraße), Saarbahn-Haltestelle
                  Römerkastell.
                </div>
              </div>
            </Reveal>
          </div>

          <ol className="space-y-4">
            {ABLAUF.map((a, i) => (
              <Reveal
                key={a.time}
                as="li"
                variant="up"
                delay={i * 90}
                duration={700}
                distance={20}
              >
                <div className="card grid grid-cols-[90px_1fr] items-start gap-5 p-6 md:grid-cols-[110px_1fr] md:p-7">
                  <div>
                    <div className="text-[11.5px] font-semibold uppercase tracking-kicker text-rot">
                      Schritt {i + 1}
                    </div>
                    <div className="h-serif mt-1 text-[22px] font-bold leading-none text-ink md:text-[24px]">
                      {a.time}
                    </div>
                  </div>
                  <div>
                    <h3 className="h-serif text-[17px] font-bold leading-snug text-ink md:text-[18px]">
                      {a.title}
                    </h3>
                    <p className="mt-2 text-[14.5px] leading-relaxed text-ink-500">
                      {a.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
