import Image from "next/image"
import { getTranslations } from "next-intl/server"

import { Button } from "@/components/ui/button"
import { Link } from "@/i18n/navigation"
import { Footer } from "@/components/footer"
import { SITE } from "@/lib/site"

/* ─────────────────────────────────────────────────────────────────────────── */
/* Solutions page — specialty-specific positioning grounded in PRD            */
/* ─────────────────────────────────────────────────────────────────────────── */

const SPECIALTIES = [
  {
    id: "orthopedics",
    label: "Orthopedic Surgery",
    eyebrow: "Orthopedics",
    headline: "The exam is visual. The record should be too.",
    body: "Gait patterns, range of motion measurements, palpation findings, and imaging interpretation are the substance of orthopedic documentation. Audio-only scribes capture the conversation. Aurion captures the full exam.",
    bullets: [
      "Gait observation and weight-bearing assessment",
      "ROM measurements — flexion, extension, rotation, with values",
      "Special test findings — Lachman, McMurray, impingement, apprehension",
      "Palpation findings — joint line tenderness, effusion, deformity",
      "Imaging reviewed on screen — X-ray, MRI, CT correlation",
      "Specialty-specific SOAP templates for clinic visits",
    ],
    img: "/clinician-glasses.jpg",
    imgAlt: "Orthopedic surgeon in clinic with Aurion capture",
  },
  {
    id: "plastic-surgery",
    label: "Plastic Surgery",
    eyebrow: "Plastic Surgery",
    headline: "Wound assessment. Tissue observation. Documented with precision.",
    body: "Plastic surgery documentation demands visual precision — wound dimensions, tissue perfusion, flap viability, and healing progression. Aurion captures the examination as it happens.",
    bullets: [
      "Wound size, depth, and edge characteristics",
      "Tissue perfusion and flap viability assessment",
      "Granulation tissue quality and drainage description",
      "Scar assessment — maturation, pigmentation, texture",
      "Pre- and post-operative visual documentation",
      "Side-by-side imaging comparison during consultations",
    ],
    img: "/device-glasses.jpg",
    imgAlt: "Plastic surgeon documentation with Aurion",
  },
  {
    id: "sports-medicine",
    label: "Sports Medicine",
    eyebrow: "Sports Medicine",
    headline: "Functional testing. Biomechanical observation. In the note.",
    body: "Sports medicine documentation lives in functional movement — single-leg squat mechanics, proprioception testing, load tolerance, and return-to-sport criteria. Aurion captures the assessment you'd otherwise reconstruct from memory.",
    bullets: [
      "Gait and running analysis observation",
      "Functional movement screen documentation",
      "Single-leg balance and proprioception testing",
      "Load tolerance and pain provocation findings",
      "Return-to-sport and return-to-play criteria documentation",
      "Imaging and ultrasound review captured on screen",
    ],
    img: "/doctor-patient.jpg",
    imgAlt: "Sports medicine physician examination with Aurion",
  },
  {
    id: "musculoskeletal",
    label: "Musculoskeletal Medicine",
    eyebrow: "Musculoskeletal Medicine",
    headline: "Complex presentations. Complete documentation.",
    body: "MSK medicine spans a wide observational range — from postural assessment to nerve tension tests to functional capacity evaluation. Aurion ensures what is observed in the room is reflected in the record.",
    bullets: [
      "Postural and movement pattern assessment",
      "Neural tension testing — SLR, Slump, upper limb tension",
      "Myofascial and trigger point examination findings",
      "Functional capacity observation and documentation",
      "Imaging and diagnostic review integration",
      "Complex multi-visit documentation with visit history",
    ],
    img: "/clinical-environment.jpg",
    imgAlt: "MSK medicine consultation with Aurion",
  },
]

const COMMON_BENEFITS = [
  {
    title: "Passive capture",
    body: "No mid-visit prompts. No manual tagging. Aurion captures continuously in the background while you focus on the patient.",
  },
  {
    title: "Specialty templates",
    body: "Note output shaped by how your specialty actually documents — not a generic SOAP structure applied to everything.",
  },
  {
    title: "Screen correlation",
    body: "Imaging and labs reviewed during the visit are captured and correlated to the relevant section of the note automatically.",
  },
  {
    title: "Human in the loop",
    body: "Every note is reviewed and approved by the clinician before it leaves Aurion. The system supports the record — you own it.",
  },
]

