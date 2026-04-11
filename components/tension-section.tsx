import { getTranslations } from "next-intl/server"

export async function TensionSection() {
  const t = await getTranslations("home")
  const examples = t.raw("tension.examples") as string[]

  return (
    <section className="px-6 py-40 md:py-56">
      <div className="mx-auto max-w-[800px] text-center">
        <div className="mx-auto mb-32 h-px w-24 bg-border/50" />

        <p className="font-serif text-2xl leading-[1.5] text-foreground md:text-3xl lg:text-[2rem] text-balance">
          {t("tension.statement")}
        </p>

        <div className="mt-24 space-y-5">
          {examples.map((line) => (
            <p
              key={line}
              className="text-lg leading-[1.8] text-muted-foreground/70"
            >
              {line}
            </p>
          ))}
        </div>

        <p className="mt-24 text-lg text-foreground/70">{t("tension.closing")}</p>
      </div>
    </section>
  )
}
