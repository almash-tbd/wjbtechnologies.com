"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { Quote } from "lucide-react"
import { ScrollReveal } from "@/components/ui/ScrollReveal"

interface Testimonial {
  id: string
  name: string
  designation: string
  content: string
}

export function TestimonialsContent({ testimonials }: { testimonials: Testimonial[] }) {
  const featured = testimonials[0]
  const rest = testimonials.slice(1)
  const stripRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: stripRef, offset: ["start end", "end start"] })
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"])
  const smoothX = useSpring(x, { stiffness: 80, damping: 30 })

  return (
    <>
      <section className="py-20 md:py-28 px-8 md:px-12 border-b border-white/10">
        <ScrollReveal>
          <div className="max-w-5xl">
            <Quote className="w-12 h-12 text-accent/50 mb-8" />
            <blockquote className="font-sans text-2xl md:text-4xl lg:text-5xl font-light italic leading-snug text-foreground/90 mb-10">
              &ldquo;{featured.content}&rdquo;
            </blockquote>
            <div className="flex items-center gap-4 pt-8 border-t border-white/10">
              <div className="w-12 h-12 rounded-full border border-accent/40 flex items-center justify-center font-mono text-sm text-accent">
                {featured.name.charAt(0)}
              </div>
              <div>
                <p className="font-sans text-lg font-light">{featured.name}</p>
                <p className="font-mono text-xs text-muted-foreground">{featured.designation}</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section ref={stripRef} className="py-12 overflow-hidden border-b border-white/10 bg-white/[0.01]">
        <motion.div style={{ x: smoothX }} className="flex gap-16 px-8 md:px-12 whitespace-nowrap">
          {testimonials.map((t) => (
            <span key={t.id} className="font-sans text-3xl md:text-5xl font-light text-white/20 italic">
              {t.name} — {t.designation}
            </span>
          ))}
        </motion.div>
      </section>

      <section className="py-16 md:py-24 px-8 md:px-12">
        <div className="max-w-6xl columns-1 md:columns-2 gap-8 space-y-8">
          {rest.map((t, index) => (
            <ScrollReveal key={t.id} delay={index * 0.05} className="break-inside-avoid">
              <motion.div whileHover={{ y: -4 }} className="p-8 border border-white/10 rounded-2xl bg-white/[0.02]">
                <Quote className="w-6 h-6 text-accent/40 mb-4" />
                <p className="font-mono text-sm text-muted-foreground leading-relaxed mb-6">{t.content}</p>
                <div className="pt-4 border-t border-white/10">
                  <p className="font-sans text-base font-light">{t.name}</p>
                  <p className="font-mono text-[10px] text-muted-foreground mt-1">{t.designation}</p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  )
}
