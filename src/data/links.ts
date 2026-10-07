import { articlePath, forumPath } from './blog-paths'

/** Official The Isle destinations for factual game context. */
export const OFFICIAL_GAME_LINKS = [
  {
    label: 'The Isle on Steam',
    href: 'https://store.steampowered.com/app/376210/The_Isle/',
    description: 'Official PC store page',
  },
] as const

/** Primary internal routes for crawl equity. */
export const SITE_PAGE_LINKS = [
  { label: 'Home', to: '/', description: 'Overview, blog, forums, and checkout' },
  {
    label: 'Store',
    to: '/the-isle-cheats',
    description: 'Player ESP, growth, stamina, and The Isle plans',
  },
  {
    label: 'Blog',
    to: '/blog',
    description: 'Guides — survival ESP, growth, water, and setup',
  },
  {
    label: 'Forums',
    to: '/forums',
    description: 'Community threads — EAC, setup, ESP, loader help',
  },
  {
    label: 'Reviews',
    to: '/reviews',
    description: 'Buyer reviews and ratings',
  },
  {
    label: 'FAQ',
    to: '/faq',
    description: 'Frequently asked questions',
  },
  {
    label: 'Support',
    to: '/support',
    description: 'Delivery and loader help',
  },
  {
    label: 'Status',
    to: '/status',
    description: 'Loader Active or Updating after The Isle patches',
  },
  {
    label: 'Privacy policy',
    to: '/privacy',
    description: 'Order data and site privacy',
  },
  {
    label: 'Terms of use',
    to: '/terms',
    description: 'License rules and risk disclaimer',
  },
  {
    label: 'Refund policy',
    to: '/refunds',
    description: 'When digital license refunds apply',
  },
] as const

export const SITE_GUIDE_LINKS = [
  { label: 'Features checklist', to: forumPath('features-list') },
  { label: 'Player ESP config', to: forumPath('player-esp-config') },
  { label: 'Survival ESP defaults', to: forumPath('survival-esp-config') },
  { label: 'Complete setup', to: forumPath('complete-setup') },
  { label: 'After a game patch', to: forumPath('game-patch-status') },
  { label: 'Loader errors', to: forumPath('loader-errors') },
  { label: 'Buy safely guide', to: forumPath('buy-the-isle-hacks-safely') },
  { label: 'Lifetime license', to: forumPath('the-isle-hacks-lifetime') },
  { label: 'Daily The isle hacks', to: forumPath('the-isle-hacks-daily') },
  { label: 'The Isle Evrima cheats', to: forumPath('the-isle-evrima-cheats') },
  { label: 'The Isle ESP thread', to: forumPath('the-isle-esp-thread') },
  { label: 'EAC & safety', to: forumPath('eac-anticheat-safety') },
  { label: 'Survival & growth intel', to: articlePath('the-isle-cheats-survival-ecosystem') },
  { label: 'The Isle cheats features', to: articlePath('the-isle-cheats-features') },
  { label: 'Wallhack & player ESP', to: articlePath('the-isle-wallhack-wh-player-esp') },
  { label: 'Evrima water & fruit ESP', to: articlePath('the-isle-evrima-esp-items-water-fruit-corpse') },
  { label: 'Best hacks review 2026', to: articlePath('best-the-isle-hacks-review-2026') },
  { label: 'How to buy in 2026', to: articlePath('how-to-buy-the-isle-cheats-2026') },
  { label: 'Undetected & EAC', to: articlePath('the-isle-undetected-hacks-eac') },
] as const

/** Outbound checkout (all Get / buy CTAs). Plan ids: mon (P30D), lifetime (P99Y). */
export const CHECKOUT_OUTBOUND =
  'https://zadeyo.com/go/UMAIR?to=%2Fproducts%2Fthe-isle-novaxware'

export const CHECKOUT_URL = CHECKOUT_OUTBOUND

export function getCheckoutUrl(_productSlug?: string): string {
  return CHECKOUT_OUTBOUND
}

export const CHECKOUT_REL = 'nofollow noopener noreferrer'
