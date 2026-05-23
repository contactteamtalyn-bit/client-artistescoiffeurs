import { Hero } from '@/components/sections/Hero'
import { StatStrip } from '@/components/sections/StatStrip'
import { LeMarais } from '@/components/sections/LeMarais'
import { PaletteDavid } from '@/components/sections/PaletteDavid'
import { Services } from '@/components/sections/Services'
import { Galerie } from '@/components/sections/Galerie'
import { Avis } from '@/components/sections/Avis'
import { Localisation } from '@/components/sections/Localisation'
import { BookingCTA } from '@/components/sections/BookingCTA'
import { Footer } from '@/components/sections/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <StatStrip />
      <LeMarais />
      <PaletteDavid />
      <Services />
      <Galerie />
      <Avis />
      <Localisation />
      <BookingCTA />
      <Footer />
    </main>
  )
}
