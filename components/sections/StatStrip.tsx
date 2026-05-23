import { CountUp } from '@/components/ui/CountUp'

const stats: Array<{ kind: 'count' | 'text'; value?: number; sep?: string; text?: string; italic?: boolean; label: string }> = [
  { kind: 'count', value: 1033, sep: ' ', label: 'Avis Google' },
  { kind: 'text', text: '4,6★', label: 'Note moyenne' },
  { kind: 'count', value: 2, label: 'Pas de la Place des Vosges' },
  { kind: 'text', text: '∞', italic: true, label: 'Combinaisons de couleurs' },
]

export function StatStrip() {
  return (
    <section className="border-y border-noir/10 bg-lait">
      <div className="wrap-wide grid grid-cols-2 divide-noir/10 lg:grid-cols-4 lg:divide-x">
        {stats.map((s, i) => (
          <div key={i} className="flex flex-col items-center justify-center px-4 py-14 text-center">
            <span
              className="font-display leading-none text-noir"
              style={{ fontSize: 'clamp(2.4rem,5vw,4.5rem)', fontStyle: s.italic ? 'italic' : 'normal' }}
            >
              {s.kind === 'count' ? <CountUp end={s.value!} separator={s.sep || ''} /> : s.text}
            </span>
            <span className="mt-4 max-w-[160px] font-sans text-[10px] uppercase leading-snug tracking-[0.22em] text-or">
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
