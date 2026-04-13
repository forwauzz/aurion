import Image from "next/image"
import { getTranslations } from "next-intl/server"

import { Button } from "@/components/ui/button"
import { Link } from "@/i18n/navigation"

export async function FinalCtaSection() {
  const t = await getTranslations("home")

  return (
    <section className="relative overflow-hidden bg-[#0B1F3A]">
      {/* Background image — doctor with patient */}
      <div className="absolute inset-0 opacity-30">
        <Image
          src="/doctor-patient.jpg"
          alt=""
          fill
          className="object-cover object-center"
          aria-hidden
          sizes="100vw"
        />
      </div>

      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #0B1F3A 45%, rgba(11,31,58,0.65) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[800px] px-8 py-24 text-center md:py-36">
        {/* Gold thin rule */}
        <div className="mx-auto mb-10 h-px w-10 bg-accent opacity-70" />

        <h2 className="font-serif text-3xl leading-[1.2] text-[#F5F4F0] md:text-4xl lg:text-[2.8rem] text-balance">
          {t("finalCta.title")}
        </h2>

        <p className="mx-auto mt-8 max-w-[520px] text-[16px] leading-relaxed text-[#F5F4F0]/65">
          {t("finalCta.subtitle")}
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          {/* Primary — warm white */}
          <Button
            asChild
            size="lg"
            className="min-w-[200px] rounded-none bg-[#F5F4F0] px-8 text-[13px] tracking-wide text-[#0B1F3A] hover:bg-white transition-all"
          >
            <Link href="/pricing">{t("finalCta.startFree")}</Link>
          </Button>
          {/* Secondary — ghost */}
          <Button
            asChild
            size="lg"
            variant="outline"
            className="min-w-[200px] rounded-none border-[#F5F4F0]/30 px-8 text-[13px] tracking-wide text-[#F5F4F0] hover:bg-[#F5F4F0]/10 hover:border-[#F5F4F0]/50 transition-all"
          >
            <Link href="/waitlist">{t("finalCta.bookDemo")}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
