import portrait from '@/assets/foto-wika.jpg'
import { Eyebrow } from '@/components/Eyebrow'
import { PageHeader } from '@/components/PageHeader'
import { SectionHeading } from '@/components/SectionHeading'
import { Title } from '@/components/Title'

const values = [
  ['Rasa Ingin Tahu', 'Selalu terbuka untuk mempelajari hal baru dan memahami sesuatu lebih dalam.'],
  ['Tanggung Jawab', 'Berusaha menyelesaikan hal yang sudah menjadi tanggung jawab dengan baik.'],
  ['Kolaborasi', 'Menghargai ide, perspektif, dan kontribusi dari orang lain.'],
  ['Pengembangan Diri', 'Terus belajar dan memperbaiki diri melalui pengalaman.'],
]

const interests = ['Technology & Software Development', 'Artificial Intelligence', 'Digital Product Development', 'Information Technology']

export function About() {
  return (
    <>
      <PageHeader eyebrow="Tentang saya" title="Mengenal Wika Dwi Aprilia." text="Mahasiswa Teknik Informatika yang tertarik pada teknologi, pengembangan perangkat lunak, dan pengalaman baru." />
      <section className="container profile-section">
        <div className="profile-visual"><img className="profile-image" src={portrait} alt="Foto Wika Dwi Aprilia" /><span>Semarang, Indonesia</span></div>
        <div className="profile-copy">
          <Eyebrow>Perkenalan</Eyebrow>
          <Title>Kenalan dulu.</Title>
          <p className="lead">Nama saya Wika Dwi Aprilia, biasa dipanggil Wika. Saat ini menempuh pendidikan D3 Teknik Informatika di Politeknik Negeri Semarang.</p>
          <p>Ketertarikan saya pada teknologi tumbuh lewat perkuliahan, proyek, dan kebiasaan mencoba hal baru. Saya pernah mengerjakan aplikasi web, proyek berbasis kecerdasan buatan, dan beberapa proyek akademik lain.</p>
          <p>Di luar kegiatan akademik, saya aktif di organisasi kampus. Dari situ saya bertemu banyak orang, belajar berkomunikasi, dan mengambil tanggung jawab dalam tim.</p>
          <p>Saya masih terus mengeksplorasi berbagai bidang dan ingin memakai setiap kesempatan untuk menambah pengetahuan serta pengalaman.</p>
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
            <p>Mata kuliah memberi dasar pemrograman, basis data, dan rekayasa perangkat lunak. Dari tugas kelompok saya belajar membagi pekerjaan, menyepakati cara kerja, dan menyelesaikan beda pendapat.</p>
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
        <p className="lead">Ingin ikut membangun produk yang benar-benar dipakai orang, sambil belajar dari tim yang lebih berpengalaman. Ke depan saya ingin lebih kuat di sisi backend dan data, tanpa meninggalkan frontend.</p>
      </section>
      <section className="section container">
        <SectionHeading eyebrow="Nilai pribadi" title="Hal yang saya pegang" />
        <div className="values-grid">{values.map(([title, text], i) => <article key={title}><span>0{i + 1}</span><Title as="h3">{title}</Title><p>{text}</p></article>)}</div>
      </section>
    </>
  )
}
