"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import type { Service } from "@/lib/services"
import { ScrollReveal } from "@/components/ui/ScrollReveal"

interface ServicesListContentProps {
  services: Service[]
  categories: string[]
}

export function ServicesListContent({ services, categories }: ServicesListContentProps) {
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null)

  return (
    <section className="py-16 md:py-24 px-8 md:px-12">
      {categories.map((category, catIndex) => {
        const categoryServices = services.filter((s) => s.category === category)
        return (
          <div key={category} className="mb-20 last:mb-0">
            <ScrollReveal>
              <div className="flex items-end justify-between mb-10 pb-6 border-b border-white/10">
                <div>
                  <span className="font-mono text-xs text-accent">0{catIndex + 1}</span>
                  <h2 className="font-sans text-3xl md:text-5xl font-light italic mt-2">{category}</h2>
                </div>
                <span className="font-mono text-xs text-muted-foreground hidden md:block">
                  {categoryServices.length} SERVICES
                </span>
              </div>
            </ScrollReveal>

            <div className="space-y-0">
              {categoryServices.map((service, index) => (
                <ScrollReveal key={service.slug} delay={index * 0.04}>
                  <div
                    className="relative border-t border-white/10 py-8 md:py-10"
                    onMouseEnter={() => setHoveredSlug(service.slug)}
                    onMouseLeave={() => setHoveredSlug(null)}
                  >
                    <Link href={`/services/${service.slug}/`} data-cursor-hover className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                      <span className="font-mono text-xs text-muted-foreground w-12">0{index + 1}</span>
                      <motion.h3
                        className="font-sans text-3xl md:text-5xl lg:text-6xl font-light tracking-tight flex-1 group-hover:text-accent transition-colors duration-300"
                        animate={{ x: hoveredSlug === service.slug ? 12 : 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 22 }}
                      >
                        {service.title}
                      </motion.h3>
                      <p className="font-mono text-xs text-muted-foreground max-w-xs md:text-right hidden lg:block">
                        {service.shortDescription}
                      </p>
                      <motion.span animate={{ rotate: hoveredSlug === service.slug ? 45 : 0 }} className="flex-shrink-0">
                        <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-accent" />
                      </motion.span>
                    </Link>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        )
      })}
    </section>
  )
}
