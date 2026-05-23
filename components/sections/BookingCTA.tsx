import { Reveal } from '@/components/ui/Reveal'
import { OrganicBlob } from '@/components/ui/OrganicBlob'
import { DemoCTA } from '@/components/DemoModal'

export function BookingCTA() {
  return (
    <section className="relative flex min-h-[75vh] items-center justify-center overflow-hidden bg-lait py-24 text-center">
      <OrganicBlob shape="b" color="or" opacity={0.06} className="left-[-8%] top-[-6%] h-[50vh] w-[50vh]" />
      <OrganicBlob shape="e" color="orclair" opacity={0.07} className="bottom-[-10%] right-[-8%] h-[44vh] w-[44vh]" />

      <div className="wrap relative z-[2]">
        <Reveal><p className="eyebrow text-or">Votre prochaine couleur</p></Reveal>
        <Reveal delay={90}>
          <h2 className="mx-auto mt-5 max-w-5xl font-display text-noir" style={{ fontSize: 'clamp(3rem,9vw,8rem)', lineHeight: 0.95 }}>
            Votre toile
            <br />
            <em style={{ fontStyle: 'italic', color: '#A78D4A' }}>vous attend.</em>
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <p className="mx-auto mt-7 max-w-[420px] font-sans text-[18px] font-light leading-relaxed text-pierre">
            Consultation colorimétrique. Résultat sur-mesure. Le Marais, à deux pas.
          </p>
        </Reveal>
        <Reveal delay={210}>
          <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <DemoCTA ariaLabel="Réserver" className="bg-noir px-11 py-[18px] font-sans text-[14px] font-semibold uppercase tracking-[0.14em] text-lait transition-colors duration-300 hover:bg-or">
              Réserver ma couleur →
            </DemoCTA>
            <a href="tel:+33769424512" data-allow="true" className="link-underline font-sans text-[14px] font-light text-pierre transition-colors hover:text-noir">
              Appeler · 07 69 42 45 12
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
