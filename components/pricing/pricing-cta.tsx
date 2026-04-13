import { getTranslations } from "next-intl/server"

import { Link } from "@/i18n/navigation"

export async function PricingCta() {
  const t = await getTranslations("pricing")

  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 h-[2px] w-20 bg-foreground/70" />

        <h2 className="font-serif text-4xl leading-[1.1] text-foreground text-balance md:text-5xl lg:text-6xl">
          {t("bottomCta.title")}
        </h2>

        <p className="mt-7 max-w-2xl text-lg leading-[1.75] text-foreground/80 md:text-xl">
          {t("bottomCta.body")}
        </p>

        <Link
          href="/waitlist?intent=apply-pilot"
          className="mt-10 inline-block rounded-md border border-foreground/85 bg-foreground px-8 py-4 text-sm font-semibold tracking-wide text-background transition-colors hover:bg-foreground/90"
        >
          {t("bottomCta.cta")}
        </Link>
      </div>
    </section>
  )
}
