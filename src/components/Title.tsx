import type { ReactNode } from 'react'

export function Title({ as = 'h2', children, className = '' }: { as?: 'h1' | 'h2' | 'h3' | 'h4'; children: ReactNode; className?: string }) {
  const Tag = as
  return <Tag className={className}>{children}</Tag>
}
