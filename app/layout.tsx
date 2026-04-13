import { Analytics } from "@vercel/analytics/next"
import { Inter, Playfair_Display } from "next/font/google"

import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

/**
 * Root shell only — locale, `<html lang>`, and copy live under `app/[locale]/`.
 * @see docs/i18n.md
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const enableVercelAnalytics = process.env.NODE_ENV === "production" && process.env.VERCEL === "1"

  return (
    <html
      className={`${inter.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased">
        {children}
        {enableVercelAnalytics && <Analytics />}
      </body>
    </html>
  )
}
