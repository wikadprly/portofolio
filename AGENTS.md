# wika-portfolio

Portofolio pribadi Wika Dwi Aprilia. React 19 + TypeScript + Vite + React Router.

## Development Server

Jalankan `pnpm dev`. Server memakai `$PORT` jika diisi, default `3000`.

- `pnpm dev` — Vite dev server
- `pnpm build` — build produksi ke `dist/`
- `pnpm preview` — pratinjau hasil build
- `pnpm typecheck` — cek tipe tanpa emit
- `pnpm lint` — ESLint
- `pnpm test` — Vitest (sekali jalan)
- `pnpm format` — format dengan oxfmt

## Struktur

- `src/main.tsx` — entrypoint React; membungkus `App` dengan `BrowserRouter`
- `src/App.tsx` — definisi rute, fokus halaman, dan judul dokumen
- `src/index.css` — mengimpor `src/styles/core.css`, `home.css`, `pages.css`, `responsive.css`
- `src/styles/` — design token (CSS variables), reset, gaya per area, dan media query
- `src/types.ts` — tipe domain (`Project`, `ExperienceItem`, `SkillGroup`, `IconName`)
- `src/data/` — konten statis: `projects.ts`, `experience.ts`, `skills.ts`, `navigation.ts`, `metadata.ts`, `profile.ts`, `certifications.ts`
- `src/components/` — komponen bersama: `Navbar`, `Footer`, `Icon`, `Button`, `ProjectCard`, dll.
- `src/pages/` — halaman: `Home`, `About`, `Projects`, `ProjectDetail`, `Experience`, `Skills`, `Contact`, `NotFound`
- `index.html` — shell Vite dengan metadata, font, dan `#root`
- `vite.config.ts` — React dan alias `@` ke `src`
- `vitest.config.ts` — konfigurasi test (jsdom, setup, alias)
- `eslint.config.js` — flat config ESLint (hooks + jsx-a11y)

## Konvensi

- Gunakan alias `@/` untuk impor lintas folder dan impor tipe dengan `import type`.
- Konten (teks proyek, pengalaman, keahlian) berada di `src/data/`, bukan di dalam komponen.
- Navigasi memakai `react-router-dom` (`/`, `/about`, `/projects`, `/projects/:id`, `/experience`, `/skills`, `/contact`, `*` untuk 404).
- Styling memakai kelas kustom di `src/styles/`; Tailwind sudah dihapus.
- Form kontak di `src/pages/Contact.tsx` memvalidasi input lalu mengirim lewat `mailto:` (membuka aplikasi email pengguna); belum memakai layanan pengiriman.
- Tautan proyek opsional: isi `repositoryUrl` / `demoUrl` di `src/data/projects.ts`; tombolnya hanya tampil jika diisi.
- Judul dan deskripsi dokumen per halaman diatur di `src/App.tsx` memakai `src/data/metadata.ts`.
- Identitas dan tautan sosial ada di `src/data/profile.ts`. Isi `cvUrl` (misalnya `/cv/cv.pdf`) untuk menampilkan tombol CV; selama kosong, tombol disembunyikan.
- Tangkapan layar proyek opsional: isi `screenshots` di `src/data/projects.ts`; jika kosong, kartu memakai panel warna.
- Sertifikasi opsional: isi `src/data/certifications.ts`; jika kosong, halaman Tentang menampilkan placeholder.
