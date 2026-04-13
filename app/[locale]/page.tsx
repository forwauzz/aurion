import { AudienceSection } from "@/components/audience-section"
import { AnimateIn } from "@/components/animate-in"
import { ComparisonSection } from "@/components/comparison-section"
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
import { SectionBridge } from "@/components/section-bridge"
import { SpecialtiesStripSection } from "@/components/specialties-strip-section"
import { StatsBandSection } from "@/components/stats-band-section"
import { TensionSection } from "@/components/tension-section"
import { TrustDutySection } from "@/components/trust-duty-section"
import { VisionSection } from "@/components/vision-section"
import { VisualCaptureSection } from "@/components/visual-capture-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">

      {/* ── 1. Hero — warm off-white, split layout ── */}
      <HeroSection />

      {/* ── 2. Capture / Devices — right after hero, same bg family ── */}
      <AnimateIn direction="up" threshold={0.06} duration={900}>
        <DevicesSection />
      </AnimateIn>

      {/* ── BRIDGE: warm light → dark navy ── */}
      <SectionBridge from="light" to="dark" size="lg" />

      {/* ── 3. Visual Capture — signature dark section, the differentiator ── */}
      <VisualCaptureSection />

      {/* ── BRIDGE: dark navy → warm light ── */}
      <SectionBridge from="dark" to="light" size="lg" />

      {/* ── 4. Product Modes — Clinic Mode vs Ops Mode ── */}
      <ProductPillarsSection />

      {/* ── BRIDGE: light → muted ── */}
      <SectionBridge from="light" to="muted" size="sm" />

      {/* ── 5. Specialties strip ── */}
      <AnimateIn direction="fade" threshold={0.08}>
        <SpecialtiesStripSection />
      </AnimateIn>

      {/* ── BRIDGE: muted → card ── */}
      <SectionBridge from="muted" to="card" size="sm" />

      {/* ── 6. Reality — the documentation gap ── */}
      <RealitySection />

      {/* ── 7. Tension — what isn't spoken ── */}
      <TensionSection />

      {/* ── 8. Product Flow — how it works ── */}
      <ProductFlowSection />

      {/* ── BRIDGE: card → dark ── */}
      <SectionBridge from="card" to="dark" size="lg" />

      {/* ── 9. Stats + Note Preview — dark Apple section ── */}
      <StatsBandSection />

      {/* ── BRIDGE: dark → light ── */}
      <SectionBridge from="dark" to="light" size="lg" />

      {/* ── 10. Core Difference — note image + copy ── */}
      <AnimateIn direction="up" threshold={0.08} duration={850}>
        <CoreDifferenceSection />
      </AnimateIn>

      {/* ── 11. Comparison — Aurion vs audio-only scribes ── */}
      <AnimateIn direction="up" threshold={0.06} duration={850}>
        <ComparisonSection />
      </AnimateIn>

      {/* ── 12. Vision / Founder — Legora-style ── */}
      <AnimateIn direction="up" threshold={0.06} duration={850}>
        <VisionSection />
      </AnimateIn>

      {/* ── BRIDGE: light → dark ── */}
      <SectionBridge from="light" to="dark" size="md" />

      {/* ── 12. Presence — dark serif statement with photo bg ── */}
      <PresenceSection />

      {/* ── 13. Trust & Duty — dark, continuous with Presence ── */}
      <TrustDutySection />

      {/* ── BRIDGE: dark → muted ── */}
      <SectionBridge from="dark" to="muted" size="sm" />

      {/* ── 14. Enterprise ── */}
      <AnimateIn direction="up" threshold={0.08}>
        <EnterpriseSection />
      </AnimateIn>

      {/* ── 15. Audience ── */}
      <AnimateIn direction="up" threshold={0.08}>
        <AudienceSection />
      </AnimateIn>

      {/* ── BRIDGE: background → dark ── */}
      <SectionBridge from="light" to="dark" size="md" />

      {/* ── 16. Final CTA — cinematic dark with image ── */}
      <FinalCtaSection />

      {/* ── BRIDGE: dark → light (into footer) ── */}
      <SectionBridge from="dark" to="light" size="sm" />

      {/* ── 17. Footer ── */}
      <Footer />

    </main>
  )
}
