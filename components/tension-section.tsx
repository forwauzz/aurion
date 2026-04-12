import { getTranslations } from "next-intl/server"

import { AnimateIn } from "@/components/animate-in"

export async function TensionSection() {
  const t = await getTranslations("home")
  const examples = t.raw("tension.examples") as string[]

  return (
    <section className="bg-background px-6 py-16 md:py-24">
      <div className="mx-auto max-w-[760px] text-center">

        <AnimateIn direction="fade" duration={900}>
          <p className="font-serif text-[1.6rem] leading-[1.5] text-foreground md:text-[1.9rem] lg:text-[2.1rem] text-balance">
            {t("tension.statement")}
          </p>
        </AnimateIn>

        <AnimateIn direction="up" delay={150} duration={800}>
          <div className="mx-auto mt-10 h-px w-10 bg-accent opacity-60" />
          <div className="mt-10 space-y-4">
            {examples.map((line) => (
              <p key={line} className="text-[15px] leading-[1.8] text-muted-foreground/65">
                {line}
              </p>
            ))}
          </div>
          <p className="mt-10 text-base font-medium text-foreground/70">
            {t("tension.closing")}
          </p>
        </AnimateIn>

      </div>
    </section>
  )
}
