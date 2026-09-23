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
          DEFAULT: "#4d8b25",
          50: "#f3faec",
          100: "#dcf0c4",
          200: "#b7dc8b",
          300: "#8dc356",
          400: "#66a12f",
          500: "#4d8b25",
          600: "#3b6d1a",
          700: "#2b5211",
          800: "#1b360a",
        },
        notfall: {
          DEFAULT: "#2f6b12",
          50: "#eaf5df",
          100: "#cfe6b8",
          500: "#2f6b12",
          600: "#1f4a08",
        },
        spende: {
          DEFAULT: "#6f7f14",
          50: "#f7f8df",
          500: "#6f7f14",
          600: "#55620d",
        },
        winter: {
          DEFAULT: "#6a9c25",
          50: "#f0f8de",
          500: "#6a9c25",
          600: "#527d18",
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
