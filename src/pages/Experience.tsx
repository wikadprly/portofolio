import { experience } from '@/data/experience'
import { Eyebrow } from '@/components/Eyebrow'
import { Icon } from '@/components/Icon'
import { PageHeader } from '@/components/PageHeader'
import { Title } from '@/components/Title'

export function Experience() {
  return (
    <>
      <PageHeader eyebrow="Pengalaman" title="Pengalaman organisasi dan kepanitiaan" text="Peran yang melatih komunikasi, perencanaan, koordinasi tim, dan tanggung jawab dalam lingkungan kampus." />
      <section className="container timeline-section">
        <div className="timeline-intro"><Eyebrow>Perjalanan kepemimpinan</Eyebrow><Title>Hadir, berkontribusi, dan bertumbuh.</Title><p>Setiap peran memberi saya pelajaran berbeda tentang manusia, perencanaan, dan tanggung jawab bersama.</p></div>
        <div className="timeline">
          {experience.map((item, i) => (
            <article key={`${item.role}-${item.period}`}>
              <div className="timeline-dot"><span>{String(i + 1).padStart(2, '0')}</span></div>
              <div className="timeline-content">
                <span className="meta"><Icon name="calendar" size={15} />{item.period}</span>
                <Title as="h2">{item.role}</Title><strong>{item.org}</strong><p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
