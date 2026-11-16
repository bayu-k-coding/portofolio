import React from 'react';
import { ArrowUp, Github, Linkedin, Instagram, Mail } from 'lucide-react';

function BehanceIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-4.043 0-5.625-2.73-5.625-5.674 0-3.327 2.148-5.826 5.678-5.826 3.738 0 5.372 2.766 5.093 6.096h-7.859c.074 1.488.948 2.721 2.802 2.721 1.341 0 2.139-.636 2.502-1.317h2.51zm-7.794-4.107h5.092c-.066-1.332-.865-2.29-2.484-2.29-1.577 0-2.477.947-2.608 2.29zm-9.932-7.893h5.962c2.052 0 3.744.57 3.744 2.81 0 1.206-.607 2.083-1.637 2.503 1.353.407 2.05 1.503 2.05 2.94 0 2.56-2.032 3.747-4.195 3.747h-5.924v-12zm3.109 2.518v2.339h2.385c.983 0 1.554-.424 1.554-1.17 0-.746-.571-1.169-1.554-1.169h-2.385zm0 4.676v2.663h2.646c1.077 0 1.734-.482 1.734-1.331 0-.85-.657-1.332-1.734-1.332h-2.646z"/>
    </svg>
  );
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const footerLinks = [
    { name: 'Beranda', href: '#hero' },
    { name: 'Tentang Saya', href: '#about' },
    { name: 'Keahlian', href: '#skills' },
    { name: 'Portofolio', href: '#portfolio' },
    { name: 'Sertifikat', href: '#certificates' },
    { name: 'Kontak', href: '#contact' },
  ];

  return (
    <footer className="border-t border-zinc-200/80 bg-white py-12 md:py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Footer: Brand, Navigation & Back To Top */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-10 border-b border-zinc-100">

          {/* Brand Monogram */}
          <div className="space-y-1">
            <a href="#hero" className="flex items-center gap-2 group">
              <span className="font-heading font-bold text-2xl tracking-tight text-zinc-950 group-hover:text-zinc-600 transition-colors">
                Bayu<span className="text-zinc-400">.</span>
              </span>
              <span className="text-[11px] font-mono text-zinc-400 tracking-wider pl-2 border-l border-zinc-200">
                PORTFOLIO
              </span>
            </a>
            <p className="text-xs text-zinc-500 font-sans">
              Mahasiswa Teknologi Informasi.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <nav className="flex flex-wrap items-center gap-6 text-xs sm:text-sm font-medium text-zinc-600 font-sans">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-black transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full border border-zinc-200 hover:border-zinc-950 text-zinc-700 hover:text-black flex items-center justify-center transition-all duration-200 self-start md:self-auto hover:-translate-y-1 shadow-2xs hover:shadow-xs"
            aria-label="Kembali ke atas"
            title="Kembali ke atas"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom Footer: Legal & Social Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <p>© {new Date().getFullYear()} Bayu. All rights reserved.</p>

          {/* Social Media Links */}
          <div className="flex items-center gap-5 text-zinc-400">
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
          </div>
        </div>

      </div>
    </footer>
  );
}
