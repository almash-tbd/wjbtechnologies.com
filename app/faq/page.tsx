import type { Metadata } from "next"
import { PageShell } from "@/components/layout/PageShell"
import { PageHero } from "@/components/sections/PageHero"
import { CTASection } from "@/components/sections/CTASection"
import { FAQContent } from "@/components/pages/FAQContent"
import { buildMetadata } from "@/lib/seo"
import { faq } from "@/lib/data"

export const metadata: Metadata = buildMetadata({
  title: "Frequently Asked Questions",
  description: "Find answers to common questions about WJB Technologies software development services, process, and engagement models.",
  keywords: ["software development FAQ", "IT services questions", "WJB Technologies FAQ"],
  path: "/faq/",
})

export default function FAQPage() {
  return (
    <PageShell>
      <PageHero
        label="FAQ — QUESTIONS"
        title="Frequently Asked Questions"
        subtitle="Answers to common questions about our services, delivery approach, and how to get started."
      />
      <FAQContent categories={faq} />
      <CTASection />
    </PageShell>
  )
}
