import Image from "next/image"
import { getTranslations } from "next-intl/server"

export async function CoreDifferenceSection() {
  const t = await getTranslations("home")
  const bullets = t.raw("coreDifference.bullets") as string[]

  return (
    <section className="bg-background px-8 py-20 md:py-28">
      <div className="mx-auto max-w-[1100px]">

        {/* ── Two-column layout ── */}
        <div className="grid gap-16 md:grid-cols-[1fr_1fr] md:items-center md:gap-20">

          {/* Left — note preview image */}
          <div className="order-2 md:order-1">
            <div className="relative overflow-hidden border border-border/40 shadow-xl">
              <Image
                src="/note-preview.png"
                alt="Aurion structured clinical note — grounded in encounter capture"
                width={1200}
                height={800}
                className="w-full"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <p className="mt-3 text-center text-[10px] text-muted-foreground/40">
              Sample output · Illustrative
            </p>
          </div>

          {/* Right — copy */}
          <div className="order-1 md:order-2">
            <div className="mb-8 h-px w-10 bg-accent" />

            <h2 className="font-serif text-3xl text-foreground md:text-[2.1rem] text-balance">
              {t("coreDifference.title")}
            </h2>

            <p className="mt-6 text-[16px] leading-[1.75] text-muted-foreground/75">
              {t("coreDifference.lead")}
            </p>

            <ul className="mt-10 space-y-4">
              {bullets.map((line) => (
                <li key={line} className="flex items-start gap-4 text-[15px] text-foreground/80">
                  <span className="mt-[0.6em] block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                  {line}
                </li>
              ))}
            </ul>

            <div className="mt-10 space-y-1.5 border-t border-border/40 pt-8">
              <p className="text-[14px] text-muted-foreground/55">{t("coreDifference.line1")}</p>
              <p className="font-serif text-[18px] text-foreground">{t("coreDifference.line2")}</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
