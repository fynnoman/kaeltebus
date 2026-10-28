"use client";

import Link from "next/link";
import { SITE } from "@/lib/data";
import { Reveal } from "@/components/Reveal";
import { t, type PageTexts } from "@/lib/texts";

export function KontaktDetail({ texts }: { texts?: PageTexts }) {
  const kanaele = [
    {
      kicker: t(texts, "kanal1_kicker", "Alles rund um den Verein"),
      title: t(texts, "kanal1_title", "Allgemeines."),
      body: t(
        texts,
        "kanal1_body",
        "Presse, Terminanfragen, Vereinsthemen und alles, was nicht in die anderen Postfächer passt. Wir lesen die Mail regelmäßig.",
      ),
      action: { label: SITE.contact.email, href: `mailto:${SITE.contact.email}` },
    },
    {
      kicker: t(texts, "kanal2_kicker", "Geldspende"),
      title: t(texts, "kanal2_title", "Finanzen."),
      body: t(
        texts,
        "kanal2_body",
        "Spendenquittungen, Rechnungen und steuerliche Rückfragen. Für Überweisungen und Online-Spende gibt es die Spendenseite.",
      ),
      action: { label: SITE.contact.emailFinanzen, href: `mailto:${SITE.contact.emailFinanzen}` },
    },
    {
      kicker: t(texts, "kanal3_kicker", "Küche"),
      title: t(texts, "kanal3_title", "Kochen und Verpflegung."),
      body: t(
        texts,
        "kanal3_body",
        "Mithilfe in der Küche, warme Mahlzeiten und alle Themen rund um Lebensmittel am Kältebus.",
      ),
      action: { label: SITE.contact.emailKochen, href: `mailto:${SITE.contact.emailKochen}` },
    },
    {
      kicker: t(texts, "kanal4_kicker", "Sachspende"),
      title: t(texts, "kanal4_title", "Sachspenden."),
      body: t(
        texts,
        "kanal4_body",
        "Vor jeder Übergabe kurz per E-Mail Bescheid geben. Was gerade gebraucht wird, steht auf der Bedarfsliste.",
      ),
      action: { label: SITE.contact.emailSachspenden, href: `mailto:${SITE.contact.emailSachspenden}` },
    },
    {
      kicker: t(texts, "kanal5_kicker", "Bedarfsliste"),
      title: t(texts, "kanal5_title", "Was gebraucht wird."),
      body: t(
        texts,
        "kanal5_body",
        "Vor der Übergabe lohnt ein Blick auf die aktuelle Liste. So kommt an, was tatsächlich im Betrieb gebraucht wird.",
      ),
      action: { label: t(texts, "kanal5_cta", "Zur Bedarfsliste"), href: "/bedarf" },
    },
    {
      kicker: t(texts, "kanal6_kicker", "Akute Not"),
      title: t(texts, "kanal6_title", "Notruf 112."),
      body: t(
        texts,
        "kanal6_body",
        "Wenn eine Person nicht mehr ansprechbar ist, bewusstlos oder stark unterkühlt: nicht auf uns warten, sofort den Rettungsdienst rufen.",
      ),
      action: { label: t(texts, "kanal6_cta", "112 wählen"), href: "tel:112" },
    },
  ];

  const orte = [
    {
      kicker: t(texts, "orte1_kicker", "Vereinssitz"),
      title: t(texts, "orte1_title", "Sankt-Johanner-Straße 49"),
      detail: `${SITE.address.zip} ${SITE.address.city}`,
      body: t(
        texts,
        "orte1_body",
        "Die Anschrift des Vereins für Post und offizielle Korrespondenz. Kein Publikumsverkehr, kein Übergabeort.",
      ),
    },
    {
      kicker: t(texts, "orte2_kicker", "Standort"),
      title: SITE.standort.location,
      detail: SITE.standort.detail,
      body: t(
        texts,
        "orte2_body",
        "Der eigentliche Ort der Arbeit. Erreichbar über die Saarbahn-Haltestelle Römerkastell. Betrieb: jeden Winter.",
      ),
    },
  ];

  return (
    <>
      <section className="section bg-white">
        <div className="container-x">
          <div className="max-w-2xl">
            <Reveal variant="up" duration={700}>
              <div className="kicker-line">{t(texts, "kanal_kicker", "Welcher Kanal für was")}</div>
            </Reveal>
            <Reveal variant="up" delay={100} duration={800}>
              <h2 className="h-serif mt-4 text-[28px] font-bold leading-[1.1] tracking-tight text-ink sm:text-[34px] md:text-[42px]">
                {t(texts, "kanal_title", "Kurzer Leitfaden.")}
              </h2>
            </Reveal>
            <Reveal variant="up" delay={180} duration={700}>
              <span className="rule-accent mt-6" />
            </Reveal>
            <Reveal variant="up" delay={260} duration={800}>
              <p className="mt-6 text-[15px] leading-relaxed text-ink-500 sm:text-[16px]">
                {t(
                  texts,
                  "kanal_lead",
                  "Damit Ihre Anfrage möglichst schnell bei der richtigen Person landet, hier die üblichen Wege im Überblick.",
                )}
              </p>
            </Reveal>
          </div>

          <div className="mt-10 grid gap-4 sm:gap-5 md:mt-14 md:grid-cols-2">
            {kanaele.map((k, i) => (
              <Reveal
                key={i}
                variant="up"
                delay={i * 110}
                duration={700}
                distance={22}
              >
                <article className="card card-line relative flex h-full flex-col overflow-hidden p-6 sm:p-7 md:p-8">
                  <span aria-hidden className="ghost-numeral">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="relative z-10 flex items-baseline gap-4">
                    <span className="numeral">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[11.5px] font-semibold uppercase tracking-kicker text-rot sm:text-[12px]">
                      {k.kicker}
                    </span>
                  </div>
                  <h3 className="h-serif relative z-10 mt-5 text-[20px] font-bold leading-tight text-ink sm:text-[22px]">
                    {k.title}
                  </h3>
                  <p className="relative z-10 mt-3 flex-1 text-[14.5px] leading-relaxed text-ink-500 sm:text-[15px]">
                    {k.body}
                  </p>
                  {k.action.href.startsWith("/") ? (
                    <Link
                      href={k.action.href}
                      className="mt-6 inline-flex w-fit items-center gap-1.5 text-[13.5px] font-semibold text-rot hover:underline"
                    >
                      {k.action.label} →
                    </Link>
                  ) : (
                    <a
                      href={k.action.href}
                      className="mt-6 inline-flex w-fit items-center gap-1.5 text-[13.5px] font-semibold text-rot hover:underline"
                    >
                      {k.action.label} →
                    </a>
                  )}
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
              <div className="kicker-line">{t(texts, "orte_kicker", "So finden Sie uns")}</div>
            </Reveal>
            <Reveal variant="up" delay={100} duration={800}>
              <h2 className="h-serif mt-4 text-[28px] font-bold leading-[1.1] tracking-tight text-ink sm:text-[34px] md:text-[42px]">
                {t(texts, "orte_title", "Zwei Adressen, zwei Zwecke.")}
              </h2>
            </Reveal>
            <Reveal variant="up" delay={180} duration={700}>
              <span className="rule-accent mt-6" />
            </Reveal>
            <Reveal variant="up" delay={260} duration={800}>
              <p className="mt-6 text-[15px] leading-relaxed text-ink-500 sm:text-[16px]">
                {t(
                  texts,
                  "orte_lead",
                  "Der Vereinssitz ist die postalische Anschrift. Der Kältebus am Römerkastell ist der Ort, an dem die Arbeit tatsächlich stattfindet.",
                )}
              </p>
            </Reveal>
          </div>

          <div className="mt-10 grid gap-4 sm:gap-6 md:mt-14 md:grid-cols-2">
            {orte.map((o, i) => (
              <Reveal
                key={i}
                variant="up"
                delay={i * 130}
                duration={800}
                distance={26}
              >
                <article className="card flex h-full flex-col p-6 sm:p-8">
                  <div className="text-[11.5px] font-semibold uppercase tracking-kicker text-rot sm:text-[12px]">
                    {o.kicker}
                  </div>
                  <div className="h-serif mt-4 text-[22px] font-bold leading-tight tracking-tight text-ink sm:text-[26px]">
                    {o.title}
                  </div>
                  <div className="mt-2 text-[14.5px] text-ink-500 sm:text-[15px]">
                    {o.detail}
                  </div>
                  <span className="mt-5 block h-px w-10 bg-rot" />
                  <p className="mt-5 text-[14.5px] leading-relaxed text-ink-500 sm:text-[15px]">
                    {o.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal variant="up" delay={320} duration={800}>
            <div className="infobox mt-10 text-[13.5px] leading-relaxed text-ink-600 sm:mt-12 sm:text-[14px]">
              <strong>
                {t(
                  texts,
                  "orte_infobox",
                  "Hinweis zum Datenschutz: Wir betreiben kein Kontaktformular. Nachrichten erreichen den Verein direkt per E-Mail an",
                )}
              </strong>{" "}
              <a
                href={`mailto:${SITE.contact.email}`}
                className="text-rot hover:underline"
              >
                {SITE.contact.email}
              </a>
              .
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
