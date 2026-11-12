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
import { loadPageTexts, t } from "@/lib/texts";

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

export default async function Page() {
  const texts = await loadPageTexts("helfen");
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
        kicker={t(texts, "header_kicker", "Ehrenamt")}
        title={t(texts, "header_title", "Zeit spenden.")}
        lead={t(
          texts,
          "header_lead",
          "Der Verein arbeitet ausschließlich ehrenamtlich. Wer sich einbringen möchte, meldet sich per E-Mail und bekommt alle Informationen zum Ablauf.",
        )}
        crumbs={[{ label: "Start", href: "/" }, { label: "Ehrenamt" }]}
      />
      <Helfen texts={texts} />
      <section className="section bg-paper-100 pt-0">
        <div className="container-x">
          <figure className="overflow-hidden rounded-md border border-line bg-white">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/helferfest.jpg"
              alt="Gruppenfoto der Helferinnen und Helfer beim alljährlichen Helferfest"
              className="h-auto w-full object-cover"
            />
            <figcaption className="px-5 py-3 text-[13.5px] text-ink-500 md:px-6 md:py-4">
              Unser Dank an viele liebe Menschen · das alljährliche Helferfest
            </figcaption>
          </figure>
        </div>
      </section>
      <HelfenDetail texts={texts} />
    </main>
  );
}
