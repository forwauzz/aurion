import { getTranslations } from "next-intl/server"

import { Link } from "@/i18n/navigation"

export async function PricingCta() {
  const t = await getTranslations("pricing")

  return (
    <section className="px-6 py-32 md:py-44">
      <div className="mx-auto max-w-3xl">
        <div className="h-px w-16 bg-border/60 mb-16" />

        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-[1.2] text-balance">
          {t("bottomCta.title")}
        </h2>

        <p className="mt-8 text-foreground/60 text-lg md:text-xl leading-[1.8] max-w-xl">
          {t("bottomCta.body")}
        </p>

        <Link
          href="/apply"
          className="mt-12 inline-block px-8 py-4 border border-foreground/20 text-foreground text-sm tracking-wide hover:border-foreground/40 transition-colors"
        >
          {t("bottomCta.apply")}
        </Link>
      </div>
    </section>
  )
}
