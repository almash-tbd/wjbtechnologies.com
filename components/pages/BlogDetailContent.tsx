"use client"

import Link from "next/link"
import { ArrowUpRight, Clock, Tag, User } from "lucide-react"
import type { BlogPost } from "@/lib/blogs"
import { ScrollReveal } from "@/components/ui/ScrollReveal"
import { CTASection } from "@/components/sections/CTASection"

interface BlogDetailContentProps {
  post: BlogPost
  related: BlogPost[]
}

export function BlogDetailContent({ post, related }: BlogDetailContentProps) {
  const [lead, ...body] = post.content

  return (
    <>
      <section className="py-14 md:py-20 px-8 md:px-12 border-b border-white/10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <ScrollReveal className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
            <div className="border border-white/10 rounded-2xl p-6 md:p-7 bg-white/[0.02]">
              <p className="font-mono text-[10px] tracking-[0.3em] text-accent mb-6">ARTICLE INFO</p>

              <div className="space-y-5 mb-8">
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-mono text-[10px] text-muted-foreground mb-1">READ TIME</p>
                    <p className="font-sans text-sm">{post.readTime}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <User className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-mono text-[10px] text-muted-foreground mb-1">AUTHOR</p>
                    <p className="font-sans text-sm">{post.author}</p>
                  </div>
                </div>
              </div>

              <span className="inline-block font-mono text-[10px] tracking-widest text-accent px-3 py-1.5 border border-accent/30 rounded-full mb-6">
                {post.category}
              </span>

              {post.tags.length > 0 && (
                <div className="pt-6 border-t border-white/10">
                  <div className="flex items-center gap-2 mb-3">
                    <Tag className="w-3.5 h-3.5 text-muted-foreground" />
                    <span className="font-mono text-[10px] tracking-widest text-muted-foreground">TAGS</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span key={tag} className="font-mono text-[10px] px-2.5 py-1 border border-white/15 rounded-full text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-8 pt-6 border-t border-white/10 flex flex-col gap-3">
                <Link
                  href="/blog/"
                  className="group inline-flex items-center gap-2 font-mono text-xs tracking-wider text-muted-foreground hover:text-accent transition-colors"
                >
                  <ArrowUpRight className="w-3.5 h-3.5 rotate-180" />
                  ALL ARTICLES
                </Link>
                <Link
                  href="/contact/"
                  className="group inline-flex items-center gap-2 font-mono text-xs tracking-wider border border-white/15 rounded-full px-4 py-2 hover:border-accent hover:text-accent transition-colors"
                >
                  DISCUSS THIS TOPIC
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:rotate-45 transition-transform" />
                </Link>
              </div>
            </div>
          </ScrollReveal>

          <article className="lg:col-span-8">
            <ScrollReveal>
              <p className="font-sans text-xl md:text-2xl lg:text-3xl font-light italic leading-relaxed text-foreground/90 mb-10 pb-10 border-b border-white/10">
                {lead}
              </p>
            </ScrollReveal>

            <div className="space-y-0">
              {body.map((paragraph, i) => {
                const isHighlight = i === 1
                return (
                  <ScrollReveal key={paragraph.slice(0, 48)} delay={i * 0.03}>
                    <div
                      className={`relative py-8 border-b border-white/10 last:border-0 ${
                        isHighlight ? "my-4 px-6 md:px-8 border border-accent/20 rounded-2xl bg-accent/[0.04]" : ""
                      }`}
                    >
                      {!isHighlight && (
                        <span className="font-mono text-xs text-accent mb-4 block">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      )}
                      {isHighlight && (
                        <p className="font-mono text-[10px] tracking-widest text-accent mb-4">KEY INSIGHT</p>
                      )}
                      <p className="font-mono text-sm text-muted-foreground leading-relaxed">{paragraph}</p>
                    </div>
                  </ScrollReveal>
                )
              })}
            </div>
          </article>
        </div>
      </section>

      {post.tags.length > 0 && (
        <section className="py-8 overflow-hidden border-b border-white/10 bg-white/[0.01]">
          <div className="flex animate-marquee-left whitespace-nowrap" style={{ width: "fit-content" }}>
            {[...post.tags, ...post.tags, ...post.tags, ...post.tags].map((tag, i) => (
              <span
                key={`${tag}-${i}`}
                className="font-sans text-2xl md:text-4xl font-light mx-8 md:mx-14"
                style={{
                  WebkitTextStroke: i % 2 === 0 ? "1px rgba(255,255,255,0.2)" : "none",
                  color: i % 2 === 0 ? "transparent" : "inherit",
                }}
              >
                {tag.toUpperCase()}
                <span className="mx-4 text-white/15">/</span>
              </span>
            ))}
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="py-16 md:py-20 px-8 md:px-12 border-b border-white/10">
          <ScrollReveal className="mb-8 max-w-6xl mx-auto flex items-end justify-between gap-4">
            <div>
              <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-2">RELATED READING</p>
              <h2 className="font-sans text-2xl md:text-4xl font-light italic">Continue Reading</h2>
            </div>
            <Link
              href="/blog/"
              className="hidden md:inline-flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-accent transition-colors"
            >
              VIEW ALL
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </ScrollReveal>

          <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide max-w-6xl mx-auto">
            {related.map((item, i) => (
              <ScrollReveal key={item.slug} delay={i * 0.05}>
                <Link
                  href={`/blog/${item.slug}/`}
                  className="group flex-shrink-0 w-[300px] md:w-[340px] p-6 border border-white/10 rounded-2xl bg-white/[0.02] hover:border-accent/40 transition-colors"
                >
                  <span className="font-mono text-[10px] text-accent">{item.category}</span>
                  <h3 className="font-sans text-lg md:text-xl font-light mt-3 mb-3 group-hover:text-accent transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="font-mono text-xs text-muted-foreground line-clamp-3 mb-4">{item.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] text-muted-foreground">{item.readTime}</span>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-accent group-hover:rotate-45 transition-all" />
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </section>
      )}

      <CTASection />
    </>
  )
}
