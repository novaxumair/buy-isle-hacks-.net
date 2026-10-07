import { ISLE_COVER, ISLE_GAME_COVER, ISLE_HERO, ISLE_MENU } from './media'
import { SITE_OG, getOgImageForPath, PAGE_OG } from './og'

export { SITE_OG, getOgImageForPath, PAGE_OG }
export { forumOgImage } from './og'

export const ISLE_PRODUCT_HERO = ISLE_HERO
export const ISLE_PRODUCT_COVER = ISLE_COVER

export type ImageSeoFields = {
  alt: string
  title: string
  caption: string
}

export const IMAGE_SEO: Record<
  string,
  ImageSeoFields & {
    heroAlt: string
    heroTitle: string
    heroCaption: string
  }
> = {
  'the-isle': {
    alt: 'The Isle — official IGN game cover art',
    title: 'The Isle on IGN',
    caption: 'The Isle survival game — store card art from IGN',
    heroAlt: 'The Isle game cover from IGN',
    heroTitle: 'The Isle — IGN',
    heroCaption: 'The Isle on PC — official IGN artwork',
  },
}

type PageImage = ImageSeoFields & { src: string; og: string }

export const PAGE_IMAGES: Record<
  'home' | 'forums' | 'reviews' | 'faq' | 'support' | 'product' | 'blog',
  PageImage
> = {
  home: {
    src: ISLE_HERO,
    og: PAGE_OG.home,
    alt: 'The Isle dino visuals ESP gameplay on Evrima',
    title: 'The Isle Hacks',
    caption: 'Flyhack, corpse teleport, free camera, and ESP previews.',
  },
  blog: {
    src: '/media/isle-screenshot-5.webp',
    og: PAGE_OG.blog,
    alt: 'The Isle movement features screenshot for blog guides',
    title: 'The Isle Hacks Blog',
    caption: 'Console commands, features, and safety articles.',
  },
  forums: {
    src: '/media/isle-screenshot-4.webp',
    og: PAGE_OG.forums,
    alt: 'The Isle corpse teleport screenshot from forums',
    title: 'The Isle Hacks Forums',
    caption: 'Setup, EAC, ESP, and loader threads.',
  },
  reviews: {
    src: '/media/isle-screenshot-2.webp',
    og: PAGE_OG.reviews,
    alt: 'The Isle flyhack review screenshot',
    title: 'The Isle Hacks Reviews',
    caption: 'Buyer feedback on ESP, movement, and loader stability.',
  },
  faq: {
    src: '/media/isle-screenshot-8.webp',
    og: PAGE_OG.faq,
    alt: 'The Isle free camera ESP screenshot for FAQ',
    title: 'The Isle Hacks FAQ',
    caption: 'Pricing, features, and setup answers.',
  },
  support: {
    src: '/media/isle-screenshot-6.webp',
    og: PAGE_OG.support,
    alt: 'The Isle dino visuals support screenshot',
    title: 'The Isle Hacks Support',
    caption: 'Delivery and loader help.',
  },
  product: {
    src: ISLE_GAME_COVER,
    og: PAGE_OG.product,
    alt: 'The Isle dino visuals ESP — The Isle Hacks store',
    title: 'The Isle Hacks Store',
    caption: 'Server tools, flyhack, corpse teleport, and ESP modules.',
  },
}

export function getGameImage(_slug: string): string {
  return ISLE_GAME_COVER
}

export function getProductHeroImage(_slug: string): string {
  return ISLE_GAME_COVER
}

export function getOgImage(path?: string): string {
  return getOgImageForPath(path)
}

export function getPageImage(key: keyof typeof PAGE_IMAGES) {
  return PAGE_IMAGES[key]
}

export function getImageAlt(
  slug: string,
  name: string,
  variant: 'catalog' | 'product' = 'catalog',
): string {
  const seo = IMAGE_SEO[slug]
  if (seo) return variant === 'product' ? seo.heroAlt : seo.alt
  return variant === 'product' ? `${name} product details` : `${name} product artwork`
}

export function getImageTitle(
  slug: string,
  name: string,
  variant: 'catalog' | 'product' = 'catalog',
): string {
  const seo = IMAGE_SEO[slug]
  if (seo) return variant === 'product' ? seo.heroTitle : seo.title
  return `${name} product`
}

/** @deprecated unused menu asset — kept for legacy imports */
export const ISLE_MENU_ASSET = ISLE_MENU
