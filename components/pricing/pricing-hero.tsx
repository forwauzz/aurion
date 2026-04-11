import { getTranslations } from "next-intl/server"

import { Button } from "@/components/ui/button"
import { SITE } from "@/lib/site"

export async function PricingHero() {
  const t = await getTranslations("pricing")

  return (
    <section className="px-6 pt-36 pb-24 md:pt-48 md:pb-32">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="font-serif text-4xl leading-[1.15] tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
          {t("hero.title")}
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-foreground/60 md:text-xl text-pretty">
          {t("hero.subtitle")}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <Button asChild size="lg" className="min-w-[180px] rounded-md px-8">
            <a href="#tiers">{t("hero.seeTiers")}</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="min-w-[180px] rounded-md bg-card px-8">
            <a href={SITE.bookDemoMailto}>{t("hero.bookDemo")}</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
