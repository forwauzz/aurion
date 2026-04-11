import { getTranslations } from "next-intl/server"

export async function ComparisonContext() {
  const t = await getTranslations("pricing")

  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <div className="h-px w-16 bg-border/60 mb-16" />

        <h2 className="font-serif text-2xl md:text-3xl text-foreground/80 mb-10">
          {t("comparison.title")}
        </h2>

        <div className="space-y-6 max-w-xl">
          <p className="text-foreground/60 text-lg leading-[1.8]">{t("comparison.p1")}</p>
          <p className="text-foreground/60 text-lg leading-[1.8]">{t("comparison.p2")}</p>
          <p className="text-foreground/70 text-lg leading-[1.8] mt-10">{t("comparison.p3")}</p>
        </div>
      </div>
    </section>
  )
}
