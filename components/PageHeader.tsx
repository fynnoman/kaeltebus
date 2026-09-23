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
    <section className="relative overflow-hidden border-b border-line bg-paper-100">
      <span
        aria-hidden
        className="pointer-events-none absolute -right-8 -top-16 select-none font-serif text-[220px] font-bold leading-none text-rot opacity-[0.05] sm:text-[300px] md:-right-16 md:-top-24 md:text-[420px]"
      >
        §
      </span>
      <div className="container-x relative py-14 sm:py-20 md:py-28">
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
          <div className="eyebrow">{kicker}</div>
        </Reveal>
        <Reveal variant="up" delay={100} duration={800}>
          <h1 className="display-serif mt-5 text-[36px] text-ink sm:text-[52px] md:text-[72px] lg:text-[84px]">
            {title}
          </h1>
        </Reveal>
        <Reveal variant="up" delay={180} duration={700}>
          <span className="rule-accent-lg mt-8" />
        </Reveal>
        {lead && (
          <Reveal variant="up" delay={260} duration={800}>
            <p className="mt-6 max-w-2xl text-[15.5px] leading-relaxed text-ink-500 sm:text-[17px]">
              {lead}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
