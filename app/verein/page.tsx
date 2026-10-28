import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Pillars } from "@/components/Pillars";
import { VereinDetail } from "@/components/VereinDetail";
import { JsonLd } from "@/components/JsonLd";
import { aboutPageSchema, breadcrumbSchema } from "@/lib/schema";
import { loadPageTexts, t } from "@/lib/texts";

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

export default async function Page() {
  const [vereinTexts, homeTexts] = await Promise.all([
    loadPageTexts("verein"),
    loadPageTexts("home"),
  ]);
  return (
    <main>
      <JsonLd
        id="ld-verein"
        data={[aboutPageSchema(), breadcrumbSchema(crumbs)]}
      />
      <PageHeader
        kicker={t(vereinTexts, "header_kicker", "Unser Auftrag")}
        title={t(vereinTexts, "header_title", "Warum es uns gibt.")}
        lead={t(
          vereinTexts,
          "header_lead",
          "Der Kältebus Saarbrücken ist ein eingetragener, gemeinnütziger Verein aus Saarbrücken. Wir betreiben den Kältebus am Römerkastell für alle, die im Winter einen beheizten, sicheren Ort brauchen.",
        )}
        crumbs={[{ label: "Start", href: "/" }, { label: "Unser Auftrag" }]}
      />
      <Pillars texts={homeTexts} />
      <VereinDetail texts={vereinTexts} />
    </main>
  );
}
