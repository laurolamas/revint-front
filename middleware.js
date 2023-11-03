import { NextRequest, NextResponse } from 'next/server';
import { parse } from 'cookie';

function isAuthenticated(req) {
    const cookies = parse(req.headers.cookie || '');
    return Boolean(cookies.token); // Change 'token' to the name of your cookie
}

export async function middleware(request) {
    const path = request.nextUrl.pathname;

    if (path === '/login') {
        return NextResponse.next();
    }

    if (!isAuthenticated(request)) {
        // Redirect to the login page
        return NextResponse.redirect(new URL('/login', request.url))
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
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
}
