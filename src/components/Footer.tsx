import { Link } from 'react-router-dom'
import { navItems } from '@/data/navigation'

export function Footer() {
  return (
    <footer>
      <div className="footer-main container">
        <div>
          <Link className="brand footer-brand" to="/">Wika<span>.</span></Link>
          <p>Terus belajar dan membangun produk<br />digital yang bermanfaat.</p>
        </div>
        <div className="footer-nav">
          <span>Jelajahi</span>
          {navItems.slice(1, 5).map(item => <Link key={item.to} to={item.to}>{item.label}</Link>)}
        </div>
        <div className="footer-nav">
          <span>Terhubung</span>
          <a href="https://github.com/wikadprly" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/wikadwiaprilia" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://www.instagram.com/wdprlyy/" target="_blank" rel="noreferrer">Instagram</a>
          <Link to="/contact">Email</Link>
        </div>
      </div>
      <div className="footer-bottom container">
        <span>© 2026 Wika Dwi Aprilia</span>
        <span>Dirancang dan dibangun dengan sepenuh hati.</span>
      </div>
    </footer>
  )
}
