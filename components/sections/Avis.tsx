import { Reveal } from '@/components/ui/Reveal'

const avis = [
  { text: "David a tout de suite compris ce que je voulais. Résultat parfait, naturel, lumineux. Je ne vais plus nulle part ailleurs.", name: 'Sophie L.', rot: '-2deg' },
  { text: "Le salon est magnifique — les pierres, la lumière, l'ambiance. Et la coloration, d'une précision incroyable. Un vrai artiste.", name: 'Camille R.', rot: '1.5deg' },
  { text: "J'ai les cheveux très foncés. David a réussi un balayage que 4 autres coiffeurs avaient raté. Je reviens chaque saison.", name: 'Inès M.', rot: '-1deg' },
]

export function Avis() {
  return (
    <section id="avis" className="bg-lait py-24 md:py-32">
      <div className="wrap">
        <Reveal><p className="eyebrow text-or">Ils témoignent</p></Reveal>
        <Reveal delay={80}>
          <h2 className="mt-5 font-display text-noir" style={{ fontSize: 'clamp(2.4rem,4.5vw,4rem)', lineHeight: 1.04 }}>
            1 033 fois
            <br />
            <em style={{ fontStyle: 'italic', color: '#A78D4A' }}>convaincues.</em>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {avis.map((a, i) => (
            <Reveal key={a.name} delay={i * 110}>
              <figure
                className="flex h-full flex-col bg-white p-7 md:[transform:rotate(var(--rot))]"
                style={{ '--rot': a.rot, boxShadow: '0 18px 40px -22px rgba(26,26,24,0.4)' } as React.CSSProperties}
              >
                <span aria-hidden className="font-display leading-[0.5] text-or" style={{ fontSize: '5rem' }}>«</span>
                <blockquote className="-mt-3 font-sans text-[16px] font-light italic leading-[1.7] text-noir">{a.text}</blockquote>
                <span className="my-5 block h-px w-[40px] bg-or" aria-hidden />
                <figcaption className="font-sans text-[13px] font-bold uppercase tracking-[0.12em] text-noir">{a.name}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
