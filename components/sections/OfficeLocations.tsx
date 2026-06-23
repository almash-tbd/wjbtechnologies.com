"use client"

import { motion } from "framer-motion"
import { MapPin, Clock, Mail, Phone } from "lucide-react"
import { offices, company } from "@/lib/data"
import { ScrollReveal } from "@/components/ui/ScrollReveal"

export function OfficeLocations() {
  return (
    <section className="py-16 md:py-20 px-8 md:px-12 border-t border-white/10">
      <ScrollReveal className="mb-12 max-w-6xl">
        <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">LOCATION</p>
        <h2 className="font-sans text-3xl md:text-4xl font-light italic">Where We Work</h2>
      </ScrollReveal>

      <div className="max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-8">
        {offices.map((office, index) => (
          <ScrollReveal key={office.id} delay={index * 0.1} className="lg:col-span-2">
            <motion.div whileHover={{ y: -4 }} className="h-full p-8 md:p-10 border border-white/10 rounded-2xl bg-gradient-to-br from-white/[0.03] to-transparent">
              <h3 className="font-sans text-2xl font-light mb-8">{office.name}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-mono text-sm text-muted-foreground">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <p>{office.addressLine1}, {office.addressLine2}, {office.city}, {office.state} {office.postalCode}, {office.country}</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                    <a href={`mailto:${office.email}`} className="hover:text-foreground transition-colors">{office.email}</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>{office.phone}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>
        ))}

        <ScrollReveal delay={0.15}>
          <motion.div whileHover={{ y: -4 }} className="h-full p-8 border border-white/10 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-5 h-5 text-accent" />
                <h3 className="font-sans text-xl font-light">Business Hours</h3>
              </div>
              <div className="space-y-3 font-mono text-sm text-muted-foreground">
                <p>{company.businessHours.weekdays}</p>
                <p>{company.businessHours.saturday}</p>
                <p>{company.businessHours.sunday}</p>
              </div>
            </div>
            <div className="mt-8 h-32 border border-white/10 rounded-xl bg-white/[0.02] flex items-center justify-center">
              <p className="font-mono text-[10px] text-muted-foreground tracking-widest">VADODARA, GUJARAT</p>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  )
}
