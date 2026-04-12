import Image from "next/image"
import { getTranslations } from "next-intl/server"

import { AnimateIn } from "@/components/animate-in"

/**
 * VisualCaptureSection — the signature differentiator section.
 *
 * Three clinical capture pillars: Physical Exam | Imaging on Screen | Labs & Diagnostics
 * Dark navy background, floating "captured" chips with CSS pulse animation.
 * This is the moment the site makes the case for why Aurion is not a scribe.
 */

const PILLAR_IMAGES = [
  {
    src: "/clinician-glasses.jpg",
    alt: "Clinician performing physical examination",
    chip: "Physical exam · Captured",
  },
  {
    src: "/device-glasses.jpg",
    alt: "Imaging reviewed on screen during clinical encounter",
    chip: "Imaging on screen · Captured",
  },
  {
    src: "/doctor-patient.jpg",
    alt: "Clinician reviewing diagnostic results with patient",
    chip: "Labs & diagnostics · Captured",
  },
]

export async function VisualCaptureSection() {
  const t = await getTranslations("home")
  const pillars = t.raw("visualCapture.pillars") as {
    label: string
    headline: string
    items: string[]
  }[]

  return (
    <section className="bg-[#0B1F3A] px-6 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[1100px]">

        {/* ── Header ── */}
        <AnimateIn direction="up" duration={800}>
          <p className="text-[10px] font-medium tracking-[0.35em] text-accent uppercase">
            {t("visualCapture.eyebrow")}
          </p>
          <h2 className="mt-6 max-w-[680px] font-serif text-3xl leading-[1.15] text-[#F5F4F0] md:text-4xl lg:text-[2.8rem] text-balance">
            {t("visualCapture.title")}
          </h2>
          <div className="mt-7 h-px w-10 bg-accent opacity-70" />
          <p className="mt-8 max-w-[560px] text-[15px] leading-[1.8] text-[#F5F4F0]/60">
            {t("visualCapture.subtitle")}
          </p>
        </AnimateIn>

        {/* ── Three pillars ── */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {pillars.map((pillar, i) => {
            const img = PILLAR_IMAGES[i]
            return (
              <AnimateIn key={pillar.label} direction="up" delay={i * 120} duration={800}>
                <div className="group flex flex-col">

                  {/* Photo with capture chip */}
                  <div className="relative overflow-hidden" style={{ aspectRatio: "4/5" }}>
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                    {/* Dark overlay gradient */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(11,31,58,0.85) 0%, rgba(11,31,58,0.15) 55%, transparent 100%)",
                      }}
                    />

                    {/* Live capture chip — top left, pulsing dot */}
                    <div className="absolute left-4 top-4 flex items-center gap-2 border border-[#F5F4F0]/20 bg-[#0B1F3A]/75 px-3 py-1.5 backdrop-blur-sm">
                      <span
                        className="capture-pulse block h-1.5 w-1.5 rounded-full bg-accent"
                        aria-hidden
                      />
                      <span className="text-[9px] tracking-[0.2em] text-[#F5F4F0]/80 uppercase">
                        {img.chip}
                      </span>
                    </div>

                    {/* Pillar label at bottom of image */}
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <p className="text-[10px] tracking-[0.25em] text-accent uppercase">
                        {pillar.label}
                      </p>
                      <p className="mt-1.5 font-serif text-[16px] leading-snug text-[#F5F4F0]">
                        {pillar.headline}
                      </p>
                    </div>
                  </div>

                  {/* Item list below image */}
                  <div className="border border-t-0 border-[#F5F4F0]/10 bg-[#091628] px-5 py-5">
                    <ul className="space-y-2.5">
                      {pillar.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-[12px] leading-relaxed text-[#F5F4F0]/55"
                        >
                          <span
                            className="mt-[0.55em] block h-1 w-1 shrink-0 rounded-full bg-accent/50"
                            aria-hidden
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </AnimateIn>
            )
          })}
        </div>

        {/* ── Bottom statement ── */}
        <AnimateIn direction="up" delay={200} duration={800}>
          <div className="mt-16 border-t border-[#F5F4F0]/10 pt-12 text-center">
            <p className="font-serif text-xl italic text-[#F5F4F0]/50 md:text-[1.45rem]">
              "The record should reflect the full encounter — not just the parts that were easy to document."
            </p>
          </div>
        </AnimateIn>

      </div>
    </section>
  )
}
