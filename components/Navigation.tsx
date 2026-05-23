'use client'

import { useEffect, useState } from 'react'
import { useDemoModal } from '@/components/DemoModal'
import { cn } from '@/lib/utils'

const LINKS = [
  { label: 'Le Marais', href: '#marais' },
  { label: 'La Signature', href: '#palette' },
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
        scrolled ? 'border-b border-noir/10 bg-lait/85 backdrop-blur-md' : 'bg-transparent'
      )}
    >
      <nav className="wrap-wide flex h-16 items-center justify-between">
        <a href="#top" className="font-sans font-bold uppercase tracking-[0.18em] text-noir">
          <span className="hidden text-[13px] sm:inline">Artistes Coiffeurs Coloristes</span>
          <span className="text-[14px] sm:hidden">A·C·C</span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="link-underline font-sans text-[12px] uppercase tracking-[0.12em] text-noir/70 transition-colors hover:text-noir"
            >
              {l.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={open}
          className="bg-noir px-5 py-2.5 font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-lait transition-colors hover:bg-or md:text-[12px]"
        >
          Réserver
        </button>
      </nav>
    </header>
  )
}
