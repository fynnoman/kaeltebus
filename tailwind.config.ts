import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
    "./lib/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "#ffffff",
          50: "#ffffff",
          100: "#f7f7f7",
          200: "#efefef",
          300: "#e5e5e5",
        },
        ink: {
          DEFAULT: "#111111",
          50: "#f5f5f5",
          100: "#e5e5e5",
          200: "#c9c9c9",
          300: "#8f8f8f",
          400: "#5a5a5a",
          500: "#3a3a3a",
          600: "#262626",
          700: "#1a1a1a",
          800: "#0f0f0f",
        },
        rot: {
          DEFAULT: "#d13a3a",
          50: "#fdf3f3",
          100: "#fbe2e2",
          200: "#f5bcbc",
          300: "#ec8a8a",
          400: "#e15a5a",
          500: "#d13a3a",
          600: "#b02929",
          700: "#8a1e1e",
          800: "#5e1414",
        },
        line: "#e5e5e5",
        muted: "#6b7280",
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "sans-serif",
        ],
        serif: [
          "var(--font-serif)",
          "Georgia",
          "Times New Roman",
          "serif",
        ],
      },
      letterSpacing: {
        kicker: "0.14em",
      },
      boxShadow: {
        card: "0 1px 2px rgba(0,0,0,0.04), 0 8px 24px -12px rgba(0,0,0,0.10)",
        cardHover:
          "0 1px 2px rgba(0,0,0,0.05), 0 18px 40px -18px rgba(0,0,0,0.18)",
        header: "0 1px 0 rgba(0,0,0,0.06)",
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: "0", transform: "translate3d(0,10px,0)" },
          to: { opacity: "1", transform: "translate3d(0,0,0)" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp .6s cubic-bezier(.22,1,.36,1) both",
      },
    },
  },
  plugins: [],
};

export default config;
