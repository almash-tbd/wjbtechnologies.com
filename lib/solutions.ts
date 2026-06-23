export interface SolutionUseCase {
  title: string
  description: string
}

export type SolutionIcon = "database" | "circle-dollar-sign" | "heart" | "shopping-cart"

export interface Solution {
  slug: string
  title: string
  shortDescription: string
  heroSubtitle: string
  icon: SolutionIcon
  popular?: boolean
  challenges: string[]
  features: string[]
  useCases: SolutionUseCase[]
  whoItsFor: string[]
  technologies: string[]
  process: { step: string; description: string }[]
  content: string[]
  outcomes: string[]
  relatedSolutions: string[]
  relatedServices: string[]
  metaDescription: string
  keywords: string[]
}
