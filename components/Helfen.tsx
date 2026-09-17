"use client";

import { IMAGES, SITE } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

export function Helfen() {
  return (
    <section id="helfen" className="section bg-white">
      <div className="container-x">
        <div className="grid gap-10 md:grid-cols-[minmax(0,380px)_1fr] md:gap-16">
          <div>
            <Reveal variant="up" duration={700}>
              <div className="kicker">Mitmachen</div>
            </Reveal>
            <Reveal variant="up" delay={100} duration={800}>
              <h2 className="h-serif mt-3 text-[28px] font-bold leading-[1.1] tracking-tight text-ink sm:text-[34px] md:text-[44px]">
                Ehrenamtlich helfen.
              </h2>
            </Reveal>
            <Reveal variant="up" delay={220} duration={800}>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-500 sm:mt-5 sm:text-[15.5px]">
                Der Verein arbeitet ausschließlich ehrenamtlich. Wer sich
                einbringen möchte, meldet sich per E-Mail und bekommt alle
                Informationen zum Ablauf.
              </p>
            </Reveal>

            <Reveal variant="scale" delay={320} duration={900}>
              <div className="mt-8 overflow-hidden rounded-md border border-line">
                <img
                  src={IMAGES.hands}
                  alt="Warmes Essen wird für das Kältedorf angeliefert"
                  className="h-64 w-full object-cover md:h-72"
                />
              </div>
            </Reveal>

            <Reveal variant="up" delay={420} duration={800}>
              <a
                href={`mailto:${SITE.contact.email}?subject=Ich%20m%C3%B6chte%20helfen`}
                className="btn-primary mt-8 w-full sm:w-auto"
              >
                Per E-Mail melden
              </a>
            </Reveal>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
            {[
              {
                title: "Im Kältedorf mitarbeiten",
                body: "Empfang, Ausgabe, ansprechbar sein für die Menschen, die kommen.",
              },
              {
                title: "In der Küche unterstützen",
                body: "Freiwillige kochen für eine Nacht im Kältedorf.",
              },
              {
                title: "Aufbau und Abbau",
                body: "Zu Saisonbeginn und Saisonende packen alle Hände mit an.",
              },
              {
                title: "Materiell unterstützen",
                body: "Aktuelle Bedarfsliste ansehen und direkt beitragen.",
              },
            ].map((r, i) => (
              <Reveal
                key={r.title}
                variant="up"
                delay={i * 110}
                duration={800}
                distance={22}
              >
                <div className="card h-full p-6 sm:p-7 md:p-8">
                  <div className="text-[10.5px] font-semibold uppercase tracking-kicker text-rot sm:text-[11px]">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="h-serif mt-4 text-[18px] font-bold leading-tight text-ink sm:mt-5 sm:text-[20px] md:text-[22px]">
                    {r.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-ink-500 sm:text-[14.5px]">
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
