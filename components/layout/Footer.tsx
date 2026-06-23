"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowUpRight, Facebook, Instagram } from "lucide-react"
import { company } from "@/lib/data"

const footerLinks = [
  { label: "About", href: "/about/" },
  { label: "Services", href: "/services/" },
  { label: "Solutions", href: "/solutions/" },
  { label: "Blog", href: "/blog/" },
  { label: "Careers", href: "/careers/" },
  { label: "FAQ", href: "/faq/" },
  { label: "Privacy", href: "/privacy/" },
  { label: "Terms", href: "/terms/" },
]

export function Footer() {
  const [time, setTime] = useState("")
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setTime(
        now.toLocaleTimeString("en-IN", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      )
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <footer className="relative">
      <Link
        href="/contact/"
        data-cursor-hover
        className="relative block overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          className="absolute inset-0 bg-[#2563eb]"
          initial={{ y: "100%" }}
          animate={{ y: isHovered ? "0%" : "100%" }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
        <div className="relative py-16 md:py-24 px-8 md:px-12 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <motion.h2
              className="font-sans text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-center md:text-left"
              animate={{ color: isHovered ? "#050505" : "#fafafa" }}
              transition={{ duration: 0.3 }}
            >
              Start Your <span className="italic">Project</span>
            </motion.h2>
            <motion.div animate={{ rotate: isHovered ? 45 : 0, color: isHovered ? "#050505" : "#fafafa" }} transition={{ duration: 0.3 }}>
              <ArrowUpRight className="w-12 h-12 md:w-16 md:h-16" />
            </motion.div>
          </div>
        </div>
      </Link>

      <div className="px-8 md:px-12 py-12 border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <Image
              src="/images/logo.png"
              alt={`${company.brandName} Logo`}
              width={120}
              height={69}
              className="h-8 w-auto object-contain mb-3 brightness-100"
            />
            <p className="font-mono text-xs text-muted-foreground leading-relaxed max-w-xs">{company.description}</p>
          </div>
          <div>
            <p className="font-mono text-xs tracking-widest text-muted-foreground mb-4">NAVIGATION</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {footerLinks.map((link) => (
                <Link key={link.href} href={link.href} className="font-mono text-xs tracking-wider text-muted-foreground hover:text-white transition-colors" data-cursor-hover>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="font-mono text-xs tracking-widest text-muted-foreground mb-4">CONTACT</p>
            <p className="font-mono text-xs text-muted-foreground mb-2">{company.email}</p>
            <p className="font-mono text-xs text-muted-foreground mb-4">{company.phone}</p>
            <div className="flex gap-4">
              <span className="p-2 border border-white/20 rounded-full text-muted-foreground" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </span>
              <span className="p-2 border border-white/20 rounded-full text-muted-foreground" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10">
          <div className="font-mono text-xs tracking-widest text-muted-foreground">
            <span className="mr-2">IST</span>
            <span className="text-white tabular-nums">{time}</span>
          </div>
          <p className="font-mono text-xs tracking-widest text-muted-foreground">
            © {new Date().getFullYear()} {company.brandName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
