export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export const projectsData: Project[] = [
  {
    id: '1',
    title: 'Graphic Standard Manual HMD Teknik Elektro dan Informatika 2024',
    description:
      'Penyusunan Graphic Standard Manual (GSM) sebagai pedoman identitas visual HMD Teknik Elektro dan Informatika 2024. Mencakup penggunaan logo, warna, tipografi, grid, serta aturan penerapan elemen visual untuk menjaga konsistensi branding organisasi.',
    image: '/images/project1.png',
    tags: ['Figma'],
    demoUrl:
      'https://www.figma.com/design/s6WVwB2Abt3WYa1rEMp4iB/GSM?node-id=0-1&t=Ko4wg3D0XVCan8xp-1',
  },
  {
    id: '2',
    title: 'Library Management Basic App',
    description:
      'Aplikasi manajemen perpustakaan berbasis Flutter yang terintegrasi dengan Supabase untuk mengelola data buku, proses peminjaman dan pengembalian, autentikasi pengguna, serta dashboard admin secara real-time.',
    image: '/images/project2.png',
    tags: ['Flutter', 'Supabase', 'Education Technology'],
    githubUrl: 'https://github.com/avid-maulana/Perpustakaaan',
  },
  {
    id: '3',
    title: 'Prototype App - Makan Kuy',
    description:
      'Prototype aplikasi mobile untuk memudahkan mahasiswa menemukan, memesan, dan mengeksplorasi makanan di sekitar kampus. Dirancang dengan pendekatan UI/UX yang mengutamakan kemudahan navigasi dan pengalaman pengguna.',
    image: '/images/project3.png',
    tags: ['Figma', 'UI/UX', 'Mobile Design'],
    demoUrl:
      'https://www.figma.com/design/JXYzDX8s9I0BPc0pNUyq2q/UI-UX?node-id=0-1&t=sMfywkzkyDfZShxC-1a',
  },
  {
    id: '4',
    title: 'Landing Page Bus Jaya Trans',
    description:
      'Perancangan landing page modern untuk layanan transportasi Bus Jaya Trans dengan fokus pada penyampaian informasi rute, layanan, dan pengalaman pengguna melalui tampilan yang bersih, responsif, dan mudah dipahami.',
    image: '/images/project4.png',
    tags: ['Figma', 'UI/UX', 'Web Design'],
    demoUrl:
      'https://www.figma.com/design/4C8sSI4W8dFwWIYj5idXSr/LANDING-PAGE?node-id=0-1&t=ruz5lP0vIcuwNRsj-1',
  },
  {
    id: '5',
    title: 'Meal Explorer',
    description:
      'Website pencarian resep makanan yang dibangun menggunakan Next.js dan Tailwind CSS dengan integrasi REST API. Pengguna dapat mencari berbagai menu, melihat detail resep, bahan, serta langkah-langkah memasak melalui antarmuka yang responsif.',
    image: '/images/project5.png',
    tags: ['Front-End', 'React', 'Tailwind CSS', 'Next.js', 'REST API'],
    demoUrl: 'https://meal-explorer-eight.vercel.app/',
    githubUrl: 'https://github.com/avid-maulana/meal-explorer',
  },
  {
    id: '6',
    title: 'Portfolio Website',
    description:
      'Website portofolio pribadi yang dikembangkan menggunakan Next.js, React, dan Tailwind CSS. Menampilkan profil, pengalaman, keterampilan, serta proyek dengan desain modern, animasi interaktif, dan tampilan responsif di berbagai perangkat.',
    image: '/images/project6.png',
    tags: ['Front-End', 'React', 'Tailwind CSS', 'Next.js'],
    demoUrl: 'https://portofolio-muhammad-avid-maulana.vercel.app/',
    githubUrl: 'https://github.com/avid-maulana/portofolio',
  },
];