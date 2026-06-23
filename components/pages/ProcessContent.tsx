"use client"

import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/ui/ScrollReveal"

interface Phase {
  phase: string
  title: string
  description: string
  deliverables: string[]
}

export function ProcessContent({ phases }: { phases: Phase[] }) {
  return (
    <section className="py-16 md:py-24 px-8 md:px-12">
      <div className="max-w-5xl mx-auto relative">
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent -translate-x-1/2" />

        {phases.map((phase, index) => {
          const isLeft = index % 2 === 0
          return (
            <ScrollReveal key={phase.phase} delay={index * 0.05}>
              <div className={`relative mb-16 md:mb-24 last:mb-0 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16`}>
                <div className={`${isLeft ? "md:pr-12 md:text-right" : "md:pl-12 md:order-2"}`}>
                  <span className="font-mono text-5xl md:text-6xl text-accent/30">{phase.phase}</span>
                  <h2 className="font-sans text-2xl md:text-3xl font-light mt-2 mb-4">{phase.title}</h2>
                  <p className="font-mono text-sm text-muted-foreground leading-relaxed">{phase.description}</p>
                </div>

                <div className={`${isLeft ? "md:pl-12 md:order-2" : "md:pr-12 md:order-1"}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="p-6 md:p-8 border border-white/10 rounded-2xl bg-white/[0.02]"
                  >
                    <p className="font-mono text-xs tracking-widest text-muted-foreground mb-4">DELIVERABLES</p>
                    <ul className="space-y-3">
                      {phase.deliverables.map((d) => (
                        <li key={d} className="font-mono text-xs text-muted-foreground flex items-center gap-3">
                          <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-background" style={{ top: "2rem" }} />
              </div>
            </ScrollReveal>
          )
        })}
      </div>
    </section>
  )
}
