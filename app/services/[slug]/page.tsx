import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { PageShell } from "@/components/layout/PageShell"
import { PageHero } from "@/components/sections/PageHero"
import { ServiceDetailContent } from "@/components/pages/ServiceDetailContent"
import { buildMetadata, serviceSchema, breadcrumbSchema } from "@/lib/seo"
import { getServiceBySlug, getAllServiceSlugs, getRelatedServices } from "@/lib/data"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return {}
  return buildMetadata({
    title: service.title,
    description: service.metaDescription,
    keywords: service.keywords,
    path: `/services/${service.slug}/`,
  })
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) notFound()

  const related = getRelatedServices(service.relatedServices)

  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            serviceSchema(service),
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Services", path: "/services/" },
              { name: service.title, path: `/services/${service.slug}/` },
            ]),
          ]),
        }}
      />
      <PageHero label={`SERVICE — ${service.category.toUpperCase()}`} title={service.title} subtitle={service.heroSubtitle} />
      <ServiceDetailContent service={service} related={related} />
    </PageShell>
  )
}
