import { Button } from '@/components/Button'
import { Eyebrow } from '@/components/Eyebrow'
import { Title } from '@/components/Title'

export function NotFound() {
  return (
    <section className="not-found container">
      <Eyebrow>404</Eyebrow>
      <Title as="h1">Halaman tidak ditemukan.</Title>
      <p>Tautan yang Anda buka mungkin sudah dipindahkan atau tidak pernah ada.</p>
      <div className="not-found-actions">
        <Button icon="arrow" to="/">Kembali ke beranda</Button>
        <Button variant="secondary" to="/projects">Lihat proyek</Button>
      </div>
    </section>
  )
}
