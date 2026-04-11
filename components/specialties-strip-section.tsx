import { getTranslations } from "next-intl/server"

export async function SpecialtiesStripSection() {
  const t = await getTranslations("home")
  const labels = t.raw("specialtiesStrip.labels") as string[]

  return (
    <section className="border-b border-border/40 bg-muted/30 px-6 py-14">
      <div className="mx-auto max-w-[1100px]">
        <p className="text-center text-[10px] tracking-[0.25em] text-muted-foreground/50 uppercase">
          {t("specialtiesStrip.eyebrow")}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {labels.map((label) => (
            <span
              key={label}
              className="border border-border/60 bg-card px-4 py-2 text-xs tracking-wide text-muted-foreground"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
