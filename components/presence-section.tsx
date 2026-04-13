import { getTranslations } from "next-intl/server"

import { Button } from "@/components/ui/button"
import { Link } from "@/i18n/navigation"

export async function PresenceSection() {
  const t = await getTranslations("home")

  return (
    <section className="relative overflow-hidden bg-[#0B1F3A]">
      {/* Autoplay looping video — imaging review, very low opacity for cinematic depth */}
      <div className="absolute inset-0 opacity-[0.18]">
        <video
          autoPlay
          muted
          loop
          playsInline
          aria-hidden
          className="h-full w-full object-cover object-center"
        >
          <source src="/imaging-video-1.mp4" type="video/mp4" />
        </video>
      </div>
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to bottom, #0B1F3A 0%, rgba(11,31,58,0.82) 50%, #0B1F3A 100%)" }}
      />

      <div className="relative z-10 mx-auto max-w-[760px] px-8 py-24 text-center md:py-32">
        {/* Serif italic headline — emotionally resonant */}
        <h2 className="font-serif text-3xl italic leading-[1.35] text-[#F5F4F0] md:text-[2.2rem] lg:text-[2.5rem] text-balance">
          {t("presence.title")}
        </h2>

        <div className="mx-auto mt-8 h-px w-10 bg-accent opacity-60" />

        <p className="mx-auto mt-8 max-w-[480px] text-[16px] leading-relaxed text-[#F5F4F0]/60">
          {t("presence.subtitle")}
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <Button
            asChild
            size="lg"
            className="rounded-none bg-[#F5F4F0] px-8 text-[13px] tracking-wide text-[#0B1F3A] hover:bg-white transition-all"
          >
            <Link href="/pricing">{t("presence.startFree")}</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-none border-[#F5F4F0]/30 px-8 text-[13px] tracking-wide text-[#F5F4F0] hover:bg-[#F5F4F0]/10 hover:border-[#F5F4F0]/50 transition-all"
          >
            <Link href="/pricing">{t("presence.comparePlans")}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
