import createMiddleware from "next-intl/middleware"
import { NextRequest, NextResponse } from "next/server"

import { routing } from "./i18n/routing"
import {
  ADMIN_COOKIE_NAME,
  isValidAdminCookie,
} from "./lib/waitlist-admin-token"

const intlMiddleware = createMiddleware(routing)

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname.startsWith("/admin")) {
    if (pathname.startsWith("/admin/login")) {
      return NextResponse.next()
    }

    const secret = process.env.WAITLIST_ADMIN_SECRET
    if (!secret) {
      return new NextResponse(
        "Waitlist admin is not configured (set WAITLIST_ADMIN_SECRET).",
        { status: 503 },
      )
    }

    const cookieVal = request.cookies.get(ADMIN_COOKIE_NAME)?.value
    const ok = await isValidAdminCookie(cookieVal, secret)
    if (!ok) {
      const login = new URL("/admin/login", request.url)
      login.searchParams.set("next", pathname)
      return NextResponse.redirect(login)
    }

    return NextResponse.next()
  }

  return intlMiddleware(request)
}

export const config = {
  matcher: [
    "/",
    "/(en|fr)/:path*",
    "/admin/:path*",
    "/((?!api|_next|_vercel|admin|.*\\..*).*)",
  ],
}
