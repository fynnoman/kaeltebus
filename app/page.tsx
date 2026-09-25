import { Hero } from "@/components/Hero";
import { Pillars } from "@/components/Pillars";
import { Notfall } from "@/components/Notfall";
import { Winter } from "@/components/Winter";
import { Fakten } from "@/components/Fakten";
import { Unterstuetzer } from "@/components/Unterstuetzer";
import { JsonLd } from "@/components/JsonLd";
import { localBusinessSchema } from "@/lib/schema";

export default function Page() {
  return (
    <main>
      <JsonLd id="ld-home" data={localBusinessSchema()} />
      <Hero />
      <Notfall />
      <Winter />
      <Pillars />
      <Unterstuetzer />
      <Fakten />
    </main>
  );
}
