/**
 * Generates forums.ts, forum-index.ts, forum-replies.ts for buyislehacks.net (The isle hacks SEO).
 */
import { writeFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const BRAND = 'The Isle Hacks'
const HOST = 'buyislehacks.net'
const PRIMARY_KW = 'The isle hacks'

function hashSlug(slug) {
  let h = 0
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) >>> 0
  return h
}

function metaDescription(text) {
  const t = text.replace(/\[[^\]]+\]\([^)]+\)/g, (m) => m.slice(1, m.indexOf(']')))
  const first = t.slice(0, 155)
  return first.endsWith('.') ? first : `${first}.`
}

function metaTitle(title) {
  return `${title} | ${PRIMARY_KW}`
}

const FEATURES_BLURB =
  'Visual Options on the [store](/the-isle-cheats): Player ESP, NPC ESP, Animal ESP, growth, stamina, corpse, water, fruit, fullbright, and Misc keys — see [features list](/forums/features-list).'

const NORMS = [
  'Moderators lock threads that share crack links, public offsets, or Cheat Engine tutorials aimed at live EAC servers.',
  `Official checkout and loader help only via [${HOST}](https://${HOST}) — ignore random Discord key sellers.`,
]

const FORUM_DEFS = [
  {
    slug: 'the-isle-hacks-daily',
    title: 'Daily thread: The isle hacks, Evrima ESP, and EAC rumors',
    excerpt:
      'The isle hacks daily — loader Active/Updating on buyislehacks.net, player ESP configs, and patch-day EAC talk. Read pinned rules before posting.',
    kw: 'The isle hacks, the isle cheats, the isle esp',
    tag: 'General',
    community: 'islehacks',
    author: 'AncientNest',
    sections: [
      {
        heading: 'Opening post',
        body: [
          `Welcome to r/islehacks — community discussion for **${PRIMARY_KW}** on Windows PC (Evrima + Legacy). Product modules live on [${HOST}](https://${HOST}); long-form intel on the [blog](/blog).`,
          `Before you load: check [status](/status). After patches, wait for Active — do not reinstall Windows first.`,
          FEATURES_BLURB,
        ],
      },
      { heading: 'Discussion norms', body: NORMS },
    ],
  },
  {
    slug: 'the-isle-evrima-cheats',
    title: 'The Isle Evrima — which The isle hacks builds work on Horde servers?',
    excerpt:
      'The Isle Evrima cheats and Horde servers: branch differences, loader status, and ESP defaults for buyislehacks.net users.',
    kw: 'the isle evrima, the isle evrima cheats, The isle hacks',
    tag: 'Evrima',
    community: 'EvrimaHorde',
    author: 'iR3SH_fan',
    sections: [
      {
        heading: 'Opening post',
        body: [
          'Tagged like UnknownCheats “the isle evrima” threads — but official modules are only documented on buyislehacks.net. Horde performance patches can flip loader status to Updating overnight.',
          'Compare [Evrima Horde intel](/blog/the-isle-radar-map-hack-awareness) with your server rules before enabling overlays.',
          'Need setup? [Complete setup](/forums/complete-setup) · [Patch status](/forums/game-patch-status).',
        ],
      },
      { heading: 'Discussion norms', body: NORMS },
    ],
  },
  {
    slug: 'isle-evrima-combat-knockback-rumors',
    title: 'ISLE EVRIMA — knockback / launch reports on PvP (not a cheat request thread)',
    excerpt:
      'The isle hacks forum archive: knockback and launch rumors on Evrima PvP — desync, admin tools, and why exploit menus get you banned.',
    kw: 'the isle evrima, the isle cheats, isle evrima cheats',
    tag: 'Evrima',
    community: 'EvrimaPvP',
    author: 'stewie2100',
    sections: [
      {
        heading: 'Opening post',
        body: [
          'Mirrors the UC thread title about “send other dinos flying” — we do **not** host exploit tutorials. Reports of launch/knockback are usually server plugins, desync, or banned public menus.',
          `${BRAND} documents survival ESP and misc comfort tools — not physics exploits. Read [EAC safety](/forums/eac-anticheat-safety).`,
          'For legitimate combat reads use [player ESP](/forums/the-isle-esp-thread) and [Visible Check](/forums/player-esp-config) on the store list.',
        ],
      },
      { heading: 'Discussion norms', body: NORMS },
    ],
  },
  {
    slug: 'infinite-stamina-health-eac',
    title: 'THE ISLE — growth, stamina, and health overlays vs EAC detection',
    excerpt:
      'The isle hacks thread: stamina and health ESP vs “infinite stamina” scams — what EAC can flag and what buyislehacks.net actually lists.',
    kw: 'the isle cheats, infinite stamina the isle, The isle hacks',
    tag: 'EAC',
    community: 'EACSafety',
    author: 'wasguckstdu326',
    sections: [
      {
        heading: 'Opening post',
        body: [
          'UC-style question: “Infinite Stamina, Health cheat — can this be detected?” On EAC titles, **read-only overlays** still carry risk; memory writes are worse.',
          `Our [store](/the-isle-cheats) lists **Growth**, **Stamina**, and **Health** as ESP readouts — not infinite stat cheats. Pair with [growth & stamina tracking](/forums/growth-stamina-tracking).`,
          'Always verify [Active status](/status) after Evrima updates.',
        ],
      },
      { heading: 'Discussion norms', body: NORMS },
    ],
  },
  {
    slug: 'anyone-the-isle-evrima-cheats',
    title: 'Anyone got working The Isle Evrima cheats with instant delivery?',
    excerpt:
      'The isle hacks buyers ask about Evrima cheats — scams, fake loaders, and the official buyislehacks.net checkout path.',
    kw: 'the isle evrima cheats, the isle cheats, The isle hacks',
    tag: 'Buying',
    community: 'IsleDeals',
    author: 'vitorboc00',
    sections: [
      {
        heading: 'Opening post',
        body: [
          'Before you ask in DMs: use [buy safely](/forums/buy-the-isle-hacks-safely) and the [The Isle store](/the-isle-cheats). Monthly $35 · lifetime $150 when Active.',
          'Blog walkthrough: [how to buy The Isle cheats in 2026](/blog/how-to-buy-the-isle-cheats-2026).',
          'Support after purchase: [support](/support) and [Discord help thread](/forums/the-isle-hacks-daily).',
        ],
      },
      { heading: 'Discussion norms', body: NORMS },
    ],
  },
  {
    slug: 'the-isle-steam',
    title: 'The Isle Steam — Evrima branch, loader order, and first inject',
    excerpt:
      'The isle hacks on Steam: launch order, exclusions, and Evrima-only notes for buyislehacks.net loader users on Windows PC.',
    kw: 'the isle steam, the isle cheats, The isle hacks',
    tag: 'Setup',
    community: 'IsleSteam',
    author: 'vitorboc00',
    sections: [
      {
        heading: 'Opening post',
        body: [
          'Steam validates Evrima separately from Legacy — confirm which branch you play before loading.',
          'Follow [complete setup](/forums/complete-setup): status → exclusions → inject → save ESP profile.',
          'Crash on boot? See [Crashing The Isle](/forums/crashing-the-isle).',
        ],
      },
      { heading: 'Discussion norms', body: NORMS },
    ],
  },
  {
    slug: 'the-isle-esp-infinite-stamina',
    title: 'The Isle ESP or infinite stamina — what the store actually ships',
    excerpt:
      'The isle hacks FAQ-style thread: ESP modules vs infinite stamina myths on buyislehacks.net Visual Options.',
    kw: 'the isle esp, the isle wallhack, The isle hacks',
    tag: 'ESP',
    community: 'IsleESP',
    author: 'Sharplight1',
    sections: [
      {
        heading: 'Opening post',
        body: [
          'Player ask: “ESP or Infinite Stamina?” — we ship **Player / NPC / Animal ESP** plus **Stamina/Growth readouts**, not stat hacking.',
          'Configure [player ESP](/forums/player-esp-config) and [survival ESP](/forums/survival-esp-config).',
          'Wallhack keywords map to our box/snapline/visible check list — see [The Isle ESP thread](/forums/the-isle-esp-thread).',
        ],
      },
      { heading: 'Discussion norms', body: NORMS },
    ],
  },
  {
    slug: 'the-isle-esp-thread',
    title: 'The Isle ESP — player, NPC, and animal overlays (pinned defaults)',
    excerpt:
      'The isle hacks ESP defaults: box, snapline, species, distance, max distance, and custom colors for Evrima.',
    kw: 'the isle esp, the isle wallhack, the isle wh',
    tag: 'ESP',
    community: 'IsleESP',
    author: 'KreonZZ',
    sections: [
      {
        heading: 'Opening post',
        body: [
          'Pinned ESP defaults for r/IsleESP — matches [features list](/forums/features-list) on the store.',
          'Start with Player + Animal ESP, Visible Check, Max Distance 250–350m, then add corpse/water/fruit for farming routes.',
          'Intel: [wallhack WH guide](/blog/the-isle-wallhack-wh-player-esp) · [water & fruit ESP](/blog/the-isle-evrima-esp-items-water-fruit-corpse).',
        ],
      },
      { heading: 'Discussion norms', body: NORMS },
    ],
  },
  {
    slug: 'crashing-the-isle',
    title: 'Crashing The Isle — inject order, overlays, and DXGI conflicts',
    excerpt:
      'The isle hacks support thread: client crashes after loader, Steam overlay conflicts, and clean reboot checklist.',
    kw: 'crashing the isle, the isle cheats, The isle hacks',
    tag: 'Support',
    community: 'IsleSupport',
    author: '1Klas',
    sections: [
      {
        heading: 'Opening post',
        body: [
          'If The Isle crashes after inject: disable other overlays, verify exclusions, one clean reboot, retry once.',
          'Still failing? [Loader errors](/forums/loader-errors) · [Support](/support) with order ID.',
          'Confirm [Active status](/status) — Updating builds crash more often than Active ones.',
        ],
      },
      { heading: 'Discussion norms', body: NORMS },
    ],
  },
  {
    slug: 'the-isle-offsets-and-reversing',
    title: 'The Isle offsets — why public dumps get you banned',
    excerpt:
      'The isle hacks policy thread: offset sharing, memory tools, and why buyislehacks.net uses a private loader instead of UC-style dumps.',
    kw: 'the isle offsets, the isle unreal engine, The isle hacks',
    tag: 'Safety',
    community: 'IsleReversing',
    author: 'chianca13',
    sections: [
      {
        heading: 'Opening post',
        body: [
          'Threads titled “The Isle offsets” on other sites often share stale UE4 dumps — EAC signatures love public paste bins.',
          `${BRAND} does not publish offsets. Use documented modules on the [store](/the-isle-cheats) instead of manual memory editing.`,
          'Read [undetected & EAC](/blog/the-isle-undetected-hacks-eac).',
        ],
      },
      { heading: 'Discussion norms', body: NORMS },
    ],
  },
  {
    slug: 'the-isle-evrima-horde',
    title: 'The Isle Evrima Horde — server meta and ESP distance tuning',
    excerpt:
      'The isle hacks on Horde servers: pack fights, nest defense, and ESP max distance tips for buyislehacks.net users.',
    kw: 'the isle evrima horde, isle evrima cheats, The isle hacks',
    tag: 'Evrima',
    community: 'EvrimaHorde',
    author: 'ChinaCxCoder',
    sections: [
      {
        heading: 'Opening post',
        body: [
          'Horde servers spike CPU and player density — lower ESP clutter with Max Distance and species filters.',
          '[Radar-style awareness](/blog/the-isle-radar-map-hack-awareness) without a minimap: Player Direction + Head Dot.',
          'Patch days: [game patch status](/forums/game-patch-status).',
        ],
      },
      { heading: 'Discussion norms', body: NORMS },
    ],
  },
  {
    slug: 'eac-anticheat-safety',
    title: 'Easy Anti-Cheat on The Isle — bans, reports, and smurf testing',
    excerpt:
      'The isle hacks EAC thread: delayed bans, report volume, and why private loaders beat public menus on buyislehacks.net.',
    kw: 'the isle eac, the isle undetected hacks, The isle hacks',
    tag: 'EAC',
    community: 'EACSafety',
    author: 'mmr_anxious',
    sections: [
      {
        heading: 'Opening post',
        body: [
          'EAC is the enforcement layer for Evrima — treat third-party tools as high risk on mains.',
          'Test configs on alt accounts when possible; read [undetected hacks intel](/blog/the-isle-undetected-hacks-eac).',
          'Status first: [status page](/status).',
        ],
      },
      { heading: 'Discussion norms', body: NORMS },
    ],
  },
  {
    slug: 'complete-setup',
    title: 'Instructions: The isle hacks loader + first inject on Windows',
    excerpt:
      'The isle hacks setup — Active status on buyislehacks.net, Defender exclusions, Steam launch order, first ESP profile.',
    kw: 'the isle cheats setup, The isle hacks, the isle esp',
    tag: 'Setup',
    community: 'IsleSetup',
    author: 'support_fan',
    howTo: true,
    sections: [
      {
        heading: '1) Check status',
        body: [
          'Open [status](/status) — load only when Active unless you accept Updating risk.',
          'Read [setup blog](/blog/the-isle-hacks-support-updates) for Discord help.',
        ],
      },
      {
        heading: '2) Configure modules',
        body: [
          'Enable Player ESP + growth/stamina readouts first; save profile.',
          'Tune [player ESP](/forums/player-esp-config) and [survival ESP](/forums/survival-esp-config).',
          FEATURES_BLURB,
        ],
      },
      {
        heading: '3) Checkout & delivery',
        body: [
          'Purchase on [The Isle store](/the-isle-cheats) — instant digital delivery.',
          NORMS[1],
        ],
      },
    ],
  },
  {
    slug: 'features-list',
    title: 'The isle hacks feature list (Visual + Misc modules)',
    excerpt:
      'Complete The isle hacks module checklist — matches buyislehacks.net store Visual Options and Misc Options.',
    kw: 'the isle cheats list, The isle hacks features, the isle esp',
    tag: 'Features',
    community: 'islehacks',
    author: 'IsleHacksMod',
    sections: [
      {
        heading: 'Visual Options',
        body: [
          'Player ESP, NPC ESP, Animal ESP, Box, Snapline, Name, Distance, Corpse, Health, Stamina, Growth, Species, Player Direction, Head Dot, Visible Check, Gore, Fruit, Water, Max Distance.',
          'Deep dive: [features blog](/blog/the-isle-cheats-features).',
        ],
      },
      {
        heading: 'Misc Options',
        body: [
          'Crosshair, Suicide, Fullbright, Show FPS, Show Resolution, Show Time, Custom Menu Key, Custom Panic Key, Custom ESP Colors.',
          '[Misc guide](/blog/the-isle-misc-fullbright-crosshair-keys).',
        ],
      },
    ],
  },
  {
    slug: 'player-esp-config',
    title: 'Player ESP config — box, snapline, visible check, max distance',
    excerpt:
      'The isle hacks player ESP tuning for Evrima PvP without screen clutter on buyislehacks.net.',
    kw: 'the isle player esp, the isle wallhack, The isle hacks',
    tag: 'ESP',
    community: 'IsleESP',
    author: 'pos4_vision',
    sections: [
      {
        heading: 'Recommended toggles',
        body: [
          'Enable Box + Snapline + Name + Distance + Species + Visible Check. Add Head Dot only if you need bite alignment.',
          'Set Max Distance before nest fights — see [The Isle ESP thread](/forums/the-isle-esp-thread).',
        ],
      },
      { heading: 'Discussion norms', body: NORMS },
    ],
  },
  {
    slug: 'survival-esp-config',
    title: 'Survival ESP — water, fruit, corpse, and gore routing',
    excerpt:
      'The isle hacks survival overlays for herbivore routes and post-fight recovery on Evrima.',
    kw: 'the isle esp items, the isle water esp, The isle hacks',
    tag: 'Survival',
    community: 'IsleSurvival',
    author: 'fog_breaker',
    sections: [
      {
        heading: 'Routing tips',
        body: [
          'Enable Water + Fruit + Corpse with Distance filters; pair with [growth/stamina](/forums/growth-stamina-tracking).',
          'Blog: [Evrima ESP items](/blog/the-isle-evrima-esp-items-water-fruit-corpse).',
        ],
      },
      { heading: 'Discussion norms', body: NORMS },
    ],
  },
  {
    slug: 'buy-the-isle-hacks-safely',
    title: 'Buying The isle hacks safely — checkout, delivery, scams',
    excerpt:
      'The isle hacks checkout safety on buyislehacks.net — official URL, instant delivery, ignore Discord key spam.',
    kw: 'buy the isle hacks, the isle cheats, The isle hacks',
    tag: 'Buying',
    community: 'IsleDeals',
    author: 'MoneyKing',
    sections: [
      {
        heading: 'Official path',
        body: [
          'Only checkout via [The Isle store](/the-isle-cheats) or site [/checkout](/checkout) redirect.',
          'Guide: [how to buy 2026](/blog/how-to-buy-the-isle-cheats-2026).',
        ],
      },
      { heading: 'Discussion norms', body: NORMS },
    ],
  },
  {
    slug: 'game-patch-status',
    title: 'Patch day: The Isle update vs loader Active / Updating',
    excerpt:
      'The isle hacks status thread — Evrima patches, EAC updates, and when to load on buyislehacks.net.',
    kw: 'the isle patch, the isle eac, The isle hacks',
    tag: 'Patches',
    community: 'PatchWatch',
    author: 'patch_day_survivor',
    sections: [
      {
        heading: 'Opening post',
        body: [
          'When Evrima updates, expect Updating labels — do not load until [status](/status) shows Active.',
          'Discuss patch IDs here; official labels mirror the status page.',
        ],
      },
      { heading: 'Discussion norms', body: NORMS },
    ],
  },
  {
    slug: 'loader-errors',
    title: 'Loader errors — menu not opening, inject failed, exclusions',
    excerpt:
      'The isle hacks loader troubleshooting for Windows 10/11 on buyislehacks.net.',
    kw: 'the isle loader, the isle cheats, The isle hacks',
    tag: 'Support',
    community: 'IsleSupport',
    author: 'loader_doc',
    sections: [
      {
        heading: 'Opening post',
        body: [
          'Menu not opening: exclusions, admin run, single monitor test, one reboot.',
          'Still stuck? [Support](/support) with order email + [status](/status) screenshot.',
        ],
      },
      { heading: 'Discussion norms', body: NORMS },
    ],
  },
  {
    slug: 'growth-stamina-tracking',
    title: 'Growth and stamina ESP — nest timing and fight decisions',
    excerpt:
      'The isle hacks growth/stamina overlays for Evrima progression without menu tabbing.',
    kw: 'the isle growth esp, the isle stamina, The isle hacks',
    tag: 'Survival',
    community: 'IsleSurvival',
    author: 'nest_timer',
    sections: [
      {
        heading: 'Opening post',
        body: [
          'Growth + Stamina ESP helps commit to fights or flee before you lose hours of progress.',
          'Pair with [player ESP](/forums/player-esp-config) and [features list](/forums/features-list).',
        ],
      },
      { heading: 'Discussion norms', body: NORMS },
    ],
  },
  {
    slug: 'the-isle-hacks-lifetime',
    title: 'Lifetime vs monthly ($150 vs $35) — which The isle hacks plan?',
    excerpt:
      'The isle hacks pricing — plan id lifetime (P99Y) vs mon (P30D) on buyislehacks.net.',
    kw: 'the isle hacks lifetime, the isle cheats price, The isle hacks',
    tag: 'Buying',
    community: 'IsleDeals',
    author: 'longterm_main',
    sections: [
      {
        heading: 'Opening post',
        body: [
          'Monthly $35 (mon, 30 days) to test Active builds; lifetime $150 for multi-season players.',
          'Compare on [store](/the-isle-cheats) · [FAQ](/faq).',
        ],
      },
      { heading: 'Discussion norms', body: NORMS },
    ],
  },
]

