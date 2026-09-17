"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#verein", label: "Der Verein" },
  { href: "#kaeltedorf", label: "Kältedorf" },
  { href: "#wirkung", label: "Wirkung" },
  { href: "#spenden", label: "Spenden" },
  { href: "#helfen", label: "Ehrenamt" },
  { href: "#presse", label: "Presse" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Meta bar */}
      <div className="hidden bg-ink-800 text-paper-100 md:block">
        <div className="container-x flex items-center justify-between py-2 text-[12.5px]">
          <div className="flex items-center gap-6">
            <span>Vereinssitz Saarbrücken · Sankt-Johanner-Straße 49</span>
            <span className="text-paper-200/70">
              Gemeinnützig anerkannt · VR 5477 Amtsgericht Saarbrücken
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a href="tel:+4915156348029" className="hover:text-white">
              Öffentlichkeitsarbeit · 0151 5634 8029
            </a>
            <a
              href="mailto:info@kaeltebussaarbruecken.de"
              className="hover:text-white"
            >
              info@kaeltebussaarbruecken.de
            </a>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 bg-white transition-shadow ${
          scrolled ? "shadow-header" : ""
        } border-b border-line`}
      >
        <div className="container-x flex items-center justify-between py-4 md:py-5">
          <a href="#top" className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="flex h-10 w-10 items-center justify-center rounded-sm bg-rot text-white"
            >
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
              <span className="h-serif text-[18px] font-bold text-ink md:text-[19px]">
                Kältebus Saarbrücken
              </span>
              <span className="text-[12px] text-muted">
                Hilfe für Obdachlose und Menschen in Not e.V.
              </span>
            </div>
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded px-3 py-2 text-[14.5px] text-ink-500 hover:text-rot"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a href="#spenden" className="btn-primary hidden sm:inline-flex">
              Jetzt spenden
            </a>
            <button
              onClick={() => setOpen((o) => !o)}
              className="btn-secondary lg:hidden"
              aria-expanded={open}
              aria-label="Menü"
            >
              <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
                <path
                  d="M1 1h16M1 7h16M1 13h16"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
              Menü
            </button>
          </div>
        </div>

        {open && (
          <nav className="border-t border-line bg-white lg:hidden">
            <div className="container-x flex flex-col py-3">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-line py-3 text-[15px] text-ink-500 last:border-b-0 hover:text-rot"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>
    </>
  );
}
