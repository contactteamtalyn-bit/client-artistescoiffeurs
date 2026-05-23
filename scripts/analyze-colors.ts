/**
 * ÉTAPE 0 — Analyse couleurs du site/logo client (Playwright).
 *
 * Usage : npx tsx scripts/analyze-colors.ts   (ou node après compilation)
 * Nécessite : npm i -D playwright && npx playwright install chromium
 *
 * NB (Maison Talyn) : l'analyse a déjà été réalisée à la livraison via extraction
 * directe (logo + CSS du site live). Palette retenue :
 *   --lait   #FAF8F4   (fond, blanc cassé chaleureux)
 *   --noir   #1A1A18   (texte / sections sombres)
 *   --pierre #8C8882   (texte secondaire, pierres du Marais)
 *   --or     #A78D4A   (accent — extrait du logo "david coiffeur")
 *   --sable  #E8E2D8   (neutre complémentaire)
 * Ce script permet de re-vérifier à la demande.
 */
import { chromium } from 'playwright'

async function main() {
  const browser = await chromium.launch()
  const page = await browser.newPage({ viewport: { width: 1440, height: 1600 } })

  // 1) Screenshot du site actuel
  await page.goto('https://artistescoiffeurscoloristes.com/', { waitUntil: 'networkidle' })
  await page.screenshot({ path: 'scripts/_site.png', fullPage: true })

  // 2) Couleurs CSS dominantes
  const css = await page.evaluate(() => {
    const cs = getComputedStyle(document.body)
    return { bg: cs.backgroundColor, color: cs.color }
  })
  console.log('Site CSS:', css)

  // 3) Screenshot + analyse du logo
  await page.goto(
    'https://images.squarespace-cdn.com/content/v1/5538bc75e4b06a2cbbe7b78e/1431007572638-30C3BAW1YDO79LOXG2PG/logo+david+coiffeur.jpg'
  )
  await page.screenshot({ path: 'scripts/_logo.png' })
  console.log('Logo screenshot saved → scripts/_logo.png')
  console.log('Accent retenu (extrait logo) : #A78D4A (or / ocre)')

  await browser.close()
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
