import { SmartImage } from '@/components/ui/SmartImage'
import { Reveal } from '@/components/ui/Reveal'
import { cn } from '@/lib/utils'

const oeuvres = [
  { n: '01', img: 'balayage', title: 'Le balayage naturel', tech: 'Technique douce', desc: 'Un dégradé de lumière qui épouse le mouvement naturel du cheveu. La couleur qui semble être née là.' },
  { n: '02', img: 'ombre', title: "L'ombré sculptural", tech: 'Contraste maîtrisé', desc: 'De la racine à la pointe, une transition calculée au millimètre.' },
  { n: '03', img: 'tiedye', title: 'Le Tie & Dye', tech: 'Éclat libre', desc: 'La fantaisie contrôlée. Des éclats de couleur qui dansent sans jamais se perdre.' },
  { n: '04', img: 'globale', title: 'La couleur globale', tech: 'Saturation totale', desc: 'Quand une seule couleur dit tout. La teinte parfaite, sans compromis.' },
  { n: '05', img: 'meches', title: 'Les mèches de lumière', tech: 'Éclat ponctuel', desc: 'Des fils de lumière glissés dans la masse. La subtilité comme choix esthétique.' },
]

export function PaletteDavid() {
  return (
    <section id="palette" className="bg-noir py-24 text-white md:py-32">
      <div className="wrap-wide">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal><p className="eyebrow text-or-clair">— La signature</p></Reveal>
          <Reveal delay={80}>
            <h2 className="mt-6 font-display font-medium" style={{ fontSize: 'clamp(3rem,8vw,7rem)', lineHeight: 0.92 }}>
              La palette <em className="font-normal italic text-or">de David.</em>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mx-auto mt-7 max-w-[560px] font-sans text-[16px] font-light leading-relaxed text-white/60">
              Chaque nuance est une décision artistique. Chaque cliente, une toile unique. David ne
              coiffe pas — il crée.
            </p>
          </Reveal>
        </div>

        <div className="mt-16">
          {oeuvres.map((o, i) => (
            <Reveal key={o.n}>
              <div className="grid items-center gap-8 border-t border-white/15 py-12 md:grid-cols-2 md:gap-16 md:py-16">
                <div className={cn('relative aspect-[4/5] overflow-hidden bg-[#242022]', i % 2 === 1 && 'md:order-2')}>
                  <SmartImage src={`/images/colorations/${o.img}.jpg`} alt={o.title} fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover" />
                </div>
                <div className={cn(i % 2 === 1 && 'md:order-1')}>
                  <span className="font-display italic text-or" style={{ fontSize: 'clamp(3rem,6vw,5.5rem)', lineHeight: 1 }}>{o.n}</span>
                  <p className="mt-4 font-sans text-[11px] font-medium uppercase tracking-[0.24em] text-or-clair">{o.tech}</p>
                  <h3 className="mt-2 font-display" style={{ fontSize: 'clamp(2rem,3.5vw,3.2rem)', lineHeight: 1.05 }}>{o.title}</h3>
                  <p className="mt-5 max-w-md font-sans text-[15px] font-light leading-[1.8] text-white/65">{o.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
