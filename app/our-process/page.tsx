import type { Metadata } from "next"
import { PageShell } from "@/components/layout/PageShell"
import { PageHero } from "@/components/sections/PageHero"
import { CTASection } from "@/components/sections/CTASection"
import { ProcessContent } from "@/components/pages/ProcessContent"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Our Development Process",
  description: "Learn about WJB Technologies software development process from discovery and design to testing, deployment, and support.",
  keywords: ["software development process", "Agile development India", "SDLC"],
  path: "/our-process/",
})

const phases = [
  {
    phase: "01",
    title: "Discovery and Consultation",
    description: "We begin by understanding your business context, users, pain points, and success criteria. Stakeholder interviews, workflow mapping, and technical assessment form the foundation for a realistic project plan.",
    deliverables: ["Requirements summary", "Risk assessment", "High-level roadmap"],
  },
  {
    phase: "02",
    title: "Solution Design",
    description: "Architecture, technology stack, data models, and UI direction are defined collaboratively. Wireframes and prototypes validate user experience before significant development investment.",
    deliverables: ["Architecture blueprint", "UI wireframes", "Sprint plan"],
  },
  {
    phase: "03",
    title: "Agile Development",
    description: "Features are built in iterative sprints with regular demos and feedback. Code reviews, version control, and continuous integration maintain quality throughout delivery.",
    deliverables: ["Working increments", "Sprint demos", "Technical documentation"],
  },
  {
    phase: "04",
    title: "Quality Assurance",
    description: "Functional, regression, API, performance, and security testing validate readiness. Defects are triaged transparently with clear severity and resolution timelines.",
    deliverables: ["Test reports", "Bug resolution log", "Release checklist"],
  },
  {
    phase: "05",
    title: "Deployment and Handover",
    description: "Production rollout follows staging validation with deployment runbooks, environment configuration, and administrator training. Knowledge transfer ensures your team can operate confidently.",
    deliverables: ["Deployment guide", "Admin training", "Source code handover"],
  },
  {
    phase: "06",
    title: "Support and Evolution",
    description: "Post-launch maintenance addresses issues, applies updates, and implements agreed enhancements. Periodic reviews identify optimisation and modernisation opportunities.",
    deliverables: ["Support SLA", "Enhancement backlog", "Health reports"],
  },
]

export default function OurProcessPage() {
  return (
    <PageShell>
      <PageHero
        label="PROCESS — METHODOLOGY"
        title="Our Development Process"
        subtitle="A structured, transparent approach that reduces risk and keeps software delivery aligned with business goals."
      />
      <ProcessContent phases={phases} />
      <CTASection />
    </PageShell>
  )
}
