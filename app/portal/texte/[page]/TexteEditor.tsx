"use client";

import { useMemo, useState, useTransition } from "react";

type Field = {
  key: string;
  label: string;
  kind: "short" | "long";
  default: string;
  value: string;
  overridden: boolean;
};

type Status =
  | { kind: "idle" }
  | { kind: "saving" }
  | { kind: "ok"; message: string }
  | { kind: "error"; message: string };

export function TexteEditor({
  page,
  initialFields,
}: {
  page: string;
  initialFields: Field[];
}) {
  const [fields, setFields] = useState<Field[]>(initialFields);
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [filter, setFilter] = useState("");
  const [isPending, startTransition] = useTransition();

  const dirtyCount = useMemo(
    () =>
      fields.reduce((n, f) => {
        const initial = initialFields.find((x) => x.key === f.key)?.value ?? "";
        return f.value !== initial ? n + 1 : n;
      }, 0),
    [fields, initialFields],
  );

  const visible = useMemo(() => {
    const q = filter.trim().toLowerCase();
    if (!q) return fields;
    return fields.filter(
      (f) =>
        f.label.toLowerCase().includes(q) ||
        f.key.toLowerCase().includes(q) ||
        f.value.toLowerCase().includes(q),
    );
  }, [fields, filter]);

  function updateValue(key: string, value: string) {
    setFields((prev) =>
      prev.map((f) => (f.key === key ? { ...f, value } : f)),
    );
    setStatus({ kind: "idle" });
  }

  function resetToDefault(key: string) {
    setFields((prev) =>
      prev.map((f) => (f.key === key ? { ...f, value: f.default } : f)),
    );
    setStatus({ kind: "idle" });
  }

  async function save() {
    setStatus({ kind: "saving" });
    const values: Record<string, string> = {};
    for (const f of fields) values[f.key] = f.value;
    try {
      const res = await fetch("/api/portal/texts", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ page, values }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error((data as { error?: string }).error ?? "Speichern fehlgeschlagen");
      }
      setStatus({ kind: "ok", message: "Gespeichert. Die Website zeigt die neuen Texte jetzt an." });
      startTransition(() => {
        setFields((prev) =>
          prev.map((f) => ({
            ...f,
            overridden: f.value !== f.default,
          })),
        );
      });
    } catch (err) {
      setStatus({
        kind: "error",
        message: err instanceof Error ? err.message : "Speichern fehlgeschlagen",
      });
    }
  }

  return (
    <div className="mt-10">
      <div className="sticky top-[72px] z-10 flex flex-wrap items-center justify-between gap-3 rounded-md border border-line bg-white/95 p-3 backdrop-blur">
        <input
          type="search"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Textstelle suchen (Label, Schlüssel, Inhalt)"
          className="min-w-0 flex-1 rounded border border-line px-3 py-2 text-sm outline-none focus:border-rot"
        />
        <div className="flex items-center gap-3 text-[13px]">
          <span className="text-ink-500">
            {dirtyCount > 0
              ? `${dirtyCount} Änderung${dirtyCount === 1 ? "" : "en"}`
              : "Keine Änderungen"}
          </span>
          <button
            type="button"
            onClick={save}
            disabled={status.kind === "saving" || dirtyCount === 0}
            className="rounded bg-ink px-4 py-2 text-sm font-semibold text-white hover:bg-ink-700 disabled:cursor-not-allowed disabled:bg-ink-200"
          >
            {status.kind === "saving" ? "Speichert…" : "Speichern"}
          </button>
        </div>
      </div>

      {status.kind === "ok" && (
        <div className="mt-4 rounded border border-rot-200 bg-rot-50 px-4 py-3 text-sm text-rot-700">
          {status.message}
        </div>
      )}
      {status.kind === "error" && (
        <div className="mt-4 rounded border border-notfall/40 bg-notfall-50 px-4 py-3 text-sm text-notfall-600">
          {status.message}
        </div>
      )}

      <ul className="mt-6 space-y-5">
        {visible.map((f) => {
          const isDirty =
            (initialFields.find((x) => x.key === f.key)?.value ?? "") !== f.value;
          return (
            <li
              key={f.key}
              className={`rounded-md border bg-white p-5 ${
                isDirty ? "border-rot" : "border-line"
              }`}
            >
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <label
                    htmlFor={`field-${f.key}`}
                    className="block text-sm font-semibold text-ink"
                  >
                    {f.label}
                  </label>
                  <div className="mt-1 text-[11.5px] uppercase tracking-kicker text-ink-400">
                    {f.key}
                    {f.overridden && !isDirty && (
                      <span className="ml-2 rounded bg-paper-100 px-1.5 py-0.5 text-[10.5px] font-semibold text-ink-500">
                        angepasst
                      </span>
                    )}
                    {isDirty && (
                      <span className="ml-2 rounded bg-rot-50 px-1.5 py-0.5 text-[10.5px] font-semibold text-rot-600">
                        geändert
                      </span>
                    )}
                  </div>
                </div>
                {f.value !== f.default && (
                  <button
                    type="button"
                    onClick={() => resetToDefault(f.key)}
                    className="rounded border border-line bg-white px-2 py-1 text-[12px] text-ink-500 hover:border-rot hover:text-rot"
                  >
                    Auf Standard
                  </button>
                )}
              </div>

              {f.kind === "long" ? (
                <textarea
                  id={`field-${f.key}`}
                  value={f.value}
                  onChange={(e) => updateValue(f.key, e.target.value)}
                  rows={Math.min(10, Math.max(3, Math.ceil(f.value.length / 90)))}
                  className="mt-3 w-full rounded border border-line bg-white px-3 py-2 text-[14px] leading-relaxed text-ink outline-none focus:border-rot"
                />
              ) : (
                <input
                  id={`field-${f.key}`}
                  type="text"
                  value={f.value}
                  onChange={(e) => updateValue(f.key, e.target.value)}
                  className="mt-3 w-full rounded border border-line bg-white px-3 py-2 text-[14px] text-ink outline-none focus:border-rot"
                />
              )}

              <details className="mt-2 text-[12.5px] text-ink-400">
                <summary className="cursor-pointer hover:text-ink-500">
                  Standardtext anzeigen
                </summary>
                <p className="mt-2 whitespace-pre-line rounded bg-paper-100 p-2 text-[12.5px] leading-relaxed text-ink-500">
                  {f.default}
                </p>
              </details>
            </li>
          );
        })}
      </ul>

      {visible.length === 0 && (
        <p className="mt-10 text-center text-ink-500">
          Keine Textstellen passen zum Filter „{filter}".
        </p>
      )}

      <div className="mt-10 flex justify-end">
        <button
          type="button"
          onClick={save}
          disabled={status.kind === "saving" || dirtyCount === 0 || isPending}
          className="rounded bg-ink px-5 py-2.5 text-sm font-semibold text-white hover:bg-ink-700 disabled:cursor-not-allowed disabled:bg-ink-200"
        >
          {status.kind === "saving" ? "Speichert…" : "Alle Änderungen speichern"}
        </button>
      </div>
    </div>
  );
}
