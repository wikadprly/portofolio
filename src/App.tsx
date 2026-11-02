import { useEffect, useMemo, useRef } from 'react'
import { Route, Routes, useLocation, useNavigate, useParams } from 'react-router-dom'
import { pageTitles } from '@/data/metadata'
import { projects } from '@/data/projects'
import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import { About } from '@/pages/About'
import { Contact } from '@/pages/Contact'
import { Experience } from '@/pages/Experience'
import { Home } from '@/pages/Home'
import { NotFound } from '@/pages/NotFound'
import { ProjectDetail } from '@/pages/ProjectDetail'
import { Projects } from '@/pages/Projects'
import { Skills } from '@/pages/Skills'

function ProjectRoute() {
  const { id } = useParams()
  const navigate = useNavigate()
  const project = projects.find(item => item.id === id)
  if (!project) return <NotFound />
  return <ProjectDetail project={project} back={() => navigate('/projects')} />
}

export default function App() {
  const { pathname } = useLocation()
  const mainRef = useRef<HTMLElement>(null)
  const firstRender = useRef(true)

  const project = useMemo(() => {
    const match = pathname.match(/^\/projects\/([^/]+)$/)
    return match ? projects.find(item => item.id === decodeURIComponent(match[1])) : undefined
  }, [pathname])

  useEffect(() => {
    document.title = project
      ? `${project.name} — Wika Dwi Aprilia`
      : pageTitles[pathname] ?? pageTitles['*']
  }, [pathname, project])

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    if (firstRender.current) {
      firstRender.current = false
      return
    }
    mainRef.current?.focus({ preventScroll: true })
  }, [pathname])

  return (
    <div className="app">
      <a className="skip-link" href="#main">Lewati ke konten</a>
      <Navbar />
      <main id="main" ref={mainRef} tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectRoute />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
