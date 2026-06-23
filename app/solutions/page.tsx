import type { Metadata } from "next"
import { PageShell } from "@/components/layout/PageShell"
import { PageHero } from "@/components/sections/PageHero"
import { CTASection } from "@/components/sections/CTASection"
import { SolutionsListContent } from "@/components/pages/SolutionsListContent"
import { buildMetadata } from "@/lib/seo"
import { solutions } from "@/lib/data"

export const metadata: Metadata = buildMetadata({
  title: "Industry Solutions",
  description: "Explore industry-focused software solutions by WJB Technologies — SaaS, FinTech, Healthcare, and Retail & eCommerce platforms for Indian businesses.",
  keywords: ["industry software solutions", "SaaS development", "FinTech software", "healthcare software India"],
  path: "/solutions/",
})

export default function SolutionsPage() {
  return (
    <PageShell>
      <PageHero
        label="SOLUTIONS — INDUSTRIES"
        title="Industry Solutions"
        subtitle="Purpose-built software for the sectors where operational complexity, security, and user experience demand specialised engineering."
      />
      <SolutionsListContent solutions={solutions} />
      <CTASection />
    </PageShell>
  )
}
