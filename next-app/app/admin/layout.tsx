import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Manage and monitor all aspects of the Haramaya University Cyber Security Club.",
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
