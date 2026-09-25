import type { MetadataRoute } from "next";
import { isWinterSeason } from "@/lib/season";

const SITE_URL = "https://kaeltebus-saarbruecken.de";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const winter = isWinterSeason(now);

  const entries: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/hilfe-bekommen`,
      lastModified: now,
      changeFrequency: winter ? "daily" : "monthly",
      priority: winter ? 1.0 : 0.7,
    },
    {
      url: `${SITE_URL}/spenden`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/helfen`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/bedarf`,
      lastModified: now,
      changeFrequency: winter ? "weekly" : "monthly",
      priority: winter ? 0.9 : 0.7,
    },
    {
      url: `${SITE_URL}/verein`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/kontakt`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/impressum`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  return entries;
}
