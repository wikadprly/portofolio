import type { Project } from '@/types'
import { Button } from '@/components/Button'
import { Icon } from '@/components/Icon'
import { ProjectVisual } from '@/components/ProjectVisual'
import { Title } from '@/components/Title'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <ProjectVisual project={project} />
      <div className="project-card-body">
        <span className="meta">{project.type}</span>
        <Title as="h3">{project.name}</Title>
        <p>{project.description}</p>
        <div className="tags">{project.technologies.slice(0, 4).map((tech) => <span key={tech}>{tech}</span>)}</div>
        <div className="card-actions">
          <Button variant="text" icon="arrow" to={`/projects/${project.id}`}>Lihat studi kasus</Button>
          {(project.repositoryUrl || project.demoUrl) && (
            <div className="icon-links">
              {project.repositoryUrl && <a href={project.repositoryUrl} target="_blank" rel="noreferrer" aria-label={`Repository ${project.name}`}><Icon name="github" /></a>}
              {project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noreferrer" aria-label={`Demo ${project.name}`}><Icon name="external" /></a>}
            </div>
          )}
        </div>
      </div>
    </article>
  )
}
