import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { sql } from "@/lib/db";
import { isAdmin, isAuthenticated } from "@/lib/auth";
import { defaultTextsFor, getPageDef, PAGE_DEFS } from "@/lib/pageTexts";

const PATHS_FOR_SLUG: Record<string, string[]> = {
  home: ["/"],
  verein: ["/verein"],
  "hilfe-bekommen": ["/hilfe-bekommen"],
  spenden: ["/spenden"],
  bedarf: ["/bedarf"],
  helfen: ["/helfen"],
  kontakt: ["/kontakt"],
  aktuelles: ["/aktuelles"],
  impressum: ["/impressum"],
  datenschutz: ["/datenschutz"],
  shared: ["/", "/verein", "/hilfe-bekommen", "/spenden", "/bedarf", "/helfen", "/kontakt", "/aktuelles", "/impressum", "/datenschutz"],
};

export async function GET(req: Request) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Nicht angemeldet" }, { status: 401 });
  }
  if (!(await isAdmin())) {
    return NextResponse.json({ error: "Admin-Freigabe erforderlich" }, { status: 403 });
  }
  const url = new URL(req.url);
  const page = url.searchParams.get("page") ?? "";
  const def = getPageDef(page);
  if (!def) {
    return NextResponse.json({ error: "Unbekannte Seite" }, { status: 404 });
  }
  const defaults = defaultTextsFor(page);
  const rows = (await sql`
    SELECT key, value FROM page_texts WHERE page = ${page}
  `) as { key: string; value: string }[];
  const overrides: Record<string, string> = {};
  for (const r of rows) overrides[r.key] = r.value;

  return NextResponse.json({
    page: {
      slug: def.slug,
      label: def.label,
      description: def.description,
    },
    fields: def.fields.map((f) => ({
      key: f.key,
      label: f.label,
      kind: f.kind,
      default: f.default,
      value: overrides[f.key] ?? defaults[f.key] ?? "",
      overridden: Object.prototype.hasOwnProperty.call(overrides, f.key),
    })),
  });
}

export async function PUT(req: Request) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Nicht angemeldet" }, { status: 401 });
  }
  if (!(await isAdmin())) {
    return NextResponse.json({ error: "Admin-Freigabe erforderlich" }, { status: 403 });
  }
  let body: Record<string, unknown> = {};
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage" }, { status: 400 });
  }
  const page = typeof body.page === "string" ? body.page : "";
  const def = getPageDef(page);
  if (!def) {
    return NextResponse.json({ error: "Unbekannte Seite" }, { status: 404 });
  }
  const values = body.values;
  if (!values || typeof values !== "object") {
    return NextResponse.json({ error: "Werte fehlen" }, { status: 400 });
  }

  const allowed = new Set(def.fields.map((f) => f.key));
  const defaults = defaultTextsFor(page);

  const updates: { key: string; value: string }[] = [];
  const resets: string[] = [];

  for (const [key, raw] of Object.entries(values as Record<string, unknown>)) {
    if (!allowed.has(key)) continue;
    if (typeof raw !== "string") continue;
    const value = raw;
    if (value === defaults[key]) {
      resets.push(key);
    } else {
      updates.push({ key, value });
    }
  }

  for (const u of updates) {
    await sql`
      INSERT INTO page_texts (page, key, value, updated_at)
      VALUES (${page}, ${u.key}, ${u.value}, now())
      ON CONFLICT (page, key)
      DO UPDATE SET value = EXCLUDED.value, updated_at = now()
    `;
  }
  for (const key of resets) {
    await sql`DELETE FROM page_texts WHERE page = ${page} AND key = ${key}`;
  }

  const paths = PATHS_FOR_SLUG[page] ?? [];
  for (const p of paths) {
    try {
      revalidatePath(p);
    } catch {
      /* noop */
    }
  }

  return NextResponse.json({ ok: true, updated: updates.length, reset: resets.length });
}

export async function OPTIONS() {
  return NextResponse.json({ pages: PAGE_DEFS.map((p) => ({ slug: p.slug, label: p.label })) });
}
