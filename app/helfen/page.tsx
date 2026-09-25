import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Helfen } from "@/components/Helfen";
import { HelfenDetail } from "@/components/HelfenDetail";
import { JsonLd } from "@/components/JsonLd";
import {
  breadcrumbSchema,
  volunteerActionSchema,
  webPageSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "Ehrenamt",
  description:
    "Ehrenamtlich beim Kältebus Saarbrücken e.V. mitmachen: am Kältebus, in der Küche, beim Aufbau oder materiell.",
  alternates: { canonical: "/helfen" },
  openGraph: {
    title: "Ehrenamt · Kältebus Saarbrücken e.V.",
    description:
      "Ehrenamtlich am Kältebus am Römerkastell mithelfen. Küche, Ausgabe, Aufbau, Ansprechpartner.",
    url: "https://kaeltebus-saarbruecken.de/helfen",
  },
};

const crumbs = [
  { name: "Start", href: "/" },
  { name: "Ehrenamt" },
];

export default function Page() {
  return (
    <main>
      <JsonLd
        id="ld-helfen"
        data={[
          webPageSchema({
            url: "/helfen",
            name: "Ehrenamt · Kältebus Saarbrücken e.V.",
            description:
              "Ehrenamtlich am Kältebus am Römerkastell mithelfen.",
            breadcrumbs: crumbs,
          }),
          volunteerActionSchema(),
          breadcrumbSchema(crumbs),
        ]}
      />
      <PageHeader
        kicker="Ehrenamt"
        title="Zeit spenden."
        lead="Der Verein arbeitet ausschließlich ehrenamtlich. Wer sich einbringen möchte, meldet sich per E-Mail und bekommt alle Informationen zum Ablauf."
        crumbs={[{ label: "Start", href: "/" }, { label: "Ehrenamt" }]}
      />
      <Helfen />
      <HelfenDetail />
    </main>
  );
}
