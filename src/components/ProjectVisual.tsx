import type { Project } from '@/types'

export function ProjectVisual({ project, large = false }: { project: Project; large?: boolean }) {
  return (
    <div className={`project-visual ${project.tone} ${large ? 'large' : ''}`}>
      <div className="visual-grid" />
      <span className="visual-code">{project.code}</span>
      <span className="visual-label">{project.subtitle}</span>
      <div className="visual-window"><i /><i /><i /></div>
    </div>
  )
}
