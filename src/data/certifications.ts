import type { Certification } from '@/types'

/**
 * Sertifikasi, kursus, dan pelatihan yang sudah diselesaikan. Tampil di halaman
 * Keahlian, di atas daftar alat, jadi isi `skills` dengan materi atau teknologi
 * yang dicakup sertifikat tersebut.
 *
 * Contoh format:
 * {
 *   title: 'Belajar Dasar Pemrograman Web',
 *   issuer: 'Dicoding',
 *   year: '2025',
 *   url: 'https://www.dicoding.com/certificates/...',
 *   skills: ['HTML', 'CSS', 'JavaScript'],
 * },
 */
export const certifications: Certification[] = []
