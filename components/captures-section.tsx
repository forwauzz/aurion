import { Activity, Monitor, MessageSquare } from "lucide-react"

export function CapturesSection() {
  return (
    <section className="px-6 py-28 md:py-40">
      <div className="mx-auto max-w-[1100px]">
        {/* Section Title */}
        <div className="mb-16 text-center">
          <h2 className="font-serif text-3xl tracking-tight text-foreground md:text-4xl">
            What Aurion captures
          </h2>
        </div>

        {/* Three Pillars */}
        <div className="grid gap-8 md:grid-cols-3 md:gap-12">
          {/* Pillar 1: Physical Examination */}
          <div className="text-center md:text-left">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center border border-border/50 md:mx-0">
              <Activity className="h-6 w-6 text-foreground/70" />
            </div>
            <h3 className="mb-4 text-lg font-medium tracking-tight text-foreground">
              Physical examination
            </h3>
            <ul className="space-y-2 text-base leading-relaxed text-muted-foreground">
              <li>Movement and gait</li>
              <li>Range of motion</li>
              <li>Direct observation</li>
              <li>Procedural steps</li>
            </ul>
          </div>

          {/* Pillar 2: On-screen Data */}
          <div className="text-center md:text-left">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center border border-border/50 md:mx-0">
              <Monitor className="h-6 w-6 text-foreground/70" />
            </div>
            <h3 className="mb-4 text-lg font-medium tracking-tight text-foreground">
              On-screen data
            </h3>
            <ul className="space-y-2 text-base leading-relaxed text-muted-foreground">
              <li>Radiology imaging</li>
              <li>Lab results</li>
              <li>EMR review</li>
              <li>Reference materials</li>
            </ul>
          </div>

          {/* Pillar 3: Clinical Interaction */}
          <div className="text-center md:text-left">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center border border-border/50 md:mx-0">
              <MessageSquare className="h-6 w-6 text-foreground/70" />
            </div>
            <h3 className="mb-4 text-lg font-medium tracking-tight text-foreground">
              Clinical interaction
            </h3>
            <ul className="space-y-2 text-base leading-relaxed text-muted-foreground">
              <li>Conversation</li>
              <li>Clinical findings</li>
              <li>Verbal reasoning</li>
              <li>Patient history</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
