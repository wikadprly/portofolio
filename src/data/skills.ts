import type { SkillGroup } from '@/types'

export const skillGroups: SkillGroup[] = [
  { title: 'Bahasa Pemrograman', icon: 'code', items: ['JavaScript', 'TypeScript', 'PHP', 'HTML', 'CSS'] },
  { title: 'Framework & Library', icon: 'layers', items: ['React', 'Next.js', 'Laravel', 'Tailwind CSS'] },
  { title: 'Database & ORM', icon: 'briefcase', items: ['PostgreSQL', 'Prisma'] },
  { title: 'Peralatan', icon: 'target', items: ['Git', 'GitHub', 'Visual Studio Code'] },
  { title: 'Produktivitas & Desain', icon: 'spark', items: ['Microsoft Word', 'Microsoft Excel', 'Canva'] },
  { title: 'Teknologi Tambahan', icon: 'spark', items: ['Python', 'OpenCV', 'Dasar Machine Learning'] },
  { title: 'Soft Skill', icon: 'graduation', items: ['Kepemimpinan', 'Komunikasi', 'Pemecahan Masalah', 'Kerja Sama Tim', 'Manajemen Waktu', 'Kedisiplinan', 'Adaptabilitas'] },
]
