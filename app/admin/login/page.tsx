import { loginAsAdmin } from "./actions"

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string; error?: string }>
}) {
  const sp = await searchParams
  const next =
    sp.next && sp.next.startsWith("/admin") && !sp.next.startsWith("//")
      ? sp.next
      : "/admin/waitlist"

  const errMsg =
    sp.error === "invalid"
      ? "Incorrect password."
      : sp.error === "config"
        ? "Admin is not configured (missing WAITLIST_ADMIN_SECRET)."
        : null

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
      <div className="w-full max-w-sm space-y-6 border border-border/60 bg-card/30 p-8">
        <div>
          <h1 className="text-lg font-medium tracking-tight text-foreground">
            Waitlist admin
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Sign in to view signups. Set{" "}
            <code className="rounded bg-muted px-1 py-0.5 text-xs">
              WAITLIST_ADMIN_SECRET
            </code>{" "}
            in the environment.
          </p>
          {errMsg ? (
            <p className="mt-3 text-sm text-destructive">{errMsg}</p>
          ) : null}
        </div>
        <form action={loginAsAdmin} className="space-y-4">
          <input type="hidden" name="next" value={next} />
          <div className="space-y-2">
            <label
              htmlFor="password"
              className="text-sm font-medium text-foreground"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="h-10 w-full border border-input bg-transparent px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
          </div>
          <button
            type="submit"
            className="h-10 w-full bg-[#0B1F3A] text-sm font-medium text-[#F5F4F0] transition-opacity hover:opacity-90"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  )
}
