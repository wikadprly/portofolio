import portrait from '@/assets/foto-wika.jpg'
import { organizationalExperience } from '@/data/experience'
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

const marqueeItems = ['React', 'Next.js', 'TypeScript', 'Laravel', 'PostgreSQL', 'Prisma', 'Tailwind CSS', 'Python', 'Git']

export function Home() {
  return (
    <>
      <section className="hero container">
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-copy" data-reveal>
          <div className="availability"><span /> Terbuka untuk magang & kolaborasi</div>
          <Eyebrow>{profile.role}</Eyebrow>
          <Title as="h1">{profile.name}</Title>
          <p className="hero-role">{profile.tagline}</p>
          <p className="hero-intro">Mahasiswa Teknik Informatika di Politeknik Negeri Semarang yang tertarik pada teknologi, pengembangan perangkat lunak, dan hal-hal baru di bidang digital. Belajar paling banyak lewat praktik: mengerjakan proyek, terlibat di kegiatan, lalu mengulang lagi dengan perspektif yang berbeda.</p>
          <div className="hero-actions">
            <Button icon="arrow" to="/projects">Lihat proyek</Button>
            {profile.cvUrl && <Button variant="secondary" icon="arrowDown" href={profile.cvUrl} download>Unduh CV</Button>}
            <Button variant="secondary" icon="arrow" to="/about">Tentang saya</Button>
          </div>
          <div className="social-row">
            <a href={profile.github} target="_blank" rel="noreferrer"><Icon name="github" />GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer"><Icon name="linkedin" />LinkedIn</a>
            <a href={profile.instagram} target="_blank" rel="noreferrer"><Icon name="instagram" />Instagram</a>
          </div>
        </div>
        <div className="portrait-wrap" data-reveal>
          <div className="portrait">
            <img className="portrait-image" src={portrait} alt="Foto Wika Dwi Aprilia" />
          </div>
          <div className="portrait-caption"><span>{profile.name}</span><small>{profile.origin}</small></div>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[0, 1].map((group) => (
            <div className="marquee-group" key={group}>
              {marqueeItems.map((item) => <span key={item}>{item}</span>)}
            </div>
          ))}
        </div>
      </div>

      <section className="portfolio-strip container" aria-label="Ringkasan profil" data-reveal>
        <div><span>Pendidikan</span><strong>D3 Teknik Informatika</strong></div>
        <div><span>Institusi</span><strong>Politeknik Negeri Semarang</strong></div>
        <div><span>Minat</span><strong>Teknologi & digital</strong></div>
        <div><span>Domisili</span><strong>Cilacap · Semarang</strong></div>
      </section>

      <section className="section container">
        <SectionHeading eyebrow="Proyek pilihan" title="Beberapa hal yang sedang dan pernah saya kerjakan." text="Dikerjakan sendiri, bersama tim, atau sebagai bagian dari kegiatan akademik." action={<Button variant="text" icon="arrow" to="/projects">Lihat semua proyek</Button>} />
        <div className="featured-grid">
          {projects.slice(0, 3).map(project => <ProjectCard key={project.id} project={project} />)}
        </div>
      </section>

      <section className="about-preview">
        <div className="container split-layout">
          <div className="about-copy" data-reveal>
            <Eyebrow>Tentang saya</Eyebrow>
            <Title>Mengenal lebih jauh.</Title>
            <p className="lead">Saya menempuh pendidikan D3 Teknik Informatika di Politeknik Negeri Semarang.</p>
            <p>Selama berkuliah, saya terlibat dalam proyek akademik, kegiatan organisasi, dan pengembangan kemampuan di bidang teknologi. Saya menikmati kesempatan mencoba hal baru, bertukar ide, dan mengembangkan sesuatu bersama orang lain.</p>
            <Button variant="text" icon="arrow" to="/about">Selengkapnya tentang saya</Button>
          </div>
          <div className="quick-facts" data-reveal>
            <div><span>Pendidikan</span><strong>D3 Teknik Informatika</strong></div>
            <div><span>Institusi</span><strong>Politeknik Negeri Semarang</strong></div>
            <div><span>Minat</span><strong>Teknologi & digital</strong></div>
            <div><span>Domisili</span><strong>Cilacap (asal) · Semarang (kuliah)</strong></div>
          </div>
        </div>
      </section>

      <section className="section container home-experience">
        <SectionHeading eyebrow="Pengalaman organisasi" title="Belajar melalui pengalaman dan kolaborasi." text="Perencanaan kegiatan, koordinasi tim, dan tanggung jawab yang dibagi bersama." action={<Button variant="text" icon="arrow" to="/experience">Lihat semua pengalaman</Button>} />
        <div className="experience-preview">
          {organizationalExperience.slice(0, 3).map((item) => (
            <article key={item.role}>
              <span className="meta">{item.period}</span>
              <div><Title as="h3">{item.role}</Title><p>{item.org}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="skills-preview">
        <div className="container">
          <SectionHeading eyebrow="Eksplorasi" title="Hal-hal yang sedang saya pelajari." text="Dari perkuliahan, proyek, dan latihan sendiri." action={<Button variant="text" icon="arrow" to="/skills">Lihat perjalanan belajar</Button>} />
          <div className="skill-bands">
            {skillGroups.slice(0, 4).map(group => <div key={group.title} data-reveal><Icon name={group.icon} /><span>{group.title}</span><p>{group.items.join(' · ')}</p></div>)}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
