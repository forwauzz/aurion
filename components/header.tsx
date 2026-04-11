import { getTranslations } from "next-intl/server"

import { LanguageSwitcher } from "@/components/language-switcher"
import { Button } from "@/components/ui/button"
import { Link } from "@/i18n/navigation"
import { SITE } from "@/lib/site"

export async function Header() {
  const t = await getTranslations("common")

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/93 backdrop-blur-md">
      {/* Legora-style: ultra-thin dark accent line at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[1.5px]"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #0B1F3A 15%, #0B1F3A 85%, transparent 100%)",
        }}
      />

      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-5 py-4 md:px-8 md:py-5">

        {/* Wordmark */}
        <Link
          href="/"
          className="shrink-0 cursor-pointer rounded-sm py-1 text-[11px] font-medium tracking-[0.4em] text-foreground uppercase transition-opacity hover:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          aria-label={`${t("brand")} — ${t("nav.home")}`}
        >
          {t("brand")}
        </Link>

        {/* Nav */}
        <nav className="flex items-center gap-1 sm:gap-2 md:gap-5">

          {/* Product — with "+" hint like Legora */}
          <Link
            href="/product"
            className="hidden items-center gap-0.5 text-[13px] tracking-wide text-foreground/50 transition-colors hover:text-foreground md:flex"
          >
            {t("nav.product")}
            <span className="ml-0.5 text-[10px] text-foreground/30">+</span>
          </Link>

          {/* Solutions — with "+" hint */}
          <Link
            href="/solutions"
            className="hidden items-center gap-0.5 text-[13px] tracking-wide text-foreground/50 transition-colors hover:text-foreground md:flex"
          >
            {t("nav.solutions")}
            <span className="ml-0.5 text-[10px] text-foreground/30">+</span>
          </Link>

          {/* Pricing */}
          <Link
            href="/pricing"
            className="hidden text-[13px] tracking-wide text-foreground/50 transition-colors hover:text-foreground sm:block"
          >
            {t("nav.pricing")}
          </Link>

          {/* Book demo — ghost */}
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="hidden h-9 text-[13px] text-foreground/50 hover:text-foreground hover:bg-transparent lg:flex"
          >
            <a href={SITE.bookDemoMailto}>{t("nav.bookDemo")}</a>
          </Button>

          <LanguageSwitcher />

          {/* Primary CTA */}
          <Button
            asChild
            size="sm"
            className="h-9 rounded-none bg-[#0B1F3A] px-5 text-[12px] tracking-wide text-[#F5F4F0] hover:bg-[#0B1F3A]/85 transition-all"
          >
            <Link href="/pricing">{t("nav.startFree")}</Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}
