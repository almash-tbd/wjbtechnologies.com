"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ServiceCard } from "@/components/ui/ServiceCard"
import { ButtonLink } from "@/components/ui/button"
import { services, company } from "@/lib/data"

export function ServicesSection() {
  const highlighted = services.filter((s) => company.highlightedServices.includes(s.slug))

  return (
    <section className="py-24 md:py-32 px-8 md:px-12 border-t border-white/10">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">04 — SERVICES</p>
          <h2 className="font-sans text-3xl md:text-5xl font-light italic">What We Build</h2>
        </div>
        <ButtonLink href="/services/">View All Services</ButtonLink>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {highlighted.map((service, index) => (
          <ServiceCard key={service.slug} service={service} index={index} />
        ))}
      </div>
    </section>
  )
}
