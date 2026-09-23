"use client";

import Link from "next/link";
import { SITE } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-ink-800 text-paper-100">
      <div className="container-x pt-12 pb-10 sm:pt-16 md:pt-20">
        <div className="grid gap-10 sm:grid-cols-2 sm:gap-12 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div className="sm:col-span-2 md:col-span-1">
            <Link
              href="/"
              className="inline-flex items-center rounded bg-white p-3"
              aria-label="Kältebus Saarbrücken e.V. · Startseite"
            >
              <img
                src="/images/logo.jpg"
                alt="Kältebus Saarbrücken e.V."
                className="h-16 w-auto md:h-20"
              />
            </Link>
            <p className="mt-6 max-w-md text-[14px] leading-relaxed text-paper-100/80">
              Gemeinnütziger Verein aus Saarbrücken. Winterbetrieb am
              Kältebus am Römerkastell. Ohne Bedürftigkeitsprüfung.
            </p>

            <div className="mt-6 border-l-4 border-rot bg-white/5 p-4 text-[13.5px] text-paper-100/90">
              <div className="font-semibold text-white">Spendenkonto</div>
              <div className="mt-1">{SITE.bank.holder}</div>
              <div className="mt-1 break-all font-mono tracking-wider">
                {SITE.bank.iban}
              </div>
              <div className="mt-1 text-paper-100/70">
                {SITE.bank.bank} · BIC {SITE.bank.bic}
              </div>
            </div>
          </div>

          <div>
            <div className="text-[12px] font-semibold uppercase tracking-kicker text-rot-300">
              Bereiche
            </div>
            <ul className="mt-5 space-y-3 text-[14px] text-paper-100/90">
              <li>
                <Link href="/verein" className="hover:text-white">
                  Unser Auftrag
                </Link>
              </li>
              <li>
                <Link href="/spenden" className="hover:text-white">
                  Spenden
                </Link>
              </li>
              <li>
                <Link href="/bedarf" className="hover:text-white">
                  Bedarfsliste
                </Link>
              </li>
              <li>
                <Link href="/helfen" className="hover:text-white">
                  Ehrenamt
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-[12px] font-semibold uppercase tracking-kicker text-rot-300">
              Kontakt
            </div>
            <ul className="mt-5 space-y-3 text-[14px] text-paper-100/90">
              <li>
                <a
                  href={`mailto:${SITE.contact.email}`}
                  className="break-all hover:text-white"
                >
                  {SITE.contact.email}
                </a>
              </li>
              <li className="text-paper-100/80">
                {SITE.address.street}
                <br />
                {SITE.address.zip} {SITE.address.city}
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

        <div className="mt-10 h-px bg-white/10 sm:mt-14" />

        <div className="mt-6 flex flex-col justify-between gap-4 text-[12px] text-paper-100/70 sm:text-[12.5px] md:flex-row md:items-center">
          <div>
            © {new Date().getFullYear()} {SITE.name} · Amtsgericht Saarbrücken
            VR 5477
          </div>
          <div className="flex flex-wrap gap-4 sm:gap-6">
            <a href="#impressum" className="hover:text-white">
              Impressum
            </a>
            <a href="#datenschutz" className="hover:text-white">
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
