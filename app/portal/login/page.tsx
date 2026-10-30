import type { Metadata } from "next";
import { LoginForm } from "./LoginForm";

export const metadata: Metadata = {
  title: "Vereinsmitglieder-Login",
  robots: { index: false, follow: false },
};

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ redirect?: string; mode?: string }>;
}) {
  const { redirect, mode } = await searchParams;
  const adminMode = mode === "admin";

  return (
    <main className="section">
      <div className="container-x max-w-md">
        <p className="eyebrow">{adminMode ? "Admin-Portal" : "Vereinsmitglieder-Portal"}</p>
        <h1 className="h-serif mt-4 text-3xl font-bold text-ink md:text-4xl">
          Anmelden
        </h1>
        <p className="mt-4 text-ink-500">
          {adminMode
            ? "Für den Admin-Bereich sind beide Passwörter erforderlich. Das Admin-Passwort schaltet die Verwaltung frei."
            : "Zugang ist Vereinsmitgliedern vorbehalten."}
        </p>
        <LoginForm redirectTo={redirect ?? "/portal/downloads"} adminMode={adminMode} />
      </div>
    </main>
  );
}
