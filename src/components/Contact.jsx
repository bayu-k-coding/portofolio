import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin, GraduationCap } from 'lucide-react';

// Official WhatsApp Icon SVG
function WhatsAppIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.071.376-.043.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.155.57 4.178 1.564 5.927l-1.656 6.052 6.222-1.632c1.704.932 3.659 1.468 5.74 1.468 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

export default function Contact() {
  const whatsappUrl = "https://wa.me/6289524054720?text=Halo%20Bayu%2C%20saya%20melihat%20portofolio%20Anda%20dan%20tertarik%20untuk%20berdiskusi";

  return (
    <section id="contact" className="py-14 md:py-20 bg-[#FAFAFA] border-t border-zinc-100 relative z-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Card: Split Layout Kompak, Ramping & Proporsional */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="rounded-2xl bg-white border border-zinc-200/90 p-6 sm:p-8 md:p-10 shadow-2xs hover:shadow-xs transition-shadow duration-300"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">

            {/* Sisi Kiri: Pesan Kolaborasi, Headline & Badges (7 Kolom) */}
            <div className="lg:col-span-7 space-y-3">
              
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/70 text-emerald-800 text-[11px] font-mono font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Terbuka untuk kolaborasi & proyek baru</span>
              </div>

              {/* Headline Proporsional (Tidak Raksasa) */}
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-zinc-950 tracking-tight leading-snug">
                Punya ide? <span className="text-zinc-400 font-normal">Mari wujudkan bersama.</span>
              </h2>

              {/* Deskripsi Singkat */}
              <p className="text-xs sm:text-sm text-zinc-600 font-sans leading-relaxed max-w-xl">
                Saya selalu senang belajar, berkenalan, dan menjajaki kesempatan baru. Kirim pesan langsung lewat WhatsApp, saya balas secepatnya.
              </p>

              {/* Info Badges Lokasi & Kampus */}
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <span className="px-3 py-1 rounded-full bg-zinc-100 text-zinc-600 text-xs font-mono font-medium border border-zinc-200/60 flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-zinc-400" />
                  <span>Madiun, Jawa Timur</span>
                </span>
                <span className="px-3 py-1 rounded-full bg-zinc-100 text-zinc-600 text-xs font-mono font-medium border border-zinc-200/60 flex items-center gap-1.5">
                  <GraduationCap className="w-3 h-3 text-zinc-400" />
                  <span>Politeknik Negeri Madiun</span>
                </span>
              </div>

            </div>

            {/* Sisi Kanan: Call to Action WhatsApp & Nomor (5 Kolom) */}
            <div className="lg:col-span-5 flex flex-col items-start lg:items-end justify-center gap-2.5 pt-5 lg:pt-0 border-t lg:border-t-0 border-zinc-100">

              {/* Tombol Utama WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full bg-zinc-950 hover:bg-black text-white text-xs sm:text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow hover:-translate-y-0.5 group"
              >
                <WhatsAppIcon className="w-4 h-4 text-emerald-400 fill-current" />
                <span>Hubungi via WhatsApp</span>
                <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
              </a>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
