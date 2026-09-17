"use client";

import { CSSProperties, ReactNode, useEffect, useRef, useState } from "react";

type Variant = "up" | "left" | "right" | "fade" | "scale";

type Props = {
  children: ReactNode;
  as?: keyof JSX.IntrinsicElements;
  variant?: Variant;
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  once?: boolean;
  threshold?: number;
  style?: CSSProperties;
};

const initialTransform = (variant: Variant, distance: number) => {
  switch (variant) {
    case "left":
      return `translate3d(-${distance}px, 0, 0)`;
    case "right":
      return `translate3d(${distance}px, 0, 0)`;
    case "scale":
      return `translate3d(0, 0, 0) scale(0.96)`;
    case "fade":
      return `translate3d(0, 0, 0)`;
    case "up":
    default:
      return `translate3d(0, ${distance}px, 0)`;
  }
};

export function Reveal({
  children,
  as: Tag = "div",
  variant = "up",
  delay = 0,
  duration = 700,
  distance = 24,
  className = "",
  once = true,
  threshold = 0.15,
  style,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            if (once) io.unobserve(e.target);
          } else if (!once) {
            setShown(false);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -8% 0px" }
    );

    io.observe(node);
    return () => io.disconnect();
  }, [once, threshold]);

  const mergedStyle: CSSProperties = {
    opacity: shown ? 1 : 0,
    transform: shown
      ? "translate3d(0, 0, 0) scale(1)"
      : initialTransform(variant, distance),
    transition: `opacity ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
    willChange: "opacity, transform",
    ...style,
  };

  const Element = Tag as any;
  return (
    <Element ref={ref as any} className={className} style={mergedStyle}>
      {children}
    </Element>
  );
}

export function Stagger({
  children,
  step = 90,
  initialDelay = 0,
  variant = "up",
  duration = 700,
  distance = 20,
  className = "",
}: {
  children: ReactNode;
  step?: number;
  initialDelay?: number;
  variant?: Variant;
  duration?: number;
  distance?: number;
  className?: string;
}) {
  const items = Array.isArray(children) ? children : [children];
  return (
    <div className={className}>
      {items.map((child, i) => (
        <Reveal
          key={i}
          variant={variant}
          duration={duration}
          distance={distance}
          delay={initialDelay + step * i}
        >
          {child}
        </Reveal>
      ))}
    </div>
  );
}
