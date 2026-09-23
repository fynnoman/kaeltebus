"use client";

import Link from "next/link";
import { SITE } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

const GRUENDE = [
  {
    kicker: "Hygiene",
    title: "Neu statt getragen.",
    body: "Unterwäsche, Socken und Hygieneartikel geben wir ausschließlich neu und in Originalverpackung heraus. Alles andere wäre für die Menschen im Kältebus nicht zumutbar.",
  },
  {
    kicker: "Lagerung",
    title: "Nur, was direkt gebraucht wird.",
    body: "Der Kältebus verfügt über kein dauerhaftes Lager für Kleidung, Möbel oder Haushaltsgegenstände. Deshalb können wir nur Sachspenden annehmen, die aktuell benötigt und zeitnah eingesetzt werden können.",
  },
  {
    kicker: "Passform",
    title: "Damit es wirklich passt.",
    body: "Benötigte Kleidung kaufen wir gezielt in der passenden Größe. So können wir sicherstellen, dass jede Person genau das erhält, was sie aktuell braucht und auch wirklich tragen kann. Deshalb setzen wir bewusst auf eine gezielte Versorgung statt auf eine klassische Kleiderkammer.",
  },
];

const ABLAUF = [
  {
    step: "01",
    title: "Kurz per E-Mail Bescheid geben.",
    body: "Eine Zeile reicht: was Sie mitbringen möchten und in welcher Menge. So wissen wir, ob es aktuell in den Betrieb passt.",
  },
  {
    step: "02",
    title: "Termin abstimmen.",
    body: "Wir melden uns mit einem Übergabetermin am Kältebus am Römerkastell oder mit einer Alternative, falls das gerade nicht möglich ist.",
  },
  {
    step: "03",
    title: "Übergabe vor Ort.",
    body: "Am vereinbarten Tag am Römerkastell. Auf Wunsch mit kurzer Führung am Kältebus und, wenn passend, mit einem Foto für die Vereinskanäle.",
  },
];

export function BedarfDetail() {
  return (
    <>
      <section className="section bg-white">
        <div className="container-x">
          <div className="max-w-2xl">
            <Reveal variant="up" duration={700}>
              <div className="kicker-line">Warum nicht alles</div>
            </Reveal>
            <Reveal variant="up" delay={100} duration={800}>
              <h2 className="h-serif mt-4 text-[28px] font-bold leading-[1.1] tracking-tight text-ink sm:text-[34px] md:text-[42px]">
                Weniger, aber das Richtige.
              </h2>
            </Reveal>
            <Reveal variant="up" delay={180} duration={700}>
              <span className="rule-accent mt-6" />
            </Reveal>
            <Reveal variant="up" delay={260} duration={800}>
              <p className="mt-6 text-[15px] leading-relaxed text-ink-500 sm:text-[16px]">
                Wir sind ein Winterbetrieb, keine Sammelstelle. Deshalb nehmen
                wir bewusst nur an, was direkt im Kältebus eingesetzt wird.
                Drei Gründe stehen dahinter.
              </p>
            </Reveal>
          </div>

          <div className="mt-10 grid gap-4 sm:gap-6 md:mt-14 md:grid-cols-3">
            {GRUENDE.map((g, i) => (
              <Reveal
                key={g.kicker}
                variant="up"
                delay={i * 130}
                duration={800}
                distance={26}
              >
                <article className="card card-line relative flex h-full flex-col overflow-hidden p-6 sm:p-8 md:p-10">
                  <span aria-hidden className="ghost-numeral">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="relative z-10 flex items-baseline gap-4">
                    <span className="numeral">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[11.5px] font-semibold uppercase tracking-kicker text-rot sm:text-[12px]">
                      {g.kicker}
                    </span>
                  </div>
                  <span className="relative z-10 mt-5 block h-px w-10 bg-rot" />
                  <h3 className="h-serif relative z-10 mt-5 text-[22px] font-bold leading-[1.15] text-ink sm:text-[24px] md:text-[26px]">
                    {g.title}
                  </h3>
                  <p className="relative z-10 mt-4 text-[14.5px] leading-relaxed text-ink-500 sm:text-[15px]">
                    {g.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-paper-100">
        <div className="container-x">
          <div className="max-w-2xl">
            <Reveal variant="up" duration={700}>
              <div className="kicker-line">So läuft eine Sachspende ab</div>
            </Reveal>
            <Reveal variant="up" delay={100} duration={800}>
              <h2 className="h-serif mt-4 text-[28px] font-bold leading-[1.1] tracking-tight text-ink sm:text-[34px] md:text-[42px]">
                Drei Schritte, ohne Umwege.
              </h2>
            </Reveal>
            <Reveal variant="up" delay={180} duration={700}>
              <span className="rule-accent mt-6" />
            </Reveal>
          </div>

          <ol className="mt-10 grid gap-4 sm:gap-5 md:mt-14 md:grid-cols-3">
            {ABLAUF.map((a, i) => (
              <Reveal
                key={a.step}
                variant="up"
                delay={i * 110}
                duration={700}
                distance={22}
              >
                <li className="card card-line relative flex h-full flex-col overflow-hidden p-6 sm:p-7">
                  <span aria-hidden className="ghost-numeral">{a.step}</span>
                  <div className="relative z-10 flex items-baseline gap-4">
                    <span className="numeral">{a.step}</span>
                    <span className="text-[11.5px] font-semibold uppercase tracking-kicker text-rot sm:text-[12px]">
                      Schritt
                    </span>
                  </div>
                  <h3 className="h-serif relative z-10 mt-5 text-[19px] font-bold leading-tight text-ink sm:text-[21px]">
                    {a.title}
                  </h3>
                  <p className="relative z-10 mt-3 text-[14.5px] leading-relaxed text-ink-500 sm:text-[15px]">
                    {a.body}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>

          <Reveal variant="up" delay={320} duration={800}>
            <div className="mt-10 grid gap-4 md:grid-cols-[1fr_auto] md:items-center md:gap-8">
              <div className="infobox text-[13.5px] leading-relaxed text-ink-600 sm:text-[14px]">
                <strong>Sie sind unsicher, ob Ihre Sache passt?</strong> Kurze
                Anfrage per E-Mail an{" "}
                <a
                  href={`mailto:${SITE.contact.email}`}
                  className="text-rot hover:underline"
                >
                  {SITE.contact.email}
                </a>
                . Wir antworten zeitnah.
              </div>
              <Link href="/spenden" className="btn-secondary w-full md:w-auto">
                Lieber Geld spenden
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
