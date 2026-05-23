'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface RevealProps {
  children: ReactNode
  className?: string
  variant?: 'up' | 'ink'
  delay?: number
  threshold?: number
}

export function Reveal({ children, className, variant = 'up', delay = 0, threshold = 0.16 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [seen, setSeen] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSeen(true)
            io.unobserve(entry.target)
          }
        })
      },
      { threshold }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [threshold])

  return (
    <div
      ref={ref}
      className={cn(variant === 'ink' ? 'ink' : 'reveal', seen && 'in', className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
