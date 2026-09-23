"use client";

import { Reveal } from "@/components/Reveal";
import { SITE } from "@/lib/data";

export function Notfall() {
  return (
    <section className="bg-white">
      <div className="container-x py-10 sm:py-14 md:py-20">
        <Reveal variant="up" duration={800} distance={26}>
          <div className="relative overflow-hidden border border-rot bg-rot-50">
            <span
              aria-hidden
              className="pointer-events-none absolute -right-6 -top-16 select-none font-serif text-[220px] font-bold leading-none text-rot opacity-[0.08] sm:text-[280px] md:text-[360px]"
            >
              112
            </span>
            <div className="relative grid gap-5 p-6 sm:gap-6 sm:p-8 md:grid-cols-[1fr_auto] md:items-center md:gap-10 md:p-12">
              <div>
                <div className="eyebrow">
                  Wenn Sie jemanden in der Kälte sehen
                </div>
                <h3 className="h-serif mt-4 text-[24px] font-bold leading-[1.1] tracking-tight text-ink sm:text-[30px] md:text-[38px]">
                  Erst ansprechen.
                  <br />
                  <span className="italic text-rot">Im Zweifel 112 anrufen.</span>
                </h3>
                <p className="mt-4 max-w-2xl text-[14.5px] leading-relaxed text-ink-600 sm:mt-5 sm:text-[15px]">
                  Vor allem in extrem kalten Nächten. Fragen Sie, ob Hilfe
                  gewünscht ist. Bei Bewusstlosigkeit, Unterkühlung oder wenn
                  eine Person nicht mehr ansprechbar ist, sofort den
                  Rettungsdienst rufen.
                </p>
              </div>
              <div className="flex flex-col gap-2.5 sm:gap-3">
                <a
                  href="tel:112"
                  className="inline-flex min-h-[60px] items-center justify-center gap-2 rounded bg-rot px-7 py-4 text-[18px] font-bold text-white shadow-card transition-colors hover:bg-rot-600 sm:text-[19px]"
                >
                  Notruf 112 anrufen
                </a>
                <a
                  href={`mailto:${SITE.contact.email}`}
                  className="btn-secondary w-full justify-center"
                >
                  Hinweis per E-Mail
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
