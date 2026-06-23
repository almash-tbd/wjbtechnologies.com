"use client"

import { motion } from "framer-motion"
import { TestimonialCard } from "@/components/ui/TestimonialCard"
import { testimonials } from "@/lib/data"
import { ButtonLink } from "@/components/ui/button"

export function TestimonialsPreview() {
  const items = testimonials.slice(0, 3)

  return (
    <section className="py-24 md:py-32 px-8 md:px-12 border-t border-white/10">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">07 — TESTIMONIALS</p>
        <h2 className="font-sans text-3xl md:text-5xl font-light italic mb-4">What Clients Say</h2>
        <ButtonLink href="/testimonials/">Read All Testimonials</ButtonLink>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((t, index) => (
          <TestimonialCard key={t.id} name={t.name} designation={t.designation} content={t.content} index={index} />
        ))}
      </div>
    </section>
  )
}
