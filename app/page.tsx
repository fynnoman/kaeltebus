import { Hero } from "@/components/Hero";
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

const homeCrumbs = [{ name: "Start" }];

export default function Page() {
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
      <Hero />
      <Notfall />
      <Winter />
      <Pillars />
      <Unterstuetzer />
      <Fakten />
    </main>
  );
}