function buildForum(def, idx) {
  return {
    slug: def.slug,
    title: def.title,
    excerpt: def.excerpt,
    metaTitle: metaTitle(def.title),
    metaDescription: metaDescription(def.excerpt),
    searchTerms: def.kw,
    date: `2026-03-${String(5 + (idx % 22)).padStart(2, '0')}`,
    readMinutes: 5 + (idx % 5) + (def.howTo ? 2 : 0),
    tag: def.tag,
    community: def.community,
    author: def.author,
    score: 140 + (hashSlug(def.slug) % 860),
    sections: def.sections,
    ...(def.howTo ? { howTo: true } : {}),
  }
}

const MEMBER_LINES = [
  'Followed [complete setup](/forums/complete-setup) — player ESP came up first try after exclusions.',
  'Can confirm Active on buyislehacks.net fixed my Updating scares — check [status](/status) daily.',
  'Max Distance at 300m kept Horde fights readable — see [player ESP config](/forums/player-esp-config).',
  'Lifetime plan paid off after month three — still Active post-Evrima patch.',
  'Stop DMing random “devs” — use [buy safely](/forums/buy-the-isle-hacks-safely) only.',
  'Water + fruit ESP saved my herbivore grind — [survival ESP](/forums/survival-esp-config) thread is gold.',
  'EAC thread convinced me to test on an alt first.',
  'Crash fixed by closing Steam overlay — [crashing the isle](/forums/crashing-the-isle) checklist works.',
]

