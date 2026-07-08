'use client';

import { motion, Variants } from 'framer-motion';

const sectionEnter: Variants = {
  hidden: {
    opacity: 0,
    y: 36,
    filter: 'blur(10px)',
  },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const reveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function About() {
  return (
    <motion.section
      id="about"
      className="scroll-mt-24 border-t border-slate-200/80 pt-20 sm:pt-24"
      variants={sectionEnter}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16"
        >
          {/* Left */}
          <div>
            <motion.div variants={reveal} className="max-w-3xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-600 sm:text-xs">
                About Me
              </p>

              <h2 className="mt-3 text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-[3rem]">
                Designing and shipping
                <br />
                user-focused digital
                <br />
                experiences.
              </h2>
            </motion.div>

            <motion.div
              variants={reveal}
              className="mt-8 max-w-3xl space-y-5 text-[15px] leading-8 text-slate-600 sm:mt-10 sm:text-[17px]"
            >
              <p>
                Saya adalah mahasiswa S1 Pendidikan Teknik Informatika di Universitas Negeri Malang
                dengan fokus pada desain produk digital dan front-end development. Saya banyak
                mengeksplorasi UI/UX Design, pengembangan web, serta pembuatan antarmuka yang
                responsif dan mudah digunakan.
              </p>

              <p>
                Di luar perkuliahan, saya aktif mengikuti organisasi, kepanitiaan, dan kompetisi 
                teknologi untuk mengasah kemampuan kepemimpinan dan kolaborasi. Pengalaman ini 
                membantu saya berpikir terstruktur, mengelola banyak stakeholder, dan tetap fokus 
                pada eksekusi.
              </p>

              <p>
                Dalam mengerjakan produk digital, saya tidak hanya memikirkan visual, tetapi juga 
                alur pengguna, konteks penggunaan, dan bagaimana solusi yang dibangun benar-benar 
                menyelesaikan masalah pengguna. Saya senang belajar stack baru dan menguji ide 
                melalui prototipe yang bisa diujicobakan langsung.
              </p>
            </motion.div>
          </div>

          {/* Right */}
          <motion.aside variants={reveal}>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <motion.div
                variants={reveal}
                className="rounded-[24px] bg-slate-950 px-5 py-6 text-white sm:rounded-[28px] sm:px-6"
              >
                <p className="text-[11px] uppercase tracking-[0.18em] text-white/60">
                  Education
                </p>
                <h3 className="mt-3 text-xl font-black tracking-tight sm:text-[1.45rem]">
                  S1 Pendidikan Teknik Informatika
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/80">
                  Universitas Negeri Malang
                </p>
                <p className="mt-3 text-xs leading-6 text-white/60">
                  Fokus pada pengembangan perangkat lunak, dasar-dasar rekayasa
                  perangkat lunak, dan pemanfaatan teknologi dalam konteks pendidikan.
                </p>
              </motion.div>

              <motion.div
                variants={reveal}
                className="rounded-[24px] border border-slate-200 bg-slate-50 px-5 py-6 sm:rounded-[28px] sm:px-6"
              >
                <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                  Based In
                </p>
                <p className="mt-3 text-base font-medium leading-7 text-slate-800">
                  Ngantang, Kab. Malang, East Java
                </p>
                <p className="mt-2 text-xs leading-6 text-slate-500">
                  Terbuka untuk kesempatan remote maupun hybrid, terutama di bidang
                  desain produk digital dan pengembangan front-end.
                </p>
              </motion.div>

              <motion.div
                variants={reveal}
                className="rounded-[24px] border border-slate-200 bg-white px-5 py-6 sm:col-span-2 sm:rounded-[28px] sm:px-6 lg:col-span-1"
              >
                <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                  Focus Area
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-700">
                    UI/UX Design
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700">
                    Front-End Development
                  </span>
                  <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-sm font-medium text-emerald-700">
                    Flutter & Supabase
                  </span>
                  <span className="rounded-full bg-indigo-50 px-3 py-1.5 text-sm font-medium text-indigo-700">
                    Next.js & Tailwind CSS
                  </span>
                </div>
              </motion.div>

              <motion.div
                variants={reveal}
                className="rounded-[24px] border border-slate-200 bg-white px-5 py-6 sm:rounded-[28px] sm:px-6"
              >
                <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                  Working Style
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Structured thinking, eksplorasi visual yang rapi, iterasi berbasis feedback,
                  dan pendekatan yang berpusat pada pengguna dari riset ringan hingga prototipe
                  yang bisa diuji.
                </p>
              </motion.div>
            </div>
          </motion.aside>
        </motion.div>
      </div>
    </motion.section>
  );
}