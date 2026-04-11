import { getTranslations } from "next-intl/server"

import { Link } from "@/i18n/navigation"
import { SITE } from "@/lib/site"

export async function Footer() {
  const t = await getTranslations("common")
  const year = new Date().getFullYear()

  return (
    <footer className="bg-background px-6 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-[1100px]">
        <div className="mx-auto mb-12 h-px w-full bg-border/30" />

        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-[1fr_auto_auto_auto] md:gap-16 md:items-start">

          {/* Brand */}
          <div>
            <Link
              href="/"
              className="inline-block cursor-pointer rounded-sm py-0.5 text-[11px] tracking-[0.35em] text-foreground/65 uppercase transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-label={`${t("brand")} — ${t("nav.home")}`}
            >
              {t("brand")}
            </Link>
            <p className="mt-3 max-w-[220px] text-[13px] leading-relaxed text-muted-foreground">
              {t("footer.tagline")}
            </p>
          </div>

          {/* Product column */}
          <div>
            <p className="mb-3 text-[10px] tracking-[0.2em] text-foreground/35 uppercase">Product</p>
            <div className="flex flex-col gap-2.5 text-[13px] text-muted-foreground">
              <Link href="/product" className="transition-colors hover:text-foreground">
                {t("footer.product")}
              </Link>
              <Link href="/pricing" className="transition-colors hover:text-foreground">
                {t("footer.pricing")}
              </Link>
            </div>
          </div>

          {/* Solutions column */}
          <div>
            <p className="mb-3 text-[10px] tracking-[0.2em] text-foreground/35 uppercase">Solutions</p>
            <div className="flex flex-col gap-2.5 text-[13px] text-muted-foreground">
              <Link href="/solutions" className="transition-colors hover:text-foreground">
                {t("footer.solutions")}
              </Link>
              <Link href="/solutions#orthopedics" className="transition-colors hover:text-foreground">
                Orthopedics
              </Link>
              <Link href="/solutions#plastic-surgery" className="transition-colors hover:text-foreground">
                Plastic surgery
              </Link>
              <Link href="/solutions#sports-medicine" className="transition-colors hover:text-foreground">
                Sports medicine
              </Link>
            </div>
          </div>

          {/* Contact column */}
          <div>
            <p className="mb-3 text-[10px] tracking-[0.2em] text-foreground/35 uppercase">Contact</p>
            <div className="flex flex-col gap-2.5 text-[13px] text-muted-foreground">
              <a href={SITE.bookDemoMailto} className="transition-colors hover:text-foreground">
                {t("footer.bookDemo")}
              </a>
              <a href={SITE.contactSalesMailto} className="transition-colors hover:text-foreground">
                {t("footer.contactSales")}
              </a>
              <a href={`mailto:${SITE.email}`} className="transition-colors hover:text-foreground">
                {SITE.email}
              </a>
            </div>
          </div>

        </div>

        <p className="mt-14 text-[11px] text-muted-foreground/40">
          {t("footer.copyright", { year })}
        </p>
      </div>
    </footer>
  )
}
