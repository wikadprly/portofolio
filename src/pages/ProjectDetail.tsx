import type { Project } from '@/types'
import { Link } from 'react-router-dom'
import { Button } from '@/components/Button'
import { Eyebrow } from '@/components/Eyebrow'
import { Icon } from '@/components/Icon'
import { ProjectGallery } from '@/components/ProjectGallery'
import { ProjectVisual } from '@/components/ProjectVisual'
import { Title } from '@/components/Title'

export function ProjectDetail({ project }: { project: Project }) {
  const sections = [
    { label: 'Ringkasan', anchor: 'overview' },
    { label: 'Latar belakang', anchor: 'the-problem' },
    { label: 'Tujuan', anchor: 'objectives' },
    { label: 'Peran saya', anchor: 'my-role' },
    { label: 'Implementasi', anchor: 'implementation' },
    { label: 'Pembelajaran', anchor: 'learnings' },
  ]

  return (
    <>
      <section className="project-detail-hero container">
        <Link className="back-button" to="/projects"><span>←</span> Semua proyek</Link>
        <div className="detail-title" data-reveal>
          <div><span className="meta">{project.type}</span><Title as="h1">{project.name}</Title><p>{project.subtitle}</p></div>
          <p className="detail-intro">{project.description}</p>
        </div>
        {project.screenshots && project.screenshots.length > 1 ? (
          <ProjectGallery screenshots={project.screenshots} />
        ) : (
          <ProjectVisual project={project} large />
        )}
        <div className="detail-meta" data-reveal>
          <div><span>Kategori</span><strong>{project.category}</strong></div>
          <div><span>Tipe</span><strong>{project.type}</strong></div>
          <div><span>Status</span><strong>{project.status}</strong></div>
        </div>
      </section>
      <section className="container case-layout">
        <aside>
          <span>Studi kasus</span>
          {sections.map(section => <a key={section.anchor} href={`#${section.anchor}`}>{section.label}</a>)}
        </aside>
        <div className="case-content">
          <article data-reveal id="overview"><Eyebrow>Ringkasan</Eyebrow><Title>Tentang proyek</Title><p className="lead">{project.description}</p></article>
          <article data-reveal id="the-problem"><Eyebrow>Latar belakang & masalah</Eyebrow><Title>Mengapa proyek ini penting</Title><p>{project.background}</p></article>
          <article data-reveal id="objectives"><Eyebrow>Tujuan</Eyebrow><Title>Hal yang ingin dicapai</Title><ul>{project.objectives.map(item => <li key={item}><Icon name="check" />{item}</li>)}</ul></article>
          <article data-reveal id="my-role"><Eyebrow>Peran & kontribusi</Eyebrow><Title>Kontribusi saya</Title><p>{project.role}</p></article>
          <article data-reveal id="implementation"><Eyebrow>Implementasi teknis</Eyebrow><Title>Proses pengembangan</Title><p>{project.implementation}</p><div className="tech-stack">{project.technologies.map(tech => <span key={tech}>{tech}</span>)}</div></article>
          <article data-reveal id="learnings"><Eyebrow>Tantangan & pembelajaran</Eyebrow><Title>Hal yang saya pelajari</Title><p>{project.challenges}</p></article>
          {(project.repositoryUrl || project.demoUrl || project.links?.length) && (
            <article className="project-links" data-reveal>
              <div><Eyebrow>Jelajahi proyek</Eyebrow><Title>Tautan & sumber</Title></div>
              <div>
                {project.repositoryUrl && <Button variant="secondary" icon="github" href={project.repositoryUrl} external>Repository</Button>}
                {project.demoUrl && <Button icon="external" href={project.demoUrl} external>Demo langsung</Button>}
                {project.links?.map(link => <Button key={link.href} icon="external" href={link.href} external>{link.label}</Button>)}
              </div>
            </article>
          )}
        </div>
      </section>
    </>
  )
}
