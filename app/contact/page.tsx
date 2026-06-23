import type { Metadata } from "next"
import { PageShell } from "@/components/layout/PageShell"
import { ContactPageHero } from "@/components/sections/ContactPageHero"
import { ContactContent } from "@/components/pages/ContactContent"
import { buildMetadata } from "@/lib/seo"
import { company } from "@/lib/data"

export const metadata: Metadata = buildMetadata({
  title: "Contact Us",
  description: `Contact ${company.brandName} for software development inquiries. Email ${company.email} or call ${company.phone}.`,
  keywords: ["contact WJB Technologies", "software development inquiry", "IT company contact Vadodara"],
  path: "/contact/",
})

export default function ContactPage() {
  return (
    <PageShell>
      <ContactPageHero />
      <ContactContent />
    </PageShell>
  )
}
