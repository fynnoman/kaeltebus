import type { Metadata } from "next";
import { Source_Sans_3, Merriweather } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { ngoSchema, websiteSchema, placeSchema } from "@/lib/schema";
import { SITE } from "@/lib/data";

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

const SITE_URL = "https://kaeltebus-saarbruecken.de";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Kältebus Saarbrücken e.V. · Hilfe für Obdachlose und Menschen in Not",
    template: "%s · Kältebus Saarbrücken e.V.",
  },
  description:
    "Gemeinnütziger Verein aus Saarbrücken. Kältebus am Römerkastell für obdachlose und bedürftige Menschen. Ohne Bedürftigkeitsprüfung.",
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE_URL }],
  creator: SITE.name,
  publisher: SITE.name,
  category: "Nonprofit · Soziale Hilfe",
  keywords: [
    "Kältebus Saarbrücken",
    "Obdachlosenhilfe Saarbrücken",
    "Winterhilfe Saarland",
    "Spenden Obdachlose Saarbrücken",
    "Ehrenamt Obdachlosenhilfe",
    "Hilfe für Obdachlose Saarbrücken",
    "Am Römerkastell",
    "Sachspende Obdachlose",
    "Gemeinnütziger Verein Saarbrücken",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: SITE_URL,
    siteName: SITE.name,
    title:
      "Kältebus Saarbrücken e.V. · Hilfe für Obdachlose und Menschen in Not",
    description:
      "Gemeinnütziger Verein aus Saarbrücken. Kältebus am Römerkastell. Ohne Bedürftigkeitsprüfung.",
    images: [
      {
        url: "/images/first3-mc-team.jpg",
        alt: "Kältebus Saarbrücken e.V. am Römerkastell",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Kältebus Saarbrücken e.V. · Hilfe für Obdachlose und Menschen in Not",
    description:
      "Gemeinnütziger Verein aus Saarbrücken. Kältebus am Römerkastell. Ohne Bedürftigkeitsprüfung.",
    images: ["/images/first3-mc-team.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
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
        <JsonLd
          id="ld-organization"
          data={[ngoSchema(), websiteSchema(), placeSchema()]}
        />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
