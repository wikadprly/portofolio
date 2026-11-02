import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Contact } from '@/pages/Contact'

describe('form kontak', () => {
  it('menampilkan pesan error dan memfokuskan field pertama saat form kosong', async () => {
    const user = userEvent.setup()
    render(<Contact />)

    await user.click(screen.getByRole('button', { name: /buka aplikasi email/i }))

    expect(screen.getAllByRole('alert')).toHaveLength(4)
    expect(screen.getByPlaceholderText('Nama Anda')).toHaveFocus()
  })

  it('menghapus pesan error saat pengguna mulai mengetik', async () => {
    const user = userEvent.setup()
    render(<Contact />)

    await user.click(screen.getByRole('button', { name: /buka aplikasi email/i }))
    expect(screen.getByText('Nama minimal 2 karakter.')).toBeInTheDocument()

    await user.type(screen.getByPlaceholderText('Nama Anda'), 'Wika')

    expect(screen.queryByText('Nama minimal 2 karakter.')).not.toBeInTheDocument()
  })
})
