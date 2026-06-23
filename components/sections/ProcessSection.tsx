"use client"

import { motion } from "framer-motion"
import { ButtonLink } from "@/components/ui/button"

const steps = [
  { step: "01", title: "Discovery", description: "Understand goals, users, and technical landscape." },
  { step: "02", title: "Planning", description: "Define scope, architecture, and delivery milestones." },
  { step: "03", title: "Design", description: "Shape intuitive interfaces and system structure." },
  { step: "04", title: "Development", description: "Build iteratively with demos and feedback loops." },
  { step: "05", title: "Testing", description: "Validate quality, performance, and security." },
  { step: "06", title: "Launch", description: "Deploy, document, and support go-live." },
]

export function ProcessSection() {
  return (
    <section className="py-24 md:py-32 px-8 md:px-12 border-t border-white/10">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">06 — PROCESS</p>
        <h2 className="font-sans text-3xl md:text-5xl font-light italic mb-4">How We Deliver</h2>
        <ButtonLink href="/our-process/">View Full Process</ButtonLink>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map((item, index) => (
          <motion.div
            key={item.step}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="relative p-6 border border-white/10 rounded-2xl"
          >
            <span className="font-mono text-4xl text-accent/30">{item.step}</span>
            <h3 className="font-sans text-xl font-light mt-2 mb-2">{item.title}</h3>
            <p className="font-mono text-xs text-muted-foreground">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
