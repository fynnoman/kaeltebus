"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  PUBLIC_CATEGORIES,
  formatBytes,
  type DownloadRow,
  type DownloadVisibility,
} from "@/lib/downloadsShared";

type DraftFile = {
  url: string;
  name: string;
  size: number;
} | null;

export function DownloadsManager({
  initial,
  admin: initialAdmin,
}: {
  initial: DownloadRow[];
  admin: boolean;
}) {
  const router = useRouter();
  const [rows, setRows] = useState<DownloadRow[]>(initial);
  const [tab, setTab] = useState<DownloadVisibility>("public");
  const [editing, setEditing] = useState<DownloadRow | null>(null);
  const [showNew, setShowNew] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [admin, setAdmin] = useState(initialAdmin);
  const [adminPending, setAdminPending] = useState(false);
  const [adminError, setAdminError] = useState<string | null>(null);
  const [adminPassword, setAdminPassword] = useState("");

  const activeRows = useMemo(() => rows.filter((r) => r.visibility === tab), [rows, tab]);

  const groupedPublic = useMemo(() => {
    const map = new Map<string, DownloadRow[]>();
    for (const row of activeRows) {
      const key = row.category ?? "";
      const list = map.get(key) ?? [];
      list.push(row);
      map.set(key, list);
    }
    return map;
  }, [activeRows]);

  async function reload() {
    const res = await fetch("/api/portal/downloads", { cache: "no-store" });
    const data = await res.json();
    setRows(data.downloads ?? []);
    router.refresh();
  }

  async function remove(id: string) {
    if (!window.confirm("Diese Datei wirklich löschen?")) return;
    const res = await fetch(`/api/portal/downloads/${id}`, { method: "DELETE" });
    if (res.ok) {
      setRows((prev) => prev.filter((r) => r.id !== id));
      router.refresh();
    } else {
      const data = await res.json().catch(() => ({}));
      alert(data?.error ?? "Löschen fehlgeschlagen");
    }
  }

  async function copyLink(row: DownloadRow) {
    try {
      await navigator.clipboard.writeText(row.file_url);
      setCopiedId(row.id);
      setTimeout(() => setCopiedId((v) => (v === row.id ? null : v)), 2000);
    } catch {
      /* kein Clipboard verfügbar */
    }
  }

  async function unlockAdmin(e: React.FormEvent) {
    e.preventDefault();
    setAdminPending(true);
    setAdminError(null);
    try {
      const res = await fetch("/api/portal/admin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: adminPassword }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setAdminError(data?.error ?? "Freischalten fehlgeschlagen");
        setAdminPending(false);
        return;
      }
      setAdmin(true);
      setAdminPassword("");
      setAdminPending(false);
      await reload();
    } catch {
      setAdminError("Netzwerkfehler");
      setAdminPending(false);
    }
  }

  async function lockAdmin() {
    await fetch("/api/portal/admin", { method: "DELETE" });
    setAdmin(false);
    setRows((prev) => prev.filter((r) => r.visibility === "public"));
    setTab("public");
    router.refresh();
  }

  const canCreate = tab === "public" || admin;

  return (
    <div className="mt-10 space-y-6">
      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => setTab("public")}
          className={`rounded px-4 py-2 text-sm font-semibold ${
            tab === "public"
              ? "bg-ink text-white"
              : "border border-line bg-white text-ink hover:border-rot hover:text-rot"
          }`}
        >
          Öffentliche Downloads
        </button>
        <button
          type="button"
          onClick={() => setTab("internal")}
          className={`inline-flex items-center gap-2 rounded px-4 py-2 text-sm font-semibold ${
            tab === "internal"
              ? "bg-ink text-white"
              : "border border-line bg-white text-ink hover:border-rot hover:text-rot"
          }`}
          aria-label="Interne Downloads"
        >
          <span>Interne Downloads</span>
          {!admin && (
            <span aria-hidden className="text-[13px]">
              🔒
            </span>
          )}
        </button>
        {canCreate && (
          <button type="button" onClick={() => setShowNew(true)} className="btn-primary ml-auto">
            Neue Datei hochladen
          </button>
        )}
        {admin && (
          <button
            type="button"
            onClick={lockAdmin}
            className="ml-auto rounded border border-line bg-white px-3 py-1.5 text-xs text-ink-500 hover:border-rot hover:text-rot"
          >
            Admin-Session beenden
          </button>
        )}
      </div>

      <p className="text-sm text-ink-500">
        {tab === "public"
          ? "Diese Dateien erscheinen für alle Besucher unter /downloads, geordnet nach Kategorien."
          : admin
            ? "Diese Dateien bleiben im passwortgeschützten Portal. Nutzt den Link-kopieren-Button, um ihn intern zu teilen."
            : "Dieser Bereich ist zusätzlich durch ein Admin-Passwort geschützt. Gib das Admin-Passwort ein, um interne Dateien zu sehen und zu verwalten."}
      </p>

      {tab === "public" ? (
        <div className="space-y-6">
          {PUBLIC_CATEGORIES.map((cat) => {
            const items = groupedPublic.get(cat.slug) ?? [];
            return (
              <CategorySection
                key={cat.slug}
                label={cat.label}
                slug={cat.slug}
                items={items}
                onEdit={setEditing}
                onDelete={remove}
                onCopy={copyLink}
                copiedId={copiedId}
              />
            );
          })}
          {groupedPublic.get("")?.length ? (
            <CategorySection
              label="Ohne Kategorie"
              slug=""
              items={groupedPublic.get("") ?? []}
              onEdit={setEditing}
              onDelete={remove}
              onCopy={copyLink}
              copiedId={copiedId}
            />
          ) : null}
        </div>
      ) : admin ? (
        <section className="rounded-md border border-line bg-white">
          {activeRows.length === 0 ? (
            <div className="p-10 text-center text-ink-500">Noch keine internen Dateien.</div>
          ) : (
            <ul className="divide-y divide-line">
              {activeRows.map((row) => (
                <DownloadRowItem
                  key={row.id}
                  row={row}
                  onEdit={setEditing}
                  onDelete={remove}
                  onCopy={copyLink}
                  copiedId={copiedId}
                />
              ))}
            </ul>
          )}
        </section>
      ) : (
        <section className="rounded-md border border-line bg-white p-6">
          <h3 className="h-serif text-lg font-bold text-ink">Admin-Zugang erforderlich</h3>
          <p className="mt-2 text-sm text-ink-500">
            Gib das Admin-Passwort ein, um die internen Dateien zu sehen oder neue hochzuladen.
            Die Freischaltung gilt für die aktuelle Sitzung.
          </p>
          <form onSubmit={unlockAdmin} className="mt-6 flex flex-wrap items-end gap-3">
            <label className="min-w-[240px] flex-1">
              <span className="text-sm font-medium text-ink">Admin-Passwort</span>
              <input
                type="password"
                autoFocus
                required
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
                className="mt-2 block w-full rounded border border-line bg-white px-3 py-2.5 text-ink outline-none focus:border-rot"
              />
            </label>
            <button type="submit" disabled={adminPending} className="btn-primary disabled:opacity-60">
              {adminPending ? "Prüfe …" : "Freischalten"}
            </button>
          </form>
          {adminError && (
            <p className="mt-3 text-sm text-rot" role="alert">
              {adminError}
            </p>
          )}
        </section>
      )}

      {(showNew || editing) && (
        <DownloadForm
          initial={editing ?? undefined}
          defaultVisibility={tab}
          admin={admin}
          onClose={() => {
            setShowNew(false);
            setEditing(null);
          }}
          onSaved={() => {
            setShowNew(false);
            setEditing(null);
            reload();
          }}
        />
      )}
    </div>
  );
}

