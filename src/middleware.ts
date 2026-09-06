import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const CANONICAL_HOST = "www.rahimagency.com";
const TIKTOK_LEGACY_PATH = "/services/tiktok-agency-ad-account";
const TIKTOK_CANONICAL_PATH = "/services/tiktok-agency-account";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0]?.toLowerCase();
  const url = request.nextUrl.clone();
  let shouldRedirect = false;

  // Legacy TikTok slug → canonical (preserve query; combine with host redirect to avoid chains)
  if (url.pathname === TIKTOK_LEGACY_PATH) {
    url.pathname = TIKTOK_CANONICAL_PATH;
    shouldRedirect = true;
  }

  const isLocal =
    !host || host === "localhost" || host.endsWith(".localhost") || host === "127.0.0.1";

  // Apex → www (HTTPS assumed at the edge / Vercel); preserve path + query
  if (!isLocal && host === "rahimagency.com") {
    url.hostname = CANONICAL_HOST;
    url.protocol = "https:";
    url.port = "";
    shouldRedirect = true;
  }

  if (shouldRedirect) {
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|avif|ico)$).*)"],
};
