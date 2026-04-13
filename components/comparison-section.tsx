import { Fragment } from "react"

import { Link } from "@/i18n/navigation"
import { Button } from "@/components/ui/button"

/* ─────────────────────────────────────────────────────────────────────────── */
/*  ComparisonSection — Aurion vs audio-only AI scribes                        */
/*  Competitor data sourced from public product pages, April 2025              */
/* ─────────────────────────────────────────────────────────────────────────── */

type CapabilityStatus = "yes" | "no" | "partial"

interface CompetitorStatus {
  heidi: CapabilityStatus
  tali: CapabilityStatus
  mikata: CapabilityStatus
  dax: CapabilityStatus
  carewave: CapabilityStatus
  aurion: CapabilityStatus
}

interface CapabilityRow {
  group: string
  label: string
  sub: string
  aurionNote?: string
  status: CompetitorStatus
}

const ROWS: CapabilityRow[] = [
  /* ── Foundation ── */
  {
    group: "Foundation",
    label: "Clinician–patient conversation",
    sub: "Audio transcription of spoken dialogue",
    status: { heidi: "yes", tali: "yes", mikata: "yes", dax: "yes", carewave: "yes", aurion: "yes" },
  },
  {
    group: "Foundation",
    label: "Structured note output",
    sub: "SOAP or specialty-aware note draft",
    status: { heidi: "yes", tali: "yes", mikata: "yes", dax: "yes", carewave: "yes", aurion: "yes" },
  },
  {
    group: "Foundation",
    label: "Specialty templates",
    sub: "Configurable note templates per specialty",
    status: { heidi: "yes", tali: "partial", mikata: "yes", dax: "yes", carewave: "yes", aurion: "yes" },
  },

  /* ── The visual gap ── */
  {
    group: "Where audio stops",
    label: "Physical exam capture",
    sub: "Gait, ROM, palpation — documented from observation, not dictation",
    aurionNote: "POV visual capture during examination",
    status: { heidi: "no", tali: "no", mikata: "no", dax: "no", carewave: "no", aurion: "yes" },
  },
  {
    group: "Where audio stops",
    label: "Imaging reviewed on screen",
    sub: "X-ray, MRI, CT — captured from what the clinician is looking at",
    aurionNote: "Screen capture correlated to note section",
    status: { heidi: "no", tali: "no", mikata: "no", dax: "no", carewave: "no", aurion: "yes" },
  },
  {
    group: "Where audio stops",
    label: "Lab values on screen",
    sub: "Results reviewed in EMR captured in context — no dictation required",
    aurionNote: "Screen-sourced, mapped to relevant note section",
    status: { heidi: "no", tali: "no", mikata: "no", dax: "no", carewave: "no", aurion: "yes" },
  },
  {
    group: "Where audio stops",
    label: "Hands-free / POV capture",
    sub: "Smart glasses or wearable — clinician never touches a device during the visit",
    aurionNote: "Smart glasses preferred; body cam fallback",
    status: { heidi: "no", tali: "no", mikata: "no", dax: "no", carewave: "no", aurion: "yes" },
  },

  /* ── Privacy & trust ── */
  {
    group: "Privacy & trust",
    label: "On-device PHI masking",
    sub: "Identifiable data masked before any downstream processing",
    aurionNote: "Raw media deleted after on-device processing",
    status: { heidi: "partial", tali: "no", mikata: "no", dax: "no", carewave: "no", aurion: "yes" },
  },
  {
    group: "Privacy & trust",
    label: "Source-grounded note citations",
    sub: "Every note claim traceable to its transcript or visual source",
    aurionNote: "Full citation anchoring — auditable by default",
    status: { heidi: "no", tali: "no", mikata: "no", dax: "no", carewave: "no", aurion: "yes" },
  },

  /* ── Procedural ── */
  {
    group: "Beyond the clinic",
    label: "Procedural / operative documentation",
    sub: "Milestone capture and operative note generation for OR workflows",
    aurionNote: "Ops Mode — milestone detection, post-op note",
    status: { heidi: "no", tali: "no", mikata: "no", dax: "no", carewave: "no", aurion: "yes" },
  },
]