function CategorySection({
  label,
  slug,
  items,
  onEdit,
  onDelete,
  onCopy,
  copiedId,
}: {
  label: string;
  slug: string;
  items: DownloadRow[];
  onEdit: (row: DownloadRow) => void;
  onDelete: (id: string) => void;
  onCopy: (row: DownloadRow) => void;
  copiedId: string | null;
}) {
  return (
    <section className="rounded-md border border-line bg-white">
      <header className="flex items-center justify-between gap-4 border-b border-line px-5 py-3">
        <div>
          {slug && (
            <div className="text-[11.5px] font-semibold uppercase tracking-kicker text-rot">
              {slug}
            </div>
          )}
          <h3 className="h-serif mt-1 text-lg font-bold text-ink">{label}</h3>
        </div>
        <span className="rounded bg-paper-100 px-2 py-1 text-[11px] font-semibold text-ink-500">
          {items.length} {items.length === 1 ? "Datei" : "Dateien"}
        </span>
      </header>
      {items.length === 0 ? (
        <div className="p-6 text-sm text-ink-400">Noch nichts hochgeladen.</div>
      ) : (
        <ul className="divide-y divide-line">
          {items.map((row) => (
            <DownloadRowItem
              key={row.id}
              row={row}
              onEdit={onEdit}
              onDelete={onDelete}
              onCopy={onCopy}
              copiedId={copiedId}
            />
          ))}
        </ul>
      )}
    </section>
  );
}

