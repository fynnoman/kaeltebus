import { NextResponse } from "next/server";
import {
  checkPassword,
  checkAdminPassword,
  setSessionCookie,
  setAdminCookie,
} from "@/lib/auth";

export async function POST(req: Request) {
  let password = "";
  let adminPassword = "";
  try {
    const body = await req.json();
    password = typeof body?.password === "string" ? body.password : "";
    adminPassword =
      typeof body?.admin_password === "string" ? body.admin_password : "";
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage" }, { status: 400 });
  }

  if (!checkPassword(password)) {
    return NextResponse.json({ error: "Falsches Passwort" }, { status: 401 });
  }

  await setSessionCookie();

  let adminGranted = false;
  if (adminPassword) {
    if (!checkAdminPassword(adminPassword)) {
      return NextResponse.json(
        { error: "Falsches Admin-Passwort" },
        { status: 401 },
      );
    }
    await setAdminCookie();
    adminGranted = true;
  }

  return NextResponse.json({ ok: true, admin: adminGranted });
}
