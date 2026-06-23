"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { ScrollReveal } from "@/components/ui/ScrollReveal"

interface CTASectionProps {
  title?: string
  description?: string
  buttonText?: string
  buttonHref?: string
}

export function CTASection({
  title = "Ready to Build Your Next Software Solution?",
  description = "Share your requirements and our team will respond with a practical roadmap tailored to your business goals.",
  buttonText = "Get in Touch",
  buttonHref = "/contact/",
}: CTASectionProps) {
  return (
    <section className="py-20 md:py-28 px-8 md:px-12">
      <ScrollReveal>
        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
          className="relative p-10 md:p-16 border border-white/10 rounded-3xl bg-gradient-to-br from-white/[0.04] to-transparent overflow-hidden"
        >
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="relative max-w-3xl">
          <h2 className="font-sans text-3xl md:text-5xl font-light tracking-tight mb-4">{title}</h2>
          <p className="font-mono text-sm text-muted-foreground leading-relaxed mb-8">{description}</p>
          <Link
            href={buttonHref}
            data-cursor-hover
            className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 rounded-full font-mono text-xs tracking-widest uppercase hover:bg-white hover:text-black transition-colors duration-500"
          >
            {buttonText}
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
        </motion.div>
      </ScrollReveal>
    </section>
  )
}
