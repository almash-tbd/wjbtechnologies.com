import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import CareersClient from "./CareersClient"

export const metadata: Metadata = buildMetadata({
  title: "Careers",
  description: "Join WJB Technologies. Explore software development, design, and QA career opportunities in Vadodara and remote.",
  keywords: ["software jobs Vadodara", "IT careers India", "developer jobs"],
  path: "/careers/",
})

export default function CareersPage() {
  return <CareersClient />
}
