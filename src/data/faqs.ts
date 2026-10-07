export type FaqItem = { q: string; a: string }

export const HOME_FAQS: FaqItem[] = [
  {
    q: 'What are The Isle cheats?',
    a: 'The Isle cheats on buyislehacks.net are Windows PC tools with player, NPC, and animal ESP, growth and stamina readouts, corpse and resource overlays, fullbright, and custom menu keys — with Active or Updating loader status after EAC and game patches.',
  },
  {
    q: 'How much do The Isle cheats cost?',
    a: 'The Isle cheats start at $35 for monthly access (30 days, plan id mon). Lifetime access is $150 (plan id lifetime). Confirm Active status and pricing on buyislehacks.net before checkout.',
  },
  {
    q: 'Do you sell tools for other games?',
    a: 'No. buyislehacks.net covers The Isle only — one product, no multi-game catalog.',
  },
  {
    q: 'Is full map vision included?',
    a: 'The Isle hacks focus on survival ESP — players, animals, corpses, water, fruit, and stat trackers. Tune max distance and visible checks so overlays stay readable on busy Evrima servers.',
  },
  {
    q: 'How do you handle game patches?',
    a: 'We publish Active or Updating labels after The Isle updates. Easy Anti-Cheat (EAC) and game builds change — always check status on buyislehacks.net before you load.',
  },
  {
    q: 'What is player ESP?',
    a: 'Player ESP shows other survivors with box, snapline, name, distance, species, health, stamina, growth, and direction intel so you can read threats before engagements.',
  },
]

export const PRODUCT_PAGE_FAQS: FaqItem[] = [
  ...HOME_FAQS,
  {
    q: 'Which features are included?',
    a: 'Visual options include player, NPC, and animal ESP, box, snapline, name, distance, corpse, health, stamina, growth, species, player direction, head dot, visible check, gore, fruit, water, and max distance. Misc options include crosshair, suicide, fullbright, show FPS, show resolution, show time, custom menu key, custom panic key, and custom ESP colors on Windows PC.',
  },
  {
    q: 'Do The Isle cheats work on Evrima?',
    a: 'Yes. The loader targets Isle Evrima on Windows PC when status is Active.',
  },
  {
    q: 'How do I get access?',
    a: 'Start on the homepage, review features and Active status, open The Isle store page, then continue to checkout for instant digital delivery.',
  },
  {
    q: 'How do I load The Isle cheats?',
    a: 'Follow the complete setup forum thread: exclusions, launch The Isle, run the loader, configure player ESP and stat overlays, save a profile. Re-check status after every patch.',
  },
  {
    q: 'Where do I get support?',
    a: 'Use the Support page and Discord channels linked after purchase. Include current status and whether you need load, menu, or delivery help.',
  },
  {
    q: 'Where can I read reviews?',
    a: 'Visit the Reviews page for buyer feedback on ESP clarity, growth and stamina trackers, and loader updates.',
  },
  {
    q: 'Is this the official The Isle site?',
    a: 'No. We cover third-party software for The Isle only. Buy and play the game from the official Steam page. We are not affiliated with the game developer.',
  },
]

export const FAQ_PAGE_FAQS: FaqItem[] = PRODUCT_PAGE_FAQS

export const SITE_FAQS = FAQ_PAGE_FAQS
