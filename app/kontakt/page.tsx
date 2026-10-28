import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Kontakt } from "@/components/Kontakt";
import { KontaktDetail } from "@/components/KontaktDetail";
import { JsonLd } from "@/components/JsonLd";
import {
  breadcrumbSchema,
  contactPageSchema,
  localBusinessSchema,
} from "@/lib/schema";
import { loadPageTexts, t } from "@/lib/texts";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontakt zum Kältebus Saarbrücken e.V.: E-Mail, Vereinssitz und Standort am Römerkastell in Saarbrücken.",
  alternates: { canonical: "/kontakt" },
  openGraph: {
    title: "Kontakt · Kältebus Saarbrücken e.V.",
    description:
      "E-Mail, Telefon, Vereinssitz und Standort am Römerkastell.",
    url: "https://kaeltebus-saarbruecken.de/kontakt",
  },
};

const crumbs = [
  { name: "Start", href: "/" },
  { name: "Kontakt" },
];

export default async function Page() {
  const texts = await loadPageTexts("kontakt");
  return (
    <main>
      <JsonLd
        id="ld-kontakt"
        data={[
          contactPageSchema(),
          localBusinessSchema(),
          breadcrumbSchema(crumbs),
        ]}
      />
      <PageHeader
        kicker={t(texts, "header_kicker", "Kontakt")}
        title={t(texts, "header_title", "Schreiben Sie uns.")}
        lead={t(
          texts,
          "header_lead",
          "Für Spenden, Ehrenamt, Presse oder allgemeine Fragen erreichen Sie uns am schnellsten per E-Mail.",
        )}
        crumbs={[{ label: "Start", href: "/" }, { label: "Kontakt" }]}
      />
      <Kontakt texts={texts} />
      <KontaktDetail texts={texts} />
    </main>
  );
}
