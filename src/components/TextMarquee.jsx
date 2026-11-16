import React from 'react';
import { motion } from 'framer-motion';

export default function TextMarquee() {
  // Baris 1: Teks yang meluncur dari Kanan ke Kiri
  const textRow1 = [
    "Hello I'm Bayu",
    "Graphic Design Enthusiast",
    "Mahasiswa Teknologi Informasi",
    "Manusia Biasa",
    "Hello I'm Bayu",
    "Graphic Design Enthusiast",
    "Mahasiswa Teknologi Informasi",
    "Manusia Biasa",
  ];

  // Baris 2: Teks yang meluncur dari Kiri ke Kanan
  const textRow2 = [
    "Graphic Designer",
    "Clean & Modern Code",
    "Interactive Web Design",
    "Creative Problem Solver",
    "Frontend Developer",
    "Clean & Modern Code",
    "Interactive Web Design",
  ];

  return (
    <section className="py-10 md:py-14 bg-white overflow-hidden select-none border-t border-zinc-100 relative z-10">
      <div className="space-y-2 md:space-y-4">

        {/* Baris 1: Bergerak Kanan ke Kiri (Right to Left) - Sangat Lambat & Santai */}
        <div className="flex overflow-hidden relative">
          {/* Subtle side fade masks */}
          <div className="absolute left-0 inset-y-0 w-20 md:w-36 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 inset-y-0 w-20 md:w-36 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex items-center gap-6 md:gap-10 whitespace-nowrap will-change-transform"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 160, // Sangat lambat, mengalir sangat tenang
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {textRow1.concat(textRow1).map((text, index) => (
              <span
                key={index}
                className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold tracking-tight text-zinc-200/90 hover:text-zinc-900 transition-colors duration-300 flex items-center gap-6 md:gap-10 cursor-default"
              >
                <span>{text}</span>
                <span className="text-zinc-300 text-2xl sm:text-4xl font-light">/</span>
              </span>
            ))}
          </motion.div>
        </div>

        {/* Baris 2: Bergerak Kiri ke Kanan (Left to Right) - Sangat Lambat & Santai */}
        <div className="flex overflow-hidden relative">
          {/* Subtle side fade masks */}
          <div className="absolute left-0 inset-y-0 w-20 md:w-36 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 inset-y-0 w-20 md:w-36 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex items-center gap-6 md:gap-10 whitespace-nowrap will-change-transform"
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              duration: 170, // Sangat lambat, mengalir sangat tenang
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {textRow2.concat(textRow2).map((text, index) => (
              <span
                key={index}
                className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold tracking-tight text-zinc-300/80 hover:text-zinc-900 transition-colors duration-300 flex items-center gap-6 md:gap-10 cursor-default"
              >
                <span>{text}</span>
                <span className="text-zinc-300 text-2xl sm:text-4xl font-light">•</span>
              </span>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
