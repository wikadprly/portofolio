import type { Project } from '@/types'
import { useState } from 'react'

export function ProjectVisual({ project, large = false }: { project: Project; large?: boolean }) {
  const cover = project.screenshots?.[0]
  const [isPortrait, setIsPortrait] = useState(false)

  if (cover) {
    return (
      <div
        className={`project-visual has-cover ${isPortrait ? 'is-portrait' : 'is-landscape'} ${large ? 'large' : ''}`}
      >
        <img
          src={cover.src}
          alt={cover.alt}
          loading={large ? 'eager' : 'lazy'}
          onLoad={(event) => {
            const image = event.currentTarget
            setIsPortrait(image.naturalHeight > image.naturalWidth)
          }}
        />
      </div>
    )
  }

  return (
    <div className={`project-visual ${project.tone} ${large ? 'large' : ''}`}>
      <span className="visual-label">{project.category}</span>
      <span className="visual-mark" aria-hidden="true">{project.code}</span>
      <span className="visual-sub">{project.subtitle}</span>
    </div>
  )
}
