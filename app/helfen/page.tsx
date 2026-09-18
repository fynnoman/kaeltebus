import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Helfen } from "@/components/Helfen";

export const metadata: Metadata = {
  title: "Ehrenamt",
  description:
    "Ehrenamtlich beim Kältebus Saarbrücken e.V. mitmachen: im Kältedorf, in der Küche, beim Aufbau oder materiell.",
};

export default function Page() {
  return (
    <main>
      <PageHeader
        kicker="Ehrenamt"
        title="Zeit spenden."
        lead="Der Verein arbeitet ausschließlich ehrenamtlich. Wer sich einbringen möchte, meldet sich per E-Mail und bekommt alle Informationen zum Ablauf."
        crumbs={[{ label: "Start", href: "/" }, { label: "Ehrenamt" }]}
      />
      <Helfen />
    </main>
  );
}
