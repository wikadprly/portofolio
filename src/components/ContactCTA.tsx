import { Button } from '@/components/Button'
import { Eyebrow } from '@/components/Eyebrow'
import { Title } from '@/components/Title'

export function ContactCTA() {
  return (
    <section className="contact-cta">
      <div className="container">
        <div>
          <Eyebrow>Kontak</Eyebrow>
          <Title>Mari terhubung.</Title>
          <p>Terbuka untuk bertukar ide, berbagi pengalaman, dan menjalin koneksi lewat berbagai kesempatan maupun kolaborasi.</p>
        </div>
        <Button icon="arrow" to="/contact">Hubungi saya</Button>
      </div>
    </section>
  )
}
