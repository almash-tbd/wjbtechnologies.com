"use client"

import Link from "next/link"
import { ArrowUpRight, Clock } from "lucide-react"
import type { BlogPost } from "@/lib/blogs"
import { ScrollReveal } from "@/components/ui/ScrollReveal"

interface BlogListContentProps {
  blogs: BlogPost[]
}

export function BlogListContent({ blogs }: BlogListContentProps) {
  const sorted = [...blogs].sort(
    (a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  )

  return (
    <section className="py-16 md:py-24 px-8 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {sorted.map((post, index) => (
            <ScrollReveal key={post.slug} delay={index * 0.04}>
              <Link
                href={`/blog/${post.slug}/`}
                data-cursor-hover
                className="group block h-full p-6 md:p-8 border border-white/10 rounded-2xl bg-white/[0.02] hover:border-accent/40 hover:bg-white/[0.04] transition-colors"
              >
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="font-mono text-[10px] tracking-widest text-accent px-3 py-1 border border-accent/30 rounded-full">
                    {post.category}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-accent group-hover:rotate-45 transition-all" />
                </div>

                <h3 className="font-sans text-xl md:text-2xl font-light mb-3 group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                <p className="font-mono text-xs text-muted-foreground leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap items-center gap-4 font-mono text-[10px] text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
