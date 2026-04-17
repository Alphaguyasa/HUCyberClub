import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Events",
  description: "Join our upcoming cybersecurity workshops, CTF competitions, and skill enhancement events at Haramaya University.",
}

export default function EventsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
