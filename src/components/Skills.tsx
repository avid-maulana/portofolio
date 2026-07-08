'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'UI/UX Design',
    score: '7/10',
    backColor: 'bg-blue-600',
    textColor: 'text-white',
    skills: ['Figma', 'Wireframing', 'Prototyping', 'User Flow', 'Auto Layout'],
    description:
      'Cukup kuat dalam menyusun wireframe, alur pengguna, dan prototype antarmuka web maupun mobile yang rapi, modern, dan mudah digunakan.',
  },
  {
    title: 'Front-End Development',
    score: '6/10',
    backColor: 'bg-slate-900',
    textColor: 'text-white',
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
    description:
      'Memahami pengembangan antarmuka web modern menggunakan Next.js, React, dan Tailwind CSS dengan fokus pada layout responsif, komponen reusable, dan tampilan yang bersih.',
  },
  {
    title: 'Web Development & Mobile Development',
    score: '6/10',
    backColor: 'bg-emerald-600',
    textColor: 'text-white',
    skills: ['Flutter', 'Dart', 'Responsive Design', 'Supabase'],
    description:
      'Memiliki pengalaman mengembangkan aplikasi mobile lintas platform menggunakan Flutter dengan pendekatan responsif serta integrasi Supabase untuk autentikasi dan operasi CRUD data dasar.',
  },
  {
    title: 'Backend & Database',
    score: '6/10',
    backColor: 'bg-amber-500',
    textColor: 'text-white',
    skills: ['PHP', 'Laravel', 'MySQL', 'MariaDB', 'Supabase'],
    description:
      'Memahami konsep dasar Model-View-Controller, routing, dan CRUD pada aplikasi web berbasis Laravel, serta perancangan basis data relasional menggunakan MySQL/MariaDB.',
  },
  {
    title: 'Design & Productivity',
    score: '7/10',
    backColor: 'bg-rose-500',
    textColor: 'text-white',
    skills: ['Adobe Illustrator', 'CorelDRAW', 'Canva', 'Microsoft Office', 'Google Workspace'],
    description:
      'Terbiasa menggunakan tools desain dan produktivitas untuk membuat aset visual sederhana, materi presentasi, dan dokumen pendukung kegiatan akademik maupun organisasi.',
  },
  {
    title: 'Soft Skills',
    score: '7/10',
    backColor: 'bg-violet-600',
    textColor: 'text-white',
    skills: ['Leadership', 'Communication', 'Teamwork', 'Problem Solving'],
    description:
      'Pengalaman sebagai pengurus himpunan dan panitia membantu mengembangkan kemampuan kepemimpinan, komunikasi, kerja tim, dan pemecahan masalah dalam berbagai kegiatan.',
  },
];

