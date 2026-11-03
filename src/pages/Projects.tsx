import { useState } from 'react'
import { projects } from '@/data/projects'
import { PageHeader } from '@/components/PageHeader'
import { ProjectCard } from '@/components/ProjectCard'

const filters = ['Semua Proyek', ...Array.from(new Set(projects.map(project => project.category)))]

export function Projects() {
  const [filter, setFilter] = useState(filters[0])
  const shown = filter === filters[0] ? projects : projects.filter(project => project.category === filter)
  return (
    <>
      <PageHeader eyebrow="Proyek" title="Proyek yang saya kerjakan" text="Proyek kuliah, proyek pribadi, dan pekerjaan untuk klien. Tiap proyek punya halaman yang menjelaskan masalah, peran saya, dan apa yang saya pelajari." />
      <section className="container projects-section">
        <div className="filters" role="group" aria-label="Filter proyek">
          {filters.map(item => <button key={item} className={filter === item ? 'active' : ''} aria-pressed={filter === item} onClick={() => setFilter(item)}>{item}</button>)}
        </div>
        <div className="projects-grid">{shown.map(project => <ProjectCard key={project.id} project={project} />)}</div>
      </section>
    </>
  )
}
