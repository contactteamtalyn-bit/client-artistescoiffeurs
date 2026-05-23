import { AlertTriangle } from 'lucide-react'
import { DemoCTA } from '@/components/DemoModal'

export function Footer() {
  return (
    <footer className="bg-noir-profond pt-20 text-white">
      <div className="wrap-wide grid gap-12 pb-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="font-display text-[28px] leading-tight">Artistes Coiffeurs Coloristes</p>
          <p className="mt-3 font-sans text-[12px] uppercase tracking-[0.2em] text-or">Le Marais · Paris 4ᵉ</p>
        </div>

        <div className="md:col-span-3">
          <p className="eyebrow text-white/40">Adresse</p>
          <p className="mt-4 font-sans text-[14px] font-light leading-relaxed text-white/75">42 rue Saint-Paul<br />75004 Paris</p>
          <p className="mt-4 font-sans text-[14px] font-light text-white/75">Mar–Sam 10h–19h<br />Dim sur RDV · Lun fermé</p>
        </div>

        <div className="md:col-span-4">
          <p className="eyebrow text-white/40">Suivez</p>
          <ul className="mt-4 space-y-2 font-sans text-[14px] font-light text-white/75">
            <li>
              <a href="https://instagram.com/artistecoiffeurcoloriste" target="_blank" rel="noopener noreferrer" data-allow="true" className="link-underline">@artistecoiffeurcoloriste</a>
            </li>
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" data-allow="true" className="link-underline">Facebook</a>
            </li>
            <li><DemoCTA className="link-underline font-sans text-[14px] font-light text-or">Réserver en ligne</DemoCTA></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="wrap-wide py-8">
          <div className="flex items-start gap-3 border border-or/50 bg-[#171614] p-5">
            <AlertTriangle size={18} className="mt-0.5 shrink-0 text-or" strokeWidth={1.6} />
            <div className="font-sans text-[12px] leading-relaxed text-white/70">
              <p className="font-semibold uppercase tracking-[0.12em] text-white/90">Maquette démonstration non finale</p>
              <p className="mt-1">
                Site créé par Maison Talyn — <span className="text-or">@maison.talyn</span>. Tous les contenus sont des
                placeholders. Contact pour publication :{' '}
                <a href="https://instagram.com/maison.talyn" target="_blank" rel="noopener noreferrer" data-allow="true" className="text-or underline">@maison.talyn</a>
              </p>
            </div>
          </div>
          <p className="mt-6 text-center font-sans text-[11px] tracking-[0.14em] text-white/30">© {new Date().getFullYear()} Artistes Coiffeurs Coloristes · Maquette Maison Talyn</p>
        </div>
      </div>
    </footer>
  )
}
