export function PrivacySection() {
  return (
    <section className="px-6 py-40 md:py-56">
      <div className="mx-auto max-w-[800px] text-center">
        {/* Thin divider */}
        <div className="mx-auto mb-32 h-px w-24 bg-border/50"></div>

        {/* Title */}
        <h2 className="font-serif text-3xl text-foreground md:text-4xl lg:text-[2.5rem]">
          Built for clinical environments
        </h2>

        {/* Bullets */}
        <div className="mt-20 space-y-6">
          <p className="text-lg leading-[1.8] text-muted-foreground/70">
            No identifiable visual data is retained
          </p>
          <p className="text-lg leading-[1.8] text-muted-foreground/70">
            Processing preserves patient privacy
          </p>
          <p className="text-lg leading-[1.8] text-muted-foreground/70">
            Only the final clinical note is exported
          </p>
        </div>
      </div>
    </section>
  )
}