const COMPETITORS = [
  { key: "heidi",    name: "Heidi",    note: "Health"   },
  { key: "tali",     name: "Tali",     note: "AI"       },
  { key: "mikata",   name: "Mikata",   note: "Health"   },
  { key: "dax",      name: "DAX",      note: "Copilot"  },
  { key: "carewave", name: "CAREWAY",  note: ""         },
] as const

/* Icon components — inline SVG for zero dependency */
function IconCheck({ aurion = false }: { aurion?: boolean }) {
  return (
    <svg
      width="15" height="15" viewBox="0 0 15 15" fill="none"
      aria-hidden
      className={aurion ? "text-accent" : "text-foreground/45"}
    >
      <path
        d="M11.5 3.5L6 9.5 3.5 7"
        stroke="currentColor" strokeWidth="1.5"
        strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  )
}

function IconMinus() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden className="text-foreground/20">
      <path d="M3 7h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function IconPartial() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden className="text-foreground/35">
      <path d="M3 7h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 1.5" />
    </svg>
  )
}

function Cell({ status, aurion = false }: { status: CapabilityStatus; aurion?: boolean }) {
  return (
    <td
      className={`px-4 py-3.5 text-center ${
        aurion
          ? "bg-[#0B1F3A]"
          : ""
      }`}
    >
      <span className="flex items-center justify-center">
        {status === "yes"     && <IconCheck aurion={aurion} />}
        {status === "no"      && <IconMinus />}
        {status === "partial" && <IconPartial />}
      </span>
    </td>
  )
}

