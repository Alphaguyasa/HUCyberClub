import { Geist, Geist_Mono } from "next/font/google"
import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import PageTransition from "@/components/page-transition"

export const metadata: Metadata = {
  title: {
    default: "Haramaya University Cyber Security Club",
    template: "%s | HU Cyber Security Club",
  },
  description: "Empowering the next generation of cybersecurity professionals at Haramaya University through learning, competitions, and community.",
  keywords: ["cybersecurity", "Haramaya University", "CTF", "ethical hacking", "network security", "cyber club"],
  authors: [{ name: "HU Cyber Security Club" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "HU Cyber Security Club",
    title: "Haramaya University Cyber Security Club",
    description: "Empowering the next generation of cybersecurity professionals.",
  },
}

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", geist.variable)}
    >
      <body>
        <ThemeProvider>
          <PageTransition />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
