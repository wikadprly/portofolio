export type PageMeta = {
  title: string
  description: string
}

export const pageMeta: Record<string, PageMeta> = {
  '/': {
    title: 'Wika Dwi Aprilia — Portofolio',
    description: 'Mahasiswa Teknik Informatika Politeknik Negeri Semarang. Tertarik pada teknologi, pengembangan perangkat lunak, dan hal-hal baru di bidang digital.',
  },
  '/about': {
    title: 'Tentang — Wika Dwi Aprilia',
    description: 'Latar belakang, pendidikan, bidang yang diminati, dan hal yang saya pegang.',
  },
  '/projects': {
    title: 'Proyek — Wika Dwi Aprilia',
    description: 'Proyek akademik, pengembangan mandiri, dan kolaborasi bersama tim.',
  },
  '/experience': {
    title: 'Pengalaman — Wika Dwi Aprilia',
    description: 'Pengalaman kerja, magang, dan organisasi selama berkuliah di Politeknik Negeri Semarang.',
  },
  '/skills': {
    title: 'Eksplorasi — Wika Dwi Aprilia',
    description: 'Teknologi, pembelajaran, dan kemampuan yang dikembangkan lewat perkuliahan, proyek, dan pelatihan.',
  },
  '/contact': {
    title: 'Kontak — Wika Dwi Aprilia',
    description: 'Email, GitHub, LinkedIn, dan Instagram. Terbuka untuk diskusi, kolaborasi, dan kesempatan baru.',
  },
  '*': {
    title: 'Halaman tidak ditemukan — Wika Dwi Aprilia',
    description: 'Halaman yang Anda cari tidak ditemukan.',
  },
}
