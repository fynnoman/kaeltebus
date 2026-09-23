import { Hero } from "@/components/Hero";
import { Pillars } from "@/components/Pillars";
import { Notfall } from "@/components/Notfall";
import { Winter } from "@/components/Winter";
import { Fakten } from "@/components/Fakten";
import { Unterstuetzer } from "@/components/Unterstuetzer";

export default function Page() {
  return (
    <main>
      <Hero />
      <Notfall />
      <Winter />
      <Pillars />
      <Unterstuetzer />
      <Fakten />
    </main>
  );
}
