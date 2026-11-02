export type PageMeta = {
  title: string
  description: string
}

export const pageMeta: Record<string, PageMeta> = {
  '/': {
    title: 'Wika Dwi Aprilia — Full-Stack Developer',
    description: 'Portofolio Wika Dwi Aprilia, full-stack developer asal Semarang. Proyek web, frontend, backend, dan eksplorasi AI/data.',
  },
  '/about': {
    title: 'Tentang Saya — Wika Dwi Aprilia',
    description: 'Profil, pendidikan, sertifikasi, dan nilai kerja Wika Dwi Aprilia sebagai full-stack developer.',
  },
  '/projects': {
    title: 'Proyek — Wika Dwi Aprilia',
    description: 'Kumpulan proyek full-stack, frontend, dan AI/data yang dikerjakan Wika Dwi Aprilia.',
  },
  '/experience': {
    title: 'Pengalaman — Wika Dwi Aprilia',
    description: 'Pengalaman organisasi dan kepanitiaan Wika Dwi Aprilia di lingkungan kampus.',
  },
  '/skills': {
    title: 'Keahlian — Wika Dwi Aprilia',
    description: 'Keahlian teknis Wika Dwi Aprilia: JavaScript, TypeScript, React, Next.js, Laravel, PostgreSQL, dan Python.',
  },
  '/contact': {
    title: 'Kontak — Wika Dwi Aprilia',
    description: 'Hubungi Wika Dwi Aprilia untuk peluang magang, kerja, atau kolaborasi proyek.',
  },
  '*': {
    title: 'Halaman tidak ditemukan — Wika Dwi Aprilia',
    description: 'Halaman yang Anda cari tidak ditemukan.',
  },
}
