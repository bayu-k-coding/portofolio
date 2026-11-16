import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TextMarquee from './components/TextMarquee';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-white text-zinc-900 font-sans antialiased selection:bg-zinc-900 selection:text-white min-h-screen relative overflow-x-hidden">

      {/* Sticky Glassmorphic Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="relative z-10">
        {/* Tahap 1: Hero Section */}
        <Hero />

        {/* Tahap 2: Section Tentang Saya */}
        <About />

        {/* Animated Running Text Banner (Right to Left & Left to Right) */}
        <TextMarquee />

        {/* Section Keahlian & Teknologi */}
        <Skills />

        {/* Tahap 3: Section Portofolio & Sertifikat */}
        <Portfolio />
        <Certificates />

        {/* Tahap 4: Section Kontak & WhatsApp Call to Action */}
        <Contact />
      </main>

      {/* Tahap 4: Minimalist & Clean Footer */}
      <Footer />

    </div>
  );
}
