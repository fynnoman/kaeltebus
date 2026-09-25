import type { Metadata } from "next";
import { Source_Sans_3, Merriweather } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const sans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const serif = Merriweather({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kaeltebus-saarbruecken.de"),
  title: {
    default:
      "Kältebus Saarbrücken e.V. · Hilfe für Obdachlose und Menschen in Not",
    template: "%s · Kältebus Saarbrücken e.V.",
  },
  description:
    "Gemeinnütziger Verein aus Saarbrücken. Kältebus am Römerkastell für obdachlose und bedürftige Menschen. Ohne Bedürftigkeitsprüfung.",
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://kaeltebus-saarbruecken.de",
    title:
      "Kältebus Saarbrücken e.V. · Hilfe für Obdachlose und Menschen in Not",
    description:
      "Gemeinnütziger Verein aus Saarbrücken. Kältebus am Römerkastell. Ohne Bedürftigkeitsprüfung.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${sans.variable} ${serif.variable}`}>
      <body className="bg-white text-ink font-sans antialiased">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
