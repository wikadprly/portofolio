import { Eyebrow } from '@/components/Eyebrow'
import { Title } from '@/components/Title'

export function PageHeader({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <header className="page-header container">
      <Eyebrow>{eyebrow}</Eyebrow>
      <Title as="h1">{title}</Title>
      <p>{text}</p>
    </header>
  )
}
