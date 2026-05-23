import { Reveal } from '@/components/ui/Reveal'
import { DemoCTA } from '@/components/DemoModal'

const infos = [
  ['Adresse', '42 rue Saint-Paul · 75004 Paris'],
  ['Accès', 'Métro Saint-Paul (ligne 1)'],
  ['Horaires', 'Mar–Sam 10h–19h · Dim sur RDV · Lun fermé'],
  ['Contact', '07 69 42 45 12 · @artistecoiffeurcoloriste'],
]

export function Localisation() {
  return (
    <section id="contact" className="bg-noir py-24 text-white md:py-32">
      <div className="wrap-wide grid gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-7">
          <Reveal><p className="eyebrow text-or-clair">— Nous trouver</p></Reveal>
          <Reveal delay={70}>
            <h2 className="mt-6 font-display font-medium" style={{ fontSize: 'clamp(3rem,7vw,6.5rem)', lineHeight: 0.92 }}>
              42, rue <em className="font-normal italic text-or">Saint-Paul.</em>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <DemoCTA ariaLabel="Itinéraire" className="link-underline mt-8 inline-block font-sans text-[12px] font-semibold uppercase tracking-[0.2em] text-or">
              Voir l&apos;itinéraire →
            </DemoCTA>
          </Reveal>
        </div>

        <div className="md:col-span-5 md:pt-4">
          {infos.map(([label, value], i) => (
            <Reveal key={label} delay={i * 70}>
              <div className="flex flex-col gap-1 border-t border-white/15 py-5">
                <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.24em] text-or-clair">{label}</span>
                <span className="font-display text-[19px] text-white/90">{value}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
