import Image from "next/image"
import { getTranslations } from "next-intl/server"

import { AnimateIn } from "@/components/animate-in"
import { Button } from "@/components/ui/button"
import { Link } from "@/i18n/navigation"
import { SITE } from "@/lib/site"

/**
 * ProductPillarsSection — redesigned as Clinic Mode vs Ops Mode.
 *
 * Two product modes presented as distinct clinical contexts, not pricing tiers.
 * Clinic Mode: available now, full clinical encounter capture.
 * Ops Mode: roadmap, operative/procedural documentation.
 */
export async function ProductPillarsSection() {
  const t = await getTranslations("home")

  const clinicBullets = t.raw("modes.clinic.bullets") as string[]
  const opsBullets    = t.raw("modes.ops.bullets")    as string[]

  return (
    <section className="bg-background px-6 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[1100px]">

        {/* ── Header ── */}
        <AnimateIn direction="up">
          <p className="text-[10px] font-medium tracking-[0.35em] text-muted-foreground/45 uppercase">
            {t("modes.eyebrow")}
          </p>
          <h2 className="mt-5 max-w-[580px] font-serif text-3xl tracking-tight text-foreground md:text-4xl text-balance">
            {t("modes.title")}
          </h2>
          <div className="mt-6 h-px w-10 bg-accent" />
          <p className="mt-6 max-w-[520px] text-[15px] leading-relaxed text-muted-foreground">
            {t("modes.subtitle")}
          </p>
        </AnimateIn>

        {/* ── Two-mode cards ── */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">

          {/* ── CLINIC MODE — full featured, available now ── */}
          <AnimateIn direction="left" delay={80} duration={850}>
            <div className="flex h-full flex-col border border-border/50 bg-card">

              {/* Image header */}
              <div className="relative h-56 overflow-hidden sm:h-64">
                <Image
                  src="/clinician-glasses.jpg"
                  alt="Clinician in Clinic Mode — full encounter capture"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(11,31,58,0.75) 0%, transparent 60%)",
                  }}
                />
                {/* Badge */}
                <div className="absolute left-5 top-5 border border-accent/50 bg-[#0B1F3A] px-3 py-1">
                  <span className="text-[9px] tracking-[0.25em] text-accent uppercase">
                    {t("modes.clinic.badge")}
                  </span>
                </div>
                {/* Mode name over image */}
                <div className="absolute bottom-5 left-5">
                  <p className="font-serif text-2xl text-[#F5F4F0]">{t("modes.clinic.title")}</p>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-7">
                <h3 className="font-serif text-[1.2rem] leading-snug text-foreground text-balance">
                  {t("modes.clinic.headline")}
                </h3>
                <p className="mt-4 text-[13px] leading-relaxed text-muted-foreground">
                  {t("modes.clinic.body")}
                </p>

                {/* Feature list */}
                <ul className="mt-7 space-y-3 flex-1">
                  {clinicBullets.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[12px] leading-relaxed text-foreground/75">
                      <span className="mt-[0.6em] block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* CTAs */}
                <div className="mt-8 flex flex-wrap gap-3 border-t border-border/40 pt-7">
                  <Button
                    asChild
                    size="lg"
                    className="rounded-none bg-[#0B1F3A] px-6 text-[12px] tracking-wide text-[#F5F4F0] hover:bg-[#0B1F3A]/85 transition-all"
                  >
                    <Link href="/pricing">{t("modes.clinic.cta")}</Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="rounded-none border-foreground/20 px-6 text-[12px] tracking-wide hover:bg-foreground/5 transition-all"
                  >
                    <a href={SITE.bookDemoMailto}>{t("modes.clinic.ctaSecondary")}</a>
                  </Button>
                </div>
              </div>
            </div>
          </AnimateIn>

          {/* ── OPS MODE — roadmap, surgical/procedural ── */}
          <AnimateIn direction="right" delay={160} duration={850}>
            <div className="flex h-full flex-col border border-border/40 bg-card opacity-90">

              {/* Image header — slightly desaturated via overlay to signal "coming" */}
              <div className="relative h-56 overflow-hidden sm:h-64">
                <Image
                  src="/doctor-patient.jpg"
                  alt="Ops Mode — operative and procedural documentation"
                  fill
                  className="object-cover object-top grayscale-[30%]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(11,31,58,0.75) 0%, transparent 60%)",
                  }}
                />
                {/* Roadmap badge */}
                <div className="absolute left-5 top-5 border border-[#F5F4F0]/25 bg-[#0B1F3A]/80 px-3 py-1">
                  <span className="text-[9px] tracking-[0.25em] text-[#F5F4F0]/60 uppercase">
                    {t("modes.ops.badge")}
                  </span>
                </div>
                {/* Mode name */}
                <div className="absolute bottom-5 left-5">
                  <p className="font-serif text-2xl text-[#F5F4F0]">{t("modes.ops.title")}</p>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-7">
                <h3 className="font-serif text-[1.2rem] leading-snug text-foreground text-balance">
                  {t("modes.ops.headline")}
                </h3>
                <p className="mt-4 text-[13px] leading-relaxed text-muted-foreground">
                  {t("modes.ops.body")}
                </p>

                {/* Feature list */}
                <ul className="mt-7 space-y-3 flex-1">
                  {opsBullets.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[12px] leading-relaxed text-foreground/60">
                      <span className="mt-[0.6em] block h-1.5 w-1.5 shrink-0 rounded-full bg-border" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* CTA — waitlist */}
                <div className="mt-8 border-t border-border/40 pt-7">
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="rounded-none border-foreground/20 px-6 text-[12px] tracking-wide hover:bg-foreground/5 transition-all"
                  >
                    <a href={SITE.bookDemoMailto}>{t("modes.ops.cta")}</a>
                  </Button>
                </div>
              </div>
            </div>
          </AnimateIn>

        </div>
      </div>
    </section>
  )
}
