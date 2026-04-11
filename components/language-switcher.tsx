"use client"

import { useLocale } from "next-intl"

import { Link, usePathname } from "@/i18n/navigation"
import { routing } from "@/i18n/routing"
import { cn } from "@/lib/utils"

const labels: Record<string, string> = { en: "EN", fr: "FR" }

/**
 * Switches locale while preserving the current path (Heidi-style toggles).
 * Add new locales in `i18n/routing.ts` and `messages/<locale>.json`.
 */
export function LanguageSwitcher() {
  const pathname = usePathname()
  const active = useLocale()

  return (
    <div
      className="flex items-center gap-1 rounded-md border border-border/50 bg-card/80 px-1 py-0.5"
      role="navigation"
      aria-label="Language"
    >
      {routing.locales.map((locale) => (
        <Link
          key={locale}
          href={pathname}
          locale={locale}
          className={cn(
            "rounded px-2 py-1 text-[12px] font-medium tracking-wide transition-colors",
            active === locale
              ? "bg-[#0B1F3A] text-[#F7F9FB]"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          {labels[locale] ?? locale.toUpperCase()}
        </Link>
      ))}
    </div>
  )
}
