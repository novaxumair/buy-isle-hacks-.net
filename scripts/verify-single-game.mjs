/**
 * Ensures the site remains The Isle-only (buyislehacks.net) in source and built HTML.
 */
import { existsSync, readFileSync, readdirSync } from 'node:fs'
import { join, relative } from 'node:path'

const root = join(import.meta.dirname, '..')
const dist = join(root, 'dist')
const failures = []

const SKIP_FILES = new Set([
  'verify-single-game.mjs',
  'verify-seo.mjs',
  'verify-redirects.mjs',
  'generate-sitemaps.mjs',
  '_redirects',
  'create-placeholder-media.mjs',
])

const SKIP_SCRIPT_PATHS =
  /^scripts\/(verify-|generate-sitemaps|generate-isle|prepare-isle|fetch-isle|cf-worker)/

/** Legacy domains/slugs — allowed only in public/_redirects (301 traps), never in page content. */
const REDIRECT_ONLY = /dota-2|buydota2cheats|abi-cheats|dayz-cheats|tarkov|warzone|arena.breakout|wardogs|buy-wardogs/i

const FORBIDDEN = [
  /\bdota\s*2\b/i,
  /buydota2cheats/i,
  /buy-dota2-cheats/i,
  /dota-2-cheats/i,
  /\btarkov/i,
  /warzonecheats/i,
  /dayz-cheats/i,
  /arena\s+breakout/i,
  /escape\s+from\s+tarkov/i,
  /wardogs/i,
  /buywardogscheats/i,
  /buy-wardogs-cheats/i,
  /wh-satano/i,
  /cosmocheats/i,
  /buydota2/i,
]

const CHECKOUT_ALLOWED = /novaxware/i

const LEGACY_PATHS = [
  'src/data/blogs.ts',
  'src/pages/wardogs-cheats.astro',
  'src/pages/dota-2-cheats.astro',
  'scripts/generate-dota2-content.mjs',
  'scripts/generate-wardogs-forums.mjs',
  'scripts/prepare-wardogs-media.mjs',
  'scripts/prepare-dota2-media.mjs',
  'scripts/fetch-dota2-ign-cover.mjs',
  'scripts/retarget-the-isle.mjs',
  'scripts/generate-dota2-content.mjs',
  'public/brand/dota2-ign-cover.jpg',
]

const LEGACY_NAME = /dota2|dota-2|wardogs|warzone|dayz|tarkov/i

function walk(dir, out = []) {
  if (!existsSync(dir)) return out
  for (const ent of readdirSync(dir, { withFileTypes: true })) {
    if (ent.name === 'node_modules' || ent.name === '.git') continue
    const p = join(dir, ent.name)
    if (ent.isDirectory()) walk(p, out)
    else if (/\.(tsx?|astro|html|css|json|xml|txt|md|mjs|js)$/.test(ent.name)) out.push(p)
  }
  return out
}

function scanFile(file, label) {
  if (SKIP_FILES.has(file.split(/[/\\]/).pop() ?? '')) return
  const rel = relative(root, file).replaceAll('\\', '/')
  if (rel === 'public/_redirects') return
  if (rel === 'src/data/links.ts') return
  if (SKIP_SCRIPT_PATHS.test(rel)) return

  const text = readFileSync(file, 'utf8')
  for (const re of FORBIDDEN) {
    if (re.test(text)) {
      failures.push(`${label} ${rel}: matched ${re}`)
    }
  }
  if (CHECKOUT_ALLOWED.test(text) && !rel.includes('links.ts') && rel !== 'public/_redirects') {
    failures.push(`${label} ${rel}: novaxware only allowed in checkout URLs`)
  }
}

for (const file of walk(join(root, 'src'))) scanFile(file, 'src')
for (const file of walk(join(root, 'public'))) scanFile(file, 'public')
for (const file of walk(join(root, 'scripts'))) scanFile(file, 'scripts')
for (const file of walk(join(root, 'docs'))) scanFile(file, 'docs')
for (const file of walk(join(root, 'workers'))) scanFile(file, 'workers')

if (existsSync(join(root, 'README.md'))) scanFile(join(root, 'README.md'), 'root')

for (const cfg of ['wrangler.worker.toml', 'wrangler.toml', 'package.json']) {
  const p = join(root, cfg)
  if (existsSync(p)) scanFile(p, 'config')
}

if (existsSync(dist)) {
  for (const file of walk(dist)) {
    if (!file.endsWith('.html')) continue
    const html = readFileSync(file, 'utf8')
    for (const re of FORBIDDEN) {
      if (re.test(html)) {
        failures.push(`dist ${relative(dist, file)}: matched ${re}`)
      }
    }
    if (REDIRECT_ONLY.test(html) && !html.includes('buyislehacks.net')) {
      failures.push(`dist ${relative(dist, file)}: legacy game slug in HTML`)
    }
  }
}

const siteTs = readFileSync(join(root, 'src', 'data', 'site.ts'), 'utf8')
if (!siteTs.includes('buyislehacks.net')) {
  failures.push('site.ts must use buyislehacks.net')
}
if (!siteTs.includes('The Isle Hacks')) {
  failures.push('site.ts must use The Isle Hacks brand')
}
if (!siteTs.includes('does not sell cheats for other games')) {
  failures.push('site.ts must declare single-game The Isle focus')
}

const gamesTs = readFileSync(join(root, 'src', 'data', 'games.ts'), 'utf8')
const gameCount = (gamesTs.match(/slug:\s*['"]/g) || []).length
if (gameCount !== 1) failures.push(`games.ts must list exactly one game (found ${gameCount})`)
if (!gamesTs.includes("'the-isle'")) {
  failures.push('games.ts slug must be the-isle only')
}

for (const rel of LEGACY_PATHS) {
  if (existsSync(join(root, rel))) {
    failures.push(`Remove legacy multi-game file: ${rel}`)
  }
}

for (const file of walk(join(root, 'scripts'))) {
  const base = file.split(/[/\\]/).pop() ?? ''
  if (LEGACY_NAME.test(base) && !SKIP_SCRIPT_PATHS.test(relative(root, file).replaceAll('\\', '/'))) {
    failures.push(`Rename or remove legacy-named script: ${relative(root, file)}`)
  }
}

const sitemapCss = join(root, 'public', 'sitemap.css')
if (existsSync(sitemapCss)) {
  const css = readFileSync(sitemapCss, 'utf8')
  if (/wardogs|buywardogscheats|buydota2cheats/i.test(css)) {
    failures.push('public/sitemap.css must brand buyislehacks.net only')
  }
}

if (failures.length) {
  throw new Error(`Single-game verification failed:\n- ${failures.join('\n- ')}`)
}

console.log('Single-game verification passed (The Isle / buyislehacks.net only)')
