import type { CSSProperties } from "react"

type BrandIconProps = {
  size: number
}

export function BrandIcon({ size }: BrandIconProps) {
  const labelSize = Math.round(size * 0.46)
  const border = Math.max(2, Math.round(size * 0.045))

  const container: CSSProperties = {
    width: `${size}px`,
    height: `${size}px`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#0B1F3A",
    border: `${border}px solid #C9A66B`,
    borderRadius: `${Math.round(size * 0.16)}px`,
    color: "#F5F4F0",
    fontSize: `${labelSize}px`,
    fontWeight: 700,
    fontFamily: "Inter, Arial, sans-serif",
    letterSpacing: `${Math.max(0, Math.round(size * 0.012))}px`,
    lineHeight: 1,
  }

  return <div style={container}>A</div>
}
