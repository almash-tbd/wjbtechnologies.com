import type { Metadata } from "next"
import { PageShell } from "@/components/layout/PageShell"
import { PageHero } from "@/components/sections/PageHero"
import { CTASection } from "@/components/sections/CTASection"
import { TestimonialsContent } from "@/components/pages/TestimonialsContent"
import { buildMetadata } from "@/lib/seo"
import { testimonials } from "@/lib/data"

export const metadata: Metadata = buildMetadata({
  title: "Client Testimonials",
  description: "Read client testimonials about WJB Technologies software development services and project delivery experience.",
  keywords: ["client testimonials", "software company reviews", "IT services feedback"],
  path: "/testimonials/",
})

export default function TestimonialsPage() {
  return (
    <PageShell>
      <PageHero
        label="TESTIMONIALS — CLIENTS"
        title="What Our Clients Say"
        subtitle="Feedback from professionals who have worked with us on software development initiatives."
      />
      <TestimonialsContent testimonials={testimonials} />
      <CTASection />
    </PageShell>
  )
}
