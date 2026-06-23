import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { PageShell } from "@/components/layout/PageShell"
import { BlogDetailContent } from "@/components/pages/BlogDetailContent"
import { buildMetadata, articleSchema, breadcrumbSchema } from "@/lib/seo"
import { getBlogBySlug, getAllBlogSlugs, getRelatedBlogs } from "@/lib/data"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogBySlug(slug)
  if (!post) return {}
  return buildMetadata({
    title: post.title,
    description: post.metaDescription,
    keywords: post.keywords,
    path: `/blog/${post.slug}/`,
  })
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params
  const post = getBlogBySlug(slug)
  if (!post) notFound()

  const related = getRelatedBlogs(post.relatedPosts)

  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            articleSchema(post),
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Blog", path: "/blog/" },
              { name: post.title, path: `/blog/${post.slug}/` },
            ]),
          ]),
        }}
      />

      <header className="relative overflow-hidden bg-[#050505] border-b border-white/10 pt-32 md:pt-40 pb-12 md:pb-16 px-8 md:px-12">
        <div className="absolute top-1/3 -right-24 w-72 h-72 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto">
          <nav className="flex flex-wrap items-center gap-3 mb-8 font-mono text-xs text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog/" className="hover:text-foreground transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-accent">{post.category}</span>
          </nav>

          <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">
            BLOG — {post.category.toUpperCase()}
          </p>
          <h1 className="font-sans text-3xl md:text-5xl lg:text-6xl font-light tracking-tight text-balance max-w-4xl">
            {post.title}
          </h1>
          <p className="font-mono text-sm text-muted-foreground mt-6 max-w-2xl leading-relaxed line-clamp-2 md:line-clamp-none">
            {post.excerpt}
          </p>

          <Link
            href="/blog/"
            className="group inline-flex items-center gap-2 font-mono text-xs tracking-wider text-muted-foreground hover:text-accent transition-colors mt-8"
          >
            <ArrowUpRight className="w-3.5 h-3.5 rotate-180" />
            BACK TO BLOG
          </Link>
        </div>
      </header>

      <BlogDetailContent post={post} related={related} />
    </PageShell>
  )
}
