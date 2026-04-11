import Image from "next/image"
import { getTranslations } from "next-intl/server"

export async function DevicesSection() {
  const t = await getTranslations("home")

  return (
    <section className="bg-background">

      {/* ── Section header ── */}
      <div className="mx-auto max-w-[1100px] px-6 pb-8 pt-16 sm:px-8 md:pt-24">
        <p className="text-[10px] font-medium tracking-[0.3em] text-muted-foreground/50 uppercase">
          {t("devices.eyebrow")}
        </p>
        <div className="mt-5 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-[520px] font-serif text-3xl tracking-tight text-foreground md:text-4xl text-balance">
            {t("devices.title")}
          </h2>
          <p className="max-w-[360px] text-[14px] leading-relaxed text-muted-foreground md:text-right">
            {t("devices.subtitle")}
          </p>
        </div>
        <div className="mt-8 h-px w-full bg-border/50" />
      </div>

      {/* ── Photo grid — Legora-style ── */}
      {/* Desktop: 3 columns with stagger. Mobile: single column stack. */}
      <div className="mx-auto max-w-[1100px] px-6 pb-6 sm:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">

          {/* Photo 1 — Smart glasses product shot */}
          <div className="group">
            <div className="relative overflow-hidden bg-[#0B1F3A]/5" style={{ aspectRatio: "4/5" }}>
              <Image
                src="/device-glasses.jpg"
                alt="Aurion smart glasses — dual cameras, integrated speakers, multi-function button"
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                sizes="(max-width: 640px) 100vw, (max-width: 1100px) 33vw, 367px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/72 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                <p className="text-[9px] tracking-[0.25em] text-accent uppercase">Hardware</p>
                <p className="mt-1 font-serif text-base leading-snug text-[#F5F4F0] sm:text-[17px]">Smart Glasses</p>
                <p className="mt-1 text-[11px] text-[#F5F4F0]/60">Dual cameras · Preferred form factor</p>
              </div>
            </div>
          </div>

          {/* Photo 2 — Clinician (staggered down on desktop) */}
          <div className="group sm:mt-10">
            <div className="relative overflow-hidden bg-foreground/5" style={{ aspectRatio: "4/5" }}>
              <Image
                src="/clinician-glasses.jpg"
                alt="Clinician wearing Aurion smart glasses in a clinical setting"
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                sizes="(max-width: 640px) 100vw, (max-width: 1100px) 33vw, 367px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/72 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                <p className="text-[9px] tracking-[0.25em] text-accent uppercase">In clinic</p>
                <p className="mt-1 font-serif text-base leading-snug text-[#F5F4F0] sm:text-[17px]">Hands-free capture</p>
                <p className="mt-1 text-[11px] text-[#F5F4F0]/60">POV · Eyes on the patient</p>
              </div>
            </div>
          </div>

          {/* Photo 3 — Doctor + patient */}
          <div className="group">
            <div className="relative overflow-hidden bg-foreground/5" style={{ aspectRatio: "4/5" }}>
              <Image
                src="/doctor-patient.jpg"
                alt="Clinician consulting with patient while wearing Aurion body camera"
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                sizes="(max-width: 640px) 100vw, (max-width: 1100px) 33vw, 367px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/72 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                <p className="text-[9px] tracking-[0.25em] text-accent uppercase">Alternative</p>
                <p className="mt-1 font-serif text-base leading-snug text-[#F5F4F0] sm:text-[17px]">Body Camera</p>
                <p className="mt-1 text-[11px] text-[#F5F4F0]/60">Wearable · Full encounter capture</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── Device label strip ── */}
      <div className="mt-6 border-t border-border/40 bg-card">
        <div className="mx-auto grid max-w-[1100px] grid-cols-2 sm:grid-cols-4">
          {["Smart glasses", "Wearables", "Body cameras", "Room cameras"].map((label, i) => (
            <div
              key={label}
              className={`px-5 py-5 text-center sm:px-6 ${i < 3 ? "border-r border-border/40" : ""} ${i >= 2 ? "border-t border-border/40 sm:border-t-0" : ""}`}
            >
              <p className="text-[10px] tracking-[0.15em] text-foreground/55 uppercase">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
