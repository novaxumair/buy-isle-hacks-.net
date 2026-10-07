/**
 * Generates src/data/articles.ts — The Isle Hacks intel hub (buyislehacks.net only).
 */
import { writeFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const BRAND = 'The Isle Hacks'
const HOST = 'buyislehacks.net'
const PRIMARY_KW = 'The isle hacks'

function finalizeArticle(article) {
  const base = article.metaTitle.replace(/\s*\|\s*The Isle Hacks\s*$/i, '').trim()
  return {
    ...article,
    metaTitle: `${base} | ${PRIMARY_KW}`,
    metaDescription: article.metaDescription.includes(PRIMARY_KW)
      ? article.metaDescription
      : `${PRIMARY_KW} on ${HOST} — ${article.metaDescription}`,
    searchTerms: article.searchTerms.includes(PRIMARY_KW)
      ? article.searchTerms
      : `${PRIMARY_KW}, ${article.searchTerms}`,
  }
}

const ARTICLES = [
  {
    slug: 'the-isle-cheats-survival-ecosystem',
    title: 'The Isle Cheats and Why Survival Takes More Than Luck',
    excerpt:
      'The Isle is a living ecosystem where growth, patience, and one mistake can erase hours of progress — why players search for the isle cheats that preserve time on Evrima and Legacy.',
    metaTitle: 'The Isle Cheats and Survival on Evrima | The Isle Hacks',
    metaDescription:
      'The Isle cheats help reduce frustration on Evrima Horde and Legacy — growth mechanics, online servers, EAC, and how The Isle Hacks fits Windows PC players worldwide.',
    searchTerms: 'the isle cheats, isle evrima cheats, the isle hacks',
    date: '2026-03-10',
    readMinutes: 8,
    tag: 'Guides',
    sections: [
      {
        heading: 'A cruel, living ecosystem',
        body: [
          `The Isle is a projection of a cruel, living ecosystem where survival depends on attention, patience, and understanding dinosaur growth mechanics. This is not a game about one-time shootouts: every hour spent growing your dinosaur matters, and one wrong move can cost the results of a long session.`,
          `The modern Evrima branch updated graphics, boosted performance, added DLSS and FSR, and pulled the game toward a more hardcore audience, while Legacy remains a haven for classic fans. Both branches live their own lives, but the rule is the same: losing a dinosaur is easy; getting progress back is hard.`,
          `The Isle is fully online with no single-player campaigns, which makes the human factor sharp — custom servers, admin decisions, and network drops all land on your growth clock. Under those conditions, private [The Isle cheats](/blog/the-isle-cheats-features) act as tools that reduce frustration, preserve progress, and let you enjoy the process without weeks of re-growing.`,
        ],
      },
      {
        heading: 'Why private software matters here',
        body: [
          `Heavy growth mechanics, frequent risk, and always-on multiplayer mean players need subtle assistants: visual cues for an approaching predator, overlays for combat reads, and utilities that ease resource farming. Private software can reduce random deaths, cut routine, and expand tactical options on aggressive servers — when used with [Active loader status](/status) on ${HOST}.`,
          `Our approach is not a magic button. [The Isle Hacks](/) documents features that help you maintain control — player ESP, growth and stamina readouts, corpse and water routing — rather than endlessly replaying the same lost session.`,
          `Continue with the [features overview](/blog/the-isle-cheats-features), [EAC safety notes](/blog/the-isle-undetected-hacks-eac), or open the [The Isle store](/the-isle-cheats) for monthly and lifetime plans.`,
        ],
      },
    ],
  },
  {
    slug: 'the-isle-cheats-features',
    title: 'The Isle Cheats Features — ESP, Growth, and Misc Tools',
    excerpt:
      'Private The Isle cheats features on buyislehacks.net: Visual Options from Player ESP to Water and Fruit, plus Misc crosshair, fullbright, and custom keys — built for Evrima on Windows PC.',
    metaTitle: 'The Isle Cheats Features | The Isle Hacks',
    metaDescription:
      'The Isle cheats features — player ESP, NPC ESP, animal ESP, growth, stamina, corpse, water, fruit, fullbright, and misc keys. Full checklist on The Isle Hacks store.',
    searchTerms: 'the isle cheats, the isle wallhack, the isle esp, isle evrima cheats',
    date: '2026-03-11',
    readMinutes: 10,
    tag: 'Features',
    sections: [
      {
        heading: 'Features that match real sessions',
        body: [
          `Private cheats for The Isle are not just enable and run. They are tools for situations where a mistake can cost days of progress. [The Isle Hacks](/the-isle-cheats) lists Visual Options and Misc Options tuned for stability on Easy Anti-Cheat (EAC) builds when status is Active.`,
          `Visual Options include [Player ESP](/blog/the-isle-wallhack-wh-player-esp), [NPC ESP](/blog/the-isle-wallhack-wh-player-esp), [Animal ESP](/blog/the-isle-wallhack-wh-player-esp), Box, Snapline, Name, Distance, Corpse, Health, Stamina, Growth, Species, Player Direction, Head Dot, Visible Check, Gore, Fruit, Water, and Max Distance.`,
          `Misc Options include Crosshair, Suicide, Fullbright, Show FPS, Show Resolution, Show Time, Custom Menu Key, Custom Panic Key, and Custom ESP Colors. See the [features checklist forum thread](/forums/features-list) for setup notes.`,
        ],
      },
      {
        heading: 'Deep dives by topic',
        body: [
          `Combat and vision: [The Isle wallhack (WH)](/blog/the-isle-wallhack-wh-player-esp) and player ESP overlays.`,
          `Resources: [Evrima ESP for corpses, water, and fruit](/blog/the-isle-evrima-esp-items-water-fruit-corpse).`,
          `Comfort and HUD: [fullbright, crosshair, and custom keys](/blog/the-isle-misc-fullbright-crosshair-keys).`,
          `Awareness without clutter: [map-style radar thinking with distance and direction ESP](/blog/the-isle-radar-map-hack-awareness).`,
          `Players also search [dino aim bot](/blog/the-isle-aimbot-dino-aim-bot) terms — read how that differs from the ESP-first modules on our [store](/the-isle-cheats).`,
        ],
      },
    ],
  },
  {
    slug: 'the-isle-aimbot-dino-aim-bot',
    title: 'The Isle Aimbot and Dino Aim Bot — What Players Search For',
    excerpt:
      'The Isle aimbot and dino aim bot searches spike on PvP servers — how lock-on combat tools differ from The Isle Hacks ESP, crosshair, and visible check modules on Windows PC.',
    metaTitle: 'The Isle Aimbot | Dino Aim Bot | The Isle Hacks',
    metaDescription:
      'The Isle aimbot and dino aim bot explained for Evrima PvP — keywords, combat precision, and where to configure player ESP, crosshair, and visible check on The Isle Hacks.',
    searchTerms: 'the isle aimbot, dino aim bot, the isle cheats, the isle hacks',
    date: '2026-03-12',
    readMinutes: 7,
    tag: 'Combat',
    sections: [
      {
        heading: 'Why aimbot keywords dominate PvP',
        body: [
          `Predator players know one wrong bite can flip a hunt. Searches for The Isle aimbot and dino aim bot usually mean tighter combat precision under lag — lock target, FOV limits, and distance filters that ignore far silhouettes.`,
          `Common aim-assist ideas players ask about include activation on key hold, lock target during movement, draw FOV, distance filters, and off-screen arrows. Those are combat-layer tools, separate from survival ESP.`,
          `[The Isle Hacks](/the-isle-cheats) ships Visual and Misc modules documented on our store — Crosshair, Visible Check, Player Direction, and Head Dot support readable engagements without claiming a full aimbot stack. Confirm [loader status](/status) before you load on EAC servers.`,
        ],
      },
      {
        heading: 'Pair combat reads with ESP',
        body: [
          `Hunting as Carnotaurus or defending as Tenontosaurus is easier when [wallhack-style player ESP](/blog/the-isle-wallhack-wh-player-esp) shows growth and stamina before you commit.`,
          `For resource recovery after fights, use [corpse and water ESP](/blog/the-isle-evrima-esp-items-water-fruit-corpse) instead of guessing routes in fog.`,
          `Questions about install and keys: [complete setup](/forums/complete-setup) and [The Isle support](/support).`,
        ],
      },
    ],
  },
  {
    slug: 'the-isle-wallhack-wh-player-esp',
    title: 'The Isle Wallhack (WH) — Player, NPC, and Animal ESP',
    excerpt:
      'The Isle wallhack WH on buyislehacks.net — box, snapline, name, distance, species, health, stamina, growth, visible check, and max distance for Evrima forests and PvP.',
    metaTitle: 'The Isle Wallhack WH | Player ESP | The Isle Hacks',
    metaDescription:
      'The Isle wallhack and WH ESP — player, NPC, and animal overlays with box, snapline, growth, and visible check. Modules listed on The Isle Hacks store.',
    searchTerms: 'the isle wallhack, the isle wh, the isle esp, the isle cheats',
    date: '2026-03-13',
    readMinutes: 8,
    tag: 'Features',
    sections: [
      {
        heading: 'WH as strategic vision',
        body: [
          `WallHack is one of the most searched The Isle cheats features on dense servers with thick forests and fog. WH-style ESP lets you read other players, NPCs, and animals with Box, Snapline, Name, Distance, Species, Health, Stamina, Growth, Player Direction, Head Dot, and Visible Check.`,
          `This is not only hunting — it is migration planning. A young Utahraptor can spot a hidden Spinosaurus early and reroute; a herbivore can find stragglers without blind pushes.`,
          `Every module above is listed under Visual Options on the [The Isle store](/the-isle-cheats). Tune [Max Distance](/forums/player-esp-config) so team fights stay readable.`,
        ],
      },
      {
        heading: 'Related intel',
        body: [
          `Stack resource ESP: [water, fruit, and corpses](/blog/the-isle-evrima-esp-items-water-fruit-corpse).`,
          `Misc comfort: [fullbright and crosshair](/blog/the-isle-misc-fullbright-crosshair-keys).`,
          `Return to the [The Isle cheats features hub](/blog/the-isle-cheats-features).`,
        ],
      },
    ],
  },
  {
    slug: 'the-isle-evrima-esp-items-water-fruit-corpse',
    title: 'The Isle Evrima ESP — Corpses, Water, Fruit, and Gore',
    excerpt:
      'Isle Evrima ESP items for corpses, meats, water, fruit, and gore — distance indicators and filters that match The Isle Hacks Visual Options on Windows PC.',
    metaTitle: 'The Isle Evrima ESP | Water & Fruit | The Isle Hacks',
    metaDescription:
      'The Isle Evrima ESP for corpses, water, fruit, and gore with distance readouts — the isle cheats resource routing on buyislehacks.net.',
    searchTerms: 'the isle evrima esp, the isle esp items, the isle cheats, isle evrima cheats',
    date: '2026-03-14',
    readMinutes: 7,
    tag: 'Survival',
    sections: [
      {
        heading: 'World ESP for explorers',
        body: [
          `World ESP answers a simple problem: water, corpses, fruit, and gore are scattered unevenly, and vanilla navigation can burn hours. The Isle Hacks highlights Corpse, Gore, Fruit, Water, and Distance alongside player and animal ESP.`,
          `After a long hunt, route to the nearest water or corpse to restore stamina and growth pacing. Herbivore players use Fruit ESP to plan growth without random starvation.`,
          `Configure categories in-game, then save profiles after reading [survival ESP defaults](/forums/survival-esp-config).`,
        ],
      },
      {
        heading: 'Pipeline for meaty corpses and remote water',
        body: [
          `Players describe a pipeline for finding meaty corpses, water, and rare fruit in remote biomes — that is exactly what Visual Options target with Max Distance and Visible Check.`,
          `Pair with [growth and stamina overlays](/blog/the-isle-cheats-features) before risking nested PvP.`,
          `Buy access on the [store](/the-isle-cheats) — monthly $35 or lifetime $150 with instant delivery when Active.`,
        ],
      },
    ],
  },
  {
    slug: 'the-isle-radar-map-hack-awareness',
    title: 'The Isle Radar and Map Hack Awareness with ESP',
    excerpt:
      'The Isle radar hack and map hack searches — how distance, direction, and animal ESP on The Isle Hacks replace minimap anxiety on Evrima Horde servers.',
    metaTitle: 'The Isle Radar Hack | Map Hack | The Isle Hacks',
    metaDescription:
      'The Isle radar hack and map hack guide — 2D awareness with player direction, distance ESP, and animal overlays from The Isle Hacks on Windows PC.',
    searchTerms: 'the isle radar hack, the isle map hack, the isle cheats, the isle hacks',
    date: '2026-03-15',
    readMinutes: 6,
    tag: 'Features',
    sections: [
      {
        heading: 'Radar-style awareness without a minimap',
        body: [
          `Players ask for The Isle radar hack and map hack because the game hides threats behind terrain. Our Visual Options deliver radar-like awareness through Player Direction, Head Dot, Distance, and Animal ESP with Max Distance tuning — a 360° read without a literal minimap widget.`,
          `On Evrima Horde, fights start fast. Direction and distance overlays help you notice approach paths before visual contact — useful for pack hunting or nest defense.`,
          `See modules on the [The Isle store](/the-isle-cheats) and compare with [WH player ESP](/blog/the-isle-wallhack-wh-player-esp).`,
        ],
      },
    ],
  },
  {
    slug: 'the-isle-misc-fullbright-crosshair-keys',
    title: 'The Isle Misc — Fullbright, Crosshair, and Custom Keys',
    excerpt:
      'The Isle Evrima misc options: fullbright nights, crosshair, FPS and resolution readouts, custom menu and panic keys, and ESP colors — exact Misc Options on The Isle Hacks.',
    metaTitle: 'The Isle Fullbright & Crosshair | The Isle Hacks',
    metaDescription:
      'The Isle misc cheats — fullbright, crosshair, show FPS, custom menu key, custom panic key, and ESP colors. Misc Options on buyislehacks.net.',
    searchTerms: 'the isle fullbright, the isle cheats misc, the isle hacks, isle evrima cheats',
    date: '2026-03-16',
    readMinutes: 6,
    tag: 'Misc',
    sections: [
      {
        heading: 'Comfort tools that save time',
        body: [
          `Misc functions make long growth sessions tolerable: Fullbright for dark nights, Crosshair for bite alignment reads, Show FPS and Show Resolution for performance tuning, Show Time for session planning, and Custom Menu Key / Custom Panic Key for safe toggling.`,
          `Custom ESP Colors keep player, NPC, and animal classes readable when forests get busy.`,
          `These match the Misc Options list on [The Isle Hacks store](/the-isle-cheats). Setup walkthrough: [complete setup](/forums/complete-setup).`,
        ],
      },
      {
        heading: 'What we do not list on the store',
        body: [
          `Forum searches mention speedhack, noclip, or infinite food — those are not part of our published Visual/Misc module list. Stay aligned with documented features and [EAC status](/blog/the-isle-undetected-hacks-eac) before loading.`,
        ],
      },
    ],
  },
  {
    slug: 'best-the-isle-hacks-review-2026',
    title: 'Best The Isle Hacks in 2026 — Why The Isle Hacks',
    excerpt:
      'Best The Isle hacks review for 2026 — private the isle cheats with EAC-aware updates, Discord support, and transparent Active status on buyislehacks.net.',
    metaTitle: 'Best The Isle Hacks Review 2026 | The Isle Hacks',
    metaDescription:
      'Best The Isle hacks 2026 — The Isle Hacks with instant delivery, loader support, EAC tracking, and ESP modules for Evrima on Windows PC.',
    searchTerms: 'best the isle hacks, the isle cheats, the isle undetected hacks',
    date: '2026-03-17',
    readMinutes: 8,
    tag: 'Reviews',
    sections: [
      {
        heading: 'Private beats public builds',
        body: [
          `When you buy private The Isle cheats, vendor quality matters as much as features. ${BRAND} focuses on one game only — no multi-title catalog — with documented Visual and Misc modules, [reviews](/reviews), and [forums](/forums) for EAC and setup threads.`,
          `Privacy: use official checkout only ([buy safely guide](/forums/buy-the-isle-cheats-safely)). Delivery is digital through the linked loader after purchase.`,
          `Experience: ESP, growth, stamina, and resource overlays are tested against Evrima patches; watch [status](/status) after updates.`,
        ],
      },
      {
        heading: 'Support, pricing, and updates',
        body: [
          `Installation guides live on [support](/support) and Discord-linked help after checkout. Plans: monthly $35 (plan id mon, 30 days) or lifetime $150 (plan id lifetime) on the [store](/the-isle-cheats).`,
          `Compare feature depth in the [intel hub](/blog) and [features article](/blog/the-isle-cheats-features).`,
        ],
      },
    ],
  },
  {
    slug: 'how-to-buy-the-isle-cheats-2026',
    title: 'How to Buy The Isle Cheats in 2026',
    excerpt:
      'How to buy The Isle cheats on buyislehacks.net — check status, open the store, choose monthly or lifetime, checkout, and follow setup for Evrima on Windows PC.',
    metaTitle: 'How to Buy The Isle Cheats 2026 | The Isle Hacks',
    metaDescription:
      'How to buy The Isle cheats in 2026 — The Isle store, $35 monthly or $150 lifetime, instant delivery, setup forum, and EAC status on The Isle Hacks.',
    searchTerms: 'how to buy the isle cheats, the isle cheats, buy the isle hacks',
    date: '2026-03-18',
    readMinutes: 5,
    tag: 'Guides',
    sections: [
      {
        heading: 'Step-by-step on The Isle Hacks',
        body: [
          `1) Open [${HOST}](https://${HOST}) — avoid fake checkout pages. 2) Read [loader status](/status) (Active vs Updating). 3) Open the [The Isle store](/the-isle-cheats) and review Visual/Misc modules. 4) Pick monthly ($35) or lifetime ($150). 5) Continue to checkout for instant digital delivery. 6) Follow [complete setup](/forums/complete-setup). 7) Configure ESP in [player ESP config](/forums/player-esp-config).`,
          `Need billing help? [FAQ](/faq) and [support](/support). Compare modules in the [features blog](/blog/the-isle-cheats-features).`,
        ],
      },
    ],
  },
  {
    slug: 'the-isle-undetected-hacks-eac',
    title: 'The Isle Undetected Hacks and EAC Status',
    excerpt:
      'The Isle undetected hacks depend on EAC, patch timing, and loader status — how The Isle Hacks labels Active and Updating after game and anti-cheat updates.',
    metaTitle: 'The Isle Undetected Hacks | EAC | The Isle Hacks',
    metaDescription:
      'The Isle undetected hacks and Easy Anti-Cheat (EAC) — read Active vs Updating on The Isle Hacks before you load Isle Evrima cheats.',
    searchTerms: 'the isle undetected hacks, the isle eac, the isle cheats, easy anti-cheat',
    date: '2026-03-19',
    readMinutes: 6,
    tag: 'Safety',
    sections: [
      {
        heading: 'Undetected is a process, not a promise',
        body: [
          `The Isle undetected hacks searches spike after EAC or Evrima patches. ${BRAND} publishes clear [status](/status) instead of loading mismatched builds. Read [EAC & safety](/forums/eac-anticheat-safety) before public servers.`,
          `Private software reduces unpredictability — it does not make you immortal. Pair ESP with smart routing and documented modules only.`,
          `After patch day, wait for Active, then reload configs from [features list](/forums/features-list).`,
        ],
      },
    ],
  },
  {
    slug: 'the-isle-hacks-support-updates',
    title: 'The Isle Hacks Support, Updates, and Discord Help',
    excerpt:
      'The Isle Hacks support — Discord loader help, menu keys, instant delivery, and patch-synced updates for the isle cheats on Windows PC.',
    metaTitle: 'The Isle Hacks Support & Updates | The Isle Hacks',
    metaDescription:
      'The Isle Hacks support for the isle cheats — Discord setup, custom menu and panic keys, delivery, and status after Evrima updates.',
    searchTerms: 'the isle hacks support, the isle cheats setup, the isle cheats',
    date: '2026-03-20',
    readMinutes: 5,
    tag: 'Support',
    sections: [
      {
        heading: '24/7 help after purchase',
        body: [
          `${BRAND} support covers loader setup, menu configuration, and anti-cheat status questions on [support](/support) and Discord channels linked after checkout.`,
          `We track Evrima updates and freeze loads to Updating when builds mismatch — same labels shown on [status](/status) and [game patch thread](/forums/game-patch-status).`,
          `Start with [setup](/forums/complete-setup), then tune [custom menu and panic keys](/blog/the-isle-misc-fullbright-crosshair-keys) from Misc Options.`,
        ],
      },
    ],
  },
]

const header = `/** Auto-generated by scripts/generate-isle-intel.mjs */
import { orderArticlesForGrid } from '../lib/blog-order'

export type ArticleSection = {
  heading: string
  body: string[]
}

export type Article = {
  slug: string
  title: string
  excerpt: string
  metaTitle: string
  metaDescription: string
  searchTerms: string
  date: string
  readMinutes: number
  tag: string
  sections: ArticleSection[]
}

export const ARTICLES: Article[] = `

const footer = `

export function getArticle(slug: string) {
  return ARTICLES.find((a) => a.slug === slug)
}

export function getRelatedArticles(slug: string, limit = 6): Article[] {
  const current = getArticle(slug)
  if (!current) return []
  const pool = ARTICLES.filter((a) => a.slug !== slug).sort((a, b) => {
    const tagRank = (p: Article) => (p.tag === current.tag ? 0 : 1)
    return tagRank(a) - tagRank(b) || a.title.localeCompare(b.title)
  })
  return orderArticlesForGrid(pool.slice(0, Math.max(limit, 12)), 4).slice(0, limit)
}

export { articlePath } from './blog-paths'
`

const finalized = ARTICLES.map(finalizeArticle)

writeFileSync(
  join(root, 'src', 'data', 'articles.ts'),
  header + JSON.stringify(finalized, null, 2) + footer,
  'utf8',
)

console.log(`Wrote ${ARTICLES.length} intel articles to src/data/articles.ts`)
