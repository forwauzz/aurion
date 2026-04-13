/**
 * Waitlist persistence. Production: Supabase (PostgREST). Local: optional in-memory store.
 * Do not log name/email/specialty (PII).
 */

export type WaitlistSignup = {
  id: string
  name: string
  email: string
  specialty: string
  created_at: string
}

const memoryStore: WaitlistSignup[] = []

function useMemoryStore(): boolean {
  return process.env.WAITLIST_DEV_MEMORY_STORE === "1"
}

export async function addWaitlistSignup(input: {
  name: string
  email: string
  specialty: string
}): Promise<void> {
  if (useMemoryStore()) {
    memoryStore.unshift({
      id: crypto.randomUUID(),
      name: input.name,
      email: input.email.trim().toLowerCase(),
      specialty: input.specialty,
      created_at: new Date().toISOString(),
    })
    return
  }

  const url = process.env.SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!url || !key) {
    throw new Error("MISSING_DB")
  }

  const res = await fetch(`${url}/rest/v1/waitlist_signups`, {
    method: "POST",
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify({
      name: input.name,
      email: input.email.trim().toLowerCase(),
      specialty: input.specialty,
    }),
  })

  if (!res.ok) {
    throw new Error("STORE_FAILED")
  }
}

export async function listWaitlistSignups(): Promise<WaitlistSignup[]> {
  if (useMemoryStore()) {
    return [...memoryStore]
  }

  const url = process.env.SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!url || !key) {
    throw new Error("MISSING_DB")
  }

  const res = await fetch(
    `${url}/rest/v1/waitlist_signups?select=id,name,email,specialty,created_at&order=created_at.desc`,
    {
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
      },
      cache: "no-store",
    },
  )

  if (!res.ok) {
    throw new Error("FETCH_FAILED")
  }

  const data = (await res.json()) as WaitlistSignup[]
  return Array.isArray(data) ? data : []
}
