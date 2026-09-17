"use client";

import { useEffect, useRef, useState } from "react";
import { NUMBERS } from "@/lib/data";
import { Reveal } from "@/components/Reveal";

function useCountOnView(target: number, duration = 1500) {
  const ref = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setValue(target);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const step = (now: number) => {
              const t = Math.min(1, (now - start) / duration);
              const eased = 1 - Math.pow(1 - t, 3);
              setValue(Math.round(eased * target));
              if (t < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
            io.unobserve(node);
          }
        });
      },
      { threshold: 0.3 }
    );

    io.observe(node);
    return () => io.disconnect();
  }, [target, duration]);

  return { ref, value };
}

function Stat({
  raw,
  label,
  suffix,
  delay,
}: {
  raw: string;
  label: string;
  suffix: string;
  delay: number;
}) {
  const numeric = parseInt(raw.replace(/[^0-9]/g, ""), 10) || 0;
  const { ref, value } = useCountOnView(numeric, 1600 + delay);
  const display = raw.includes(".") ? `${value}.` : `${value}`;

  return (
    <Reveal variant="up" delay={delay} duration={800} distance={22}>
      <div ref={ref} className="border border-line bg-white p-6 md:p-7">
        <div className="h-serif text-[44px] font-bold leading-none text-rot md:text-[54px]">
          {display}
          <span className="text-rot">{suffix}</span>
        </div>
        <div className="mt-4 text-[13.5px] leading-snug text-ink-500">
          {label}
        </div>
      </div>
    </Reveal>
  );
}

export function Impact() {
  return (
    <section id="wirkung" className="section bg-paper-200">
      <div className="container-x">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <Reveal variant="up" duration={700}>
              <div className="kicker">Wirkung</div>
            </Reveal>
            <Reveal variant="up" delay={100} duration={800}>
              <h2 className="h-serif mt-3 text-[34px] font-bold leading-[1.1] tracking-tight text-ink md:text-[44px]">
                Was zwölf Winter bewegt haben.
              </h2>
            </Reveal>
          </div>
          <Reveal variant="up" delay={200} duration={800}>
            <p className="max-w-md text-[15px] leading-relaxed text-ink-500">
              Detaillierte Gäste- und Übernachtungszahlen erfassen wir intern
              und berichten sie einmal jährlich auf der
              Mitgliederversammlung.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-5">
          {NUMBERS.map((n, i) => (
            <Stat
              key={n.label}
              raw={n.value}
              label={n.label}
              suffix={n.suffix}
              delay={i * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
