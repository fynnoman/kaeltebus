import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Pillars } from "@/components/Pillars";
import { VereinDetail } from "@/components/VereinDetail";

export const metadata: Metadata = {
  title: "Unser Auftrag",
  description:
    "Kältebus Saarbrücken e.V.: gemeinnütziger Verein, gegründet zur Versorgung obdachloser und bedürftiger Menschen im Winter. Ohne Bedürftigkeitsprüfung.",
};

export default function Page() {
  return (
    <main>
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
