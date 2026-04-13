import { ImageResponse } from "next/og"

import { BrandIcon } from "@/lib/brand-icon"

export const runtime = "edge"

export async function GET() {
  const size = 180
  return new ImageResponse(<BrandIcon size={size} />, {
    width: size,
    height: size,
  })
}
