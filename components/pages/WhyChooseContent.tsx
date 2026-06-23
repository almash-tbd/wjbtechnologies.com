"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { ScrollReveal } from "@/components/ui/ScrollReveal"

const reasons = [
  { title: "Proven Delivery Discipline", description: "Structured discovery, Agile sprints, and transparent milestones keep projects on track. You always know what is being built, why it matters, and when to expect results." },
  { title: "Full-Stack Capability", description: "Web, mobile, desktop, cloud, APIs, databases, UI/UX, testing, and support — under one roof. Reduce vendor fragmentation and maintain architectural coherence." },
  { title: "India-Focused, Global-Ready", description: "Based in Vadodara with experience serving Indian business practices, GST-aware systems, and mobile-first users, while building platforms ready for international scale." },
  { title: "Business-Aligned Engineering", description: "We translate operational pain points into software that teams actually adopt. Solutions are designed around workflows, not abstract feature lists." },
  { title: "Maintainable Codebase", description: "Clean architecture, documentation, and version control practices ensure your software remains extensible long after initial launch." },
  { title: "Responsive Support", description: "Post-launch maintenance, enhancements, and consultation keep your investment protected as requirements evolve." },
  { title: "Honest Recommendations", description: "We advise on build-vs-buy, technology choices, and phasing without pushing unnecessary complexity or oversized scope." },
  { title: "Long-Term Partnership Mindset", description: "Since 2011, we have approached client relationships as ongoing collaborations, not one-off transactions." },
]

export function WhyChooseContent() {
  const stripRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: stripRef, offset: ["start end", "end start"] })
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-35%"])
  const smoothX = useSpring(x, { stiffness: 80, damping: 30 })

  return (
    <>
      <section ref={stripRef} className="py-16 overflow-hidden border-b border-white/10">
        <motion.div style={{ x: smoothX }} className="flex gap-12 md:gap-20 px-8 md:px-12 whitespace-nowrap">
          {reasons.map((r, i) => (
            <span
              key={r.title}
              className="font-sans text-4xl md:text-6xl font-light"
              style={{ WebkitTextStroke: i % 2 === 0 ? "none" : "1px rgba(255,255,255,0.2)", color: i % 2 === 0 ? "inherit" : "transparent" }}
            >
              {r.title}
            </span>
          ))}
        </motion.div>
      </section>

      <section className="py-8">
        {reasons.map((reason, index) => {
          const isEven = index % 2 === 0
          return (
            <ScrollReveal key={reason.title}>
              <div className={`py-16 md:py-20 px-8 md:px-12 border-b border-white/10 ${isEven ? "" : "bg-white/[0.015]"}`}>
                <div className={`max-w-6xl mx-auto flex flex-col ${isEven ? "md:items-start" : "md:items-end md:text-right"}`}>
                  <span className="font-mono text-xs text-accent mb-4">0{index + 1}</span>
                  <h2 className="font-sans text-3xl md:text-5xl font-light italic max-w-3xl mb-6">{reason.title}</h2>
                  <p className={`font-mono text-sm text-muted-foreground leading-relaxed max-w-2xl ${isEven ? "" : "md:ml-auto"}`}>
                    {reason.description}
                  </p>
                  <motion.div
                    className={`mt-8 h-px bg-gradient-to-r from-accent/50 to-transparent ${isEven ? "w-32" : "w-32 md:ml-auto"}`}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{ originX: isEven ? 0 : 1 }}
                  />
                </div>
              </div>
            </ScrollReveal>
          )
        })}
      </section>
    </>
  )
}
