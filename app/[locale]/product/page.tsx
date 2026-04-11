import Image from "next/image"
import { Mic, ScanEye, Monitor, Shield, FileText, Layers, CheckCircle } from "lucide-react"
import { getTranslations } from "next-intl/server"

import { Button } from "@/components/ui/button"
import { Link } from "@/i18n/navigation"
import { Footer } from "@/components/footer"
import { SITE } from "@/lib/site"

/* ─────────────────────────────────────────────────────────────────────────── */
/* Product page — grounded in the Technical PRD and Brand Book                */
/* ─────────────────────────────────────────────────────────────────────────── */

const WORKFLOW_STEPS = [
  {
    num: "01",
    title: "Patient consent",
    body: "Recording is hard-gated behind consent confirmation. Nothing starts until the patient has agreed — no exceptions, no workarounds.",
  },
  {
    num: "02",
    title: "Select template (optional)",
    body: "Choose a specialty-specific template — orthopedics, plastic surgery, sports medicine — or use the default SOAP structure.",
  },
  {
    num: "03",
    title: "Start the encounter",
    body: "One action begins continuous audio, point-of-view visual, and screen capture simultaneously. Aurion runs in the background.",
  },
  {
    num: "04",
    title: "Deliver care as usual",
    body: "No prompts, no tagging, no mid-visit interaction. The system captures what is observed, spoken, and reviewed on screen.",
  },
  {
    num: "05",
    title: "Stage 1: Audio draft",
    body: "Within 60 seconds of stopping, a structured note draft is ready for review — grounded in the full transcript.",
  },
  {
    num: "06",
    title: "Stage 2: Visual enrichment",
    body: "Asynchronously, relevant visual frames and screen content are processed and woven into the note with timestamped citations.",
  },
  {
    num: "07",
    title: "Review, edit, approve",
    body: "You review the draft, make any changes, and approve. The note reflects your judgment, not just the system's output.",
  },
  {
    num: "08",
    title: "Export + purge",
    body: "The approved note exports as DOCX or plain text. Raw audio and video are automatically deleted after processing.",
  },
]

const CAPABILITIES = [
  {
    icon: Mic,
    title: "Audio transcription",
    body: "Full encounter audio transcribed at sentence-level precision. The transcript is the canonical backbone every note is built from.",
  },
  {
    icon: ScanEye,
    title: "Point-of-view visual capture",
    body: "Smart glasses or body camera capture what the clinician sees: gait, ROM, examination findings, wound assessment, tissue observation.",
  },
  {
    icon: Monitor,
    title: "Screen capture + OCR",
    body: "Imaging viewers, lab results, and EMR data reviewed during the visit are captured and structured — no re-typing required.",
  },
  {
    icon: FileText,
    title: "Specialty-aware note generation",
    body: "Templates designed for orthopedics, plastic surgery, and sports medicine ensure output matches how specialists actually document.",
  },
  {
    icon: Shield,
    title: "On-device PHI masking",
    body: "Faces and sensitive screen content are masked before data leaves the device. Raw identifiable material never reaches the cloud.",
  },
  {
    icon: Layers,
    title: "Citation-anchored output",
    body: "Every observation in the note links to the source moment — a transcript line, a visual frame, or a screen capture. Nothing is inferred.",
  },
]

const PRIVACY_ITEMS = [
  "On-device facial blurring before upload",
  "No raw video playback — ever",
  "Raw audio deleted within 1 hour of transcription",
  "AES-256 encryption at rest, TLS in transit",
  "AWS Canada (ca-central-1) hosting",
  "HIPAA, PIPEDA, and Quebec Law 25 aligned",
  "Mandatory patient consent before recording",
  "Full audit trail — 7-year immutable log",
  "Clinician review and approval before any export",
  "You control retention and export policies",
]

