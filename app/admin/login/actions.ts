"use server"

import { createHash, timingSafeEqual } from "crypto"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

import {
  ADMIN_COOKIE_NAME,
  deriveAdminCookieValue,
} from "@/lib/waitlist-admin-token"

function safeNextPath(next: string | undefined): string {
  if (next && next.startsWith("/admin") && !next.startsWith("//")) {
    return next
  }
  return "/admin/waitlist"
}

function passwordMatches(input: string, secret: string): boolean {
  const a = createHash("sha256").update(input, "utf8").digest()
  const b = createHash("sha256").update(secret, "utf8").digest()
  return timingSafeEqual(a, b)
}

export async function loginAsAdmin(formData: FormData) {
  const password = String(formData.get("password") ?? "")
  const nextRaw = String(formData.get("next") ?? "")
  const next = safeNextPath(nextRaw)

  const secret = process.env.WAITLIST_ADMIN_SECRET
  if (!secret) {
    redirect("/admin/login?error=config")
  }

  if (!passwordMatches(password, secret)) {
    const q = new URLSearchParams({ error: "invalid", next })
    redirect(`/admin/login?${q.toString()}`)
  }

  const token = await deriveAdminCookieValue(secret)
  const jar = await cookies()
  jar.set(ADMIN_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  })

  redirect(next)
}
