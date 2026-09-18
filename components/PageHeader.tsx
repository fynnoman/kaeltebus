"use client";

import { Reveal } from "@/components/Reveal";

type Crumb = { label: string; href?: string };

export function PageHeader({
  kicker,
  title,
  lead,
  crumbs = [],
}: {
  kicker: string;
  title: string;
  lead?: string;
  crumbs?: Crumb[];
}) {
  return (
    <section className="border-b border-line bg-paper-100">
      <div className="container-x py-14 sm:py-20 md:py-24">
        {crumbs.length > 0 && (
          <Reveal variant="up" duration={500}>
            <nav
              aria-label="Brotkrumen"
              className="mb-6 flex flex-wrap items-center gap-1.5 text-[12.5px] text-ink-400"
            >
              {crumbs.map((c, i) => (
                <span key={c.label} className="inline-flex items-center gap-1.5">
                  {c.href ? (
                    <a href={c.href} className="hover:text-rot">
                      {c.label}
                    </a>
                  ) : (
                    <span>{c.label}</span>
                  )}
                  {i < crumbs.length - 1 && (
                    <span aria-hidden="true" className="text-ink-300">
                      /
                    </span>
                  )}
                </span>
              ))}
            </nav>
          </Reveal>
        )}
        <Reveal variant="up" duration={700}>
          <div className="kicker">{kicker}</div>
        </Reveal>
        <Reveal variant="up" delay={100} duration={800}>
          <h1 className="h-serif mt-4 text-[32px] font-bold leading-[1.05] tracking-tight text-ink sm:text-[44px] md:text-[56px]">
            {title}
          </h1>
        </Reveal>
        {lead && (
          <Reveal variant="up" delay={220} duration={800}>
            <p className="mt-5 max-w-2xl text-[15.5px] leading-relaxed text-ink-500 sm:text-[17px]">
              {lead}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
