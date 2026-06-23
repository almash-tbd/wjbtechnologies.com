import { PageShell } from "@/components/layout/PageShell"
import { Hero } from "@/components/sections/Hero"
import { AboutSection } from "@/components/sections/AboutSection"
import { ServicesSection } from "@/components/sections/Services"
import { WhyChooseSection } from "@/components/sections/WhyChooseSection"
import { ProcessSection } from "@/components/sections/ProcessSection"
import { TestimonialsPreview } from "@/components/sections/TestimonialsPreview"
import { FAQPreview } from "@/components/sections/FAQPreview"
import { ContactSection } from "@/components/sections/ContactSection"
import { SectionBlend } from "@/components/section-blend"
import { CTASection } from "@/components/sections/CTASection"

export default function Home() {
  return (
    <PageShell>
      <Hero />
      <SectionBlend />
      <AboutSection />
      <ServicesSection />
      <WhyChooseSection />
      <ProcessSection />
      <TestimonialsPreview />
      <FAQPreview />
      <ContactSection />
      <CTASection />
    </PageShell>
  )
}
