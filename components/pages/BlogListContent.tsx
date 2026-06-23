"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight, Clock, Calendar } from "lucide-react"
import type { BlogPost } from "@/lib/blogs"
import { ScrollReveal } from "@/components/ui/ScrollReveal"

interface BlogListContentProps {
  blogs: BlogPost[]
  categories: string[]
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })
}

export function BlogListContent({ blogs, categories }: BlogListContentProps) {
  const [activeCategory, setActiveCategory] = useState("All")

  const filtered =
    activeCategory === "All" ? blogs : blogs.filter((b) => b.category === activeCategory)

  const sorted = [...filtered].sort(
    (a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  )

  return (
    <section className="py-16 md:py-24 px-8 md:px-12">
      <ScrollReveal className="mb-10">
        <div className="flex flex-wrap gap-2 md:gap-3">
          <button
            type="button"
            onClick={() => setActiveCategory("All")}
            className={`font-mono text-xs px-4 py-2 rounded-full border transition-colors ${
              activeCategory === "All"
                ? "border-accent text-accent bg-accent/10"
                : "border-white/15 text-muted-foreground hover:border-white/30 hover:text-foreground"
            }`}
          >
            ALL ({blogs.length})
          </button>
          {categories.map((category) => {
            const count = blogs.filter((b) => b.category === category).length
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`font-mono text-xs px-4 py-2 rounded-full border transition-colors ${
                  activeCategory === category
                    ? "border-accent text-accent bg-accent/10"
                    : "border-white/15 text-muted-foreground hover:border-white/30 hover:text-foreground"
                }`}
              >
                {category.toUpperCase()} ({count})
              </button>
            )
          })}
        </div>
      </ScrollReveal>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="max-w-6xl mx-auto"
        >
          {activeCategory !== "All" && (
            <div className="flex items-end justify-between mb-10 pb-6 border-b border-white/10">
              <div>
                <span className="font-mono text-xs text-accent">CATEGORY</span>
                <h2 className="font-sans text-3xl md:text-4xl font-light italic mt-2">{activeCategory}</h2>
              </div>
              <span className="font-mono text-xs text-muted-foreground hidden md:block">
                {sorted.length} ARTICLES
              </span>
            </div>
          )}

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
                      <Calendar className="w-3 h-3" />
                      {formatDate(post.publishedDate)}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  )
}
