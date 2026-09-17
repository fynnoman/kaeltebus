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

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Meta bar — desktop only */}
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
        <div className="container-x flex items-center justify-between py-3 md:py-5">
          <a
            href="#top"
            onClick={() => setOpen(false)}
            className="flex min-w-0 items-center gap-2.5 md:gap-3"
          >
            <span
              aria-hidden="true"
              className="flex h-9 w-9 flex-none items-center justify-center rounded-sm bg-rot text-white md:h-10 md:w-10"
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
            <div className="flex min-w-0 flex-col leading-tight">
              <span className="h-serif truncate text-[16px] font-bold text-ink md:text-[19px]">
                Kältebus Saarbrücken
              </span>
              <span className="hidden truncate text-[12px] text-muted sm:block">
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

          <div className="flex flex-none items-center gap-2">
            <a
              href="#spenden"
              className="btn-primary hidden !min-h-[42px] !px-4 !py-2 text-[13.5px] sm:inline-flex md:!min-h-[46px] md:!px-5 md:!py-2.5 md:text-[14px]"
            >
              Spenden
            </a>
            <button
              onClick={() => setOpen((o) => !o)}
              className="inline-flex h-11 w-11 items-center justify-center rounded border border-line text-ink hover:border-rot hover:text-rot lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Menü schließen" : "Menü öffnen"}
            >
              {open ? (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M3 3l12 12M15 3L3 15"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
                  <path
                    d="M1 1h18M1 7h18M1 13h18"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {open && (
          <nav
            id="mobile-nav"
            className="border-t border-line bg-white lg:hidden"
          >
            <div className="container-x flex flex-col py-2">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between border-b border-line py-4 text-[16px] font-medium text-ink last:border-b-0 hover:text-rot"
                >
                  {l.label}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    className="text-ink-300"
                  >
                    <path
                      d="M4 7h7m0 0-3-3m3 3-3 3"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              ))}
              <div className="mt-4 flex flex-col gap-2 pb-4">
                <a
                  href="#spenden"
                  onClick={() => setOpen(false)}
                  className="btn-primary w-full"
                >
                  Jetzt spenden
                </a>
                <a
                  href="tel:+4915156348029"
                  className="btn-secondary w-full"
                >
                  0151 5634 8029 anrufen
                </a>
              </div>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}
