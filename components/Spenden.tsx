"use client";

import { useState } from "react";
import { SITE } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

function CopyableIban() {
  const [copied, setCopied] = useState(false);

  const handle = async () => {
    try {
      await navigator.clipboard.writeText(SITE.bank.iban.replace(/\s+/g, ""));
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* noop */
    }
  };

  return (
    <button
      onClick={handle}
      className="mt-2 inline-flex items-center gap-2 rounded border border-line bg-white px-3 py-2 text-left font-mono text-[13.5px] tracking-wider text-ink hover:border-rot"
    >
      {SITE.bank.iban}
      <span className="text-[11px] uppercase tracking-kicker text-rot">
        {copied ? "Kopiert" : "Kopieren"}
      </span>
    </button>
  );
}

export function Spenden() {
  return (
    <section id="spenden" className="section bg-white">
      <div className="container-x">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <Reveal variant="up" duration={700}>
              <div className="kicker">Drei Wege zu helfen</div>
            </Reveal>
            <Reveal variant="up" delay={100} duration={800}>
              <h2 className="h-serif mt-3 text-[34px] font-bold leading-[1.1] tracking-tight text-ink md:text-[44px]">
                Geld. Sache. Zeit.
              </h2>
            </Reveal>
          </div>
          <Reveal variant="up" delay={200} duration={800}>
            <p className="max-w-md text-[15px] leading-relaxed text-ink-500">
              Wir sind zu 100 % ehrenamtlich. Es gibt keine Personalkosten,
              keine Geschäftsführung. Was Sie geben, kommt an, noch in der
              gleichen Saison.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {/* Geldspende */}
          <Reveal variant="up" delay={0} duration={800} distance={26}>
            <article className="card relative flex h-full flex-col p-8" id="spende-geld">
              <span className="absolute inset-x-0 top-0 h-[3px] bg-rot" />
              <div className="text-[12px] font-semibold uppercase tracking-kicker text-rot">
                01 · Geldspende
              </div>
              <h3 className="h-serif mt-4 text-[22px] font-bold leading-tight text-ink">
                Wärme über den Winter tragen.
              </h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-ink-500">
                Der zuverlässigste Weg. Ihre Spende zahlt Zeltmiete, Lebensmittel,
                Sanitär und passgenau gekaufte Kleidung. Steuerlich absetzbar.
              </p>

              <div className="mt-6 border-t border-line pt-5 text-[13.5px] text-ink-600">
                <div className="font-semibold text-ink">{SITE.bank.holder}</div>
                <div className="mt-1 text-ink-500">
                  {SITE.bank.bank} · BIC {SITE.bank.bic}
                </div>
                <CopyableIban />
              </div>

              <a
                href={`https://www.betterplace.org/de/projects/${SITE.betterplace.project}`}
                target="_blank"
                rel="noreferrer"
                className="btn-primary mt-6 w-fit"
              >
                Online spenden über betterplace
              </a>
            </article>
          </Reveal>

          {/* Sachspende */}
          <Reveal variant="up" delay={130} duration={800} distance={26}>
            <article className="card relative flex h-full flex-col p-8" id="spende-sach">
              <span className="absolute inset-x-0 top-0 h-[3px] bg-rot/50" />
              <div className="text-[12px] font-semibold uppercase tracking-kicker text-rot">
                02 · Sachspende
              </div>
              <h3 className="h-serif mt-4 text-[22px] font-bold leading-tight text-ink">
                Was gerade fehlt, wo es gebraucht wird.
              </h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-ink-500">
                Aktuelle Bedarfsliste weiter unten. Bitte keine Kleidung. Die
                kaufen wir gezielt in passender Größe. Annahme am
                Spendenwochenende oder nach Rücksprache.
              </p>
              <a href="#bedarf" className="btn-secondary mt-auto w-fit pt-6">
                Zur Bedarfsliste
              </a>
            </article>
          </Reveal>

          {/* Zeitspende */}
          <Reveal variant="up" delay={260} duration={800} distance={26}>
            <article className="card relative flex h-full flex-col p-8" id="spende-zeit">
              <span className="absolute inset-x-0 top-0 h-[3px] bg-rot/50" />
              <div className="text-[12px] font-semibold uppercase tracking-kicker text-rot">
                03 · Zeitspende
              </div>
              <h3 className="h-serif mt-4 text-[22px] font-bold leading-tight text-ink">
                Eine Schicht. Ein Winter. Ein Leben.
              </h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-ink-500">
                Rund 700 Ehrenamtseinsätze pro Saison. Drei Schichten pro Nacht,
                keine feste Verpflichtung. Erst zur Infoveranstaltung, dann in
                die Nacht.
              </p>
              <a href="#helfen" className="btn-secondary mt-auto w-fit pt-6">
                Ehrenamtlich helfen
              </a>
            </article>
          </Reveal>
        </div>

        {/* Impact amounts */}
        <Reveal variant="up" delay={100} duration={800}>
          <div className="mt-12 border border-line bg-paper-100">
            <div className="grid gap-0 md:grid-cols-3">
              {[
                {
                  amount: "20 €",
                  text: "ein Nachtplatz mit warmer Mahlzeit im Kältedorf.",
                },
                {
                  amount: "60 €",
                  text: "eine passgenau gekaufte Winterjacke für einen Gast.",
                },
                {
                  amount: "220 €",
                  text: "eine komplette Iglu-Nacht: Miete, Heizung, Sanitär, Essen.",
                },
              ].map((w, i) => (
                <div
                  key={w.amount}
                  className={`p-8 md:p-10 ${
                    i < 2
                      ? "md:border-r border-line border-b md:border-b-0"
                      : ""
                  }`}
                >
                  <div className="h-serif text-[36px] font-bold leading-none text-rot md:text-[42px]">
                    {w.amount}
                  </div>
                  <div className="mt-3 text-[14.5px] leading-relaxed text-ink-500">
                    {w.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
