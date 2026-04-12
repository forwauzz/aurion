/**
 * SectionBridge — renders a gradient div that transitions between two section
 * background colours, eliminating hard-cut edges between sections.
 *
 * Usage:
 *   <SectionBridge from="light" to="dark" />
 *   <SectionBridge from="dark" to="card" size="sm" />
 */

type SurfaceKey = "light" | "dark" | "card" | "muted"

const SURFACE: Record<SurfaceKey, string> = {
  light: "#F5F4F0",
  dark:  "#0B1F3A",
  card:  "#FAFAF8",
  muted: "#EDECE8",
}

interface SectionBridgeProps {
  from: SurfaceKey
  to: SurfaceKey
  /** sm = 48px  |  md = 80px  |  lg = 120px */
  size?: "sm" | "md" | "lg"
}

const HEIGHT: Record<string, string> = {
  sm: "48px",
  md: "80px",
  lg: "120px",
}

export function SectionBridge({ from, to, size = "md" }: SectionBridgeProps) {
  return (
    <div
      aria-hidden
      style={{
        height: HEIGHT[size],
        background: `linear-gradient(to bottom, ${SURFACE[from]}, ${SURFACE[to]})`,
        display: "block",
        width: "100%",
        // Pull up slightly to overlap the previous section's bottom padding
        // so there's no white gap between section bg and bridge
        marginTop: "-1px",
        marginBottom: "-1px",
      }}
    />
  )
}
