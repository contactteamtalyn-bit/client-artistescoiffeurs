import { SmartImage } from '@/components/ui/SmartImage'
import { Reveal } from '@/components/ui/Reveal'
import { OrganicBlob } from '@/components/ui/OrganicBlob'

const oeuvres = [
  { n: '01', img: 'balayage', title: 'Le balayage naturel', tech: 'Technique douce', desc: 'Un dégradé de lumière qui épouse le mouvement naturel du cheveu. La couleur qui semble être née là.' },
  { n: '02', img: 'ombre', title: "L'ombré sculptural", tech: 'Contraste maîtrisé', desc: 'De la racine à la pointe, une transition calculée au millimètre.' },
  { n: '03', img: 'tiedye', title: 'Le Tie & Dye', tech: 'Éclat libre', desc: 'La fantaisie contrôlée. Des éclats de couleur qui dansent sans jamais se perdre.' },
  { n: '04', img: 'globale', title: 'La couleur globale', tech: 'Saturation totale', desc: 'Quand une seule couleur dit tout. La teinte parfaite, sans compromis.' },
  { n: '05', img: 'meches', title: 'Les mèches de lumière', tech: 'Éclat ponctuel', desc: 'Des fils de lumière glissés dans la masse. La subtilité comme choix esthétique.' },
]

export function PaletteDavid() {
  return (
    <section id="palette" className="cursor-brush relative overflow-hidden bg-noir py-24 text-lait md:py-32">
      <OrganicBlob shape="d" color="or" opacity={0.06} className="right-[-8%] top-[8%] h-[44vh] w-[44vh]" />

      <div className="wrap relative z-[2]">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="eyebrow text-or-clair">— La signature</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 font-display text-lait" style={{ fontSize: 'clamp(3rem,8vw,7rem)', lineHeight: 0.95 }}>
              La palette
              <br />
              <em style={{ fontStyle: 'italic', color: '#A78D4A' }}>de David.</em>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mx-auto mt-6 max-w-[560px] font-sans text-[18px] font-light leading-relaxed text-pierre">
              Chaque nuance est une décision artistique. Chaque cliente, une toile unique. David ne
              coiffe pas — il crée.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto mt-12 h-px w-full max-w-5xl bg-or/40" />

      <Reveal delay={120}>
        <div className="hscroll mt-12 gap-5 px-6 md:px-[max(24px,calc((100vw-1240px)/2+24px))]">
          {oeuvres.map((o) => (
            <article
              key={o.n}
              className="relative w-[80vw] max-w-[360px] overflow-hidden border border-or/30 p-6 sm:w-[330px]"
              style={{ background: '#242022' }}
            >
              <span aria-hidden className="pointer-events-none absolute -top-3 right-2 select-none font-display leading-none text-lait" style={{ fontSize: '8rem', opacity: 0.08 }}>
                {o.n}
              </span>
              <div className="relative aspect-[4/5] overflow-hidden bg-[#1A1A18]">
                <SmartImage src={`/images/colorations/${o.img}.jpg`} alt={o.title} fill sizes="340px" className="object-cover" />
              </div>
              <h3 className="relative mt-5 font-display text-[26px] text-lait">{o.title}</h3>
              <p className="relative mt-1 font-sans text-[12px] font-semibold uppercase tracking-[0.14em] text-or">{o.tech}</p>
              <p className="relative mt-3 font-sans text-[14px] font-light leading-relaxed text-pierre">{o.desc}</p>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
