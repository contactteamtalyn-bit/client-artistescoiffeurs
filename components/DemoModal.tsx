'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { cn } from '@/lib/utils'

interface DemoModalContextValue {
  open: () => void
}

const DemoModalContext = createContext<DemoModalContextValue>({ open: () => {} })

export function useDemoModal() {
  return useContext(DemoModalContext)
}

export function DemoModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <DemoModalContext.Provider value={{ open: () => setIsOpen(true) }}>
      {children}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="border border-or bg-noir text-lait">
          <DialogHeader className="gap-3">
            <span className="eyebrow text-or-clair">Maquette · Maison Talyn</span>
            <DialogTitle className="font-display text-[28px] leading-tight text-lait">
              Maquette démonstration
            </DialogTitle>
            <DialogDescription className="font-sans text-[14px] font-light leading-relaxed text-sable/80">
              Ce bouton sera activé après finalisation du site avec Maison Talyn (réservation Planity,
              itinéraire, prise de rendez-vous réelle).
            </DialogDescription>
          </DialogHeader>
          <div className="mt-2 h-px w-full bg-or/40" />
          <a
            href="https://instagram.com/maison.talyn"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-flex items-center justify-center bg-or px-6 py-3 font-sans text-[12px] font-semibold uppercase tracking-[0.14em] text-lait transition-colors hover:bg-or-clair hover:text-noir"
          >
            Contacter Maison Talyn → @maison.talyn
          </a>
        </DialogContent>
      </Dialog>
    </DemoModalContext.Provider>
  )
}

interface DemoCTAProps {
  children: ReactNode
  className?: string
  ariaLabel?: string
}

export function DemoCTA({ children, className, ariaLabel }: DemoCTAProps) {
  const { open } = useDemoModal()
  return (
    <button type="button" onClick={open} aria-label={ariaLabel} className={cn(className)}>
      {children}
    </button>
  )
}
