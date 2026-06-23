"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Mail, Phone, Clock, MapPin } from "lucide-react"
import { company, offices } from "@/lib/data"

const ease = [0.25, 0.46, 0.45, 0.94] as const

function useIstTime() {
  const [time, setTime] = useState("")

  useEffect(() => {
    const update = () => {
      setTime(
        new Date().toLocaleTimeString("en-IN", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      )
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  return time
}

export function ContactPageHero() {
  const ref = useRef<HTMLElement>(null)
  const istTime = useIstTime()
  const office = offices[0]
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const opacity = useTransform(scrollYProgress, [0, 0.55], [1, 0])

  const channels = [
    { icon: Mail, label: "Email", value: company.email, href: `mailto:${company.email}` },
    { icon: Phone, label: "Phone", value: company.phone, href: `tel:${company.phone.replace(/\s/g, "")}` },
    { icon: MapPin, label: "Office", value: `${office.city}, ${office.state}`, href: undefined },
  ]

  return (
    <section ref={ref} className="relative min-h-[72vh] md:min-h-[76vh] overflow-hidden bg-[#050505] border-b border-white/10">
      {[1, 2, 3, 4].map((ring) => (
        <motion.div
          key={ring}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06] pointer-events-none"
          style={{ width: `${ring * 140}px`, height: `${ring * 140}px` }}
          animate={{ scale: [1, 1.06, 1], opacity: [0.15, 0.35, 0.15] }}
          transition={{ duration: 4 + ring, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: ring * 0.4 }}
        />
      ))}

      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-accent/30 to-transparent pointer-events-none"
        animate={{ opacity: [0.2, 0.6, 0.2], scaleY: [0.8, 1, 0.8] }}
        transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      <motion.div style={{ opacity }} className="relative z-10 px-8 md:px-12 pt-32 md:pt-40 pb-28">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-10">
            <motion.p
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="font-mono text-xs tracking-[0.3em] text-muted-foreground"
            >
              CONTACT — GET IN TOUCH
            </motion.p>
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex items-center gap-3 font-mono text-xs text-muted-foreground"
            >
              <Clock className="w-3.5 h-3.5 text-accent" />
              <span>IST</span>
              <span className="text-foreground tabular-nums">{istTime}</span>
            </motion.div>
          </div>

          <motion.h1
            initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 1, delay: 0.2, ease }}
            className="font-sans text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-6"
          >
            Contact <span className="italic text-accent">Us</span>
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.45, ease }}
            className="h-px w-full max-w-md bg-gradient-to-r from-accent via-white/30 to-transparent origin-left mb-8"
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="font-mono text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl mb-12"
          >
            Share your project requirements and our team will respond with practical next steps.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
            {channels.map((channel, i) => (
              <motion.div
                key={channel.label}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + i * 0.1, ease }}
                whileHover={{ y: -6 }}
                className="group"
              >
                {channel.href ? (
                  <a
                    href={channel.href}
                    className="block p-5 md:p-6 border border-white/10 rounded-2xl bg-white/[0.02] hover:border-accent/40 hover:bg-white/[0.04] transition-colors"
                  >
                    <channel.icon className="w-5 h-5 text-accent mb-4 group-hover:scale-110 transition-transform" />
                    <p className="font-mono text-[10px] tracking-widest text-muted-foreground mb-2">{channel.label}</p>
                    <p className="font-sans text-sm md:text-base font-light break-all">{channel.value}</p>
                  </a>
                ) : (
                  <div className="p-5 md:p-6 border border-white/10 rounded-2xl bg-white/[0.02]">
                    <channel.icon className="w-5 h-5 text-accent mb-4" />
                    <p className="font-mono text-[10px] tracking-widest text-muted-foreground mb-2">{channel.label}</p>
                    <p className="font-sans text-sm md:text-base font-light">{channel.value}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="font-mono text-xs text-muted-foreground mt-8"
          >
            {company.businessHours.weekdays} · {company.businessHours.saturday}
          </motion.p>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-background pointer-events-none z-20" />
    </section>
  )
}