export function ComparisonSection() {
  /* Group rows by section */
  const groups = ROWS.reduce<Record<string, CapabilityRow[]>>((acc, row) => {
    if (!acc[row.group]) acc[row.group] = []
    acc[row.group].push(row)
    return acc
  }, {})

  const groupEntries = Object.entries(groups)

  return (
    <section className="bg-background px-0 py-20 md:py-28">
      <div className="mx-auto max-w-[1100px] px-6 md:px-8">

        {/* Header */}
        <p className="text-xs font-semibold tracking-[0.3em] text-foreground/70 uppercase">
          How Aurion compares
        </p>
        <h2 className="mt-5 max-w-[680px] font-serif text-4xl leading-[1.15] tracking-tight text-foreground md:text-5xl text-balance">
          Audio-only scribes capture half the encounter. Aurion captures all of it.
        </h2>
        <div className="mt-6 h-px w-10 bg-accent" />
        <p className="mt-7 max-w-[620px] text-base leading-[1.8] text-foreground/80 md:text-lg">
          Every scribe on this list captures what is said. None captures what is seen — the physical exam, the imaging on screen, the labs reviewed in real time. That is the gap Aurion closes.
        </p>
      </div>

      {/* Table — horizontal scroll on mobile */}
      <div className="mt-12 overflow-x-auto">
        <div className="mx-auto min-w-[780px] max-w-[1100px] px-6 md:min-w-[860px] md:px-8">
          <table className="w-full border-collapse text-sm md:text-base">

            {/* Column headers */}
            <thead>
              <tr>
                {/* Feature column header */}
                <th className="sticky left-0 z-20 w-[280px] bg-background pb-4 pr-6 text-left">
                  <span className="text-[11px] tracking-[0.25em] text-foreground/65 uppercase font-medium">
                    Capability
                  </span>
                </th>

                {/* Competitor headers */}
                {COMPETITORS.map(({ key, name, note }) => (
                  <th
                    key={key}
                    className="w-[100px] px-4 pb-4 text-center font-normal"
                  >
                    <span className="block text-xs font-semibold text-foreground/75 leading-tight">
                      {name}
                    </span>
                    <span className="block text-[10px] text-foreground/45 leading-tight">
                      {note}
                    </span>
                  </th>
                ))}

                {/* Aurion header — dark navy, elevated */}
                <th className="w-[100px] rounded-t-sm bg-[#0B1F3A] px-4 pb-4 text-center font-normal">
                  <span className="block text-xs font-semibold text-[#F5F4F0] leading-tight tracking-wide">
                    Aurion
                  </span>
                  <span className="block text-[10px] text-accent leading-tight mt-0.5">
                    Full capture
                  </span>
                </th>
              </tr>

              {/* Gold top border only on Aurion column — via a decoration row */}
              <tr aria-hidden>
                <td colSpan={COMPETITORS.length + 1} className="p-0" />
                <td className="p-0 bg-[#0B1F3A]">
                  <div className="h-[2px] bg-accent" />
                </td>
              </tr>
            </thead>

            <tbody>
              {groupEntries.map(([group, rows], groupIdx) => (
                <Fragment key={`group-block-${group}`}>
                  {/* Group separator row */}
                  <tr>
                    <td
                      colSpan={COMPETITORS.length + 2}
                      className={`${groupIdx === 0 ? "pt-0" : "pt-8"} pb-2 pr-6`}
                    >
                      <div className="flex items-center gap-3 pt-6">
                        {groupIdx !== 0 && <div className="h-px flex-1 bg-border/30" />}
                        <span
                          className={`text-[11px] tracking-[0.2em] uppercase font-semibold whitespace-nowrap ${
                            group === "Where audio stops"
                              ? "text-accent/70"
                              : "text-foreground/55"
                          }`}
                        >
                          {group}
                        </span>
                        <div className="h-px flex-1 bg-border/30" />
                      </div>
                    </td>
                  </tr>

                  {/* Capability rows */}
                  {rows.map((row, rowIdx) => (
                    <tr
                      key={row.label}
                      className={`group border-b border-border/20 transition-colors hover:bg-foreground/[0.02] ${
                        rowIdx === rows.length - 1 ? "border-b-0" : ""
                      }`}
                    >
                      {/* Feature label */}
                      <td className="sticky left-0 z-10 bg-background py-4 pr-6 align-top">
                        <p className="text-[15px] font-semibold text-foreground leading-snug">
                          {row.label}
                        </p>
                        <p className="mt-1 text-[13px] leading-snug text-foreground/70">
                          {row.sub}
                        </p>
                        {row.aurionNote && (
                          <p className="mt-1 text-[12px] leading-snug text-accent/85 italic">
                            Aurion: {row.aurionNote}
                          </p>
                        )}
                      </td>

                      {/* Competitor cells */}
                      {COMPETITORS.map(({ key }) => (
                        <Cell
                          key={key}
                          status={row.status[key as keyof CompetitorStatus]}
                        />
                      ))}

                      {/* Aurion cell */}
                      <Cell status={row.status.aurion} aurion />
                    </tr>
                  ))}
                </Fragment>
              ))}
              {/* Bottom cap on Aurion column */}
              <tr aria-hidden>
                <td colSpan={COMPETITORS.length + 1} className="p-0" />
                <td className="p-0 bg-[#0B1F3A] rounded-b-sm">
                  <div className="h-4" />
                </td>
              </tr>
            </tbody>
          </table>

          {/* Legend */}
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-border/20 pt-5">
            <p className="text-[10px] tracking-[0.2em] text-foreground/55 uppercase">Legend</p>
            <span className="flex items-center gap-1.5 text-[13px] text-foreground/70">
              <IconCheck /> Yes
            </span>
            <span className="flex items-center gap-1.5 text-[13px] text-foreground/70">
              <IconPartial /> Partial
            </span>
            <span className="flex items-center gap-1.5 text-[13px] text-foreground/70">
              <IconMinus /> No
            </span>
            <p className="ml-auto text-xs text-foreground/55 italic">
              Based on public product pages · April 2025
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-14 px-6 md:px-8 mx-auto max-w-[1100px]">
        <div className="border border-border/30 bg-card p-8 md:flex md:items-center md:justify-between md:p-10">
          <div>
            <p className="font-serif text-2xl text-foreground md:text-3xl text-balance max-w-[520px]">
              See what a note built from the full encounter looks like.
            </p>
            <p className="mt-2 text-sm text-foreground/75 md:text-base">
              Free to start — no credit card required.
            </p>
          </div>
          <div className="mt-6 flex w-full flex-wrap gap-3 md:mt-0 md:w-auto md:shrink-0">
            <Button
              asChild
              size="lg"
              className="w-full rounded-none bg-[#0B1F3A] px-7 text-sm font-semibold tracking-wide text-[#F5F4F0] transition-all hover:bg-[#0B1F3A]/85 sm:w-auto"
            >
              <Link href="/pricing">Start free</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full rounded-none border-foreground/35 px-7 text-sm font-semibold tracking-wide transition-all hover:bg-foreground/5 sm:w-auto"
            >
              <Link href="/waitlist">Book a demo</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
