"use client"

import { motion } from "framer-motion"
import { ButtonLink } from "@/components/ui/button"

const reasons = [
  { title: "Experienced Engineering Team", description: "Skilled developers, designers, and consultants with cross-industry delivery experience across India." },
  { title: "Business-First Approach", description: "We align technical decisions with operational outcomes, not buzzwords or unnecessary complexity." },
  { title: "Transparent Delivery", description: "Structured milestones, regular demos, and honest communication keep projects predictable." },
  { title: "End-to-End Capability", description: "From discovery and design to development, testing, deployment, and ongoing support." },
  { title: "Modern Technology Stack", description: "Proven frameworks and cloud platforms chosen for maintainability and long-term value." },
  { title: "Dedicated Support", description: "Post-launch maintenance and enhancement options to protect your software investment." },
]

export function WhyChooseSection() {
  return (
    <section className="py-24 md:py-32 px-8 md:px-12 border-t border-white/10">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">05 — WHY US</p>
        <h2 className="font-sans text-3xl md:text-5xl font-light italic mb-4">Why Choose WJB Technologies</h2>
        <ButtonLink href="/why-choose-us/">Explore All Reasons</ButtonLink>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((reason, index) => (
          <motion.div
            key={reason.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="p-6 border border-white/10 rounded-2xl bg-white/[0.02]"
          >
            <span className="font-mono text-xs text-accent">0{index + 1}</span>
            <h3 className="font-sans text-xl font-light mt-3 mb-3">{reason.title}</h3>
            <p className="font-mono text-xs text-muted-foreground leading-relaxed">{reason.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
