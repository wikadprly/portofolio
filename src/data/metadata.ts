export type PageMeta = {
  title: string
  description: string
}

export const pageMeta: Record<string, PageMeta> = {
  '/': {
    title: 'Wika Dwi Aprilia — Portofolio',
    description: 'Portofolio Wika Dwi Aprilia, mahasiswa Teknik Informatika Politeknik Negeri Semarang. Berisi proyek web, pengalaman organisasi, dan keahlian teknis.',
  },
  '/about': {
    title: 'Tentang — Wika Dwi Aprilia',
    description: 'Latar belakang, pendidikan, minat, dan cara kerja Wika Dwi Aprilia.',
  },
  '/projects': {
    title: 'Proyek — Wika Dwi Aprilia',
    description: 'Proyek kuliah, proyek pribadi, dan pekerjaan klien yang dikerjakan Wika Dwi Aprilia.',
  },
  '/experience': {
    title: 'Pengalaman — Wika Dwi Aprilia',
    description: 'Pengalaman organisasi dan kepanitiaan Wika Dwi Aprilia selama kuliah di Politeknik Negeri Semarang.',
  },
  '/skills': {
    title: 'Keahlian — Wika Dwi Aprilia',
    description: 'Bahasa pemrograman, framework, dan alat yang dipakai Wika Dwi Aprilia untuk kuliah dan proyek.',
  },
  '/contact': {
    title: 'Kontak — Wika Dwi Aprilia',
    description: 'Email, GitHub, LinkedIn, dan Instagram Wika Dwi Aprilia.',
  },
  '*': {
    title: 'Halaman tidak ditemukan — Wika Dwi Aprilia',
    description: 'Halaman yang Anda cari tidak ditemukan.',
  },
}
