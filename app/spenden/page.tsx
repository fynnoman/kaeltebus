import type { Metadata } from "next";
import Script from "next/script";
import { PageHeader } from "@/components/PageHeader";
import { Spenden } from "@/components/Spenden";
import { SpendenDetail } from "@/components/SpendenDetail";
import { JsonLd } from "@/components/JsonLd";
import {
  breadcrumbSchema,
  donateActionSchema,
  webPageSchema,
} from "@/lib/schema";
import { loadPageTexts, t } from "@/lib/texts";

export const metadata: Metadata = {
  title: "Spenden",
  description:
    "So können Sie den Kältebus Saarbrücken e.V. unterstützen: Geldspende auf das Vereinskonto, Sachspende nach Bedarfsliste oder ehrenamtliches Engagement.",
  alternates: { canonical: "/spenden" },
  openGraph: {
    title: "Spenden · Kältebus Saarbrücken e.V.",
    description:
      "Geldspende, Sachspende, Zeitspende: So unterstützen Sie den Kältebus am Römerkastell direkt.",
    url: "https://kaeltebus-saarbruecken.de/spenden",
  },
};

const crumbs = [
  { name: "Start", href: "/" },
  { name: "Spenden" },
];

export default async function Page() {
  const texts = await loadPageTexts("spenden");
  return (
    <main>
      <JsonLd
        id="ld-spenden"
        data={[
          webPageSchema({
            url: "/spenden",
            name: "Spenden · Kältebus Saarbrücken e.V.",
            description:
              "Geldspende, Sachspende und Zeitspende für den Kältebus am Römerkastell.",
            breadcrumbs: crumbs,
          }),
          donateActionSchema(),
          breadcrumbSchema(crumbs),
        ]}
      />
      <PageHeader
        kicker={t(texts, "header_kicker", "Spenden")}
        title={t(texts, "header_title", "Ihre Spende zählt.")}
        lead={t(
          texts,
          "header_lead",
          "Der Verein arbeitet ehrenamtlich. Spenden fließen direkt in die Versorgung am Kältebus am Römerkastell.",
        )}
        crumbs={[{ label: "Start", href: "/" }, { label: "Spenden" }]}
      />
      <Spenden texts={texts} />
      <SpendenDetail texts={texts} />
      <Script
        src="https://www.betterplace.org/de/widgets/overlays/HLtn7WX_zxMC4isLSCtZ4dY2.js"
        strategy="afterInteractive"
      />
    </main>
  );
}
