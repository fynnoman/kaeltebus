import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Bedarf } from "@/components/Bedarf";
import { BedarfDetail } from "@/components/BedarfDetail";

export const metadata: Metadata = {
  title: "Bedarfsliste",
  description:
    "Aktuelle Bedarfsliste des Kältebus Saarbrücken e.V.: Was wir annehmen und was nicht. Bitte vor Sachspenden kurz per E-Mail abstimmen.",
};

export default function Page() {
  return (
    <main>
      <PageHeader
        kicker="Bedarfsliste"
        title="Was gerade gebraucht wird."
        lead="Bitte vor jeder Sachspende kurz per E-Mail Bescheid geben. So verhindern wir, dass Dinge angeliefert werden, die wir nicht lagern oder verteilen können."
        crumbs={[{ label: "Start", href: "/" }, { label: "Bedarfsliste" }]}
      />
      <Bedarf />
      <BedarfDetail />
    </main>
  );
}
