import { sql } from "./db";
import { defaultTextsFor, getPageDef } from "./pageTexts";

export type PageTexts = Record<string, string>;

type Row = { key: string; value: string };

export async function loadPageTexts(slug: string): Promise<PageTexts> {
  const defaults = defaultTextsFor(slug);
  try {
    const rows = (await sql`
      SELECT key, value FROM page_texts WHERE page = ${slug}
    `) as Row[];
    const merged: PageTexts = { ...defaults };
    for (const r of rows) {
      if (typeof r.value === "string") merged[r.key] = r.value;
    }
    return merged;
  } catch {
    return defaults;
  }
}

export function t(texts: PageTexts | undefined, key: string, fallback: string): string {
  if (texts && typeof texts[key] === "string" && texts[key].length > 0) {
    return texts[key];
  }
  return fallback;
}

export async function listOverridesFor(slug: string): Promise<Set<string>> {
  try {
    const rows = (await sql`
      SELECT key FROM page_texts WHERE page = ${slug}
    `) as { key: string }[];
    return new Set(rows.map((r) => r.key));
  } catch {
    return new Set();
  }
}

export function pageFieldKeys(slug: string): string[] {
  const def = getPageDef(slug);
  return def ? def.fields.map((f) => f.key) : [];
}
