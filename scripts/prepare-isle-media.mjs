/**
 * Converts user-provided The Isle screenshots into public/media isle-* WebP assets (no downscale).
 * Sources: Cursor workspace assets folder or path passed as argv[2].
 */
import { existsSync, mkdirSync, readdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const mediaDir = join(root, 'public', 'media')

const WEBP = { quality: 94, effort: 6, smartSubsample: true }
const THUMB_JPG = { quality: 92, mozjpeg: true }

function assetsDirDefault() {
  const base = join(
    process.env.USERPROFILE || process.env.HOME || '',
    '.cursor',
    'projects',
    'c-Users-iamanigger-Desktop-website-buy-isle-hacks-net',
    'assets',
  )
  return existsSync(base) ? base : join(root, 'assets')
}

function findAsset(dir, pattern) {
  const files = readdirSync(dir)
  const hit = files.find((f) => pattern.test(f))
  if (!hit) throw new Error(`Missing asset matching ${pattern} in ${dir}`)
  return join(dir, hit)
}

async function toWebp(input, output) {
  await sharp(input).webp(WEBP).toFile(output)
  const meta = await sharp(output).metadata()
  console.log('wrote', output.replace(root, ''), `${meta.width}x${meta.height}`)
}

async function main() {
  const srcDir = process.argv[2] || assetsDirDefault()
  if (!existsSync(srcDir)) {
    console.error('Assets directory not found:', srcDir)
    process.exit(1)
  }

  mkdirSync(mediaDir, { recursive: true })

  const byNum = (n) => findAsset(srcDir, new RegExp(`_images_${n}-`))

  /** Skip legacy combat duplicates (_images_1, _images_2); use 3–10 for gallery slots. */
  const shotSources = [3, 4, 5, 6, 7, 8, 9, 10, 7, 8]

  for (let n = 1; n <= 10; n++) {
    await toWebp(byNum(shotSources[n - 1]), join(mediaDir, `isle-screenshot-${n}.webp`))
  }

  await toWebp(byNum(8), join(mediaDir, 'isle-hero-full.webp'))
  await toWebp(byNum(9), join(mediaDir, 'isle-cover.webp'))
  await toWebp(byNum(3), join(mediaDir, 'isle-menu.webp'))
  // isle-ign-cover / isle-game-cover — IGN key art (npm run fetch:ign-cover), not gameplay shots

  await sharp(byNum(9)).jpeg(THUMB_JPG).toFile(join(mediaDir, 'isle-video-thumb.jpg'))
  console.log('wrote public/media/isle-video-thumb.jpg')

  console.log('The Isle media updated (full resolution WebP q94; excluded _images_1/_images_2).')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
