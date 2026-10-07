/**
 * High-quality hero encode: flatten VP9 alpha → opaque 1080p WebM + H.264 MP4 fallback.
 */
import { spawnSync } from 'node:child_process'
import { copyFileSync, existsSync, renameSync, unlinkSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const ffmpeg = require('@ffmpeg-installer/ffmpeg').path

const root = join(fileURLToPath(new URL('.', import.meta.url)), '..')
const dir = join(root, 'public', 'videos')
const defaultSrc = join(
  process.env.USERPROFILE || '',
  'Downloads',
  'hero.webm',
)
const input = process.argv[2] || (existsSync(defaultSrc) ? defaultSrc : join(dir, 'hero.webm'))
const webmTmp = join(dir, 'hero-next.webm')
const mp4Tmp = join(dir, 'hero-next.mp4')

if (!existsSync(input)) {
  console.error('Missing hero source:', input)
  process.exit(1)
}

function run(args) {
  const r = spawnSync(ffmpeg, args, { stdio: 'inherit' })
  if (r.status !== 0) process.exit(r.status ?? 1)
}

const duration = '12'

/** Composite on black at native resolution (removes VP9 alpha / compositor blur). */
const flatten =
  '[1:v]format=yuva420p[fg];[0:v][fg]overlay=shortest=1,format=yuv420p[v]'

console.log('Source:', input)

run([
  '-y',
  '-f',
  'lavfi',
  '-i',
  'color=c=black:s=1920x1080:r=60:d=12',
  '-i',
  input,
  '-filter_complex',
  flatten,
  '-map',
  '[v]',
  '-an',
  '-c:v',
  'libvpx-vp9',
  '-pix_fmt',
  'yuv420p',
  '-crf',
  '18',
  '-b:v',
  '0',
  '-row-mt',
  '1',
  '-cpu-used',
  '2',
  '-threads',
  '8',
  '-g',
  '240',
  '-r',
  '60',
  webmTmp,
])

run([
  '-y',
  '-i',
  webmTmp,
  '-an',
  '-c:v',
  'libx264',
  '-pix_fmt',
  'yuv420p',
  '-preset',
  'slow',
  '-crf',
  '16',
  '-movflags',
  '+faststart',
  mp4Tmp,
])

const webmFinal = join(dir, 'hero.webm')
const mp4Final = join(dir, 'hero.mp4')
const webmBackup = join(dir, 'hero.webm.bak')

try {
  if (existsSync(webmFinal)) {
    copyFileSync(webmFinal, webmBackup)
    unlinkSync(webmFinal)
  }
  renameSync(webmTmp, webmFinal)
  renameSync(mp4Tmp, mp4Final)
  if (existsSync(webmBackup)) unlinkSync(webmBackup)
} catch (err) {
  console.error('Replace failed — .next files kept for inspection:', err.message)
  process.exit(1)
}

console.log('Wrote', webmFinal, 'and', mp4Final, '(1080p, opaque, high CRF)')
