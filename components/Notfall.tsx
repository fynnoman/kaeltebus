"use client";

import { Reveal } from "@/components/Reveal";

export function Notfall() {
  return (
    <section className="bg-white">
      <div className="container-x py-10 sm:py-14 md:py-20">
        <Reveal variant="up" duration={800} distance={26}>
          <div className="border border-rot bg-rot-50">
            <div className="grid gap-5 p-6 sm:gap-6 sm:p-8 md:grid-cols-[1fr_auto] md:items-center md:gap-10 md:p-12">
              <div>
                <div className="text-[11.5px] font-semibold uppercase tracking-kicker text-rot sm:text-[12px]">
                  Wenn Sie gerade jemanden in der Kälte sehen
                </div>
                <h3 className="h-serif mt-3 text-[22px] font-bold leading-tight tracking-tight text-ink sm:text-[26px] md:text-[32px]">
                  Erst ansprechen. Im Zweifel 112 anrufen.
                </h3>
                <p className="mt-3 max-w-2xl text-[14.5px] leading-relaxed text-ink-600 sm:text-[15px]">
                  Vor allem in extrem kalten Nächten. Fragen Sie, ob Hilfe
                  gewünscht ist. Bei Bewusstlosigkeit, Unterkühlung oder wenn
                  eine Person nicht mehr ansprechbar ist, sofort den
                  Rettungsdienst rufen. Das rettet Leben, nicht ein Anruf hier.
                </p>
              </div>
              <div className="flex flex-col gap-2.5 sm:gap-3">
                <a
                  href="tel:112"
                  className="inline-flex min-h-[56px] items-center justify-center gap-2 rounded bg-rot px-6 py-4 text-[17px] font-bold text-white hover:bg-rot-600 sm:text-[18px]"
                >
                  Notruf 112 anrufen
                </a>
                <a
                  href="tel:+4915156348029"
                  className="btn-secondary w-full justify-center"
                >
                  Kältebus · 0151 5634 8029
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
