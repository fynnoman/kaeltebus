import { Hero } from "@/components/Hero";
import { AktuellesPreview } from "@/components/AktuellesPreview";
import { Pillars } from "@/components/Pillars";
import { Notfall } from "@/components/Notfall";
import { Winter } from "@/components/Winter";
import { Fakten } from "@/components/Fakten";
import { Unterstuetzer } from "@/components/Unterstuetzer";
import { JsonLd } from "@/components/JsonLd";
import {
  breadcrumbSchema,
  localBusinessSchema,
  webPageSchema,
} from "@/lib/schema";
import { loadPageTexts } from "@/lib/texts";

const homeCrumbs = [{ name: "Start" }];

export default async function Page() {
  const texts = await loadPageTexts("home");
  return (
    <main>
      <JsonLd
        id="ld-home"
        data={[
          webPageSchema({
            url: "/",
            name: "Kältebus Saarbrücken e.V. · Hilfe für Obdachlose und Menschen in Not",
            description:
              "Gemeinnütziger Verein aus Saarbrücken. Kältebus am Römerkastell für obdachlose und bedürftige Menschen. Ohne Bedürftigkeitsprüfung.",
            breadcrumbs: homeCrumbs,
          }),
          localBusinessSchema(),
          breadcrumbSchema(homeCrumbs),
        ]}
      />
      <Hero texts={texts} />
      <AktuellesPreview />
      <Notfall texts={texts} />
      <Winter texts={texts} />
      <Pillars texts={texts} />
      <Unterstuetzer texts={texts} />
      <Fakten texts={texts} />
    </main>
  );
}
