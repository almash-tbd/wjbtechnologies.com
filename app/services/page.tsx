import type { Metadata } from "next"
import { PageShell } from "@/components/layout/PageShell"
import { PageHero } from "@/components/sections/PageHero"
import { CTASection } from "@/components/sections/CTASection"
import { ServicesListContent } from "@/components/pages/ServicesListContent"
import { buildMetadata } from "@/lib/seo"
import { services } from "@/lib/data"

export const metadata: Metadata = buildMetadata({
  title: "Software Development Services",
  description: "Explore comprehensive IT and software development services by WJB Technologies including web, mobile, cloud, and enterprise solutions.",
  keywords: ["software development services", "IT services India", "web development company"],
  path: "/services/",
})

const categories = [...new Set(services.map((s) => s.category))]

export default function ServicesPage() {
  return (
    <PageShell>
      <PageHero
        label="SERVICES — OVERVIEW"
        title="Software Development Services"
        subtitle="End-to-end technology services for businesses that need reliable, scalable, and thoughtfully engineered software."
      />
      <ServicesListContent services={services} categories={categories} />
      <CTASection />
    </PageShell>
  )
}
