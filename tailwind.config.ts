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
          100: "#fbf9f4",
          200: "#f6f2ea",
          300: "#eee8db",
        },
        ink: {
          DEFAULT: "#1c1c1c",
          50: "#f5f5f4",
          100: "#e7e5e0",
          200: "#c9c6bd",
          300: "#8f8b80",
          400: "#5a564d",
          500: "#3a3733",
          600: "#26241f",
          700: "#1c1c1c",
          800: "#141412",
        },
        rot: {
          DEFAULT: "#b0201e",
          50: "#fdf3f2",
          100: "#fbe0de",
          200: "#f6b6b3",
          300: "#ee807d",
          400: "#d84a46",
          500: "#b0201e",
          600: "#8f1917",
          700: "#6f1210",
          800: "#4c0a09",
        },
        line: "#e5e0d3",
        muted: "#6a655b",
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
        card: "0 1px 2px rgba(20,20,18,0.04), 0 8px 24px -12px rgba(20,20,18,0.10)",
        cardHover:
          "0 1px 2px rgba(20,20,18,0.05), 0 18px 40px -18px rgba(20,20,18,0.18)",
        header: "0 1px 0 rgba(20,20,18,0.06)",
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
