import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Kontakt } from "@/components/Kontakt";
import { KontaktDetail } from "@/components/KontaktDetail";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontakt zum Kältebus Saarbrücken e.V.: E-Mail, Vereinssitz und Standort am Römerkastell in Saarbrücken.",
};

export default function Page() {
  return (
    <main>
      <PageHeader
        kicker="Kontakt"
        title="Schreiben Sie uns."
        lead="Für Spenden, Ehrenamt, Presse oder allgemeine Fragen erreichen Sie uns am schnellsten per E-Mail."
        crumbs={[{ label: "Start", href: "/" }, { label: "Kontakt" }]}
      />
      <Kontakt />
      <KontaktDetail />
    </main>
  );
}
