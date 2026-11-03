import portrait from '@/assets/foto-wika.jpg'
import { Button } from '@/components/Button'
import { Eyebrow } from '@/components/Eyebrow'
import { PageHeader } from '@/components/PageHeader'
import { SectionHeading } from '@/components/SectionHeading'
import { Title } from '@/components/Title'
import { certifications } from '@/data/certifications'

const values = [
  ['Rasa Ingin Tahu', 'Kalau belum paham, saya tanya dan cari tahu sendiri.'],
  ['Tanggung Jawab', 'Menyelesaikan bagian yang saya ambil, termasuk yang tidak terlihat orang lain.'],
  ['Kolaborasi', 'Keputusan biasanya lebih baik setelah dibantah orang lain.'],
  ['Progres', 'Lebih baik versi yang selesai dan bisa dipakai daripada rencana yang sempurna.'],
]

const interests = ['Web Development', 'Software Engineering', 'AI & Data', 'Desain Produk Digital']

export function About() {
  return (
    <>
      <PageHeader eyebrow="Tentang saya" title="Profil dan latar belakang" text="Mahasiswa D3 Teknik Informatika di Politeknik Negeri Semarang. Bagian ini berisi latar belakang, minat, dan hal yang saya anggap penting saat bekerja." />
      <section className="container profile-section">
        <div className="profile-visual"><img className="profile-image" src={portrait} alt="Foto Wika Dwi Aprilia" /><span>Semarang, Indonesia</span></div>
        <div className="profile-copy">
          <Eyebrow>Perkenalan</Eyebrow>
          <Title>Halo, saya Wika.</Title>
          <p className="lead">Nama lengkap saya Wika Dwi Aprilia, biasa dipanggil Wika. Saya mahasiswa Teknik Informatika dan tinggal di Semarang.</p>
          <p>Yang membuat saya bertahan di bidang ini adalah bagian di antara ide dan hasil jadi: merapikan masalah, menyusun antarmuka, lalu menulis kode yang membuatnya berjalan.</p>
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
          <div><Eyebrow>Pendidikan</Eyebrow><Title>Kuliah di Politeknik Negeri Semarang.</Title></div>
          <div className="education-timeline">
            <article><span>Sekarang</span><div><Title as="h3">D3 Teknik Informatika</Title><p>Politeknik Negeri Semarang</p><small>Semarang, Indonesia</small></div></article>
            <p>Mata kuliah memberi saya dasar pemrograman, basis data, dan rekayasa perangkat lunak. Tugas kelompok jadi tempat pertama saya belajar membagi pekerjaan dan menyelesaikan beda pendapat.</p>
          </div>
        </div>
      </section>
      <section className="section container interest-layout">
        <div><Eyebrow>Bidang yang diminati</Eyebrow><Title>Hal yang ingin saya dalami.</Title></div>
        <div className="numbered-list">
          {interests.map((item, i) => <div key={item}><span>0{i + 1}</span><Title as="h3">{item}</Title></div>)}
        </div>
      </section>
      <section className="goals-section container">
        <div><Eyebrow>Tujuan</Eyebrow><Title>Yang ingin saya capai setelah lulus.</Title></div>
        <p className="lead">Saya ingin ikut membangun produk yang benar-benar dipakai orang, sambil belajar dari tim yang lebih berpengalaman. Ke depan saya ingin lebih kuat di sisi backend dan data, tanpa meninggalkan frontend.</p>
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
