"use client"

import { motion } from "framer-motion"

interface PageHeroProps {
  label: string
  title: string
  subtitle?: string
  children?: React.ReactNode
  variant?: "default" | "compact"
}

const ease = [0.25, 0.46, 0.45, 0.94] as const

export function PageHero({ label, title, subtitle, children, variant = "default" }: PageHeroProps) {
  const isDefault = variant === "default"

  return (
    <section
      className={`relative overflow-hidden bg-[#050505] ${
        isDefault ? "min-h-[52vh] md:min-h-[58vh] flex items-end" : "pt-32 pb-16 md:pt-36 md:pb-20"
      }`}
    >
      <motion.div
        className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-[#2563eb]/15 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.65, 0.4] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 -left-24 w-72 h-72 rounded-full bg-accent/10 blur-3xl"
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      <div className="relative z-10 w-full px-8 md:px-12 pb-16 md:pb-20 pt-32 md:pt-40 border-b border-white/10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease }}
          className="max-w-5xl"
        >
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4"
          >
            {label}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="font-sans text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-balance mb-6"
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-mono text-sm md:text-base text-muted-foreground leading-relaxed max-w-3xl"
            >
              {subtitle}
            </motion.p>
          )}
          {children && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }} className="mt-8">
              {children}
            </motion.div>
          )}
        </motion.div>

        {isDefault && (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.6, ease }}
            className="mt-12 h-px max-w-5xl bg-gradient-to-r from-accent/60 via-white/20 to-transparent origin-left"
          />
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-background pointer-events-none z-20" />
    </section>
  )
}
