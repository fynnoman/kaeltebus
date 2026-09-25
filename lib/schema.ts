import { SITE, BEDARF } from "./data";

export const SITE_URL = "https://kaeltebus-saarbruecken.de";

export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const PLACE_ID = `${SITE_URL}/#location-roemerkastell`;
export const SEAT_ID = `${SITE_URL}/#vereinssitz`;

export function ngoSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "NGO",
    "@id": ORG_ID,
    name: SITE.name,
    legalName: SITE.legalName,
    alternateName: "Kältebus Saarbrücken",
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.jpg`,
    image: `${SITE_URL}/images/first3-mc-team.jpg`,
    description:
      "Gemeinnütziger Verein aus Saarbrücken. Der Kältebus am Römerkastell bietet obdachlosen und bedürftigen Menschen in den Wintermonaten Wärme, warme Mahlzeiten und Ansprechpartner. Ohne Bedürftigkeitsprüfung.",
    slogan: SITE.claim,
    foundingDate: SITE.foundingDate,
    foundingLocation: {
      "@type": "Place",
      name: "Saarbrücken",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Saarbrücken",
        addressRegion: "Saarland",
        addressCountry: "DE",
      },
    },
    areaServed: [
      { "@type": "City", name: "Saarbrücken" },
      { "@type": "AdministrativeArea", name: "Saarland" },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      postalCode: SITE.address.zip,
      addressLocality: SITE.address.city,
      addressRegion: "Saarland",
      addressCountry: "DE",
    },
    location: { "@id": PLACE_ID },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: SITE.contact.email,
        telephone: SITE.contact.phoneHref,
        availableLanguage: ["de", "de-DE"],
        areaServed: "DE",
      },
    ],
    sameAs: [SITE.social.facebook, SITE.social.instagram, SITE.social.youtube],
    knowsAbout: [
      "Obdachlosenhilfe",
      "Winterhilfe",
      "Wohlfahrtswesen",
      "Ehrenamt",
    ],
    keywords:
      "Kältebus Saarbrücken, Obdachlosenhilfe Saarbrücken, Winterhilfe Saarland, Am Römerkastell",
    nonprofitStatus: "NonprofitType",
    taxID: SITE.tax.steuernummer,
    seeks: {
      "@type": "Demand",
      name: "Geldspenden, Sachspenden und ehrenamtliche Mitarbeit",
    },
    memberOf: {
      "@type": "Organization",
      name: "Amtsgericht Saarbrücken · Vereinsregister",
      identifier: SITE.register,
    },
  } as const;
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: SITE.name,
    inLanguage: "de-DE",
    publisher: { "@id": ORG_ID },
  } as const;
}

export function placeSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Place",
    "@id": PLACE_ID,
    name: `Kältebus am Römerkastell`,
    description:
      "Standort des Kältebus in Saarbrücken. Beheizter Aufenthaltsort, warme Mahlzeit und Ansprechpartner während der Wintersaison.",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.standort.location,
      postalCode: "66121",
      addressLocality: SITE.address.city,
      addressRegion: "Saarland",
      addressCountry: "DE",
    },
    publicAccess: true,
    isAccessibleForFree: true,
    maximumAttendeeCapacity: undefined,
  } as const;
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#localbusiness`,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE_URL,
    image: `${SITE_URL}/images/first3-mc-team.jpg`,
    logo: `${SITE_URL}/images/logo.jpg`,
    email: SITE.contact.email,
    telephone: SITE.contact.phoneHref,
    description:
      "Kältebus für obdachlose und bedürftige Menschen am Römerkastell in Saarbrücken.",
    priceRange: "Kostenfrei",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.standort.location,
      postalCode: "66121",
      addressLocality: SITE.address.city,
      addressRegion: "Saarland",
      addressCountry: "DE",
    },
    areaServed: { "@type": "City", name: "Saarbrücken" },
    parentOrganization: { "@id": ORG_ID },
  } as const;
}

export function donateActionSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "DonateAction",
    name: `Spenden für ${SITE.name}`,
    description:
      "Geldspenden für die Versorgung obdachloser und bedürftiger Menschen am Kältebus am Römerkastell.",
    recipient: { "@id": ORG_ID },
    target: [
      `https://www.betterplace.org/de/projects/${SITE.betterplace.project}`,
      `${SITE_URL}/spenden`,
    ],
    priceCurrency: "EUR",
  } as const;
}

export function volunteerActionSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "VolunteerAction",
    name: `Ehrenamtlich mithelfen beim ${SITE.name}`,
    description:
      "Ehrenamtliche Mitarbeit am Kältebus am Römerkastell: Küche, Ausgabe, Aufbau, Ansprechpartner in der Wintersaison.",
    agent: { "@id": ORG_ID },
    location: { "@id": PLACE_ID },
    potentialAction: {
      "@type": "CommunicateAction",
      target: `mailto:${SITE.contact.email}`,
    },
  } as const;
}

export function aboutPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    url: `${SITE_URL}/verein`,
    name: `Unser Auftrag · ${SITE.name}`,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    mainEntity: { "@id": ORG_ID },
    inLanguage: "de-DE",
  } as const;
}

export function contactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    url: `${SITE_URL}/kontakt`,
    name: `Kontakt · ${SITE.name}`,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    mainEntity: { "@id": ORG_ID },
    inLanguage: "de-DE",
  } as const;
}

export function bedarfItemListSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Aktuelle Bedarfsliste · Kältebus Saarbrücken",
    description:
      "Was der Kältebus Saarbrücken als Sachspende aktuell annimmt und was nicht.",
    numberOfItems: BEDARF.yes.length,
    itemListElement: BEDARF.yes.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item,
    })),
  } as const;
}

export type Crumb = { name: string; href?: string };

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      ...(c.href ? { item: `${SITE_URL}${c.href}` } : {}),
    })),
  } as const;
}

export function faqPageSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  } as const;
}

export function webPageSchema(opts: {
  url: string;
  name: string;
  description: string;
  breadcrumbs?: Crumb[];
  dateModified?: string;
}) {
  const modified = opts.dateModified ?? new Date().toISOString().slice(0, 10);
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: `${SITE_URL}${opts.url}`,
    name: opts.name,
    description: opts.description,
    inLanguage: "de-DE",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    dateModified: modified,
    ...(opts.breadcrumbs
      ? { breadcrumb: breadcrumbSchema(opts.breadcrumbs) }
      : {}),
  } as const;
}
