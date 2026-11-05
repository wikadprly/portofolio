import type { ProjectScreenshot } from '@/types'

export function ProjectGallery({ screenshots }: { screenshots: ProjectScreenshot[] }) {
  return (
    <div className="project-gallery">
      {screenshots.map((screenshot) => (
        <figure key={screenshot.src}>
          <img src={screenshot.src} alt={screenshot.alt} loading="lazy" />
          <figcaption>{screenshot.alt}</figcaption>
        </figure>
      ))}
    </div>
  )
}
