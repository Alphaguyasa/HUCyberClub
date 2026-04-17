import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about the Haramaya University Cyber Security Club's mission, vision, key objectives, and dedicated team members.",
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
