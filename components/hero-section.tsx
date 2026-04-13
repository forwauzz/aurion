import Image from "next/image"
import { getTranslations } from "next-intl/server"
import { Eye, Monitor, FileText } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Link } from "@/i18n/navigation"
import { SITE } from "@/lib/site"

export async function HeroSection() {
  const t = await getTranslations("home")

  return (
    <section className="relative overflow-hidden bg-background">
      {/* ── Split layout: stacked on mobile, side-by-side on lg+ ── */}
      <div className="grid min-h-[92vh] grid-rows-[1fr_auto] lg:grid-rows-none lg:grid-cols-[1fr_1fr]">

        {/* LEFT — text content */}
        <div className="flex flex-col justify-center px-6 pb-10 pt-28 sm:px-8 md:px-12 lg:px-14 lg:pb-16 lg:pt-24 xl:px-20">

          <p className="text-[10px] font-medium tracking-[0.35em] text-accent uppercase">
            {t("hero.eyebrow")}
          </p>

          <h1 className="mt-5 max-w-[560px] font-serif text-[2.1rem] leading-[1.1] tracking-tight text-foreground sm:text-[2.4rem] md:text-5xl lg:text-[3rem] xl:text-[3.2rem] text-balance">
            {t("hero.title")}
          </h1>

          <div className="mt-7 h-px w-10 bg-accent" />

          <p className="mt-7 max-w-[480px] text-base leading-[1.75] text-muted-foreground md:text-[17px]">
            {t("hero.subtitle")}
          </p>

          <p className="mt-4 max-w-[440px] text-sm leading-relaxed text-muted-foreground/55">
            {t("hero.support")}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="rounded-none bg-[#0B1F3A] px-7 text-[13px] tracking-wide text-[#F5F4F0] hover:bg-[#0B1F3A]/85 transition-all"
            >
              <Link href="/pricing">{t("hero.startFree")}</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-none border-foreground/25 px-7 text-[13px] tracking-wide hover:bg-foreground/5 transition-all"
            >
              <a href={SITE.bookDemoMailto}>{t("hero.bookDemo")}</a>
            </Button>
          </div>

          <p className="mt-10 text-[10px] tracking-[0.3em] text-muted-foreground/35 uppercase">
            {t("hero.caption")}
          </p>
        </div>

        {/* RIGHT — autoplay video on desktop (lg+) */}
        <div className="relative hidden lg:block">
          {/* Autoplay looping video — muted + playsInline required for mobile/iOS */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover object-center"
            poster="/clinician-glasses.jpg"
          >
            <source src="/exam-video-1.mp4" type="video/mp4" />
            {/* Fallback image if video fails */}
          </video>

          {/* Dark vignette overlays */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "linear-gradient(to right, #F5F4F0 0%, transparent 16%)" }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "linear-gradient(to top, rgba(11,31,58,0.55) 0%, transparent 45%)" }}
          />

          {/* Live capture callout chip */}
          <div className="absolute bottom-10 right-8 w-[240px] border border-[#F5F4F0]/20 bg-[#0B1F3A]/82 px-5 py-4 backdrop-blur-sm">
            <div className="mb-2 flex items-center gap-2">
              <span className="capture-pulse block h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
              <p className="text-[9px] tracking-[0.25em] text-accent uppercase">Clinic Mode · Live</p>
            </div>
            <p className="font-serif text-[13px] leading-[1.5] text-[#F5F4F0]">
              Antalgic gait observed — ROM 110° flexion
            </p>
            <p className="mt-2 text-[10px] text-[#F5F4F0]/45">Physical exam · Auto-tagged · 00:04:32</p>
          </div>
        </div>

        {/* Mobile-only image strip (lg hidden) */}
        <div className="relative h-64 w-full overflow-hidden sm:h-80 lg:hidden">
          <Image
            src="/clinic-mode-capture.jpeg"
            alt="Aurion Clinic Mode — physical exam capture in action"
            fill
            className="object-cover object-top"
            priority
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to bottom, transparent 30%, #F5F4F0 95%)" }}
          />
        </div>
      </div>

      {/* ── Three-card strip ── */}
      <div className="border-t border-border/40 bg-card">
        <div className="mx-auto grid max-w-[1100px] grid-cols-1 divide-y divide-border/40 sm:grid-cols-3 sm:divide-x sm:divide-y-0">

          <div className="px-6 py-7 sm:px-7">
            <div className="mb-4 flex items-center gap-3">
              <Eye className="h-4 w-4 shrink-0 text-accent" />
              <span className="text-[10px] tracking-[0.2em] text-muted-foreground/55 uppercase">
                {t("hero.cards.observeLabel")}
              </span>
            </div>
            <div className="space-y-2 text-[13px] leading-relaxed text-foreground/70">
              <p>{t("hero.cards.observe1")}</p>
              <p>{t("hero.cards.observe2")}</p>
              <p>{t("hero.cards.observe3")}</p>
            </div>
          </div>

          <div className="px-6 py-7 sm:px-7">
            <div className="mb-4 flex items-center gap-3">
              <Monitor className="h-4 w-4 shrink-0 text-accent" />
              <span className="text-[10px] tracking-[0.2em] text-muted-foreground/55 uppercase">
                {t("hero.cards.screenLabel")}
              </span>
            </div>
            <div className="space-y-2 text-[13px] leading-relaxed text-foreground/70">
              <p>{t("hero.cards.screen1")}</p>
              <p>{t("hero.cards.screen2")}</p>
              <p>{t("hero.cards.screen3")}</p>
            </div>
          </div>

          <div className="border-l-2 border-accent/35 bg-[#0B1F3A]/[0.03] px-6 py-7 sm:border-l-2 sm:px-7">
            <div className="mb-4 flex items-center gap-3">
              <FileText className="h-4 w-4 shrink-0 text-accent" />
              <span className="text-[10px] tracking-[0.2em] text-accent/70 uppercase">
                {t("hero.cards.noteLabel")}
              </span>
            </div>
            <div className="space-y-2 text-[13px]">
              <p className="font-medium text-foreground/85">{t("hero.cards.examTitle")}</p>
              <p className="text-[12px] text-muted-foreground">{t("hero.cards.examSample")}</p>
              <p className="mt-2 font-medium text-foreground/85">{t("hero.cards.imagingTitle")}</p>
              <p className="text-[12px] text-muted-foreground">{t("hero.cards.imagingSample")}</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
