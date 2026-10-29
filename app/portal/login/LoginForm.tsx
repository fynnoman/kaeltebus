"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { PasswordInput } from "@/components/portal/PasswordInput";

export function LoginForm({
  redirectTo,
  adminMode = false,
}: {
  redirectTo: string;
  adminMode?: boolean;
}) {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setPending(true);
    setError(null);
    try {
      const res = await fetch("/api/portal/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          password,
          admin_password: adminMode ? adminPassword : undefined,
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data?.error ?? "Login fehlgeschlagen");
        setPending(false);
        return;
      }
      router.replace(adminMode ? "/portal/downloads" : redirectTo || "/portal");
      router.refresh();
    } catch {
      setError("Netzwerkfehler");
      setPending(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-8 space-y-4">
      <label className="block">
        <span className="text-sm font-medium text-ink">Vereinsmitglieder-Passwort</span>
        <div className="mt-2">
          <PasswordInput
            autoFocus
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </label>

      {adminMode && (
        <label className="block">
          <span className="text-sm font-medium text-ink">Admin-Passwort</span>
          <div className="mt-2">
            <PasswordInput
              required
              value={adminPassword}
              onChange={(e) => setAdminPassword(e.target.value)}
            />
          </div>
          <span className="mt-1 block text-xs text-ink-400">
            Schaltet die Verwaltung interner Dateien frei.
          </span>
        </label>
      )}

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
