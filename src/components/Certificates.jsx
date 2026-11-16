import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, X, Calendar, CheckCircle2 } from 'lucide-react';

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    {
      id: 1,
      title: "Junior Web Developer",
      issuer: "Digitalent Scholarship (VSGA) — Kominfo RI",
      date: "2025",
      credentialId: "VSGA-KOMINFO-JWD",
      skills: ["HTML5", "CSS3", "JavaScript", "PHP", "Database"],
      verifyUrl: "https://www.linkedin.com/in/bayu-krisdiantoro-691598311/overlay/Certifications/781588429/treasury/?profileId=ACoAAE9JXs0BJDQlUgLyf2FwufYTOYgfrbToVlA",
      desc: "Sertifikasi kompetensi pelatihan Vocational School Graduate Academy (VSGA) oleh Kementerian Komunikasi dan Informatika (Kominfo RI) untuk skema keahlian Junior Web Developer."
    },
  ];

  return (
    <section id="certificates" className="py-20 md:py-28 bg-white border-t border-zinc-100 relative z-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-zinc-950 tracking-tight">
              Certificates
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500 font-sans mt-1">
              Sertifikasi keahlian terverifikasi dari program resmi pemerintah dan industri.
            </p>
          </div>
          <span className="text-xs font-mono text-zinc-400">
            1 Sertifikasi Terverifikasi
          </span>
        </div>

        {/* Featured Single Certificate Card */}
        <div className="max-w-3xl">
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              onClick={() => setSelectedCert(cert)}
              className="p-6 sm:p-8 rounded-2xl bg-white border border-zinc-200/90 hover:border-zinc-950 hover:shadow-lg transition-all duration-300 cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-900 group-hover:bg-zinc-950 group-hover:text-white transition-colors">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-medium text-zinc-700 block">
                        {cert.issuer}
                      </span>
                      <span className="text-[10px] font-mono text-emerald-600 flex items-center gap-1 font-semibold">
                        <CheckCircle2 className="w-3 h-3" /> Terverifikasi Resmi
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-zinc-400 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {cert.date}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-heading font-bold text-zinc-950 group-hover:text-black tracking-tight mb-2">
                  {cert.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-600 font-sans leading-relaxed mb-6">
                  {cert.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-100 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {cert.skills.map((s) => (
                    <span
                      key={s}
                      className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-zinc-100 text-zinc-600 font-medium"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-zinc-950 text-white hover:bg-black transition-all duration-200 shadow-2xs hover:shadow-xs"
                    title="Lihat Kredensial di LinkedIn"
                  >
                    <span>Verifikasi LinkedIn</span>
                    <ExternalLink className="w-3 h-3 text-zinc-400" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal Detail Sertifikat */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            />

            {/* Modal Card Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl z-10 border border-zinc-200"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center backdrop-blur-md transition-colors"
                aria-label="Tutup Modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Certificate Image Mockup */}
              <div className="relative aspect-[16/10] bg-zinc-100 overflow-hidden border-b border-zinc-200">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <span className="text-xs font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md">
                      {selectedCert.issuer}
                    </span>
                    <h4 className="text-lg sm:text-xl font-heading font-bold mt-2">
                      {selectedCert.title}
                    </h4>
                  </div>
                </div>
              </div>

              {/* Certificate Details */}
              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-zinc-500">
                  <span>ID Kredensial: {selectedCert.credentialId}</span>
                  <span className="flex items-center gap-1 text-emerald-600 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Terverifikasi Resmi
                  </span>
                </div>

                <p className="text-sm text-zinc-600 font-sans leading-relaxed">
                  {selectedCert.desc}
                </p>

                {/* Skills tags */}
                <div className="pt-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-2">
                    Keahlian Teruji:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedCert.skills.map((s) => (
                      <span
                        key={s}
                        className="text-xs font-mono px-3 py-1 rounded-md bg-zinc-100 text-zinc-700 font-medium"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Modal Footer Actions */}
                <div className="pt-5 border-t border-zinc-100 flex items-center justify-end gap-3">
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="px-5 py-2.5 rounded-full text-xs font-semibold text-zinc-600 hover:text-black hover:bg-zinc-100 transition-colors"
                  >
                    Tutup
                  </button>
                  <a
                    href={selectedCert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-semibold bg-zinc-950 text-white hover:bg-black transition-colors shadow-sm"
                  >
                    <span>Verifikasi di LinkedIn</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
