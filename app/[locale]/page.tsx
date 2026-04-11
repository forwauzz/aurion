import { AudienceSection } from "@/components/audience-section"
import { CoreDifferenceSection } from "@/components/core-difference-section"
import { DevicesSection } from "@/components/devices-section"
import { EnterpriseSection } from "@/components/enterprise-section"
import { FinalCtaSection } from "@/components/final-cta-section"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { PresenceSection } from "@/components/presence-section"
import { ProductFlowSection } from "@/components/product-flow-section"
import { ProductPillarsSection } from "@/components/product-pillars-section"
import { RealitySection } from "@/components/reality-section"
import { SpecialtiesStripSection } from "@/components/specialties-strip-section"
import { StatsBandSection } from "@/components/stats-band-section"
import { TensionSection } from "@/components/tension-section"
import { TrustDutySection } from "@/components/trust-duty-section"
import { VisionSection } from "@/components/vision-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      {/* Capture / Devices — moved up directly after hero */}
      <DevicesSection />
      <ProductPillarsSection />
      <SpecialtiesStripSection />
      <RealitySection />
      <TensionSection />
      <ProductFlowSection />
      <StatsBandSection />
      <CoreDifferenceSection />
      <VisionSection />
      <PresenceSection />
      <TrustDutySection />
      <EnterpriseSection />
      <AudienceSection />
      <FinalCtaSection />
      <Footer />
    </main>
  )
}
