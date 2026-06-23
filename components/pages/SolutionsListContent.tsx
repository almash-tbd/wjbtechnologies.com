"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight, ChevronRight } from "lucide-react"
import type { Solution } from "@/lib/solutions"
import { SolutionIcon } from "@/components/ui/SolutionIcon"
import { ScrollReveal } from "@/components/ui/ScrollReveal"

interface SolutionsListContentProps {
  solutions: Solution[]
}

export function SolutionsListContent({ solutions }: SolutionsListContentProps) {
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null)

  return (
    <section className="py-16 md:py-24 px-8 md:px-12">
      <div className="max-w-4xl mx-auto space-y-4">
        {solutions.map((solution, index) => (
          <ScrollReveal key={solution.slug} delay={index * 0.06}>
            <Link
              href={`/solutions/${solution.slug}/`}
              data-cursor-hover
              onMouseEnter={() => setHoveredSlug(solution.slug)}
              onMouseLeave={() => setHoveredSlug(null)}
              className={`group flex items-center gap-5 p-5 md:p-6 rounded-2xl border transition-all duration-300 ${
                hoveredSlug === solution.slug
                  ? "border-white/40 bg-white/[0.04]"
                  : "border-white/10 bg-white/[0.02] hover:border-white/25"
              }`}
            >
              <div className="flex-shrink-0 w-11 h-11 rounded-xl border border-white/15 bg-white/[0.04] flex items-center justify-center text-foreground">
                <SolutionIcon name={solution.icon} className="w-5 h-5" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-1">
                  <h2 className="font-sans text-lg md:text-xl font-medium text-foreground">{solution.title}</h2>
                  {solution.popular && (
                    <span className="font-mono text-[10px] tracking-wider text-foreground px-2.5 py-0.5 border border-white/30 rounded-full">
                      Popular
                    </span>
                  )}
                </div>
                <p className="font-mono text-xs text-muted-foreground">{solution.shortDescription}</p>
              </div>

              <motion.div animate={{ x: hoveredSlug === solution.slug ? 4 : 0 }} className="flex-shrink-0">
                <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
              </motion.div>
            </Link>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal className="mt-16 max-w-4xl mx-auto">
        <div className="p-8 border border-white/10 rounded-2xl bg-white/[0.02]">
          <p className="font-mono text-xs tracking-widest text-accent mb-3">NOT SURE WHERE TO START?</p>
          <p className="font-mono text-sm text-muted-foreground leading-relaxed mb-6">
            Every solution engagement begins with discovery. Tell us about your industry, users, and goals—we will recommend the right technical path.
          </p>
          <Link
            href="/contact/"
            data-cursor-hover
            className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-foreground hover:text-accent transition-colors"
          >
            Contact Us
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </ScrollReveal>
    </section>
  )
}
