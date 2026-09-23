"use client";

import Link from "next/link";
import { SITE } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

const WOHIN = [
  {
    kicker: "Verpflegung",
    title: "Eine warme Mahlzeit.",
    body: "Lebensmittel, Getränke und alles, was für die tägliche Versorgung am Kältebus benötigt wird. Abend für Abend, während der gesamten Wintersaison.",
  },
  {
    kicker: "Wärme",
    title: "Schutz vor der Kälte.",
    body: "Spenden unterstützen den Betrieb des Kältebusses am Römerkastell: von Heizung und Beleuchtung bis hin zu Küche und Aufenthaltsbereich.",
  },
  {
    kicker: "Ausstattung",
    title: "Das Wichtigste für draußen.",
    body: "Neue Unterwäsche und Socken, Hygieneartikel, Isomatten und warme Schlafsäcke helfen dabei, kalte Nächte ein Stück sicherer und erträglicher zu machen.",
  },
];

const FAQ = [
  {
    q: "Sind Spenden steuerlich absetzbar?",
    a: "Ja. Der Kältebus Saarbrücken ist ein gemeinnütziger Verein (VR 5477, Amtsgericht Saarbrücken). Zuwendungen an den Verein sind nach den geltenden Regeln steuerlich abzugsfähig.",
  },
  {
    q: "Wie erhalte ich eine Spendenquittung?",
    a: "Für eine Spendenbescheinigung genügt eine kurze E-Mail an info@kaeltebussaarbruecken.de mit dem Spendendatum und der Adresse für die Zustellung.",
  },
  {
    q: "Kann ich zweckgebunden spenden?",
    a: "Ja. Ein Hinweis im Verwendungszweck (zum Beispiel 'Verpflegung' oder 'Ausstattung') wird bei der Verwendung berücksichtigt. Bei größeren Zuwendungen bitte kurz per E-Mail Kontakt aufnehmen.",
  },
  {
    q: "Können wir als Firma, Schule oder Gemeinde spenden?",
    a: "Sehr gerne. In den letzten Wintern haben Schulen, Firmen, Kirchengemeinden und Vereine den Betrieb mitgetragen. Für Übergaben vor Ort oder Presseterminen bitte vorab per E-Mail abstimmen.",
  },
];

export function SpendenDetail() {
  return (
    <>
      <section className="section bg-paper-100">
        <div className="container-x">
          <div className="grid gap-10 md:grid-cols-[1fr_1.1fr] md:items-start md:gap-16">
            <div>
              <Reveal variant="up" duration={700}>
                <div className="kicker-line">Wohin die Spende geht</div>
              </Reveal>
              <Reveal variant="up" delay={100} duration={800}>
                <h2 className="h-serif mt-4 text-[28px] font-bold leading-[1.1] tracking-tight text-ink sm:text-[34px] md:text-[42px]">
                  Hilfe, die direkt ankommt.
                </h2>
              </Reveal>
              <Reveal variant="up" delay={180} duration={700}>
                <span className="rule-accent mt-6" />
              </Reveal>
              <Reveal variant="up" delay={260} duration={800}>
                <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-ink-500 sm:text-[16px]">
                  Der Kältebus wird vollständig ehrenamtlich getragen. Spenden
                  fließen deshalb unmittelbar in das, was im Winter gebraucht
                  wird: warme Mahlzeiten, einen geschützten und beheizten Ort
                  sowie wichtige Dinge für Menschen, die draußen schlafen.
                </p>
              </Reveal>
            </div>

            <div className="grid gap-4 sm:gap-5">
              {WOHIN.map((w, i) => (
                <Reveal
                  key={w.kicker}
                  variant="up"
                  delay={i * 110}
                  duration={700}
                  distance={22}
                >
                  <div className="card card-line relative flex flex-col overflow-hidden p-6 sm:p-7">
                    <span aria-hidden className="ghost-numeral">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="relative z-10 flex items-baseline gap-4">
                      <span className="numeral">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[11.5px] font-semibold uppercase tracking-kicker text-spende sm:text-[12px]">
                        {w.kicker}
                      </span>
                    </div>
                    <h3 className="h-serif relative z-10 mt-5 text-[19px] font-bold leading-tight text-ink sm:text-[21px]">
                      {w.title}
                    </h3>
                    <p className="relative z-10 mt-3 text-[14.5px] leading-relaxed text-ink-500 sm:text-[15px]">
                      {w.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x">
          <div className="max-w-2xl">
            <Reveal variant="up" duration={700}>
              <div className="kicker-line">Fragen zur Spende</div>
            </Reveal>
            <Reveal variant="up" delay={100} duration={800}>
              <h2 className="h-serif mt-4 text-[28px] font-bold leading-[1.1] tracking-tight text-ink sm:text-[34px] md:text-[42px]">
                Was wir häufig gefragt werden.
              </h2>
            </Reveal>
            <Reveal variant="up" delay={180} duration={700}>
              <span className="rule-accent mt-6" />
            </Reveal>
          </div>

          <div className="mt-10 divide-y divide-line border-y border-line md:mt-14">
            {FAQ.map((f, i) => (
              <Reveal
                key={f.q}
                variant="up"
                delay={i * 90}
                duration={700}
                distance={18}
              >
                <details className="group">
                  <summary className="flex cursor-pointer items-start justify-between gap-6 py-5 text-[15.5px] font-semibold text-ink transition-colors hover:text-spende sm:py-6 sm:text-[16.5px]">
                    <span className="h-serif tracking-tight">{f.q}</span>
                    <span className="mt-1 flex-none text-spende transition-transform group-open:rotate-45">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path
                          d="M8 3v10M3 8h10"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </summary>
                  <p className="pb-6 pr-10 text-[14.5px] leading-relaxed text-ink-500 sm:text-[15px]">
                    {f.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>

          <Reveal variant="up" delay={300} duration={800}>
            <div className="infobox mt-10 text-[13.5px] leading-relaxed text-ink-600 sm:mt-12 sm:text-[14px]">
              <strong>Noch eine Frage offen?</strong> Schreiben Sie kurz an{" "}
              <a
                href={`mailto:${SITE.contact.email}`}
                className="text-spende hover:underline"
              >
                {SITE.contact.email}
              </a>
              . Sie bekommen zeitnah Antwort.{" "}
              <Link href="/bedarf" className="text-spende hover:underline">
                Bedarfsliste ansehen →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