const MEMBER_NAMES = [
  'Utah_Rook',
  'EvrimaScout',
  'NestDefender',
  'HordeRunner',
  'StaminaWatch',
  'CorpseRoute',
  'IsleModFan',
  'PatchDaySam',
]

function repliesForSlug(post) {
  const h = hashSlug(post.slug)
  const count = 5 + (h % 5)
  const replies = [
    {
      author: `${PRIMARY_KW} Editor`,
      role: 'editor',
      date: '2026-03-10',
      body: `Editor: pinned ${post.tag} reference for r/${post.community}. Official modules only on ${HOST} — confirm Active before public servers.`,
    },
    {
      author: 'Forum Moderator',
      role: 'moderator',
      date: '2026-03-12',
      body: `Moderator: no offsets, cracks, or public menu links. ${PRIMARY_KW} checkout only via buyislehacks.net.`,
    },
  ]
  for (let i = 0; i < count; i++) {
    replies.push({
      author: MEMBER_NAMES[(h + i) % MEMBER_NAMES.length],
      role: 'member',
      date: `2026-03-${String(13 + (i % 12)).padStart(2, '0')}`,
      body: MEMBER_LINES[(h + i) % MEMBER_LINES.length],
    })
  }
  if (count > 2) {
    replies.push({
      author: 'Forum Moderator',
      role: 'moderator',
      date: '2026-03-20',
      body: `@${MEMBER_NAMES[h % MEMBER_NAMES.length]} — read OP links, verify [status](/status), then retry. Order issues go to [support](/support).`,
      replyToAuthor: MEMBER_NAMES[h % MEMBER_NAMES.length],
    })
  }
  return replies
}

