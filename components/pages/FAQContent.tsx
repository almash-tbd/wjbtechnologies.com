"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FAQItem } from "@/components/ui/FAQItem"
import { ScrollReveal } from "@/components/ui/ScrollReveal"

interface FAQCategory {
  id: string
  title: string
  faqs: { question: string; answer: string }[]
}

export function FAQContent({ categories }: { categories: FAQCategory[] }) {
  const [activeCategory, setActiveCategory] = useState(categories[0]?.id || "")

  const active = categories.find((c) => c.id === activeCategory) || categories[0]

  return (
    <section className="py-16 md:py-24 px-8 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <ScrollReveal className="lg:col-span-4">
          <p className="font-mono text-xs tracking-widest text-muted-foreground mb-6">CATEGORIES</p>
          <nav className="space-y-2 lg:sticky lg:top-28">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`w-full text-left px-4 py-3 font-mono text-xs tracking-wider transition-all duration-300 border-l-2 ${
                  activeCategory === cat.id
                    ? "border-accent text-foreground bg-white/[0.03]"
                    : "border-transparent text-muted-foreground hover:text-foreground hover:border-white/20"
                }`}
              >
                {cat.title.toUpperCase()}
                <span className="ml-2 text-muted-foreground">({cat.faqs.length})</span>
              </button>
            ))}
          </nav>
        </ScrollReveal>

        <div className="lg:col-span-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={active?.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
            >
              <h2 className="font-sans text-2xl md:text-3xl font-light italic mb-8">{active?.title}</h2>
              {active?.faqs.map((item) => (
                <FAQItem key={item.question} question={item.question} answer={item.answer} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
