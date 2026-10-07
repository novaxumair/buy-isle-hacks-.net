# Deploy on Cloudflare **Worker** (static assets)

This site is served by Worker **`buy-isle-hacks--net`** (`workers/site.js` + `dist/` assets).  
The name in **`wrangler.worker.toml`** must match your Git-connected Workers Builds project.  
Pages Functions in `/functions` are **not** used on this path — sitemap comes from `dist/sitemap.xml` via the Worker.

## npm scripts

| Command | When to use |
|---------|-------------|
| **`npm run build`** or **`npm run build:worker`** | Build `dist/` (Astro + sitemap + SEO checks) |
| **`npm run deploy:worker`** | Upload Worker + `dist/` (**run after build**; `wrangler deploy` only) |
| **`npm run deploy`** | `build` then `deploy:worker` (one shot locally) |
| **`npm run deploy:worker:full`** | `wrangler deploy -c wrangler.worker.toml` (runs `[build]` in config again) |
| **`npm run deploy:pages`** | Cloudflare **Pages** only (different product) |

Requires `CLOUDFLARE_API_TOKEN` (Workers Scripts Edit) or `wrangler login`.

**GitHub Actions:** If you deploy from **Cloudflare Workers Builds** (dashboard), you do **not** need GitHub workflows. The old **Cloudflare Pages** workflow was removed; optional Worker workflow is **manual only** (`workflow_dispatch`).

## Cloudflare dashboard (Workers Builds / Git)

**Workers & Pages → Workers → buy-isle-hacks--net → Settings → Builds**

| Setting | Value |
|---------|--------|
| **Build command** | `npm run build` |
| **Deploy command** | `npm run deploy:worker` |
| **Preview command** | `npm run deploy:worker` (not `wrangler preview`) |

Or leave deploy empty and set only:

- **Build command:** `npm run deploy` (build + deploy in one step)

**Node:** match `.node-version` (22.x).

### If deploy hangs after `Worker deploy → buyislehacks-worker`

1. **API token** — In Builds settings, link a token with **Workers Scripts Edit** (+ **Account** read). Without it, Wrangler can sit waiting for login.
2. **Account ID** — Add a build variable: **`CLOUDFLARE_ACCOUNT_ID`** = your Cloudflare account ID (dashboard URL: `dash.cloudflare.com/<account_id>`).
3. **Deploy command** must stay **`npm run deploy:worker`** (runs `wrangler deploy` without `--no-build`; Wrangler 4 removed that flag).

Large first uploads (videos/media in `dist/`) can take **5–15 minutes** — watch for upload progress lines after the fix above.

### Deploy error: `Could not find zone for buyislehacks.net`

Git deploy **skips routes** so the Worker upload can finish even if the domain is not on the account yet.

1. Add **`buyislehacks.net`** to Cloudflare (nameservers proxied).
2. **Workers → buy-isle-hacks--net → Settings → Domains & routes → Add** → `buyislehacks.net` and `www.buyislehacks.net` (Worker 301s www → apex in `workers/site.js`).
3. Optional: set build variable **`CF_WORKER_ATTACH_ROUTES=1`** to attach `buyislehacks.net/*` routes on each deploy via Wrangler.

## Custom domain

1. **Workers & Pages → Workers → buy-isle-hacks--net → Settings → Domains & routes**
2. Add **`buyislehacks.net`** (and **`www`**) after the zone is on this account — routes are **not** in `wrangler.worker.toml` by default (avoids failed CI deploys).
3. **Do not** attach the same hostname to a **Pages** project at the same time.

## After deploy

```bash
npm run verify:live-sitemap
```

Response should be **`application/xml`**, **no** `Access-Control-Allow-Origin: *`, www must **301** to apex, and sitemap **`lastmod`** should match your latest build.

## Config file

`wrangler.worker.toml` — Worker name, `[build]`, `[assets]` → `./dist`.
