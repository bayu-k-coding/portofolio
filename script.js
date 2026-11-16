/**
 * Portfolio Interactive Scripts
 * - Typing & Deleting Text Animation
 * - Navbar Scroll Effect
 * - Mobile Menu Toggle
 * - Lucide Icon Initializer
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Inisialisasi Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // 2. Typing & Deleting Animation (Typewriter Effect)
  const typewriterElement = document.getElementById('typewriter-text');

  // Daftar teks yang akan diketik dan dihapus
  const words = [
    "Mahasiswa Teknik Informatika 🎓",
    "Web Developer Enthusiast 💻",
    "UI/UX Design Enthusiast 🎨",
    "Creative Problem Solver ⚡"
  ];

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100; // Kecepatan mengetik (ms)
  let deletingSpeed = 50; // Kecepatan menghapus (ms)
  let pauseEnd = 2000;    // Jeda saat kata selesai diketik (ms)
  let pauseStart = 500;   // Jeda sebelum mulai mengetik kata baru (ms)

  function typeEffect() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
      // Proses menghapus karakter
      typewriterElement.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
    } else {
      // Proses mengetik karakter
      typewriterElement.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
    }

    // Tentukan kecepatan berikutnya
    let nextDelay = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && charIndex === currentWord.length) {
      // Selesai mengetik 1 kata penuh, beri jeda sebelum menghapus
      nextDelay = pauseEnd;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      // Selesai menghapus 1 kata, pindah ke kata berikutnya
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      nextDelay = pauseStart;
    }

    setTimeout(typeEffect, nextDelay);
  }

  // Mulai animasi jika elemen ditemukan
  if (typewriterElement) {
    setTimeout(typeEffect, 600);
  }

  // 3. Navbar Scroll Blur & Border Effect
  const mainNavbar = document.getElementById('main-navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      mainNavbar.classList.add('bg-[#0B0F17]/90', 'backdrop-blur-md', 'border-b', 'border-white/10', 'shadow-lg', 'shadow-black/20');
      mainNavbar.classList.remove('bg-transparent');
    } else {
      mainNavbar.classList.remove('bg-[#0B0F17]/90', 'backdrop-blur-md', 'border-b', 'border-white/10', 'shadow-lg', 'shadow-black/20');
      mainNavbar.classList.add('bg-transparent');
    }
  });

  // 4. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Menutup mobile menu saat link diklik
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }
});
