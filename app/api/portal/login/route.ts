import { NextResponse } from "next/server";
import { checkPassword, setSessionCookie } from "@/lib/auth";

export async function POST(req: Request) {
  let password = "";
  try {
    const body = await req.json();
    password = typeof body?.password === "string" ? body.password : "";
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage" }, { status: 400 });
  }

  if (!checkPassword(password)) {
    return NextResponse.json({ error: "Falsches Passwort" }, { status: 401 });
  }

  await setSessionCookie();
  return NextResponse.json({ ok: true });
}
