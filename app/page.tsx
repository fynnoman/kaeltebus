import { Nav } from "@/components/Nav";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Hero } from "@/components/Hero";
import { Pillars } from "@/components/Pillars";
import { Chronology } from "@/components/Chronology";
import { Ablauf } from "@/components/Ablauf";
import { Impact } from "@/components/Impact";
import { Spenden } from "@/components/Spenden";
import { Bedarf } from "@/components/Bedarf";
import { Helfen } from "@/components/Helfen";
import { Press } from "@/components/Press";
import { Netz } from "@/components/Netz";
import { Notfall } from "@/components/Notfall";
import { Kontakt } from "@/components/Kontakt";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <main>
      <ScrollProgress />
      <Nav />
      <Hero />
      <Pillars />
      <Chronology />
      <Ablauf />
      <Impact />
      <Notfall />
      <Spenden />
      <Bedarf />
      <Helfen />
      <Press />
      <Netz />
      <Kontakt />
      <Footer />
    </main>
  );
}
