import React, { useState, useEffect } from 'react';
import { ArrowDown, ArrowUpRight, Github, Linkedin, Instagram, Mail } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import profileImg from '../../Assets/bayu.png';

// Komponen Foto Profil Interaktif dengan Efek 3D Tilt saat di-hover ("miring-miring")
function TiltProfilePhoto() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Spring physics untuk gerakan miring yang luwes dan responsif
  const mouseXSpring = useSpring(x, { stiffness: 280, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 280, damping: 20 });

  // Transformasi rotasi X dan Y berdasarkan posisi kursor
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["18deg", "-18deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-18deg", "18deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / rect.width - 0.5);
    y.set(mouseY / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div style={{ perspective: 1000 }} className="w-full flex justify-center lg:justify-end">
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.04 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="w-60 sm:w-68 md:w-72 lg:w-80 max-w-[320px] relative cursor-pointer group"
      >
        {/* Subtle 3D Depth Shadow under Card */}
        <div
          style={{ transform: "translateZ(-20px)" }}
          className="absolute inset-4 bg-zinc-950/20 rounded-3xl blur-xl transition-opacity duration-300 group-hover:opacity-100 opacity-60"
        />

        {/* Frame Foto Utama dengan Preservasi 3D */}
        <div
          style={{ transform: "translateZ(10px)" }}
          className="relative rounded-2xl overflow-hidden border border-zinc-200/90 bg-zinc-100 shadow-xl shadow-zinc-900/10"
        >
          <div className="aspect-[3/4] overflow-hidden bg-zinc-100 relative">
            <img
              src={profileImg}
              alt="Foto Profil Bayu"
              className="w-full h-full object-cover object-top filter grayscale contrast-105 group-hover:contrast-115 transition-all duration-500 ease-out pointer-events-none"
            />

            {/* Subtle Glare Reflection overlay that shifts on 3D */}
            <div
              style={{ transform: "translateZ(30px)" }}
              className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            />
          </div>
        </div>

        {/* 3D Floating Pill on hover */}
        <motion.div
          style={{ transform: "translateZ(40px)" }}
          className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-zinc-900/90 text-white text-[11px] font-mono tracking-wider shadow-lg backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap"
        >
          Bayu Krisdiantoro
        </motion.div>
      </motion.div>
    </div>
  );
}

// Icon Behance SVG untuk Tampilan Tajam & Konsisten
function BehanceIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-4.043 0-5.625-2.73-5.625-5.674 0-3.327 2.148-5.826 5.678-5.826 3.738 0 5.372 2.766 5.093 6.096h-7.859c.074 1.488.948 2.721 2.802 2.721 1.341 0 2.139-.636 2.502-1.317h2.51zm-7.794-4.107h5.092c-.066-1.332-.865-2.29-2.484-2.29-1.577 0-2.477.947-2.608 2.29zm-9.932-7.893h5.962c2.052 0 3.744.57 3.744 2.81 0 1.206-.607 2.083-1.637 2.503 1.353.407 2.05 1.503 2.05 2.94 0 2.56-2.032 3.747-4.195 3.747h-5.924v-12zm3.109 2.518v2.339h2.385c.983 0 1.554-.424 1.554-1.17 0-.746-.571-1.169-1.554-1.169h-2.385zm0 4.676v2.663h2.646c1.077 0 1.734-.482 1.734-1.331 0-.85-.657-1.332-1.734-1.332h-2.646z"/>
    </svg>
  );
}

export default function Hero() {
  const words = [
    "Mahasigma",
    "Manusia Biasa",
    "PDD"
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];
    const typingSpeed = isDeleting ? 35 : 75;
    const pauseTime = isDeleting ? 300 : 2000;

    let timeout;

    if (!isDeleting && currentText === word) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
      timeout = setTimeout(() => {}, 200);
    } else {
      timeout = setTimeout(() => {
        setCurrentText((prev) =>
          isDeleting ? word.substring(0, prev.length - 1) : word.substring(0, prev.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex]);

  return (
    <section id="hero" className="min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex items-center relative z-10 bg-white">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Kolom Kiri: Biodata, Typing Effect & Call to Actions (7 Kolom) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">

            {/* Minimalist Sub-heading with Entrance Animation */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center justify-center lg:justify-start gap-2.5"
            >
              <span className="w-2 h-2 rounded-full bg-zinc-900"></span>
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-500 font-medium">
                PORTFOLIO & PERSONAL SPACE
              </p>
            </motion.div>

            {/* Main Headline dengan Font Sans-Serif Elegan (Syne) */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-zinc-950 tracking-tight leading-tight"
            >
              Halo, Saya <br className="hidden sm:inline" />
              <span className="text-black">Bayu</span>
            </motion.h1>

            {/* Dynamic Typing & Deleting Text Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-xl sm:text-2xl md:text-3xl font-sans font-medium text-zinc-500 min-h-[44px] flex items-center justify-center lg:justify-start"
            >
              <span>Saya&nbsp;</span>
              <span className="text-zinc-950 font-semibold">{currentText}</span>
              <span className="typewriter-cursor text-zinc-900 font-sans">|</span>
            </motion.div>

            {/* Ringkasan Singkat (Clean, High-Readability) */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0 font-sans"
            >
              mahasiswa Teknologi Informasi dengan minat besar di bidang desain grafis. Terbiasa menciptakan aset visual digital, konten media sosial, hingga materi publikasi.
            </motion.p>

            {/* Tombol Aksi Minimalis */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <a
                href="#portfolio"
                className="px-7 py-3 rounded-full text-sm font-semibold bg-zinc-900 text-white hover:bg-black transition-all duration-300 shadow-md shadow-zinc-900/10 hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-2"
              >
                <span>Lihat Portofolio</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="https://wa.me/6289524054720?text=Halo%20Bayu%2C%20saya%20melihat%20portofolio%20Anda%20dan%20tertarik%20untuk%20berdiskusi"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full text-sm font-semibold border border-zinc-200 hover:border-zinc-900 text-zinc-800 hover:text-black bg-white hover:bg-zinc-50 transition-all duration-300 flex items-center gap-2 shadow-sm"
              >
                <span>Hubungi via WhatsApp</span>
                <ArrowUpRight className="w-4 h-4 text-zinc-500" />
              </a>
            </motion.div>

            {/* Minimalist Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="pt-6 flex flex-wrap items-center justify-center lg:justify-start gap-5 text-zinc-400"
            >
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-medium">
                Sosial:
              </span>

              <a
                href="https://github.com/bayu-k-coding"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-zinc-950 hover:scale-110 transition-all duration-200"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href="https://www.linkedin.com/in/bayu-krisdiantoro-691598311/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-zinc-950 hover:scale-110 transition-all duration-200"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href="https://www.instagram.com/bayykrsdntrrr/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-zinc-950 hover:scale-110 transition-all duration-200"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href="https://www.behance.net/gallery/253693305/Portofolio-Bayy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-zinc-950 hover:scale-110 transition-all duration-200"
                title="Behance"
              >
                <BehanceIcon className="w-4 h-4" />
              </a>

              <a
                href="mailto:krisdiantorobayu52@gmail.com"
                className="hover:text-zinc-950 hover:scale-110 transition-all duration-200"
                title="Email: krisdiantorobayu52@gmail.com"
              >
                <Mail className="w-4 h-4" />
              </a>
            </motion.div>

          </div>

          {/* Kolom Kanan: Foto Profil dengan Interaksi 3D Tilt Miring saat di-hover (5 Kolom) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <TiltProfilePhoto />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
