import { useNavigate } from 'react-router-dom'
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
  const navigate = useNavigate()

  return (
    <>
      <section className="hero container">
        <div className="hero-copy">
          <div className="availability"><span /> Terbuka untuk magang & kolaborasi</div>
          <Eyebrow>{profile.role}</Eyebrow>
          <Title as="h1">{profile.name}</Title>
          <p className="hero-role">Mahasiswa Teknik Informatika <i /> Full-Stack, Frontend & AI/Data</p>
          <p className="hero-intro">Saya membangun aplikasi web dari antarmuka hingga database, dengan fokus pada produk yang jelas, rapi, dan mudah digunakan. Saat ini saya menempuh pendidikan di Politeknik Negeri Semarang.</p>
          <div className="hero-actions">
            <Button icon="arrow" onClick={() => navigate('/projects')}>Lihat proyek</Button>
            {profile.cvUrl && <Button variant="secondary" icon="arrowDown" href={profile.cvUrl} download>Unduh CV</Button>}
            <Button variant="secondary" icon="mail" onClick={() => navigate('/contact')}>Hubungi saya</Button>
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
        <div><span>Fokus</span><strong>Full-Stack Development</strong></div>
        <div><span>Pendidikan</span><strong>D3 Teknik Informatika</strong></div>
        <div><span>Domisili</span><strong>{profile.location}</strong></div>
      </section>

      <section className="section container">
        <SectionHeading eyebrow="Proyek pilihan" title="Karya yang relevan dengan peran yang saya tuju" text="Tiga proyek yang menggambarkan cara saya memahami masalah, membangun aplikasi, dan mengevaluasi hasil." action={<Button variant="text" icon="arrow" onClick={() => navigate('/projects')}>Lihat semua {projects.length} proyek</Button>} />
        <div className="featured-grid">
          {projects.slice(0, 3).map(project => <ProjectCard key={project.id} project={project} />)}
        </div>
      </section>

      <section className="about-preview">
        <div className="container split-layout">
          <div className="about-copy">
            <Eyebrow>Tentang saya</Eyebrow>
            <Title>Belajar dengan membangun produk nyata.</Title>
            <p className="lead">Saya Wika, mahasiswa Teknik Informatika yang senang memahami cara kerja sebuah produk—mulai dari kebutuhan pengguna hingga data di baliknya.</p>
            <p>Saya tertarik pada full-stack development dan penerapan AI/data. Saya belajar paling baik dengan mencoba, meminta masukan, dan memperbaiki setiap versi secara bertahap.</p>
            <Button variant="text" icon="arrow" onClick={() => navigate('/about')}>Kenali saya lebih lanjut</Button>
          </div>
          <div className="quick-facts">
            <div><span>Pendidikan</span><strong>D3 Teknik Informatika</strong></div>
            <div><span>Institusi</span><strong>Politeknik Negeri Semarang</strong></div>
            <div><span>Fokus</span><strong>Full-Stack & AI/Data</strong></div>
            <div><span>Domisili</span><strong>{profile.location}</strong></div>
          </div>
        </div>
      </section>

      <section className="section container home-experience">
        <SectionHeading eyebrow="Pengalaman organisasi" title="Terbiasa bekerja dalam tim dan mengambil tanggung jawab" text="Pengalaman organisasi melatih komunikasi, perencanaan, dan koordinasi yang saya bawa ke dalam kerja pengembangan perangkat lunak." action={<Button variant="text" icon="arrow" onClick={() => navigate('/experience')}>Lihat semua pengalaman</Button>} />
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
          <SectionHeading eyebrow="Keahlian teknis" title="Teknologi yang saya gunakan" text="Kemampuan yang terus berkembang melalui perkuliahan, proyek mandiri, dan latihan berkelanjutan." action={<Button variant="text" icon="arrow" onClick={() => navigate('/skills')}>Lihat semua keahlian</Button>} />
          <div className="skill-bands">
            {skillGroups.slice(0, 4).map(group => <div key={group.title}><Icon name={group.icon} /><span>{group.title}</span><p>{group.items.join(' · ')}</p></div>)}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
