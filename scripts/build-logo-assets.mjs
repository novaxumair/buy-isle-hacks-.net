import { existsSync, readFileSync, unlinkSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const publicDir = fileURLToPath(new URL('../public/', import.meta.url))
const brandDir = `${publicDir}brand/`

const srcCandidates = [
  process.argv[2],
  `${brandDir}new logo navbar logo and favicon.jpg`,
  `${brandDir}new logo navbar logo and favicon.png`,
  `${brandDir}navbar logo and favicon.jpg`,
  `${brandDir}logo-source.png`,
  `${brandDir}logo-source.jpg`,
].filter(Boolean)

const src = srcCandidates.find((p) => existsSync(p))
if (!src) {
  console.error('Logo source not found. Add public/brand/new logo navbar logo and favicon.jpg')
  process.exit(1)
}

const legacyWebp = `${brandDir}navbar logo and favicon.webp`
if (existsSync(legacyWebp)) {
  unlinkSync(legacyWebp)
  console.log('Removed legacy', legacyWebp)
}

function luminance(r, g, b) {
  return 0.299 * r + 0.587 * g + 0.114 * b
}

/** Flood-fill dark pixels from image edges — keeps interior black (skull) opaque. */
function stripEdgeBackground(data, width, height) {
  const n = width * height
  const isBg = new Uint8Array(n)
  const darkCutoff = 52
  const queue = new Int32Array(n * 2)
  let head = 0
  let tail = 0

  const tryPush = (x, y) => {
    const idx = y * width + x
    if (isBg[idx]) return
    const i = idx * 4
    if (luminance(data[i], data[i + 1], data[i + 2]) > darkCutoff) return
    isBg[idx] = 1
    queue[tail++] = x
    queue[tail++] = y
  }

  for (let x = 0; x < width; x++) {
    tryPush(x, 0)
    tryPush(x, height - 1)
  }
  for (let y = 0; y < height; y++) {
    tryPush(0, y)
    tryPush(width - 1, y)
  }

  while (head < tail) {
    const x = queue[head++]
    const y = queue[head++]
    if (x > 0) tryPush(x - 1, y)
    if (x < width - 1) tryPush(x + 1, y)
    if (y > 0) tryPush(x, y - 1)
    if (y < height - 1) tryPush(x, y + 1)
  }

  const featherBand = 36
  for (let idx = 0; idx < n; idx++) {
    const i = idx * 4
    const lum = luminance(data[i], data[i + 1], data[i + 2])

    if (isBg[idx]) {
      data[i + 3] = 0
      continue
    }

    if (lum >= darkCutoff + featherBand) {
      data[i + 3] = 255
      continue
    }

    // Soft edge on white/grunge near the outer black matte
    const t = (lum - darkCutoff) / featherBand
    data[i + 3] = Math.round(255 * Math.min(1, Math.max(0, t)))
  }
}

async function makeTransparent(input, output, size) {
  const { data, info } = await sharp(input)
    .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true })

  stripEdgeBackground(data, info.width, info.height)

  await sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } })
    .png()
    .toFile(output)
}

await makeTransparent(src, `${publicDir}logo.png`, 512)
await makeTransparent(src, `${publicDir}favicon-32.png`, 32)
await makeTransparent(src, `${publicDir}apple-touch-icon.png`, 180)

const png = readFileSync(`${publicDir}logo.png`)
const b64 = png.toString('base64')
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" role="img" aria-label="The Isle Hacks"><image width="512" height="512" href="data:image/png;base64,${b64}"/></svg>`
writeFileSync(`${publicDir}favicon.svg`, svg)

console.log('Logo assets from', src)
console.log('Wrote public/logo.png, favicon-32.png, apple-touch-icon.png, favicon.svg (transparent background)')
