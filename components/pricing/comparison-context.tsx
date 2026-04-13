import { getTranslations } from "next-intl/server"

export async function ComparisonContext() {
  const t = await getTranslations("pricing")

  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 h-[2px] w-20 bg-foreground/70" />

        <h2 className="mb-8 font-serif text-3xl text-foreground md:text-4xl">
          {t("comparison.title")}
        </h2>

        <div className="space-y-6 max-w-xl">
          <p className="text-lg leading-[1.8] text-foreground/80">{t("comparison.p1")}</p>
          <p className="text-lg leading-[1.8] text-foreground/80">{t("comparison.p2")}</p>
          <p className="mt-8 text-lg leading-[1.8] text-foreground">{t("comparison.p3")}</p>
        </div>
      </div>
    </section>
  )
}
