import { skillGroups } from '@/data/skills'
import { Icon } from '@/components/Icon'
import { PageHeader } from '@/components/PageHeader'
import { Title } from '@/components/Title'

export function Skills() {
  return (
    <>
      <PageHeader eyebrow="Keahlian" title="Keahlian dan teknologi" text="Yang saya pakai sehari-hari untuk kuliah dan proyek, plus beberapa hal yang sedang saya pelajari." />
      <section className="container skills-page-grid">
        {skillGroups.map((group, i) => (
          <article key={group.title}>
            <div className="skill-card-head"><span>0{i + 1}</span><Icon name={group.icon} size={22} /></div>
            <Title as="h2">{group.title}</Title>
            <div className="large-tags">{group.items.map(item => <span key={item}>{item}</span>)}</div>
          </article>
        ))}
      </section>
      <section className="container skill-note"><span>Pendekatan saya</span><Title>Alat baru mudah dipelajari; memilih yang tepat yang sulit.</Title><p>Saya berusaha memahami dasarnya dulu, lalu memilih alat sesuai kebutuhan. Kalau ada cara yang lebih sederhana, saya lebih suka itu.</p></section>
    </>
  )
}
