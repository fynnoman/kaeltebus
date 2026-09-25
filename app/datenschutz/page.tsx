import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { SITE } from "@/lib/data";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Datenschutz",
  description:
    "Datenschutzerklärung des Kältebus Saarbrücken- Hilfe für Menschen in Not e.V. Diese Website erhebt keine Nutzerdaten, setzt keine Cookies und nutzt kein Tracking.",
  alternates: { canonical: "/datenschutz" },
  robots: { index: true, follow: true },
};

const crumbs = [
  { name: "Start", href: "/" },
  { name: "Datenschutz" },
];

export default function Page() {
  return (
    <main>
      <JsonLd
        id="ld-datenschutz"
        data={[
          webPageSchema({
            url: "/datenschutz",
            name: "Datenschutzerklärung · Kältebus Saarbrücken e.V.",
            description:
              "Datenschutzerklärung des Kältebus Saarbrücken- Hilfe für Menschen in Not e.V.",
            breadcrumbs: crumbs,
          }),
          breadcrumbSchema(crumbs),
        ]}
      />
      <PageHeader
        kicker="Datenschutz"
        title="Datenschutz."
        lead="Diese Website erhebt keine personenbezogenen Daten zur Analyse oder Werbung. Was verarbeitet wird und warum, steht hier."
        crumbs={[{ label: "Start", href: "/" }, { label: "Datenschutz" }]}
      />

      <section className="section bg-white">
        <div className="container-x">
          <div className="grid gap-12 md:grid-cols-[1fr_1.6fr] md:gap-16">
            <Reveal variant="up" duration={700}>
              <div>
                <div className="kicker-line">Verantwortlicher</div>
                <h2 className="h-serif mt-4 text-[26px] font-bold leading-[1.15] tracking-tight text-ink sm:text-[30px]">
                  Verantwortlich für die Datenverarbeitung.
                </h2>
                <span className="rule-accent mt-6" />
                <p className="mt-6 text-[14.5px] leading-relaxed text-ink-500 sm:text-[15px]">
                  Verantwortlich im Sinne der Datenschutz-Grundverordnung
                  (DSGVO) ist der eingetragene Verein.
                </p>
              </div>
            </Reveal>

            <div className="space-y-10">
              <Reveal variant="up" delay={80} duration={700} distance={20}>
                <div>
                  <div className="text-[11.5px] font-semibold uppercase tracking-kicker text-rot">
                    Vereinsname und Anschrift
                  </div>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink sm:text-[15.5px]">
                    {SITE.legalName}
                    <br />
                    {SITE.address.street}
                    <br />
                    {SITE.address.zip} {SITE.address.city}
                    <br />
                    Deutschland
                  </p>
                </div>
              </Reveal>

              <Reveal variant="up" delay={140} duration={700} distance={20}>
                <div>
                  <div className="text-[11.5px] font-semibold uppercase tracking-kicker text-rot">
                    Kontakt
                  </div>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink sm:text-[15.5px]">
                    E-Mail:{" "}
                    <a
                      href={`mailto:${SITE.contact.email}`}
                      className="text-spende hover:underline"
                    >
                      {SITE.contact.email}
                    </a>
                    <br />
                    Telefon:{" "}
                    <a
                      href={`tel:${SITE.contact.phoneHref}`}
                      className="text-spende hover:underline"
                    >
                      {SITE.contact.phone}
                    </a>
                  </p>
                  <p className="mt-3 text-[14px] leading-relaxed text-ink-500 sm:text-[14.5px]">
                    Weitere Angaben zum Verein finden Sie im{" "}
                    <Link href="/impressum" className="text-spende hover:underline">
                      Impressum
                    </Link>
                    .
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-paper-100">
        <div className="container-x">
          <div className="max-w-3xl">
            <Reveal variant="up" duration={700}>
              <div className="kicker-line">Umgang mit Daten auf dieser Website</div>
            </Reveal>
            <Reveal variant="up" delay={100} duration={800}>
              <h2 className="h-serif mt-4 text-[26px] font-bold leading-[1.15] tracking-tight text-ink sm:text-[30px] md:text-[34px]">
                So schlank wie möglich.
              </h2>
            </Reveal>
            <Reveal variant="up" delay={180} duration={700}>
              <span className="rule-accent mt-6" />
            </Reveal>
            <Reveal variant="up" delay={260} duration={800}>
              <p className="mt-6 text-[15px] leading-relaxed text-ink-500 sm:text-[16px]">
                Diese Website ist ein reines Informationsangebot des
                Vereins. Es gibt kein Kontaktformular, keinen Newsletter,
                keine Nutzerregistrierung, kein Tracking und keine Werbung.
              </p>
            </Reveal>
          </div>

          <div className="mt-10 space-y-10 md:mt-14 md:space-y-14">
            <Reveal variant="up" delay={0} duration={700} distance={20}>
              <div>
                <div className="text-[11.5px] font-semibold uppercase tracking-kicker text-rot">
                  Cookies und Tracking
                </div>
                <h3 className="h-serif mt-3 text-[19px] font-bold leading-snug text-ink sm:text-[21px]">
                  Wir setzen keine Cookies und kein Analyse-Tracking ein.
                </h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-ink-500 sm:text-[15px]">
                  Diese Website verwendet weder Cookies, die eine
                  Einwilligung erfordern, noch Web-Analyse-Dienste wie
                  Google Analytics, Matomo, Plausible oder vergleichbare
                  Werkzeuge. Es findet kein Profiling statt.
                </p>
              </div>
            </Reveal>

            <Reveal variant="up" delay={80} duration={700} distance={20}>
              <div>
                <div className="text-[11.5px] font-semibold uppercase tracking-kicker text-rot">
                  Server-Logfiles
                </div>
                <h3 className="h-serif mt-3 text-[19px] font-bold leading-snug text-ink sm:text-[21px]">
                  Technisch notwendige Server-Logs beim Hoster.
                </h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-ink-500 sm:text-[15px]">
                  Beim Aufruf der Website erhebt der Hosting-Anbieter
                  automatisch technische Zugriffsdaten (unter anderem
                  IP-Adresse, Zeitpunkt des Zugriffs, aufgerufene Seite,
                  Browser-Typ, Betriebssystem und Referrer). Diese Daten
                  werden ausschließlich zum Zweck des sicheren und
                  stabilen Betriebs der Website verarbeitet. Rechtsgrundlage
                  ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).
                  Die Daten werden nach Ablauf der beim Hoster üblichen
                  Speicherfristen automatisch gelöscht.
                </p>
              </div>
            </Reveal>

            <Reveal variant="up" delay={160} duration={700} distance={20}>
              <div>
                <div className="text-[11.5px] font-semibold uppercase tracking-kicker text-rot">
                  Schriftarten
                </div>
                <h3 className="h-serif mt-3 text-[19px] font-bold leading-snug text-ink sm:text-[21px]">
                  Fonts werden lokal ausgeliefert.
                </h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-ink-500 sm:text-[15px]">
                  Für die Darstellung werden die Schriftarten „Source Sans 3"
                  und „Merriweather" verwendet. Die Font-Dateien werden vom
                  Framework während des Buildvorgangs eingebunden und beim
                  Aufruf der Website vom eigenen Server ausgeliefert. Es
                  erfolgt keine Verbindung zu Google Fonts oder anderen
                  externen Font-Servern.
                </p>
              </div>
            </Reveal>

            <Reveal variant="up" delay={240} duration={700} distance={20}>
              <div>
                <div className="text-[11.5px] font-semibold uppercase tracking-kicker text-rot">
                  Externe Inhalte auf der Seite „Spenden"
                </div>
                <h3 className="h-serif mt-3 text-[19px] font-bold leading-snug text-ink sm:text-[21px]">
                  betterplace-Overlay auf der Spenden-Seite.
                </h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-ink-500 sm:text-[15px]">
                  Auf der Seite <Link href="/spenden" className="text-spende hover:underline">Spenden</Link>{" "}
                  wird ein Skript von betterplace.org geladen, das die
                  Online-Spende in einem Overlay ermöglicht. Beim Aufruf
                  dieser Seite erhält betterplace.org technische
                  Zugriffsdaten. Für die dortige Datenverarbeitung ist die
                  gut.org gemeinnützige Aktiengesellschaft verantwortlich.
                  Weitere Informationen unter{" "}
                  <a
                    href="https://www.betterplace.org/de/pages/data-privacy"
                    target="_blank"
                    rel="noreferrer"
                    className="text-spende hover:underline"
                  >
                    betterplace.org/de/pages/data-privacy
                  </a>
                  . Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO
                  (berechtigtes Interesse an einer einfachen
                  Spendenmöglichkeit).
                </p>
              </div>
            </Reveal>

            <Reveal variant="up" delay={320} duration={700} distance={20}>
              <div>
                <div className="text-[11.5px] font-semibold uppercase tracking-kicker text-rot">
                  Kontaktaufnahme per E-Mail und Telefon
                </div>
                <h3 className="h-serif mt-3 text-[19px] font-bold leading-snug text-ink sm:text-[21px]">
                  Bei direkter Kontaktaufnahme.
                </h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-ink-500 sm:text-[15px]">
                  Wenn Sie den Verein per E-Mail oder Telefon kontaktieren,
                  werden die von Ihnen mitgeteilten Angaben (Name, E-Mail,
                  ggf. Telefonnummer, Inhalt der Nachricht) ausschließlich
                  zur Bearbeitung Ihrer Anfrage verarbeitet. Rechtsgrundlage
                  ist Art. 6 Abs. 1 lit. b oder lit. f DSGVO. Die Daten
                  werden gelöscht, sobald sie für den Zweck der
                  Bearbeitung nicht mehr erforderlich sind und keine
                  gesetzlichen Aufbewahrungspflichten entgegenstehen.
                </p>
              </div>
            </Reveal>

            <Reveal variant="up" delay={400} duration={700} distance={20}>
              <div>
                <div className="text-[11.5px] font-semibold uppercase tracking-kicker text-rot">
                  Spendenverarbeitung
                </div>
                <h3 className="h-serif mt-3 text-[19px] font-bold leading-snug text-ink sm:text-[21px]">
                  Umgang mit Spenderdaten.
                </h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-ink-500 sm:text-[15px]">
                  Bei einer Überweisung auf das Vereinskonto werden die im
                  Rahmen des Zahlungsvorgangs übermittelten Daten
                  (insbesondere Name und Verwendungszweck) zur Zuordnung
                  und ordnungsgemäßen Buchführung verarbeitet.
                  Rechtsgrundlage ist Art. 6 Abs. 1 lit. c DSGVO in
                  Verbindung mit den handels- und steuerrechtlichen
                  Aufbewahrungspflichten.
                </p>
              </div>
            </Reveal>

            <Reveal variant="up" delay={480} duration={700} distance={20}>
              <div>
                <div className="text-[11.5px] font-semibold uppercase tracking-kicker text-rot">
                  SSL/TLS-Verschlüsselung
                </div>
                <h3 className="h-serif mt-3 text-[19px] font-bold leading-snug text-ink sm:text-[21px]">
                  Verbindung ist verschlüsselt.
                </h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-ink-500 sm:text-[15px]">
                  Die Website nutzt aus Sicherheitsgründen eine
                  SSL/TLS-Verschlüsselung. Eine verschlüsselte Verbindung
                  erkennen Sie an der „https"-Adresszeile Ihres Browsers.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x">
          <div className="max-w-3xl">
            <Reveal variant="up" duration={700}>
              <div className="kicker-line">Ihre Rechte</div>
            </Reveal>
            <Reveal variant="up" delay={100} duration={800}>
              <h2 className="h-serif mt-4 text-[26px] font-bold leading-[1.15] tracking-tight text-ink sm:text-[30px] md:text-[34px]">
                Rechte der betroffenen Personen.
              </h2>
            </Reveal>
            <Reveal variant="up" delay={180} duration={700}>
              <span className="rule-accent mt-6" />
            </Reveal>
            <Reveal variant="up" delay={260} duration={800}>
              <p className="mt-6 text-[15px] leading-relaxed text-ink-500 sm:text-[16px]">
                Nach der Datenschutz-Grundverordnung stehen Ihnen als
                betroffene Person insbesondere folgende Rechte zu:
              </p>
            </Reveal>
            <Reveal variant="up" delay={340} duration={800}>
              <ul className="mt-6 space-y-2 text-[15px] leading-relaxed text-ink-500 sm:text-[15.5px]">
                <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
                <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
                <li>Recht auf Löschung (Art. 17 DSGVO)</li>
                <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
                <li>Recht auf Widerspruch (Art. 21 DSGVO)</li>
                <li>
                  Recht auf Beschwerde bei einer Aufsichtsbehörde (Art. 77
                  DSGVO)
                </li>
              </ul>
            </Reveal>
            <Reveal variant="up" delay={420} duration={800}>
              <p className="mt-6 text-[15px] leading-relaxed text-ink-500 sm:text-[15.5px]">
                Zur Ausübung dieser Rechte genügt eine formlose Nachricht
                per E-Mail an{" "}
                <a
                  href={`mailto:${SITE.contact.email}`}
                  className="text-spende hover:underline"
                >
                  {SITE.contact.email}
                </a>
                .
              </p>
            </Reveal>

            <Reveal variant="up" delay={500} duration={800}>
              <div className="infobox mt-10 text-[13.5px] leading-relaxed text-ink-600 sm:mt-12 sm:text-[14px]">
                <strong>Zuständige Aufsichtsbehörde:</strong> Unabhängiges
                Datenschutzzentrum Saarland, Fritz-Dobisch-Straße 12,
                66111 Saarbrücken.{" "}
                <a
                  href="https://www.datenschutz.saarland.de"
                  target="_blank"
                  rel="noreferrer"
                  className="text-spende hover:underline"
                >
                  datenschutz.saarland.de
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
