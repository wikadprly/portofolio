import { useState } from 'react'
import type { FormEvent } from 'react'
import { Button } from '@/components/Button'
import { Eyebrow } from '@/components/Eyebrow'
import { Icon } from '@/components/Icon'
import { Title } from '@/components/Title'
import { profile } from '@/data/profile'

const contactEmail = profile.email

type Field = 'name' | 'email' | 'subject' | 'message'
type Errors = Partial<Record<Field, string>>

const validate = (data: FormData): Errors => {
  const errors: Errors = {}
  const name = String(data.get('name') ?? '').trim()
  const email = String(data.get('email') ?? '').trim()
  const subject = String(data.get('subject') ?? '').trim()
  const message = String(data.get('message') ?? '').trim()

  if (name.length < 2) errors.name = 'Nama minimal 2 karakter.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Masukkan alamat email yang valid.'
  if (!subject) errors.subject = 'Subjek tidak boleh kosong.'
  if (message.length < 10) errors.message = 'Pesan minimal 10 karakter.'

  return errors
}

export function Contact() {
  const [sent, setSent] = useState(false)
  const [errors, setErrors] = useState<Errors>({})

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const nextErrors = validate(data)
    setErrors(nextErrors)

    const firstInvalid = (Object.keys(nextErrors) as Field[])[0]
    if (firstInvalid) {
      setSent(false)
      const field = form.elements.namedItem(firstInvalid)
      if (field instanceof HTMLElement) field.focus()
      return
    }

    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const subject = String(data.get('subject') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()
    const body = `Nama: ${name}\nEmail: ${email}\n\n${message}`
    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  const handleChange = (event: FormEvent<HTMLFormElement>) => {
    if (sent) setSent(false)
    const target = event.target
    if (!(target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement)) return
    const field = target.name as Field
    if (field in errors) {
      setErrors((current) => {
        const next = { ...current }
        delete next[field]
        return next
      })
    }
  }

  return (
    <section className="contact-page container">
      <div className="contact-head">
        <Eyebrow>Hubungi saya</Eyebrow>
        <Title as="h1">Kalau ada peluang atau ide,<br /><em>kirim saja pesannya.</em></Title>
        <p>Saya terbuka untuk magang, kerja, dan kolaborasi. Balasan bisa lewat email atau salah satu kanal di bawah ini.</p>
      </div>
      <div className="contact-grid">
        <div className="contact-details">
          <Title as="h2">Kontak langsung</Title>
          <p>Pilih kanal yang paling nyaman. Untuk pesan yang lebih panjang, gunakan form di samping.</p>
          <a href={`mailto:${contactEmail}`}><span><Icon name="mail" /></span><div><small>Email</small>{contactEmail}</div></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer"><span><Icon name="linkedin" /></span><div><small>LinkedIn</small>Profil profesional</div></a>
          <a href={profile.github} target="_blank" rel="noreferrer"><span><Icon name="github" /></span><div><small>GitHub</small>Kode & proyek</div></a>
          <a href={profile.instagram} target="_blank" rel="noreferrer"><span><Icon name="instagram" /></span><div><small>Instagram</small>{profile.instagramHandle}</div></a>
        </div>
        <form onSubmit={submit} onChange={handleChange} noValidate>
          <div className="form-row">
            <label>Nama lengkap
              <input
                required
                name="name"
                autoComplete="name"
                placeholder="Nama Anda"
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && <span className="form-error" id="name-error" role="alert">{errors.name}</span>}
            </label>
            <label>Alamat email
              <input
                required
                type="email"
                name="email"
                autoComplete="email"
                placeholder="anda@contoh.com"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && <span className="form-error" id="email-error" role="alert">{errors.email}</span>}
            </label>
          </div>
          <label>Subjek
            <input
              required
              name="subject"
              placeholder="Apa yang ingin Anda diskusikan?"
              aria-invalid={Boolean(errors.subject)}
              aria-describedby={errors.subject ? 'subject-error' : undefined}
            />
            {errors.subject && <span className="form-error" id="subject-error" role="alert">{errors.subject}</span>}
          </label>
          <label>Pesan
            <textarea
              required
              name="message"
              rows={6}
              placeholder="Ceritakan sedikit tentang ide atau peluang Anda..."
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'message-error' : undefined}
            />
            {errors.message && <span className="form-error" id="message-error" role="alert">{errors.message}</span>}
          </label>
          <p className="form-hint">Form ini membuka aplikasi email Anda dengan pesan yang sudah terisi.</p>
          <Button type="submit" icon={sent ? 'check' : 'arrow'}>{sent ? 'Email dibuka' : 'Buka aplikasi email'}</Button>
          <p className="form-note" role="status" aria-live="polite">
            {sent ? `Aplikasi email Anda seharusnya terbuka. Jika tidak, kirim langsung ke ${contactEmail}.` : ''}
          </p>
        </form>
      </div>
    </section>
  )
}
