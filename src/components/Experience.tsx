'use client';

import { useState } from 'react';
import { AnimatePresence, motion, Variants } from 'framer-motion';

const experiences = [
  {
    year: 'Februari – Mei 2026',
    title: 'Asisten Mengajar (RPL)',
    organization: 'SMKN 8 Malang',
    description:
      'Mendampingi ±30 siswa kelas XI pada mata pelajaran Pemrograman Perangkat Bergerak menggunakan Flutter dan Supabase. Membimbing praktik pembuatan aplikasi mobile sederhana dengan fitur autentikasi dan CRUD, sekaligus menyiapkan materi, media pembelajaran, dan memberikan feedback pada tugas pemrograman setiap pertemuan.',
  },
  {
    year: '2025',
    title: 'Koordinator POSITRON 2025',
    organization: 'HMD Teknik Elektro dan Informatika',
    description:
      'Mengoordinasikan rangkaian orientasi mahasiswa baru Departemen Teknik Elektro dan Informatika dengan ratusan peserta dan beberapa tim pelaksana. Menyusun alur acara, aturan, dan mekanisme koordinasi lintas divisi sehingga kegiatan berjalan tertib dan konsisten dengan nilai departemen.',
  },
  {
    year: '2025',
    title: 'Ketua Pelaksana FESMARO 2025',
    organization: 'HMD Teknik Elektro dan Informatika',
    description:
      'Memimpin tim panitia dalam merancang dan menjalankan FESMARO 2025 sebagai kompetisi internal menuju ajang tingkat nasional. Mengelola konsep acara, teknis lomba, dan komunikasi dengan stakeholder serta sponsor sehingga seluruh rangkaian selesai sesuai jadwal dan target peserta tercapai.',
  },
  {
    year: '2024 – 2025',
    title: 'Ketua Bidang Organisasi & Kepemimpinan',
    organization: 'HMD Teknik Elektro dan Informatika',
    description:
      'Memimpin perancangan dan eksekusi program kerja yang berfokus pada pengembangan kepemimpinan dan budaya kerja anggota himpunan. Mengoordinasikan beberapa kegiatan internal untuk memperkuat solidaritas, komunikasi, dan efektivitas tim.',
  },
  {
    year: '2023 – 2024',
    title: 'Staf Divisi Komunikasi & Informasi',
    organization: 'HMD Teknik Elektro dan Informatika',
    description:
      'Mendukung penyebaran informasi kegiatan himpunan melalui kanal digital dan media sosial. Berkontribusi dalam pembuatan serta pengelolaan konten sederhana untuk menjaga konsistensi branding dan memastikan informasi sampai ke mahasiswa tepat waktu.',
  },
];

const sectionEnter: Variants = {
  hidden: {
    opacity: 0,
    y: 36,
    filter: 'blur(8px)',
  },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const reveal: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleMobileItem = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <motion.section
      id="experience"
      className="scroll-mt-24 border-t border-slate-200 pt-20 sm:pt-24"
      variants={sectionEnter}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.14 }}
    >
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <motion.div variants={reveal} className="mb-12 max-w-3xl sm:mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Experience
          </p>

          <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            Teaching, Leadership,
            <br className="hidden sm:block" />
            and Digital Involvement.
          </h2>

          <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
            Pengalaman mengajar, memimpin organisasi, dan mengelola komunikasi
            digital yang membangun kemampuan komunikasi, kolaborasi, dan eksekusi—
            fondasi penting untuk bekerja di pengembangan produk.
          </p>
        </motion.div>

        {/* Desktop */}
        <div className="hidden md:grid md:grid-cols-[1.1fr_0.9fr] md:gap-10">
          {/* List */}
          <motion.div variants={reveal} className="space-y-3">
            {experiences.map((item, index) => {
              const isActive = activeIndex === index;

              return (
                <motion.button
                  key={index}
                  type="button"
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`
                    w-full rounded-[28px] border px-5 py-5 text-left
                    transition-all duration-300
                    ${
                      isActive
                        ? 'border-slate-950 bg-slate-950 text-white shadow-lg shadow-slate-950/10'
                        : 'border-slate-200 bg-white text-slate-950 hover:-translate-y-0.5 hover:border-slate-950 hover:bg-slate-950 hover:text-white'
                    }
                  `}
                >
                  <p
                    className={`text-sm font-semibold ${
                      isActive ? 'text-white/70' : 'text-blue-600'
                    }`}
                  >
                    {item.year}
                  </p>

                  <h3 className="mt-2 text-xl font-black tracking-tight">
                    {item.title}
                  </h3>

                  <p
                    className={`mt-1 text-sm font-medium ${
                      isActive ? 'text-white/70' : 'text-slate-500'
                    }`}
                  >
                    {item.organization}
                  </p>
                </motion.button>
              );
            })}
          </motion.div>

          {/* Preview */}
          <motion.div variants={reveal} className="sticky top-28 h-fit">
            <AnimatePresence mode="wait">
              {activeIndex !== null && (
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 24, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 12, scale: 0.985 }}
                  transition={{
                    duration: 0.45,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="rounded-[32px] border border-slate-200 bg-white p-7 shadow-sm"
                >
                  <p className="text-sm font-semibold text-blue-600">
                    {experiences[activeIndex].year}
                  </p>

                  <h3 className="mt-3 text-2xl font-black tracking-tight text-slate-950">
                    {experiences[activeIndex].title}
                  </h3>

                  <p className="mt-2 text-sm font-medium text-slate-500">
                    {experiences[activeIndex].organization}
                  </p>

                  <div className="mt-5 h-px w-full bg-slate-200" />

                  <p className="mt-5 text-[15px] leading-8 text-slate-600 sm:text-base">
                    {experiences[activeIndex].description}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Mobile */}
        <motion.div variants={reveal} className="space-y-3 md:hidden">
          {experiences.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <motion.button
                key={index}
                type="button"
                onClick={() => toggleMobileItem(index)}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`
                  w-full rounded-[28px] border px-5 py-5 text-left
                  transition-all duration-300
                  ${
                    isActive
                      ? 'border-slate-950 bg-slate-950 text-white'
                      : 'border-slate-200 bg-white text-slate-950'
                  }
                `}
              >
                <p
                  className={`text-sm font-semibold ${
                    isActive ? 'text-white/70' : 'text-blue-600'
                  }`}
                >
                  {item.year}
                </p>

                <div className="mt-2 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-black tracking-tight">
                      {item.title}
                    </h3>

                    <p
                      className={`mt-1 text-sm font-medium ${
                        isActive ? 'text-white/70' : 'text-slate-500'
                      }`}
                    >
                      {item.organization}
                    </p>
                  </div>

                  <motion.span
                    animate={{ rotate: isActive ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className={`pt-1 text-sm ${
                      isActive ? 'text-white/70' : 'text-slate-400'
                    }`}
                  >
                    +
                  </motion.span>
                </div>

                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.35,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 h-px w-full bg-white/10" />
                      <p className="mt-4 text-[15px] leading-8 text-white/80">
                        {item.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}