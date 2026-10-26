"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { RichEditor } from "./Editor";

type Initial = {
  id?: string;
  title?: string;
  excerpt?: string;
  body_html?: string;
  cover_url?: string | null;
  cover_alt?: string;
  author?: string;
  published?: boolean;
  slug?: string;
};

export function PostForm({ initial }: { initial?: Initial }) {
  const router = useRouter();
  const isEdit = Boolean(initial?.id);

  const [title, setTitle] = useState(initial?.title ?? "");
  const [excerpt, setExcerpt] = useState(initial?.excerpt ?? "");
  const [bodyHtml, setBodyHtml] = useState(initial?.body_html ?? "");
  const [coverUrl, setCoverUrl] = useState<string | null>(initial?.cover_url ?? null);
  const [coverAlt, setCoverAlt] = useState(initial?.cover_alt ?? "");
  const [author, setAuthor] = useState(initial?.author ?? "");
  const [published, setPublished] = useState<boolean>(initial?.published ?? false);

  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState<"draft" | "publish" | null>(null);
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function uploadCover(file: File) {
    setUploading(true);
    setError(null);
    try {
      const form = new FormData();
      form.append("file", file);
      const res = await fetch("/api/portal/upload", { method: "POST", body: form });
      const data = await res.json();
      if (!res.ok) {
        setError(data?.error ?? "Upload fehlgeschlagen");
        return;
      }
      setCoverUrl(data.url);
    } catch {
      setError("Upload-Fehler");
    } finally {
      setUploading(false);
    }
  }

  async function save(publish: boolean) {
    if (!title.trim()) {
      setError("Bitte einen Titel eingeben.");
      return;
    }
    setSaving(publish ? "publish" : "draft");
    setError(null);
    const payload = {
      title: title.trim(),
      excerpt: excerpt.trim(),
      body_html: bodyHtml,
      cover_url: coverUrl,
      cover_alt: coverAlt.trim(),
      author: author.trim(),
      publish,
    };
    try {
      const res = isEdit
        ? await fetch(`/api/portal/posts/${initial!.id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          })
        : await fetch("/api/portal/posts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data?.error ?? "Speichern fehlgeschlagen");
        setSaving(null);
        return;
      }
      setPublished(publish);
      router.push("/portal");
      router.refresh();
    } catch {
      setError("Netzwerkfehler");
      setSaving(null);
    }
  }

  async function remove() {
    if (!initial?.id) return;
    if (!window.confirm("Diesen Beitrag wirklich löschen?")) return;
    setDeleting(true);
    try {
      const res = await fetch(`/api/portal/posts/${initial.id}`, { method: "DELETE" });
      if (!res.ok) {
        setError("Löschen fehlgeschlagen");
        setDeleting(false);
        return;
      }
      router.push("/portal");
      router.refresh();
    } catch {
      setError("Netzwerkfehler");
      setDeleting(false);
    }
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
      <div className="space-y-6">
        <label className="block">
          <span className="text-sm font-medium text-ink">Titel</span>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Titel des Beitrags"
            className="mt-2 block w-full rounded border border-line bg-white px-3 py-2.5 text-ink outline-none focus:border-rot"
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-ink">Kurztext</span>
          <textarea
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            rows={3}
            placeholder="Kurze Zusammenfassung (für die Übersichtsseite)."
            className="mt-2 block w-full rounded border border-line bg-white px-3 py-2.5 text-ink outline-none focus:border-rot"
          />
        </label>

        <div>
          <span className="text-sm font-medium text-ink">Inhalt</span>
          <div className="mt-2">
            <RichEditor value={bodyHtml} onChange={setBodyHtml} />
          </div>
        </div>

        {error && (
          <div className="rounded border border-rot bg-rot-50 px-3 py-2 text-sm text-rot-700" role="alert">
            {error}
          </div>
        )}

        <div className="flex flex-wrap items-center gap-3 border-t border-line pt-6">
          <button
            type="button"
            onClick={() => save(false)}
            disabled={saving !== null}
            className="btn-secondary disabled:opacity-60"
          >
            {saving === "draft" ? "Speichere …" : "Als Entwurf speichern"}
          </button>
          <button
            type="button"
            onClick={() => save(true)}
            disabled={saving !== null}
            className="btn-primary disabled:opacity-60"
          >
            {saving === "publish" ? "Veröffentliche …" : published ? "Aktualisieren" : "Veröffentlichen"}
          </button>
          <Link href="/portal" className="ml-auto text-sm text-ink-500 hover:text-rot">
            Abbrechen
          </Link>
          {isEdit && (
            <button
              type="button"
              onClick={remove}
              disabled={deleting}
              className="text-sm text-ink-400 hover:text-rot disabled:opacity-60"
            >
              {deleting ? "Lösche …" : "Löschen"}
            </button>
          )}
        </div>
      </div>

      <aside className="space-y-6">
        <div className="rounded border border-line bg-white p-5">
          <h2 className="text-sm font-semibold text-ink">Titelbild</h2>
          <p className="mt-1 text-xs text-ink-400">JPG, PNG, WEBP oder AVIF, max. 8 MB.</p>
          {coverUrl ? (
            <div className="mt-3 overflow-hidden rounded border border-line">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={coverUrl} alt={coverAlt || "Titelbild"} className="h-auto w-full" />
            </div>
          ) : (
            <div className="mt-3 flex aspect-[16/10] items-center justify-center rounded border border-dashed border-line text-xs text-ink-400">
              Kein Bild hochgeladen
            </div>
          )}
          <label className="mt-3 block cursor-pointer rounded border border-line bg-paper-100 px-3 py-2 text-center text-sm text-ink hover:border-rot hover:text-rot">
            {uploading ? "Lade hoch …" : coverUrl ? "Bild ersetzen" : "Bild hochladen"}
            <input
              type="file"
              accept="image/jpeg,image/png,image/webp,image/avif"
              className="hidden"
              onChange={(e) => {
                const f = e.target.files?.[0];
                if (f) uploadCover(f);
                e.currentTarget.value = "";
              }}
            />
          </label>
          {coverUrl && (
            <button
              type="button"
              onClick={() => setCoverUrl(null)}
              className="mt-2 w-full text-xs text-ink-400 hover:text-rot"
            >
              Titelbild entfernen
            </button>
          )}
          {coverUrl && (
            <label className="mt-4 block">
              <span className="text-xs font-medium text-ink">Bildbeschreibung</span>
              <input
                value={coverAlt}
                onChange={(e) => setCoverAlt(e.target.value)}
                placeholder="Was ist auf dem Bild zu sehen?"
                className="mt-1 block w-full rounded border border-line bg-white px-3 py-2 text-sm text-ink outline-none focus:border-rot"
              />
            </label>
          )}
        </div>

        <div className="rounded border border-line bg-white p-5">
          <h2 className="text-sm font-semibold text-ink">Autor</h2>
          <input
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Name (optional)"
            className="mt-2 block w-full rounded border border-line bg-white px-3 py-2 text-sm text-ink outline-none focus:border-rot"
          />
        </div>

        {isEdit && initial?.slug && published && (
          <div className="rounded border border-line bg-white p-5">
            <h2 className="text-sm font-semibold text-ink">Veröffentlicht</h2>
            <a
              href={`/aktuelles/${initial.slug}`}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex text-sm text-rot hover:text-rot-600"
            >
              /aktuelles/{initial.slug}
            </a>
          </div>
        )}
      </aside>
    </div>
  );
}
