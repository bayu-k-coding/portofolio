import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

export default function About() {
  // Riwayat Pendidikan Minimalist (Compact & Clean)
  const educationHistory = [
    {
      period: "2023 — Sekarang",
      status: "Mahasiswa Aktif",
      institution: "Politeknik Negeri Madiun (PNM)",
      major: "Teknologi Informasi",
      current: true,
    },
    {
      period: "2021 — 2023",
      status: "Lulus",
      institution: "SMKN 1 Kebonsari",
      major: "Teknik Komputer Jaringan",
      current: false,
    },
  ];

  return (
    <section id="about" className="py-20 md:py-24 bg-[#FAFAFA] border-t border-zinc-100 relative z-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-zinc-950 tracking-tight">
            About Me
          </h2>
        </motion.div>

        {/* Content Grid: 1 Paragraf Narasi (Kiri) + Riwayat Pendidikan Minimalist (Kanan) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">

          {/* Kolom Kiri: Narasi Ringkas */}
          <div className="lg:col-span-6 space-y-4">
            <p className="text-zinc-600 font-sans leading-relaxed text-base sm:text-lg">
              Halo, saya <strong className="text-zinc-950 font-semibold">Bayu Krisdiantoro</strong>, mahasiswa{' '}
              <span className="text-zinc-950 font-medium">Teknologi Informasi</span> di Politeknik Negeri Madiun yang memiliki
              ketertarikan mendalam pada desain grafis dan visual digital. Saya senang mengeksplorasi ide kreatif lewat komposisi
              visual yang bersih, berkarakter, dan komunikatif.
            </p>
            <p className="text-zinc-600 font-sans leading-relaxed text-base">
              Keseharian saya banyak berfokus pada tools seperti <span className="text-zinc-950 font-medium">Photoshop</span>,{' '}
              <span className="text-zinc-950 font-medium">Illustrator</span>, dan <span className="text-zinc-950 font-medium">Figma</span>.
              Di samping itu, latar belakang IT memberi saya nilai tambah dalam memahami dasar pengembangan web—membantu saya menciptakan
              karya dan antarmuka yang tidak cuma estetik, tapi juga fungsional saat diimplementasikan.
            </p>
          </div>

          {/* Kolom Kanan: Riwayat Pendidikan Ultra-Minimalist */}
          <div className="lg:col-span-6 space-y-3">
            <div className="flex items-center gap-2 mb-2">
              <GraduationCap className="w-4 h-4 text-zinc-800" />
              <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-semibold">
                Riwayat Pendidikan
              </h3>
            </div>

            <div className="space-y-2.5">
              {educationHistory.map((edu, index) => (
                <motion.div
                  key={edu.institution}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="px-4 py-3 rounded-xl bg-white border border-zinc-200/80 hover:border-zinc-900 transition-all duration-200 flex items-center justify-between gap-4 shadow-2xs group"
                >
                  <div className="min-w-0">
                    <h4 className="text-sm font-heading font-bold text-zinc-950 group-hover:text-black truncate">
                      {edu.institution}
                    </h4>
                    <p className="text-xs text-zinc-500 font-sans mt-0.5">
                      {edu.major}
                    </p>
                  </div>

                  <div className="flex flex-col items-end shrink-0">
                    <span className="text-[11px] font-mono text-zinc-500 font-medium">
                      {edu.period}
                    </span>
                    <span className={`text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full mt-1 font-semibold ${
                      edu.current
                        ? 'bg-zinc-900 text-white'
                        : 'bg-zinc-100 text-zinc-600'
                    }`}>
                      {edu.status}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