function DownloadRowItem({
  row,
  onEdit,
  onDelete,
  onCopy,
  copiedId,
}: {
  row: DownloadRow;
  onEdit: (row: DownloadRow) => void;
  onDelete: (id: string) => void;
  onCopy: (row: DownloadRow) => void;
  copiedId: string | null;
}) {
  return (
    <li className="flex flex-wrap items-start justify-between gap-4 px-5 py-4">
      <div className="min-w-0 flex-1">
        <div className="font-semibold text-ink">{row.title}</div>
        {row.description && <div className="mt-1 text-sm text-ink-500">{row.description}</div>}
        <div className="mt-2 flex flex-wrap items-center gap-3 text-[12.5px] text-ink-400">
          <a
            href={row.file_url}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-rot hover:underline"
          >
            {row.file_name}
          </a>
          <span>{formatBytes(row.file_size)}</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => onCopy(row)}
          className="rounded border border-line bg-white px-3 py-1.5 text-xs text-ink hover:border-rot hover:text-rot"
        >
          {copiedId === row.id ? "Kopiert" : "Link kopieren"}
        </button>
        <button
          type="button"
          onClick={() => onEdit(row)}
          className="rounded bg-ink px-3 py-1.5 text-xs text-white hover:bg-ink-700"
        >
          Bearbeiten
        </button>
        <button
          type="button"
          onClick={() => onDelete(row.id)}
          className="rounded border border-line bg-white px-3 py-1.5 text-xs text-ink-500 hover:border-rot hover:text-rot"
        >
          Löschen
        </button>
      </div>
    </li>
  );
}

