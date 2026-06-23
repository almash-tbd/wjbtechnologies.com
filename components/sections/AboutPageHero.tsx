"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { company } from "@/lib/data"

const milestones = ["2011", "2014", "2017", "2020", "2024"]
const marqueeWords = ["Precision", "Partnership", "Transparency", "Innovation", "Craftsmanship", "Delivery"]

const ease = [0.25, 0.46, 0.45, 0.94] as const

export function AboutPageHero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 80])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  const titleWords = ["About", company.brandName]

  return (
    <section ref={ref} className="relative min-h-[72vh] md:min-h-[78vh] overflow-hidden bg-[#050505] border-b border-white/10">
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{ backgroundPosition: ["0px 0px", "64px 64px"] }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        style={{
          backgroundImage: `
            linear-gradient(rgba(37,99,235,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(37,99,235,0.15) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      <motion.div
        className="absolute top-1/2 right-[8%] -translate-y-1/2 w-48 h-48 md:w-72 md:h-72 rounded-full border border-dashed border-white/10 pointer-events-none hidden md:block"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />
      <motion.div
        className="absolute top-1/2 right-[12%] -translate-y-1/2 w-32 h-32 md:w-52 md:h-52 rounded-full border border-accent/20 pointer-events-none hidden md:block"
        animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      <motion.div style={{ y, opacity }} className="relative z-10 px-8 md:px-12 pt-32 md:pt-40 pb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, ease }}
              className="w-12 h-px bg-accent mb-6 origin-left"
            />
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-5"
            >
              ABOUT — COMPANY
            </motion.p>

            <h1 className="font-sans text-4xl md:text-6xl lg:text-7xl font-light tracking-tight mb-8">
              {titleWords.map((word, i) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 + i * 0.12, ease }}
                  className={`inline-block mr-4 ${i === 1 ? "italic text-accent" : ""}`}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="font-mono text-sm md:text-base text-muted-foreground leading-relaxed max-w-xl mb-8"
            >
              Established in {company.establishedYear}, we engineer dependable software for organisations across {company.targetCountry} and beyond.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex flex-wrap gap-3"
            >
              <Link
                href="/services/"
                className="group inline-flex items-center gap-2 font-mono text-xs tracking-wider border border-white/20 rounded-full px-5 py-2.5 hover:border-accent hover:text-accent transition-colors"
              >
                OUR SERVICES
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:rotate-45 transition-transform" />
              </Link>
              <Link
                href="/contact/"
                className="group inline-flex items-center gap-2 font-mono text-xs tracking-wider bg-white/[0.06] border border-white/10 rounded-full px-5 py-2.5 hover:border-accent/50 transition-colors"
              >
                WORK WITH US
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:rotate-45 transition-transform" />
              </Link>
            </motion.div>
          </div>

          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease }}
              className="border border-white/10 rounded-2xl p-6 md:p-8 bg-white/[0.02] backdrop-blur-sm"
            >
              <p className="font-mono text-[10px] tracking-widest text-accent mb-6">COMPANY TIMELINE</p>
              <div className="space-y-0">
                {milestones.map((year, i) => (
                  <motion.div
                    key={year}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.55 + i * 0.1 }}
                    className="flex items-center gap-4 py-4 border-b border-white/10 last:border-0"
                  >
                    <motion.span
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 3, delay: i * 0.6, repeat: Number.POSITIVE_INFINITY }}
                      className="w-2 h-2 rounded-full bg-accent flex-shrink-0"
                    />
                    <span className="font-mono text-xs text-muted-foreground w-12">{year}</span>
                    <span className="font-sans text-sm font-light">
                      {i === 0 && "Founded in Vadodara"}
                      {i === 1 && "Mobile & desktop expansion"}
                      {i === 2 && "Enterprise integrations"}
                      {i === 3 && "Cloud-first delivery"}
                      {i === 4 && "18 service lines today"}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 py-4 border-t border-white/10 bg-[#050505]/80 backdrop-blur-sm overflow-hidden">
        <div className="flex animate-marquee-left whitespace-nowrap" style={{ width: "fit-content" }}>
          {[...marqueeWords, ...marqueeWords, ...marqueeWords].map((word, i) => (
            <span
              key={`${word}-${i}`}
              className="font-sans text-2xl md:text-3xl font-light mx-8 md:mx-12"
              style={{ WebkitTextStroke: i % 2 === 0 ? "1px rgba(255,255,255,0.2)" : "none", color: i % 2 === 0 ? "transparent" : "inherit" }}
            >
              {word}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-background pointer-events-none z-20" />
    </section>
  )
}
