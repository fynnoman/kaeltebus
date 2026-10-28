import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

export const MEMBERS_COOKIE = "kb_members_session";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 14;

function getSecret() {
  const secret = process.env.SESSION_SECRET;
  if (!secret) throw new Error("SESSION_SECRET ist nicht gesetzt");
  return new TextEncoder().encode(secret);
}

async function createMembersToken() {
  return new SignJWT({ role: "members" })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(`${COOKIE_MAX_AGE}s`)
    .sign(getSecret());
}

export async function verifyMembersToken(token: string | undefined) {
  if (!token) return false;
  try {
    const { payload } = await jwtVerify(token, getSecret());
    return payload.role === "members" || payload.role === "staff";
  } catch {
    return false;
  }
}

export async function setMembersCookie() {
  const token = await createMembersToken();
  const store = await cookies();
  store.set(MEMBERS_COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: COOKIE_MAX_AGE,
  });
}

export async function clearMembersCookie() {
  const store = await cookies();
  store.set(MEMBERS_COOKIE, "", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 0,
  });
}

export function checkMembersPassword(input: string) {
  const expected = process.env.MEMBERS_PASSWORD;
  if (!expected) return false;
  if (input.length !== expected.length) return false;
  let diff = 0;
  for (let i = 0; i < input.length; i++) {
    diff |= input.charCodeAt(i) ^ expected.charCodeAt(i);
  }
  return diff === 0;
}

export async function isMembersAuthenticated() {
  const store = await cookies();
  const members = store.get(MEMBERS_COOKIE)?.value;
  if (await verifyMembersToken(members)) return true;
  // Admin-Session gilt ebenfalls als Mitgliederzugang
  const admin = store.get("kb_portal_session")?.value;
  return verifyMembersToken(admin);
}
