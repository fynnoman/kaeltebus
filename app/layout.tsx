import type { Metadata } from "next";
import { Source_Sans_3, Merriweather } from "next/font/google";
import "./globals.css";

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
  metadataBase: new URL("https://kaeltebussaarbruecken.de"),
  title: {
    default:
      "Kältebus Saarbrücken e.V. · Hilfe für Obdachlose und Menschen in Not",
    template: "%s · Kältebus Saarbrücken e.V.",
  },
  description:
    "Seit 2014 betreibt der Kältebus Saarbrücken jeden Winter am Römerkastell ein beheiztes Kältedorf mit Schlaf-Iglus, warmer Mahlzeit und aufsuchender Hilfe. Ohne Bedürftigkeitsprüfung. Rein ehrenamtlich.",
  keywords: [
    "Kältebus Saarbrücken",
    "Obdachlosenhilfe Saarland",
    "Kältedorf",
    "Wärmestube",
    "Notschlafstelle",
    "Ehrenamt Saarbrücken",
    "Spenden Obdachlose",
  ],
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://kaeltebussaarbruecken.de",
    title:
      "Kältebus Saarbrücken e.V. · Hilfe für Obdachlose und Menschen in Not",
    description:
      "Jeden Winter am Römerkastell: beheiztes Kältedorf, Schlaf-Iglus, warme Mahlzeit. Ehrenamtlich. Ohne Bedürftigkeitsprüfung.",
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
        {children}
      </body>
    </html>
  );
}
