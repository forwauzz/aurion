import { NextResponse } from "next/server"

export const runtime = "edge"

export async function GET(request: Request) {
  return NextResponse.redirect(new URL("/icon-32x32", request.url), 307)
}
