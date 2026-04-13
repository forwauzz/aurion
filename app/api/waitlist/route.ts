import { NextResponse } from "next/server"
import { z } from "zod"

import { addWaitlistSignup } from "@/lib/waitlist-store"

const bodySchema = z.object({
  name: z.string().trim().min(1).max(200),
  email: z.string().trim().email().max(320),
  specialty: z.string().trim().min(1).max(200),
})

export async function POST(request: Request) {
  let json: unknown
  try {
    json = await request.json()
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 })
  }

  const parsed = bodySchema.safeParse(json)
  if (!parsed.success) {
    return NextResponse.json({ error: "validation_error" }, { status: 400 })
  }

  try {
    await addWaitlistSignup(parsed.data)
  } catch (e) {
    if (e instanceof Error && e.message === "MISSING_DB") {
      return NextResponse.json({ error: "not_configured" }, { status: 503 })
    }
    return NextResponse.json({ error: "server_error" }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
