import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/Button'
import { Eyebrow } from '@/components/Eyebrow'
import { Title } from '@/components/Title'

export function ContactCTA() {
  const navigate = useNavigate()

  return (
    <section className="contact-cta">
      <div className="container">
        <span className="cta-index">05</span>
        <div>
          <Eyebrow>Mari terhubung</Eyebrow>
          <Title>Punya ide, peluang,<br />atau sekadar ingin menyapa?</Title>
          <p>Saya selalu terbuka untuk belajar, berkolaborasi, dan berbagi percakapan yang bermakna.</p>
        </div>
        <Button icon="arrow" onClick={() => navigate('/contact')}>Mulai percakapan</Button>
      </div>
    </section>
  )
}
