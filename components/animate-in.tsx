"use client"

import { useEffect, useRef, ReactNode, CSSProperties } from "react"

interface AnimateInProps {
  children: ReactNode
  className?: string
  /** Milliseconds before animation starts — use for staggering siblings */
  delay?: number
  /** Entry direction */
  direction?: "up" | "left" | "right" | "fade"
  /** IntersectionObserver threshold — 0 to 1 */
  threshold?: number
  /** How far to shift before animating in (px) */
  distance?: number
  /** Transition duration in ms */
  duration?: number
  style?: CSSProperties
}

const TRANSLATE: Record<string, string> = {
  up:    "translateY(VAR)",
  left:  "translateX(-VAR)",
  right: "translateX(VAR)",
  fade:  "none",
}

export function AnimateIn({
  children,
  className = "",
  delay = 0,
  direction = "up",
  threshold = 0.1,
  distance = 28,
  duration = 750,
  style,
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // If reduced-motion is preferred, skip animation entirely
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.opacity = "1"
      el.style.transform = "none"
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.opacity = "1"
            el.style.transform = "none"
          }, delay)
          observer.disconnect()
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay, threshold])

  const initialTransform =
    direction === "fade"
      ? "none"
      : TRANSLATE[direction].replace("VAR", `${distance}px`)

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: 0,
        transform: initialTransform,
        transition: `opacity ${duration}ms cubic-bezier(0.4,0,0.2,1), transform ${duration}ms cubic-bezier(0.4,0,0.2,1)`,
        willChange: "opacity, transform",
        ...style,
      }}
    >
      {children}
    </div>
  )
}
