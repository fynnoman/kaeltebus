"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function MembersLoginForm({ redirectTo }: { redirectTo: string }) {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setPending(true);
    setError(null);
    try {
      const res = await fetch("/api/mitglieder/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data?.error ?? "Login fehlgeschlagen");
        setPending(false);
        return;
      }
      router.replace(redirectTo || "/mitglieder");
      router.refresh();
    } catch {
      setError("Netzwerkfehler");
      setPending(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-8 space-y-4">
      <label className="block">
        <span className="text-sm font-medium text-ink">Passwort</span>
        <input
          type="password"
          autoFocus
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-2 block w-full rounded border border-line bg-white px-3 py-2.5 text-ink outline-none focus:border-rot"
        />
      </label>
      {error && (
        <p className="text-sm text-rot" role="alert">
          {error}
        </p>
      )}
      <button type="submit" disabled={pending} className="btn-primary w-full disabled:opacity-60">
        {pending ? "Prüfe …" : "Anmelden"}
      </button>
    </form>
  );
}
