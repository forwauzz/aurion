import type { Metadata } from "next"
import { getTranslations, setRequestLocale } from "next-intl/server"

import { WaitlistForm } from "@/components/waitlist-form"
import { Link } from "@/i18n/navigation"
import { routing } from "@/i18n/routing"

type Props = { params: Promise<{ locale: string }> }

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "waitlist" })
  return {
    title: t("meta.title"),
    description: t("meta.description"),
  }
}

export default async function WaitlistPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations("waitlist")

  return (
    <main className="min-h-[calc(100vh-4rem)] bg-background px-6 pb-24 pt-28 md:px-8 md:pt-32">
      <div className="mx-auto max-w-lg">
        <p className="mb-3 text-[9px] font-medium tracking-[0.35em] text-muted-foreground/50 uppercase">
          {t("eyebrow")}
        </p>
        <h1 className="font-[family-name:var(--font-playfair)] text-3xl font-normal tracking-tight text-foreground md:text-4xl">
          {t("title")}
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          {t("subtitle")}
        </p>

        <div className="mt-10 border border-border/50 bg-card/20 p-6 md:p-8">
          <WaitlistForm />
        </div>

        <p className="mt-8 text-center">
          <Link
            href="/"
            className="text-sm text-muted-foreground underline-offset-4 hover:underline"
          >
            {t("backHome")}
          </Link>
        </p>
      </div>
    </main>
  )
}
