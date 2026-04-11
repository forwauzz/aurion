import { getTranslations } from "next-intl/server"

export async function TrustDutySection() {
  const t = await getTranslations("home")
  const badges = t.raw("trust.badges") as string[]
  const pillars = t.raw("trust.pillars") as { title: string; body: string }[]

  return (
    <section className="bg-[#0B1F3A] px-6 py-24 text-[#F7F9FB] md:py-32">
      <div className="mx-auto max-w-[1100px]">
        <h2 className="mx-auto max-w-[720px] text-center font-serif text-3xl leading-tight md:text-4xl text-balance">
          {t("trust.title")}
        </h2>
        <p className="mx-auto mt-6 max-w-[640px] text-center text-base leading-relaxed text-[#F7F9FB]/70">
          {t("trust.lead")}
        </p>

        <div className="mx-auto mt-12 flex max-w-[900px] flex-wrap justify-center gap-2">
          {badges.map((b) => (
            <span
              key={b}
              className="border border-[#F7F9FB]/20 px-3 py-1.5 text-[11px] tracking-wide text-[#F7F9FB]/85"
            >
              {b}
            </span>
          ))}
        </div>

        <div className="mt-20 grid gap-12 md:grid-cols-3 md:gap-10">
          {pillars.map(({ title, body }) => (
            <div key={title}>
              <h3 className="font-serif text-xl text-[#F7F9FB]">{title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-[#F7F9FB]/65">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
