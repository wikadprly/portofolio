import portrait from '@/assets/foto-wika.jpg'
import { experience } from '@/data/experience'
import { profile } from '@/data/profile'
import { projects } from '@/data/projects'
import { skillGroups } from '@/data/skills'
import { Button } from '@/components/Button'
import { ContactCTA } from '@/components/ContactCTA'
import { Eyebrow } from '@/components/Eyebrow'
import { Icon } from '@/components/Icon'
import { ProjectCard } from '@/components/ProjectCard'
import { SectionHeading } from '@/components/SectionHeading'
import { Title } from '@/components/Title'

export function Home() {
  return (
    <>
      <section className="hero container">
        <div className="hero-copy">
          <div className="availability"><span /> Terbuka untuk magang & kolaborasi</div>
          <Eyebrow>{profile.role}</Eyebrow>
          <Title as="h1">{profile.name}</Title>
          <p className="hero-role">{profile.tagline}</p>
          <p className="hero-intro">Saya kuliah di D3 Teknik Informatika, Politeknik Negeri Semarang. Sebagian besar waktu saya dipakai untuk membangun aplikasi web, dari halaman yang dilihat pengguna sampai basis data di belakangnya. Sesekali saya juga mengerjakan hal lain, seperti klasifikasi gambar atau keamanan jaringan.</p>
          <div className="hero-actions">
            <Button icon="arrow" to="/projects">Lihat proyek</Button>
            {profile.cvUrl && <Button variant="secondary" icon="arrowDown" href={profile.cvUrl} download>Unduh CV</Button>}
            <Button variant="secondary" icon="mail" to="/contact">Hubungi saya</Button>
          </div>
          <div className="social-row">
            <a href={profile.github} target="_blank" rel="noreferrer"><Icon name="github" />GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer"><Icon name="linkedin" />LinkedIn</a>
            <a href={profile.instagram} target="_blank" rel="noreferrer"><Icon name="instagram" />Instagram</a>
          </div>
        </div>
        <div className="portrait-wrap">
          <div className="portrait">
            <img className="portrait-image" src={portrait} alt="Foto Wika Dwi Aprilia" />
          </div>
          <div className="portrait-caption"><span>{profile.name}</span><small>{profile.location}</small></div>
        </div>
      </section>

      <section className="portfolio-strip container" aria-label="Ringkasan portofolio">
        <div><span>Proyek</span><strong>{projects.length} proyek</strong></div>
        <div><span>Fokus</span><strong>Web & data</strong></div>
        <div><span>Pendidikan</span><strong>D3 Teknik Informatika</strong></div>
        <div><span>Domisili</span><strong>{profile.location}</strong></div>
      </section>

      <section className="section container">
        <SectionHeading eyebrow="Proyek pilihan" title="Tiga proyek yang paling saya dalami" text="Masing-masing punya masalah, proses, dan pelajaran yang berbeda." action={<Button variant="text" icon="arrow" to="/projects">Lihat semua {projects.length} proyek</Button>} />
        <div className="featured-grid">
          {projects.slice(0, 3).map(project => <ProjectCard key={project.id} project={project} />)}
        </div>
      </section>

      <section className="about-preview">
        <div className="container split-layout">
          <div className="about-copy">
            <Eyebrow>Tentang saya</Eyebrow>
            <Title>Saya belajar paling banyak saat membangun sesuatu.</Title>
            <p className="lead">Saya Wika. Saya suka mengikuti satu produk dari kebutuhan pengguna sampai data yang menopangnya.</p>
            <p>Ketertarikan saya ada di pengembangan web dan pemanfaatan data. Cara belajar saya sederhana: coba dulu, minta masukan, lalu perbaiki bagian yang belum beres.</p>
            <Button variant="text" icon="arrow" to="/about">Baca selengkapnya tentang saya</Button>
          </div>
          <div className="quick-facts">
            <div><span>Pendidikan</span><strong>D3 Teknik Informatika</strong></div>
            <div><span>Institusi</span><strong>Politeknik Negeri Semarang</strong></div>
            <div><span>Fokus</span><strong>Web & data</strong></div>
            <div><span>Domisili</span><strong>{profile.location}</strong></div>
          </div>
        </div>
      </section>

      <section className="section container home-experience">
        <SectionHeading eyebrow="Pengalaman organisasi" title="Selain kuliah, saya aktif di organisasi" text="Peran-peran ini melatih komunikasi, perencanaan, dan koordinasi yang saya bawa ke kerja pengembangan." action={<Button variant="text" icon="arrow" to="/experience">Lihat semua pengalaman</Button>} />
        <div className="experience-preview">
          {experience.slice(0, 3).map((item) => (
            <article key={item.role}>
              <span className="meta">{item.period}</span>
              <div><Title as="h3">{item.role}</Title><p>{item.org}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="skills-preview">
        <div className="container">
          <SectionHeading eyebrow="Keahlian teknis" title="Alat yang saya pakai" text="Dari perkuliahan, proyek, dan latihan sendiri." action={<Button variant="text" icon="arrow" to="/skills">Lihat semua keahlian</Button>} />
          <div className="skill-bands">
            {skillGroups.slice(0, 4).map(group => <div key={group.title}><Icon name={group.icon} /><span>{group.title}</span><p>{group.items.join(' · ')}</p></div>)}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
