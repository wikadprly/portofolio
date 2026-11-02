import { experience } from '@/data/experience'
import { Eyebrow } from '@/components/Eyebrow'
import { Icon } from '@/components/Icon'
import { PageHeader } from '@/components/PageHeader'
import { Title } from '@/components/Title'

export function Experience() {
  return (
    <>
      <PageHeader eyebrow="Pengalaman" title="Belajar di luar ruang kelas." text="Pengalaman organisasi dan kepanitiaan yang membentuk cara saya berkomunikasi, berkolaborasi, dan bertanggung jawab." number="03" />
      <section className="container timeline-section">
        <div className="timeline-intro"><Eyebrow>Perjalanan kepemimpinan</Eyebrow><Title>Hadir, berkontribusi, dan bertumbuh.</Title><p>Setiap peran memberi saya pelajaran berbeda tentang manusia, perencanaan, dan tanggung jawab bersama.</p></div>
        <div className="timeline">
          {experience.map((item, i) => (
            <article key={`${item.role}-${item.period}`}>
              <div className="timeline-dot"><span>{String(i + 1).padStart(2, '0')}</span></div>
              <div className="timeline-content">
                <span className="meta"><Icon name="calendar" size={15} />{item.period}</span>
                <Title as="h2">{item.role}</Title><strong>{item.org}</strong><p>{item.text}</p>
                <div className="doc-placeholder"><Icon name="briefcase" /><span>Tempat foto dokumentasi</span></div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
