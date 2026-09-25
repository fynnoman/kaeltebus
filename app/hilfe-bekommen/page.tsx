import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { HilfeBekommen } from "@/components/HilfeBekommen";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqPageSchema, webPageSchema } from "@/lib/schema";
import { isWinterSeason } from "@/lib/season";

const SITE_URL = "https://kaeltebus-saarbruecken.de";

export const metadata: Metadata = {
  title: "Hilfe bekommen",
  description:
    "Du brauchst Hilfe im Winter? Der Kältebus Saarbrücken ist am Römerkastell für dich da. Ohne Ausweis, ohne Anmeldung, ohne Fragen.",
  alternates: { canonical: "/hilfe-bekommen" },
  openGraph: {
    title: "Hilfe bekommen · Kältebus Saarbrücken",
    description:
      "Du brauchst Hilfe im Winter? Der Kältebus am Römerkastell ist für dich da. Ohne Ausweis, ohne Anmeldung.",
    url: `${SITE_URL}/hilfe-bekommen`,
  },
};

const crumbs = [
  { name: "Start", href: "/" },
  { name: "Hilfe bekommen" },
];

const faqs = [
  {
    q: "Brauche ich einen Ausweis, um zum Kältebus zu kommen?",
    a: "Nein. Du brauchst keinen Ausweis. Du musst dich nicht anmelden.",
  },
  {
    q: "Muss ich meine Geschichte erzählen?",
    a: "Nein. Der Kältebus fragt nicht nach Namen, Aufenthaltsstatus oder Vorgeschichte.",
  },
  {
    q: "Kostet der Aufenthalt am Kältebus etwas?",
    a: "Nein. Wärme, Essen, Trinken und Gespräche sind kostenlos.",
  },
  {
    q: "Wo genau ist der Kältebus in Saarbrücken?",
    a: "Am Römerkastell in Saarbrücken. Mit der Saarbahn erreichbar über die Haltestelle Römerkastell.",
  },
  {
    q: "Wann ist der Kältebus geöffnet?",
    a: "In der Wintersaison, abends und nachts an kalten Tagen. Bei Unsicherheit unter 0151 56348795 nachfragen.",
  },
  {
    q: "Kann ich meinen Hund mitbringen?",
    a: "Ja. Hunde sind willkommen. Kurz den Helfern Bescheid geben.",
  },
];

export default function Page() {
  const winter = isWinterSeason();
  const title = winter
    ? "Wir sind für dich da."
    : "Der Kältebus öffnet wieder im Winter.";
  const lead = winter
    ? "Wenn du im Winter Wärme, Essen oder einen sicheren Ort brauchst: du kannst zum Kältebus am Römerkastell kommen. Ohne Ausweis, ohne Anmeldung."
    : "In der kalten Jahreszeit steht der Kältebus am Römerkastell. Wärme, Essen und ein Ort zum Ausruhen. Ohne Ausweis, ohne Anmeldung.";

  return (
    <main>
      <JsonLd
        id="ld-hilfe-bekommen"
        data={[
          webPageSchema({
            url: "/hilfe-bekommen",
            name: "Hilfe bekommen · Kältebus Saarbrücken",
            description:
              "Der Kältebus am Römerkastell in Saarbrücken. Ohne Ausweis, ohne Anmeldung, ohne Fragen.",
            breadcrumbs: crumbs,
          }),
          faqPageSchema(faqs),
          breadcrumbSchema(crumbs),
        ]}
      />
      <PageHeader
        kicker="Hilfe bekommen"
        title={title}
        lead={lead}
        crumbs={[{ label: "Start", href: "/" }, { label: "Hilfe bekommen" }]}
      />
      <HilfeBekommen />
    </main>
  );
}
