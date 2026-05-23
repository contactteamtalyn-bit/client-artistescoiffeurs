'use client'

import { motion } from 'framer-motion'
import { SmartImage } from '@/components/ui/SmartImage'
import { DemoCTA } from '@/components/DemoModal'

const EASE = [0.16, 1, 0.3, 1] as const
const container = { hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } } }
const cell = { hidden: { opacity: 0, scale: 0.98 }, show: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: EASE } } }

const MARQUEE = ['Balayage', 'Tie & Dye', 'Coloration', 'Ombré', 'Mèches', 'Soin', 'Coupe', 'Brushing']

export function Hero() {
  return (
    <section id="top" className="bg-noir px-[3px] pt-[3px]">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid min-h-[calc(100svh-44px)] grid-cols-2 gap-[3px] [grid-auto-flow:dense] lg:min-h-[calc(100svh-36px)] lg:grid-cols-12 lg:grid-rows-3"
      >
        {/* C1 — Photo principale */}
        <motion.div variants={cell} className="group relative col-span-2 min-h-[44vh] overflow-hidden bg-sable lg:col-span-5 lg:row-span-2 lg:min-h-0">
          <SmartImage src="/images/hero/main.jpg" alt="Salon Artistes Coiffeurs Coloristes, Le Marais" fill priority sizes="50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
          <div aria-hidden className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(15,15,14,0.55), transparent 45%)' }} />
          <span className="absolute bottom-5 left-5 bg-lait px-3 py-1 font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-noir">
            Le Marais · Paris 4e
          </span>
        </motion.div>

        {/* C2 — Titre */}
        <motion.div variants={cell} className="relative col-span-2 flex flex-col justify-center overflow-hidden bg-lait p-8 md:p-12 lg:col-span-7 lg:row-span-1">
          <div aria-hidden className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 animate-blob-float" style={{ borderRadius: '42% 58% 63% 37% / 41% 44% 56% 59%', background: 'rgba(167,141,74,0.06)', filter: 'blur(6px)' }} />
          <p className="eyebrow relative text-or">Depuis le Marais</p>
          <h1 className="relative mt-4 font-display text-noir" style={{ fontSize: 'clamp(2.6rem,6vw,5.5rem)', lineHeight: 0.95 }}>
            Créateurs
            <br />
            de <em style={{ fontStyle: 'italic', color: '#A78D4A' }}>couleurs.</em>
          </h1>
          <p className="relative mt-5 font-sans text-[13px] tracking-wide text-pierre">4,6★ · 1 033 avis · Rue Saint-Paul</p>
        </motion.div>

        {/* C3 — Coloration 1 */}
        <motion.div variants={cell} className="group relative col-span-1 min-h-[28vh] overflow-hidden bg-sable lg:col-span-4 lg:row-span-1 lg:min-h-0">
          <SmartImage src="/images/hero/colo-01.jpg" alt="Balayage signature" fill sizes="33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
          <span className="absolute bottom-3 left-3 font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-lait opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ textShadow: '0 1px 6px rgba(0,0,0,0.6)' }}>
            Balayage
          </span>
        </motion.div>

        {/* C4 — Bloc noir + CTA */}
        <motion.div variants={cell} className="col-span-1 flex flex-col justify-between bg-noir p-6 lg:col-span-3 lg:row-span-1">
          <p className="font-sans text-[13px] font-light leading-relaxed text-sable">
            Coloration, balayage, tie &amp; dye, coupes. Un artiste dédié à votre image.
          </p>
          <DemoCTA ariaLabel="Réserver" className="mt-4 self-start bg-lait px-5 py-2.5 font-sans text-[12px] font-semibold uppercase tracking-[0.12em] text-noir transition-colors hover:bg-or hover:text-lait">
            Réserver →
          </DemoCTA>
        </motion.div>

        {/* C5 — Coloration 2 */}
        <motion.div variants={cell} className="group relative col-span-2 min-h-[26vh] overflow-hidden bg-sable lg:col-span-5 lg:row-span-1 lg:min-h-0">
          <SmartImage src="/images/hero/colo-02.jpg" alt="Coloration signature" fill sizes="40vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
          <span className="absolute bottom-3 left-3 font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-lait opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ textShadow: '0 1px 6px rgba(0,0,0,0.6)' }}>
            Tie &amp; Dye
          </span>
        </motion.div>

        {/* C6 — Marquee */}
        <motion.div variants={cell} className="marquee-fast col-span-2 flex items-center overflow-hidden lg:col-span-7 lg:row-span-1" style={{ background: 'rgba(167,141,74,0.10)' }}>
          <div className="marquee-track">
            {[0, 1].map((k) => (
              <span key={k} className="flex shrink-0 items-center">
                {MARQUEE.map((w) => (
                  <span key={w} className="mx-5 font-display text-[22px] text-noir md:text-[26px]">
                    {w} <span className="text-or">·</span>
                  </span>
                ))}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
