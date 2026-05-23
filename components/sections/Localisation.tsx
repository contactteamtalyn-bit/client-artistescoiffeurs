import { MapPin, Clock, Phone, Navigation as NavIcon } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'
import { DemoCTA } from '@/components/DemoModal'

const infos = [
  { Icon: MapPin, label: 'Adresse', value: '42 rue Saint-Paul · 75004 Paris' },
  { Icon: NavIcon, label: 'Accès', value: 'Métro Saint-Paul (ligne 1)' },
  { Icon: Clock, label: 'Horaires', value: 'Mar–Sam 10h–19h · Dim sur RDV · Lun fermé' },
  { Icon: Phone, label: 'Contact', value: '07 69 42 45 12 · @artistecoiffeurcoloriste' },
]

export function Localisation() {
  return (
    <section id="contact" className="bg-noir py-24 text-lait md:py-32">
      <div className="wrap grid items-center gap-12 md:grid-cols-2 md:gap-16">
        {/* Carte stylisée */}
        <Reveal variant="ink">
          <div className="relative aspect-[5/4] overflow-hidden border border-or/25 bg-[#151412]">
            <svg viewBox="0 0 400 320" className="absolute inset-0 h-full w-full" aria-hidden>
              <g stroke="rgba(167,141,74,0.18)" strokeWidth="1.5" fill="none">
                <path d="M0 90 H400 M0 210 H400 M120 0 V320 M270 0 V320" />
                <path d="M40 40 L360 280" opacity="0.5" />
                <path d="M0 260 Q160 200 400 250" stroke="rgba(167,141,74,0.28)" strokeWidth="6" />
              </g>
              <circle cx="200" cy="150" r="38" fill="none" stroke="rgba(167,141,74,0.35)" strokeWidth="1">
                <animate attributeName="r" values="20;46;20" dur="3.5s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.5;0;0.5" dur="3.5s" repeatCount="indefinite" />
              </circle>
            </svg>
            <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
              <MapPin size={34} className="text-or" fill="#A78D4A" strokeWidth={1} />
              <span className="mt-1 bg-noir/80 px-2 py-1 font-sans text-[10px] uppercase tracking-[0.14em] text-lait">42 rue Saint-Paul</span>
            </div>
          </div>
        </Reveal>

        {/* Infos */}
        <div>
          <Reveal><p className="eyebrow text-or-clair">— Nous trouver</p></Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 font-display text-lait" style={{ fontSize: 'clamp(2.4rem,4.5vw,4rem)', lineHeight: 1.0 }}>
              42, rue
              <br />
              <em style={{ fontStyle: 'italic', color: '#A78D4A' }}>Saint-Paul.</em>
            </h2>
          </Reveal>
          <div className="mt-8 space-y-5">
            {infos.map((it, i) => (
              <Reveal key={it.label} delay={120 + i * 60}>
                <div className="flex items-start gap-4">
                  <it.Icon size={18} className="mt-1 shrink-0 text-or" strokeWidth={1.6} />
                  <div>
                    <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-or-clair">{it.label}</p>
                    <p className="mt-1 font-sans text-[15px] font-light text-sable">{it.value}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={400}>
            <DemoCTA ariaLabel="Itinéraire" className="link-underline mt-8 inline-block font-sans text-[13px] font-semibold uppercase tracking-[0.14em] text-or">
              Itinéraire →
            </DemoCTA>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
