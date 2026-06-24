"use client"

import { motion } from "framer-motion"
import { company } from "@/lib/data"
import { ButtonLink } from "@/components/ui/button"

const highlights = [
  "Custom software tailored to your workflows",
  "Web, mobile, desktop, and cloud expertise",
  "Agile delivery with transparent communication",
  "Long-term support and modernisation capability",
]

export function AboutSection() {
  return (
    <section className="py-24 md:py-32 px-8 md:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">03 — ABOUT</p>
          <h2 className="font-sans text-3xl md:text-5xl font-light italic mb-6">Building Software That Powers Business Growth</h2>
          <p className="font-mono text-sm text-muted-foreground leading-relaxed mb-6">{company.description}</p>
          <p className="font-mono text-sm text-muted-foreground leading-relaxed mb-8">
            Established in {company.establishedYear} and rooted in {company.targetCountry}, {company.brandName} partners with organisations that need dependable technology—not generic templates. Through on-site and remote engagements nationwide, we deliver with clarity and craftsmanship.
          </p>
          <ButtonLink href="/about/">Learn More About Us</ButtonLink>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="space-y-4">
          {highlights.map((item, i) => (
            <div key={item} className="flex items-start gap-4 p-5 border border-white/10 rounded-xl bg-white/[0.02]">
              <span className="font-mono text-xs text-accent">0{i + 1}</span>
              <p className="font-mono text-sm text-muted-foreground">{item}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
