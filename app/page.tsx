import { Hero } from "@/components/Hero";
import { Pillars } from "@/components/Pillars";
import { Notfall } from "@/components/Notfall";
import { Unterstuetzer } from "@/components/Unterstuetzer";

export default function Page() {
  return (
    <main>
      <Hero />
      <Notfall />
      <Pillars />
      <Unterstuetzer />
    </main>
  );
}
