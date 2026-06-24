import type { Metadata } from "next"
import { PageShell } from "@/components/layout/PageShell"
import { ContactPageHero } from "@/components/sections/ContactPageHero"
import { ContactContent } from "@/components/pages/ContactContent"
import { buildMetadata } from "@/lib/seo"
import { company } from "@/lib/data"

export const metadata: Metadata = buildMetadata({
  title: "Contact Us",
  description: `Contact ${company.brandName} for custom software development inquiries. Reach us via email at ${company.email} or send an inquiry online.`,
  keywords: ["contact WJB Technologies", "software development inquiry", "custom software development India"],
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