export default async function SolutionsPage() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const t = await getTranslations("common")

  return (
    <main className="min-h-screen bg-background">

      {/* ── Hero ── */}
      <section className="bg-[#0B1F3A] px-6 pb-20 pt-36 md:px-8 md:pb-28 md:pt-48">
        <div className="mx-auto max-w-[1100px]">
          <p className="text-[10px] tracking-[0.35em] text-accent uppercase">Solutions</p>
          <h1 className="mt-6 max-w-[700px] font-serif text-[2.4rem] leading-[1.1] text-[#F5F4F0] md:text-5xl lg:text-[3.2rem] text-balance">
            Built for specialties where the exam is visual.
          </h1>
          <div className="mt-7 h-px w-10 bg-accent opacity-70" />
          <p className="mt-8 max-w-[520px] text-[16px] leading-[1.75] text-[#F5F4F0]/60">
            Audio-only scribes capture less than half of what happens in a visual specialty clinic. Aurion is built for the specialties where observation, examination, and imaging are the core of the clinical record.
          </p>

          {/* Specialty labels — horizontal strip */}
          <div className="mt-12 flex flex-wrap gap-2">
            {SPECIALTIES.map(({ label, id }) => (
              <a
                key={id}
                href={`#${id}`}
                className="border border-[#F5F4F0]/20 px-4 py-2 text-[11px] tracking-wide text-[#F5F4F0]/65 transition-colors hover:border-[#F5F4F0]/40 hover:text-[#F5F4F0]"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── The gap audio-only scribes leave ── */}
      <section className="bg-card px-6 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-[1100px]">
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <div className="border border-border/40 p-8">
              <p className="mb-5 text-[9px] tracking-[0.3em] text-muted-foreground/40 uppercase">Audio-only scribes capture</p>
              <ul className="space-y-4">
                {["What the clinician says", "What the patient says", "Some structured conversation elements"].map((item) => (
                  <li key={item} className="flex items-start gap-4 text-[14px] text-foreground/40">
                    <span className="mt-[0.55em] block h-px w-4 shrink-0 bg-foreground/20" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-accent/30 bg-[#0B1F3A]/[0.03] p-8">
              <p className="mb-5 text-[9px] tracking-[0.3em] text-accent/70 uppercase">Aurion captures</p>
              <ul className="space-y-4">
                {[
                  "What the clinician says",
                  "What the clinician observes",
                  "What the clinician physically examines",
                  "What is reviewed on screen — imaging, labs, EMR",
                  "The full clinical reasoning, not just its verbal summary",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4 text-[14px] text-foreground/85">
                    <span className="mt-[0.65em] block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Specialty sections ── */}
      {SPECIALTIES.map(({ id, eyebrow, headline, body, bullets, img, imgAlt }, idx) => (
        <section
          key={id}
          id={id}
          className={`px-6 py-20 md:px-8 md:py-28 ${idx % 2 === 0 ? "bg-background" : "bg-card"}`}
        >
          <div className="mx-auto max-w-[1100px]">
            <div className={`grid gap-12 md:grid-cols-2 md:items-center md:gap-16 ${idx % 2 !== 0 ? "md:[&>*:first-child]:order-2" : ""}`}>

              {/* Text */}
              <div>
                <p className="text-[9px] tracking-[0.3em] text-accent/75 uppercase">{eyebrow}</p>
                <h2 className="mt-5 font-serif text-[1.85rem] leading-[1.2] text-foreground md:text-[2.2rem] text-balance">
                  {headline}
                </h2>
                <div className="mt-6 h-px w-10 bg-accent" />
                <p className="mt-7 text-[15px] leading-[1.8] text-muted-foreground">{body}</p>
                <ul className="mt-8 space-y-3">
                  {bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-[13px] text-foreground/80">
                      <span className="mt-[0.6em] block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-10 flex flex-wrap gap-3">
                  <Button asChild size="lg" className="rounded-none bg-[#0B1F3A] px-7 text-[13px] tracking-wide text-[#F5F4F0] hover:bg-[#0B1F3A]/85 transition-all">
                    <Link href="/pricing">Start free</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="rounded-none border-foreground/25 px-7 text-[13px] tracking-wide hover:bg-foreground/5 transition-all">
                    <a href={SITE.bookDemoMailto}>Book a demo</a>
                  </Button>
                </div>
              </div>

              {/* Image */}
              <div className="group">
                <div className="relative aspect-[4/5] overflow-hidden bg-foreground/5">
                  <Image
                    src={img}
                    alt={imgAlt}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/30 via-transparent to-transparent" />
                </div>
              </div>

            </div>
          </div>
        </section>
      ))}

      {/* ── Common benefits ── */}
      <section className="bg-[#0B1F3A] px-6 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[1100px]">
          <p className="text-[9px] tracking-[0.3em] text-[#F5F4F0]/35 uppercase">Across all specialties</p>
          <h2 className="mt-5 max-w-[560px] font-serif text-3xl text-[#F5F4F0] md:text-4xl text-balance">
            The same principles. Every specialty.
          </h2>
          <div className="mt-7 h-px w-10 bg-accent opacity-70" />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {COMMON_BENEFITS.map(({ title, body }) => (
              <div key={title} className="border border-[#F5F4F0]/10 p-6">
                <h3 className="font-serif text-[16px] text-[#F5F4F0]">{title}</h3>
                <p className="mt-3 text-[12px] leading-relaxed text-[#F5F4F0]/55">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Enterprise / clinic rollout ── */}
      <section className="bg-background px-6 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-[1100px]">
          <div className="grid gap-12 border border-border/40 bg-card p-8 md:grid-cols-[1fr_auto] md:items-center md:p-12">
            <div>
              <p className="text-[9px] tracking-[0.3em] text-muted-foreground/45 uppercase">Clinics &amp; health systems</p>
              <h2 className="mt-5 max-w-[520px] font-serif text-2xl text-foreground md:text-3xl text-balance">
                Multi-seat rollout, volume pricing, and governance aligned to your policies.
              </h2>
              <p className="mt-5 max-w-[480px] text-[14px] leading-relaxed text-muted-foreground">
                For organizations that need onboarding, compliance review, export policy alignment, and dedicated support — we scope together before go-live.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
              <Button asChild size="lg" className="rounded-none bg-[#0B1F3A] px-7 text-[13px] tracking-wide text-[#F5F4F0] hover:bg-[#0B1F3A]/85">
                <Link href="/pricing">View pricing</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-none border-foreground/25 px-7 text-[13px] tracking-wide hover:bg-foreground/5">
                <a href={SITE.contactSalesMailto}>Contact sales</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
