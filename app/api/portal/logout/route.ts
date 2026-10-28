import { NextResponse } from "next/server";
import { clearAdminCookie, clearSessionCookie } from "@/lib/auth";

export async function POST() {
  await clearSessionCookie();
  await clearAdminCookie();
  return NextResponse.json({ ok: true });
}
