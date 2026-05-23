import { SmartImage } from '@/components/ui/SmartImage'
import { Reveal } from '@/components/ui/Reveal'

export function LeMarais() {
  return (
    <section id="marais" className="bg-lait py-24 md:py-32">
      <div className="wrap grid items-center gap-12 md:grid-cols-12 md:gap-16">
        {/* Texte */}
        <div className="md:col-span-6 lg:col-span-5">
          <Reveal>
            <p className="eyebrow text-or">— Le quartier</p>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="mt-5 font-display text-noir" style={{ fontSize: 'clamp(2.4rem,4.5vw,4rem)', lineHeight: 1.04 }}>
              Un atelier
              <br />
              au cœur du
              <br />
              <em style={{ fontStyle: 'italic', color: '#A78D4A' }}>Marais.</em>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-7 font-sans text-[17px] font-light leading-[1.7] text-pierre">
              42 rue Saint-Paul. À deux pas de la Place des Vosges, dans le quartier le plus vivant de
              Paris. Depuis des années, Artistes Coiffeurs Coloristes accueille ses clientes dans un salon
              lumineux aux murs de pierres apparentes — un écrin unique pour des créations uniques.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-5 font-sans text-[17px] font-light leading-[1.7] text-pierre">
              Ici, chaque coloration est pensée comme une œuvre. David et son équipe traitent chaque
              chevelure comme une toile — avec la même exigence, la même passion, la même précision
              d&apos;artiste.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <span className="my-8 block h-px w-[60px] bg-or" aria-hidden />
            <p className="font-sans text-[12px] uppercase tracking-[0.16em] text-or">→ 42 rue Saint-Paul · 75004 Paris</p>
          </Reveal>
        </div>

        {/* Image */}
        <Reveal variant="ink" className="md:col-span-6 lg:col-span-7">
          <div className="relative aspect-[4/5] overflow-hidden bg-sable">
            <SmartImage src="/images/salon/interieur.jpg" alt="Intérieur du salon, murs de pierres apparentes — Le Marais" fill sizes="(max-width:768px) 100vw, 55vw" className="object-cover" />
            <span className="absolute right-6 top-6 inline-block border border-or bg-lait px-4 py-2 font-display text-[18px] text-or" style={{ transform: 'rotate(-6deg)' }}>
              Marais
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
