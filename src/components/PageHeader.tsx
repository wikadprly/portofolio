import { Eyebrow } from '@/components/Eyebrow'
import { Title } from '@/components/Title'

export function PageHeader({ eyebrow, title, text, number }: { eyebrow: string; title: string; text: string; number: string }) {
  return (
    <header className="page-header container">
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <Title as="h1">{title}</Title>
        <p>{text}</p>
      </div>
      <span className="page-number">{number}</span>
    </header>
  )
}
