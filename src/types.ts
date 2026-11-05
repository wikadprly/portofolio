export type IconName =
  | 'arrow'
  | 'arrowDown'
  | 'briefcase'
  | 'calendar'
  | 'check'
  | 'chevron'
  | 'code'
  | 'external'
  | 'github'
  | 'graduation'
  | 'instagram'
  | 'layers'
  | 'linkedin'
  | 'location'
  | 'mail'
  | 'menu'
  | 'spark'
  | 'target'
  | 'x'

export type ProjectTone = 'blue' | 'navy' | 'sage' | 'steel' | 'sand' | 'powder'

export type ProjectScreenshot = {
  src: string
  alt: string
}

export type ProjectLink = {
  label: string
  href: string
}

export type Project = {
  id: string
  name: string
  subtitle: string
  description: string
  technologies: string[]
  type: string
  category: string
  status: string
  code: string
  tone: ProjectTone
  background: string
  objectives: string[]
  role: string
  implementation: string
  challenges: string
  repositoryUrl?: string
  demoUrl?: string
  links?: ProjectLink[]
  screenshots?: ProjectScreenshot[]
}

export type Certification = {
  title: string
  issuer: string
  year: string
  url?: string
  skills?: string[]
}

export type ExperienceItem = {
  period: string
  role: string
  org: string
  text: string
}

export type SkillGroup = {
  title: string
  icon: IconName
  items: string[]
}
