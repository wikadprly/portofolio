import { certifications } from '@/data/certifications'
import { skillGroups } from '@/data/skills'
import { Button } from '@/components/Button'
import { Icon } from '@/components/Icon'
import { PageHeader } from '@/components/PageHeader'
import { SectionHeading } from '@/components/SectionHeading'
import { Title } from '@/components/Title'

export function Skills() {
  return (
    <>
      <PageHeader
        eyebrow="Eksplorasi"
        title="Hal-hal yang saya pelajari."
        text="Pengetahuan dan kemampuan yang saya kembangkan lewat perkuliahan, proyek, pelatihan, dan pengalaman langsung."
      />
      {certifications.length > 0 && (
        <section className="container cert-section">
          <SectionHeading
            eyebrow="Sertifikasi & pelatihan"
            title="Pembelajaran dan pelatihan"
            text="Sertifikat dan dokumentasi pembelajaran, beserta materi yang dicakupnya."
          />
          <div className="cert-grid">
            {certifications.map((certification) => (
              <article className="cert-card" key={certification.title}>
                <span>{certification.year}</span>
                <Title as="h3">{certification.title}</Title>
                <p>{certification.issuer}</p>
                {certification.skills?.length ? (
                  <div className="large-tags cert-tags">
                    {certification.skills.map((skill) => <span key={skill}>{skill}</span>)}
                  </div>
                ) : null}
                {certification.url && <Button variant="text" icon="arrow" href={certification.url} external>Lihat sertifikat</Button>}
              </article>
            ))}
          </div>
        </section>
      )}
      <section className="container skills-section">
        <SectionHeading
          eyebrow="Teknologi"
          title="Alat yang saya pakai"
          text="Dikelompokkan menurut fungsinya, bukan menurut tingkat kemahiran."
        />
        <div className="skills-rows">
          {skillGroups.map((group) => (
            <div className="skills-row" key={group.title}>
              <div className="skills-row-head"><Icon name={group.icon} size={18} /><Title as="h3">{group.title}</Title></div>
              <div className="large-tags">{group.items.map(item => <span key={item}>{item}</span>)}</div>
            </div>
          ))}
        </div>
      </section>
      <section className="container skill-note"><span>Saat ini</span><Title>Masih belajar, dan akan terus begitu.</Title><p>Saya terus mempelajari berbagai teknologi, mengembangkan proyek, dan memperluas pengalaman lewat kegiatan akademik maupun di luarnya.</p></section>
    </>
  )
}
