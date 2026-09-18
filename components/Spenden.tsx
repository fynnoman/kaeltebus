"use client";

import Link from "next/link";
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
      className="mt-2 inline-flex w-full items-center justify-between gap-2 rounded border border-line bg-white px-3 py-2 text-left font-mono text-[12.5px] tracking-wider text-ink hover:border-rot sm:w-auto sm:text-[13.5px]"
    >
      <span className="break-all">{SITE.bank.iban}</span>
      <span className="flex-none text-[11px] uppercase tracking-kicker text-rot">
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
              <h2 className="h-serif mt-3 text-[28px] font-bold leading-[1.1] tracking-tight text-ink sm:text-[34px] md:text-[44px]">
                Geld. Sache. Zeit.
              </h2>
            </Reveal>
          </div>
          <Reveal variant="up" delay={200} duration={800}>
            <p className="max-w-md text-[14.5px] leading-relaxed text-ink-500 sm:text-[15px]">
              Der Verein arbeitet ehrenamtlich. Spenden fließen direkt in die
              Versorgung im Kältedorf.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-6 md:grid-cols-3">
          {/* Geldspende */}
          <Reveal variant="up" delay={0} duration={800} distance={26}>
            <article className="card relative flex h-full flex-col p-6 sm:p-8" id="spende-geld">
              <span className="absolute inset-x-0 top-0 h-[3px] bg-rot" />
              <div className="text-[12px] font-semibold uppercase tracking-kicker text-rot">
                01 · Geldspende
              </div>
              <h3 className="h-serif mt-4 text-[20px] font-bold leading-tight text-ink sm:text-[22px]">
                Geld spenden.
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-ink-500 sm:text-[14.5px]">
                Der zuverlässigste Weg. Jede Spende hilft im laufenden Betrieb
                des Kältedorfs. Steuerlich absetzbar.
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
                className="btn-primary mt-6 w-full sm:w-fit"
              >
                Online spenden über betterplace
              </a>
            </article>
          </Reveal>

          {/* Sachspende */}
          <Reveal variant="up" delay={130} duration={800} distance={26}>
            <article className="card relative flex h-full flex-col p-6 sm:p-8" id="spende-sach">
              <span className="absolute inset-x-0 top-0 h-[3px] bg-rot/50" />
              <div className="text-[12px] font-semibold uppercase tracking-kicker text-rot">
                02 · Sachspende
              </div>
              <h3 className="h-serif mt-4 text-[20px] font-bold leading-tight text-ink sm:text-[22px]">
                Sachen spenden.
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-ink-500 sm:text-[14.5px]">
                Bitte vorher kurz per E-Mail abstimmen, was aktuell gebraucht
                wird. Wir unterhalten keine Kleiderkammer.
              </p>
              <Link href="/bedarf" className="btn-secondary mt-8 w-full sm:w-fit">
                Zur Bedarfsliste
              </Link>
            </article>
          </Reveal>

          {/* Zeitspende */}
          <Reveal variant="up" delay={260} duration={800} distance={26}>
            <article className="card relative flex h-full flex-col p-6 sm:p-8" id="spende-zeit">
              <span className="absolute inset-x-0 top-0 h-[3px] bg-rot/50" />
              <div className="text-[12px] font-semibold uppercase tracking-kicker text-rot">
                03 · Zeitspende
              </div>
              <h3 className="h-serif mt-4 text-[20px] font-bold leading-tight text-ink sm:text-[22px]">
                Zeit spenden.
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-ink-500 sm:text-[14.5px]">
                Der Verein arbeitet ehrenamtlich. Wer sich einbringen möchte,
                schreibt uns eine kurze E-Mail.
              </p>
              <Link href="/helfen" className="btn-secondary mt-8 w-full sm:w-fit">
                Ehrenamtlich helfen
              </Link>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
