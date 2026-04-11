import { getTranslations } from "next-intl/server"

import { Button } from "@/components/ui/button"
import { Link } from "@/i18n/navigation"
import { SITE } from "@/lib/site"

export async function EnterpriseSection() {
  const t = await getTranslations("home")

  return (
    <section className="border-y border-border/40 bg-secondary/40 px-6 py-24 md:py-28">
      <div className="mx-auto flex max-w-[1100px] flex-col items-start gap-10 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl">
          <p className="text-[10px] tracking-[0.25em] text-muted-foreground/50 uppercase">
            {t("enterprise.eyebrow")}
          </p>
          <h2 className="mt-4 font-serif text-3xl text-foreground md:text-4xl text-balance">
            {t("enterprise.title")}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            {t("enterprise.body")}
          </p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:flex-row md:w-auto">
          <Button asChild size="lg" variant="outline" className="rounded-md bg-card">
            <Link href="/pricing">{t("enterprise.viewPricing")}</Link>
          </Button>
          <Button
            asChild
            size="lg"
            className="rounded-md bg-[#0B1F3A] text-[#F7F9FB] hover:bg-[#0B1F3A]/90"
          >
            <a href={SITE.contactSalesMailto}>{t("enterprise.contactSales")}</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
