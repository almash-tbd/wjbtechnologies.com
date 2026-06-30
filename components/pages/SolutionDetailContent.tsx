"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowUpRight, Users, Layers, Target, CheckCircle2 } from "lucide-react"
import type { Solution } from "@/lib/solutions"
import type { EnrichedService } from "@/lib/data"
import { ContactForm } from "@/components/ui/ContactForm"
import { ScrollReveal } from "@/components/ui/ScrollReveal"

interface SolutionDetailContentProps {
  solution: Solution
  relatedSolutions: Solution[]
  relatedServices: EnrichedService[]
}

export function SolutionDetailContent({ solution, relatedSolutions, relatedServices }: SolutionDetailContentProps) {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)

  return (
    <>
      <section className="py-12 md:py-16 px-8 md:px-12 border-b border-white/10">
        <ScrollReveal className="max-w-4xl">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="font-mono text-[10px] tracking-widest text-accent px-4 py-1.5 border border-accent/40 rounded-full">
              INDUSTRY SOLUTION
            </span>
            {solution.popular && (
              <span className="font-mono text-[10px] tracking-widest text-foreground px-4 py-1.5 border border-white/30 rounded-full">
                POPULAR
              </span>
            )}
            <span className="font-mono text-[10px] tracking-widest text-muted-foreground px-4 py-1.5 border border-white/10 rounded-full">
              {solution.features.length} CAPABILITIES
            </span>
          </div>
          <p className="font-sans text-lg md:text-xl lg:text-2xl font-light italic leading-relaxed text-foreground/90">
            {solution.heroSubtitle}
          </p>
        </ScrollReveal>
      </section>

      {solution.challenges.length > 0 && (
        <section className="py-14 md:py-20 px-8 md:px-12 border-b border-white/10 bg-white/[0.01]">
          <ScrollReveal className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Target className="w-5 h-5 text-accent" />
              <h2 className="font-sans text-xl md:text-2xl font-light italic">Challenges We Address</h2>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {solution.challenges.map((challenge, i) => (
                <li key={challenge} className="flex items-start gap-3 p-5 border border-white/10 rounded-xl bg-white/[0.02]">
                  <span className="font-mono text-xs text-accent mt-0.5">0{i + 1}</span>
                  <p className="font-mono text-sm text-muted-foreground leading-relaxed">{challenge}</p>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </section>
      )}

      <section className="py-14 md:py-20 px-8 md:px-12 border-b border-white/10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-5 h-5 text-accent" />
              <h2 className="font-sans text-xl md:text-2xl font-light italic">Who It&apos;s For</h2>
            </div>
            <ul className="space-y-4">
              {solution.whoItsFor.map((item, i) => (
                <li key={item} className="flex items-start gap-3 font-mono text-sm text-muted-foreground">
                  <span className="text-accent font-mono text-xs mt-0.5">0{i + 1}</span>
                  {item}
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="font-mono text-xs tracking-widest text-muted-foreground mb-6">KEY OUTCOMES</p>
            <ul className="space-y-4">
              {solution.outcomes.map((outcome) => (
                <li key={outcome} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <p className="font-mono text-sm text-muted-foreground leading-relaxed">{outcome}</p>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      {solution.useCases.length > 0 && (
        <section className="py-14 md:py-20 px-8 md:px-12 border-b border-white/10">
          <ScrollReveal className="mb-10 max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-2">
              <Layers className="w-5 h-5 text-accent" />
              <h2 className="font-sans text-xl md:text-2xl font-light italic">Common Use Cases</h2>
            </div>
          </ScrollReveal>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {solution.useCases.map((useCase, index) => (
              <ScrollReveal key={useCase.title} delay={index * 0.05}>
                <div className="p-6 md:p-8 border border-white/10 rounded-2xl bg-white/[0.02] h-full">
                  <span className="font-mono text-xs text-accent">0{index + 1}</span>
                  <h3 className="font-sans text-lg md:text-xl font-light mt-3 mb-3">{useCase.title}</h3>
                  <p className="font-mono text-xs text-muted-foreground leading-relaxed">{useCase.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      )}

      <section className="py-14 md:py-20 px-8 md:px-12 border-b border-white/10 bg-white/[0.01]">
        <ScrollReveal className="mb-10 max-w-6xl mx-auto">
          <p className="font-mono text-xs tracking-widest text-muted-foreground mb-2">CAPABILITIES</p>
          <h2 className="font-sans text-2xl md:text-3xl font-light italic">What We Build</h2>
        </ScrollReveal>
        <div className="max-w-6xl mx-auto space-y-0">
          {solution.features.map((feature, index) => (
            <ScrollReveal key={feature} delay={index * 0.03}>
              <div
                className="border-t border-white/10 last:border-b py-6 md:py-8"
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <div className="flex items-center gap-6">
                  <span className="font-mono text-xs text-muted-foreground w-10">0{index + 1}</span>
                  <p className="font-sans text-base md:text-lg lg:text-xl font-light flex-1 leading-snug">{feature}</p>
                  <ArrowUpRight
                    className={`w-5 h-5 flex-shrink-0 transition-all duration-300 ${hoveredFeature === index ? "text-accent rotate-45" : "text-muted-foreground/40"
                      }`}
                  />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="py-14 md:py-20 px-8 md:px-12 border-b border-white/10">
        <ScrollReveal className="max-w-3xl mx-auto space-y-6">
          {solution.content.map((paragraph, i) => (
            <p key={paragraph.slice(0, 40)} className={`font-mono leading-relaxed ${i === 0 ? "text-sm md:text-base text-foreground/85" : "text-sm text-muted-foreground"}`}>
              {paragraph}
            </p>
          ))}
        </ScrollReveal>
      </section>

      {solution.technologies.length > 0 && (
        <section className="py-12 md:py-16 px-8 md:px-12 border-b border-white/10 overflow-hidden">
          <ScrollReveal className="mb-8 px-0">
            <p className="font-mono text-xs tracking-widest text-muted-foreground mb-2">TECHNOLOGY STACK</p>
            <h2 className="font-sans text-xl md:text-2xl font-light italic">Tools & Platforms</h2>
          </ScrollReveal>
          <div className="flex flex-wrap gap-2 max-w-4xl">
            {solution.technologies.map((tech) => (
              <span key={tech} className="font-mono text-xs px-4 py-2 border border-white/15 rounded-full text-muted-foreground">
                {tech}
              </span>
            ))}
          </div>
        </section>
      )}

      {solution.process.length > 0 && (
        <section className="py-14 md:py-20 px-8 md:px-12 border-b border-white/10">
          <ScrollReveal className="mb-10 max-w-6xl mx-auto">
            <p className="font-mono text-xs tracking-widest text-muted-foreground mb-2">DELIVERY</p>
            <h2 className="font-sans text-2xl md:text-3xl font-light italic">Our Approach</h2>
          </ScrollReveal>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solution.process.map((step, index) => (
              <ScrollReveal key={step.step} delay={index * 0.05}>
                <div className="p-6 border border-white/10 rounded-2xl bg-white/[0.02] h-full">
                  <span className="font-mono text-xs text-accent">PHASE 0{index + 1}</span>
                  <h3 className="font-sans text-lg font-light mt-3 mb-3">{step.step}</h3>
                  <p className="font-mono text-xs text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      )}


      {(relatedSolutions.length > 0 || relatedServices.length > 0) && (
        <section className="py-16 md:py-20 px-8 md:px-12 border-t border-white/10">
          {relatedSolutions.length > 0 && (
            <>
              <ScrollReveal className="mb-10">
                <p className="font-mono text-xs tracking-widest text-muted-foreground mb-2">EXPLORE MORE</p>
                <h2 className="font-sans text-2xl md:text-3xl font-light italic">Related Solutions</h2>
              </ScrollReveal>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10 max-w-4xl rounded-2xl overflow-hidden border border-white/10 mb-12">
                {relatedSolutions.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/solutions/${s.slug}/`}
                    data-cursor-hover
                    className="group flex items-center justify-between p-6 md:p-8 bg-background hover:bg-white/[0.03] transition-colors"
                  >
                    <div>
                      <p className="font-mono text-[10px] text-muted-foreground mb-1">SOLUTION</p>
                      <span className="font-sans text-lg md:text-xl font-light group-hover:text-accent transition-colors">{s.title}</span>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:rotate-45 transition-all flex-shrink-0 ml-4" />
                  </Link>
                ))}
              </div>
            </>
          )}

          {relatedServices.length > 0 && (
            <>
              <ScrollReveal className="mb-10">
                <h2 className="font-sans text-xl md:text-2xl font-light italic text-muted-foreground">Supporting Services</h2>
              </ScrollReveal>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10 max-w-4xl rounded-2xl overflow-hidden border border-white/10">
                {relatedServices.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}/`}
                    data-cursor-hover
                    className="group flex items-center justify-between p-6 md:p-8 bg-background hover:bg-white/[0.03] transition-colors"
                  >
                    <div>
                      <p className="font-mono text-[10px] text-muted-foreground mb-1">{s.category}</p>
                      <span className="font-sans text-lg font-light group-hover:text-accent transition-colors">{s.title}</span>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:rotate-45 transition-all flex-shrink-0 ml-4" />
                  </Link>
                ))}
              </div>
            </>
          )}
        </section>
      )}
    </>
  )
}
