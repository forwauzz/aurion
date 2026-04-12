import { getTranslations } from "next-intl/server"

import { AnimateIn } from "@/components/animate-in"

export async function ProductFlowSection() {
  const t = await getTranslations("home")
  const steps = t.raw("productFlow.steps") as {
    title: string
    description: string
  }[]

  return (
    <section className="bg-card px-6 py-16 md:py-24">
      <div className="mx-auto max-w-[1050px]">

        <AnimateIn direction="up">
          <p className="text-center text-[9px] tracking-[0.3em] text-muted-foreground/45 uppercase">
            {t("productFlow.eyebrow")}
          </p>
        </AnimateIn>

        <div className="mt-12 grid gap-0 sm:grid-cols-2 md:grid-cols-4">
          {steps.map((step, index) => (
            <AnimateIn key={step.title} direction="up" delay={index * 100} duration={750}>
              <div className={`px-0 pb-8 md:pb-0 ${index > 0 ? "pt-8 md:pt-0 md:pl-8 border-t border-border/40 md:border-t-0 md:border-l" : ""}`}>
                <span className="font-serif text-[2rem] text-border/50 leading-none">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="my-5 h-px w-8 bg-accent opacity-50" />
                <h3 className="text-[14px] font-medium text-foreground">{step.title}</h3>
                <p className="mt-2.5 text-[12px] leading-[1.75] text-muted-foreground/65">
                  {step.description}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>

      </div>
    </section>
  )
}
