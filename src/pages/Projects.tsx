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
      <PageHeader eyebrow="Karya pilihan" title="Proyek yang dibangun dengan tujuan." text="Mulai dari produk web praktis hingga eksplorasi AI—setiap proyek mewakili masalah, proses, dan pembelajaran baru." number="02" />
      <section className="container projects-section">
        <div className="filters" role="group" aria-label="Filter proyek">
          {filters.map(item => <button key={item} className={filter === item ? 'active' : ''} onClick={() => setFilter(item)}>{item}</button>)}
        </div>
        <div className="projects-grid">{shown.map(project => <ProjectCard key={project.id} project={project} />)}</div>
      </section>
    </>
  )
}
