import { experience } from '@/data/experience'
import { Eyebrow } from '@/components/Eyebrow'
import { Icon } from '@/components/Icon'
import { PageHeader } from '@/components/PageHeader'
import { Title } from '@/components/Title'

export function Experience() {
  return (
    <>
      <PageHeader eyebrow="Pengalaman" title="Pengalaman organisasi dan kepanitiaan" text="Peran yang saya ambil selama kuliah, dari kepanitiaan acara sampai kementerian di BEM." />
      <section className="container timeline-section">
        <div className="timeline-intro"><Eyebrow>Di luar kelas</Eyebrow><Title>Belajar memimpin dari hal kecil.</Title><p>Tiap peran memberi pelajaran berbeda. Yang paling sering muncul: cara membagi pekerjaan dan menjaga komunikasi tetap jalan.</p></div>
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
