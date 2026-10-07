/**
 * Downloads The Isle box art from IGN for the product purchase card.
 */
import { mkdirSync, writeFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const brandDir = join(root, 'public', 'brand')
const mediaDir = join(root, 'public', 'media')

mkdirSync(brandDir, { recursive: true })

const page = await fetch('https://www.ign.com/games/the-isle', {
  headers: { 'User-Agent': 'Mozilla/5.0 (compatible; buyislehacks.net asset script)' },
}).then((r) => r.text())

const og = page.match(/property="og:image"\s+content="([^"]+)"/i)?.[1]
const matches = [...page.matchAll(/https:\/\/assets-prd\.ignimgs\.com\/[^"'\\s>]+\.(?:jpg|jpeg|webp|png)/gi)].map(
  (m) => m[0].replace(/\\u002F/g, '/'),
)
const unique = [...new Set(matches)]
const pick =
  og ||
  unique.find((u) => /theisle|the-isle|isle.*cover|boxart|box-art/i.test(u)) ||
  unique.find((u) => /cover|box|hero|thumbnail/i.test(u) && !/library-/i.test(u)) ||
  unique.find((u) => !/library-/i.test(u)) ||
  unique[0]

if (!pick) {
  console.error('No IGN image URL found on page')
  process.exit(1)
}

console.log('Fetching', pick)
const buf = await fetch(pick, {
  headers: { 'User-Agent': 'Mozilla/5.0 (compatible; buyislehacks.net asset script)' },
}).then((r) => {
  if (!r.ok) throw new Error(`HTTP ${r.status}`)
  return r.arrayBuffer()
})

const jpgOut = join(brandDir, 'isle-ign-cover.jpg')
writeFileSync(jpgOut, Buffer.from(buf))
await sharp(Buffer.from(buf)).webp({ quality: 94, effort: 6 }).toFile(join(mediaDir, 'isle-ign-cover.webp'))
await sharp(Buffer.from(buf)).webp({ quality: 94, effort: 6 }).toFile(join(mediaDir, 'isle-game-cover.webp'))

console.log('Saved', jpgOut, 'and public/media/isle-ign-cover.webp + isle-game-cover.webp')
