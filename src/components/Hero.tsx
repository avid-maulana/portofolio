'use client';

import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

const highlights = [
  { value: 'Semester 7', label: 'Pendidikan Teknik Informatika UM' },
  { value: '2+', label: 'Tahun pengalaman organisasi & kepanitiaan' },
  { value: '10+', label: 'Penghargaan & kompetisi diikuti' },
];

const heroWrap: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
    filter: 'blur(10px)',
  },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const cardWrap: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.18,
    },
  },
};

const cardItem: Variants = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Hero() {
  return (
    <motion.section
      id="home"
      className="pt-28 pb-14 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20"
      variants={heroWrap}
      initial="hidden"
      animate="show"
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-14 xl:grid-cols-[minmax(0,1fr)_440px]">
          {/* Left */}
          <motion.div variants={fadeUp} className="max-w-3xl">
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-blue-600" />
              Available for Internship & Collaboration
            </motion.div>

            <motion.div variants={fadeUp} className="mt-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-600 sm:text-xs">
                UI/UX Designer · Front-End Developer
              </p>

              <h1 className="mt-4 text-4xl font-black leading-[0.95] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl xl:text-[4.7rem]">
                Muhammad
                <br />
                Avid Maulana
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-[1.05rem]">
                Mahasiswa S1 Pendidikan Teknik Informatika di Universitas Negeri Malang dengan fokus
                pada desain produk digital dan pengembangan front-end. Saya mengeksplorasi UI/UX
                Design, Flutter & Supabase, serta Next.js & Tailwind CSS untuk membangun antarmuka
                web dan mobile yang responsif, konsisten, dan nyaman digunakan.
              </p>

              <p className="mt-3 max-w-2xl text-base leading-8 text-slate-600 sm:text-[1.05rem]">
                Saya menikmati proses end-to-end: dari memahami kebutuhan pengguna, memetakan alur
                interaksi, merancang tampilan, hingga mengimplementasikannya ke dalam prototipe atau
                aplikasi yang bisa diuji langsung.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
            >
              <Link
                href="#projects"
                className="
                  inline-flex h-12 items-center justify-center rounded-2xl
                  bg-slate-950 px-6 text-sm font-semibold text-white
                  transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800
                  active:scale-[0.98]
                "
              >
                View Projects
              </Link>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex h-12 items-center justify-center rounded-2xl
                  border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-800
                  shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-50
                  active:scale-[0.98]
                "
              >
                Resume
              </a>
            </motion.div>
          </motion.div>

          {/* Right */}
          <motion.div variants={fadeUp} className="lg:justify-self-end">
            <motion.div
              variants={cardWrap}
              className="rounded-[24px] border border-slate-200 bg-white/90 p-5 shadow-sm backdrop-blur sm:rounded-[28px] sm:p-6 lg:p-7"
            >
              <motion.div
                variants={cardItem}
                className="flex items-center justify-between gap-4"
              >
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Profile Snapshot
                  </p>
                  <h2 className="mt-2 text-lg font-black tracking-tight text-slate-950 sm:text-xl">
                    Product-Focused Technologist
                  </h2>
                </div>

                <div className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">
                  UM
                </div>
              </motion.div>

              <div className="mt-6 grid gap-3">
                {highlights.map((item) => (
                  <motion.div
                    key={item.label}
                    variants={cardItem}
                    className="rounded-[20px] border border-slate-200 bg-slate-50 px-4 py-4 sm:px-5"
                  >
                    <p className="text-2xl font-black tracking-tight text-slate-950 sm:text-[1.8rem]">
                      {item.value}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      {item.label}
                    </p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                variants={cardItem}
                className="mt-5 rounded-[20px] bg-slate-950 px-4 py-4 text-white sm:px-5 sm:py-5"
              >
                <p className="text-[11px] uppercase tracking-[0.18em] text-white/60">
                  Focus
                </p>
                <p className="mt-2 text-sm leading-7 text-white/90">
                  Merancang dan membangun antarmuka bersih, interaksi yang jelas, dan produk
                  digital yang tidak hanya terlihat modern tetapi juga menyelesaikan masalah
                  pengguna secara nyata.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}