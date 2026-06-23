import type { Metadata } from "next"
import { PageShell } from "@/components/layout/PageShell"
import { PageHero } from "@/components/sections/PageHero"
import { LegalContent } from "@/components/pages/LegalContent"
import { buildMetadata } from "@/lib/seo"
import { company } from "@/lib/data"

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  description: `Terms of Service for ${company.brandName} website and services.`,
  path: "/terms/",
})

const sections = [
  {
    title: "1. Acceptance of Terms",
    paragraphs: [`By accessing or using the website of ${company.brandName}, you agree to be bound by these Terms of Service. If you do not agree, please do not use our website or services.`],
  },
  {
    title: "2. Services Description",
    paragraphs: [`${company.brandName} provides software development, consulting, design, testing, and related technology services. Website content is for general information and does not constitute a binding offer until confirmed through a formal agreement.`],
  },
  {
    title: "3. Use of Website",
    paragraphs: ["You agree to use this website lawfully and not to attempt unauthorised access, introduce malicious code, scrape content excessively, or interfere with website operation. Form submissions must provide accurate information."],
  },
  {
    title: "4. Intellectual Property",
    paragraphs: [`All website content, including text, graphics, logos, and design elements, is owned by or licensed to ${company.brandName} and protected by applicable intellectual property laws. You may not reproduce or distribute content without prior written consent.`],
  },
  {
    title: "5. Project Engagements",
    paragraphs: ["Software development engagements are governed by separate proposals, statements of work, or contracts that define scope, fees, timelines, deliverables, and intellectual property ownership. These Terms of Service supplement but do not replace signed agreements."],
  },
  {
    title: "6. Limitation of Liability",
    paragraphs: [`To the fullest extent permitted by law, ${company.brandName} shall not be liable for indirect, incidental, or consequential damages arising from use of this website. Website content is provided "as is" without warranties of any kind.`],
  },
  {
    title: "7. Governing Law",
    paragraphs: ["These terms are governed by the laws of India. Disputes shall be subject to the exclusive jurisdiction of courts in Vadodara, Gujarat, unless otherwise agreed in writing."],
  },
  {
    title: "8. Contact",
    paragraphs: [`Questions regarding these terms may be directed to ${company.email}.`],
  },
]

export default function TermsPage() {
  return (
    <PageShell showCursor={false}>
      <PageHero variant="compact" label="LEGAL — TERMS" title="Terms of Service" subtitle={`Last updated: June 2026. Please read these terms carefully before using ${company.domain}.`} />
      <LegalContent sections={sections} />
    </PageShell>
  )
}
