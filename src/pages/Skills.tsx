import { skillGroups } from '@/data/skills'
import { Icon } from '@/components/Icon'
import { PageHeader } from '@/components/PageHeader'
import { Title } from '@/components/Title'

export function Skills() {
  return (
    <>
      <PageHeader eyebrow="Keahlian" title="Keahlian dan teknologi" text="Kemampuan teknis dan nonteknis yang saya kembangkan melalui perkuliahan, proyek, dan pengalaman organisasi." />
      <section className="container skills-page-grid">
        {skillGroups.map((group, i) => (
          <article key={group.title}>
            <div className="skill-card-head"><span>0{i + 1}</span><Icon name={group.icon} size={22} /></div>
            <Title as="h2">{group.title}</Title>
            <div className="large-tags">{group.items.map(item => <span key={item}>{item}</span>)}</div>
          </article>
        ))}
      </section>
      <section className="container skill-note"><span>Pendekatan saya</span><Title>Teknologi berubah, kebiasaan belajar tetap tumbuh.</Title><p>Saya berfokus pada pemahaman dasar, memilih teknologi dengan tepat, dan selalu terbuka pada cara yang lebih baik untuk menyelesaikan masalah.</p></section>
    </>
  )
}
