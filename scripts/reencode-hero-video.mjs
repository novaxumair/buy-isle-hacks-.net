/**
 * @deprecated Use: npm run prepare:hero
 */
import { spawnSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { join } from 'node:path'

const script = join(fileURLToPath(new URL('.', import.meta.url)), 'prepare-hero-video.mjs')
const r = spawnSync(process.execPath, [script, ...process.argv.slice(2)], { stdio: 'inherit' })
process.exit(r.status ?? 1)
