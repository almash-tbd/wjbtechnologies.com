"use client"

import { ScrollReveal } from "@/components/ui/ScrollReveal"

interface LegalSection {
  title: string
  paragraphs: string[]
}

export function LegalContent({ sections }: { sections: LegalSection[] }) {
  return (
    <section className="py-16 md:py-24 px-8 md:px-12">
      <div className="max-w-3xl mx-auto">
        {sections.map((section, index) => (
          <ScrollReveal key={section.title} delay={index * 0.04}>
            <div className="mb-12 pb-12 border-b border-white/10 last:border-0 last:mb-0 last:pb-0">
              <h2 className="font-sans text-xl md:text-2xl font-light text-foreground mb-5">{section.title}</h2>
              <div className="space-y-4">
                {section.paragraphs.map((p) => (
                  <p key={p.slice(0, 40)} className="font-mono text-sm text-muted-foreground leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
