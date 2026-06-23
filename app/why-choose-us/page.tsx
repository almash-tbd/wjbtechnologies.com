import type { Metadata } from "next"
import { PageShell } from "@/components/layout/PageShell"
import { PageHero } from "@/components/sections/PageHero"
import { CTASection } from "@/components/sections/CTASection"
import { WhyChooseContent } from "@/components/pages/WhyChooseContent"
import { buildMetadata } from "@/lib/seo"
import { company } from "@/lib/data"

export const metadata: Metadata = buildMetadata({
  title: "Why Choose Us",
  description: `Discover why businesses choose ${company.brandName} for software development — expertise, transparency, and long-term partnership.`,
  keywords: ["why choose WJB Technologies", "best software company India"],
  path: "/why-choose-us/",
})

export default function WhyChooseUsPage() {
  return (
    <PageShell>
      <PageHero
        label="WHY US — ADVANTAGES"
        title="Why Choose WJB Technologies"
        subtitle="Partnership, craftsmanship, and clarity—the qualities that define how we work with every client."
      />
      <WhyChooseContent />
      <CTASection />
    </PageShell>
  )
}
