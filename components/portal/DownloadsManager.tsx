"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { formatBytes, type DownloadRow } from "@/lib/downloadsShared";

type DraftFile = {
  url: string;
  name: string;
  size: number;
} | null;

export function DownloadsManager({ initial }: { initial: DownloadRow[] }) {
  const router = useRouter();
  const [rows, setRows] = useState<DownloadRow[]>(initial);
  const [editing, setEditing] = useState<DownloadRow | null>(null);
  const [showNew, setShowNew] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

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
      alert("Löschen fehlgeschlagen");
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

  return (
    <div className="mt-10 space-y-6">
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm text-ink-500">
          Jede hochgeladene Datei bekommt einen direkten Link, den ihr per Mail oder Chat weitergeben könnt.
        </p>
        <button type="button" onClick={() => setShowNew(true)} className="btn-primary shrink-0">
          Datei hochladen
        </button>
      </div>

      <section className="rounded-md border border-line bg-white">
        {rows.length === 0 ? (
          <div className="p-10 text-center text-ink-500">Noch keine Dateien hochgeladen.</div>
        ) : (
          <ul className="divide-y divide-line">
            {rows.map((row) => (
              <li key={row.id} className="flex flex-wrap items-start justify-between gap-4 px-5 py-4">
                <div className="min-w-0 flex-1">
                  <div className="font-semibold text-ink">{row.title}</div>
                  {row.description && (
                    <div className="mt-1 text-sm text-ink-500">{row.description}</div>
                  )}
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
                    onClick={() => copyLink(row)}
                    className="rounded border border-line bg-white px-3 py-1.5 text-xs text-ink hover:border-rot hover:text-rot"
                  >
                    {copiedId === row.id ? "Kopiert" : "Link kopieren"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditing(row)}
                    className="rounded bg-ink px-3 py-1.5 text-xs text-white hover:bg-ink-700"
                  >
                    Bearbeiten
                  </button>
                  <button
                    type="button"
                    onClick={() => remove(row.id)}
                    className="rounded border border-line bg-white px-3 py-1.5 text-xs text-ink-500 hover:border-rot hover:text-rot"
                  >
                    Löschen
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>

      {(showNew || editing) && (
        <DownloadForm
          initial={editing ?? undefined}
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

function DownloadForm({
  initial,
  onClose,
  onSaved,
}: {
  initial?: DownloadRow;
  onClose: () => void;
  onSaved: () => void;
}) {
  const isEdit = Boolean(initial?.id);
  const [title, setTitle] = useState(initial?.title ?? "");
  const [description, setDescription] = useState(initial?.description ?? "");
  const [file, setFile] = useState<DraftFile>(
    initial
      ? { url: initial.file_url, name: initial.file_name, size: initial.file_size }
      : null,
  );
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

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
    if (!file) return setError("Bitte zuerst eine Datei hochladen.");

    setSaving(true);
    setError(null);

    const payload = {
      title: title.trim(),
      description: description.trim(),
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
              placeholder="z.B. Kompass zur Helfertätigkeit"
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
