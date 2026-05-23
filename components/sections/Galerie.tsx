import { SmartImage } from '@/components/ui/SmartImage'
import { Reveal } from '@/components/ui/Reveal'
import { cn } from '@/lib/utils'

const items = [
  { img: 'galerie-01', span: 'md:col-span-2 md:row-span-2', ratio: 'aspect-[4/5] md:aspect-auto md:h-full' },
  { img: 'galerie-02', span: '', ratio: 'aspect-[4/5]' },
  { img: 'galerie-03', span: '', ratio: 'aspect-[4/5]' },
  { img: 'galerie-04', span: '', ratio: 'aspect-[4/5]' },
  { img: 'galerie-05', span: '', ratio: 'aspect-[4/5]' },
  { img: 'galerie-06', span: 'md:col-span-2', ratio: 'aspect-[16/10]' },
]

export function Galerie() {
  return (
    <section id="galerie" className="bg-noir py-24 text-white md:py-32">
      <div className="wrap-wide">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Reveal><p className="eyebrow text-or-clair">— Créations</p></Reveal>
            <Reveal delay={80}>
              <h2 className="mt-5 font-display font-medium" style={{ fontSize: 'clamp(2.6rem,6vw,5.5rem)', lineHeight: 0.95 }}>
                Le travail <em className="font-normal italic">parle.</em>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <span className="font-sans text-[11px] uppercase tracking-[0.22em] text-white/45">Création David · Le Marais</span>
          </Reveal>
        </div>

        <div className="mt-12 grid auto-rows-[1fr] grid-cols-2 gap-2 md:grid-cols-4">
          {items.map((it, i) => (
            <Reveal key={it.img} delay={(i % 4) * 80} className={cn(it.span)}>
              <div className={cn('group relative h-full w-full overflow-hidden bg-[#242022]', it.ratio)}>
                <SmartImage src={`/images/colorations/${it.img}.jpg`} alt="Création David · Le Marais" fill sizes="(max-width:768px) 50vw, 25vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div aria-hidden className="absolute inset-0 bg-or opacity-0 transition-opacity duration-500 group-hover:opacity-25" style={{ mixBlendMode: 'multiply' }} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
