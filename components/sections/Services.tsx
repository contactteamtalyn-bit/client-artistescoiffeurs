import { Reveal } from '@/components/ui/Reveal'
import { DemoCTA } from '@/components/DemoModal'

const colorations = [['Balayage', '80€'], ['Tie & Dye', '90€'], ['Ombré hair', '85€'], ['Mèches', '70€'], ['Coloration globale', '60€'], ['Couleur pastel', '95€']]
const coupes = [['Coupe + brushing', '55€'], ['Brushing seul', '35€'], ['Soin restructurant', '25€']]

function PriceList({ title, items }: { title: string; items: string[][] }) {
  return (
    <div>
      <h3 className="mb-2 font-sans text-[11px] font-semibold uppercase tracking-[0.24em] text-or">{title}</h3>
      <ul>
        {items.map(([k, v]) => (
          <li key={k} className="flex items-baseline justify-between gap-4 border-b border-noir/12 py-4">
            <span className="font-display text-[19px] text-noir">{k}</span>
            <span className="font-display text-[18px] italic text-or">dès {v}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Services() {
  return (
    <section id="services" className="bg-lait py-24 md:py-32">
      <div className="wrap-wide">
        <div className="max-w-3xl">
          <Reveal><p className="eyebrow text-or">Prestations</p></Reveal>
          <Reveal delay={80}>
            <h2 className="mt-6 font-display font-medium text-noir" style={{ fontSize: 'clamp(2.6rem,5.5vw,5rem)', lineHeight: 1.0 }}>
              L&apos;art, <em className="font-normal italic text-or">à votre mesure.</em>
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-x-16 gap-y-12 md:grid-cols-2">
          <Reveal><PriceList title="Colorations" items={colorations} /></Reveal>
          <Reveal delay={100}>
            <div className="space-y-12">
              <PriceList title="Coupes & Soins" items={coupes} />
              <div className="border border-noir/15 p-7">
                <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.24em] text-or">Premier rendez-vous</span>
                <h3 className="mt-3 font-display text-[26px] text-noir">L&apos;offre bienvenue</h3>
                <p className="mt-3 font-sans text-[15px] font-light leading-relaxed text-noir/65">
                  Consultation colorimétrique offerte avec David pour votre première visite.
                </p>
                <DemoCTA ariaLabel="Profiter de l'offre bienvenue" className="link-underline mt-5 inline-block font-sans text-[12px] font-semibold uppercase tracking-[0.18em] text-or">
                  En profiter →
                </DemoCTA>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
