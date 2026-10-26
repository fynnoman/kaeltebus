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
        <div className="container-x flex items-center justify-between py-4">
          <Link href="/portal" className="flex items-center gap-3">
            <span className="h-7 w-1 bg-rot" aria-hidden />
            <span className="font-semibold text-ink">Mitarbeiter-Portal</span>
          </Link>
          <div className="flex items-center gap-2">
            <Link href="/aktuelles" className="hidden text-sm text-ink-500 hover:text-rot sm:inline">
              Zur Aktuelles-Seite
            </Link>
            <LogoutButton />
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
