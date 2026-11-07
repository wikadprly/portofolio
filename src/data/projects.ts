import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'grosir-track',
    name: 'Grosir Track',
    subtitle: 'Buku Bon Digital untuk Usaha Grosir',
    status: 'Personal project — prototype',
    description:
      'Aplikasi PWA untuk mencatat transaksi, pembayaran, dan piutang pelanggan pada usaha grosir.',
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Prisma',
      'PostgreSQL',
      'PWA',
    ],
    type: 'Proyek Pribadi',
    category: 'Web Development',
    code: 'GT',
    tone: 'blue',
    background:
      'Pencatatan pada usaha grosir keluarga masih menggunakan buku bon. Ketika transaksi bertambah, pencarian riwayat pelanggan dan pemantauan sisa tagihan menjadi lebih sulit. Grosir Track dibuat untuk mendigitalisasi proses tersebut dengan alur yang tetap sederhana bagi pengguna.',
    objectives: [
      'Mencatat transaksi pelanggan dan beberapa barang dalam satu transaksi',
      'Mencatat pembayaran dan memperbarui sisa tagihan berdasarkan riwayat transaksi',
      'Mengelola data pelanggan serta riwayat bon dalam satu aplikasi',
      'Menyediakan laporan transaksi dan ekspor laporan bulanan',
      'Mendukung penggunaan melalui perangkat mobile dan mode PWA',
    ],
    role:
      'Saya mengembangkan aplikasi secara mandiri, mulai dari identifikasi kebutuhan pengguna dan perancangan alur, hingga pemodelan data serta implementasi antarmuka dan logika aplikasi.',
    implementation:
      'Aplikasi menggunakan Next.js, React, TypeScript, Prisma, dan PostgreSQL. Fitur yang tersedia mencakup pencatatan barang dan pembayaran, pengelolaan pelanggan, laporan bulanan, backup dan import data, serta ekspor laporan ke Excel.',
    challenges:
      'Tantangan utamanya adalah menjaga agar saldo pelanggan konsisten saat terjadi transaksi baru, pembayaran sebagian, maupun pelunasan. Riwayat transaksi juga perlu tetap akurat meskipun harga barang berubah setelah transaksi dibuat.',
    screenshots: [
      {
        src: '/projects/grosir-track/beranda.png',
        alt: 'Dashboard Grosir Track',
      },
    ],
    demoUrl: 'https://grosir-track.vercel.app',
  },
  {
    id: 'digital-wedding',
    name: 'Digital Wedding',
    subtitle: 'Website Undangan Pernikahan Digital',
    status: 'Proyek pribadi',
    description:
      'Website undangan pernikahan digital dengan galeri foto, cerita pasangan, informasi acara, dan ucapan tamu.',
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'PostgreSQL',
    ],
    type: 'Proyek Pribadi',
    category: 'Web Development',
    code: 'DW',
    tone: 'powder',
    background:
      'Undangan digital perlu menyajikan informasi acara dan cerita pasangan dalam format yang mudah dibuka melalui perangkat mobile. Proyek ini mengembangkan website undangan dengan tampilan visual dan bagian interaktif untuk tamu.',
    objectives: [
      'Menyajikan informasi acara dan profil pasangan dalam satu website',
      'Menampilkan galeri foto dengan tampilan yang nyaman digunakan',
      'Menyediakan bagian ucapan tamu dengan navigasi halaman',
      'Mendukung konten berbahasa Indonesia dan Inggris',
    ],
    role:
      'Saya mengembangkan dan menyempurnakan beberapa bagian website, termasuk lightbox galeri, paginasi ucapan, navigasi antarbagian, dukungan bahasa, serta halaman penanganan error.',
    implementation:
      'Website menggunakan Next.js, React, TypeScript, dan Tailwind CSS. Fitur yang saya kerjakan mencakup lightbox galeri dengan navigasi keyboard dan swipe, paginasi ucapan, komponen dekorasi bersama, serta perbaikan navigasi dan tampilan responsif.',
    challenges:
      'Tantangannya adalah menjaga pengalaman visual tetap konsisten di berbagai ukuran layar sekaligus memastikan interaksi galeri dan navigasi halaman bekerja dengan baik. Saya juga memperbaiki perilaku animasi dan membersihkan aset yang tidak lagi digunakan.',
    screenshots: [
      {
        src: '/projects/digital-wedding/beranda.png',
        alt: 'Beranda Digital Wedding',
      },
    ],
    demoUrl: 'https://www.risqirema.web.id/',
  },
  {
    id: 'cahaya-cargo',
    name: 'Cahaya Cargo Express',
    subtitle: 'Website Informasi dan Layanan Logistik',
    status: 'Proyek klien',
    description:
      'Website layanan logistik yang menyajikan informasi layanan, tarif, agen, pelacakan paket, dan halaman admin.',
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Prisma',
      'PostgreSQL',
    ],
    type: 'Proyek Klien',
    category: 'Web Development',
    code: 'CCE',
    tone: 'navy',
    background:
      'Informasi layanan, tarif, dan lokasi agen perlu tersedia dalam satu tempat yang mudah diakses pelanggan. Website Cahaya Cargo Express dikembangkan sebagai pusat informasi layanan sekaligus sarana pengelolaan konten.',
    objectives: [
      'Menyajikan informasi layanan pengiriman dan tarif',
      'Menyediakan halaman pelacakan paket',
      'Menampilkan informasi agen untuk membantu pelanggan mencari layanan',
      'Menyediakan halaman admin untuk mengelola informasi website',
    ],
    role:
      'Saya terlibat dalam penyusunan struktur halaman, pengembangan antarmuka website, dan implementasi halaman admin. Saya juga mengerjakan integrasi antarmuka dengan data layanan yang dikelola sistem.',
    implementation:
      'Website dibangun dengan Next.js, TypeScript, dan Tailwind CSS. Prisma digunakan untuk mengakses data pada PostgreSQL, termasuk data tarif dan agen serta informasi yang ditampilkan pada website.',
    challenges:
      'Tantangannya adalah memenuhi kebutuhan dua jenis pengguna: pelanggan yang mencari informasi dengan cepat dan admin yang perlu mengelola konten. Struktur halaman dan data perlu dibuat konsisten untuk keduanya.',
      screenshots: [
      {
        src: '/projects/CahayaCargoExpress/beranda.png',
        alt: 'Beranda Cahaya Cargo Express',
      },
    ],
    demoUrl: 'https://cce-portofolio.vercel.app',
  },
  {
    id: 'tomato-ai',
    name: 'TomatoAI',
    subtitle: 'Klasifikasi Kematangan Tomat',
    status: 'Proyek kelompok akademik',
    description:
      'Aplikasi klasifikasi tingkat kematangan tomat dari citra digital menggunakan pengolahan gambar dan model deep learning.',
    technologies: [
      'Python',
      'OpenCV',
      'TensorFlow',
      'MobileNetV2',
      'FastAPI',
      'Next.js',
    ],
    type: 'Proyek Kelompok Akademik',
    category: 'AI / Machine Learning',
    code: 'AI',
    tone: 'sage',
    background:
      'Penilaian kematangan tomat secara manual dapat berbeda antarorang. TomatoAI mengeksplorasi penggunaan pengolahan citra dan machine learning untuk mengklasifikasikan tingkat kematangan berdasarkan gambar.',
    objectives: [
      'Menyiapkan dataset gambar tomat berdasarkan kategori kematangan',
      'Melakukan preprocessing citra sebelum pelatihan model',
      'Menerapkan transfer learning dengan MobileNetV2',
      'Menghubungkan proses klasifikasi dengan aplikasi pengguna',
    ],
    role:
      'Saya menjadi koordinator tim AI/ML dan berkontribusi pada pengolahan citra serta pengembangan backend. Kontribusi saya mencakup validasi input tomat, pilihan mode input model, skrip evaluasi mode input, penanganan error, dokumentasi, dan panduan deployment.',
    implementation:
      'Python, OpenCV, TensorFlow, dan MobileNetV2 digunakan pada pipeline klasifikasi dan pengolahan citra. Backend FastAPI menyediakan endpoint prediksi, sedangkan frontend Next.js menyediakan antarmuka pengguna. Pipeline mendukung perbandingan input gambar asli, crop, dan hasil segmentasi.',
    challenges:
      'Variasi pencahayaan, sudut pengambilan gambar, dan kondisi visual tomat dapat memengaruhi hasil klasifikasi. Karena itu, kualitas dan variasi dataset menjadi bagian penting dalam proses pengembangan model. Sistem juga perlu menangani gambar yang bukan tomat atau tidak valid.',
    screenshots: [
      {
        src: '/projects/tomato-ai/beranda.png',
        alt: 'Halaman utama TomatoAI untuk memulai klasifikasi kematangan tomat',
      },
    ],
  },
  {
    id: 'reconnaissance',
    name: 'Reconnaissance Detection & Mitigation',
    subtitle: 'Penelitian Tugas Akhir',
    status: 'Penelitian berlangsung — dashboard read-only',
    description:
      'Penelitian deteksi aktivitas reconnaissance dari data NetFlow menggunakan Random Forest, dengan dashboard untuk memantau hasil deteksi.',
    technologies: [
      'Python',
      'scikit-learn',
      'FastAPI',
      'Next.js',
      'PostgreSQL',
      'NetFlow',
      'MikroTik',
    ],
    type: 'Tugas Akhir / Penelitian',
    category: 'AI / Machine Learning',
    code: 'RF',
    tone: 'steel',
    background:
      'Reconnaissance merupakan tahap pengumpulan informasi jaringan yang dapat mendahului serangan lanjutan. Penelitian ini mengeksplorasi penggunaan data NetFlow dan model machine learning untuk mendeteksi aktivitas tersebut serta menyajikan hasilnya melalui dashboard.',
    objectives: [
      'Mengolah data NetFlow dan menentukan fitur untuk proses klasifikasi',
      'Melatih serta mengevaluasi model Random Forest',
      'Menyediakan layanan API untuk inferensi dan metrik model',
      'Menampilkan hasil deteksi dan informasi model pada dashboard',
      'Mengevaluasi rancangan integrasi dengan lingkungan MikroTik',
    ],
    role:
      'Dalam penelitian ini, saya terlibat dalam perancangan eksperimen, pengolahan data NetFlow, pengembangan dan evaluasi model, serta pengembangan dashboard. Saya juga mengerjakan integrasi komponen sistem sesuai tahap penelitian.',
    implementation:
      'Layanan Python menggunakan FastAPI dan scikit-learn untuk menyediakan inferensi serta metrik model. Dashboard Next.js menampilkan data melalui lapisan layanan. Pada tahap saat ini, dashboard berada dalam fase read-only dan jalur eksekusi mitigasi otomatis belum aktif.',
    challenges:
      'Tantangan penelitian mencakup pemilihan fitur yang relevan, konsistensi preprocessing antara pelatihan dan inferensi, serta evaluasi false positive. Integrasi mitigasi juga memerlukan pengujian dan validasi sebelum dapat dinyatakan berfungsi.',
  },
  {
    id: '3k-dental',
    name: '3K Dental',
    subtitle: 'Sistem Layanan Klinik Gigi',
    status: 'Proyek kolaborasi antarkelompok',
    description:
      'Sistem layanan klinik gigi yang mencakup aplikasi Flutter untuk pelanggan dan antarmuka web untuk admin. Proyek dikerjakan oleh dua kelompok dengan lingkup fitur berbeda yang saling terhubung.',
    technologies: [
      'Flutter',
      'Flutter Web',
      'Laravel',
      'REST API',
      'Midtrans',
    ],
    type: 'Proyek Akademik',
    category: 'Proyek Akademik',
    code: '3K',
    tone: 'powder',
    background:
      'Sistem klinik mencakup kebutuhan pelanggan dan admin. Proyek 3K Dental menggabungkan aplikasi pelanggan untuk menggunakan layanan klinik dengan antarmuka web admin untuk bagian layanan online.',
    objectives: [
      'Mendukung proses reservasi klinik bagi pelanggan',
      'Menyediakan antarmuka web untuk kebutuhan admin dan layanan online',
      'Menghubungkan bagian aplikasi dengan backend melalui REST API',
      'Mendukung proses pembayaran reservasi',
    ],
    role:
      'Proyek ini dikerjakan oleh dua kelompok. Kelompok saya menangani bagian reservasi klinik pada aplikasi pelanggan. Kontribusi saya mencakup integrasi alur pembayaran Midtrans, komunikasi service dan provider, tampilan WebView pembayaran, pemeriksaan status pembayaran, serta halaman konfirmasi reservasi. Kelompok lain menangani bagian layanan online/admin.',
    implementation:
      'Sistem terdiri dari aplikasi Flutter untuk pelanggan dan antarmuka web berbasis Flutter untuk admin. Bagian aplikasi dan web terhubung dengan backend Laravel melalui REST API. Pada alur yang saya kerjakan, data reservasi dikirim ke backend, pembayaran dibuka melalui Midtrans, lalu status transaksi diperiksa sebelum konfirmasi ditampilkan kepada pelanggan.',
    challenges:
      'Tantangannya adalah menyelaraskan data reservasi dan status pembayaran antara aplikasi pelanggan, backend, dan penyedia pembayaran. Koordinasi antarkelompok juga diperlukan agar aplikasi pelanggan, bagian web admin, dan backend dapat terhubung sesuai kebutuhan.',
    screenshots: [
      {
        src: '/projects/3kdental/pelanggan.png',
        alt: 'Beranda 3K Dental untuk pelanggan',
      },
      {
        src: '/projects/3kdental/admin.png',
        alt: 'Beranda 3K Dental untuk admin',
      },
    ],
    links: [
      {
        label: 'Aplikasi pelanggan',
        href: 'https://klinikgigi-wika.netlify.app',
      },
      {
        label: 'Web admin',
        href: 'https://web-production-3e9a.up.railway.app/admin/login',
      },
    ],
  },
  {
    id: 'sigap',
    name: 'SIGAP',
    subtitle: 'Sistem Informasi Akademik',
    status: 'Proyek akademik',
    description:
      'Sistem informasi untuk mencatat kegiatan mahasiswa dan mendukung pemantauan serta peninjauan data berdasarkan peran pengguna.',
    technologies: [
      'Aplikasi Web',
      'Sistem Informasi',
    ],
    type: 'Proyek Akademik',
    category: 'Proyek Akademik',
    code: 'SG',
    tone: 'sand',
    background:
      'Informasi kegiatan mahasiswa perlu terdokumentasi dan mudah ditinjau oleh pihak terkait. SIGAP dirancang untuk memusatkan pencatatan kegiatan serta mendukung proses pemantauan oleh mahasiswa dan dosen.',
    objectives: [
      'Memusatkan pencatatan riwayat kegiatan mahasiswa',
      'Mendukung pemantauan perkembangan kegiatan oleh dosen',
      'Menampilkan status kegiatan dan proses peninjauan',
      'Menyesuaikan akses dan tampilan dengan peran pengguna',
    ],
    role:
      'Saya membantu memahami kebutuhan sistem, menyusun alur halaman, dan mengembangkan beberapa bagian antarmuka, terutama modul riwayat dan monitoring.',
    implementation:
      'Alur sistem disusun berdasarkan status kegiatan dan peran pengguna. Antarmuka menyediakan bagian untuk melihat riwayat serta mendukung proses pemantauan dan peninjauan.',
    challenges:
      'Tantangannya adalah menerjemahkan proses akademik dan kebutuhan tiap peran ke dalam alur yang mudah dipahami. Status kegiatan perlu ditampilkan dengan jelas agar proses pemantauan tidak membingungkan.',
    screenshots: [
      {
        src: '/projects/sigap/beranda.png',
        alt: 'Beranda SIGAP',
      },
      {
        src: '/projects/sigap/dashboardma.png',
        alt: 'Dashboard SIGAP',
      },
    ],
    demoUrl: 'https://sigap-polines.vercel.app',
  },
  {
    id: 'godigital-creative',
    name: 'GoDigital Creative',
    subtitle: 'Website Layanan Kreatif Digital',
    status: 'Proyek kelompok akademik',
    description:
      'Website promosi layanan kreatif digital untuk memperkenalkan layanan branding dan pembuatan konten bagi brand lokal serta UMKM.',
    technologies: [
      'TypeScript',
      'Aplikasi Web',
      'Desain Konten',
    ],
    type: 'Proyek Mata Kuliah',
    category: 'Proyek Akademik',
    code: 'GD',
    tone: 'powder',
    background:
      'Brand lokal dan UMKM dapat membutuhkan dukungan branding dan konten digital. GoDigital Creative dikembangkan sebagai konsep bisnis dan website untuk memperkenalkan layanan kreatif kepada calon pelanggan.',
    objectives: [
      'Memperkenalkan layanan kreatif digital yang ditawarkan',
      'Menyajikan informasi layanan dan harga',
      'Menampilkan contoh portofolio desain',
      'Memudahkan calon pelanggan menghubungi penyedia layanan',
    ],
    role:
      'Proyek ini dikembangkan secara berkelompok untuk mata kuliah Technopreneurship. Kontribusi saya berfokus pada penyusunan konten layanan dan pengembangan tampilan halaman website.',
    implementation:
      'Website menyajikan informasi brand, katalog layanan, harga, contoh portofolio, dan akses konsultasi. Konten disusun untuk membantu pengunjung memahami layanan sebelum menghubungi penyedia jasa.',
    challenges:
      'Tantangannya adalah menjelaskan layanan kreatif secara spesifik dan mudah dipahami. Informasi perlu membantu calon pelanggan membedakan pilihan layanan serta memahami contoh hasil yang ditawarkan.',
    screenshots: [
      {
        src: '/projects/godigital-creative/beranda.png',
        alt: 'Beranda GoDigital Creative',
      },
    ],
    demoUrl: 'https://www.godigitalcreative.web.id/',
  },

]