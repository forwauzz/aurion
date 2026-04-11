export function ModesSection() {
  return (
    <section className="px-6 py-28 md:py-40">
      <div className="mx-auto max-w-[1100px]">
        {/* Section Title */}
        <div className="mb-16 text-center">
          <h2 className="font-serif text-3xl tracking-tight text-foreground md:text-4xl">
            From clinic to operating room
          </h2>
        </div>

        {/* Two Modes */}
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          {/* Clinic Mode */}
          <div className="border border-border/50 p-8 md:p-10">
            <span className="mb-4 inline-block text-xs tracking-[0.15em] text-muted-foreground/70 uppercase">
              Clinic Mode
            </span>
            <h3 className="mb-4 text-xl font-medium tracking-tight text-foreground">
              Outpatient encounters
            </h3>
            <p className="mb-6 text-base leading-relaxed text-muted-foreground">
              Captures full outpatient encounters including physical exams and screen review, generating structured clinical notes automatically.
            </p>
            <div className="border-t border-border/30 pt-6">
              <p className="text-sm text-muted-foreground/70">
                Physical exam + Screen review → Structured note
              </p>
            </div>
          </div>

          {/* Procedural / OPS Mode */}
          <div className="border border-accent/30 bg-accent/[0.02] p-8 md:p-10">
            <span className="mb-4 inline-block text-xs tracking-[0.15em] text-accent/70 uppercase">
              Procedural Mode
            </span>
            <h3 className="mb-4 text-xl font-medium tracking-tight text-foreground">
              Surgical workflows
            </h3>
            <p className="mb-6 text-base leading-relaxed text-muted-foreground">
              Captures surgical and procedural workflows with milestone-based documentation, generating operative notes with citation-linked evidence.
            </p>
            <div className="border-t border-accent/20 pt-6">
              <p className="text-sm text-muted-foreground/70">
                Procedure capture → Milestone tracking → Operative note
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
