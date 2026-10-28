import { NextResponse, type NextRequest } from "next/server";
import { jwtVerify } from "jose";

const SESSION_COOKIE = "kb_portal_session";

async function hasValidSession(token: string | undefined) {
  if (!token) return false;
  const secret = process.env.SESSION_SECRET;
  if (!secret) return false;
  try {
    await jwtVerify(token, new TextEncoder().encode(secret));
    return true;
  } catch {
    return false;
  }
}

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const token = req.cookies.get(SESSION_COOKIE)?.value;
  const authed = await hasValidSession(token);

  if (pathname === "/portal/login") {
    if (authed) {
      const url = req.nextUrl.clone();
      url.pathname = "/portal";
      return NextResponse.redirect(url);
    }
    return NextResponse.next();
  }

  if (pathname.startsWith("/api/portal/login")) {
    return NextResponse.next();
  }

  if (pathname.startsWith("/portal") || pathname.startsWith("/api/portal")) {
    if (!authed) {
      if (pathname.startsWith("/api/")) {
        return NextResponse.json({ error: "Nicht angemeldet" }, { status: 401 });
      }
      const url = req.nextUrl.clone();
      url.pathname = "/portal/login";
      url.searchParams.set("redirect", pathname);
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/portal/:path*", "/api/portal/:path*"],
};
