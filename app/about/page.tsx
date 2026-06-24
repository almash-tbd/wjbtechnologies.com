import type { Metadata } from "next"
import { PageShell } from "@/components/layout/PageShell"
import { AboutPageHero } from "@/components/sections/AboutPageHero"
import { CTASection } from "@/components/sections/CTASection"
import { AboutContent } from "@/components/pages/AboutContent"
import { buildMetadata } from "@/lib/seo"
import { company } from "@/lib/data"

export const metadata: Metadata = buildMetadata({
  title: "About Us",
  description: `Learn about ${company.brandName} — an India-based software development company established in ${company.establishedYear}, delivering custom technology solutions.`,
  keywords: ["about WJB Technologies", "software company India", "custom software company India"],
  path: "/about/",
})

export default function AboutPage() {
  return (
    <PageShell>
      <AboutPageHero />
      <AboutContent />
      <CTASection />
    </PageShell>
  )
}
