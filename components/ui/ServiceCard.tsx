"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import type { Service } from "@/lib/services"

interface ServiceCardProps {
  service: Pick<Service, "slug" | "title" | "shortDescription" | "category">
  index?: number
}

export function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link
        href={`/services/${service.slug}/`}
        data-cursor-hover
        className="group block p-6 md:p-8 border border-white/10 rounded-2xl bg-white/[0.02] hover:border-accent/50 hover:bg-white/[0.04] transition-all duration-300"
      >
        <div className="flex items-start justify-between mb-4">
          <span className="font-mono text-[10px] tracking-widest text-accent px-3 py-1 border border-accent/30 rounded-full">
            {service.category}
          </span>
          <motion.span animate={{ rotate: hovered ? 45 : 0 }} transition={{ duration: 0.2 }}>
            <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent" />
          </motion.span>
        </div>
        <h3 className="font-sans text-xl md:text-2xl font-light mb-3 group-hover:text-accent transition-colors">{service.title}</h3>
        <p className="font-mono text-xs text-muted-foreground leading-relaxed">{service.shortDescription}</p>
      </Link>
    </motion.div>
  )
}
