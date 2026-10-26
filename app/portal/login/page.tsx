import type { Metadata } from "next";
import { LoginForm } from "./LoginForm";

export const metadata: Metadata = {
  title: "Mitarbeiter-Login",
  robots: { index: false, follow: false },
};

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ redirect?: string }>;
}) {
  const { redirect } = await searchParams;
  return (
    <main className="section">
      <div className="container-x max-w-md">
        <p className="eyebrow">Mitarbeiter-Portal</p>
        <h1 className="h-serif mt-4 text-3xl font-bold text-ink md:text-4xl">
          Anmelden
        </h1>
        <p className="mt-4 text-ink-500">
          Zugang ist Mitarbeitern des Vereins vorbehalten.
        </p>
        <LoginForm redirectTo={redirect ?? "/portal"} />
      </div>
    </main>
  );
}
