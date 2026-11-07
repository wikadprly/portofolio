import type { ReactNode } from 'react'
import { Eyebrow } from '@/components/Eyebrow'
import { Title } from '@/components/Title'

export function SectionHeading({ eyebrow, title, text, action }: { eyebrow: string; title: string; text?: string; action?: ReactNode }) {
  return (
    <div className="section-heading" data-reveal>
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <Title>{title}</Title>
        {text && <p>{text}</p>}
      </div>
      {action}
    </div>
  )
}
