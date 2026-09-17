"use client";

import { SITE } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-ink-800 text-paper-100">
      <div className="container-x pt-16 pb-10 md:pt-20">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-sm bg-rot text-white">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 2 L20 12 L18 12 L18 21 L14 21 L14 15 L10 15 L10 21 L6 21 L6 12 L4 12 Z" />
                </svg>
              </span>
              <div className="flex flex-col leading-tight">
                <span className="h-serif text-[18px] font-bold text-white">
                  Kältebus Saarbrücken
                </span>
                <span className="text-[12.5px] text-paper-100/70">
                  Hilfe für Obdachlose und Menschen in Not e.V.
                </span>
              </div>
            </div>
            <p className="mt-6 max-w-md text-[14px] leading-relaxed text-paper-100/80">
              Gemeinnütziger Verein. Seit 2014. Betrieben von ehrenamtlich
              Aktiven im Netzwerk der AWO Saarland. Ohne Bedürftigkeitsprüfung.
              Für ein Saarbrücken, in dem niemand erfriert.
            </p>

            <div className="mt-6 border-l-4 border-rot bg-white/5 p-4 text-[13.5px] text-paper-100/90">
              <div className="font-semibold text-white">Spendenkonto</div>
              <div className="mt-1">{SITE.bank.holder}</div>
              <div className="mt-1 font-mono tracking-wider">
                {SITE.bank.iban}
              </div>
              <div className="mt-1 text-paper-100/70">
                {SITE.bank.bank} · BIC {SITE.bank.bic}
              </div>
            </div>
          </div>

          <div>
            <div className="text-[12px] font-semibold uppercase tracking-kicker text-rot-300">
              Der Verein
            </div>
            <ul className="mt-5 space-y-3 text-[14px] text-paper-100/90">
              <li>
                <a href="#verein" className="hover:text-white">
                  Über uns
                </a>
              </li>
              <li>
                <a href="#kaeltedorf" className="hover:text-white">
                  Das Kältedorf
                </a>
              </li>
              <li>
                <a href="#wirkung" className="hover:text-white">
                  Wirkung
                </a>
              </li>
              <li>
                <a href="#presse" className="hover:text-white">
                  Presse
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-[12px] font-semibold uppercase tracking-kicker text-rot-300">
              Mithelfen
            </div>
            <ul className="mt-5 space-y-3 text-[14px] text-paper-100/90">
              <li>
                <a href="#spenden" className="hover:text-white">
                  Geld spenden
                </a>
              </li>
              <li>
                <a href="#bedarf" className="hover:text-white">
                  Sachspenden
                </a>
              </li>
              <li>
                <a href="#helfen" className="hover:text-white">
                  Ehrenamt
                </a>
              </li>
              <li>
                <a href="#kontakt" className="hover:text-white">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-[12px] font-semibold uppercase tracking-kicker text-rot-300">
              Folgen
            </div>
            <ul className="mt-5 space-y-3 text-[14px] text-paper-100/90">
              <li>
                <a
                  href={SITE.social.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={SITE.social.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href={SITE.social.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white"
                >
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 h-px bg-white/10" />

        <div className="mt-6 flex flex-col justify-between gap-3 text-[12.5px] text-paper-100/70 md:flex-row">
          <div>
            © {new Date().getFullYear()} {SITE.name} · Alle Rechte vorbehalten
            · Amtsgericht Saarbrücken VR 5477
          </div>
          <div className="flex flex-wrap gap-6">
            <a href="#impressum" className="hover:text-white">
              Impressum
            </a>
            <a href="#datenschutz" className="hover:text-white">
              Datenschutz
            </a>
            <a href="#satzung" className="hover:text-white">
              Satzung
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
