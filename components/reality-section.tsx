import { getTranslations } from "next-intl/server"

export async function RealitySection() {
  const t = await getTranslations("home")
  const documented = t.raw("reality.documented") as string[]
  const happens = t.raw("reality.happens") as string[]

  return (
    <section className="bg-card px-8 py-20 md:py-28">
      <div className="mx-auto max-w-[1050px]">

        {/* Two-column contrast layout */}
        <div className="grid gap-0 md:grid-cols-2">

          {/* LEFT — what is documented today (faded, grey) */}
          <div className="border-r border-border/40 pr-10 py-2">
            <p className="mb-8 text-[9px] tracking-[0.3em] text-muted-foreground/40 uppercase">
              {t("reality.documentedEyebrow")}
            </p>
            <ul className="space-y-5">
              {documented.map((line) => (
                <li
                  key={line}
                  className="flex items-start gap-4 text-[15px] leading-[1.75] text-foreground/35"
                >
                  {/* Strike-through dash */}
                  <span className="mt-[0.55em] block h-px w-4 shrink-0 bg-foreground/20" aria-hidden />
                  {line}
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT — what actually happens (full contrast) */}
          <div className="pl-10 py-2">
            <p className="mb-8 text-[9px] tracking-[0.3em] text-accent/80 uppercase">
              {t("reality.happensEyebrow")}
            </p>
            <ul className="space-y-5">
              {happens.map((line) => (
                <li
                  key={line}
                  className="flex items-start gap-4 text-[15px] leading-[1.75] text-foreground"
                >
                  {/* Gold dot marker */}
                  <span className="mt-[0.65em] block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom line — serif italic statement */}
        <div className="mt-16 border-t border-border/40 pt-12 text-center">
          <p className="font-serif text-xl italic leading-[1.6] text-muted-foreground/70 md:text-[1.5rem]">
            {t("reality.bottomLine")}
          </p>
        </div>

      </div>
    </section>
  )
}
