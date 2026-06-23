"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Briefcase, ChevronDown } from "lucide-react"
import { PageShell } from "@/components/layout/PageShell"
import { PageHero } from "@/components/sections/PageHero"
import { CareerForm } from "@/components/ui/ContactForm"
import { CTASection } from "@/components/sections/CTASection"
import { ScrollReveal } from "@/components/ui/ScrollReveal"
import { careers } from "@/lib/data"

interface Job {
  id: string
  title: string
  department: string
  location: string
  type: string
  description: string
  requirements: string[]
}

export default function CareersClient() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null)
  const [expandedId, setExpandedId] = useState<string | null>(null)

  return (
    <PageShell>
      <PageHero
        label="CAREERS — JOIN US"
        title="Build the Future of Software"
        subtitle="Explore open positions at WJB Technologies. We welcome talented professionals passionate about quality engineering."
      />

      <section className="py-16 md:py-24 px-8 md:px-12">
        <div className="max-w-5xl mx-auto space-y-0">
          {(careers as Job[]).map((job, index) => {
            const isExpanded = expandedId === job.id
            return (
              <ScrollReveal key={job.id} delay={index * 0.04}>
                <div className="border-t border-white/10 last:border-b">
                  <button
                    onClick={() => setExpandedId(isExpanded ? null : job.id)}
                    className="w-full py-8 md:py-10 text-left group"
                  >
                    <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                      <span className="font-mono text-xs text-muted-foreground w-10">0{index + 1}</span>
                      <motion.h3
                        className="font-sans text-2xl md:text-4xl font-light flex-1 group-hover:text-accent transition-colors"
                        animate={{ x: isExpanded ? 8 : 0 }}
                      >
                        {job.title}
                      </motion.h3>
                      <div className="flex flex-wrap items-center gap-3 md:gap-6">
                        <span className="font-mono text-[10px] tracking-widest text-accent px-3 py-1 border border-accent/30 rounded-full">{job.department}</span>
                        <span className="font-mono text-xs text-muted-foreground flex items-center gap-1">
                          <MapPin className="w-3 h-3" /> {job.location}
                        </span>
                        <motion.span animate={{ rotate: isExpanded ? 180 : 0 }}>
                          <ChevronDown className="w-5 h-5 text-muted-foreground" />
                        </motion.span>
                      </div>
                    </div>
                  </button>

                  <motion.div
                    initial={false}
                    animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
                    transition={{ duration: 0.35 }}
                    className="overflow-hidden"
                  >
                    <div className="pb-10 pl-0 md:pl-[4.5rem] max-w-3xl">
                      <p className="font-mono text-sm text-muted-foreground leading-relaxed mb-6">{job.description}</p>
                      <p className="font-mono text-xs tracking-widest text-muted-foreground mb-3 flex items-center gap-2">
                        <Briefcase className="w-3 h-3" /> REQUIREMENTS
                      </p>
                      <ul className="space-y-2 mb-8">
                        {job.requirements.map((req) => (
                          <li key={req} className="font-mono text-xs text-muted-foreground flex gap-2">
                            <span className="text-accent">—</span> {req}
                          </li>
                        ))}
                      </ul>
                      <button
                        onClick={() => setSelectedJob(job)}
                        data-cursor-hover
                        className="px-8 py-3 border border-white/20 rounded-full font-mono text-xs tracking-widest uppercase hover:bg-white hover:text-black transition-colors duration-500"
                      >
                        Apply Now
                      </button>
                    </div>
                  </motion.div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </section>

      <CareerForm jobTitle={selectedJob?.title || ""} isOpen={!!selectedJob} onClose={() => setSelectedJob(null)} />
      <CTASection
        title="Don't See the Right Role?"
        description="Send us your profile and we will reach out when a suitable opportunity opens."
        buttonText="Contact Us"
        buttonHref="/contact/"
      />
    </PageShell>
  )
}
