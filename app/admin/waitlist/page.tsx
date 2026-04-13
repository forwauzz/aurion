import { listWaitlistSignups } from "@/lib/waitlist-store"

export const dynamic = "force-dynamic"

export default async function AdminWaitlistPage() {
  let rows: Awaited<ReturnType<typeof listWaitlistSignups>> = []
  let loadError: string | null = null

  try {
    rows = await listWaitlistSignups()
  } catch {
    loadError = "Could not load signups. Check Supabase env vars or dev memory store."
  }

  return (
    <div className="min-h-screen bg-background px-4 py-10 md:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-xl font-medium tracking-tight">Waitlist signups</h1>
            <p className="text-sm text-muted-foreground">
              {rows.length} total
            </p>
          </div>
          <a
            href="/admin/login"
            className="text-sm text-muted-foreground underline-offset-4 hover:underline"
          >
            Re-enter password
          </a>
        </div>

        {loadError ? (
          <p className="rounded-md border border-destructive/40 bg-destructive/5 p-4 text-sm text-destructive">
            {loadError}
          </p>
        ) : rows.length === 0 ? (
          <p className="text-sm text-muted-foreground">No signups yet.</p>
        ) : (
          <div className="overflow-x-auto border border-border/60">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="border-b border-border bg-muted/30 text-[11px] uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th className="px-4 py-3 font-medium">Name</th>
                  <th className="px-4 py-3 font-medium">Email</th>
                  <th className="px-4 py-3 font-medium">Specialty</th>
                  <th className="px-4 py-3 font-medium">Signed up</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr
                    key={r.id}
                    className="border-b border-border/40 last:border-0"
                  >
                    <td className="px-4 py-3 text-foreground">{r.name}</td>
                    <td className="px-4 py-3 text-muted-foreground">{r.email}</td>
                    <td className="px-4 py-3 text-muted-foreground">
                      {r.specialty}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground/80 tabular-nums">
                      {new Date(r.created_at).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
