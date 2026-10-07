/**
 * First-party The Isle Hacks media paths and page SEO fields.
 */

export const ISLE_HERO = '/media/isle-hero-full.webp'
export const ISLE_COVER = '/media/isle-cover.webp'
export const ISLE_IGN_COVER = '/media/isle-ign-cover.webp'
export const ISLE_GAME_COVER = ISLE_IGN_COVER
export const ISLE_MENU = '/media/isle-menu.webp'
export const ISLE_VIDEO_THUMB = '/media/isle-video-thumb.jpg'

export const ISLE_HOME_VIDEO = {
  src: '/videos/hero.webm',
  poster: ISLE_VIDEO_THUMB,
  title: 'The Isle cheats gameplay preview with player ESP, growth, and stamina overlays',
  caption:
    'Preview of The Isle player and animal ESP, growth and stamina readouts, and survival overlays on Windows PC.',
} as const

export function shot(n: number) {
  return `/media/isle-screenshot-${n}.webp`
}

/** Stable gameplay thumb per blog slug (screenshots 1–10). */
export function articleThumbnail(slug: string) {
  let h = 0
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) >>> 0
  return shot(1 + (h % 10))
}

export const GALLERY_SHOTS = [
  { src: shot(1), alt: 'The Isle server crasher status report overlay on Evrima' },
  { src: shot(2), alt: 'The Isle flyhack movement feature in live gameplay' },
  { src: shot(3), alt: 'The Isle corpse teleport pulling food to your dinosaur' },
  { src: shot(4), alt: 'The Isle corpse teleport range circle during night hunt' },
  { src: shot(5), alt: 'The Isle movement features with ESP and FOV ring' },
  { src: shot(6), alt: 'The Isle dino visuals ESP highlighting animals in jungle' },
  { src: shot(7), alt: 'The Isle free camera scouting players through foliage' },
  { src: shot(8), alt: 'The Isle free camera with deer ESP distance labels' },
  { src: shot(9), alt: 'The Isle movement features ESP on carnivore pathing' },
  { src: shot(10), alt: 'The Isle dino visuals wireframe ESP at range' },
] as const

/** Product page marquee gallery */
export const PRODUCT_PREVIEW_GALLERY = GALLERY_SHOTS

export const PAGE_MEDIA = {
  home: {
    image: ISLE_HERO,
    alt: 'The Isle cheats gameplay with player ESP and survival stat overlays',
    title: 'The Isle Hacks',
    caption: 'Player ESP, growth, stamina, and resource intel for The Isle on PC.',
  },
  product: {
    image: ISLE_COVER,
    video: ISLE_HOME_VIDEO.src,
    alt: 'The Isle Hacks store — ESP, growth, and stamina in live Evrima sessions',
    title: 'The Isle Store',
    caption: 'Full module list and plans for The Isle on Windows PC.',
    videoTitle: ISLE_HOME_VIDEO.title,
    videoDescription: ISLE_HOME_VIDEO.caption,
  },
  forums: {
    image: shot(4),
    alt: 'The Isle ESP gameplay screenshot from community forums',
    title: 'The Isle Forums',
    caption: 'EAC safety, setup, ESP configs, and loader help.',
  },
  reviews: {
    image: shot(2),
    alt: 'The Isle cheats review screenshot with ESP overlays',
    title: 'The Isle Hacks Reviews',
    caption: 'Buyer feedback on ESP clarity, growth trackers, and loader stability.',
  },
  faq: {
    image: shot(8),
    alt: 'The Isle player ESP overlay screenshot for FAQ',
    title: 'The Isle FAQ',
    caption: 'Compatibility, pricing, EAC notes, and setup answers.',
  },
  support: {
    image: shot(6),
    alt: 'The Isle cheat support screenshot with menu HUD',
    title: 'The Isle Support',
    caption: 'Delivery, loader errors, and configuration help.',
  },
} as const

export function getForumMedia(slug: string) {
  let h = 0
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) >>> 0
  const n = 1 + (h % 10)
  const title = slug.replace(/-/g, ' ')
  return {
    image: shot(n),
    alt: `The Isle cheats guide — ${title} gameplay screenshot`,
    title: `The Isle Hacks — ${title}`,
    caption: `Forum thread imagery for ${title} on buyislehacks.net.`,
  }
}
