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
  const siteUsername = process.env.SITE_LOCK_USERNAME
  const sitePassword = process.env.SITE_LOCK_PASSWORD

  if (siteUsername && sitePassword) {
    const authHeader = request.headers.get("authorization")
    if (!authHeader?.startsWith("Basic ")) {
      return new NextResponse("Authentication required.", {
        status: 401,
        headers: { "WWW-Authenticate": 'Basic realm="Site Access"' },
      })
    }

    const encoded = authHeader.slice("Basic ".length)
    let decoded = ""
    try {
      decoded = atob(encoded)
    } catch {
      return new NextResponse("Invalid credentials.", {
        status: 401,
        headers: { "WWW-Authenticate": 'Basic realm="Site Access"' },
      })
    }
    const separatorIndex = decoded.indexOf(":")
    const username = separatorIndex >= 0 ? decoded.slice(0, separatorIndex) : ""
    const password = separatorIndex >= 0 ? decoded.slice(separatorIndex + 1) : ""

    if (username !== siteUsername || password !== sitePassword) {
      return new NextResponse("Invalid credentials.", {
        status: 401,
        headers: { "WWW-Authenticate": 'Basic realm="Site Access"' },
      })
    }
  }

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
    "/((?!api|_next|_vercel|admin|manifest.webmanifest|apple-touch-icon|icon-16x16|icon-32x32|icon-192x192|icon-512x512|favicon.ico|.*\\..*).*)",
  ],
}
