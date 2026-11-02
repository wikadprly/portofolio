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
