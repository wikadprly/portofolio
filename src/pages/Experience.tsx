import type { ExperienceItem } from '@/types'
import { organizationalExperience, workExperience } from '@/data/experience'
import { Eyebrow } from '@/components/Eyebrow'
import { Icon } from '@/components/Icon'
import { PageHeader } from '@/components/PageHeader'
import { Title } from '@/components/Title'

const groups: Array<{ label: string; items: ExperienceItem[] }> = [
  { label: 'Pekerjaan & magang', items: workExperience },
  { label: 'Organisasi & kepanitiaan', items: organizationalExperience },
].filter((group) => group.items.length > 0)

export function Experience() {
  return (
    <>
      <PageHeader
        eyebrow="Organisasi & pengalaman"
        title="Pengalaman di luar perkuliahan."
        text="Pengalaman kerja, organisasi, dan kepanitiaan selama berkuliah di Politeknik Negeri Semarang, diurutkan dari yang paling baru."
      />
      <section className="container timeline-section">
        <div className="timeline-intro">
          <Eyebrow>Di luar kelas</Eyebrow>
          <Title>Belajar melalui pengalaman dan kolaborasi.</Title>
          <p>Peran yang berbeda memberi pelajaran berbeda. Yang paling sering muncul: cara membagi pekerjaan, menjaga komunikasi, dan menyelesaikan hal yang sudah jadi tanggung jawab.</p>
        </div>
        <div className="timeline-groups">
          {groups.map((group) => (
            <div className="timeline-group" key={group.label}>
              <div className="timeline-group-head">
                <span>{group.label}</span>
                <small>{group.items.length} entri</small>
              </div>
              <div className="timeline">
                {group.items.map((item, i) => (
                  <article key={`${item.role}-${item.period}`} data-reveal>
                    <div className="timeline-dot"><span>{String(i + 1).padStart(2, '0')}</span></div>
                    <div className="timeline-content">
                      <span className="meta"><Icon name="calendar" size={15} />{item.period}</span>
                      <Title as="h2">{item.role}</Title><strong>{item.org}</strong><p>{item.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
