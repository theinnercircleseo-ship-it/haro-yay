import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StickyCtaButton } from "@/components/sticky-cta-button"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: "HARO Links - Get Backlinks From Elite Publications That Don't Sell Links",
  description:
    "Secure high-authority backlinks from Forbes, Inc, Entrepreneur & top publications that never sell links. While competitors buy weak links, we earn editorial placements.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
      <body className="font-sans">
        <Header />
        <Suspense fallback={null}>{children}</Suspense>
        <Footer />
        <StickyCtaButton />
        <Analytics />
      </body>
    </html>
  )
}
