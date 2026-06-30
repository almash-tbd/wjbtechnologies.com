"use client"

import { useState, useEffect, useMemo } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronRight, ArrowUpRight } from "lucide-react"
import { company, services, solutions } from "@/lib/data"
import { SolutionIcon } from "@/components/ui/SolutionIcon"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/" },
  { label: "Blog", href: "/blog/" },
  { label: "Careers", href: "/careers/" },
  { label: "Contact", href: "/contact/" },
]

const serviceCategories = [...new Set(services.map((s) => s.category))]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false)
  const pathname = usePathname()

  const servicesByCategory = useMemo(
    () =>
      serviceCategories.map((category) => ({
        category,
        items: services.filter((s) => s.category === category),
      })),
    []
  )

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    const normalized = href.endsWith("/") ? href.slice(0, -1) : href
    const current = pathname.endsWith("/") && pathname !== "/" ? pathname.slice(0, -1) : pathname
    return current === normalized
  }

  const isServicesActive = pathname === "/services" || pathname.startsWith("/services/")
  const isSolutionsActive = pathname === "/solutions" || pathname.startsWith("/solutions/")

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
    setIsMobileServicesOpen(false)
    setIsMobileSolutionsOpen(false)
    setIsServicesOpen(false)
    setIsSolutionsOpen(false)
  }, [pathname])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : ""
          }`}
      >
        <nav className="flex items-center justify-between px-6 py-4 md:px-12 md:py-5">
          <Link href="/" className="group flex items-center gap-3" data-cursor-hover>
            <Image
              src="/images/logo.png"
              alt={`${company.brandName} Logo`}
              width={220}
              height={69}
              className="h-8 md:h-18 w-auto object-contain brightness-100 transition-opacity duration-300 group-hover:opacity-90"
              priority
            />
          </Link>

          <ul className="hidden lg:flex items-center gap-6">
            <li>
              <Link
                href="/"
                data-cursor-hover
                className={`group relative font-mono text-xs tracking-wider transition-colors duration-300 ${isActive("/") ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                <span className="text-accent mr-1">01</span>
                HOME
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground group-hover:w-full transition-all duration-300" />
              </Link>
            </li>

            <li>
              <Link
                href="/about/"
                data-cursor-hover
                className={`group relative font-mono text-xs tracking-wider transition-colors duration-300 ${isActive("/about/") ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                <span className="text-accent mr-1">02</span>
                ABOUT
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground group-hover:w-full transition-all duration-300" />
              </Link>
            </li>

            <li
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <div className="flex items-center gap-1">
                <Link
                  href="/services/"
                  data-cursor-hover
                  className={`group relative font-mono text-xs tracking-wider transition-colors duration-300 ${isServicesActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                  <span className="text-accent mr-1">03</span>
                  SERVICES
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground group-hover:w-full transition-all duration-300" />
                </Link>
                <ChevronDown
                  className={`w-3 h-3 text-muted-foreground transition-transform duration-300 ${isServicesOpen ? "rotate-180 text-accent" : ""
                    }`}
                />
              </div>

              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
                  >
                    <div className="w-[min(92vw,820px)] rounded-2xl border border-white/10 bg-background/95 backdrop-blur-xl shadow-2xl shadow-black/40 overflow-hidden">
                      <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/[0.02]">
                        <div>
                          <p className="font-mono text-[10px] tracking-[0.25em] text-accent">03 — SERVICES</p>
                          <p className="font-sans text-sm font-light italic text-muted-foreground mt-1">
                            {services.length} solutions across {serviceCategories.length} categories
                          </p>
                        </div>
                        <Link
                          href="/services/"
                          data-cursor-hover
                          className="group inline-flex items-center gap-2 font-mono text-xs text-foreground hover:text-accent transition-colors"
                        >
                          VIEW ALL
                          <ArrowUpRight className="w-3.5 h-3.5 group-hover:rotate-45 transition-transform duration-300" />
                        </Link>
                      </div>

                      <div className="grid grid-cols-3 gap-x-8 gap-y-6 p-6 max-h-[min(70vh,420px)] overflow-y-auto scrollbar-hide">
                        {servicesByCategory.map((group, groupIndex) => (
                          <div key={group.category}>
                            <p className="font-mono text-[10px] tracking-widest text-accent mb-3">
                              0{groupIndex + 1} — {group.category.toUpperCase()}
                            </p>
                            <ul className="space-y-1">
                              {group.items.map((service) => (
                                <li key={service.slug}>
                                  <Link
                                    href={`/services/${service.slug}/`}
                                    data-cursor-hover
                                    className={`group flex items-start gap-2 rounded-lg px-2 py-2 transition-colors hover:bg-white/[0.04] ${isActive(`/services/${service.slug}/`) ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                                      }`}
                                  >
                                    <ArrowUpRight className="w-3 h-3 mt-0.5 flex-shrink-0 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-accent" />
                                    <span className="font-mono text-[11px] leading-snug">{service.title}</span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            <li
              className="relative"
              onMouseEnter={() => setIsSolutionsOpen(true)}
              onMouseLeave={() => setIsSolutionsOpen(false)}
            >
              <div className="flex items-center gap-1">
                <Link
                  href="/solutions/"
                  data-cursor-hover
                  className={`group relative font-mono text-xs tracking-wider transition-colors duration-300 ${isSolutionsActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                  <span className="text-accent mr-1">04</span>
                  SOLUTIONS
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground group-hover:w-full transition-all duration-300" />
                </Link>
                <ChevronDown
                  className={`w-3 h-3 text-muted-foreground transition-transform duration-300 ${isSolutionsOpen ? "rotate-180 text-accent" : ""
                    }`}
                />
              </div>

              <AnimatePresence>
                {isSolutionsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
                  >
                    <div className="w-[min(92vw,380px)] rounded-2xl border border-white/10 bg-background/95 backdrop-blur-xl shadow-2xl shadow-black/40 overflow-hidden">
                      <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-white/[0.02]">
                        <div>
                          <p className="font-mono text-[10px] tracking-[0.25em] text-accent">04 — SOLUTIONS</p>
                          <p className="font-sans text-sm font-light italic text-muted-foreground mt-1">
                            Industry-focused platforms
                          </p>
                        </div>
                        <Link
                          href="/solutions/"
                          data-cursor-hover
                          className="group inline-flex items-center gap-2 font-mono text-xs text-foreground hover:text-accent transition-colors"
                        >
                          VIEW ALL
                          <ArrowUpRight className="w-3.5 h-3.5 group-hover:rotate-45 transition-transform duration-300" />
                        </Link>
                      </div>

                      <ul className="p-2">
                        {solutions.map((solution) => (
                          <li key={solution.slug}>
                            <Link
                              href={`/solutions/${solution.slug}/`}
                              data-cursor-hover
                              className={`group flex items-center gap-4 px-4 py-4 rounded-xl border border-transparent transition-all duration-200 hover:border-white/30 hover:bg-white/[0.03] ${isActive(`/solutions/${solution.slug}/`) ? "border-white/25 bg-white/[0.04]" : ""
                                }`}
                            >
                              <div className="flex-shrink-0 w-10 h-10 rounded-lg border border-white/15 bg-white/[0.04] flex items-center justify-center text-foreground">
                                <SolutionIcon name={solution.icon} className="w-4 h-4" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-0.5">
                                  <span className="font-sans text-sm font-medium text-foreground">{solution.title}</span>
                                  {solution.popular && (
                                    <span className="font-mono text-[9px] tracking-wider text-foreground px-2 py-0.5 border border-white/25 rounded-full">
                                      Popular
                                    </span>
                                  )}
                                </div>
                                <p className="font-mono text-[11px] text-muted-foreground">{solution.shortDescription}</p>
                              </div>
                              <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0" />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {navLinks.slice(2).map((link, index) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  data-cursor-hover
                  className={`group relative font-mono text-xs tracking-wider transition-colors duration-300 ${isActive(link.href) ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                  <span className="text-accent mr-1">0{index + 5}</span>
                  {link.label.toUpperCase()}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground group-hover:w-full transition-all duration-300" />
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            <span className="font-mono text-xs tracking-wider text-muted-foreground">AVAILABLE FOR PROJECTS</span>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <motion.span animate={isMenuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }} className="w-6 h-px bg-foreground origin-center" />
            <motion.span animate={isMenuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }} className="w-6 h-px bg-foreground" />
            <motion.span animate={isMenuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }} className="w-6 h-px bg-foreground origin-center" />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-lg lg:hidden overflow-y-auto"
          >
            <nav className="flex flex-col items-center px-8 pt-28 pb-12 min-h-full">
              <div className="w-full max-w-md space-y-6">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0 }}>
                  <Link href="/" className="group text-3xl font-sans tracking-tight text-foreground">
                    <span className="text-accent font-mono text-sm mr-2">01</span>
                    Home
                  </Link>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}>
                  <Link href="/about/" className="group text-3xl font-sans tracking-tight text-foreground">
                    <span className="text-accent font-mono text-sm mr-2">02</span>
                    About
                  </Link>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="border-t border-white/10 pt-6">
                  <button
                    type="button"
                    onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                    className="flex items-center justify-between w-full text-left"
                    aria-expanded={isMobileServicesOpen}
                  >
                    <span className="text-3xl font-sans tracking-tight text-foreground">
                      <span className="text-accent font-mono text-sm mr-2">03</span>
                      Services
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${isMobileServicesOpen ? "rotate-180 text-accent" : ""
                        }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isMobileServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-5 mb-2">
                          <Link
                            href="/services/"
                            className="inline-flex items-center gap-2 font-mono text-xs text-accent border border-accent/30 rounded-full px-4 py-2"
                          >
                            VIEW ALL SERVICES
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>

                        <div className="space-y-6 max-h-[45vh] overflow-y-auto scrollbar-hide pr-1">
                          {servicesByCategory.map((group, groupIndex) => (
                            <div key={group.category}>
                              <p className="font-mono text-[10px] tracking-widest text-accent mb-3">
                                0{groupIndex + 1} — {group.category.toUpperCase()}
                              </p>
                              <ul className="space-y-2 border-l border-white/10 pl-4">
                                {group.items.map((service) => (
                                  <li key={service.slug}>
                                    <Link
                                      href={`/services/${service.slug}/`}
                                      className={`font-mono text-sm transition-colors ${isActive(`/services/${service.slug}/`)
                                        ? "text-foreground"
                                        : "text-muted-foreground hover:text-foreground"
                                        }`}
                                    >
                                      {service.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }} className="border-t border-white/10 pt-6">
                  <button
                    type="button"
                    onClick={() => setIsMobileSolutionsOpen(!isMobileSolutionsOpen)}
                    className="flex items-center justify-between w-full text-left"
                    aria-expanded={isMobileSolutionsOpen}
                  >
                    <span className="text-3xl font-sans tracking-tight text-foreground">
                      <span className="text-accent font-mono text-sm mr-2">04</span>
                      Solutions
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${isMobileSolutionsOpen ? "rotate-180 text-accent" : ""
                        }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isMobileSolutionsOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-5 mb-2">
                          <Link
                            href="/solutions/"
                            className="inline-flex items-center gap-2 font-mono text-xs text-accent border border-accent/30 rounded-full px-4 py-2"
                          >
                            VIEW ALL SOLUTIONS
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>

                        <ul className="space-y-2 border-l border-white/10 pl-4">
                          {solutions.map((solution) => (
                            <li key={solution.slug}>
                              <Link
                                href={`/solutions/${solution.slug}/`}
                                className={`flex items-center gap-3 py-2 font-mono text-sm transition-colors ${isActive(`/solutions/${solution.slug}/`)
                                  ? "text-foreground"
                                  : "text-muted-foreground hover:text-foreground"
                                  }`}
                              >
                                <span className="w-8 h-8 rounded-lg border border-white/15 flex items-center justify-center flex-shrink-0">
                                  <SolutionIcon name={solution.icon} className="w-3.5 h-3.5" />
                                </span>
                                <span>
                                  {solution.title}
                                  {solution.popular && (
                                    <span className="ml-2 font-mono text-[9px] text-muted-foreground border border-white/20 rounded-full px-2 py-0.5">
                                      Popular
                                    </span>
                                  )}
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {navLinks.slice(2).map((link, index) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: 0.18 + index * 0.05 }}
                  >
                    <Link href={link.href} className="group text-3xl font-sans tracking-tight text-foreground">
                      <span className="text-accent font-mono text-sm mr-2">0{index + 5}</span>
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
