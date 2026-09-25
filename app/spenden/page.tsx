import type { Metadata } from "next";
import Script from "next/script";
import { PageHeader } from "@/components/PageHeader";
import { Spenden } from "@/components/Spenden";
import { SpendenDetail } from "@/components/SpendenDetail";

export const metadata: Metadata = {
  title: "Spenden",
  description:
    "So können Sie den Kältebus Saarbrücken e.V. unterstützen: Geldspende auf das Vereinskonto, Sachspende nach Bedarfsliste oder ehrenamtliches Engagement.",
};

export default function Page() {
  return (
    <main>
      <PageHeader
        kicker="Spenden"
        title="Ihre Spende zählt."
        lead="Der Verein arbeitet ehrenamtlich. Spenden fließen direkt in die Versorgung am Kältebus am Römerkastell."
        crumbs={[{ label: "Start", href: "/" }, { label: "Spenden" }]}
      />
      <Spenden />
      <SpendenDetail />
      <Script
        src="https://www.betterplace.org/de/widgets/overlays/HLtn7WX_zxMC4isLSCtZ4dY2.js"
        strategy="afterInteractive"
      />
    </main>
  );
}
