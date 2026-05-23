'use client'

import { useEffect, useState } from 'react'
import { useDemoModal } from '@/components/DemoModal'
import { cn } from '@/lib/utils'

const LINKS = [
  { label: 'Le Marais', href: '#marais' },
  { label: 'David', href: '#palette' },
  { label: 'Prestations', href: '#services' },
  { label: 'Galerie', href: '#galerie' },
  { label: 'Contact', href: '#contact' },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const { open } = useDemoModal()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-11 z-[65] transition-all duration-500 md:top-9',
        scrolled ? 'border-b border-noir/10 bg-lait/90 text-noir backdrop-blur-md' : 'border-b border-white/15 bg-transparent text-white'
      )}
    >
      <nav className="wrap-wide flex h-[60px] items-center justify-between">
        <a href="#top" className="font-display text-[17px] tracking-tight">
          <span className="hidden sm:inline">Artistes Coiffeurs Coloristes</span>
          <span className="sm:hidden">A.C.C.</span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="link-underline font-sans text-[11px] uppercase tracking-[0.2em] opacity-80 transition-opacity hover:opacity-100"
            >
              {l.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={open}
          className="border border-current px-4 py-2 font-sans text-[11px] uppercase tracking-[0.2em] transition-colors hover:bg-or hover:border-or hover:text-lait"
        >
          Réserver
        </button>
      </nav>
    </header>
  )
}