type Tilt = { rotateX: number; rotateY: number };
const ZERO_TILT: Tilt = { rotateX: 0, rotateY: 0 };
const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value));

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Skills() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [tiltMap, setTiltMap] = useState<Record<number, Tilt>>({});
  const [gyroTilt, setGyroTilt] = useState<Tilt>(ZERO_TILT);

  const gyroAttached = useRef(false);
  const gyroPermissionAsked = useRef(false);

  // Detect a real mouse (not touch) so hover-to-flip only applies where it makes sense
  useEffect(() => {
    const media = window.matchMedia('(hover: hover) and (pointer: fine)');
    const update = () => setIsDesktop(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  const handleOrientation = (event: DeviceOrientationEvent) => {
    const gamma = event.gamma ?? 0; // left/right tilt
    const beta = event.beta ?? 0; // front/back tilt
    setGyroTilt({
      rotateY: clamp(gamma * 0.35, -9, 9),
      rotateX: clamp((beta - 45) * -0.12, -9, 9),
    });
  };

  const attachGyro = () => {
    if (gyroAttached.current) return;
    gyroAttached.current = true;
    window.addEventListener('deviceorientation', handleOrientation);
  };

  // On Android/others, gyroscope access needs no permission prompt — attach right away
  useEffect(() => {
    if (isDesktop) return;
    const NeedsPermission =
      typeof window !== 'undefined' &&
      typeof (window as any).DeviceOrientationEvent?.requestPermission === 'function';
    if (!NeedsPermission) attachGyro();

    return () => {
      window.removeEventListener('deviceorientation', handleOrientation);
      gyroAttached.current = false;
    };
  }, [isDesktop]);

  // On iOS, requestPermission must run inside a real user gesture — tie it to the first tap
  const ensureGyroPermission = async () => {
    if (gyroPermissionAsked.current) return;
    gyroPermissionAsked.current = true;
    const requestPermission = (window as any).DeviceOrientationEvent?.requestPermission;
    if (typeof requestPermission === 'function') {
      try {
        const result = await requestPermission();
        if (result === 'granted') attachGyro();
      } catch {
        // ignored — falls back to static cards, no crash
      }
    }
  };

  const handleMouseEnter = (index: number) => {
    if (!isDesktop) return;
    setHoveredIndex(index);
  };

  const handleMouseMove = (index: number, event: React.MouseEvent<HTMLButtonElement>) => {
    if (!isDesktop) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    setTiltMap((prev) => ({
      ...prev,
      [index]: { rotateY: (px - 0.5) * 14, rotateX: (0.5 - py) * 14 },
    }));
  };

  const handleMouseLeave = (index: number) => {
    if (!isDesktop) return;
    setHoveredIndex((prev) => (prev === index ? null : prev));
    setTiltMap((prev) => ({ ...prev, [index]: ZERO_TILT }));
  };

  const handleTap = (index: number) => {
    if (isDesktop) return;
    void ensureGyroPermission();
    setFlippedCards((prev) =>
      prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index],
    );
  };

  const flippedSet = useMemo(() => new Set(flippedCards), [flippedCards]);

  return (
    <section id="skills" className="scroll-mt-32 border-t border-slate-200 pt-20 sm:pt-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 max-w-3xl sm:mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
            Skills
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            Teknologi, tools,
            <br className="hidden sm:block" />
            dan kemampuan yang saya pakai.
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
            Kombinasi kemampuan teknis dan non-teknis yang saya gunakan dalam proses desain,
            pengembangan, serta kolaborasi tim.
          </p>
        </motion.div>

        {/* Grid kartu */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          {skillCategories.map((category, index) => {
            const tilt = isDesktop ? tiltMap[index] || ZERO_TILT : gyroTilt;
            const isFlipped = isDesktop ? hoveredIndex === index : flippedSet.has(index);

            return (
              <motion.button
                key={category.title}
                type="button"
                variants={cardVariants}
                onClick={() => handleTap(index)}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseMove={(e) => handleMouseMove(index, e)}
                onMouseLeave={() => handleMouseLeave(index)}
                aria-pressed={isFlipped}
                aria-label={`${category.title} skill card`}
                className="block w-full text-left [perspective:1400px]"
              >
                {/* Tilt wrapper — 3D mouse-follow on desktop, gyroscope ambient on mobile */}
                <motion.div
                  animate={{ rotateX: tilt.rotateX, rotateY: tilt.rotateY }}
                  transition={{ type: 'spring', stiffness: 160, damping: 16, mass: 0.6 }}
                  style={{ transformStyle: 'preserve-3d' }}
                  className="relative"
                >
                  {/* Flip wrapper */}
                  <motion.div
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    style={{ transformStyle: 'preserve-3d' }}
                    className="relative h-[350px] w-full rounded-[24px] sm:h-[320px]"
                  >
                    {/* Front */}
                    <div
                      style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
                      className="absolute inset-0 flex flex-col rounded-[24px] border border-slate-200 bg-white p-5 shadow-[0_14px_30px_rgba(15,23,42,0.05)] sm:p-6"
                    >
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                        0{index + 1}/0{skillCategories.length}
                      </p>
                      <h3 className="mt-2 text-xl font-black tracking-tight text-slate-950">
                        {category.title}
                      </h3>

                      <div className="mt-4 h-px w-full bg-slate-200" />

                      <div className="mt-4 flex flex-wrap gap-2">
                        {category.skills.map((skill) => (
                          <span
                            key={skill}
                            className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700 sm:text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      <p className="mt-auto pt-4 text-xs font-medium text-slate-400 lg:hidden">
                        Sentuh untuk melihat ringkasan
                      </p>
                    </div>

                    {/* Back */}
                    <div
                      style={{
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)',
                      }}
                      className={`absolute inset-0 flex flex-col rounded-[24px] p-5 shadow-[0_18px_36px_rgba(15,23,42,0.10)] sm:p-6 ${category.backColor} ${category.textColor}`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] opacity-75">
                            Ringkasan
                          </p>
                          <h3 className="mt-1 text-lg font-black tracking-tight sm:text-xl">
                            {category.title}
                          </h3>
                        </div>
                        <span className="shrink-0 rounded-full border border-white/20 bg-white/12 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em]">
                          {category.score}
                        </span>
                      </div>

                      <div className="mt-2 h-px w-full bg-white/15" />

                      <div className="mt-3 flex-1 min-h-0">
                        <p className="text-justify text-[13px] leading-6 opacity-95 hyphens-auto sm:text-sm sm:leading-6">
                          {category.description}
                        </p>
                      </div>

                      <p className="pt-1 text-[11px] font-medium uppercase tracking-[0.14em] opacity-70">
                        Tingkat saat ini
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.button>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}