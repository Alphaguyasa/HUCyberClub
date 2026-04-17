import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Resources",
  description: "Explore tutorials, guides, cybersecurity tools like Wireshark, Metasploit, and Nmap, and access our full resource library.",
}

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
