import type { MetadataRoute } from "next";

const SITE_URL = "https://kaeltebus-saarbruecken.de";

export default function robots(): MetadataRoute.Robots {
  const aiCrawlers = [
    "GPTBot",
    "ChatGPT-User",
    "OAI-SearchBot",
    "PerplexityBot",
    "ClaudeBot",
    "Claude-Web",
    "anthropic-ai",
    "Google-Extended",
    "Applebot",
    "Applebot-Extended",
    "CCBot",
    "Meta-ExternalAgent",
    "Meta-ExternalFetcher",
    "cohere-ai",
    "MistralAI-User",
    "Bytespider",
    "DuckAssistBot",
    "YouBot",
    "Amazonbot",
    "PhindBot",
  ];

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/danke", "/danke/"],
      },
      ...aiCrawlers.map((ua) => ({
        userAgent: ua,
        allow: "/",
      })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
