# The Isle Hacks (buyislehacks.net)

Static Astro site for **The Isle Hacks** on Windows PC — hero ESP, map hack, timers, blog, forums, and loader status. Single-game only; Cloudflare Pages ready.

SEO targets **the isle cheats**, **The Isle ESP**, **The Isle map hack**, and related The Isle PC keywords on `https://buyislehacks.net`.

## Commands

- `npm run dev` — local dev server (port 5174)
- `npm run build` — production build + sitemap + SEO checks
- `npm run generate:content` — regenerate Isle blog + forum data (`generate-isle-intel.mjs`, `generate-isle-forums.mjs`)
- `npm run generate:seo-assets` — rebuild OG JPEGs from screenshots

Set `SITE_URL=https://buyislehacks.net` when generating sitemaps outside the default build.

## Cloudflare deploy

### Worker (default)

**[docs/CLOUDFLARE-WORKER.md](docs/CLOUDFLARE-WORKER.md)**

| Dashboard field | Command |
|-----------------|--------|
| **Build command** | `npm run build` |
| **Deploy command** | `npm run deploy:worker` |

Local one-liner: **`npm run deploy`** (= build + Worker upload).  
Bare **`npx wrangler deploy`** (postinstall shim) also runs Worker deploy.

### Pages (optional)

**[docs/CLOUDFLARE-PAGES.md](docs/CLOUDFLARE-PAGES.md)** — use **`npm run deploy:pages`** only if the domain is on a **Pages** project, not a Worker route.

## Google Search Console sitemap

Full troubleshooting: **[docs/GOOGLE-SEARCH-CONSOLE.md](docs/GOOGLE-SEARCH-CONSOLE.md)**.

- **Domain property:** submit full URL **`https://buyislehacks.net/sitemap.xml`** in **Sitemaps** (not URL Inspection; not filename-only `sitemap.xml`). Remove failed rows first.
- Sitemap bytes live in **`dist/sitemap`** and **`dist/sitemap.xml`** (`<loc>` + `<lastmod>`). Pages Functions only proxy those files via `ASSETS.fetch` (never embed XML in JS).
- **Production must redeploy after every sitemap fix.** If `npm run verify:live-sitemap` mentions a legacy Function, Cloudflare is still on an old deployment — trigger **Pages → Deployments → Retry** or push to `main` with GitHub Actions secrets `CLOUDFLARE_API_TOKEN` + `CLOUDFLARE_ACCOUNT_ID`.
- Cloudflare Pages **build command** must be `npm run build` (not `astro build` alone). Disable duplicate deploy if you use `.github/workflows/cloudflare-pages.yml`.
- Do **not** attach the optional Worker in `wrangler.worker.toml` to the same hostname as Pages.
- If GSC shows **“Sitemap could not be read”** but the URL opens in your browser: open Cloudflare → **Security → Events**, filter path `/sitemap.xml`, and add a **WAF skip** or allow rule for verified bots (Googlebot often gets **403** from Bot Fight Mode / managed rules).
- After deploy: `npm run verify:live-sitemap`, delete failed GSC sitemap rows, resubmit `sitemap.xml`.
