import portrait from '@/assets/foto-wika.jpg'
import { Eyebrow } from '@/components/Eyebrow'
import { SectionHeading } from '@/components/SectionHeading'
import { Title } from '@/components/Title'

const values = [
  ['Rasa Ingin Tahu', 'Senang memahami bagaimana sesuatu bekerja dan terbuka terhadap perspektif baru.'],
  ['Tanggung Jawab', 'Berusaha menjalankan peran dan menyelesaikan hal yang telah menjadi komitmen.'],
  ['Kolaborasi', 'Menghargai perbedaan pendapat dan terbuka terhadap ide dari orang lain.'],
  ['Kemandirian', 'Berani mengambil inisiatif, menentukan pilihan, dan belajar dari setiap keputusan.'],
]

const interests = [
  'Web & Software Development',
  'Artificial Intelligence',
  'Digital Product Development',
  'Network & Information Systems',
]

export function About() {
  return (
    <>
      <section className="container profile-section">
        <div className="profile-visual">
          <img className="profile-image" src={portrait} alt="Foto Wika Dwi Aprilia" />
          <span>Semarang, Indonesia</span>
        </div>

        <div className="profile-copy">
          <Eyebrow>Tentang Saya</Eyebrow>
          <Title as="h1">Mari Terhubung & Berkolaborasi.</Title>

          <p className="lead" style={{ textAlign: 'justify' }}>
            Saya Wika Dwi Aprilia, saat ini sedang menempuh pendidikan
            D3 Teknik Informatika di Politeknik Negeri Semarang.
          </p>

          <p style={{ textAlign: 'justify' }}>
            Saya tertarik pada bagaimana teknologi dapat digunakan untuk
            menyelesaikan berbagai kebutuhan. Ketertarikan tersebut saya
            eksplorasi melalui perkuliahan dan berbagai proyek, mulai dari
            pengembangan aplikasi web hingga penerapan kecerdasan buatan.
          </p>

          <p style={{ textAlign: 'justify' }}>
            Di luar bidang akademik, saya aktif dalam organisasi kampus
            dan memiliki pengalaman sebagai tentor privat. Pengalaman
            tersebut mempertemukan saya dengan berbagai orang dan situasi,
            sekaligus melatih kemampuan berkomunikasi, berkoordinasi,
            bekerja dalam tim, serta menyampaikan sesuatu dengan cara
            yang mudah dipahami.
          </p>

          <p style={{ textAlign: 'justify' }}>
            Saya masih menikmati proses mencoba berbagai hal dan belum
            membatasi diri pada satu bidang tertentu. Ada banyak hal
            menarik di dunia teknologi yang ingin saya pelajari lebih jauh.
          </p>

          <dl className="profile-data">
            <div><dt>Nama</dt><dd>Wika Dwi Aprilia</dd></div>
            <div><dt>Domisili</dt><dd>Semarang, Indonesia</dd></div>
            <div><dt>Pendidikan</dt><dd>D3 Teknik Informatika</dd></div>
            <div><dt>Institusi</dt><dd>Politeknik Negeri Semarang</dd></div>
          </dl>
        </div>
      </section>

      <section className="soft-section">
        <div className="container editorial-grid">
          <div>
            <Eyebrow>02 — PENDIDIKAN</Eyebrow>
            <Title>Latar belakang akademik.</Title>
          </div>

          <div className="education-timeline">
            <article>
              <span>Sekarang</span>
              <div>
                <Title as="h3">D3 Teknik Informatika</Title>
                <p>Politeknik Negeri Semarang</p>
                <small>Semarang, Indonesia</small>
              </div>
            </article>

            <p>
              Selama perkuliahan, saya mempelajari berbagai dasar di bidang
              informatika, seperti pemrograman, basis data, jaringan
              komputer, dan rekayasa perangkat lunak. Pembelajaran
              dilengkapi dengan praktik, tugas kelompok, dan proyek
              akademik yang memberikan pengalaman dalam menerapkan
              pengetahuan ke dalam suatu sistem.
            </p>
          </div>
        </div>
      </section>

      <section className="section container interest-layout">
        <div>
          <Eyebrow>03 — EKSPLORASI</Eyebrow>
          <Title>Bidang yang menarik perhatian saya.</Title>
        </div>

        <div className="numbered-list">
          {interests.map((item, i) => (
            <div key={item}>
              <span>0{i + 1}</span>
              <Title as="h3">{item}</Title>
            </div>
          ))}
        </div>
      </section>

      <section className="goals-section container">
        <div>
          <Eyebrow>04 — KE DEPAN</Eyebrow>
          <Title>Ruang untuk terus berkembang.</Title>
        </div>

        <p className="lead">
          Setelah menyelesaikan pendidikan, saya ingin mendapatkan
          pengalaman profesional dan terlibat dalam pengembangan
          proyek nyata. Saya terbuka untuk berbagai kesempatan yang
          memungkinkan saya menerapkan pengetahuan, mempelajari hal
          baru, dan memahami lebih banyak tentang dunia teknologi.
        </p>
      </section>

      <section className="section container">
        <SectionHeading eyebrow="05 — NILAI PRIBADI" title="Hal yang saya pegang" />

        <div className="values-grid">
          {values.map(([title, text], i) => (
            <article key={title}>
              <span>0{i + 1}</span>
              <Title as="h3">{title}</Title>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}