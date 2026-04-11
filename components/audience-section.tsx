import { getTranslations } from "next-intl/server"

export async function AudienceSection() {
  const t = await getTranslations("home")
  const specialties = t.raw("audience.specialties") as string[]

  return (
    <section className="px-6 py-40 md:py-56">
      <div className="mx-auto max-w-[800px] text-center">
        <div className="mx-auto mb-32 h-px w-24 bg-border/50" />

        <h2 className="font-serif text-3xl text-foreground md:text-4xl lg:text-[2.5rem] text-balance">
          {t("audience.title")}
        </h2>

        <div className="mt-20 flex flex-col items-center gap-5">
          {specialties.map((specialty) => (
            <p key={specialty} className="text-lg text-muted-foreground/70">
              {specialty}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
