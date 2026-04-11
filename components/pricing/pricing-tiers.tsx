import { getTranslations } from "next-intl/server"
import { Check, Minus } from "lucide-react"

import { Link } from "@/i18n/navigation"
import type { PricingTierColumn } from "@/lib/pricing-tier"

export async function PricingTiers() {
  const t = await getTranslations("pricing")
  const tiers = t.raw("tiers.columns") as PricingTierColumn[]
  const eyebrow = t("tiers.sectionEyebrow")
  const popularSep = t("tiers.popularSeparator")

  return (
    <section id="tiers" className="px-6 py-16 md:py-24 scroll-mt-28">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs tracking-[0.3em] text-muted-foreground/60 uppercase mb-10">
          {eyebrow}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-border/60">
          {tiers.map((tier, index) => (
            <div
              key={tier.name}
              className={`flex flex-col ${
                index !== tiers.length - 1
                  ? "border-b lg:border-b-0 lg:border-r border-border/60"
                  : ""
              } ${tier.highlighted ? "bg-accent/[0.03]" : ""}`}
            >
              <div
                className={`px-5 py-6 border-b ${tier.highlighted ? "border-accent/30" : "border-border/40"}`}
              >
                <p
                  className={`text-[10px] tracking-[0.25em] uppercase mb-2 ${
                    tier.highlighted ? "text-accent" : "text-muted-foreground/50"
                  }`}
                >
                  {tier.label}
                </p>

                <h3
                  className={`font-serif text-xl ${tier.highlighted ? "text-accent" : "text-foreground"}`}
                >
                  {tier.name}
                </h3>

                <div className="mt-2 flex items-baseline gap-1">
                  <span
                    className={`text-2xl font-light tracking-tight ${
                      tier.highlighted ? "text-accent" : "text-foreground"
                    }`}
                  >
                    {tier.price}
                  </span>
                  <span className="text-foreground/40 text-sm">{tier.period}</span>
                </div>

                {tier.annualPrice && (
                  <p className="mt-1 text-xs text-accent/70">
                    {tier.annualPrice} · {tier.annualNote}
                  </p>
                )}

                {tier.subtext && (
                  <p className="mt-1 text-xs text-foreground/40 italic">{tier.subtext}</p>
                )}

                <p className="mt-3 text-sm text-foreground/60 leading-relaxed italic">
                  {tier.description}
                </p>
              </div>

              <div className="flex-1 px-5 py-6 border-b border-border/40">
                {tier.sectionHeader && (
                  <p className="text-sm font-medium text-foreground/80 mb-4 leading-snug">
                    {tier.sectionHeader}
                  </p>
                )}

                <ul className="space-y-2.5">
                  {tier.features.map((feature) => (
                    <li
                      key={feature.text}
                      className="flex items-start gap-2 text-[13px] leading-relaxed"
                    >
                      {feature.included ? (
                        <Check
                          className="w-3.5 h-3.5 mt-0.5 text-accent shrink-0"
                          strokeWidth={2.5}
                        />
                      ) : (
                        <Minus
                          className="w-3.5 h-3.5 mt-0.5 text-foreground/25 shrink-0"
                          strokeWidth={2}
                        />
                      )}
                      <span
                        className={
                          feature.included ? "text-foreground/70" : "text-foreground/35"
                        }
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="px-5 py-5">
                {tier.badge && (
                  <p className="text-xs text-accent mb-2 flex items-center gap-1">
                    <span>★</span> {tier.badge} {popularSep}
                  </p>
                )}
                <Link
                  href={tier.href}
                  className={`block w-full text-center px-4 py-2.5 text-sm tracking-wide transition-colors ${
                    tier.highlighted
                      ? "border border-accent/50 text-accent hover:bg-accent/5"
                      : "text-foreground/60 hover:text-foreground/80"
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
