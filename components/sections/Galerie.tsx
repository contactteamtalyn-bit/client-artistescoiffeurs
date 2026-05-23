import { SmartImage } from '@/components/ui/SmartImage'
import { Reveal } from '@/components/ui/Reveal'

const items = [
  { img: 'galerie-01', ratio: 'aspect-[4/5]' },
  { img: 'galerie-02', ratio: 'aspect-[3/4]' },
  { img: 'galerie-03', ratio: 'aspect-[1/1]' },
  { img: 'galerie-04', ratio: 'aspect-[3/4]' },
  { img: 'galerie-05', ratio: 'aspect-[4/5]' },
  { img: 'galerie-06', ratio: 'aspect-[1/1]' },
]

export function Galerie() {
  return (
    <section id="galerie" className="bg-noir py-24 md:py-32">
      <div className="wrap">
        <Reveal><p className="eyebrow text-or-clair">— Créations</p></Reveal>
        <Reveal delay={80}>
          <h2 className="mt-5 font-display text-lait" style={{ fontSize: 'clamp(2.4rem,4.5vw,4rem)', lineHeight: 1.04 }}>
            Le travail
            <br />
            <em style={{ fontStyle: 'italic', color: '#A78D4A' }}>parle.</em>
          </h2>
        </Reveal>

        <div className="mt-12 [column-gap:4px] [columns:2] lg:[columns:3]">
          {items.map((it, i) => (
            <Reveal key={it.img} delay={(i % 3) * 90} className="mb-1 break-inside-avoid">
              <div className={`group relative w-full overflow-hidden bg-[#242022] ${it.ratio}`}>
                <SmartImage src={`/images/colorations/${it.img}.jpg`} alt="Création David · Le Marais" fill sizes="(max-width:1024px) 50vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div aria-hidden className="absolute inset-0 bg-or opacity-0 transition-opacity duration-400 group-hover:opacity-25" style={{ mixBlendMode: 'multiply' }} />
                <span className="absolute bottom-3 left-3 font-sans text-[12px] italic text-lait opacity-0 transition-opacity duration-400 group-hover:opacity-100" style={{ textShadow: '0 1px 6px rgba(0,0,0,0.7)' }}>
                  Création David · Le Marais
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
