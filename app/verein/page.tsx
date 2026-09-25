import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Pillars } from "@/components/Pillars";
import { VereinDetail } from "@/components/VereinDetail";
import { JsonLd } from "@/components/JsonLd";
import { aboutPageSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Unser Auftrag",
  description:
    "Kältebus Saarbrücken e.V.: gemeinnütziger Verein, gegründet zur Versorgung obdachloser und bedürftiger Menschen im Winter. Ohne Bedürftigkeitsprüfung.",
  alternates: { canonical: "/verein" },
  openGraph: {
    title: "Unser Auftrag · Kältebus Saarbrücken e.V.",
    description:
      "Warum es den Kältebus Saarbrücken e.V. gibt: gemeinnützig, ehrenamtlich, ohne Bedürftigkeitsprüfung.",
    url: "https://kaeltebus-saarbruecken.de/verein",
  },
};

const crumbs = [
  { name: "Start", href: "/" },
  { name: "Unser Auftrag" },
];

export default function Page() {
  return (
    <main>
      <JsonLd
        id="ld-verein"
        data={[aboutPageSchema(), breadcrumbSchema(crumbs)]}
      />
      <PageHeader
        kicker="Unser Auftrag"
        title="Warum es uns gibt."
        lead="Der Kältebus Saarbrücken ist ein eingetragener, gemeinnütziger Verein aus Saarbrücken. Wir betreiben den Kältebus am Römerkastell für alle, die im Winter einen beheizten, sicheren Ort brauchen."
        crumbs={[{ label: "Start", href: "/" }, { label: "Unser Auftrag" }]}
      />
      <Pillars />
      <VereinDetail />
    </main>
  );
}
