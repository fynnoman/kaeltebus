import type { Metadata } from "next";
import { MembersLoginForm } from "./MembersLoginForm";

export const metadata: Metadata = {
  title: "Mitgliederbereich · Anmeldung",
  robots: { index: false, follow: false },
};

export default async function MembersLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ redirect?: string }>;
}) {
  const { redirect } = await searchParams;
  return (
    <main className="section">
      <div className="container-x max-w-md">
        <p className="eyebrow">Mitgliederbereich</p>
        <h1 className="h-serif mt-4 text-3xl font-bold text-ink md:text-4xl">
          Anmelden
        </h1>
        <p className="mt-4 text-ink-500">
          Dieser Bereich ist Vereinsmitgliedern vorbehalten. Hier findet ihr Einladungen,
          Protokolle und interne Unterlagen.
        </p>
        <MembersLoginForm redirectTo={redirect ?? "/mitglieder"} />
      </div>
    </main>
  );
}
