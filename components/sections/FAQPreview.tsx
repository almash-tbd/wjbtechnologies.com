"use client"

import { motion } from "framer-motion"
import { FAQItem } from "@/components/ui/FAQItem"
import { getAllFaqs } from "@/lib/data"
import { ButtonLink } from "@/components/ui/button"

export function FAQPreview() {
  const faqs = getAllFaqs().slice(0, 5)

  return (
    <section className="py-24 md:py-32 px-8 md:px-12 border-t border-white/10">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">08 — FAQ</p>
        <h2 className="font-sans text-3xl md:text-5xl font-light italic mb-4">Common Questions</h2>
        <ButtonLink href="/faq/">View All FAQs</ButtonLink>
      </motion.div>
      <div className="max-w-3xl">
        {faqs.map((faq) => (
          <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  )
}
