export function SystemSection() {
  return (
    <section className="px-6 py-28 md:py-40 bg-card">
      <div className="mx-auto max-w-[900px] text-center">
        {/* Section Title */}
        <h2 className="font-serif text-3xl tracking-tight text-foreground md:text-4xl">
          A complete documentation layer
        </h2>

        <p className="mx-auto mt-8 max-w-[640px] text-lg leading-relaxed text-muted-foreground md:text-xl">
          Aurion connects what is seen, what is said, and what is reviewed — into a single clinical record.
        </p>

        {/* Visual: Three inputs → One output */}
        <div className="mx-auto mt-16 max-w-[700px]">
          <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center md:gap-8">
            <div className="flex items-center gap-4 md:gap-8">
              <span className="text-sm text-muted-foreground">Seen</span>
              <span className="text-muted-foreground/30">+</span>
              <span className="text-sm text-muted-foreground">Said</span>
              <span className="text-muted-foreground/30">+</span>
              <span className="text-sm text-muted-foreground">Reviewed</span>
            </div>
            <span className="text-muted-foreground/50">→</span>
            <span className="border border-accent/30 bg-accent/[0.05] px-4 py-2 text-sm font-medium text-foreground">
              Clinical Record
            </span>
          </div>
        </div>

        {/* Key differentiators */}
        <div className="mx-auto mt-20 grid max-w-[800px] gap-8 text-left md:grid-cols-3">
          <div>
            <h4 className="mb-2 text-sm font-medium text-foreground">Citation-linked</h4>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Every note element traces back to its source moment
            </p>
          </div>
          <div>
            <h4 className="mb-2 text-sm font-medium text-foreground">PHI-protected</h4>
            <p className="text-sm leading-relaxed text-muted-foreground">
              On-device processing with HIPAA-compliant architecture
            </p>
          </div>
          <div>
            <h4 className="mb-2 text-sm font-medium text-foreground">Specialty-aware</h4>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Templates and logic built for surgical specialties
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
