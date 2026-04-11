import { ComparisonContext } from "@/components/pricing/comparison-context"
import { PilotNote } from "@/components/pricing/pilot-note"
import { PricingCta } from "@/components/pricing/pricing-cta"
import { PricingHero } from "@/components/pricing/pricing-hero"
import { PricingTiers } from "@/components/pricing/pricing-tiers"
import { Footer } from "@/components/footer"

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-background">
      <PricingHero />
      <PricingTiers />
      <ComparisonContext />
      <PilotNote />
      <PricingCta />
      <Footer />
    </main>
  )
}
