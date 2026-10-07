import { useMemo, useState } from 'react'
import { getGameImage, getImageAlt, getImageTitle, getProductHeroImage } from '../data/images'
import { ISLE_IGN_COVER } from '../data/media'

type GameCoverProps = {
  slug: string
  name: string
  className?: string
  aspect?: 'video' | 'square' | 'hero'
  /** Fill parent (parent must set size / aspect) */
  fill?: boolean
  /** Product page: use interior art and show full color */
  variant?: 'catalog' | 'product'
  /** Above-the-fold hero — eager load + high fetch priority */
  priority?: boolean
}

function candidatesFor(url: string): string[] {
  const out: string[] = []
  const push = (u: string) => {
    if (u && !out.includes(u)) out.push(u)
  }
  push(url)
  const bare = url.split('?')[0]
  if (bare !== url) push(bare)
  return out
}

export function GameCover({
  slug,
  name,
  className = '',
  aspect = 'video',
  fill = false,
  variant = 'catalog',
  priority = false,
}: GameCoverProps) {
  const sources = useMemo(() => {
    const primary =
      variant === 'product' ? getProductHeroImage(slug) : getGameImage(slug)
    const list = candidatesFor(primary)
    if (variant === 'product') {
      for (const extra of [ISLE_IGN_COVER, '/brand/isle-ign-cover.jpg']) {
        for (const u of candidatesFor(extra)) {
          if (!list.includes(u)) list.push(u)
        }
      }
    }
    return list
  }, [slug, variant])
  const [index, setIndex] = useState(0)
  const [failed, setFailed] = useState(false)

  const src = sources[index]
  const ratio = fill
    ? 'h-full w-full'
    : aspect === 'square'
      ? 'aspect-square'
      : aspect === 'hero'
        ? 'aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9]'
        : 'aspect-[16/10]'

  const eager = priority || variant === 'product'

  return (
    <div className={`relative overflow-hidden bg-z-elevated ${ratio} ${className}`}>
      {!failed && src ? (
        <img
          key={src}
          src={src}
          alt={getImageAlt(slug, name, variant)}
          title={getImageTitle(slug, name, variant)}
          width={variant === 'product' ? 1440 : 1000}
          height={variant === 'product' ? 810 : 1000}
          loading={eager ? 'eager' : 'lazy'}
          decoding={eager ? 'sync' : 'async'}
          fetchPriority={eager ? 'high' : 'auto'}
          sizes={
            aspect === 'hero' || variant === 'product'
              ? '100vw'
              : fill
                ? '(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw'
                : '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
          }
          onError={() => {
            if (index + 1 < sources.length) setIndex((i) => i + 1)
            else setFailed(true)
          }}
          className={`game-cover-img absolute inset-0 h-full w-full object-cover object-center${variant === 'product' ? ' game-cover-img--color' : ''}`}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-z-elevated">
          <span className="px-3 text-center text-sm font-semibold tracking-tight text-white/25">
            {name}
          </span>
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/5" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/15" />
    </div>
  )
}
