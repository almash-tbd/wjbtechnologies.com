"use client"

import { useEffect } from "react"
import { Navbar } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { CustomCursor } from "@/components/custom-cursor"
import { SmoothScroll } from "@/components/smooth-scroll"

interface PageShellProps {
  children: React.ReactNode
  showCursor?: boolean
}

export function PageShell({ children, showCursor = true }: PageShellProps) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <SmoothScroll>
      {showCursor && <CustomCursor />}
      <Navbar />
      <main>{children}</main>
      <Footer />
    </SmoothScroll>
  )
}
