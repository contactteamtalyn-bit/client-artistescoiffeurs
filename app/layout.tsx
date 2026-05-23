import type { Metadata, Viewport } from 'next'
import { Yeseva_One, Nunito } from 'next/font/google'
import './globals.css'
import { DemoBanner } from '@/components/DemoBanner'
import { DemoModalProvider } from '@/components/DemoModal'
import { Navigation } from '@/components/Navigation'

const display = Yeseva_One({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-display',
  display: 'swap',
  adjustFontFallback: false,
})

const sans = Nunito({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
  adjustFontFallback: false,
})

export const metadata: Metadata = {
  title: 'Artistes Coiffeurs Coloristes — Coloration & Balayage · Le Marais, Paris 4e',
  description:
    "Salon de coiffure-coloration au cœur du Marais, 42 rue Saint-Paul. Balayage, tie & dye, ombré, mèches, coupes. David, créateur de couleurs. 4,6★ · 1 033 avis.",
  robots: { index: false, follow: false, nocache: true },
  openGraph: {
    title: 'Artistes Coiffeurs Coloristes — Le Marais, Paris',
    description: 'Créateurs de couleurs. Coloration, balayage, tie & dye. 42 rue Saint-Paul, Paris 4e.',
    type: 'website',
    locale: 'fr_FR',
  },
  icons: {
    icon: [
      {
        url:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='12' fill='%231A1A18'/%3E%3Ctext x='50%25' y='56%25' dominant-baseline='middle' text-anchor='middle' font-family='Georgia,serif' font-size='38' fill='%23A78D4A'%3EA%3C/text%3E%3C/svg%3E",
      },
    ],
  },
}

export const viewport: Viewport = {
  themeColor: '#1A1A18',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${display.variable} ${sans.variable}`}>
      <body>
        <DemoModalProvider>
          <DemoBanner />
          <Navigation />
          {children}
        </DemoModalProvider>
      </body>
    </html>
  )
}
