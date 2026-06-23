"use client"

import { motion } from "framer-motion"
import { Mail, Phone, Clock, MapPin } from "lucide-react"
import { ContactForm } from "@/components/ui/ContactForm"
import { ScrollReveal } from "@/components/ui/ScrollReveal"
import { company, offices } from "@/lib/data"

export function ContactContent() {
  const office = offices[0]

  return (
    <>
      <section className="py-16 md:py-24 px-8 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start space-y-10">
            <ScrollReveal>
              <h2 className="font-sans text-4xl md:text-5xl font-light italic mb-8">Let&apos;s Talk</h2>
              <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                Share your project vision. We respond with clarity—not generic sales pitches.
              </p>
            </ScrollReveal>

            {[
              { icon: Mail, label: "Email", value: company.email, href: `mailto:${company.email}` },
            ].map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 0.08}>
                <motion.div whileHover={{ x: 6 }} className="flex items-start gap-5 group">
                  <div className="p-3 border border-white/10 rounded-full group-hover:border-accent/50 transition-colors">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-mono text-xs tracking-widest text-muted-foreground mb-1">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="font-sans text-lg hover:text-accent transition-colors">{item.value}</a>
                    ) : (
                      <p className="font-sans text-lg">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}

            <ScrollReveal delay={0.25}>
              <div className="flex items-start gap-5">
                <div className="p-3 border border-white/10 rounded-full">
                  <Clock className="w-5 h-5 text-accent" />
                </div>
                <div className="font-mono text-xs text-muted-foreground space-y-1">
                  <p>{company.businessHours.weekdays}</p>
                  <p>{company.businessHours.saturday}</p>
                  <p>{company.businessHours.sunday}</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.15} className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 md:p-12 border border-white/10 rounded-3xl bg-gradient-to-br from-white/[0.04] to-transparent backdrop-blur-sm"
            >
              <p className="font-mono text-xs tracking-widest text-muted-foreground mb-6">PROJECT INQUIRY</p>
              <ContactForm showServiceField />
            </motion.div>
          </ScrollReveal>
        </div>
      </section>


    </>
  )
}
