import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Spenden } from "@/components/Spenden";
import { Unterstuetzer } from "@/components/Unterstuetzer";

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
        lead="Der Verein arbeitet ehrenamtlich. Spenden fließen direkt in die Versorgung im Kältedorf am Römerkastell."
        crumbs={[{ label: "Start", href: "/" }, { label: "Spenden" }]}
      />
      <Spenden />
      <Unterstuetzer />
    </main>
  );
}
