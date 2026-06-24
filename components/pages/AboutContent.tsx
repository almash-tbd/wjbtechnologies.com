"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { ArrowUpRight, BookOpen, History, Layers, Handshake } from "lucide-react"
import { company, about } from "@/lib/data"
import { ScrollReveal } from "@/components/ui/ScrollReveal"

const highlights = [
  "Custom software tailored to your workflows",
  "Web, mobile, desktop, and cloud expertise",
  "Agile delivery with transparent communication",
  "Long-term support and modernisation capability",
]

export function AboutContent() {
  const stripRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: stripRef, offset: ["start end", "end start"] })
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"])
  const smoothX = useSpring(x, { stiffness: 80, damping: 30 })

  return (
    <>
      <section ref={stripRef} className="py-20 overflow-hidden border-b border-white/10">
        <ScrollReveal className="px-8 md:px-12 mb-10">
          <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-2">SINCE {company.establishedYear}</p>
          <h2 className="font-sans text-3xl md:text-5xl font-light italic">Built for the Long Run</h2>
        </ScrollReveal>
        <motion.div style={{ x: smoothX }} className="flex gap-12 md:gap-20 px-8 md:px-12 whitespace-nowrap">
          {[
            { label: "Company Since", value: company.establishedYear },
            { label: "Industry", value: "IT / Software" },
            { label: "Engagement", value: "On-site & Remote" },
          ].map((stat, i) => (
            <div key={stat.label} className="flex-shrink-0">
              <p className="font-mono text-xs text-muted-foreground mb-2">{stat.label}</p>
              <p
                className="font-sans text-5xl md:text-7xl font-light"
                style={{ WebkitTextStroke: i % 2 === 1 ? "1px rgba(255,255,255,0.25)" : "none", color: i % 2 === 1 ? "transparent" : "inherit" }}
              >
                {stat.value}
              </p>
            </div>
          ))}
        </motion.div>
      </section>

      <section className="py-20 md:py-28 px-8 md:px-12">
        <div className="max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <ScrollReveal className="lg:col-span-5">
            <p className="font-mono text-xs tracking-[0.3em] text-accent mb-4">01 — OVERVIEW</p>
            <h2 className="font-sans text-3xl md:text-4xl font-light mb-6">Who We Are</h2>
            <p className="font-mono text-sm text-muted-foreground leading-relaxed mb-4">{company.description}</p>
            {about.overviewParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="font-mono text-sm text-muted-foreground leading-relaxed mb-4 last:mb-0">
                {paragraph}
              </p>
            ))}
          </ScrollReveal>
          <ScrollReveal delay={0.15} className="lg:col-span-7 space-y-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item}
                whileHover={{ x: 8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex items-center gap-6 py-5 border-b border-white/10 group"
              >
                <span className="font-mono text-sm text-accent w-8">0{i + 1}</span>
                <p className="font-sans text-lg md:text-xl font-light group-hover:text-accent transition-colors">{item}</p>
              </motion.div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 md:py-28 px-8 md:px-12 border-t border-white/10 bg-white/[0.01]">
        <div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          <ScrollReveal>
            <p className="font-mono text-xs tracking-widest text-muted-foreground mb-4">MISSION</p>
            <h3 className="font-sans text-3xl md:text-4xl font-light italic leading-snug mb-6">{company.mission}</h3>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="font-mono text-xs tracking-widest text-muted-foreground mb-4">VISION</p>
            <h3 className="font-sans text-3xl md:text-4xl font-light italic leading-snug mb-6">{company.vision}</h3>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 md:py-28 px-8 md:px-12 border-t border-white/10">
        <ScrollReveal className="mb-14 max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-5 h-5 text-accent" />
            <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground">02 — OUR STORY</p>
          </div>
          <h2 className="font-sans text-3xl md:text-5xl font-light italic">More Than a Decade of Building</h2>
        </ScrollReveal>
        <div className="max-w-3xl mx-auto space-y-6">
          {about.story.map((paragraph, i) => (
            <ScrollReveal key={paragraph.slice(0, 40)} delay={i * 0.05}>
              <p className="font-mono text-sm text-muted-foreground leading-relaxed">{paragraph}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="py-14 md:py-20 px-8 md:px-12 border-t border-white/10 bg-white/[0.01]">
        <ScrollReveal className="mb-10 max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <History className="w-5 h-5 text-accent" />
            <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground">03 — JOURNEY</p>
          </div>
          <h2 className="font-sans text-3xl md:text-4xl font-light italic">Key Milestones</h2>
        </ScrollReveal>
        <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide max-w-6xl mx-auto">
          {about.milestones.map((milestone, i) => (
            <ScrollReveal key={`${milestone.year}-${milestone.title}`} delay={i * 0.04}>
              <div className="flex-shrink-0 w-[280px] md:w-[300px] p-6 border border-white/10 rounded-2xl bg-white/[0.02] hover:border-accent/30 transition-colors">
                <p className="font-mono text-xs text-accent mb-3">{milestone.year}</p>
                <h3 className="font-sans text-lg font-light mb-3">{milestone.title}</h3>
                <p className="font-mono text-xs text-muted-foreground leading-relaxed">{milestone.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-28 px-8 md:px-12 border-t border-white/10">
        <ScrollReveal className="mb-12 max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Layers className="w-5 h-5 text-accent" />
            <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground">04 — CAPABILITIES</p>
          </div>
          <h2 className="font-sans text-3xl md:text-5xl font-light italic">What We Deliver</h2>
        </ScrollReveal>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {about.capabilities.map((capability, i) => (
            <ScrollReveal key={capability.title} delay={i * 0.05}>
              <div className="p-6 md:p-7 border border-white/10 rounded-2xl bg-white/[0.02] h-full hover:border-accent/30 transition-colors">
                <span className="font-mono text-xs text-accent">0{i + 1}</span>
                <h3 className="font-sans text-xl font-light mt-2 mb-3">{capability.title}</h3>
                <p className="font-mono text-xs text-muted-foreground leading-relaxed">{capability.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="py-14 md:py-20 px-8 md:px-12 border-t border-white/10 bg-white/[0.01]">
        <ScrollReveal className="mb-8 max-w-6xl mx-auto">
          <p className="font-mono text-xs tracking-widest text-muted-foreground mb-4">INDUSTRIES WE SERVE</p>
          <h2 className="font-sans text-2xl md:text-3xl font-light italic">Sectors We Understand</h2>
        </ScrollReveal>
        <ScrollReveal className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3">
            {about.industries.map((industry) => (
              <span key={industry} className="font-mono text-xs px-4 py-2 border border-white/15 rounded-full text-muted-foreground">
                {industry}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </section>

      <section className="py-20 md:py-28 px-8 md:px-12 border-t border-white/10">
        <ScrollReveal className="mb-14">
          <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">05 — VALUES</p>
          <h2 className="font-sans text-3xl md:text-5xl font-light italic">What Guides Us</h2>
        </ScrollReveal>
        <div className="max-w-4xl border-l border-white/10 ml-4 md:ml-8">
          {company.values.map((value, i) => (
            <ScrollReveal key={value.title} delay={i * 0.05}>
              <div className="relative pl-10 md:pl-14 py-8 border-b border-white/10 last:border-0">
                <span className="absolute -left-[5px] top-10 w-2.5 h-2.5 rounded-full bg-accent" />
                <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                <h3 className="font-sans text-2xl font-light mt-2 mb-3">{value.title}</h3>
                <p className="font-mono text-sm text-muted-foreground leading-relaxed max-w-2xl">{value.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-28 px-8 md:px-12 border-t border-white/10 bg-white/[0.01]">
        <ScrollReveal className="mb-12 max-w-6xl mx-auto">
          <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">06 — APPROACH</p>
          <h2 className="font-sans text-3xl md:text-5xl font-light italic">How We Work With Clients</h2>
        </ScrollReveal>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {about.approach.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.05}>
              <div className="p-6 md:p-8 border border-white/10 rounded-2xl">
                <span className="font-mono text-xs text-accent">0{i + 1}</span>
                <h3 className="font-sans text-xl md:text-2xl font-light mt-2 mb-4">{item.title}</h3>
                <p className="font-mono text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-28 px-8 md:px-12 border-t border-white/10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <ScrollReveal className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <Handshake className="w-5 h-5 text-accent" />
              <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground">07 — COMMITMENT</p>
            </div>
            <h2 className="font-sans text-3xl md:text-4xl font-light italic mb-6">What You Can Expect From Us</h2>
            <p className="font-mono text-sm text-muted-foreground leading-relaxed">
              Partnership with {company.brandName} means working with a team that treats your software investment as seriously as you do. These commitments apply to every engagement—from a focused MVP to a multi-year enterprise platform.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1} className="lg:col-span-7">
            <ul className="space-y-4">
              {about.commitments.map((item, i) => (
                <li key={item} className="flex items-start gap-4 py-4 border-b border-white/10 last:border-0">
                  <span className="font-mono text-xs text-accent mt-0.5 flex-shrink-0">0{i + 1}</span>
                  <p className="font-mono text-sm text-muted-foreground leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.15} className="max-w-6xl mx-auto mt-16 pt-10 border-t border-white/10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <p className="font-mono text-sm text-muted-foreground max-w-xl">
              Explore our full range of services or speak with us directly about your next project.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/services/"
                data-cursor-hover
                className="group inline-flex items-center gap-2 font-mono text-xs tracking-wider border border-white/20 rounded-full px-5 py-2.5 hover:border-accent hover:text-accent transition-colors"
              >
                VIEW SERVICES
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:rotate-45 transition-transform" />
              </Link>
              <Link
                href="/contact/"
                data-cursor-hover
                className="group inline-flex items-center gap-2 font-mono text-xs tracking-wider bg-accent text-accent-foreground rounded-full px-5 py-2.5 hover:opacity-90 transition-opacity"
              >
                GET IN TOUCH
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:rotate-45 transition-transform" />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  )
}
