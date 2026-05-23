import { SmartImage } from '@/components/ui/SmartImage'
import { Reveal } from '@/components/ui/Reveal'
import { DemoCTA } from '@/components/DemoModal'

export function BookingCTA() {
  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-noir text-center text-white">
      <SmartImage src="/images/hero/colo-02.jpg" alt="Coloration signature — Artistes Coiffeurs Coloristes" fill sizes="100vw" className="object-cover" style={{ filter: 'grayscale(0.3) brightness(0.75)' }} />
      <div aria-hidden className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(15,15,14,0.5), rgba(15,15,14,0.65))' }} />

      <div className="wrap relative z-[2] py-24">
        <Reveal><p className="eyebrow text-or-clair">Votre prochaine couleur</p></Reveal>
        <Reveal delay={90}>
          <h2 className="mx-auto mt-6 max-w-5xl font-display font-medium" style={{ fontSize: 'clamp(3rem,10vw,9rem)', lineHeight: 0.9 }}>
            Votre toile <em className="font-normal italic">vous attend.</em>
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <p className="mx-auto mt-7 max-w-[440px] font-sans text-[16px] font-light leading-relaxed text-white/75">
            Consultation colorimétrique. Résultat sur-mesure. Le Marais, à deux pas.
          </p>
        </Reveal>
        <Reveal delay={210}>
          <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <DemoCTA ariaLabel="Réserver" className="bg-white px-11 py-[18px] font-sans text-[12px] font-semibold uppercase tracking-[0.18em] text-noir transition-colors duration-300 hover:bg-or hover:text-white">
              Réserver ma couleur
            </DemoCTA>
            <a href="tel:+33769424512" data-allow="true" className="link-underline font-sans text-[13px] font-light tracking-wide text-white/80 transition-colors hover:text-white">
              07 69 42 45 12
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
