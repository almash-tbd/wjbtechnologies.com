"use client"

import { motion } from "framer-motion"
import { MapPin, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Job {
  id: string
  title: string
  department: string
  location: string
  type: string
  description: string
  requirements: string[]
}

interface JobCardProps {
  job: Job
  onApply: (job: Job) => void
  index?: number
}

export function JobCard({ job, onApply, index = 0 }: JobCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="p-6 md:p-8 border border-white/10 rounded-2xl bg-white/[0.02]"
    >
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <span className="font-mono text-[10px] tracking-widest text-accent px-3 py-1 border border-accent/30 rounded-full">{job.department}</span>
        <span className="font-mono text-[10px] tracking-widest text-muted-foreground px-3 py-1 border border-white/10 rounded-full">{job.type}</span>
      </div>
      <h3 className="font-sans text-2xl font-light mb-3">{job.title}</h3>
      <div className="flex items-center gap-2 text-muted-foreground mb-4">
        <MapPin className="w-4 h-4" />
        <span className="font-mono text-xs">{job.location}</span>
      </div>
      <p className="font-mono text-sm text-muted-foreground leading-relaxed mb-4">{job.description}</p>
      <div className="mb-6">
        <p className="font-mono text-xs tracking-widest text-muted-foreground mb-3 flex items-center gap-2">
          <Briefcase className="w-3 h-3" /> REQUIREMENTS
        </p>
        <ul className="space-y-2">
          {job.requirements.map((req) => (
            <li key={req} className="font-mono text-xs text-muted-foreground flex items-start gap-2">
              <span className="text-accent mt-1">—</span>
              {req}
            </li>
          ))}
        </ul>
      </div>
      <Button onClick={() => onApply(job)}>Apply Now</Button>
    </motion.div>
  )
}
