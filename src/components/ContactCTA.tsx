import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/Button'
import { Eyebrow } from '@/components/Eyebrow'
import { Title } from '@/components/Title'

export function ContactCTA() {
  const navigate = useNavigate()

  return (
    <section className="contact-cta">
      <div className="container">
        <div>
          <Eyebrow>Mari terhubung</Eyebrow>
          <Title>Punya peluang, ide,<br />atau ingin berdiskusi?</Title>
          <p>Saya terbuka untuk peluang magang, kerja, dan kolaborasi yang relevan dengan pengembangan produk digital.</p>
        </div>
        <Button icon="arrow" onClick={() => navigate('/contact')}>Hubungi saya</Button>
      </div>
    </section>
  )
}
