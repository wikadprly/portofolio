import { Button } from '@/components/Button'
import { Eyebrow } from '@/components/Eyebrow'
import { Title } from '@/components/Title'

export function ContactCTA() {
  return (
    <section className="contact-cta">
      <div className="container">
        <div>
          <Eyebrow>Kontak</Eyebrow>
          <Title>Ada yang ingin<br />didiskusikan?</Title>
          <p>Saya terbuka untuk magang, kerja, dan kolaborasi. Kirim email kalau ada yang bisa saya bantu.</p>
        </div>
        <Button icon="arrow" to="/contact">Hubungi saya</Button>
      </div>
    </section>
  )
}
