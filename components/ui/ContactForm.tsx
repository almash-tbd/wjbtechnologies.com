"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Loader2 } from "lucide-react"
import { ThankYouModal } from "@/components/ui/ThankYouModal"

interface ContactFormProps {
  showServiceField?: boolean
  className?: string
}

export function ContactForm({ showServiceField = false, className = "" }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email"
    if (!formData.phone.trim()) newErrors.phone = "Phone is required"
    if (!formData.message.trim()) newErrors.message = "Message is required"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1000))
    setLoading(false)
    setShowSuccess(true)
    setFormData({ name: "", email: "", phone: "", company: "", service: "", message: "" })
  }

  const fields = [
    { name: "name", label: "Full Name", type: "text", required: true },
    { name: "email", label: "Email", type: "email", required: true },
    { name: "phone", label: "Phone", type: "tel", required: true },
    { name: "company", label: "Company", type: "text", required: false },
  ] as const

  return (
    <>
      <form onSubmit={handleSubmit} className={`space-y-5 ${className}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {fields.map((field) => (
            <div key={field.name}>
              <label className="block font-mono text-xs tracking-widest text-muted-foreground mb-2">
                {field.label}{field.required && " *"}
              </label>
              <input
                type={field.type}
                value={formData[field.name]}
                onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg font-mono text-sm focus:outline-none focus:border-accent transition-colors"
              />
              {errors[field.name] && <p className="text-red-400 font-mono text-xs mt-1">{errors[field.name]}</p>}
            </div>
          ))}
        </div>
        {showServiceField && (
          <div>
            <label className="block font-mono text-xs tracking-widest text-muted-foreground mb-2">Service Interest</label>
            <input
              type="text"
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg font-mono text-sm focus:outline-none focus:border-accent transition-colors"
            />
          </div>
        )}
        <div>
          <label className="block font-mono text-xs tracking-widest text-muted-foreground mb-2">Message *</label>
          <textarea
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg font-mono text-sm focus:outline-none focus:border-accent transition-colors resize-none"
          />
          {errors.message && <p className="text-red-400 font-mono text-xs mt-1">{errors.message}</p>}
        </div>
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 rounded-full font-mono text-xs tracking-widest uppercase bg-transparent hover:bg-white hover:text-black transition-colors duration-500 disabled:opacity-50"
        >
          {loading ? <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</> : "Submit Inquiry"}
        </button>
      </form>
      <ThankYouModal isOpen={showSuccess} onClose={() => setShowSuccess(false)} />
    </>
  )
}

interface CareerFormProps {
  jobTitle: string
  isOpen: boolean
  onClose: () => void
}

export function CareerForm({ jobTitle, isOpen, onClose }: CareerFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    coverLetter: "",
  })
  const [resume, setResume] = useState<File | null>(null)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email"
    if (!formData.phone.trim()) newErrors.phone = "Phone is required"
    if (!formData.location.trim()) newErrors.location = "Location is required"
    if (!resume) newErrors.resume = "Resume is required"
    else if (resume.size > 5 * 1024 * 1024) newErrors.resume = "File must be under 5MB"
    else if (!/\.(pdf|doc|docx)$/i.test(resume.name)) newErrors.resume = "Only PDF or DOC files allowed"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1000))
    setLoading(false)
    onClose()
    setShowSuccess(true)
    setFormData({ name: "", email: "", phone: "", location: "", coverLetter: "" })
    setResume(null)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setResume(file)
  }

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] flex items-center justify-center p-4"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            onClick={onClose}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative bg-background border border-white/10 rounded-2xl p-6 md:p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={onClose} className="absolute top-4 right-4 p-1 text-muted-foreground hover:text-foreground" aria-label="Close">
                <X className="w-5 h-5" />
              </button>
              <h3 className="font-sans text-2xl font-light mb-2">Apply for Position</h3>
              <p className="font-mono text-xs text-muted-foreground mb-6">{jobTitle}</p>
              <form onSubmit={handleSubmit} className="space-y-4">
                {(["name", "email", "phone", "location"] as const).map((field) => (
                  <div key={field}>
                    <label className="block font-mono text-xs tracking-widest text-muted-foreground mb-2 capitalize">
                      {field === "name" ? "Full Name" : field === "location" ? "Current Location" : field} *
                    </label>
                    <input
                      type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                      value={formData[field]}
                      onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg font-mono text-sm focus:outline-none focus:border-accent"
                    />
                    {errors[field] && <p className="text-red-400 font-mono text-xs mt-1">{errors[field]}</p>}
                  </div>
                ))}
                <div>
                  <label className="block font-mono text-xs tracking-widest text-muted-foreground mb-2">Resume Upload * (PDF/DOC, max 5MB)</label>
                  <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} className="w-full font-mono text-xs text-muted-foreground" />
                  {errors.resume && <p className="text-red-400 font-mono text-xs mt-1">{errors.resume}</p>}
                </div>
                <div>
                  <label className="block font-mono text-xs tracking-widest text-muted-foreground mb-2">Cover Letter (Optional)</label>
                  <textarea
                    rows={4}
                    value={formData.coverLetter}
                    onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg font-mono text-sm focus:outline-none focus:border-accent resize-none"
                  />
                </div>
                <button type="submit" disabled={loading} className="w-full py-3 border border-white/20 rounded-full font-mono text-xs tracking-widest uppercase hover:bg-white hover:text-black transition-colors disabled:opacity-50 flex items-center justify-center gap-2">
                  {loading ? <><Loader2 className="w-4 h-4 animate-spin" /> Submitting...</> : "Submit Application"}
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <ThankYouModal
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        message="Thank you! Our team will review your application and reach you soon."
      />
    </>
  )
}
