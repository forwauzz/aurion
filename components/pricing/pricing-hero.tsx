import { getTranslations } from "next-intl/server"

import { Button } from "@/components/ui/button"
import { Link } from "@/i18n/navigation"

export async function PricingHero() {
  const t = await getTranslations("pricing")

  return (
    <section className="px-6 pt-34 pb-20 md:pt-44 md:pb-28">
      <div className="mx-auto max-w-4xl rounded-2xl border border-border/60 bg-card/40 px-6 py-10 text-center shadow-sm md:px-10 md:py-14">
        <h1 className="font-serif text-5xl leading-[1.05] tracking-tight text-foreground md:text-6xl lg:text-7xl text-balance">
          {t("hero.title")}
        </h1>
        <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-foreground/80 md:text-2xl text-pretty">
          {t("hero.subtitle")}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <Button asChild size="lg" className="min-w-[190px] rounded-md px-8 text-sm font-semibold">
            <a href="#tiers">{t("hero.seeTiers")}</a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="min-w-[190px] rounded-md border-foreground/30 px-8 text-sm font-semibold hover:bg-foreground/5"
          >
            <Link href="/waitlist">{t("hero.talkToUs")}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
