import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/Button'
import { Eyebrow } from '@/components/Eyebrow'
import { Title } from '@/components/Title'

export function NotFound() {
  const navigate = useNavigate()

  return (
    <section className="not-found container">
      <Eyebrow>404</Eyebrow>
      <Title as="h1">Halaman tidak ditemukan.</Title>
      <p>Tautan yang Anda buka mungkin sudah dipindahkan atau tidak pernah ada.</p>
      <div className="not-found-actions">
        <Button icon="arrow" onClick={() => navigate('/')}>Kembali ke beranda</Button>
        <Button variant="secondary" onClick={() => navigate('/projects')}>Lihat proyek</Button>
      </div>
    </section>
  )
}
