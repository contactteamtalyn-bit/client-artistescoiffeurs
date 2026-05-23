'use client'

import { motion } from 'framer-motion'
import { SmartImage } from '@/components/ui/SmartImage'
import { DemoCTA } from '@/components/DemoModal'

const EASE = [0.16, 1, 0.3, 1] as const

export function Hero() {
  return (
    <section id="top" className="relative h-[100svh] min-h-[600px] w-full overflow-hidden bg-noir text-white">
      {/* Image couverture plein écran */}
      <motion.div
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: EASE }}
        className="absolute inset-0"
      >
        <SmartImage src="/images/hero/main.jpg" alt="Création couleur — Artistes Coiffeurs Coloristes, Le Marais" fill priority sizes="100vw" className="object-cover" style={{ filter: 'grayscale(0.15) contrast(1.05)' }} />
        <div aria-hidden className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(15,15,14,0.55) 0%, rgba(15,15,14,0.12) 30%, rgba(15,15,14,0.25) 62%, rgba(15,15,14,0.85) 100%)' }} />
      </motion.div>

      {/* Masthead haut */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="wrap-wide absolute inset-x-0 top-[84px] z-10 flex items-center gap-4 md:top-[96px]"
      >
        <span className="h-px flex-1 bg-white/30" />
        <span className="font-sans text-[10px] uppercase tracking-[0.34em] text-white/80">Coloration · Le Marais · Paris</span>
        <span className="h-px flex-1 bg-white/30" />
      </motion.div>

      {/* Titre couverture */}
      <div className="wrap-wide absolute inset-x-0 bottom-0 z-10 pb-12 md:pb-16">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-sans text-[11px] uppercase tracking-[0.28em] text-or-clair"
        >
          N°01 — Créateurs de couleurs
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.55, ease: EASE }}
          className="mt-3 font-display font-medium leading-[0.86]"
          style={{ fontSize: 'clamp(3.4rem, 13vw, 12rem)' }}
        >
          Créateurs
          <br />
          de <em className="font-normal italic">couleurs.</em>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="mt-8 flex flex-col gap-5 border-t border-white/20 pt-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="max-w-md font-sans text-[14px] font-light leading-relaxed text-white/80">
            Balayage, tie &amp; dye, ombré, mèches. Un artiste dédié à votre image — 42 rue Saint-Paul,
            à deux pas de la Place des Vosges.
          </p>
          <div className="flex items-center gap-6">
            <span className="font-sans text-[12px] uppercase tracking-[0.16em] text-white/70">4,6 ★ · 1 033 avis</span>
            <DemoCTA
              ariaLabel="Prendre rendez-vous"
              className="border border-white px-7 py-3.5 font-sans text-[12px] uppercase tracking-[0.18em] text-white transition-colors hover:bg-white hover:text-noir"
            >
              Prendre rendez-vous
            </DemoCTA>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
