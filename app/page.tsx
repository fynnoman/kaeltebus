import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Pillars } from "@/components/Pillars";
import { Spenden } from "@/components/Spenden";
import { Bedarf } from "@/components/Bedarf";
import { Helfen } from "@/components/Helfen";
import { Unterstuetzer } from "@/components/Unterstuetzer";
import { Notfall } from "@/components/Notfall";
import { Kontakt } from "@/components/Kontakt";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <main>
      <Nav />
      <Hero />
      <Pillars />
      <Notfall />
      <Spenden />
      <Bedarf />
      <Helfen />
      <Unterstuetzer />
      <Kontakt />
      <Footer />
    </main>
  );
}
