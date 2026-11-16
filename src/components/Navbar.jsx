import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#hero' },
    { name: 'Tentang Saya', href: '#about' },
    { name: 'Keahlian', href: '#skills' },
    { name: 'Portofolio', href: '#portfolio' },
    { name: 'Sertifikat', href: '#certificates' },
    { name: 'Kontak', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-zinc-200/80 shadow-sm shadow-zinc-900/5'
          : 'bg-white/50 backdrop-blur-sm border-b border-zinc-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Brand / Logo Minimalist dengan Font Heading Elegan */}
        <a href="#hero" className="flex items-center gap-2 group">
          <span className="font-heading font-bold text-xl tracking-tight text-zinc-950 group-hover:text-zinc-600 transition-colors">
            Bayu<span className="text-zinc-400">.</span>
          </span>
          <span className="hidden sm:inline-block text-[11px] font-mono text-zinc-400 tracking-wider pl-2 border-l border-zinc-200">
            PORTFOLIO
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600 font-sans">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-black transition-colors duration-200 py-1"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide bg-zinc-900 text-white hover:bg-black transition-all duration-200 flex items-center gap-1.5 shadow-sm hover:shadow"
          >
            <span>Hubungi Saya</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-zinc-700 hover:text-black p-2 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-zinc-200 px-6 py-6 space-y-4 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-zinc-700 hover:text-black text-base py-1 font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-zinc-100">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-full font-semibold text-sm bg-zinc-900 text-white flex items-center justify-center gap-2 shadow-sm"
            >
              <span>Hubungi Saya</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </motion.header>
  );
}
