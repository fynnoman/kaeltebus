import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Bedarf } from "@/components/Bedarf";
import { BedarfDetail } from "@/components/BedarfDetail";
import { JsonLd } from "@/components/JsonLd";
import {
  bedarfItemListSchema,
  breadcrumbSchema,
  webPageSchema,
} from "@/lib/schema";
import { loadPageTexts, t } from "@/lib/texts";

export const metadata: Metadata = {
  title: "Bedarfsliste",
  description:
    "Aktuelle Bedarfsliste des Kältebus Saarbrücken e.V.: Was wir annehmen und was nicht. Bitte vor Sachspenden kurz per E-Mail abstimmen.",
  alternates: { canonical: "/bedarf" },
  openGraph: {
    title: "Bedarfsliste · Kältebus Saarbrücken e.V.",
    description:
      "Was der Kältebus am Römerkastell gerade als Sachspende braucht und was nicht.",
    url: "https://kaeltebus-saarbruecken.de/bedarf",
  },
};

const crumbs = [
  { name: "Start", href: "/" },
  { name: "Bedarfsliste" },
];

export default async function Page() {
  const texts = await loadPageTexts("bedarf");
  return (
    <main>
      <JsonLd
        id="ld-bedarf"
        data={[
          webPageSchema({
            url: "/bedarf",
            name: "Bedarfsliste · Kältebus Saarbrücken e.V.",
            description:
              "Was der Kältebus am Römerkastell gerade als Sachspende annimmt.",
            breadcrumbs: crumbs,
          }),
          bedarfItemListSchema(),
          breadcrumbSchema(crumbs),
        ]}
      />
      <PageHeader
        kicker={t(texts, "header_kicker", "Bedarfsliste")}
        title={t(texts, "header_title", "Was gerade gebraucht wird.")}
        lead={t(
          texts,
          "header_lead",
          "Bitte vor jeder Sachspende kurz per E-Mail Bescheid geben. So verhindern wir, dass Dinge angeliefert werden, die wir nicht lagern oder verteilen können.",
        )}
        crumbs={[{ label: "Start", href: "/" }, { label: "Bedarfsliste" }]}
      />
      <Bedarf texts={texts} />
      <BedarfDetail texts={texts} />
    </main>
  );
}
