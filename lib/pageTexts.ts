export type TextField = {
  key: string;
  label: string;
  kind: "short" | "long";
  default: string;
};

export type PageDef = {
  slug: string;
  label: string;
  description: string;
  fields: TextField[];
};

const s = (key: string, label: string, def: string): TextField => ({
  key,
  label,
  kind: "short",
  default: def,
});

const l = (key: string, label: string, def: string): TextField => ({
  key,
  label,
  kind: "long",
  default: def,
});

export const PAGE_DEFS: PageDef[] = [
  {
    slug: "home",
    label: "Startseite",
    description: "Hero, Notfall-Box, Winter-Sektion, Säulen, Unterstützer, Fakten.",
    fields: [
      s("hero_badge", "Hero · Badge-Text (sonst Vereinsname)", "Kältebus Saarbrücken e.V."),
      s("hero_title_line1", "Hero · Titelzeile 1", "Ein warmer"),
      s("hero_title_line2", "Hero · Titelzeile 2", "Schlafplatz"),
      s("hero_title_line3", "Hero · Titelzeile 3 (kursiv rot)", "rettet Leben."),
      l(
        "hero_lead",
        "Hero · Fließtext",
        "Jeden Winter am Römerkastell. Ein beheizter Ort für obdachlose und bedürftige Menschen. Ohne Bedürftigkeitsprüfung, unabhängig von Herkunft, Aufenthaltsstatus oder Vorgeschichte."
      ),
      s("hero_cta_primary", "Hero · Primär-Button", "Jetzt spenden"),
      s("hero_cta_secondary", "Hero · Sekundär-Button", "Ehrenamtlich helfen"),
      s("hero_fact1_kicker", "Hero · Fakt 1 Kicker", "Standort"),
      s("hero_fact1_body", "Hero · Fakt 1 Text", "Am Römerkastell\n66121 Saarbrücken"),
      s("hero_fact2_kicker", "Hero · Fakt 2 Kicker", "Rechtsform"),
      s("hero_fact2_body", "Hero · Fakt 2 Text", "Gemeinnütziger Verein\nVR 5477, Amtsgericht Saarbrücken"),

      s("notfall_eyebrow", "Notfall · Kicker", "Wenn Sie jemanden in der Kälte sehen"),
      s("notfall_title_line1", "Notfall · Titelzeile 1", "Erst ansprechen."),
      s("notfall_title_line2", "Notfall · Titelzeile 2 (kursiv)", "Im Zweifel 112 anrufen."),
      l(
        "notfall_body",
        "Notfall · Fließtext",
        "Vor allem in extrem kalten Nächten. Fragen Sie, ob Hilfe gewünscht ist. Bei Bewusstlosigkeit, Unterkühlung oder wenn eine Person nicht mehr ansprechbar ist, sofort den Rettungsdienst rufen."
      ),
      s("notfall_cta_call", "Notfall · Call-Button", "Notruf 112 anrufen"),
      s("notfall_cta_mail", "Notfall · Mail-Button", "Hinweis per E-Mail"),

      s("winter_kicker", "Winter · Kicker", "Der Winter am Römerkastell"),
      s("winter_title", "Winter · Titel", "Ein beheizter Ort, wenn draußen alles gefriert."),
      l(
        "winter_body",
        "Winter · Fließtext",
        "Der Kältebus steht jeden Winter am Römerkastell in Saarbrücken. Wer hierher kommt, findet einen beheizten Ort, eine warme Mahlzeit und Menschen, die zuhören. Ohne Bedürftigkeitsprüfung, unabhängig von Herkunft, Aufenthaltsstatus oder Vorgeschichte."
      ),
      s("winter_fact1_kicker", "Winter · Fakt 1 Kicker", "Standort"),
      s("winter_fact2_kicker", "Winter · Fakt 2 Kicker", "Anreise"),
      s("winter_cta1", "Winter · Button 1", "Unser Auftrag"),
      s("winter_cta2", "Winter · Button 2", "Ehrenamt"),

      s("pillars_kicker", "Säulen · Kicker", "Unser Auftrag"),
      s("pillars_title", "Säulen · Titel", "Drei Sätze, die alles tragen."),
      l(
        "pillars_lead",
        "Säulen · Fließtext",
        "Der Kältebus Saarbrücken ist ein eingetragener, gemeinnütziger Verein (VR 5477, Amtsgericht Saarbrücken). Er arbeitet vollständig ehrenamtlich am Kältebus am Römerkastell."
      ),
      s("pillar1_kicker", "Säule 1 · Kicker", "Würde"),
      s("pillar1_title", "Säule 1 · Titel", "Ohne Bedürftigkeitsprüfung."),
      l(
        "pillar1_body",
        "Säule 1 · Text",
        "Wer bei uns ankommt, kommt herein. Unabhängig von Herkunft, Aufenthaltsstatus oder Vorgeschichte."
      ),
      s("pillar2_kicker", "Säule 2 · Kicker", "Wärme"),
      s("pillar2_title", "Säule 2 · Titel", "Ein sicherer Ort in der kältesten Nacht."),
      l(
        "pillar2_body",
        "Säule 2 · Text",
        "Ein beheizter Ort am Römerkastell, eine warme Mahlzeit und Ansprechpartner, wenn es sonst niemanden gibt."
      ),
      s("pillar3_kicker", "Säule 3 · Kicker", "Ehrenamt"),
      s("pillar3_title", "Säule 3 · Titel", "Getragen von Freiwilligen."),
      l(
        "pillar3_body",
        "Säule 3 · Text",
        "Der Verein arbeitet ehrenamtlich. Spenden fließen direkt in die Versorgung vor Ort."
      ),

      s("unterstuetzer_kicker", "Unterstützer · Kicker", "Danke an unsere Unterstützer"),
      s("unterstuetzer_title", "Unterstützer · Titel", "Ohne Sie kein Kältebus."),
      l(
        "unterstuetzer_lead",
        "Unterstützer · Fließtext",
        "Schulen, Firmen, Vereine, Kirchengemeinden und Motorradclubs tragen jeden Winter unsere Arbeit mit. Ein paar Momente aus der aktuellen Saison, stellvertretend für viele weitere."
      ),
      s("unterstuetzer1_kicker", "Unterstützer 1 · Kicker", "Schulspende"),
      s("unterstuetzer1_amount", "Unterstützer 1 · Betrag", "1.500 €"),
      s("unterstuetzer1_name", "Unterstützer 1 · Name", "Katharina-Weißgerber-Schule"),
      l(
        "unterstuetzer1_body",
        "Unterstützer 1 · Text",
        "Schülerinnen und Schüler haben in ihrer Schule Spenden gesammelt und den Erlös persönlich am Kältebus am Römerkastell übergeben."
      ),
      s("unterstuetzer2_kicker", "Unterstützer 2 · Kicker", "Firmenspende"),
      s("unterstuetzer2_amount", "Unterstützer 2 · Betrag", "3.000 €"),
      s("unterstuetzer2_name", "Unterstützer 2 · Name", "PARATEC Group"),
      l(
        "unterstuetzer2_body",
        "Unterstützer 2 · Text",
        "Ein starker Beitrag aus der regionalen Wirtschaft für die Versorgung am Kältebus."
      ),
      l(
        "unterstuetzer_cta",
        "Unterstützer · Infobox-Text (ohne E-Mail)",
        "Sie oder Ihr Unternehmen möchten helfen? Melden Sie sich per E-Mail an"
      ),

      s("fakten_kicker", "Fakten · Kicker", "Auf einen Blick"),
      s("fakten_title", "Fakten · Titel", "Wer wir sind, wohin es geht."),
      l(
        "fakten_lead",
        "Fakten · Fließtext",
        "Drei kurze Wege, mehr über den Verein zu erfahren oder ihn zu unterstützen."
      ),
      s("fakten1_kicker", "Fakten · Karte 1 Kicker", "Verein"),
      s("fakten1_title", "Fakten · Karte 1 Titel", "Eingetragen und gemeinnützig."),
      l(
        "fakten1_body",
        "Fakten · Karte 1 Text",
        "VR 5477, Amtsgericht Saarbrücken. Ein ehrenamtlicher Verein, der jeden Winter den Kältebus am Römerkastell betreibt."
      ),
      s("fakten1_cta", "Fakten · Karte 1 CTA", "Unser Auftrag"),
      s("fakten2_kicker", "Fakten · Karte 2 Kicker", "Spenden"),
      s("fakten2_title", "Fakten · Karte 2 Titel", "Direkt in die Versorgung."),
      l(
        "fakten2_body",
        "Fakten · Karte 2 Text",
        "Der Verein arbeitet ehrenamtlich. Jeder Euro fließt in Verpflegung und Ausstattung am Kältebus am Römerkastell."
      ),
      s("fakten2_cta", "Fakten · Karte 2 CTA", "Konto und betterplace"),
      s("fakten3_kicker", "Fakten · Karte 3 Kicker", "Ehrenamt"),
      s("fakten3_title", "Fakten · Karte 3 Titel", "Zeit statt Geld."),
      l(
        "fakten3_body",
        "Fakten · Karte 3 Text",
        "Ob Küche, Ausgabe, Aufbau oder Materialpflege: Wer helfen möchte, meldet sich per E-Mail und bekommt die Details zum Ablauf."
      ),
      s("fakten3_cta", "Fakten · Karte 3 CTA", "Mitmachen"),
    ],
  },

  {
    slug: "verein",
    label: "Unser Auftrag",
    description: "PageHeader, Säulen-Sektion (geteilt mit Home), Verein-Detail.",
    fields: [
      s("header_kicker", "Header · Kicker", "Unser Auftrag"),
      s("header_title", "Header · Titel", "Warum es uns gibt."),
      l(
        "header_lead",
        "Header · Lead",
        "Der Kältebus Saarbrücken ist ein eingetragener, gemeinnütziger Verein aus Saarbrücken. Wir betreiben den Kältebus am Römerkastell für alle, die im Winter einen beheizten, sicheren Ort brauchen."
      ),
      s("block1_kicker", "Block 1 · Kicker", "Grundhaltung"),
      s("block1_title", "Block 1 · Titel", "Ohne Bedürftigkeitsprüfung."),
      l(
        "block1_body",
        "Block 1 · Text",
        "Wer bei uns ankommt, kommt herein. Unabhängig von Herkunft, Aufenthaltsstatus oder Vorgeschichte. Wir sind kein Sozialdienst und keine Meldebehörde, sondern ein Winterangebot für Menschen, die eine kalte Nacht sonst nicht gut überstehen."
      ),
      s("block2_kicker", "Block 2 · Kicker", "Struktur"),
      s("block2_title", "Block 2 · Titel", "100 % ehrenamtlich."),
      l(
        "block2_body",
        "Block 2 · Text",
        "Niemand im Verein bezieht ein Gehalt. Vorstand, Küche, Ausgabe, Aufbau, Kommunikation: alles geschieht in der Freizeit. Spenden fließen deshalb direkt in die Versorgung am Kältebus am Römerkastell."
      ),
      s("cta_primary", "CTA · Primär", "Verein unterstützen"),
      s("cta_secondary", "CTA · Sekundär", "Ehrenamtlich mitmachen"),
    ],
  },

  {
    slug: "hilfe-bekommen",
    label: "Hilfe bekommen",
    description: "Für Menschen in Not: Begrüßung, Infokarten, FAQ, Hinweis für Passanten.",
    fields: [
      s("header_kicker", "Header · Kicker", "Hilfe bekommen"),
      s("header_title_winter", "Header · Titel (Wintersaison)", "Wir sind für dich da."),
      s("header_title_offseason", "Header · Titel (außerhalb Saison)", "Der Kältebus öffnet wieder im Winter."),
      l(
        "header_lead_winter",
        "Header · Lead (Wintersaison)",
        "Wenn du im Winter Wärme, Essen oder einen sicheren Ort brauchst: du kannst zum Kältebus am Römerkastell kommen. Ohne Ausweis, ohne Anmeldung."
      ),
      l(
        "header_lead_offseason",
        "Header · Lead (außerhalb Saison)",
        "In der kalten Jahreszeit steht der Kältebus am Römerkastell. Wärme, Essen und ein Ort zum Ausruhen. Ohne Ausweis, ohne Anmeldung."
      ),

      s("intro_kicker", "Intro · Kicker", "Für dich"),
      s("intro_title", "Intro · Titel", "Du bist willkommen."),
      l(
        "intro_body1",
        "Intro · Absatz 1",
        "Wenn es kalt ist und du einen sicheren Ort brauchst, kannst du zum Kältebus kommen. Du bekommst Wärme, etwas zu essen und zu trinken. Und Menschen, die dir zuhören."
      ),
      l(
        "intro_body2",
        "Intro · Absatz 2",
        "Du musst keinen Ausweis zeigen. Du musst dich nicht anmelden. Du musst nichts erzählen. Wer kommt, kommt herein."
      ),

      s("card1_kicker", "Karte 1 · Kicker", "Wo"),
      s("card1_title", "Karte 1 · Titel", "Am Römerkastell."),
      l(
        "card1_body",
        "Karte 1 · Text",
        "Der Kältebus steht am Römerkastell in Saarbrücken. Mit der Saarbahn kommst du direkt hin: Saarbahn-Haltestelle Römerkastell."
      ),

      s("card2_kicker", "Karte 2 · Kicker", "Wann"),
      s("card2_title", "Karte 2 · Titel", "In der Wintersaison."),
      l(
        "card2_body",
        "Karte 2 · Text",
        "Der Kältebus ist während der Wintermonate im Einsatz. Wenn du wissen möchtest, wann geöffnet ist, meld dich kurz beim Verein."
      ),

      s("card3_kicker", "Karte 3 · Kicker", "Was du bekommst"),
      s("card3_title", "Karte 3 · Titel", "Wärme, Essen, Ruhe."),
      s("card3_item1", "Karte 3 · Punkt 1", "Ein beheizter Ort zum Sitzen und Ausruhen."),
      s("card3_item2", "Karte 3 · Punkt 2", "Eine warme Mahlzeit und ein Getränk."),
      s("card3_item3", "Karte 3 · Punkt 3", "Menschen, die zuhören, wenn du reden möchtest."),
      s("card3_item4", "Karte 3 · Punkt 4", "Ruhe, wenn du keine Fragen möchtest."),

      s("faq_kicker", "FAQ · Kicker", "Fragen und Antworten"),
      s("faq_title", "FAQ · Titel", "Was du wissen solltest."),
      s("faq1_q", "FAQ 1 · Frage", "Brauche ich einen Ausweis?"),
      l("faq1_a", "FAQ 1 · Antwort", "Nein. Du brauchst keinen Ausweis. Du musst dich nicht anmelden."),
      s("faq2_q", "FAQ 2 · Frage", "Muss ich etwas erzählen?"),
      l(
        "faq2_a",
        "FAQ 2 · Antwort",
        "Nein. Wir fragen nicht nach deiner Herkunft, deinem Aufenthaltsstatus oder deiner Vorgeschichte."
      ),
      s("faq3_q", "FAQ 3 · Frage", "Kostet das etwas?"),
      l("faq3_a", "FAQ 3 · Antwort", "Nein. Alles ist kostenlos."),
      s("faq4_q", "FAQ 4 · Frage", "Wer ist da?"),
      l("faq4_a", "FAQ 4 · Antwort", "Ehrenamtliche Helferinnen und Helfer."),

      s("passant_kicker", "Passant · Kicker", "Für Angehörige und Passanten"),
      s("passant_title", "Passant · Titel", "Du siehst jemanden in Not?"),
      l(
        "passant_body1",
        "Passant · Absatz 1",
        "Wenn ein Mensch bei Kälte draußen liegt und du unsicher bist, ob es ihm gut geht: sprich die Person an, wenn möglich. Bleib in ihrer Nähe."
      ),
      l(
        "passant_body2",
        "Passant · Absatz 2",
        "Wenn die Person nicht ansprechbar ist, bewusstlos wirkt oder stark unterkühlt scheint, ruf sofort den Rettungsdienst."
      ),
      s("notruf_kicker", "Notruf · Kicker", "Akute Not · Rettungsdienst"),
      l(
        "notruf_body",
        "Notruf · Text",
        "Wenn eine Person bewusstlos, nicht ansprechbar oder stark unterkühlt ist: nicht warten. Sofort 112 wählen."
      ),
      s("notruf_cta", "Notruf · Button", "112 anrufen"),
      l(
        "infobox_body",
        "Info-Box · Text (ohne Links)",
        "Wenn du helfen möchtest: Der Kältebus lebt vom Ehrenamt und von Spenden."
      ),
      s("infobox_link_helfen", "Info-Box · Link-Text Ehrenamt", "Ehrenamtlich mithelfen"),
      s("infobox_link_spenden", "Info-Box · Link-Text Spenden", "den Kältebus mit einer Spende unterstützen"),
    ],
  },

  {
    slug: "spenden",
    label: "Spenden",
    description: "Spenden-Übersicht (Geld/Sache/Zeit), Wohin-Sektion, FAQ zur Spende.",
    fields: [
      s("header_kicker", "Header · Kicker", "Spenden"),
      s("header_title", "Header · Titel", "Ihre Spende zählt."),
      l(
        "header_lead",
        "Header · Lead",
        "Der Verein arbeitet ehrenamtlich. Spenden fließen direkt in die Versorgung am Kältebus am Römerkastell."
      ),

      s("overview_kicker", "Übersicht · Kicker", "Drei Wege zu helfen"),
      s("overview_title", "Übersicht · Titel", "Geld. Sache. Zeit."),
      l(
        "overview_lead",
        "Übersicht · Fließtext",
        "Der Verein arbeitet ehrenamtlich. Spenden fließen direkt in die Versorgung vor Ort."
      ),

      s("geld_kicker", "Geldspende · Kicker", "01 · Geldspende"),
      s("geld_title", "Geldspende · Titel", "Geld spenden."),
      l(
        "geld_body",
        "Geldspende · Text",
        "Der zuverlässigste Weg. Jede Spende hilft im laufenden Betrieb am Kältebus."
      ),
      s("geld_cta", "Geldspende · Button", "Online spenden über betterplace"),

      s("sach_kicker", "Sachspende · Kicker", "02 · Sachspende"),
      s("sach_title", "Sachspende · Titel", "Sachen spenden."),
      l(
        "sach_body",
        "Sachspende · Text",
        "Sachspenden helfen uns dort, wo sie gerade wirklich gebraucht werden. Bitte stimmen Sie deshalb vorab kurz per E-Mail mit uns ab, was aktuell benötigt wird. Eine allgemeine Kleiderkammer betreiben wir nicht."
      ),
      s("sach_cta", "Sachspende · Button", "Aktuellen Bedarf ansehen"),

      s("zeit_kicker", "Zeitspende · Kicker", "03 · Zeitspende"),
      s("zeit_title", "Zeitspende · Titel", "Zeit schenken."),
      l(
        "zeit_body",
        "Zeitspende · Text",
        "Der Kältebus lebt vom Engagement freiwilliger Helferinnen und Helfer. Wer sich einbringen und mit seiner Zeit unterstützen möchte, kann sich ganz unkompliziert bei uns melden."
      ),
      s("zeit_cta", "Zeitspende · Button", "Ehrenamtlich mithelfen"),

      s("wohin_kicker", "Wohin · Kicker", "Wohin die Spende geht"),
      s("wohin_title", "Wohin · Titel", "Hilfe, die direkt ankommt."),
      l(
        "wohin_lead",
        "Wohin · Fließtext",
        "Der Kältebus wird vollständig ehrenamtlich getragen. Spenden fließen deshalb unmittelbar in das, was im Winter gebraucht wird: warme Mahlzeiten, einen geschützten und beheizten Ort sowie wichtige Dinge für Menschen, die draußen schlafen."
      ),
      s("wohin1_kicker", "Wohin · Karte 1 Kicker", "Verpflegung"),
      s("wohin1_title", "Wohin · Karte 1 Titel", "Eine warme Mahlzeit."),
      l(
        "wohin1_body",
        "Wohin · Karte 1 Text",
        "Lebensmittel, Getränke und alles, was für die tägliche Versorgung am Kältebus benötigt wird. Abend für Abend, während der gesamten Wintersaison."
      ),
      s("wohin2_kicker", "Wohin · Karte 2 Kicker", "Wärme"),
      s("wohin2_title", "Wohin · Karte 2 Titel", "Schutz vor der Kälte."),
      l(
        "wohin2_body",
        "Wohin · Karte 2 Text",
        "Spenden unterstützen den Betrieb des Kältebusses am Römerkastell: von Heizung und Beleuchtung bis hin zu Küche und Aufenthaltsbereich."
      ),
      s("wohin3_kicker", "Wohin · Karte 3 Kicker", "Ausstattung"),
      s("wohin3_title", "Wohin · Karte 3 Titel", "Das Wichtigste für draußen."),
      l(
        "wohin3_body",
        "Wohin · Karte 3 Text",
        "Neue Unterwäsche und Socken, Hygieneartikel, Isomatten und warme Schlafsäcke helfen dabei, kalte Nächte ein Stück sicherer und erträglicher zu machen."
      ),

      s("faq_kicker", "FAQ · Kicker", "Fragen zur Spende"),
      s("faq_title", "FAQ · Titel", "Was wir häufig gefragt werden."),
      s("faq1_q", "FAQ 1 · Frage", "Sind Spenden steuerlich absetzbar?"),
      l(
        "faq1_a",
        "FAQ 1 · Antwort",
        "Ja. Der Kältebus Saarbrücken ist ein gemeinnütziger Verein (VR 5477, Amtsgericht Saarbrücken). Zuwendungen an den Verein sind nach den geltenden Regeln steuerlich abzugsfähig."
      ),
      s("faq2_q", "FAQ 2 · Frage", "Wie erhalte ich eine Spendenquittung?"),
      l(
        "faq2_a",
        "FAQ 2 · Antwort",
        "Für eine Spendenbescheinigung genügt eine kurze E-Mail an finanzen@kaeltebus-saarbruecken.de mit dem Spendendatum und der Adresse für die Zustellung."
      ),
      s("faq3_q", "FAQ 3 · Frage", "Kann ich zweckgebunden spenden?"),
      l(
        "faq3_a",
        "FAQ 3 · Antwort",
        "Ja. Ein Hinweis im Verwendungszweck (zum Beispiel 'Verpflegung' oder 'Ausstattung') wird bei der Verwendung berücksichtigt. Bei größeren Zuwendungen bitte kurz per E-Mail Kontakt aufnehmen."
      ),
      s("faq4_q", "FAQ 4 · Frage", "Können wir als Firma, Schule oder Gemeinde spenden?"),
      l(
        "faq4_a",
        "FAQ 4 · Antwort",
        "Sehr gerne. In den letzten Wintern haben Schulen, Firmen, Kirchengemeinden und Vereine den Betrieb mitgetragen. Für Übergaben vor Ort oder Presseterminen bitte vorab per E-Mail abstimmen."
      ),
      l(
        "faq_infobox",
        "FAQ · Infobox-Text (ohne E-Mail/Links)",
        "Noch eine Frage offen? Für Geldspenden, Spendenquittungen und steuerliche Rückfragen schreiben Sie an"
      ),
    ],
  },

  {
    slug: "bedarf",
    label: "Bedarfsliste",
    description: "Was wir annehmen, Gründe, Ablauf einer Sachspende.",
    fields: [
      s("header_kicker", "Header · Kicker", "Bedarfsliste"),
      s("header_title", "Header · Titel", "Was gerade gebraucht wird."),
      l(
        "header_lead",
        "Header · Lead",
        "Bitte vor jeder Sachspende kurz per E-Mail Bescheid geben. So verhindern wir, dass Dinge angeliefert werden, die wir nicht lagern oder verteilen können."
      ),

      s("list_kicker", "Liste · Kicker", "Aktuelle Bedarfsliste"),
      s("list_title", "Liste · Titel", "Was gerade gebraucht wird."),
      l(
        "list_lead",
        "Liste · Fließtext",
        "Die Liste wird jede Saison gepflegt. Ein festes Spendenwochenende gibt Rhythmus zur Annahme, in der laufenden Saison bitte kurz per WhatsApp anmelden."
      ),
      s("yes_kicker", "Annahme · Kicker", "wir nehmen an"),
      s("yes_title", "Annahme · Titel", "Diese Spenden helfen sofort"),
      s("yes_item1", "Annahme · Punkt 1", "Haltbare Lebensmittel"),
      s("yes_item2", "Annahme · Punkt 2", "Kaffee, Tee, Kakao, Zucker, Milch (H)"),
      s("yes_item3", "Annahme · Punkt 3", "Wasser und Getränke in Flaschen"),
      s("yes_item4", "Annahme · Punkt 4", "Neue Unterwäsche und neue Socken"),
      s("yes_item5", "Annahme · Punkt 5", "Neue Hygieneartikel"),
      s("yes_item6", "Annahme · Punkt 6", "Isomatten und warme Schlafsäcke"),
      s("no_kicker", "Nicht-Annahme · Kicker", "bitte nicht"),
      s("no_title", "Nicht-Annahme · Titel", "Diese Spenden können wir nicht annehmen"),
      s("no_item1", "Nicht-Annahme · Punkt 1", "Getragene Kleidung und Textilien"),
      s("no_item2", "Nicht-Annahme · Punkt 2", "Bettwäsche und Handtücher"),
      s("no_item3", "Nicht-Annahme · Punkt 3", "Porzellan, Geschirr und Besteck"),
      s("no_item4", "Nicht-Annahme · Punkt 4", "Gegenstände unbekannter Herkunft"),
      l(
        "no_info",
        "Nicht-Annahme · Infobox",
        "Wichtig: Wir unterhalten keine Kleiderkammer. Kleidung wird gezielt in passender Größe aus Geldspenden gekauft, damit jede Person genau das bekommt, was passt."
      ),

      s("gruende_kicker", "Gründe · Kicker", "Warum nicht alles"),
      s("gruende_title", "Gründe · Titel", "Weniger, aber das Richtige."),
      l(
        "gruende_lead",
        "Gründe · Fließtext",
        "Wir sind ein Winterbetrieb, keine Sammelstelle. Deshalb nehmen wir bewusst nur an, was direkt im Kältebus eingesetzt wird. Drei Gründe stehen dahinter."
      ),
      s("gruende1_kicker", "Grund 1 · Kicker", "Hygiene"),
      s("gruende1_title", "Grund 1 · Titel", "Neu statt getragen."),
      l(
        "gruende1_body",
        "Grund 1 · Text",
        "Unterwäsche, Socken und Hygieneartikel geben wir ausschließlich neu und in Originalverpackung heraus. Alles andere wäre für die Menschen im Kältebus nicht zumutbar."
      ),
      s("gruende2_kicker", "Grund 2 · Kicker", "Lagerung"),
      s("gruende2_title", "Grund 2 · Titel", "Nur, was direkt gebraucht wird."),
      l(
        "gruende2_body",
        "Grund 2 · Text",
        "Der Kältebus verfügt über kein dauerhaftes Lager für Kleidung, Möbel oder Haushaltsgegenstände. Deshalb können wir nur Sachspenden annehmen, die aktuell benötigt und zeitnah eingesetzt werden können."
      ),
      s("gruende3_kicker", "Grund 3 · Kicker", "Passform"),
      s("gruende3_title", "Grund 3 · Titel", "Damit es wirklich passt."),
      l(
        "gruende3_body",
        "Grund 3 · Text",
        "Benötigte Kleidung kaufen wir gezielt in der passenden Größe. So können wir sicherstellen, dass jede Person genau das erhält, was sie aktuell braucht und auch wirklich tragen kann. Deshalb setzen wir bewusst auf eine gezielte Versorgung statt auf eine klassische Kleiderkammer."
      ),

      s("ablauf_kicker", "Ablauf · Kicker", "So läuft eine Sachspende ab"),
      s("ablauf_title", "Ablauf · Titel", "Drei Schritte, ohne Umwege."),
      s("ablauf1_title", "Ablauf 1 · Titel", "Kurz per E-Mail Bescheid geben."),
      l(
        "ablauf1_body",
        "Ablauf 1 · Text",
        "Eine Zeile reicht: was Sie mitbringen möchten und in welcher Menge. So wissen wir, ob es aktuell in den Betrieb passt."
      ),
      s("ablauf2_title", "Ablauf 2 · Titel", "Termin abstimmen."),
      l(
        "ablauf2_body",
        "Ablauf 2 · Text",
        "Wir melden uns mit einem Übergabetermin am Kältebus am Römerkastell oder mit einer Alternative, falls das gerade nicht möglich ist."
      ),
      s("ablauf3_title", "Ablauf 3 · Titel", "Übergabe vor Ort."),
      l(
        "ablauf3_body",
        "Ablauf 3 · Text",
        "Am vereinbarten Tag am Römerkastell. Auf Wunsch mit kurzer Führung am Kältebus und, wenn passend, mit einem Foto für die Vereinskanäle."
      ),
      l(
        "ablauf_infobox",
        "Ablauf · Infobox-Text (ohne E-Mail)",
        "Sie sind unsicher, ob Ihre Sache passt? Kurze Anfrage per E-Mail an"
      ),
      s("ablauf_cta", "Ablauf · Button", "Lieber Geld spenden"),
    ],
  },

  {
    slug: "helfen",
    label: "Ehrenamt",
    description: "Mitmachen-Karten, Haltung, Schritte ins Ehrenamt, Alternative Wege.",
    fields: [
      s("header_kicker", "Header · Kicker", "Ehrenamt"),
      s("header_title", "Header · Titel", "Zeit spenden."),
      l(
        "header_lead",
        "Header · Lead",
        "Der Verein arbeitet ausschließlich ehrenamtlich. Wer sich einbringen möchte, meldet sich per E-Mail und bekommt alle Informationen zum Ablauf."
      ),

      s("mitmachen_kicker", "Mitmachen · Kicker", "Mitmachen"),
      s("mitmachen_title", "Mitmachen · Titel", "Ehrenamtlich helfen."),
      l(
        "mitmachen_lead",
        "Mitmachen · Fließtext",
        "Der Verein arbeitet ausschließlich ehrenamtlich. Wer sich einbringen möchte, meldet sich per E-Mail und bekommt alle Informationen zum Ablauf."
      ),
      s("mitmachen_cta", "Mitmachen · Button", "Per E-Mail melden"),
      s("rolle1_title", "Rolle 1 · Titel", "Am Kältebus mitarbeiten"),
      l(
        "rolle1_body",
        "Rolle 1 · Text",
        "Empfang, Ausgabe, ansprechbar sein für die Menschen, die kommen."
      ),
      s("rolle2_title", "Rolle 2 · Titel", "In der Küche unterstützen"),
      l(
        "rolle2_body",
        "Rolle 2 · Text",
        "Freiwillige kochen für eine Nacht am Kältebus."
      ),
      s("rolle3_title", "Rolle 3 · Titel", "Aufbau und Abbau"),
      l(
        "rolle3_body",
        "Rolle 3 · Text",
        "Zu Saisonbeginn und Saisonende packen alle Hände mit an."
      ),
      s("rolle4_title", "Rolle 4 · Titel", "Materiell unterstützen"),
      l(
        "rolle4_body",
        "Rolle 4 · Text",
        "Aktuelle Bedarfsliste ansehen und direkt beitragen."
      ),

      s("haltung_kicker", "Haltung · Kicker", "Was Ehrenamt hier bedeutet"),
      s("haltung_title", "Haltung · Titel", "Zeit, die wirklich ankommt."),
      l(
        "haltung_lead",
        "Haltung · Fließtext",
        "Der Kältebus lebt vom Engagement freiwilliger Helferinnen und Helfer. Dafür braucht es keine besondere Ausbildung, sondern Offenheit, Verlässlichkeit und die Bereitschaft, für andere da zu sein."
      ),
      s("haltung1_kicker", "Haltung 1 · Kicker", "Aufgabe"),
      s("haltung1_title", "Haltung 1 · Titel", "Da sein, wo Hilfe gebraucht wird."),
      l(
        "haltung1_body",
        "Haltung 1 · Text",
        "Wir heißen unsere Gäste willkommen, hören zu, bereiten Mahlzeiten vor und sorgen dafür, dass es ihnen während ihres Aufenthalts an nichts Wesentlichem fehlt. Für die professionelle Sozialarbeit stehen die entsprechenden Fachstellen und Partner bereit."
      ),
      s("haltung2_kicker", "Haltung 2 · Kicker", "Miteinander"),
      s("haltung2_title", "Haltung 2 · Titel", "Der Mensch steht im Mittelpunkt."),
      l(
        "haltung2_body",
        "Haltung 2 · Text",
        "Bei uns begegnen wir jedem Gast mit Respekt und auf Augenhöhe. Herkunft, Lebensgeschichte oder Aufenthaltsstatus spielen dabei keine Rolle. Entscheidend ist der Mensch, der vor uns steht."
      ),
      s("haltung3_kicker", "Haltung 3 · Kicker", "Engagement"),
      s("haltung3_title", "Haltung 3 · Titel", "So viel Zeit, wie für Sie passt."),
      l(
        "haltung3_body",
        "Haltung 3 · Text",
        "Ob eine Schicht in der Küche, ein Abend am Kältebus oder Unterstützung beim Auf- und Abbau: Gemeinsam finden wir eine Aufgabe und einen Umfang, der zu Ihren Möglichkeiten passt."
      ),

      s("schritte_kicker", "Schritte · Kicker", "So kommt der Kontakt zustande"),
      s("schritte_title", "Schritte · Titel", "In drei Schritten ins Ehrenamt."),
      l(
        "schritte_lead",
        "Schritte · Fließtext",
        "Der Einstieg ist unkompliziert. Wir lernen uns kurz kennen, zeigen, wie alles abläuft, und schauen gemeinsam, welcher Einsatz gut passt."
      ),
      s("schritte1_kicker", "Schritt 1 · Kicker", "Kontakt"),
      s("schritte1_title", "Schritt 1 · Titel", "Einfach kurz schreiben."),
      l(
        "schritte1_body",
        "Schritt 1 · Text",
        "Eine kurze E-Mail an info@kaeltebus-saarbruecken.de genügt. Schreiben Sie uns, wobei Sie unterstützen möchten, wie viel Zeit Sie ungefähr mitbringen und ab wann Sie starten könnten."
      ),
      s("schritte2_kicker", "Schritt 2 · Kicker", "Kennenlernen"),
      s("schritte2_title", "Schritt 2 · Titel", "Erst einmal einen Eindruck bekommen."),
      l(
        "schritte2_body",
        "Schritt 2 · Text",
        "Wir melden uns mit allen wichtigen Informationen. Wenn es passt, vereinbaren wir einen kurzen Termin vor Ort, bei dem Sie den Kältebus, das Team und die Abläufe kennenlernen können."
      ),
      s("schritte3_kicker", "Schritt 3 · Kicker", "Erster Einsatz"),
      s("schritte3_title", "Schritt 3 · Titel", "Gemeinsam den passenden Termin finden."),
      l(
        "schritte3_body",
        "Schritt 3 · Text",
        "Anschließend stimmen wir gemeinsam ab, wann und wobei Sie unterstützen möchten. Dabei bleibt das Ehrenamt flexibel: Es gibt keinen festen Vertrag und keine langfristige Verpflichtung."
      ),
      s("schritte_cta_primary", "Schritte · Button primär", "Per E-Mail melden"),
      s("schritte_cta_secondary", "Schritte · Button sekundär", "Alle Kontaktwege"),

      s("alt_kicker", "Alternative · Kicker", "Wenn Zeit gerade nicht geht"),
      s("alt_title", "Alternative · Titel", "Es gibt zwei andere Wege."),
      l(
        "alt_body",
        "Alternative · Fließtext",
        "Nicht jeder kann eine Schicht übernehmen. Wer den Verein trotzdem tragen möchte, hilft am schnellsten mit einer Geldspende oder einer abgestimmten Sachspende."
      ),
      s("alt_geld_kicker", "Alternative · Geld Kicker", "Geldspende"),
      s("alt_geld_title", "Alternative · Geld Titel", "Wärme, die ankommt."),
      s("alt_sach_kicker", "Alternative · Sach Kicker", "Sachspende"),
      s("alt_sach_title", "Alternative · Sach Titel", "Bedarfsliste ansehen."),
    ],
  },

  {
    slug: "kontakt",
    label: "Kontakt",
    description: "Kontakt-Übersicht, Kanäle, Adressen.",
    fields: [
      s("header_kicker", "Header · Kicker", "Kontakt"),
      s("header_title", "Header · Titel", "Schreiben Sie uns."),
      l(
        "header_lead",
        "Header · Lead",
        "Für Spenden, Ehrenamt, Presse oder allgemeine Fragen erreichen Sie uns am schnellsten per E-Mail."
      ),

      s("intro_kicker", "Intro · Kicker", "Kontakt"),
      s("intro_title", "Intro · Titel", "Schreiben Sie uns."),
      l(
        "intro_body",
        "Intro · Text",
        "Für Spenden, Ehrenamt, Presse oder allgemeine Fragen erreichen Sie uns am schnellsten per E-Mail."
      ),
      s("mail_kicker", "E-Mail-Karte · Kicker", "E-Mail-Adressen"),
      l(
        "mail_lead",
        "E-Mail-Karte · Lead",
        "Jedes Thema hat ein eigenes Postfach. So landet Ihre Nachricht schneller bei der richtigen Person."
      ),
      s("sitz_kicker", "Vereinssitz · Kicker", "Vereinssitz"),
      s("standort_kicker", "Standort · Kicker", "Standort"),

      s("kanal_kicker", "Kanal · Kicker", "Welcher Kanal für was"),
      s("kanal_title", "Kanal · Titel", "Kurzer Leitfaden."),
      l(
        "kanal_lead",
        "Kanal · Fließtext",
        "Damit Ihre Anfrage möglichst schnell bei der richtigen Person landet, hier die üblichen Wege im Überblick."
      ),

      s("kanal1_kicker", "Kanal 1 · Kicker", "Alles rund um den Verein"),
      s("kanal1_title", "Kanal 1 · Titel", "Allgemeines."),
      l(
        "kanal1_body",
        "Kanal 1 · Text",
        "Presse, Terminanfragen, Vereinsthemen und alles, was nicht in die anderen Postfächer passt. Wir lesen die Mail regelmäßig."
      ),

      s("kanal2_kicker", "Kanal 2 · Kicker", "Geldspende"),
      s("kanal2_title", "Kanal 2 · Titel", "Finanzen."),
      l(
        "kanal2_body",
        "Kanal 2 · Text",
        "Spendenquittungen, Rechnungen und steuerliche Rückfragen. Für Überweisungen und Online-Spende gibt es die Spendenseite."
      ),

      s("kanal3_kicker", "Kanal 3 · Kicker", "Küche"),
      s("kanal3_title", "Kanal 3 · Titel", "Kochen und Verpflegung."),
      l(
        "kanal3_body",
        "Kanal 3 · Text",
        "Mithilfe in der Küche, warme Mahlzeiten und alle Themen rund um Lebensmittel am Kältebus."
      ),

      s("kanal4_kicker", "Kanal 4 · Kicker", "Sachspende"),
      s("kanal4_title", "Kanal 4 · Titel", "Sachspenden."),
      l(
        "kanal4_body",
        "Kanal 4 · Text",
        "Vor jeder Übergabe kurz per E-Mail Bescheid geben. Was gerade gebraucht wird, steht auf der Bedarfsliste."
      ),

      s("kanal5_kicker", "Kanal 5 · Kicker", "Bedarfsliste"),
      s("kanal5_title", "Kanal 5 · Titel", "Was gebraucht wird."),
      l(
        "kanal5_body",
        "Kanal 5 · Text",
        "Vor der Übergabe lohnt ein Blick auf die aktuelle Liste. So kommt an, was tatsächlich im Betrieb gebraucht wird."
      ),
      s("kanal5_cta", "Kanal 5 · Link-Text", "Zur Bedarfsliste"),

      s("kanal6_kicker", "Kanal 6 · Kicker", "Akute Not"),
      s("kanal6_title", "Kanal 6 · Titel", "Notruf 112."),
      l(
        "kanal6_body",
        "Kanal 6 · Text",
        "Wenn eine Person nicht mehr ansprechbar ist, bewusstlos oder stark unterkühlt: nicht auf uns warten, sofort den Rettungsdienst rufen."
      ),
      s("kanal6_cta", "Kanal 6 · Link-Text", "112 wählen"),

      s("orte_kicker", "Orte · Kicker", "So finden Sie uns"),
      s("orte_title", "Orte · Titel", "Zwei Adressen, zwei Zwecke."),
      l(
        "orte_lead",
        "Orte · Fließtext",
        "Der Vereinssitz ist die postalische Anschrift. Der Kältebus am Römerkastell ist der Ort, an dem die Arbeit tatsächlich stattfindet."
      ),
      s("orte1_kicker", "Ort 1 · Kicker", "Vereinssitz"),
      s("orte1_title", "Ort 1 · Titel", "Sankt-Johanner-Straße 49"),
      l(
        "orte1_body",
        "Ort 1 · Text",
        "Die Anschrift des Vereins für Post und offizielle Korrespondenz. Kein Publikumsverkehr, kein Übergabeort."
      ),
      s("orte2_kicker", "Ort 2 · Kicker", "Standort"),
      l(
        "orte2_body",
        "Ort 2 · Text",
        "Der eigentliche Ort der Arbeit. Erreichbar über die Saarbahn-Haltestelle Römerkastell. Betrieb: jeden Winter."
      ),
      l(
        "orte_infobox",
        "Orte · Infobox-Text (ohne E-Mail)",
        "Hinweis zum Datenschutz: Wir betreiben kein Kontaktformular. Nachrichten erreichen den Verein direkt per E-Mail an"
      ),
    ],
  },

  {
    slug: "aktuelles",
    label: "Aktuelles",
    description: "Übersichtsseite der Blog-Beiträge.",
    fields: [
      s("header_kicker", "Header · Kicker", "Aktuelles"),
      s("header_title", "Header · Titel", "Berichte aus unserer Arbeit"),
      l(
        "header_lead",
        "Header · Lead",
        "Was gerade läuft, worum wir bitten und was wir im Dienst erleben. Kurz, nüchtern, aus erster Hand."
      ),
      s("empty_text", "Leer-Zustand", "Es sind noch keine Beiträge veröffentlicht."),
      s("read_more", "Karte · Weiterlesen", "Beitrag lesen"),
    ],
  },

  {
    slug: "impressum",
    label: "Impressum",
    description: "Impressum nach § 5 TMG.",
    fields: [
      s("header_kicker", "Header · Kicker", "Impressum"),
      s("header_title", "Header · Titel", "Impressum."),
      l("header_lead", "Header · Lead", "Angaben gemäß § 5 TMG."),

      s("verein_kicker", "Verein · Kicker", "Verein"),
      s("verein_title", "Verein · Titel", "Anbieter im Sinne des Telemediengesetzes."),
      l(
        "verein_body",
        "Verein · Text",
        "Verantwortlich für den Inhalt dieser Website ist der eingetragene, gemeinnützige Verein mit Sitz in Saarbrücken."
      ),

      s("label_vereinsname", "Label · Vereinsname", "Vereinsname"),
      s("label_anschrift", "Label · Anschrift", "Anschrift"),
      s("label_kontakt", "Label · Kontakt", "Kontakt"),
      s("label_register", "Label · Register", "Registereintrag"),
      l(
        "register_text",
        "Register · Text",
        "Eintragung im Vereinsregister\nRegistergericht: Amtsgericht Saarbrücken\nRegisternummer: VR 5477"
      ),
      s("label_vorstand", "Label · Vorstand", "Vertretungsberechtigter Vorstand"),
      s("label_steuer", "Label · Steuerliche Angaben", "Steuerliche Angaben"),
      l(
        "steuer_body",
        "Steuer · Text (ohne Zweck/Bescheid)",
        "Der Verein ist wegen Förderung mildtätiger und gemeinnütziger Zwecke nach § 5 Abs. 1 Nr. 9 KStG von der Körperschaftsteuer und nach § 3 Nr. 6 GewStG von der Gewerbesteuer befreit."
      ),

      s("haftung_kicker", "Haftung · Kicker", "Haftung und Rechte"),
      s("haftung_title", "Haftung · Titel", "Hinweise zu Inhalten, Links und Urheberrecht."),

      s("inhalte_kicker", "Inhalte · Kicker", "Inhalte"),
      s("inhalte_title", "Inhalte · Titel", "Haftung für Inhalte."),
      l(
        "inhalte_body",
        "Inhalte · Text",
        "Die Inhalte dieser Website werden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität wird jedoch keine Gewähr übernommen. Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach den §§ 8 bis 10 TMG besteht keine Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen."
      ),
      s("links_kicker", "Links · Kicker", "Externe Links"),
      s("links_title", "Links · Titel", "Haftung für Links."),
      l(
        "links_body",
        "Links · Text",
        "Die Website enthält Links zu externen Websites Dritter, auf deren Inhalte kein Einfluss besteht. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich. Zum Zeitpunkt der Verlinkung waren keine Rechtsverstöße erkennbar. Bei Bekanntwerden von Rechtsverletzungen werden entsprechende Links umgehend entfernt."
      ),
      s("urheber_kicker", "Urheberrecht · Kicker", "Urheberrecht"),
      s("urheber_title", "Urheberrecht · Titel", "Texte, Bilder, Marken."),
      l(
        "urheber_body",
        "Urheberrecht · Text",
        "Die durch die Betreiber erstellten Inhalte und Werke auf dieser Website unterliegen dem deutschen Urheberrecht. Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des Vereins. Downloads und Kopien sind nur für den privaten, nicht kommerziellen Gebrauch gestattet."
      ),
      l(
        "impressum_infobox",
        "Infobox · Text (ohne E-Mail/Link)",
        "Kontakt bei Fragen zum Impressum: Schreiben Sie kurz an"
      ),
    ],
  },

  {
    slug: "datenschutz",
    label: "Datenschutz",
    description: "Datenschutzerklärung.",
    fields: [
      s("header_kicker", "Header · Kicker", "Datenschutz"),
      s("header_title", "Header · Titel", "Datenschutz."),
      l(
        "header_lead",
        "Header · Lead",
        "Diese Website erhebt keine personenbezogenen Daten zur Analyse oder Werbung. Was verarbeitet wird und warum, steht hier."
      ),

      s("verantwortlich_kicker", "Verantwortlicher · Kicker", "Verantwortlicher"),
      s("verantwortlich_title", "Verantwortlicher · Titel", "Verantwortlich für die Datenverarbeitung."),
      l(
        "verantwortlich_body",
        "Verantwortlicher · Text",
        "Verantwortlich im Sinne der Datenschutz-Grundverordnung (DSGVO) ist der eingetragene Verein."
      ),
      s("label_name", "Label · Name/Adresse", "Vereinsname und Anschrift"),
      s("label_kontakt", "Label · Kontakt", "Kontakt"),
      l(
        "impressum_hinweis",
        "Hinweis · Weitere Angaben (ohne Link)",
        "Weitere Angaben zum Verein finden Sie im"
      ),

      s("umgang_kicker", "Umgang · Kicker", "Umgang mit Daten auf dieser Website"),
      s("umgang_title", "Umgang · Titel", "So schlank wie möglich."),
      l(
        "umgang_lead",
        "Umgang · Fließtext",
        "Diese Website ist ein reines Informationsangebot des Vereins. Es gibt kein Kontaktformular, keinen Newsletter, keine Nutzerregistrierung, kein Tracking und keine Werbung."
      ),

      s("cookies_kicker", "Cookies · Kicker", "Cookies und Tracking"),
      s("cookies_title", "Cookies · Titel", "Wir setzen keine Cookies und kein Analyse-Tracking ein."),
      l(
        "cookies_body",
        "Cookies · Text",
        "Diese Website verwendet weder Cookies, die eine Einwilligung erfordern, noch Web-Analyse-Dienste wie Google Analytics, Matomo, Plausible oder vergleichbare Werkzeuge. Es findet kein Profiling statt."
      ),
      s("logs_kicker", "Logs · Kicker", "Server-Logfiles"),
      s("logs_title", "Logs · Titel", "Technisch notwendige Server-Logs beim Hoster."),
      l(
        "logs_body",
        "Logs · Text",
        "Beim Aufruf der Website erhebt der Hosting-Anbieter automatisch technische Zugriffsdaten (unter anderem IP-Adresse, Zeitpunkt des Zugriffs, aufgerufene Seite, Browser-Typ, Betriebssystem und Referrer). Diese Daten werden ausschließlich zum Zweck des sicheren und stabilen Betriebs der Website verarbeitet. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse). Die Daten werden nach Ablauf der beim Hoster üblichen Speicherfristen automatisch gelöscht."
      ),
      s("fonts_kicker", "Fonts · Kicker", "Schriftarten"),
      s("fonts_title", "Fonts · Titel", "Fonts werden lokal ausgeliefert."),
      l(
        "fonts_body",
        "Fonts · Text",
        "Für die Darstellung werden die Schriftarten „Source Sans 3\" und „Merriweather\" verwendet. Die Font-Dateien werden vom Framework während des Buildvorgangs eingebunden und beim Aufruf der Website vom eigenen Server ausgeliefert. Es erfolgt keine Verbindung zu Google Fonts oder anderen externen Font-Servern."
      ),
      s("extern_kicker", "Extern · Kicker", "Externe Inhalte auf der Seite „Spenden\""),
      s("extern_title", "Extern · Titel", "betterplace-Overlay auf der Spenden-Seite."),
      l(
        "extern_body",
        "Extern · Text (ohne Links)",
        "Auf der Seite Spenden wird ein Skript von betterplace.org geladen, das die Online-Spende in einem Overlay ermöglicht. Beim Aufruf dieser Seite erhält betterplace.org technische Zugriffsdaten. Für die dortige Datenverarbeitung ist die gut.org gemeinnützige Aktiengesellschaft verantwortlich. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer einfachen Spendenmöglichkeit)."
      ),
      s("mail_kicker", "Mail · Kicker", "Kontaktaufnahme per E-Mail und Telefon"),
      s("mail_title", "Mail · Titel", "Bei direkter Kontaktaufnahme."),
      l(
        "mail_body",
        "Mail · Text",
        "Wenn Sie den Verein per E-Mail oder Telefon kontaktieren, werden die von Ihnen mitgeteilten Angaben (Name, E-Mail, ggf. Telefonnummer, Inhalt der Nachricht) ausschließlich zur Bearbeitung Ihrer Anfrage verarbeitet. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b oder lit. f DSGVO. Die Daten werden gelöscht, sobald sie für den Zweck der Bearbeitung nicht mehr erforderlich sind und keine gesetzlichen Aufbewahrungspflichten entgegenstehen."
      ),
      s("spende_kicker", "Spende · Kicker", "Spendenverarbeitung"),
      s("spende_title", "Spende · Titel", "Umgang mit Spenderdaten."),
      l(
        "spende_body",
        "Spende · Text",
        "Bei einer Überweisung auf das Vereinskonto werden die im Rahmen des Zahlungsvorgangs übermittelten Daten (insbesondere Name und Verwendungszweck) zur Zuordnung und ordnungsgemäßen Buchführung verarbeitet. Rechtsgrundlage ist Art. 6 Abs. 1 lit. c DSGVO in Verbindung mit den handels- und steuerrechtlichen Aufbewahrungspflichten."
      ),
      s("ssl_kicker", "SSL · Kicker", "SSL/TLS-Verschlüsselung"),
      s("ssl_title", "SSL · Titel", "Verbindung ist verschlüsselt."),
      l(
        "ssl_body",
        "SSL · Text",
        "Die Website nutzt aus Sicherheitsgründen eine SSL/TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie an der „https\"-Adresszeile Ihres Browsers."
      ),

      s("rechte_kicker", "Rechte · Kicker", "Ihre Rechte"),
      s("rechte_title", "Rechte · Titel", "Rechte der betroffenen Personen."),
      l(
        "rechte_lead",
        "Rechte · Fließtext",
        "Nach der Datenschutz-Grundverordnung stehen Ihnen als betroffene Person insbesondere folgende Rechte zu:"
      ),
      s("recht1", "Recht 1", "Recht auf Auskunft (Art. 15 DSGVO)"),
      s("recht2", "Recht 2", "Recht auf Berichtigung (Art. 16 DSGVO)"),
      s("recht3", "Recht 3", "Recht auf Löschung (Art. 17 DSGVO)"),
      s("recht4", "Recht 4", "Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)"),
      s("recht5", "Recht 5", "Recht auf Datenübertragbarkeit (Art. 20 DSGVO)"),
      s("recht6", "Recht 6", "Recht auf Widerspruch (Art. 21 DSGVO)"),
      s("recht7", "Recht 7", "Recht auf Beschwerde bei einer Aufsichtsbehörde (Art. 77 DSGVO)"),
      l(
        "rechte_body",
        "Rechte · Hinweis (ohne E-Mail)",
        "Zur Ausübung dieser Rechte genügt eine formlose Nachricht per E-Mail an"
      ),
      l(
        "aufsicht_infobox",
        "Aufsichtsbehörde · Infobox (ohne Link)",
        "Zuständige Aufsichtsbehörde: Unabhängiges Datenschutzzentrum Saarland, Fritz-Dobisch-Straße 12, 66111 Saarbrücken."
      ),
    ],
  },

  {
    slug: "shared",
    label: "Navigation & Footer",
    description: "Texte, die auf allen Seiten gezeigt werden: Nav-Links, Footer-Spalten.",
    fields: [
      s("nav_verein", "Nav · Unser Auftrag", "Unser Auftrag"),
      s("nav_hilfe", "Nav · Hilfe bekommen", "Hilfe bekommen"),
      s("nav_spenden", "Nav · Spenden", "Spenden"),
      s("nav_bedarf", "Nav · Bedarfsliste", "Bedarfsliste"),
      s("nav_helfen", "Nav · Ehrenamt", "Ehrenamt"),
      s("nav_aktuelles", "Nav · Aktuelles", "Aktuelles"),
      s("nav_kontakt", "Nav · Kontakt", "Kontakt"),
      s("nav_cta", "Nav · Spenden-Button", "Spenden"),
      s("nav_mobile_cta_primary", "Nav Mobile · Hauptbutton", "Jetzt spenden"),
      s("nav_mobile_cta_secondary", "Nav Mobile · Nebenbutton", "Per E-Mail schreiben"),
      s("meta_sitz", "Meta-Leiste · Sitz-Zeile", "Vereinssitz Saarbrücken · Sankt-Johanner-Straße 49"),
      s("meta_register", "Meta-Leiste · Register-Zeile", "Gemeinnützig anerkannt · VR 5477 Amtsgericht Saarbrücken"),

      l(
        "footer_about",
        "Footer · Kurzbeschreibung",
        "Gemeinnütziger Verein aus Saarbrücken. Winterbetrieb am Kältebus am Römerkastell. Ohne Bedürftigkeitsprüfung."
      ),
      s("footer_spenden_title", "Footer · Spendenkonto-Titel", "Spendenkonto"),
      s("footer_bereiche", "Footer · Spalte Bereiche", "Bereiche"),
      s("footer_kontakt", "Footer · Spalte Kontakt", "Kontakt"),
      s("footer_folgen", "Footer · Spalte Folgen", "Folgen"),
      s("footer_impressum", "Footer · Link Impressum", "Impressum"),
      s("footer_datenschutz", "Footer · Link Datenschutz", "Datenschutz"),
    ],
  },
];

export function getPageDef(slug: string): PageDef | undefined {
  return PAGE_DEFS.find((p) => p.slug === slug);
}

export function defaultTextsFor(slug: string): Record<string, string> {
  const def = getPageDef(slug);
  if (!def) return {};
  const out: Record<string, string> = {};
  for (const f of def.fields) out[f.key] = f.default;
  return out;
}
