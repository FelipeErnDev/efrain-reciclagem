import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const { pathname } = request.nextUrl;

  // HTML cannot be cached for a year on the Hostinger CDN — stale pages
  // keep pointing at deleted CSS/JS chunks and the site opens "sem CSS".
  if (!pathname.startsWith("/_next/static")) {
    response.headers.set(
      "Cache-Control",
      "public, max-age=0, s-maxage=60, must-revalidate",
    );
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|.*\\.(?:ico|png|jpg|jpeg|svg|webp|woff2)$).*)"],
};
