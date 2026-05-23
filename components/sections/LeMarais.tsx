import { SmartImage } from '@/components/ui/SmartImage'
import { Reveal } from '@/components/ui/Reveal'

export function LeMarais() {
  return (
    <section id="marais" className="bg-lait py-24 md:py-32">
      <div className="wrap-wide grid items-center gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-6">
          <Reveal>
            <p className="eyebrow text-or">— Le quartier</p>
          </Reveal>
          <Reveal delay={70}>
            <h2 className="mt-6 font-display font-medium text-noir" style={{ fontSize: 'clamp(2.6rem,5.5vw,5rem)', lineHeight: 1.0 }}>
              Un atelier au cœur du <em className="font-normal italic text-or">Marais.</em>
            </h2>
          </Reveal>
          <Reveal delay={130}>
            <p className="mt-8 max-w-xl font-sans text-[16px] font-light leading-[1.8] text-noir/70">
              42 rue Saint-Paul. À deux pas de la Place des Vosges, dans le quartier le plus vivant de
              Paris. Depuis des années, Artistes Coiffeurs Coloristes accueille ses clientes dans un salon
              lumineux aux murs de pierres apparentes — un écrin unique pour des créations uniques.
            </p>
          </Reveal>
          <Reveal delay={190}>
            <p className="mt-5 max-w-xl font-sans text-[16px] font-light leading-[1.8] text-noir/70">
              Ici, chaque coloration est pensée comme une œuvre. David et son équipe traitent chaque
              chevelure comme une toile — avec la même exigence, la même passion, la même précision
              d&apos;artiste.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <span className="my-8 block h-px w-16 bg-noir/30" aria-hidden />
            <p className="font-sans text-[11px] uppercase tracking-[0.22em] text-noir/60">42 rue Saint-Paul · 75004 Paris</p>
          </Reveal>
        </div>

        <Reveal variant="ink" className="md:col-span-6">
          <figure className="relative">
            <span className="absolute -left-3 -top-8 font-display italic text-or" style={{ fontSize: 'clamp(3rem,6vw,5rem)' }}>
              N°
            </span>
            <div className="relative aspect-[4/5] overflow-hidden bg-sable">
              <SmartImage src="/images/salon/interieur.jpg" alt="Le salon, 42 rue Saint-Paul — Le Marais" fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover" style={{ filter: 'grayscale(0.1)' }} />
            </div>
            <figcaption className="mt-3 font-sans text-[10px] uppercase tracking-[0.22em] text-noir/50">L&apos;atelier · Saint-Paul, Paris 4ᵉ</figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  )
}
