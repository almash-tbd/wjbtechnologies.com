import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { PageShell } from "@/components/layout/PageShell"
import { PageHero } from "@/components/sections/PageHero"
import { SolutionDetailContent } from "@/components/pages/SolutionDetailContent"
import { buildMetadata, solutionSchema, breadcrumbSchema } from "@/lib/seo"
import { getSolutionBySlug, getAllSolutionSlugs, getRelatedSolutions, getRelatedServices } from "@/lib/data"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllSolutionSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const solution = getSolutionBySlug(slug)
  if (!solution) return {}
  return buildMetadata({
    title: solution.title,
    description: solution.metaDescription,
    keywords: solution.keywords,
    path: `/solutions/${solution.slug}/`,
  })
}

export default async function SolutionDetailPage({ params }: Props) {
  const { slug } = await params
  const solution = getSolutionBySlug(slug)
  if (!solution) notFound()

  const relatedSolutions = getRelatedSolutions(solution.relatedSolutions)
  const relatedServices = getRelatedServices(solution.relatedServices)

  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            solutionSchema(solution),
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Solutions", path: "/solutions/" },
              { name: solution.title, path: `/solutions/${solution.slug}/` },
            ]),
          ]),
        }}
      />
      <PageHero label="SOLUTION — INDUSTRY" title={solution.title} subtitle={solution.shortDescription} />
      <SolutionDetailContent solution={solution} relatedSolutions={relatedSolutions} relatedServices={relatedServices} />
    </PageShell>
  )
}
