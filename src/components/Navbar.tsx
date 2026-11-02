import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navItems } from '@/data/navigation'
import { Icon } from '@/components/Icon'

export function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <nav className="navbar" aria-label="Navigasi utama">
      <div className="nav-inner container">
        <Link className="brand" to="/" aria-label="Kembali ke beranda" onClick={() => setOpen(false)}>Wika<span>.</span></Link>
        <div className="desktop-nav">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
        <div className="nav-actions">
          <button className="menu-button" onClick={() => setOpen(!open)} aria-label={open ? 'Tutup menu' : 'Buka menu'} aria-expanded={open}><Icon name={open ? 'x' : 'menu'} size={22} /></button>
        </div>
      </div>
      {open && (
        <div className="mobile-nav">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={() => setOpen(false)}
            >
              {item.label}<Icon name="chevron" />
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  )
}
