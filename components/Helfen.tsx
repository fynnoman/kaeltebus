"use client";

import { IMAGES } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

const roles = [
  {
    title: "Zeltschicht",
    body: "Empfang, Essensausgabe, Iglu-Zuweisung. 20:45 bis 00:00, 23:45 bis 03:00 oder 02:45 bis 06:00 Uhr.",
    tag: "3 bis 5 h · nachts",
  },
  {
    title: "Bollerwagen-Tour",
    body: "Zweimal wöchentlich zu bekannten Schlafplätzen in der Stadt. Warme Getränke, Suppe, Decken.",
    tag: "3 h · 22:30 bis 01:30",
  },
  {
    title: "Küche",
    body: "Freiwillige Köchinnen und Köche versorgen die Gäste, häufig Dippelabbes, Eintopf, Nudeln Bolognese.",
    tag: "flexibel · tagsüber",
  },
  {
    title: "Aufbau und Abbau",
    body: "Ab November: Gelände säubern, Bauzaun stellen, Zelt aufbauen. Ab Ende März: Abbau.",
    tag: "Samstage im Herbst",
  },
];

export function Helfen() {
  return (
    <section id="helfen" className="section bg-white">
      <div className="container-x">
        <div className="grid gap-12 md:grid-cols-[minmax(0,380px)_1fr] md:gap-16">
          <div>
            <Reveal variant="up" duration={700}>
              <div className="kicker">Mitmachen</div>
            </Reveal>
            <Reveal variant="up" delay={100} duration={800}>
              <h2 className="h-serif mt-3 text-[34px] font-bold leading-[1.1] tracking-tight text-ink md:text-[44px]">
                Eine Schicht,
                <br />
                nicht dein Leben.
              </h2>
            </Reveal>
            <Reveal variant="up" delay={220} duration={800}>
              <p className="mt-5 text-[15.5px] leading-relaxed text-ink-500">
                Keine feste Verpflichtung. Kein Vertrag. Zur Infoveranstaltung
                im Waldhaus (Meerwiesertalweg 84, 66121 Saarbrücken) kommen,
                den Ablauf hören, Fragen stellen. Und wenn es passt, in die
                nächste Schicht.
              </p>
            </Reveal>

            <Reveal variant="scale" delay={320} duration={900}>
              <div className="mt-8 overflow-hidden rounded-md border border-line">
                <img
                  src={IMAGES.hands}
                  alt="Ehrenamtliche Hände"
                  className="h-56 w-full object-cover"
                />
              </div>
            </Reveal>

            <Reveal variant="up" delay={420} duration={800}>
              <a
                href="mailto:info@kaeltebussaarbruecken.de?subject=Ich%20m%C3%B6chte%20helfen"
                className="btn-primary mt-8"
              >
                Zur Infoveranstaltung anmelden
              </a>
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {roles.map((r, i) => (
              <Reveal
                key={r.title}
                variant="up"
                delay={i * 110}
                duration={800}
                distance={22}
              >
                <div className="card h-full p-7 md:p-8">
                  <div className="flex items-baseline justify-between text-[11px] font-semibold uppercase tracking-kicker">
                    <span className="text-rot">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-ink-400">{r.tag}</span>
                  </div>
                  <h3 className="h-serif mt-5 text-[20px] font-bold leading-tight text-ink md:text-[22px]">
                    {r.title}
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-ink-500">
                    {r.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
