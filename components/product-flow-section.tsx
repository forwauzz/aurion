import { getTranslations } from "next-intl/server"

export async function ProductFlowSection() {
  const t = await getTranslations("home")
  const steps = t.raw("productFlow.steps") as {
    title: string
    description: string
  }[]

  return (
    <section className="px-6 py-40 md:py-56">
      <div className="mx-auto max-w-[1050px]">
        <div className="mx-auto mb-32 h-px w-24 bg-border/50" />

        <p className="mb-24 text-center text-[10px] tracking-[0.25em] text-muted-foreground/50 uppercase">
          {t("productFlow.eyebrow")}
        </p>

        <div className="grid gap-16 md:grid-cols-4 md:gap-12">
          {steps.map((step, index) => (
            <div key={step.title} className="text-center md:text-left">
              <span className="text-[11px] tracking-[0.15em] text-muted-foreground/40">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="mx-auto my-10 h-px w-12 bg-border/40 md:mx-0" />

              <h3 className="font-serif text-xl text-foreground">{step.title}</h3>

              <p className="mt-4 text-base leading-[1.7] text-muted-foreground/60">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
