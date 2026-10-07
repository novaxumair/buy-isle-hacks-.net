export const SUPPORT_INTRO =
  'Support for The Isle Hacks buyers on buyislehacks.net — help with loader setup, Active status, player and animal ESP config, growth and stamina overlays, and delivery after purchase.'

export const SUPPORT_HIGHLIGHTS = [
  {
    title: 'Loader & menu',
    text: 'Menu not opening, inject failures, and overlay conflicts — we walk through exclusions and load order on Windows PC.',
  },
  {
    title: 'Patch windows',
    text: 'The Isle and EAC updates can invalidate yesterday’s build. Status honesty matters more than rushing into a public server.',
  },
  {
    title: 'Delivery',
    text: 'Digital licenses arrive via checkout email. Use only the official delivery link from your order.',
  },
] as const

export const SUPPORT_FAQ = [
  {
    q: 'What do you support?',
    a: 'Supported: The Isle on Windows PC (Evrima), loader and menu help for paid licenses.',
  },
  {
    q: 'How do I contact support?',
    a: 'Use Discord and contact options linked after purchase. Include a status screenshot (Active / Updating) and whether you need load, menu, or delivery help.',
  },
  {
    q: 'Loader fails after exclusions',
    a: 'Do not spam launch. Restart The Isle, confirm antivirus exclusions, re-check status, then try one clean load. If it still fails, contact support with your order ID.',
  },
  {
    q: 'Which clients are supported?',
    a: 'Isle Evrima on Windows when loader status is Active.',
  },
  {
    q: 'Delivery safety',
    a: 'Delivery is digital after checkout on buyislehacks.net. Use only that loader link. Third-party mirrors are unsupported and unsafe.',
  },
] as const

export const SUPPORT_TOPICS = SUPPORT_HIGHLIGHTS.map(({ title, text }) => ({
  heading: title,
  body: [text],
}))

export const SUPPORT_FAQS = [...SUPPORT_FAQ]