export default async function ProductPage() {
  const t = await getTranslations("common")

  return (
    <main className="min-h-screen bg-background">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[#0B1F3A]">
        <div className="absolute inset-0 opacity-20">
          <Image src="/device-glasses.jpg" alt="" fill className="object-cover object-center" aria-hidden sizes="100vw" />
        </div>
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, #0B1F3A 50%, rgba(11,31,58,0.7) 100%)" }}
        />
        <div className="relative z-10 mx-auto max-w-[1100px] px-6 pb-20 pt-40 md:px-8 md:pb-28 md:pt-48">
          <p className="text-[10px] tracking-[0.35em] text-accent uppercase">Product</p>
          <h1 className="mt-6 max-w-[680px] font-serif text-[2.4rem] leading-[1.1] text-[#F5F4F0] md:text-5xl lg:text-[3.2rem] text-balance">
            Documentation that captures the full clinical encounter.
          </h1>
          <div className="mt-7 h-px w-10 bg-accent opacity-70" />
          <p className="mt-8 max-w-[520px] text-[16px] leading-[1.75] text-[#F5F4F0]/65">
            Audio-only scribes capture what is said. Aurion captures what is said, observed, and reviewed on screen — then turns the full encounter into a structured note you control.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="rounded-none bg-[#F5F4F0] px-7 text-[13px] tracking-wide text-[#0B1F3A] hover:bg-white transition-all"
            >
              <Link href="/pricing">Start free</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-none border-[#F5F4F0]/30 px-7 text-[13px] tracking-wide text-[#F5F4F0] hover:bg-[#F5F4F0]/10 hover:border-[#F5F4F0]/50 transition-all"
            >
              <a href={SITE.bookDemoMailto}>Book a demo</a>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Note preview ── */}
      <section className="bg-[#0B1F3A] px-6 pb-16 md:px-8 md:pb-20">
        <div className="mx-auto max-w-[1100px]">
          <div className="border border-[#F5F4F0]/10 shadow-2xl">
            <Image
              src="/note-preview.png"
              alt="Aurion clinical note output — structured, citation-grounded"
              width={1200}
              height={800}
              className="w-full"
              sizes="(max-width: 1100px) 100vw, 1100px"
            />
          </div>
          <p className="mt-4 text-center text-[10px] text-[#F5F4F0]/30">
            Sample output · Illustrative · All data shown is fictional
          </p>
        </div>
      </section>

      {/* ── Capabilities grid ── */}
      <section className="bg-background px-6 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[1100px]">
          <p className="text-[9px] tracking-[0.3em] text-muted-foreground/45 uppercase">What Aurion captures</p>
          <h2 className="mt-5 max-w-[600px] font-serif text-3xl text-foreground md:text-4xl text-balance">
            Everything that happens in the room.
          </h2>
          <div className="mt-8 h-px w-10 bg-accent" />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map(({ icon: Icon, title, body }) => (
              <div key={title} className="border border-border/50 bg-card p-7">
                <Icon className="mb-5 h-5 w-5 text-accent" />
                <h3 className="font-serif text-[17px] text-foreground">{title}</h3>
                <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works — full workflow ── */}
      <section className="bg-card px-6 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[1100px]">
          <p className="text-[9px] tracking-[0.3em] text-muted-foreground/45 uppercase">How it works</p>
          <h2 className="mt-5 max-w-[560px] font-serif text-3xl text-foreground md:text-4xl text-balance">
            From encounter to approved note — in one flow.
          </h2>
          <div className="mt-8 h-px w-10 bg-accent" />

          <div className="mt-14 grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
            {WORKFLOW_STEPS.map(({ num, title, body }, i) => (
              <div
                key={num}
                className={`relative px-0 pb-10 pr-0 sm:pr-8 lg:pr-10 ${i < WORKFLOW_STEPS.length - 1 ? "border-b border-border/40 sm:border-b-0 sm:border-r lg:border-r" : ""} ${i > 0 ? "pt-10 sm:pt-0 sm:pl-8 lg:pl-10" : "pt-0"}`}
              >
                <p className="font-serif text-[2rem] text-border/60">{num}</p>
                <h3 className="mt-3 text-[14px] font-medium text-foreground">{title}</h3>
                <p className="mt-2 text-[12px] leading-relaxed text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Two-stage processing — technical depth ── */}
      <section className="bg-background px-6 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[1100px]">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">

            {/* Stage 1 */}
            <div className="border border-border/50 bg-card p-8">
              <div className="mb-6 flex items-center gap-3">
                <span className="text-[10px] tracking-[0.2em] text-accent uppercase">Stage 1</span>
                <div className="h-px flex-1 bg-border/50" />
              </div>
              <h3 className="font-serif text-2xl text-foreground">Audio-first draft</h3>
              <p className="mt-4 text-[14px] leading-relaxed text-muted-foreground">
                Within 60 seconds of stopping the recording, a structured note draft is ready for review. Transcription, SOAP structure, and template mapping happen immediately so the clinician can move to the next patient while Stage 2 runs in the background.
              </p>
              <ul className="mt-6 space-y-3">
                {["Full audio transcription via Whisper v3", "Immediate SOAP note generation", "Ready for review in under 60 seconds", "Specialty template applied automatically"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[13px] text-foreground/75">
                    <CheckCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Stage 2 */}
            <div className="border border-border/50 bg-card p-8">
              <div className="mb-6 flex items-center gap-3">
                <span className="text-[10px] tracking-[0.2em] text-accent uppercase">Stage 2</span>
                <div className="h-px flex-1 bg-border/50" />
              </div>
              <h3 className="font-serif text-2xl text-foreground">Visual enrichment</h3>
              <p className="mt-4 text-[14px] leading-relaxed text-muted-foreground">
                Asynchronously, the system identifies clinically relevant moments in the transcript, extracts the corresponding visual frames, and enriches the note with timestamped citations — linking observations to what was actually seen and reviewed.
              </p>
              <ul className="mt-6 space-y-3">
                {["Trigger classifier selects relevant frames only", "Screen OCR extracts imaging and lab data", "Conflict detection: enriches, flags, or skips", "Final note assembled with visual citations"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[13px] text-foreground/75">
                    <CheckCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Privacy & security ── */}
      <section className="bg-[#0B1F3A] px-6 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[1100px]">
          <p className="text-[9px] tracking-[0.3em] text-[#F5F4F0]/35 uppercase">Privacy &amp; security</p>
          <h2 className="mt-5 max-w-[560px] font-serif text-3xl text-[#F5F4F0] md:text-4xl text-balance">
            Privacy-first architecture. Not a compliance add-on.
          </h2>
          <div className="mt-7 h-px w-10 bg-accent opacity-70" />
          <p className="mt-8 max-w-[560px] text-[15px] leading-relaxed text-[#F5F4F0]/60">
            On-device masking, no raw playback, explicit consent gating, and immutable audit trails — designed from the ground up for environments where identifiable imagery must be handled with discipline.
          </p>

          <div className="mt-14 grid gap-3 sm:grid-cols-2">
            {PRIVACY_ITEMS.map((item) => (
              <div key={item} className="flex items-start gap-4 border border-[#F5F4F0]/10 px-6 py-4">
                <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                <p className="text-[13px] text-[#F5F4F0]/75">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-8 border-t border-[#F5F4F0]/10 pt-12 sm:grid-cols-3">
            {[
              { label: "HIPAA", sub: "US compliance" },
              { label: "PIPEDA", sub: "Canadian federal" },
              { label: "Law 25", sub: "Quebec privacy" },
            ].map(({ label, sub }) => (
              <div key={label} className="text-center">
                <p className="font-serif text-xl text-[#F5F4F0]">{label}</p>
                <p className="mt-1 text-[11px] text-[#F5F4F0]/40">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Hardware ── */}
      <section className="bg-background px-6 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[1100px]">
          <p className="text-[9px] tracking-[0.3em] text-muted-foreground/45 uppercase">Capture hardware</p>
          <h2 className="mt-5 max-w-[520px] font-serif text-3xl text-foreground md:text-4xl text-balance">
            Use what fits the moment.
          </h2>
          <div className="mt-7 h-px w-10 bg-accent" />
          <p className="mt-8 max-w-[480px] text-[15px] leading-relaxed text-muted-foreground">
            Aurion coordinates capture from the device that fits your workflow — from a preferred smart glasses form factor down to the phone already in your pocket.
          </p>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Smart glasses", note: "Preferred · Hands-free POV", img: "/device-glasses.jpg" },
              { label: "Body camera", note: "Strong fallback · Clip-on", img: "/doctor-patient.jpg" },
              { label: "Wearable device", note: "Integrated capture", img: "/clinician-glasses.jpg" },
              { label: "Phone / tablet", note: "Fallback · Always available", img: "/clinical-environment.jpg" },
            ].map(({ label, note, img }) => (
              <div key={label} className="group">
                <div className="relative aspect-[3/4] overflow-hidden bg-foreground/5">
                  <Image
                    src={img}
                    alt={label}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/65 via-transparent to-transparent" />
                </div>
                <div className="pt-4">
                  <p className="text-[13px] font-medium text-foreground">{label}</p>
                  <p className="mt-0.5 text-[11px] text-muted-foreground/60">{note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="relative overflow-hidden bg-[#0B1F3A]">
        <div className="absolute inset-0 opacity-20">
          <Image src="/doctor-patient.jpg" alt="" fill className="object-cover" aria-hidden sizes="100vw" />
        </div>
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #0B1F3A 45%, rgba(11,31,58,0.65) 100%)" }} />
        <div className="relative z-10 mx-auto max-w-[700px] px-6 py-20 text-center md:py-28">
          <div className="mx-auto mb-8 h-px w-10 bg-accent opacity-70" />
          <h2 className="font-serif text-3xl text-[#F5F4F0] md:text-4xl text-balance">
            See the difference when the note reflects the full encounter.
          </h2>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="min-w-[180px] rounded-none bg-[#F5F4F0] px-7 text-[13px] tracking-wide text-[#0B1F3A] hover:bg-white">
              <Link href="/pricing">Start free</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="min-w-[180px] rounded-none border-[#F5F4F0]/30 px-7 text-[13px] tracking-wide text-[#F5F4F0] hover:bg-[#F5F4F0]/10">
              <a href={SITE.bookDemoMailto}>Book a demo</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
