"use client"

import { useTranslations } from "next-intl"
import { Mic, ScanEye, Layers } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Link } from "@/i18n/navigation"
import { SITE } from "@/lib/site"

const PILLAR_IDS = ["scribe", "vision", "suite"] as const
const ICONS = {
  scribe: Mic,
  vision: ScanEye,
  suite: Layers,
} as const

export function ProductPillarsSection() {
  const t = useTranslations("home")

  return (
    <section className="border-y border-border/40 bg-card px-6 py-24 md:py-32">
      <div className="mx-auto max-w-[1100px]">
        <p className="text-center text-[10px] tracking-[0.25em] text-muted-foreground/50 uppercase">
          {t("pillars.eyebrow")}
        </p>
        <h2 className="mx-auto mt-6 max-w-[720px] text-center font-serif text-3xl tracking-tight text-foreground md:text-4xl text-balance">
          {t("pillars.title")}
        </h2>
        <p className="mx-auto mt-6 max-w-[640px] text-center text-base leading-relaxed text-muted-foreground">
          {t("pillars.subtitle")}
        </p>

        <Tabs defaultValue="scribe" className="mt-14 w-full">
          <TabsList className="mx-auto flex h-auto w-full max-w-2xl flex-wrap justify-center gap-0 rounded-none bg-transparent p-0 sm:flex-nowrap">
            {PILLAR_IDS.map((id) => {
              const Icon = ICONS[id]
              return (
                <TabsTrigger
                  key={id}
                  value={id}
                  className="grow rounded-none border-0 border-b-2 border-transparent bg-transparent px-5 py-4 text-sm font-medium text-muted-foreground shadow-none data-[state=active]:border-[#4A6FA5] data-[state=active]:bg-transparent data-[state=active]:text-foreground data-[state=active]:shadow-none"
                >
                  <Icon className="mr-2 size-4 opacity-70" aria-hidden />
                  {t(`pillars.${id}.label`)}
                </TabsTrigger>
              )
            })}
          </TabsList>

          {PILLAR_IDS.map((id) => (
            <TabsContent key={id} value={id} className="mt-12 outline-none">
              <div className="grid gap-12 md:grid-cols-[1fr_1fr] md:items-start">
                <div>
                  <h3 className="font-serif text-2xl text-foreground md:text-3xl text-balance">
                    {t(`pillars.${id}.headline`)}
                  </h3>
                  <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                    {t(`pillars.${id}.body`)}
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Button asChild size="lg" className="rounded-md">
                      <Link href="/pricing">{t("pillars.viewPricing")}</Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="rounded-md">
                      <a href={SITE.bookDemoMailto}>{t("pillars.bookDemo")}</a>
                    </Button>
                  </div>
                </div>
                <ul className="space-y-4 border border-border/50 bg-background/80 p-8">
                  {(
                    t.raw(`pillars.${id}`) as { bullets: string[] }
                  ).bullets.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-relaxed text-foreground/85"
                    >
                      <span
                        className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[#C6A75E]"
                        aria-hidden
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
