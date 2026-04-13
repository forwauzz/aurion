/** Edge-safe admin session cookie (HMAC of fixed payload). */

export const ADMIN_COOKIE_NAME = "waitlist_admin"

const PAYLOAD = "aurion-waitlist-admin-v1"

export async function deriveAdminCookieValue(secret: string): Promise<string> {
  const enc = new TextEncoder()
  const key = await crypto.subtle.importKey(
    "raw",
    enc.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  )
  const sig = await crypto.subtle.sign("HMAC", key, enc.encode(PAYLOAD))
  return Array.from(new Uint8Array(sig))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("")
}

export async function isValidAdminCookie(
  cookieVal: string | undefined,
  secret: string,
): Promise<boolean> {
  if (!cookieVal) return false
  const expected = await deriveAdminCookieValue(secret)
  return cookieVal.length === expected.length && cookieVal === expected
}
