/**
 * Cloudflare Worker deploy (static assets in dist/ + workers/site.js).
 * Dashboard: Build = npm run build  |  Deploy = npm run deploy:worker
 *
 * Invokes wrangler.js directly (never the postinstall .bin shim) so CI does not hang.
 */
import { spawnSync } from 'node:child_process'
import { existsSync } from 'node:fs'
import { join } from 'node:path'

const root = join(import.meta.dirname, '..')
const dist = join(root, 'dist')
const config = join(root, 'wrangler.worker.toml')
const workerEntry = join(root, 'workers', 'site.js')
const wranglerJs = join(root, 'node_modules', 'wrangler', 'bin', 'wrangler.js')

function fail(msg) {
  console.error(`cf-worker-deploy: ${msg}`)
  process.exit(1)
}

if (!existsSync(wranglerJs)) fail('wrangler not installed — run npm ci first')
if (!existsSync(config)) fail('wrangler.worker.toml missing')
if (!existsSync(workerEntry)) fail('workers/site.js missing')
if (!existsSync(dist)) fail('dist/ missing — run npm run build first')
if (!existsSync(join(dist, 'sitemap'))) fail('dist/sitemap missing — run npm run build first')
if (!existsSync(join(dist, 'sitemap.xml'))) fail('dist/sitemap.xml missing — run npm run build first')
if (!existsSync(join(dist, 'google-sitemap.xml'))) fail('dist/google-sitemap.xml missing — run npm run build first')

const onCloudflareBuild =
  process.cwd().includes('buildhome') ||
  Boolean(process.env.CF_PAGES || process.env.WORKERS_CI || process.env.CF_BUILD_URL)

const hasToken = Boolean(
  process.env.CLOUDFLARE_API_TOKEN ||
    process.env.CF_API_TOKEN ||
    process.env.CLOUDFLARE_AUTH_TOKEN,
)

if (onCloudflareBuild && !hasToken) {
  console.warn(
    'cf-worker-deploy: CLOUDFLARE_API_TOKEN not in env — link an API token in Workers Builds (Workers Scripts Edit) or deploy may hang/fail',
  )
}

// Build already ran in dashboard (wrangler.worker.toml has no [build] — Wrangler 4 has no --no-build).
const wranglerArgs = ['deploy', '-c', 'wrangler.worker.toml']

// Routes require buyislehacks.net as a proxied zone on the deploy account (CI often lacks this).
if (process.env.CF_WORKER_ATTACH_ROUTES === '1') {
  wranglerArgs.push('--route', 'buyislehacks.net/*', '--route', 'www.buyislehacks.net/*')
  console.log('cf-worker-deploy: attaching Worker routes (CF_WORKER_ATTACH_ROUTES=1)')
} else if (onCloudflareBuild) {
  console.log(
    'cf-worker-deploy: skipping routes (zone not required). Add Custom domain in Workers dashboard when the zone is ready.',
  )
}

console.log(`Worker deploy → buy-isle-hacks--net (${dist})`)
console.log(`cf-worker-deploy: node wrangler.js ${wranglerArgs.join(' ')}`)

const env = {
  ...process.env,
  WRANGLER_SEND_METRICS: 'false',
  CI: 'true',
  FORCE_COLOR: '1',
}

const result = spawnSync(process.execPath, [wranglerJs, ...wranglerArgs], {
  cwd: root,
  stdio: 'inherit',
  env,
  timeout: 20 * 60 * 1000,
})

if (result.error) {
  console.error(result.error.message || result.error)
  process.exit(1)
}

if (result.signal) {
  console.error(`cf-worker-deploy: wrangler killed (${result.signal})`)
  process.exit(1)
}

const status = result.status ?? 1
if (status === 0) {
  console.log('cf-worker-deploy: verifying live sitemap (GET + HEAD) for Google Search Console…')
  const liveCheck = join(root, 'scripts', 'verify-live-sitemap.mjs')
  const check = spawnSync(process.execPath, [liveCheck], {
    cwd: root,
    stdio: 'inherit',
    env,
    timeout: 120_000,
  })
  if ((check.status ?? 1) !== 0) {
    console.error(
      'cf-worker-deploy: live sitemap check failed — purge Cloudflare cache for /sitemap.xml then resubmit in GSC.',
    )
    process.exit(check.status ?? 1)
  }
}

process.exit(status)
