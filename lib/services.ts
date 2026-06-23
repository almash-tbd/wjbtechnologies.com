export interface ServiceUseCase {
  title: string
  description: string
}

export interface ServiceExtras {
  whoItsFor: string[]
  useCases: ServiceUseCase[]
  whyChoose: string
  industries: string[]
  deliverables: string[]
  additionalContent: string[]
}

export interface Service {
  slug: string
  title: string
  category: string
  shortDescription: string
  heroSubtitle: string
  features: string[]
  technologies: string[]
  process: { step: string; description: string }[]
  content: string[]
  relatedServices: string[]
  metaDescription: string
  keywords: string[]
}
