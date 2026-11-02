# Wika Portfolio

Portofolio pribadi **Wika Dwi Aprilia** — mahasiswa Teknik Informatika, Politeknik Negeri Semarang. Berisi profil, studi kasus proyek, pengalaman organisasi, keahlian, dan kontak.

Dibangun dengan React 19, TypeScript, Vite, dan React Router.

## Menjalankan secara lokal

Prasyarat: Node.js 22+ dan pnpm 10.

```bash
corepack enable
pnpm install
pnpm dev
```

Buka [http://localhost:3000](http://localhost:3000). Port dapat diubah lewat variabel `PORT`.

## Perintah

| Perintah | Fungsi |
| --- | --- |
| `pnpm dev` | Menjalankan dev server |
| `pnpm build` | Build produksi ke `dist/` |
| `pnpm preview` | Pratinjau hasil build |
| `pnpm typecheck` | Cek tipe TypeScript |
| `pnpm lint` | Menjalankan ESLint |
| `pnpm test` | Menjalankan Vitest sekali jalan |
| `pnpm format` | Format dengan oxfmt |

## Rute

| Path | Halaman |
| --- | --- |
| `/` | Beranda |
| `/about` | Tentang |
| `/projects` | Daftar proyek |
| `/projects/:id` | Detail proyek |
| `/experience` | Pengalaman |
| `/skills` | Keahlian |
| `/contact` | Kontak |
| `*` | 404 |

## Struktur

```
src/
├── assets/      # gambar (foto profil)
├── components/  # komponen bersama
├── data/        # konten: proyek, pengalaman, keahlian, navigasi, metadata
├── pages/       # halaman per rute
├── styles/      # design token, core, home, pages, responsive
├── types.ts     # tipe domain
├── App.tsx      # definisi rute
├── main.tsx     # entrypoint React
└── index.css    # impor stylesheet
```

Konten teks (proyek, pengalaman, keahlian) diubah di `src/data/`, bukan di dalam komponen.

## Deployment

Hasil build statis ada di `dist/`. Karena memakai `BrowserRouter`, hosting perlu **SPA fallback**: arahkan semua request yang tidak menemukan file ke `index.html`.

- Netlify: buat `public/_redirects` berisi `/* /index.html 200`.
- Vercel: tambahkan rewrite `{ "source": "/(.*)", "destination": "/index.html" }`.
- Nginx: `try_files $uri $uri/ /index.html;`.

## Kontak

- Email: [wikkadwia@gmail.com](mailto:wikkadwia@gmail.com)
- GitHub: [@wikadprly](https://github.com/wikadprly)
- LinkedIn: [wikadwiaprilia](https://www.linkedin.com/in/wikadwiaprilia)
- Instagram: [@wdprlyy](https://www.instagram.com/wdprlyy/)