const FORUMS = FORUM_DEFS.map(buildForum)
const repliesObj = Object.fromEntries(FORUMS.map((p) => [p.slug, repliesForSlug(p)]))
const forumIndex = FORUMS.map((p) => ({
  slug: p.slug,
  title: p.title,
  excerpt: p.excerpt,
  tag: p.tag,
  community: p.community,
  author: p.author,
  score: p.score,
  commentCount: repliesObj[p.slug]?.length ?? 0,
}))

const forumsTs = `/** Auto-generated by scripts/generate-isle-forums.mjs */
export type ForumSection = {
  heading: string
  body: string[]
}

export type ForumThread = {
  slug: string
  title: string
  excerpt: string
  metaTitle: string
  metaDescription: string
  searchTerms: string
  date: string
  readMinutes: number
  tag: string
  community: string
  author: string
  score: number
  sections: ForumSection[]
  howTo?: boolean
}

export const FORUM_THREADS: ForumThread[] = ${JSON.stringify(FORUMS, null, 2)}

export function getForumThread(slug: string) {
  return FORUM_THREADS.find((f) => f.slug === slug)
}

export function getRelatedForumThreads(slug: string, limit = 6) {
  const current = getForumThread(slug)
  if (!current) return []
  return FORUM_THREADS.filter((f) => f.slug !== slug)
    .sort((a, b) => {
      const tagRank = (p) => (p.tag === current.tag ? 0 : 1)
      return tagRank(a) - tagRank(b) || a.title.localeCompare(b.title)
    })
    .slice(0, limit)
}

export { forumPath } from './blog-paths'
`

