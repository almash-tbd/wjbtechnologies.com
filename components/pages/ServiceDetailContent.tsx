"use client"

import { useRef, useState } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { ArrowUpRight, Users, Layers, Package } from "lucide-react"
import type { EnrichedService } from "@/lib/data"
import { ContactForm } from "@/components/ui/ContactForm"
import { ScrollReveal } from "@/components/ui/ScrollReveal"

interface ServiceDetailContentProps {
  service: EnrichedService
  related: EnrichedService[]
}

function TechMarquee({ items, direction = "left" }: { items: string[]; direction?: "left" | "right" }) {
  const duplicated = [...items, ...items, ...items, ...items]
  return (
    <div className="relative overflow-hidden py-3">
      <div className={`flex gap-8 whitespace-nowrap ${direction === "left" ? "animate-marquee-left" : "animate-marquee-right"}`} style={{ width: "fit-content" }}>
        {duplicated.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="font-sans text-2xl md:text-3xl lg:text-4xl font-light tracking-tight cursor-default transition-all duration-300 hover:text-white"
            style={{ WebkitTextStroke: "1px rgba(255,255,255,0.25)", color: "transparent" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "white"
              e.currentTarget.style.WebkitTextStroke = "none"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "transparent"
              e.currentTarget.style.WebkitTextStroke = "1px rgba(255,255,255,0.25)"
            }}
          >
            {item.toUpperCase()}
            <span className="mx-6 md:mx-10 text-white/15">/</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export function ServiceDetailContent({ service, related }: ServiceDetailContentProps) {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)
  const featureStripRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: featureStripRef, offset: ["start end", "end start"] })
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-28%"])
  const smoothX = useSpring(x, { stiffness: 80, damping: 30 })

  const techRow1 = service.technologies.slice(0, Math.ceil(service.technologies.length / 2))
  const techRow2 = service.technologies.slice(Math.ceil(service.technologies.length / 2))
  const leadQuote = service.heroSubtitle || service.shortDescription

  return (
    <>
      {/* Lead */}
      <section className="py-12 md:py-16 px-8 md:px-12 border-b border-white/10">
        <ScrollReveal className="max-w-4xl">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="font-mono text-[10px] tracking-widest text-accent px-4 py-1.5 border border-accent/40 rounded-full">
              {service.category}
            </span>
            <span className="font-mono text-[10px] tracking-widest text-muted-foreground px-4 py-1.5 border border-white/10 rounded-full">
              {service.features.length} CAPABILITIES
            </span>
            <span className="font-mono text-[10px] tracking-widest text-muted-foreground px-4 py-1.5 border border-white/10 rounded-full">
              {service.process.length} PHASE DELIVERY
            </span>
          </div>
          <p className="font-sans text-lg md:text-xl lg:text-2xl font-light italic leading-relaxed text-foreground/90">
            {leadQuote}
          </p>
        </ScrollReveal>
      </section>

      {/* Who it's for + industries */}
      {(service.whoItsFor.length > 0 || service.industries.length > 0) && (
        <section className="py-14 md:py-20 px-8 md:px-12 border-b border-white/10 bg-white/[0.01]">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {service.whoItsFor.length > 0 && (
              <ScrollReveal>
                <div className="flex items-center gap-3 mb-6">
                  <Users className="w-5 h-5 text-accent" />
                  <h2 className="font-sans text-xl md:text-2xl font-light italic">Who It&apos;s For</h2>
                </div>
                <ul className="space-y-4">
                  {service.whoItsFor.map((item, i) => (
                    <li key={item} className="flex items-start gap-3 font-mono text-sm text-muted-foreground">
                      <span className="text-accent font-mono text-xs mt-0.5">0{i + 1}</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            )}
            {service.industries.length > 0 && (
              <ScrollReveal delay={0.1}>
                <p className="font-mono text-xs tracking-widest text-muted-foreground mb-6">INDUSTRIES WE SERVE</p>
                <div className="flex flex-wrap gap-2">
                  {service.industries.map((industry) => (
                    <span key={industry} className="font-mono text-xs px-4 py-2 border border-white/15 rounded-full text-muted-foreground">
                      {industry}
                    </span>
                  ))}
                </div>
              </ScrollReveal>
            )}
          </div>
        </section>
      )}

      {/* Use cases */}
      {service.useCases.length > 0 && (
        <section className="py-14 md:py-20 px-8 md:px-12 border-b border-white/10">
          <ScrollReveal className="mb-10 max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-2">
              <Layers className="w-5 h-5 text-accent" />
              <h2 className="font-sans text-xl md:text-2xl font-light italic">Common Use Cases</h2>
            </div>
            <p className="font-mono text-sm text-muted-foreground">Practical scenarios where {service.title.toLowerCase()} delivers value.</p>
          </ScrollReveal>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.useCases.map((useCase, i) => (
              <ScrollReveal key={useCase.title} delay={i * 0.05}>
                <div className="p-6 md:p-7 border border-white/10 rounded-2xl bg-white/[0.02] h-full hover:border-accent/30 transition-colors">
                  <span className="font-mono text-xs text-accent">0{i + 1}</span>
                  <h3 className="font-sans text-lg font-light mt-2 mb-3">{useCase.title}</h3>
                  <p className="font-mono text-xs text-muted-foreground leading-relaxed">{useCase.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      )}

      {/* Feature titles — horizontal parallax strip */}
      <section ref={featureStripRef} className="py-10 md:py-14 overflow-hidden border-b border-white/10 bg-white/[0.01]">
        <ScrollReveal className="px-8 md:px-12 mb-6">
          <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground">WHAT YOU GET</p>
        </ScrollReveal>
        <motion.div style={{ x: smoothX }} className="flex gap-8 md:gap-12 px-8 md:px-12 whitespace-nowrap">
          {service.features.map((feature, i) => (
            <span
              key={feature}
              className="font-sans text-xl md:text-2xl lg:text-3xl font-light flex-shrink-0"
              style={{
                WebkitTextStroke: i % 2 === 1 ? "1px rgba(255,255,255,0.2)" : "none",
                color: i % 2 === 1 ? "transparent" : "inherit",
              }}
            >
              {feature}
            </span>
          ))}
        </motion.div>
      </section>

      {/* Feature detail rows */}
      <section className="border-b border-white/10">
        {service.features.map((feature, index) => {
          const isEven = index % 2 === 0
          return (
            <ScrollReveal key={feature}>
              <motion.div
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
                className={`py-8 md:py-10 px-8 md:px-12 border-t border-white/10 ${isEven ? "" : "bg-white/[0.015]"}`}
              >
                <div className={`max-w-5xl mx-auto flex items-center gap-6 md:gap-10 ${isEven ? "" : "md:flex-row-reverse"}`}>
                  <motion.span
                    className="font-sans text-4xl md:text-5xl font-light text-white/[0.06] select-none flex-shrink-0"
                    animate={{ color: hoveredFeature === index ? "rgba(37,99,235,0.15)" : "rgba(255,255,255,0.06)" }}
                  >
                    0{index + 1}
                  </motion.span>
                  <motion.p
                    className="font-sans text-base md:text-lg lg:text-xl font-light flex-1 leading-snug"
                    animate={{ x: hoveredFeature === index ? (isEven ? 8 : -8) : 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  >
                    {feature}
                  </motion.p>
                </div>
              </motion.div>
            </ScrollReveal>
          )
        })}
      </section>

      {/* Body content */}
      <section className="py-16 md:py-24 px-8 md:px-12 border-b border-white/10">
        <ScrollReveal className="mb-10">
          <p className="font-mono text-xs tracking-[0.3em] text-accent mb-2">DEEP DIVE</p>
          <h2 className="font-sans text-2xl md:text-3xl font-light italic">Service Overview</h2>
        </ScrollReveal>
        <div className="max-w-3xl mx-auto space-y-6">
          {service.content.map((paragraph, i) => (
            <ScrollReveal key={paragraph.slice(0, 40)} delay={i * 0.04}>
              <p className={`font-mono leading-relaxed ${i === 0 ? "text-sm md:text-base text-foreground/85" : "text-sm text-muted-foreground"}`}>{paragraph}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Why choose WJB for this service */}
      {service.whyChoose && (
        <section className="py-14 md:py-20 px-8 md:px-12 border-b border-white/10 bg-white/[0.01]">
          <ScrollReveal className="max-w-3xl mx-auto text-center">
            <p className="font-mono text-xs tracking-[0.3em] text-accent mb-4">WHY WJB TECHNOLOGIES</p>
            <h2 className="font-sans text-xl md:text-2xl font-light italic mb-6">Why Partner With Us</h2>
            <p className="font-mono text-sm text-muted-foreground leading-relaxed">{service.whyChoose}</p>
          </ScrollReveal>
        </section>
      )}

      {/* Deliverables */}
      {service.deliverables.length > 0 && (
        <section className="py-14 md:py-20 px-8 md:px-12 border-b border-white/10">
          <ScrollReveal className="mb-10 max-w-6xl mx-auto">
            <div className="flex items-center gap-3">
              <Package className="w-5 h-5 text-accent" />
              <h2 className="font-sans text-xl md:text-2xl font-light italic">What You Receive</h2>
            </div>
          </ScrollReveal>
          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-3">
            {service.deliverables.map((item, i) => (
              <ScrollReveal key={item} delay={i * 0.03}>
                <div className="flex items-center gap-3 py-3 px-4 border border-white/10 rounded-xl bg-white/[0.02]">
                  <span className="font-mono text-xs text-accent flex-shrink-0">0{i + 1}</span>
                  <span className="font-mono text-xs text-muted-foreground">{item}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      )}

      {/* Tech marquee */}
      <section className="py-16 md:py-20 border-b border-white/10 overflow-hidden">
        <ScrollReveal className="px-8 md:px-12 mb-10">
          <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-2">TECH STACK</p>
          <h2 className="font-sans text-2xl md:text-3xl font-light italic">Tools We Use</h2>
        </ScrollReveal>
        <div className="space-y-2">
          <TechMarquee items={techRow1.length ? techRow1 : service.technologies} direction="left" />
          {techRow2.length > 0 && <TechMarquee items={techRow2} direction="right" />}
        </div>
      </section>

      {/* Process — horizontal steps */}
      <section className="py-16 md:py-24 px-8 md:px-12 border-b border-white/10">
        <ScrollReveal className="mb-12">
          <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-2">METHODOLOGY</p>
          <h2 className="font-sans text-2xl md:text-3xl font-light italic">How We Deliver</h2>
        </ScrollReveal>
        <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide max-w-6xl">
          {service.process.map((step, i) => (
            <ScrollReveal key={step.step} delay={i * 0.05} className="snap-start">
              <motion.div
                whileHover={{ y: -6 }}
                className="min-w-[240px] md:min-w-[280px] p-6 md:p-7 border border-white/10 rounded-2xl bg-white/[0.02] flex flex-col h-full"
              >
                <span className="font-mono text-3xl text-accent/25 mb-4">0{i + 1}</span>
                <h3 className="font-sans text-lg font-light mb-2">{step.step}</h3>
                <p className="font-mono text-xs text-muted-foreground leading-relaxed flex-1">{step.description}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Inquiry — full bleed */}
      <section className="relative py-20 md:py-28 px-8 md:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2563eb]/10 via-transparent to-transparent pointer-events-none" />
        <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-[0.3em] text-accent mb-4">GET STARTED</p>
            <h2 className="font-sans text-2xl md:text-3xl lg:text-4xl font-light italic leading-tight mb-4">
              Ready for {service.title}?
            </h2>
            <p className="font-mono text-sm text-muted-foreground leading-relaxed">
              Share your requirements for {service.title.toLowerCase()}. Our team will review and respond with a clear, practical next step.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <div className="p-8 md:p-10 border border-white/15 rounded-3xl bg-background/80 backdrop-blur-md shadow-2xl">
              <ContactForm />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="py-16 md:py-20 px-8 md:px-12 border-t border-white/10">
          <ScrollReveal className="mb-10">
            <p className="font-mono text-xs tracking-widest text-muted-foreground mb-2">EXPLORE MORE</p>
            <h2 className="font-sans text-2xl md:text-3xl font-light italic">Related Services</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10 max-w-4xl rounded-2xl overflow-hidden border border-white/10">
            {related.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}/`}
                data-cursor-hover
                className="group flex items-center justify-between p-6 md:p-8 bg-background hover:bg-white/[0.03] transition-colors"
              >
                <div>
                  <p className="font-mono text-[10px] text-muted-foreground mb-1">{s.category}</p>
                  <span className="font-sans text-lg md:text-xl font-light group-hover:text-accent transition-colors">{s.title}</span>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:rotate-45 transition-all flex-shrink-0 ml-4" />
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  )
}
