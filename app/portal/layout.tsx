import type { Metadata } from "next";
import Link from "next/link";
import { isAuthenticated } from "@/lib/auth";
import { LogoutButton } from "./LogoutButton";

export const metadata: Metadata = {
  title: "Mitarbeiter-Portal",
  robots: { index: false, follow: false },
};

export default async function PortalLayout({ children }: { children: React.ReactNode }) {
  const authed = await isAuthenticated();
  if (!authed) return <>{children}</>;

  return (
    <div className="bg-paper-100 min-h-[60vh]">
      <div className="border-b border-line bg-white">
        <div className="container-x flex flex-wrap items-center justify-between gap-3 py-4">
          <Link href="/portal" className="flex items-center gap-3">
            <span className="h-7 w-1 bg-rot" aria-hidden />
            <span className="font-semibold text-ink">Mitarbeiter-Portal</span>
          </Link>
          <nav className="flex items-center gap-5 text-sm">
            <Link href="/portal" className="text-ink-500 hover:text-rot">
              Beiträge
            </Link>
            <Link href="/portal/texte" className="text-ink-500 hover:text-rot">
              Texte
            </Link>
            <Link href="/" className="hidden text-ink-400 hover:text-rot sm:inline">
              Zur Website
            </Link>
            <LogoutButton />
          </nav>
        </div>
      </div>
      {children}
    </div>
  );
}
