import type { Metadata } from "next"
import company from "@/data/company.json"

export interface PageSEO {
  title: string
  description: string
  keywords?: string[]
  path?: string
}

export function buildMetadata({ title, description, keywords, path = "" }: PageSEO): Metadata {
  const url = `${company.url}${path}`
  return {
    title: `${title} | ${company.brandName}`,
    description,
    keywords: keywords?.join(", "),
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/icon-light-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/icon-dark-32x32.png", sizes: "32x32", type: "image/png", media: "(prefers-color-scheme: dark)" },
      ],
      apple: [
        { url: "/apple-icon.png", sizes: "180x180", type: "image/png" }
      ]
    },
    openGraph: {
      title: `${title} | ${company.brandName}`,
      description,
      url,
      siteName: company.brandName,
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: `${company.url}/abstract-neural-network-visualization-dark-theme.jpg`,
          width: 1200,
          height: 630,
          alt: `${title} | ${company.brandName}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${company.brandName}`,
      description,
      images: [`${company.url}/abstract-neural-network-visualization-dark-theme.jpg`],
    },
    alternates: {
      canonical: url,
    },
  }
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.brandName,
    url: company.url,
    email: company.email,
    foundingDate: String(company.establishedYear),
    description: company.description,
    address: {
      "@type": "PostalAddress",
      addressCountry: company.targetCountry,
    },
    sameAs: [],
  }
}

export function serviceSchema(service: { title: string; shortDescription: string; slug: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.shortDescription,
    provider: {
      "@type": "Organization",
      name: company.brandName,
      url: company.url,
    },
    areaServed: company.targetCountry,
    url: `${company.url}/services/${service.slug}/`,
  }
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${company.url}${item.path}`,
    })),
  }
}

export function solutionSchema(solution: { title: string; shortDescription: string; slug: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: solution.title,
    description: solution.shortDescription,
    provider: {
      "@type": "Organization",
      name: company.brandName,
      url: company.url,
    },
    areaServed: company.targetCountry,
    url: `${company.url}/solutions/${solution.slug}/`,
  }
}

export function articleSchema(post: {
  title: string
  excerpt: string
  slug: string
  publishedDate: string
  author: string
  category: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: company.brandName,
      url: company.url,
    },
    datePublished: post.publishedDate,
    articleSection: post.category,
    url: `${company.url}/blog/${post.slug}/`,
  }
}
