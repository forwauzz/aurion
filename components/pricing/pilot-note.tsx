import { getTranslations } from "next-intl/server"

export async function PilotNote() {
  const t = await getTranslations("pricing")

  return (
    <section className="px-6 py-16 md:py-20">
      <div className="mx-auto max-w-3xl">
        <p className="max-w-2xl text-base leading-relaxed text-foreground/70 md:text-lg">
          {t("pilot.body")}
        </p>
      </div>
    </section>
  )
}