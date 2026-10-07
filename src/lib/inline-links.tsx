import type { ReactNode } from 'react'

const LINK_RE = /\[([^\]]+)\]\(([^)]+)\)/g

/** Renders `[label](/path)` and `[label](https://…)` inside blog paragraphs. */
export function inlineMarkdownLinks(text: string): ReactNode[] {
  const nodes: ReactNode[] = []
  let last = 0
  let key = 0
  for (const match of text.matchAll(LINK_RE)) {
    const index = match.index ?? 0
    if (index > last) nodes.push(text.slice(last, index))
    const href = match[2]
    const external = href.startsWith('http')
    nodes.push(
      <a
        key={key++}
        href={href}
        className="text-white/80 underline-offset-2 hover:text-white hover:underline"
        {...(external ? { rel: 'nofollow noopener noreferrer', target: '_blank' } : {})}
      >
        {match[1]}
      </a>,
    )
    last = index + match[0].length
  }
  if (last < text.length) nodes.push(text.slice(last))
  return nodes.length ? nodes : [text]
}
