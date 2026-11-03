import { useEffect, useMemo, useRef } from 'react'
import { Route, Routes, useLocation, useParams } from 'react-router-dom'
import { pageMeta } from '@/data/metadata'
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
  const project = projects.find(item => item.id === id)
  if (!project) return <NotFound />
  return <ProjectDetail project={project} />
}

export default function App() {
  const { pathname } = useLocation()
  const mainRef = useRef<HTMLElement>(null)
  const firstRender = useRef(true)

  const project = useMemo(() => {
    const match = pathname.match(/^\/projects\/([^/]+)$/)
    return match ? projects.find(item => item.id === decodeURIComponent(match[1])) : undefined
  }, [pathname])

  const meta = useMemo(() => {
    if (project) {
      return {
        title: `${project.name} — Wika Dwi Aprilia`,
        description: project.description,
      }
    }
    return pageMeta[pathname] ?? pageMeta['*']
  }, [pathname, project])

  useEffect(() => {
    document.title = meta.title
    const selectors: Array<[string, string]> = [
      ['meta[name="description"]', meta.description],
      ['meta[property="og:title"]', meta.title],
      ['meta[property="og:description"]', meta.description],
      ['meta[name="twitter:title"]', meta.title],
      ['meta[name="twitter:description"]', meta.description],
    ]
    for (const [selector, content] of selectors) {
      document.querySelector(selector)?.setAttribute('content', content)
    }
  }, [meta])

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
