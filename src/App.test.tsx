import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import App from '@/App'

function renderAt(path = '/') {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  )
}

describe('routing', () => {
  it('menampilkan beranda di /', () => {
    renderAt('/')
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/wika dwi aprilia/i)
  })

  it('menampilkan detail proyek berdasarkan id', () => {
    renderAt('/projects/grosir-track')
    expect(screen.getByRole('heading', { level: 1, name: /grosir track/i })).toBeInTheDocument()
  })

  it('menampilkan 404 untuk rute yang tidak dikenal', () => {
    renderAt('/tidak-ada')
    expect(screen.getByRole('heading', { level: 1, name: /tidak ditemukan/i })).toBeInTheDocument()
  })

  it('merender studi kasus sebagai tautan dengan href asli', () => {
    renderAt('/projects')
    const [first] = screen.getAllByRole('link', { name: /lihat studi kasus/i })
    expect(first).toHaveAttribute('href', '/projects/grosir-track')
  })

  it('berpindah ke halaman tentang lewat navigasi', async () => {
    const user = userEvent.setup()
    renderAt('/')
    const nav = screen.getByRole('navigation', { name: 'Navigasi utama' })
    await user.click(within(nav).getByRole('link', { name: 'Tentang' }))
    expect(screen.getByRole('heading', { level: 1, name: /mari terhubung & berkolaborasi/i })).toBeInTheDocument()
  })
})
