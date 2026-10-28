import { NextResponse, type NextRequest } from "next/server";
import { jwtVerify } from "jose";

const SESSION_COOKIE = "kb_portal_session";
const MEMBERS_COOKIE = "kb_members_session";

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
  const portalToken = req.cookies.get(SESSION_COOKIE)?.value;
  const membersToken = req.cookies.get(MEMBERS_COOKIE)?.value;
  const portalAuthed = await hasValidSession(portalToken);
  const membersAuthed = portalAuthed || (await hasValidSession(membersToken));

  if (pathname === "/portal/login") {
    if (portalAuthed) {
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
    if (!portalAuthed) {
      if (pathname.startsWith("/api/")) {
        return NextResponse.json({ error: "Nicht angemeldet" }, { status: 401 });
      }
      const url = req.nextUrl.clone();
      url.pathname = "/portal/login";
      url.searchParams.set("redirect", pathname);
      return NextResponse.redirect(url);
    }
  }

  if (pathname === "/mitglieder/login") {
    if (membersAuthed) {
      const url = req.nextUrl.clone();
      url.pathname = "/mitglieder";
      return NextResponse.redirect(url);
    }
    return NextResponse.next();
  }

  if (pathname.startsWith("/api/mitglieder/login") || pathname.startsWith("/api/mitglieder/logout")) {
    return NextResponse.next();
  }

  if (pathname.startsWith("/mitglieder") || pathname.startsWith("/api/mitglieder")) {
    if (!membersAuthed) {
      if (pathname.startsWith("/api/")) {
        return NextResponse.json({ error: "Nicht angemeldet" }, { status: 401 });
      }
      const url = req.nextUrl.clone();
      url.pathname = "/mitglieder/login";
      url.searchParams.set("redirect", pathname);
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/portal/:path*", "/api/portal/:path*", "/mitglieder/:path*", "/api/mitglieder/:path*"],
};
