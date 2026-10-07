import { SITE_OG } from './images'
import { PAGE_OG } from './og'

export const SITE_URL = 'https://buyislehacks.net'
export const SITE_NAME = 'The Isle Hacks'
export const SITE_HOST = 'buyislehacks.net'

/** Stable site identity — Organization, WebSite, and about copy (not per-route). */
export const SITE_PURPOSE =
  'The Isle Hacks is a single-game site focused on The Isle and Isle Evrima survival ESP, growth and stamina tracking, and related Windows PC tools. The site is dedicated to The Isle only and does not sell cheats for other games.'

/** Site-wide subject terms for schema knowsAbout (max 6). */
export const SITE_ABOUT = [
  'The isle cheats',
  'The Isle',
  'Isle Evrima cheats',
  'The Isle ESP',
  'Easy Anti-Cheat',
  'The Isle cheat setup',
] as const

/** Legitimate brand variants only — not a meta keyword list. */
export const ORGANIZATION_ALTERNATE_NAMES = [
  'The Isle Hacks',
  'The isle cheats',
  'buyislehacks',
  'buyislehacks.net',
] as const

/**
 * Short intent-specific terms per main route (3–6 each). Not rendered as meta keywords.
 */
export const SEO_ROUTE_INTENTS = {
  home: ['the isle cheats', 'The Isle ESP', 'Isle Evrima cheats', 'The Isle hacks'],
  product: ['the isle cheats', 'The Isle store', 'The Isle features', 'The Isle setup'],
  featuresHub: ['The Isle cheat features', 'player ESP', 'animal ESP', 'growth tracker'],
  reviews: ['The Isle Hacks reviews', 'The Isle buyer feedback'],
  blog: [
    'the isle cheats',
    'the isle wallhack',
    'the isle esp',
    'the isle aimbot',
    'the isle undetected hacks',
    'isle evrima cheats',
  ],
  forums: [
    'The isle hacks',
    'the isle cheats',
    'the isle esp',
    'the isle evrima cheats',
    'the isle wallhack',
    'the isle eac',
  ],
  faq: ['The Isle Hacks FAQ', 'The Isle setup questions'],
} as const

/** Product JSON-LD description (features + delivery — distinct from SITE_PURPOSE). */
export const PRODUCT_SCHEMA_DESCRIPTION =
  'Windows PC menu for The Isle with player, NPC, and animal ESP, growth and stamina readouts, corpse and resource overlays, fullbright and crosshair utilities, and digital license delivery.'

/** Offer price shown on product schema + purchase UI (lowest plan). */
export const PRODUCT_PRICE_USD = '35'

export const PRODUCT_LIFETIME_PRICE_USD = '150'

export const SEO_REGIONS = [
  { hreflang: 'en', label: 'English' },
  { hreflang: 'x-default', label: 'English' },
] as const

export const OG_IMAGE = SITE_OG

export type PageSeo = {
  title: string
  description: string
  path: string
  ogType?: 'website' | 'article' | 'product'
  image?: string
  imageAlt?: string
  robots?: string
}

const INDEX_ROBOTS =
  'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'

