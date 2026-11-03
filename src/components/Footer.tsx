import { Link } from 'react-router-dom'
import { navItems } from '@/data/navigation'
import { profile } from '@/data/profile'

export function Footer() {
  return (
    <footer>
      <div className="footer-main container">
        <div>
          <Link className="brand footer-brand" to="/">Wika<span>.</span></Link>
          <p>Exploring technology, building ideas.<br />Semarang, Indonesia.</p>
        </div>
        <div className="footer-nav">
          <span>Jelajahi</span>
          {navItems.slice(1, 5).map(item => <Link key={item.to} to={item.to}>{item.label}</Link>)}
        </div>
        <div className="footer-nav">
          <span>Terhubung</span>
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={profile.instagram} target="_blank" rel="noreferrer">Instagram</a>
          <Link to="/contact">Email</Link>
          {profile.cvUrl && <a href={profile.cvUrl} download>Unduh CV</a>}
        </div>
      </div>
      <div className="footer-bottom container">
        <span>© 2026 {profile.name}</span>
        <span>Dibangun dengan React dan TypeScript.</span>
      </div>
    </footer>
  )
}
