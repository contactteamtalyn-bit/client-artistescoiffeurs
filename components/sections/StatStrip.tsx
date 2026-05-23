import { CountUp } from '@/components/ui/CountUp'

const stats: Array<{ kind: 'count' | 'text'; value?: number; sep?: string; text?: string; italic?: boolean; label: string }> = [
  { kind: 'count', value: 1033, sep: ' ', label: 'Avis Google' },
  { kind: 'text', text: '4,6★', label: 'Note moyenne' },
  { kind: 'count', value: 2, label: 'Pas de la Place des Vosges' },
  { kind: 'text', text: '∞', italic: true, label: 'Combinaisons de couleurs' },
]

export function StatStrip() {
  return (
    <section className="bg-noir">
      <div className="wrap-wide grid grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center px-4 py-12 text-center lg:min-h-[170px] lg:py-0"
            style={{ borderRight: i < 3 ? '1px solid rgba(167,141,74,0.3)' : 'none' }}
          >
            <span
              className="font-display leading-none text-lait"
              style={{ fontSize: 'clamp(2.6rem,5vw,5rem)', fontStyle: s.italic ? 'italic' : 'normal' }}
            >
              {s.kind === 'count' ? <CountUp end={s.value!} separator={s.sep || ''} /> : s.text}
            </span>
            <span className="mt-4 max-w-[170px] font-sans text-[11px] uppercase leading-snug tracking-[0.13em] text-or-clair">
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
