import type { ExperienceItem } from '@/types'

/**
 * Magang, pekerjaan lepas, dan pekerjaan untuk klien.
 * Isi entrinya di sini, urutkan dari yang terbaru. Kelompok ini otomatis
 * muncul di halaman Pengalaman begitu ada satu entri.
 *
 * Contoh format:
 * {
 *   period: 'Jun — Agu 2026',
 *   role: 'Magang Web Developer',
 *   org: 'Nama Perusahaan',
 *   text: 'Apa yang dikerjakan, pakai alat apa, dan hasilnya apa.',
 * },
 */
export const workExperience: ExperienceItem[] = [
  {
    period: 'Sep 2026 — Sekarang',
    role: 'Tutor / Pengajar Privat',
    org: 'Mandiri',
    text: 'Mengajar materi sesuai kebutuhan dan kurikulum siswa, menyusun bahan belajar yang mudah dipahami, serta mendampingi proses evaluasi belajar.',
  },
  {
    period: 'Nov 2023 — 2024',
    role: 'Pengelola Toko',
    org: 'Toko Rema',
    text: 'Mengelola operasional harian toko, menata barang, melayani pembeli, dan merekap nota pembelian setiap hari.',
  },
]

export const organizationalExperience: ExperienceItem[] = [
  {
    period: 'Jul 2025 — Jul 2026',
    role: 'Deputi Kementerian Luar Negeri',
    org: 'BEM KBM Politeknik Negeri Semarang',
    text: 'Membantu arah kerja kementerian dan mengoordinasikan program hubungan eksternal bersama anggota lain.',
  },
  {
    period: 'Jul 2025 — Jul 2026',
    role: 'Staf Divisi Kesejahteraan / PSDM',
    org: 'Orda Keluarga Mahasiswa Polines Cilacap',
    text: 'Mendukung kaderisasi dan pengembangan anggota, koordinasi internal, sosialisasi SPMB, serta menjadi ketua pelaksana Makrab Kurmapoci.',
  },
  {
    period: 'Apr 2026',
    role: 'Staf Sponsorship',
    org: 'Lentera Asa Festival',
    text: 'Mencari dan menghubungi calon sponsor, lalu menjaga komunikasi sampai acara selesai.',
  },
  {
    period: 'Jan — Feb 2026',
    role: 'Wakil Ketua Pelaksana',
    org: 'LKMM Madya 2025/2026',
    text: 'Mendampingi ketua pelaksana, membagi tugas antar divisi, dan mengawal jalannya acara.',
  },
  {
    period: 'Des 2025',
    role: 'Ketua Pelaksana',
    org: 'Kurmapoci Makrab',
    text: 'Menyusun rencana acara, membagi tanggung jawab ke panitia, dan memastikan semua bagian berjalan.',
  },
  {
    period: 'Nov 2025',
    role: 'Penanggung Jawab',
    org: 'Studi Banding Unsoed × Polines',
    text: 'Menjadi penghubung dengan kampus tamu dan menjaga alur acara tetap sesuai rencana.',
  },
  {
    period: 'Sep 2024 — Mei 2025',
    role: 'Staf Muda Kementerian Luar Negeri',
    org: 'BEM KBM Politeknik Negeri Semarang',
    text: 'Membantu kegiatan eksternal kementerian dan belajar bekerja dalam tim organisasi.',
  },
  {
    period: '2022 — 2023',
    role: 'Pemangku Adat',
    org: 'Dewan Ambalan SMAN 1 Sampang',
    text: 'Mengelola keberlangsungan adat Ambalan Pattimura — Cut Nyak Dien serta membantu pembina mendisiplinkan dan mengoordinasikan anggota pramuka.',
  },
]
