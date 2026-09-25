export const SITE = {
  name: "Kältebus Saarbrücken e.V.",
  legalName: "Kältebus Saarbrücken- Hilfe für Menschen in Not e.V.",
  claim: "Hilfe für Obdachlose und Menschen in Not.",
  register: "VR 5477, Amtsgericht Saarbrücken",
  address: {
    street: "Sankt-Johanner-Straße 49",
    zip: "66111",
    city: "Saarbrücken",
  },
  standort: {
    location: "Am Römerkastell",
    detail: "66121 Saarbrücken",
    tram: "Saarbahn-Haltestelle Römerkastell",
    season: "Jeden Winter",
  },
  bank: {
    holder: "Kältebus Saarbrücken- Hilfe für Menschen in Not e.V.",
    bank: "Sparkasse Saarbrücken",
    iban: "DE31 5905 0101 0067 0773 88",
    bic: "SAKSDE55",
  },
  betterplace: {
    org: "20466",
    project: "26744",
  },
  contact: {
    email: "info@kaeltebus-saarbruecken.de",
    phone: "0151 56348795",
    phoneHref: "+4915156348795",
  },
  tax: {
    finanzamt: "Finanzamt Saarbrücken I",
    steuernummer: "040/140/42305",
    bescheid: "Freistellungsbescheid vom 11.03.2024 für die Jahre 2019 bis 2021",
    zweck:
      "Förderung des Wohlfahrtswesens (§ 52 Abs. 2 Satz 1 Nr. 9 AO)",
  },
  vorstand: [
    { rolle: "1. Vorsitzender", name: "Phil Sahner" },
    { rolle: "2. Vorsitzender", name: "Willi Kühnreich" },
    { rolle: "Schatzmeister", name: "Wolfgang Stalter" },
    { rolle: "Schriftführerin", name: "Melanie Müller" },
  ],
  social: {
    facebook: "https://facebook.com/kaeltebus.saarbruecken",
    instagram: "https://instagram.com/kaeltebus_saarbruecken",
    youtube: "https://youtube.com/@KaltebusSaarbrucken",
  },
};

export const PILLARS = [
  {
    kicker: "Würde",
    title: "Ohne Bedürftigkeitsprüfung.",
    body: "Wer bei uns ankommt, kommt herein. Unabhängig von Herkunft, Aufenthaltsstatus oder Vorgeschichte.",
  },
  {
    kicker: "Wärme",
    title: "Ein sicherer Ort in der kältesten Nacht.",
    body: "Ein beheizter Ort am Römerkastell, eine warme Mahlzeit und Ansprechpartner, wenn es sonst niemanden gibt.",
  },
  {
    kicker: "Ehrenamt",
    title: "Getragen von Freiwilligen.",
    body: "Der Verein arbeitet ehrenamtlich. Spenden fließen direkt in die Versorgung vor Ort.",
  },
];

export const BEDARF = {
  yes: [
    "Haltbare Lebensmittel",
    "Kaffee, Tee, Kakao, Zucker, Milch (H)",
    "Wasser und Getränke in Flaschen",
    "Neue Unterwäsche und neue Socken",
    "Neue Hygieneartikel",
    "Isomatten und warme Schlafsäcke",
  ],
  no: [
    "Getragene Kleidung und Textilien",
    "Bettwäsche und Handtücher",
    "Porzellan, Geschirr und Besteck",
    "Gegenstände unbekannter Herkunft",
  ],
};

export const IMAGES = {
  hero: "/images/first3-mc-team.jpg",
  tent: "/images/kueche-suppe.jpg",
  hands: "/images/vidors-team.jpg",
  logo: "/images/logo.jpg",
};

export const UNTERSTUETZER = [
  {
    image: "/images/spende-kws-schule.jpg",
    kicker: "Schulspende",
    amount: "1.500 €",
    name: "Katharina-Weißgerber-Schule",
    body: "Schülerinnen und Schüler haben in ihrer Schule Spenden gesammelt und den Erlös persönlich am Kältebus am Römerkastell übergeben.",
  },
  {
    image: "/images/spende-paratec.jpg",
    kicker: "Firmenspende",
    amount: "3.000 €",
    name: "PARATEC Group",
    body: "Ein starker Beitrag aus der regionalen Wirtschaft für die Versorgung am Kältebus.",
  },
];
