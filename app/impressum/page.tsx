import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Impressum",
  description:
    "Impressum des Kältebus Saarbrücken - Hilfe für Menschen in Not e.V. Angaben gemäß § 5 TMG.",
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <main>
      <PageHeader
        kicker="Impressum"
        title="Impressum."
        lead="Angaben gemäß § 5 TMG."
        crumbs={[{ label: "Start", href: "/" }, { label: "Impressum" }]}
      />

      <section className="section bg-white">
        <div className="container-x">
          <div className="grid gap-12 md:grid-cols-[1fr_1.6fr] md:gap-16">
            <Reveal variant="up" duration={700}>
              <div>
                <div className="kicker-line">Verein</div>
                <h2 className="h-serif mt-4 text-[26px] font-bold leading-[1.15] tracking-tight text-ink sm:text-[30px]">
                  Anbieter im Sinne des Telemediengesetzes.
                </h2>
                <span className="rule-accent mt-6" />
                <p className="mt-6 text-[14.5px] leading-relaxed text-ink-500 sm:text-[15px]">
                  Verantwortlich für den Inhalt dieser Website ist der
                  eingetragene, gemeinnützige Verein mit Sitz in Saarbrücken.
                </p>
              </div>
            </Reveal>

            <div className="space-y-10">
              <Reveal variant="up" delay={80} duration={700} distance={20}>
                <div>
                  <div className="text-[11.5px] font-semibold uppercase tracking-kicker text-rot">
                    Vereinsname
                  </div>
                  <p className="h-serif mt-3 text-[19px] font-bold leading-snug text-ink sm:text-[21px]">
                    {SITE.legalName}
                  </p>
                </div>
              </Reveal>

              <Reveal variant="up" delay={140} duration={700} distance={20}>
                <div>
                  <div className="text-[11.5px] font-semibold uppercase tracking-kicker text-rot">
                    Anschrift
                  </div>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink sm:text-[15.5px]">
                    {SITE.address.street}
                    <br />
                    {SITE.address.zip} {SITE.address.city}
                    <br />
                    Deutschland
                  </p>
                </div>
              </Reveal>

              <Reveal variant="up" delay={200} duration={700} distance={20}>
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
                  </p>
                </div>
              </Reveal>

              <Reveal variant="up" delay={260} duration={700} distance={20}>
                <div>
                  <div className="text-[11.5px] font-semibold uppercase tracking-kicker text-rot">
                    Registereintrag
                  </div>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink sm:text-[15.5px]">
                    Eintragung im Vereinsregister
                    <br />
                    Registergericht: Amtsgericht Saarbrücken
                    <br />
                    Registernummer: VR 5477
                  </p>
                </div>
              </Reveal>

              <Reveal variant="up" delay={320} duration={700} distance={20}>
                <div>
                  <div className="text-[11.5px] font-semibold uppercase tracking-kicker text-rot">
                    Vertretungsberechtigter Vorstand
                  </div>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-500 sm:text-[15.5px]">
                    Die Namen der vertretungsberechtigten Vorstandsmitglieder
                    werden hier zeitnah ergänzt.
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
              <div className="kicker-line">Haftung und Rechte</div>
            </Reveal>
            <Reveal variant="up" delay={100} duration={800}>
              <h2 className="h-serif mt-4 text-[26px] font-bold leading-[1.15] tracking-tight text-ink sm:text-[30px] md:text-[34px]">
                Hinweise zu Inhalten, Links und Urheberrecht.
              </h2>
            </Reveal>
            <Reveal variant="up" delay={180} duration={700}>
              <span className="rule-accent mt-6" />
            </Reveal>
          </div>

          <div className="mt-10 grid gap-8 md:mt-14 md:grid-cols-3 md:gap-10">
            <Reveal variant="up" delay={0} duration={700} distance={20}>
              <div>
                <div className="text-[11.5px] font-semibold uppercase tracking-kicker text-rot">
                  Inhalte
                </div>
                <h3 className="h-serif mt-3 text-[17px] font-bold leading-snug text-ink sm:text-[18.5px]">
                  Haftung für Inhalte.
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-ink-500 sm:text-[14.5px]">
                  Die Inhalte dieser Website werden mit größtmöglicher Sorgfalt
                  erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität
                  wird jedoch keine Gewähr übernommen. Als Diensteanbieter sind
                  wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten
                  nach den allgemeinen Gesetzen verantwortlich. Nach den §§ 8
                  bis 10 TMG besteht keine Verpflichtung, übermittelte oder
                  gespeicherte fremde Informationen zu überwachen oder nach
                  Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                  hinweisen.
                </p>
              </div>
            </Reveal>

            <Reveal variant="up" delay={100} duration={700} distance={20}>
              <div>
                <div className="text-[11.5px] font-semibold uppercase tracking-kicker text-rot">
                  Externe Links
                </div>
                <h3 className="h-serif mt-3 text-[17px] font-bold leading-snug text-ink sm:text-[18.5px]">
                  Haftung für Links.
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-ink-500 sm:text-[14.5px]">
                  Die Website enthält Links zu externen Websites Dritter, auf
                  deren Inhalte kein Einfluss besteht. Für die Inhalte der
                  verlinkten Seiten ist stets der jeweilige Anbieter oder
                  Betreiber verantwortlich. Zum Zeitpunkt der Verlinkung waren
                  keine Rechtsverstöße erkennbar. Bei Bekanntwerden von
                  Rechtsverletzungen werden entsprechende Links umgehend
                  entfernt.
                </p>
              </div>
            </Reveal>

            <Reveal variant="up" delay={200} duration={700} distance={20}>
              <div>
                <div className="text-[11.5px] font-semibold uppercase tracking-kicker text-rot">
                  Urheberrecht
                </div>
                <h3 className="h-serif mt-3 text-[17px] font-bold leading-snug text-ink sm:text-[18.5px]">
                  Texte, Bilder, Marken.
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-ink-500 sm:text-[14.5px]">
                  Die durch die Betreiber erstellten Inhalte und Werke auf
                  dieser Website unterliegen dem deutschen Urheberrecht.
                  Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                  Verwertung außerhalb der Grenzen des Urheberrechts bedürfen
                  der schriftlichen Zustimmung des Vereins. Downloads und
                  Kopien sind nur für den privaten, nicht kommerziellen Gebrauch
                  gestattet.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal variant="up" delay={300} duration={800}>
            <div className="infobox mt-12 text-[13.5px] leading-relaxed text-ink-600 sm:mt-16 sm:text-[14px]">
              <strong>Kontakt bei Fragen zum Impressum:</strong> Schreiben Sie
              kurz an{" "}
              <a
                href={`mailto:${SITE.contact.email}`}
                className="text-spende hover:underline"
              >
                {SITE.contact.email}
              </a>
              .{" "}
              <Link href="/kontakt" className="text-spende hover:underline">
                Zur Kontaktseite →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
