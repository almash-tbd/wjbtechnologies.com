import type { Metadata } from "next"
import { PageShell } from "@/components/layout/PageShell"
import { PageHero } from "@/components/sections/PageHero"
import { CTASection } from "@/components/sections/CTASection"
import { BlogListContent } from "@/components/pages/BlogListContent"
import { buildMetadata } from "@/lib/seo"
import { blogs } from "@/lib/data"

export const metadata: Metadata = buildMetadata({
  title: "Blog & Insights",
  description: "Articles on software development, technology trends, industry insights, and best practices from WJB Technologies.",
  keywords: ["software development blog", "IT insights India", "technology articles"],
  path: "/blog/",
})

export default function BlogPage() {
  return (
    <PageShell>
      <PageHero
        label="BLOG — INSIGHTS"
        title="Articles & Insights"
        subtitle="Perspectives on software development, technology strategy, and digital transformation for growing businesses."
      />
      <BlogListContent blogs={blogs} />
      <CTASection />
    </PageShell>
  )
}
