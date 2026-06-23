import type { Metadata } from "next"
import { PageShell } from "@/components/layout/PageShell"
import { PageHero } from "@/components/sections/PageHero"
import { LegalContent } from "@/components/pages/LegalContent"
import { buildMetadata } from "@/lib/seo"
import { company } from "@/lib/data"

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: `Privacy Policy for ${company.brandName}. Learn how we collect, use, and protect your information.`,
  path: "/privacy/",
})

const sections = [
  {
    title: "1. Introduction",
    paragraphs: [`${company.brandName} ("we", "our", "us") respects your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard information when you visit our website or contact us through forms or email.`],
  },
  {
    title: "2. Information We Collect",
    paragraphs: [
      "We may collect personal information that you voluntarily provide, including your name, email address, phone number, company name, job application materials, and message content when you submit inquiry or career forms.",
      "We may also collect non-personal information such as browser type, device information, pages visited, and approximate location derived from IP address for analytics and security purposes.",
    ],
  },
  {
    title: "3. How We Use Information",
    paragraphs: ["We use collected information to respond to inquiries, process job applications, provide requested services, improve our website, communicate project updates, and comply with applicable legal obligations."],
  },
  {
    title: "4. Information Sharing",
    paragraphs: ["We do not sell your personal information. We may share information with trusted service providers who assist in website hosting, email delivery, or recruitment processing, subject to confidentiality obligations. We may disclose information when required by law."],
  },
  {
    title: "5. Data Security",
    paragraphs: ["We implement reasonable administrative and technical measures to protect personal information. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security."],
  },
  {
    title: "6. Data Retention",
    paragraphs: ["We retain personal information only as long as necessary to fulfil the purposes described in this policy, unless a longer retention period is required by law or legitimate business needs."],
  },
  {
    title: "7. Your Rights",
    paragraphs: [`Depending on applicable law, you may request access, correction, or deletion of your personal information. To exercise these rights, contact us at ${company.email}.`],
  },
  {
    title: "8. Contact Us",
    paragraphs: [`For privacy-related questions, contact ${company.brandName} at ${company.email}.`],
  },
]

export default function PrivacyPage() {
  return (
    <PageShell showCursor={false}>
      <PageHero variant="compact" label="LEGAL — PRIVACY" title="Privacy Policy" subtitle={`Last updated: June 2026. This policy describes how ${company.brandName} handles information collected through ${company.domain}.`} />
      <LegalContent sections={sections} />
    </PageShell>
  )
}
