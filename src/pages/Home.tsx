import { useNavigate } from 'react-router-dom'
import portrait from '@/assets/foto-wika.jpg'
import { experience } from '@/data/experience'
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
          <Eyebrow>Halo, aku Wika</Eyebrow>
          <Title as="h1">Mengubah ide menjadi<br /><em>produk yang berguna.</em></Title>
          <p className="hero-role">Mahasiswa Teknik Informatika <i /> Calon Full-Stack Developer</p>
          <p className="hero-intro">Saya membangun produk web mulai dari antarmuka hingga database, serta mengeksplorasi AI melalui proyek akademik. Saat ini saya menempuh pendidikan di Politeknik Negeri Semarang.</p>
          <div className="hero-actions">
            <Button icon="arrow" onClick={() => navigate('/projects')}>Lihat proyek pilihan</Button>
            <Button variant="secondary" icon="mail" onClick={() => navigate('/contact')}>Hubungi saya</Button>
          </div>
          <div className="social-row">
            <a href="https://github.com/wikadprly" target="_blank" rel="noreferrer"><Icon name="github" />GitHub</a>
            <a href="https://www.linkedin.com/in/wikadwiaprilia" target="_blank" rel="noreferrer"><Icon name="linkedin" />LinkedIn</a>
            <a href="https://www.instagram.com/wdprlyy/" target="_blank" rel="noreferrer"><Icon name="instagram" />Instagram</a>
          </div>
        </div>
        <div className="portrait-wrap">
          <div className="portrait">
            <img className="portrait-image" src={portrait} alt="Foto Wika Dwi Aprilia" />
            <div className="portrait-caption"><span>Wika Dwi Aprilia</span><small>Mahasiswa Teknik Informatika</small></div>
          </div>
          <div className="location-card"><Icon name="location" /><span><small>Berdomisili di</small>Semarang, Indonesia</span></div>
          <span className="portrait-index">01</span>
        </div>
      </section>

      <section className="portfolio-strip container" aria-label="Ringkasan portofolio">
        <div><span>Karya pilihan</span><strong>{projects.length} proyek</strong></div>
        <div><span>Fokus saat ini</span><strong>Full-Stack Development</strong></div>
        <div><span>Domisili</span><strong>Semarang, Indonesia</strong></div>
        <div><span>Sedang dipelajari</span><strong>Asah × Dicoding 2026</strong></div>
      </section>

      <section className="section container">
        <SectionHeading eyebrow="Studi kasus pilihan" title="Proyek yang pernah saya kerjakan" text="Tiga proyek yang menggambarkan cara saya memahami produk, mengembangkan aplikasi full-stack, dan mengeksplorasi teknologi." action={<Button variant="text" icon="arrow" onClick={() => navigate('/projects')}>Lihat semua {projects.length} proyek</Button>} />
        <div className="featured-grid">
          {projects.slice(0, 3).map(project => <ProjectCard key={project.id} project={project} />)}
        </div>
      </section>

      <section className="about-preview">
        <div className="container split-layout">
          <div className="about-marker"><span>02</span><div className="monogram">W</div></div>
          <div className="about-copy">
            <Eyebrow>Sedikit tentang saya</Eyebrow>
            <Title>Saya belajar dengan berkarya.</Title>
            <p className="lead">Saya Wika, mahasiswa Teknik Informatika yang senang memahami cara kerja sebuah produk—mulai dari ide awal hingga data di baliknya.</p>
            <p>Saya tertarik pada full-stack development dan penerapan AI. Saya belajar paling baik dengan mencoba, bertanya, dan memperbaiki setiap versi secara bertahap.</p>
            <Button variant="text" icon="arrow" onClick={() => navigate('/about')}>Kenali saya lebih lanjut</Button>
          </div>
          <div className="quick-facts">
            <div><span>Pendidikan</span><strong>D3 Teknik Informatika</strong></div>
            <div><span>Institusi</span><strong>Politeknik Negeri Semarang</strong></div>
            <div><span>Fokus</span><strong>Full-Stack & AI Development</strong></div>
          </div>
        </div>
      </section>

      <section className="section container home-experience">
        <SectionHeading eyebrow="Pengalaman di luar kode" title="Belajar memimpin dan berkolaborasi" text="Pengalaman organisasi membantu saya berkomunikasi dengan jelas, bertanggung jawab, dan menjadi rekan tim yang dapat diandalkan." />
        <div className="experience-preview">
          {experience.slice(0, 3).map((item, i) => (
            <article key={item.role}>
              <span className="list-index">0{i + 1}</span>
              <div><span className="meta">{item.period}</span><Title as="h3">{item.role}</Title><p>{item.org}</p></div>
              <Icon name="arrow" />
            </article>
          ))}
        </div>
        <Button variant="secondary" icon="arrow" onClick={() => navigate('/experience')}>Lihat pengalaman saya</Button>
      </section>

      <section className="skills-preview">
        <div className="container">
          <SectionHeading eyebrow="Kemampuan teknis" title="Teknologi yang saya gunakan" text="Kemampuan yang terus berkembang melalui perkuliahan, proyek mandiri, dan latihan berkelanjutan." action={<Button variant="text" icon="arrow" onClick={() => navigate('/skills')}>Lihat semua keahlian</Button>} />
          <div className="skill-bands">
            {skillGroups.slice(0, 4).map(group => <div key={group.title}><Icon name={group.icon} /><span>{group.title}</span><p>{group.items.join(' · ')}</p></div>)}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
