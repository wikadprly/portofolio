import type { Project } from '@/types'
import { Button } from '@/components/Button'
import { Eyebrow } from '@/components/Eyebrow'
import { Icon } from '@/components/Icon'
import { ProjectVisual } from '@/components/ProjectVisual'
import { Title } from '@/components/Title'

export function ProjectDetail({ project, back }: { project: Project; back: () => void }) {
  const sections = [
    { label: 'Ringkasan', anchor: 'overview' },
    { label: 'Latar belakang', anchor: 'the-problem' },
    { label: 'Tujuan', anchor: 'objectives' },
    { label: 'Peran saya', anchor: 'my-role' },
    { label: 'Implementasi', anchor: 'implementation' },
    ...(project.screenshots?.length ? [{ label: 'Galeri', anchor: 'gallery' }] : []),
    { label: 'Pembelajaran', anchor: 'learnings' },
  ]

  return (
    <>
      <section className="project-detail-hero container">
        <button className="back-button" onClick={back}><span>←</span> Semua proyek</button>
        <div className="detail-title">
          <div><span className="meta">{project.type}</span><Title as="h1">{project.name}</Title><p>{project.subtitle}</p></div>
          <p className="detail-intro">{project.description}</p>
        </div>
        <ProjectVisual project={project} large />
        <div className="detail-meta">
          <div><span>Kategori</span><strong>{project.category}</strong></div>
          <div><span>Peran</span><strong>Desain & Pengembangan</strong></div>
          <div><span>Status</span><strong>{project.status}</strong></div>
        </div>
      </section>
      <section className="container case-layout">
        <aside>
          <span>Studi kasus</span>
          {sections.map(section => <a key={section.anchor} href={`#${section.anchor}`}>{section.label}</a>)}
        </aside>
        <div className="case-content">
          <article id="overview"><Eyebrow>Ringkasan</Eyebrow><Title>Tentang proyek</Title><p className="lead">{project.description}</p></article>
          <article id="the-problem"><Eyebrow>Latar belakang & masalah</Eyebrow><Title>Mengapa proyek ini penting</Title><p>{project.background}</p></article>
          <article id="objectives"><Eyebrow>Tujuan</Eyebrow><Title>Hal yang ingin dicapai</Title><ul>{project.objectives.map(item => <li key={item}><Icon name="check" />{item}</li>)}</ul></article>
          <article id="my-role"><Eyebrow>Peran & kontribusi</Eyebrow><Title>Kontribusi saya</Title><p>{project.role}</p></article>
          <article id="implementation"><Eyebrow>Implementasi teknis</Eyebrow><Title>Proses pengembangan</Title><p>{project.implementation}</p><div className="tech-stack">{project.technologies.map(tech => <span key={tech}>{tech}</span>)}</div></article>
          {project.screenshots?.length ? (
            <article id="gallery">
              <Eyebrow>Tangkapan layar & galeri</Eyebrow>
              <Title>Tampilan produk</Title>
              <div className="gallery">
                {project.screenshots.map((shot) => (
                  <img key={shot.src} src={shot.src} alt={shot.alt} loading="lazy" />
                ))}
              </div>
            </article>
          ) : null}
          <article id="learnings"><Eyebrow>Tantangan & pembelajaran</Eyebrow><Title>Hal yang saya pelajari</Title><p>{project.challenges}</p></article>
          {(project.repositoryUrl || project.demoUrl) && (
            <article className="project-links">
              <div><Eyebrow>Jelajahi proyek</Eyebrow><Title>Tautan & sumber</Title></div>
              <div>
                {project.repositoryUrl && <Button variant="secondary" icon="github" href={project.repositoryUrl} external>Repository</Button>}
                {project.demoUrl && <Button icon="external" href={project.demoUrl} external>Demo langsung</Button>}
              </div>
            </article>
          )}
        </div>
      </section>
    </>
  )
}