const indexTs = `/** Auto-generated — forum list for Reddit-style UI */
export type ForumIndexEntry = {
  slug: string
  title: string
  excerpt: string
  tag: string
  community: string
  author: string
  score: number
  commentCount: number
}

export const FORUM_INDEX: ForumIndexEntry[] = ${JSON.stringify(forumIndex, null, 2)}

export const FORUM_MODERATORS = [
  { name: 'IsleHacksMod', flair: 'Staff' },
  { name: 'Forum Moderator', flair: 'Mod' },
  { name: '${PRIMARY_KW} Editor', flair: 'Editor' },
] as const
`

const repliesTs = `/** Auto-generated by scripts/generate-isle-forums.mjs */
export type ForumReplyRole = 'editor' | 'moderator' | 'member'

export type ForumReply = {
  author: string
  date: string
  body: string
  role?: ForumReplyRole
  replyToAuthor?: string
}

export const FORUM_REPLIES: Record<string, ForumReply[]> = ${JSON.stringify(repliesObj, null, 2)}

export function getForumReplies(slug: string) {
  return FORUM_REPLIES[slug] ?? []
}
`

writeFileSync(join(root, 'src', 'data', 'forums.ts'), forumsTs, 'utf8')
writeFileSync(join(root, 'src', 'data', 'forum-index.ts'), indexTs, 'utf8')
writeFileSync(join(root, 'src', 'data', 'forum-replies.ts'), repliesTs, 'utf8')

console.log(`Generated ${FORUMS.length} forum threads for ${PRIMARY_KW} (${HOST})`)
