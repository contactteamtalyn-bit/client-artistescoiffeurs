import { Reveal } from '@/components/ui/Reveal'
import { DemoCTA } from '@/components/DemoModal'

const colorations = [
  ['Balayage', '80€'],
  ['Tie & Dye', '90€'],
  ['Ombré hair', '85€'],
  ['Mèches', '70€'],
  ['Coloration globale', '60€'],
  ['Couleur pastel', '95€'],
]
const coupes = [
  ['Coupe + brushing', '55€'],
  ['Brushing seul', '35€'],
  ['Soin restructurant', '25€'],
]

function PriceList({ items }: { items: string[][] }) {
  return (
    <ul>
      {items.map(([k, v]) => (
        <li key={k} className="flex items-baseline justify-between gap-4 border-b border-sable px-2 py-3.5 transition-colors hover:bg-or/[0.04]">
          <span className="font-display text-[18px] text-noir">{k}</span>
          <span className="font-display text-[20px] text-or">dès {v}</span>
        </li>
      ))}
    </ul>
  )
}

export function Services() {
  return (
    <section id="services" className="bg-lait py-24 md:py-32">
      <div className="wrap">
        <div className="max-w-2xl">
          <Reveal><p className="eyebrow text-or">Prestations</p></Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 font-display text-noir" style={{ fontSize: 'clamp(2.4rem,4.5vw,4rem)', lineHeight: 1.04 }}>
              L&apos;art,
              <br />
              <em style={{ fontStyle: 'italic', color: '#A78D4A' }}>à votre mesure.</em>
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-3 lg:gap-8">
          <Reveal>
            <div className="bg-sable/40 p-7">
              <h3 className="mb-3 font-sans text-[12px] font-bold uppercase tracking-[0.18em] text-or">▸ Colorations</h3>
              <PriceList items={colorations} />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="bg-lait p-7" style={{ boxShadow: 'inset 0 0 0 1px rgba(140,136,130,0.12)' }}>
              <h3 className="mb-3 font-sans text-[12px] font-bold uppercase tracking-[0.18em] text-or">▸ Coupes &amp; Soins</h3>
              <PriceList items={coupes} />
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="flex h-full flex-col justify-center border border-dashed border-or bg-lait p-8">
              <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-or">Premier rendez-vous</span>
              <h3 className="mt-3 font-display text-[22px] text-noir">L&apos;offre bienvenue</h3>
              <p className="mt-3 font-sans text-[15px] font-light leading-relaxed text-pierre">
                Consultation colorimétrique offerte avec David pour votre première visite.
              </p>
              <DemoCTA ariaLabel="Profiter de l'offre bienvenue" className="link-underline mt-6 self-start font-sans text-[13px] font-semibold uppercase tracking-[0.14em] text-or">
                En profiter →
              </DemoCTA>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
