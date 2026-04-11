import Image from "next/image"
import { getTranslations } from "next-intl/server"

/**
 * Vision / Founder section — Legora-inspired two-column layout.
 * Left: label + Marie's portrait + name/title
 * Right: vision copy + clinical environment image
 */
export async function VisionSection() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const t = await getTranslations("home")

  return (
    <section className="bg-background px-6 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[1100px]">

        {/* Section eyebrow */}
        <p className="mb-10 text-[9px] font-medium tracking-[0.35em] text-muted-foreground/45 uppercase md:mb-12">
          Our Vision
        </p>

        <div className="grid gap-12 md:grid-cols-[260px_1fr] md:gap-20 lg:grid-cols-[280px_1fr]">

          {/* LEFT — Founder portrait */}
          <div className="flex flex-col">
            <div className="relative w-full max-w-[200px] overflow-hidden bg-foreground/5 md:max-w-full">
              {/* 3:4 portrait ratio */}
              <div className="aspect-[3/4] relative">
                <Image
                  src="/founder-marie.jpg"
                  alt="Dr. Marie Gdalevitch — Co-founder &amp; CEO, Aurion"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 200px, 280px"
                />
              </div>
            </div>
            <div className="mt-5">
              <p className="text-[13px] font-medium text-foreground">Dr. Marie Gdalevitch</p>
              <p className="mt-0.5 text-[11px] text-muted-foreground/60">Co-founder &amp; CEO, Aurion</p>
              <p className="mt-0.5 text-[11px] text-muted-foreground/45">Orthopedic Surgeon</p>
            </div>
            {/* Signature line */}
            <div className="mt-4 h-px w-16 bg-border/50" />
          </div>

          {/* RIGHT — Vision text + clinical image */}
          <div>
            <div className="grid gap-8 sm:grid-cols-2 sm:gap-12">
              {/* Text column */}
              <div>
                <p className="text-[15px] leading-[1.85] text-foreground/80">
                  Clinicians bring years of training, sharp eyes, and real judgment into every room. The record should reflect that — completely. Not a reconstruction assembled from memory at the end of a long day, but documentation grounded in exactly what was seen, heard, and reviewed during the visit.
                </p>
                <p className="mt-6 text-[15px] leading-[1.85] text-foreground/80">
                  We built Aurion to remove documentation burden without removing clinician accountability. Capture runs in the background. The note follows the reality of the visit. The clinician stays present for the patient.
                </p>
              </div>

              {/* Clinical environment image */}
              <div className="relative aspect-[3/4] overflow-hidden bg-foreground/5">
                <Image
                  src="/clinical-environment.jpg"
                  alt="Clinical consultation space"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 400px"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to bottom, transparent 50%, rgba(11,31,58,0.2) 100%)",
                  }}
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
