import Image from "next/image"
import { getTranslations } from "next-intl/server"

export async function StatsBandSection() {
  const t = await getTranslations("home")
  const stats = t.raw("stats.items") as { title: string; subtitle: string }[]

  return (
    <section className="bg-[#0B1F3A]">
      {/* ── Top: eyebrow + 3 stats ── */}
      <div className="mx-auto max-w-[1100px] px-8 py-16 md:py-20">
        <p className="text-center text-[9px] tracking-[0.3em] text-[#F5F4F0]/35 uppercase">
          {t("stats.eyebrow")}
        </p>
        <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-0">
          {stats.map(({ title, subtitle }, i) => (
            <div
              key={title}
              className={`px-0 md:px-10 ${i > 0 ? "border-t border-[#F5F4F0]/10 pt-10 md:border-t-0 md:border-l md:pt-0" : ""}`}
            >
              <p className="font-serif text-[1.45rem] leading-snug text-[#F5F4F0] text-balance">
                {title}
              </p>
              <div className="mt-3 h-px w-8 bg-accent opacity-60" />
              <p className="mt-4 text-[13px] leading-relaxed text-[#F5F4F0]/55">
                {subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Note preview — full-width Apple-style product moment ── */}
      <div className="border-t border-[#F5F4F0]/10">
        <div className="mx-auto max-w-[1100px] px-8 py-12">
          <div className="flex items-center justify-between mb-6">
            <p className="text-[9px] tracking-[0.3em] text-[#F5F4F0]/35 uppercase">
              Output
            </p>
            <p className="text-[11px] text-[#F5F4F0]/30">
              Structured clinical note · Clinician-reviewed
            </p>
          </div>
          <div className="relative overflow-hidden rounded-none border border-[#F5F4F0]/10 shadow-2xl">
            <Image
              src="/note-preview.png"
              alt="Aurion clinical note output — structured, citation-grounded, ready for export"
              width={1200}
              height={800}
              className="w-full"
              sizes="(max-width: 1100px) 100vw, 1100px"
            />
          </div>
          <p className="mt-4 text-center text-[10px] text-[#F5F4F0]/30">
            Sample output · All data shown is illustrative
          </p>
        </div>
      </div>
    </section>
  )
}
