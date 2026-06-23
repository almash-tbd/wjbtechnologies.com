import company from "@/data/company.json"
import offices from "@/data/offices.json"
import testimonials from "@/data/testimonials.json"
import faq from "@/data/faq.json"
import careers from "@/data/careers.json"
import about from "@/data/about.json"
import blogsData from "@/data/blogs.json"
import servicesData from "@/data/services.json"
import extrasData from "@/data/service-extras.json"
import solutionsData from "@/data/solutions.json"
import type { Service, ServiceExtras } from "@/lib/services"
import type { Solution } from "@/lib/solutions"
import type { BlogPost } from "@/lib/blogs"

export { company, offices, testimonials, faq, careers, about }

export const blogs = blogsData as BlogPost[]

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogs.find((b) => b.slug === slug)
}

export function getAllBlogSlugs(): string[] {
  return blogs.map((b) => b.slug)
}

export function getBlogCategories(): string[] {
  return [...new Set(blogs.map((b) => b.category))]
}

export function getRelatedBlogs(slugs: string[]): BlogPost[] {
  return blogs.filter((b) => slugs.includes(b.slug))
}

export function getBlogsByCategory(category: string): BlogPost[] {
  return blogs.filter((b) => b.category === category)
}

export type EnrichedService = Service & ServiceExtras

const extras = extrasData as Record<string, ServiceExtras>

export const services: EnrichedService[] = (servicesData as Service[]).map((service) => {
  const extra = extras[service.slug]
  if (!extra) {
    return {
      ...service,
      whoItsFor: [],
      useCases: [],
      whyChoose: "",
      industries: [],
      deliverables: [],
      additionalContent: [],
    }
  }
  return {
    ...service,
    ...extra,
    content: [...service.content, ...extra.additionalContent],
  }
})

export function getServiceBySlug(slug: string): EnrichedService | undefined {
  return services.find((s) => s.slug === slug)
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug)
}

export function getRelatedServices(slugs: string[]): EnrichedService[] {
  return services.filter((s) => slugs.includes(s.slug))
}

export function getAllFaqs() {
  return faq.flatMap((category) =>
    category.faqs.map((item) => ({
      ...item,
      category: category.title,
    }))
  )
}

export const solutions = solutionsData as Solution[]

export function getSolutionBySlug(slug: string): Solution | undefined {
  return solutions.find((s) => s.slug === slug)
}

export function getAllSolutionSlugs(): string[] {
  return solutions.map((s) => s.slug)
}

export function getRelatedSolutions(slugs: string[]): Solution[] {
  return solutions.filter((s) => slugs.includes(s.slug))
}