export const SEO = {
  home: {
    title: 'The Isle Hacks | ESP, Growth & Stamina Cheats',
    description:
      'Buy The Isle hacks and Isle Evrima cheats on Windows PC. Player, NPC & animal ESP, growth, stamina, health, and gore with live status. Monthly $35 or lifetime $150.',
    path: '/',
    ogType: 'website',
    image: PAGE_OG.home,
    imageAlt: 'The Isle cheats gameplay with player ESP, growth, and stamina overlays on PC',
    robots: INDEX_ROBOTS,
  },
  blog: {
    title: 'The Isle Intel | The isle hacks guides',
    description:
      'The isle hacks intel on buyislehacks.net — wallhack WH, Evrima ESP, aimbot keywords, undetected EAC notes, growth and stamina, and how to buy The Isle cheats.',
    path: '/blog',
    ogType: 'website',
    image: PAGE_OG.blog,
    imageAlt: 'The Isle intel blog guides and survival ESP articles',
    robots: INDEX_ROBOTS,
  },
  forums: {
    title: 'The Isle Hacks Forums | The isle hacks threads',
    description:
      'The isle hacks forums on buyislehacks.net — Evrima ESP, infinite stamina myths, Steam loader setup, wallhack WH, EAC safety, crashes, offsets policy, and patch-day status.',
    path: '/forums',
    ogType: 'website',
    image: PAGE_OG.forums,
    imageAlt: 'The Isle cheats community forum threads',
    robots: INDEX_ROBOTS,
  },
  reviews: {
    title: 'The Isle Hacks Reviews | Buyer Feedback',
    description:
      'Read The Isle hacks reviews from buyers covering player ESP, growth, stamina, animal ESP, and status before you pick monthly or lifetime.',
    path: '/reviews',
    ogType: 'website',
    image: PAGE_OG.reviews,
    imageAlt: 'The Isle cheats review screenshot with ESP overlays',
    robots: INDEX_ROBOTS,
  },
  faq: {
    title: 'The Isle FAQ | The Isle Hacks',
    description:
      'FAQ for The Isle hacks on Windows PC — $35 monthly and $150 lifetime, ESP and survival features, status, setup, and Discord support for Isle Evrima.',
    path: '/faq',
    ogType: 'website',
    image: PAGE_OG.faq,
    imageAlt: 'The Isle player ESP overlay screenshot from FAQ',
    robots: INDEX_ROBOTS,
  },
  support: {
    title: 'The Isle Support | The Isle Hacks',
    description:
      'Get support for The Isle hacks on Discord — loader setup, instant delivery, menu configuration, and anti-cheat status help after you purchase.',
    path: '/support',
    ogType: 'website',
    image: PAGE_OG.support,
    imageAlt: 'The Isle cheat support and loader help',
    robots: INDEX_ROBOTS,
  },
  product: {
    title: 'The Isle Store | The Isle Hacks',
    description:
      'The Isle store for The Isle hacks and Isle Evrima cheats. Monthly access is $35 and lifetime is $150, featuring survival ESP, stat trackers, and instant delivery.',
    path: '/the-isle-cheats',
    ogType: 'product',
    image: PAGE_OG.product,
    imageAlt: 'The Isle store page showing player ESP, growth, and stamina modules',
    robots: INDEX_ROBOTS,
  },
  features: {
    title: 'The Isle Features | The Isle Hacks',
    description:
      'The Isle features for The Isle hacks — player ESP, NPC ESP, animal ESP, growth, stamina, species, health, corpse tracking, water, fruit, and fullbright on Windows PC.',
    path: '/forums/features-list',
    ogType: 'article',
    image: PAGE_OG.forums,
    imageAlt: 'The Isle cheat feature list with ESP and survival modules',
    robots: INDEX_ROBOTS,
  },
  setup: {
    title: 'The Isle Setup | The Isle Hacks',
    description:
      'Learn how to set up The Isle hacks, which custom panic and menu keys matter, and what to check before loading your Isle Evrima cheats on Windows PC.',
    path: '/forums/complete-setup',
    ogType: 'article',
    image: PAGE_OG.forums,
    imageAlt: 'The Isle cheat setup guide on Windows PC',
    robots: INDEX_ROBOTS,
  },
  status: {
    title: 'The Isle Status | The Isle Hacks',
    description:
      'The Isle cheat status and security updates for The Isle hacks. Read clear versus updating status after game patches and anti-cheat updates before you load.',
    path: '/status',
    ogType: 'website',
    image: PAGE_OG.status,
    imageAlt: 'The Isle Hacks loader status — Active or Updating',
    robots: INDEX_ROBOTS,
  },
  preview: {
    title: 'The Isle Preview | The Isle Hacks',
    description:
      'Preview player ESP, animal ESP, growth, stamina, and crosshair overlays for The Isle. See how The Isle hacks group survival visuals before you checkout.',
    path: '/the-isle-cheats',
    ogType: 'website',
    image: PAGE_OG.product,
    imageAlt: 'The Isle cheats preview with ESP and survival overlays',
    robots: INDEX_ROBOTS,
  },
} as const satisfies Record<string, PageSeo>

export const HOME_HEADINGS = {
  h1: 'The Isle Hacks',
  h2Features: 'The Isle Cheats Features',
  h2HowItWorks: 'How The Isle Hacks Work',
  h2Reviews: 'The Isle Hacks Reviews',
  h2Blog: 'The Isle Intel',
  h2Forums: 'Community Forums',
  h2Faq: 'The Isle Hacks FAQ',
  h2Access: 'Ready when you are',
} as const

export function absoluteUrl(path: string) {
  if (!path || path === '/') return `${SITE_URL}/`
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}
