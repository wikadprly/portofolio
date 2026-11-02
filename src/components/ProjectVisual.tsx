import type { Project } from '@/types'

export function ProjectVisual({ project, large = false }: { project: Project; large?: boolean }) {
  const cover = project.screenshots?.[0]

  if (cover) {
    return (
      <div className={`project-visual ${large ? 'large' : ''}`}>
        <img src={cover.src} alt={cover.alt} loading={large ? 'eager' : 'lazy'} />
      </div>
    )
  }

  return (
    <div className={`project-visual ${project.tone} ${large ? 'large' : ''}`}>
      <span className="visual-code">{project.code}</span>
      <span className="visual-label">{project.category}</span>
    </div>
  )
}
