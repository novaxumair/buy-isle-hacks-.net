/** Minimal first-party media placeholders until real Isle screenshots are added. */
import { existsSync, mkdirSync, statSync, writeFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const mediaDir = join(root, 'public', 'media')
const videosDir = join(root, 'public', 'videos')

mkdirSync(mediaDir, { recursive: true })
mkdirSync(videosDir, { recursive: true })

const base = sharp({
  create: {
    width: 1920,
    height: 1080,
    channels: 3,
    background: { r: 12, g: 10, b: 22 },
  },
})

const files = [
  'isle-hero-full.webp',
  'isle-cover.webp',
  'isle-ign-cover.webp',
  'isle-game-cover.webp',
  'isle-menu.webp',
  ...Array.from({ length: 10 }, (_, i) => `isle-screenshot-${i + 1}.webp`),
]

const minRealBytes = 4096
for (const name of files) {
  const out = join(mediaDir, name)
  if (existsSync(out) && statSync(out).size >= minRealBytes) {
    console.log('Kept existing', name)
    continue
  }
  await base.clone().webp({ quality: 80 }).toFile(out)
}

const thumb = join(mediaDir, 'isle-video-thumb.jpg')
if (!existsSync(thumb) || statSync(thumb).size < minRealBytes) {
  await base
    .clone()
    .resize(1280, 720)
    .jpeg({ quality: 85 })
    .toFile(thumb)
} else {
  console.log('Kept existing isle-video-thumb.jpg')
}

const heroWebm = join(videosDir, 'hero.webm')
if (!existsSync(heroWebm) || statSync(heroWebm).size < 4096) {
  writeFileSync(heroWebm, Buffer.alloc(0))
  console.log('Warning: public/videos/hero.webm missing — wrote empty stub (add real hero.webm)')
} else {
  console.log('Kept existing hero.webm (' + Math.round(statSync(heroWebm).size / 1024) + ' KB)')
}

console.log('Placeholder isle media written to public/media')
