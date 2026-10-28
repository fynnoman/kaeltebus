import { NextResponse } from "next/server";
import {
  checkAdminPassword,
  clearAdminCookie,
  isAdmin,
  setAdminCookie,
} from "@/lib/auth";

export async function GET() {
  const admin = await isAdmin();
  return NextResponse.json({ admin });
}

export async function POST(req: Request) {
  let password = "";
  try {
    const body = await req.json();
    password = typeof body?.password === "string" ? body.password : "";
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage" }, { status: 400 });
  }

  if (!checkAdminPassword(password)) {
    return NextResponse.json({ error: "Falsches Admin-Passwort" }, { status: 401 });
  }

  await setAdminCookie();
  return NextResponse.json({ ok: true });
}

export async function DELETE() {
  await clearAdminCookie();
  return NextResponse.json({ ok: true });
}
