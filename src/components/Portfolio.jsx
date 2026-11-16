import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import rekombukImg from '../../Assets/Portofolio/Rekombuk.jpg';
import assetGenImg from '../../Assets/Portofolio/AssetGen.jpg';
import yughostImg from '../../Assets/Portofolio/Yughost.jpg';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'Semua' },
    { id: 'web', label: 'Web Development' },
    { id: 'design', label: 'Desain Grafis' },
  ];

  // Daftar proyek nyata yang dikembangkan
  const projects = [
    {
      id: 1,
      title: "Rekombuk",
      category: "web",
      categoryLabel: "Book Finder",
      year: "2026",
      description: "Platform web rekomendasi buku pintar yang mencocokkan deskripsi buku favorit pengguna untuk menemukan pilihan bacaan yang relevan.",
      tech: ["Python", "Flask", "Machine Learning"],
      image: rekombukImg,
      githubUrl: "https://github.com/bayu-k-coding/Book-Recommendation",
      demoUrl: null,
    },
    {
      id: 2,
      title: "AssetGen",
      category: "web",
      categoryLabel: "AI Asset Generator",
      year: "2026",
      description: "Workspace pembuatan aset desain visual berbasis AI untuk menghasilkan gambar PNG transparan siap pakai dengan sistem kuota dan prompt terarah.",
      tech: ["AI Generator", "React.js", "Tailwind CSS"],
      image: assetGenImg,
      githubUrl: "https://github.com/bayu-k-coding/assets-gen",
      demoUrl: null,
    },
    {
      id: 3,
      title: "Desain Branding Yughost Vape",
      category: "design",
      categoryLabel: "Desain Grafis",
      year: "2026",
      description: "Koleksi beberapa karya eksplorasi desain visual, logo, dan branding identitas kreatif.",
      tech: ["Adobe Illustrator", "Photoshop", "Branding"],
      image: yughostImg,
      githubUrl: null,
      demoUrl: "https://drive.google.com/file/d/1eUkiEmu3OcxvzdrYBg1aw_kXMSOCqjB1/view?usp=sharing",
    },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 md:py-24 bg-[#FAFAFA] border-t border-zinc-100 relative z-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header & Minimalist Filter Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-zinc-950 tracking-tight">
              Portfolio
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500 font-sans mt-1">
              Beberapa proyek dan karya aplikasi serta desain yang telah dirancang dan dikembangkan.
            </p>
          </div>

          {/* Filter Pills with Spring Animation */}
          <div className="flex flex-wrap gap-1 p-1 rounded-full bg-zinc-200/60 border border-zinc-200 self-start sm:self-auto relative">
            {filters.map((filter) => {
              const isActive = activeFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-semibold font-sans transition-colors duration-200 z-10 ${
                    isActive ? 'text-white' : 'text-zinc-600 hover:text-zinc-950'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePortfolioTabPill"
                      className="absolute inset-0 rounded-full bg-zinc-950 shadow-sm"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{filter.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Compact Project Cards Grid (3 Kolom Responsif & Ringkas) */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const targetUrl = project.githubUrl || project.demoUrl;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  className="group rounded-2xl bg-white border border-zinc-200/90 overflow-hidden shadow-2xs hover:shadow-lg hover:border-zinc-950 transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Image Mockup Wrapper */}
                  <a
                    href={targetUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative aspect-[16/9] overflow-hidden bg-zinc-100 border-b border-zinc-100 block group/img"
                    title={`Lihat detail ${project.title}`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500 ease-out"
                      loading="lazy"
                    />

                    {/* Category & Year Tag */}
                    <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                      <span className="text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/90 text-zinc-900 font-semibold backdrop-blur-md shadow-2xs border border-white/50">
                        {project.categoryLabel}
                      </span>
                      <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-zinc-950/70 text-zinc-200 backdrop-blur-md">
                        {project.year}
                      </span>
                    </div>
                  </a>

                  {/* Content Description */}
                  <div className="p-4 sm:p-4.5 flex flex-col justify-between flex-grow">
                    <div>
                      <a
                        href={targetUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm sm:text-base font-heading font-bold text-zinc-950 hover:text-black tracking-tight mb-1 flex items-center justify-between group/title"
                      >
                        <span className="truncate">{project.title}</span>
                        <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover/title:text-zinc-950 shrink-0 ml-1 transition-transform group-hover/title:translate-x-0.5 group-hover/title:-translate-y-0.5" />
                      </a>

                      <p className="text-xs text-zinc-500 font-sans leading-relaxed line-clamp-2 mb-3.5">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Tags & Action Button */}
                    <div className="pt-3 border-t border-zinc-100 flex items-center justify-between gap-2">
                      {/* Tech Badges */}
                      <div className="flex flex-wrap gap-1">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-zinc-100 text-zinc-600 font-medium"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Action Button: GitHub atau Demo */}
                      <div className="flex items-center ml-auto">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-zinc-950 text-white hover:bg-black transition-all duration-200 shadow-2xs hover:shadow-xs group/btn"
                            title="Buka Repositori GitHub"
                            aria-label={`Buka Repositori GitHub ${project.title}`}
                          >
                            <Github className="w-3.5 h-3.5" />
                            <span>GitHub</span>
                            <ArrowUpRight className="w-3 h-3 text-zinc-400 group-hover/btn:text-white transition-colors" />
                          </a>
                        )}

                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-zinc-950 text-white hover:bg-black transition-all duration-200 shadow-2xs hover:shadow-xs group/btn"
                            title="Buka Demo / Portofolio Desain"
                            aria-label={`Buka Demo ${project.title}`}
                          >
                            <span>Demo</span>
                            <ExternalLink className="w-3.5 h-3.5 text-zinc-400 group-hover/btn:text-white transition-colors" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
