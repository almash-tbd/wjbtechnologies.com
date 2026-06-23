"use client"

import { motion } from "framer-motion"
import { ContactForm } from "@/components/ui/ContactForm"
import { company } from "@/lib/data"

export function ContactSection() {
  return (
    <section className="py-24 md:py-32 px-8 md:px-12 border-t border-white/10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">09 — CONTACT</p>
          <h2 className="font-sans text-3xl md:text-5xl font-light italic mb-6">Quick Inquiry</h2>
          <p className="font-mono text-sm text-muted-foreground leading-relaxed mb-8">
            Tell us about your project requirements. Our team will review your inquiry and respond with next steps.
          </p>
          <div className="space-y-4 font-mono text-sm text-muted-foreground">
            <p><span className="text-accent">Email:</span> {company.email}</p>
            <p><span className="text-accent">Phone:</span> {company.phone}</p>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <ContactForm showServiceField />
        </motion.div>
      </div>
    </section>
  )
}
