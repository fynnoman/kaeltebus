import { NextResponse } from "next/server";
import { clearMembersCookie } from "@/lib/membersAuth";

export async function POST() {
  await clearMembersCookie();
  return NextResponse.json({ ok: true });
}
