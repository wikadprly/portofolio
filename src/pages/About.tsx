import portrait from '@/assets/foto-wika.jpg'
import { Button } from '@/components/Button'
import { Eyebrow } from '@/components/Eyebrow'
import { PageHeader } from '@/components/PageHeader'
import { SectionHeading } from '@/components/SectionHeading'
import { Title } from '@/components/Title'
import { certifications } from '@/data/certifications'

const values = [
  ['Rasa Ingin Tahu', 'Berani bertanya, mengeksplorasi lebih dalam, dan terus belajar.'],
  ['Tanggung Jawab', 'Menjaga komitmen dan kepercayaan orang lain dengan sungguh-sungguh.'],
  ['Kolaborasi', 'Menciptakan hasil yang lebih baik dengan mendengar dan berkontribusi.'],
  ['Progres', 'Menghargai perkembangan konsisten daripada kesempurnaan yang instan.'],
]

export function About() {
  return (
    <>
      <PageHeader eyebrow="Tentang saya" title="Profil dan latar belakang" text="Mahasiswa Teknik Informatika dengan minat pada full-stack development, frontend, dan penerapan AI/data." />
      <section className="container profile-section">
        <div className="profile-visual"><img className="profile-image" src={portrait} alt="Foto Wika Dwi Aprilia" /><span>Semarang, Indonesia</span></div>
        <div className="profile-copy">
          <Eyebrow>Perkenalan diri</Eyebrow>
          <Title>Halo, saya Wika.</Title>
          <p className="lead">Nama saya Wika Dwi Aprilia—biasa dipanggil Wika. Saya mahasiswa Teknik Informatika yang saat ini berdomisili di Semarang, Indonesia.</p>
          <p>Saya tertarik pada bagaimana perangkat lunak dapat membuat pekerjaan sehari-hari menjadi lebih jelas, cepat, dan bermakna. Saya menikmati proses dari ide, antarmuka, hingga implementasi untuk memahami cara membentuk sebuah produk dari awal sampai akhir.</p>
          <dl className="profile-data">
            <div><dt>Nama panggilan</dt><dd>Wika</dd></div>
            <div><dt>Domisili</dt><dd>Semarang, Indonesia</dd></div>
            <div><dt>Pendidikan</dt><dd>D3 Teknik Informatika</dd></div>
            <div><dt>Institusi</dt><dd>Politeknik Negeri Semarang</dd></div>
          </dl>
        </div>
      </section>
      <section className="soft-section">
        <div className="container editorial-grid">
          <div><Eyebrow>Pendidikan</Eyebrow><Title>Membangun fondasi di bidang teknologi.</Title></div>
          <div className="education-timeline">
            <article><span>Sekarang</span><div><Title as="h3">D3 Teknik Informatika</Title><p>Politeknik Negeri Semarang</p><small>Semarang, Indonesia</small></div></article>
            <p>Perkuliahan memberi saya fondasi teknis yang luas—mulai dari pemrograman dan database hingga proyek perangkat lunak. Tugas kelompok juga melatih komunikasi dan tanggung jawab bersama.</p>
          </div>
        </div>
      </section>
      <section className="section container interest-layout">
        <div><Eyebrow>Bidang yang diminati</Eyebrow><Title>Arah rasa ingin tahu saya.</Title></div>
        <div className="numbered-list">
          {['Full-Stack Development', 'Software Engineering', 'AI Development', 'Digital Product Creation'].map((item, i) => <div key={item}><span>0{i + 1}</span><Title as="h3">{item}</Title></div>)}
        </div>
      </section>
      <section className="goals-section container">
        <div><Eyebrow>Tujuan profesional</Eyebrow><Title>Bertumbuh menjadi software engineer yang matang.</Title></div>
        <p className="lead">Saya ingin berkontribusi pada produk yang menyelesaikan masalah nyata, belajar dari tim berpengalaman, serta terus memperdalam kemampuan teknis dan pemahaman terhadap pengguna.</p>
      </section>
      <section className="section container">
        <SectionHeading eyebrow="Nilai pribadi" title="Cara saya bekerja" />
        <div className="values-grid">{values.map(([title, text], i) => <article key={title}><span>0{i + 1}</span><Title as="h3">{title}</Title><p>{text}</p></article>)}</div>
      </section>
      {certifications.length > 0 && (
        <section className="section container">
          <SectionHeading eyebrow="Sertifikasi & pelatihan" title="Kredensial dan pembelajaran terstruktur" text="Sertifikasi, kursus, dan pelatihan relevan yang telah saya selesaikan." />
          <div className="cert-grid">
            {certifications.map((certification) => (
              <article className="cert-card" key={certification.title}>
                <span>{certification.year}</span>
                <Title as="h3">{certification.title}</Title>
                <p>{certification.issuer}</p>
                {certification.url && <Button variant="text" icon="arrow" href={certification.url} external>Lihat sertifikat</Button>}
              </article>
            ))}
          </div>
        </section>
      )}
    </>
  )
}
