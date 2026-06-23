"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

interface TestimonialCardProps {
  name: string
  designation: string
  content: string
  index?: number
}

export function TestimonialCard({ name, designation, content, index = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="p-6 md:p-8 border border-white/10 rounded-2xl bg-white/[0.02] h-full flex flex-col"
    >
      <Quote className="w-8 h-8 text-accent mb-4 opacity-60" />
      <p className="font-mono text-sm text-muted-foreground leading-relaxed flex-1 mb-6">{content}</p>
      <div className="border-t border-white/10 pt-4">
        <p className="font-sans text-lg font-light">{name}</p>
        <p className="font-mono text-xs text-muted-foreground mt-1">{designation}</p>
      </div>
    </motion.div>
  )
}