function DownloadForm({
  initial,
  defaultVisibility,
  admin,
  onClose,
  onSaved,
}: {
  initial?: DownloadRow;
  defaultVisibility: DownloadVisibility;
  admin: boolean;
  onClose: () => void;
  onSaved: () => void;
}) {
  const isEdit = Boolean(initial?.id);
  const [title, setTitle] = useState(initial?.title ?? "");
  const [description, setDescription] = useState(initial?.description ?? "");
  const [visibility, setVisibility] = useState<DownloadVisibility>(
    initial?.visibility ?? defaultVisibility,
  );
  const [category, setCategory] = useState(initial?.category ?? "");
  const [file, setFile] = useState<DraftFile>(
    initial
      ? { url: initial.file_url, name: initial.file_name, size: initial.file_size }
      : null,
  );
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (visibility !== "public") return;
    if (!PUBLIC_CATEGORIES.find((c) => c.slug === category)) {
      setCategory("");
    }
  }, [visibility, category]);

  async function upload(input: File) {
    setUploading(true);
    setError(null);
    try {
      const form = new FormData();
      form.append("file", input);
      const res = await fetch("/api/portal/downloads/upload", { method: "POST", body: form });
      const data = await res.json();
      if (!res.ok) {
        setError(data?.error ?? "Upload fehlgeschlagen");
        return;
      }
      setFile({ url: data.url, name: data.file_name, size: data.file_size });
    } catch {
      setError("Netzwerkfehler beim Hochladen");
    } finally {
      setUploading(false);
    }
  }

  async function save() {
    if (!title.trim()) return setError("Bitte einen Titel eingeben.");
    if (visibility === "public" && !category) {
      return setError("Für öffentliche Downloads bitte eine Kategorie wählen.");
    }
    if (visibility === "internal" && !admin) {
      return setError("Admin-Freigabe erforderlich. Bitte zuerst oben freischalten.");
    }
    if (!file) return setError("Bitte zuerst eine Datei hochladen.");

    setSaving(true);
    setError(null);

    const payload = {
      title: title.trim(),
      description: description.trim(),
      visibility,
      category: visibility === "public" ? category : "",
      file_url: file.url,
      file_name: file.name,
      file_size: file.size,
    };

    try {
      const res = isEdit
        ? await fetch(`/api/portal/downloads/${initial!.id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          })
        : await fetch("/api/portal/downloads", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data?.error ?? "Speichern fehlgeschlagen");
        setSaving(false);
        return;
      }
      onSaved();
    } catch {
      setError("Netzwerkfehler");
      setSaving(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-ink/40 p-4">
      <div className="my-10 w-full max-w-xl rounded-md border border-line bg-white p-6 shadow-lg">
        <div className="flex items-start justify-between gap-4">
          <h3 className="h-serif text-xl font-bold text-ink">
            {isEdit ? "Datei bearbeiten" : "Neue Datei"}
          </h3>
          <button type="button" onClick={onClose} className="text-sm text-ink-400 hover:text-rot">
            Schließen
          </button>
        </div>

        <div className="mt-6 space-y-4">
          <label className="block">
            <span className="text-sm font-medium text-ink">Titel</span>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="z.B. Kompass zur Helfertätigkeit 2026"
              className="mt-2 block w-full rounded border border-line bg-white px-3 py-2.5 text-ink outline-none focus:border-rot"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-ink">Kurzbeschreibung (optional)</span>
            <textarea
              value={description ?? ""}
              onChange={(e) => setDescription(e.target.value)}
              rows={2}
              placeholder="Wird unter dem Titel angezeigt."
              className="mt-2 block w-full rounded border border-line bg-white px-3 py-2.5 text-ink outline-none focus:border-rot"
            />
          </label>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-medium text-ink">Sichtbarkeit</span>
              <select
                value={visibility}
                onChange={(e) => setVisibility(e.target.value as DownloadVisibility)}
                className="mt-2 block w-full rounded border border-line bg-white px-3 py-2.5 text-ink outline-none focus:border-rot"
              >
                <option value="public">Öffentlich (für Besucher)</option>
                <option value="internal" disabled={!admin}>
                  Intern (nur im Portal){!admin ? " — Admin erforderlich" : ""}
                </option>
              </select>
            </label>
            {visibility === "public" && (
              <label className="block">
                <span className="text-sm font-medium text-ink">Kategorie</span>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="mt-2 block w-full rounded border border-line bg-white px-3 py-2.5 text-ink outline-none focus:border-rot"
                >
                  <option value="">— bitte wählen —</option>
                  {PUBLIC_CATEGORIES.map((c) => (
                    <option key={c.slug} value={c.slug}>
                      {c.label}
                    </option>
                  ))}
                </select>
              </label>
            )}
          </div>

          <div className="rounded border border-line bg-paper-100 p-4">
            <div className="text-sm font-medium text-ink">Datei (PDF, DOC, DOCX, max. 40 MB)</div>
            {file ? (
              <div className="mt-2 flex items-center justify-between gap-3 rounded border border-line bg-white px-3 py-2">
                <div className="min-w-0">
                  <a
                    href={file.url}
                    target="_blank"
                    rel="noreferrer"
                    className="truncate text-sm font-medium text-rot hover:underline"
                  >
                    {file.name}
                  </a>
                  <div className="text-xs text-ink-400">{formatBytes(file.size)}</div>
                </div>
                <label className="shrink-0 cursor-pointer rounded border border-line bg-white px-2 py-1 text-xs text-ink hover:border-rot hover:text-rot">
                  {uploading ? "Lade hoch …" : "Ersetzen"}
                  <input
                    type="file"
                    accept="application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    className="hidden"
                    onChange={(e) => {
                      const f = e.target.files?.[0];
                      if (f) upload(f);
                      e.currentTarget.value = "";
                    }}
                  />
                </label>
              </div>
            ) : (
              <label className="mt-3 block cursor-pointer rounded border border-dashed border-line bg-white px-3 py-6 text-center text-sm text-ink-500 hover:border-rot hover:text-rot">
                {uploading ? "Lade hoch …" : "Datei auswählen"}
                <input
                  type="file"
                  accept="application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  className="hidden"
                  onChange={(e) => {
                    const f = e.target.files?.[0];
                    if (f) upload(f);
                    e.currentTarget.value = "";
                  }}
                />
              </label>
            )}
          </div>

          {error && (
            <div className="rounded border border-rot bg-rot-50 px-3 py-2 text-sm text-rot-700" role="alert">
              {error}
            </div>
          )}

          <div className="flex items-center justify-end gap-3 border-t border-line pt-4">
            <button type="button" onClick={onClose} className="text-sm text-ink-500 hover:text-rot">
              Abbrechen
            </button>
            <button
              type="button"
              onClick={save}
              disabled={saving || uploading}
              className="btn-primary disabled:opacity-60"
            >
              {saving ? "Speichere …" : isEdit ? "Änderungen speichern" : "Hinzufügen"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
