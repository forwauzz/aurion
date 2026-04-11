import { getTranslations } from "next-intl/server"

export async function PilotNote() {
  const t = await getTranslations("pricing")

  return (
    <section className="px-6 py-20 md:py-24">
      <div className="mx-auto max-w-3xl">
        <p className="text-foreground/50 text-base md:text-lg leading-relaxed max-w-xl">
          {t("pilot.body")}
        </p>
      </div>
    </section>
  )
}
