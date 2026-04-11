/** Shape of `pricing.tiers.columns` in `messages/<locale>/pricing.json`. */
export type PricingFeature = {
  text: string
  included: boolean
}

export type PricingTierColumn = {
  label: string
  name: string
  price: string
  period: string
  subtext?: string
  annualPrice?: string
  annualNote?: string
  description: string
  sectionHeader?: string
  features: PricingFeature[]
  cta: string
  href: string
  highlighted?: boolean
  badge?: string
}
