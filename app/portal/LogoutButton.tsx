"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function LogoutButton() {
  const router = useRouter();
  const [pending, setPending] = useState(false);
  return (
    <button
      type="button"
      disabled={pending}
      onClick={async () => {
        setPending(true);
        await fetch("/api/portal/logout", { method: "POST" });
        router.replace("/portal/login");
        router.refresh();
      }}
      className="rounded border border-line bg-white px-3 py-1.5 text-sm text-ink hover:border-rot hover:text-rot disabled:opacity-60"
    >
      Abmelden
    </button>
  );
}
