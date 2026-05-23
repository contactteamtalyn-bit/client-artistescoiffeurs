import { Reveal } from '@/components/ui/Reveal'

const avis = [
  { text: "David a tout de suite compris ce que je voulais. Résultat parfait, naturel, lumineux. Je ne vais plus nulle part ailleurs.", name: 'Sophie L.' },
  { text: "Le salon est magnifique — les pierres, la lumière, l'ambiance. Et la coloration, d'une précision incroyable. Un vrai artiste.", name: 'Camille R.' },
  { text: "J'ai les cheveux très foncés. David a réussi un balayage que 4 autres coiffeurs avaient raté. Je reviens chaque saison.", name: 'Inès M.' },
]

export function Avis() {
  return (
    <section id="avis" className="bg-lait py-24 md:py-32">
      <div className="wrap-wide">
        <div className="max-w-3xl">
          <Reveal><p className="eyebrow text-or">Témoignages</p></Reveal>
          <Reveal delay={80}>
            <h2 className="mt-6 font-display font-medium text-noir" style={{ fontSize: 'clamp(2.6rem,5.5vw,5rem)', lineHeight: 1.0 }}>
              1 033 fois <em className="font-normal italic text-or">convaincues.</em>
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-x-12 gap-y-12 md:grid-cols-3">
          {avis.map((a, i) => (
            <Reveal key={a.name} delay={i * 110}>
              <figure className="flex h-full flex-col border-t border-noir/15 pt-8">
                <blockquote className="font-display italic leading-[1.3] text-noir" style={{ fontSize: 'clamp(1.4rem,2vw,1.7rem)' }}>
                  « {a.text} »
                </blockquote>
                <figcaption className="mt-6 font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-or">{a.name}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
