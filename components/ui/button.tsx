"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

interface ButtonProps {
  href?: string
  onClick?: () => void
  children: React.ReactNode
  variant?: "primary" | "outline"
  type?: "button" | "submit"
  className?: string
  disabled?: boolean
}

export function Button({ href, onClick, children, variant = "primary", type = "button", className = "", disabled }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 px-6 py-3 font-mono text-xs tracking-widest uppercase transition-all duration-300 rounded-full"
  const variants = {
    primary: "bg-accent text-accent-foreground hover:bg-accent/90 border border-accent",
    outline: "border border-white/20 bg-transparent hover:bg-white hover:text-black",
  }

  const classes = `${base} ${variants[variant]} ${className} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`

  if (href) {
    return (
      <Link href={href} className={classes} data-cursor-hover>
        {children}
      </Link>
    )
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={disabled ? {} : { scale: 1.02 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
      className={classes}
      data-cursor-hover
    >
      {children}
    </motion.button>
  )
}

export function ButtonLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="inline-flex items-center gap-2 font-mono text-xs tracking-widest text-accent hover:text-foreground transition-colors group" data-cursor-hover>
      {children}
      <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
    </Link>
  )
}
