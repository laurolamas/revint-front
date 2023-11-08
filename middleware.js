import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

function isAuthenticated(req) {
  const cookieStore = cookies();
  return cookieStore.has("token");
}

export async function middleware(request) {
  const path = request.nextUrl.pathname;

  if (path === "/login" || path === "/register") {
    if (isAuthenticated(request)) {
      return NextResponse.redirect(new URL("/", request.url));
    }
    return NextResponse.next();
  }

  if (!isAuthenticated(request)) {
    // Redirect to the login page
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
