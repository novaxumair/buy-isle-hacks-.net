export type GameStatus = 'Active' | 'Updating' | 'Use with caution'

export type Game = {
  slug: string
  name: string
  status: GameStatus
  popular?: boolean
}

/** Site is The Isle cheats only — no other titles. */
export const GAMES: Game[] = [
  { slug: 'the-isle', name: 'The Isle', status: 'Active', popular: true },
]

export function getGame(slug: string) {
  return GAMES.find((g) => g.slug === slug)
}

export function guidePath(slug: string) {
  return `/${slug.toLowerCase()}-cheats`
}

export function parseGuideSlug(param: string) {
  const lower = param.toLowerCase()
  return lower.endsWith('-cheats') ? lower.slice(0, -7) : lower
}

export const PRODUCT_FEATURE_GROUPS = [
  {
    name: 'Visual Options',
    items: [
      'Player ESP',
      'NPC ESP',
      'Animal ESP',
      'Box',
      'Snapline',
      'Name',
      'Distance',
      'Corpse',
      'Health',
      'Stamina',
      'Growth',
      'Species',
      'Player Direction',
      'Head Dot',
      'Visible Check',
      'Gore',
      'Fruit',
      'Water',
      'Max Distance',
    ],
  },
  {
    name: 'Misc Options',
    items: [
      'Crosshair',
      'Suicide',
      'Fullbright',
      'Show FPS',
      'Show Resolution',
      'Show Time',
      'Custom Menu Key',
      'Custom Panic Key',
      'Custom ESP Colors',
    ],
  },
] as const

export const GUIDE_FEATURES = [
  {
    name: 'Player & world ESP',
    text: 'Player, NPC, and animal ESP with box, snapline, name, distance, species, and visible checks so you read threats and resources before committing.',
  },
  {
    name: 'Survival stats',
    text: 'Health, stamina, growth, corpse tracking, gore, fruit, and water overlays keep Isle Evrima survival pacing visible without tabbing menus.',
  },
  {
    name: 'Readable overlays',
    text: 'Head dot, player direction, max distance tuning, and custom ESP colors keep clutter low on dense servers.',
  },
  {
    name: 'Misc utilities',
    text: 'Crosshair, fullbright, FPS and resolution readouts, custom menu and panic keys, and optional suicide for quick respawn testing in private sessions.',
  },
  {
    name: 'Evrima on Windows PC',
    text: 'Built for The Isle on Windows 10 and 11 when loader status is Active. Easy Anti-Cheat (EAC) compatibility is tracked on our status page and forums.',
  },
] as const

/** @deprecated use PRODUCT_PAGE_FAQS from faqs.ts — kept as alias */
export { PRODUCT_PAGE_FAQS as PRODUCT_FAQS } from './faqs'
