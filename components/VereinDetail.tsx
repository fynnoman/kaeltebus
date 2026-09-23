"use client";

import Link from "next/link";
import { SITE } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

export function VereinDetail() {
  return (
    <section className="section bg-paper-100">
      <div className="container-x">
        <div className="grid gap-10 md:grid-cols-2 md:gap-14">
          <Reveal variant="up" duration={800} distance={26}>
            <div>
              <div className="kicker-line">Grundhaltung</div>
              <h3 className="h-serif mt-4 text-[24px] font-bold leading-[1.15] tracking-tight text-ink sm:text-[28px] md:text-[32px]">
                Ohne Bedürftigkeitsprüfung.
              </h3>
              <span className="rule-accent mt-5" />
              <p className="mt-5 text-[14.5px] leading-relaxed text-ink-500 sm:text-[15px]">
                Wer bei uns ankommt, kommt herein. Unabhängig von Herkunft,
                Aufenthaltsstatus oder Vorgeschichte. Wir sind kein
                Sozialdienst und keine Meldebehörde, sondern ein
                Winterangebot für Menschen, die eine kalte Nacht sonst nicht
                gut überstehen.
              </p>
            </div>
          </Reveal>

          <Reveal variant="up" delay={120} duration={800} distance={26}>
            <div>
              <div className="kicker-line">Struktur</div>
              <h3 className="h-serif mt-4 text-[24px] font-bold leading-[1.15] tracking-tight text-ink sm:text-[28px] md:text-[32px]">
                100 % ehrenamtlich.
              </h3>
              <span className="rule-accent mt-5" />
              <p className="mt-5 text-[14.5px] leading-relaxed text-ink-500 sm:text-[15px]">
                Niemand im Verein bezieht ein Gehalt. Vorstand, Küche,
                Ausgabe, Aufbau, Kommunikation: alles geschieht in der
                Freizeit. Spenden fließen deshalb direkt in die Versorgung
                am Kältebus am Römerkastell.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal variant="up" delay={260} duration={800}>
          <div className="mt-10 flex flex-col gap-2.5 sm:mt-12 sm:flex-row sm:gap-3">
            <Link href="/spenden" className="btn-primary w-full sm:w-auto">
              Verein unterstützen
            </Link>
            <Link href="/helfen" className="btn-secondary w-full sm:w-auto">
              Ehrenamtlich mitmachen
            </Link>
            <Link href="/kontakt" className="btn-secondary w-full sm:w-auto">
              {SITE.contact.email}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
