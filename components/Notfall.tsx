"use client";

import { Reveal } from "@/components/Reveal";

export function Notfall() {
  return (
    <section className="bg-white">
      <div className="container-x py-14 md:py-20">
        <Reveal variant="up" duration={800} distance={26}>
          <div className="border border-rot bg-rot-50">
            <div className="grid gap-6 p-8 md:grid-cols-[1fr_auto] md:items-center md:gap-10 md:p-12">
              <div>
                <div className="text-[12px] font-semibold uppercase tracking-kicker text-rot">
                  Wenn Sie gerade jemanden in der Kälte sehen
                </div>
                <h3 className="h-serif mt-3 text-[26px] font-bold leading-tight tracking-tight text-ink md:text-[32px]">
                  Erst ansprechen. Im Zweifel 112 anrufen.
                </h3>
                <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-ink-600">
                  Vor allem in extrem kalten Nächten. Fragen Sie, ob Hilfe
                  gewünscht ist. Bei Bewusstlosigkeit, Unterkühlung oder wenn
                  eine Person nicht mehr ansprechbar ist, sofort den
                  Rettungsdienst rufen. Das rettet Leben, nicht ein Anruf hier.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href="tel:112"
                  className="inline-flex items-center justify-center gap-2 rounded bg-rot px-6 py-4 text-[18px] font-bold text-white hover:bg-rot-600"
                >
                  Notruf 112 anrufen
                </a>
                <a
                  href="tel:+4915156348029"
                  className="btn-secondary justify-center"
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
