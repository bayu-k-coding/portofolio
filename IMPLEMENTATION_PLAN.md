# 📋 Rencana Implementasi: Website Portofolio Personal
> **Tema Desain:** *Fun, Clean, Mewah & Elegan (Subtle Micro-Animations)*

---

## 1. 🎯 Konsep & Identitas Visual

Untuk memenuhi kriteria **fun, clean, mewah, dan elegan** tanpa terkesan berlebihan (*lebay*), konsep visual dirancang dengan prinsip berikut:

* **Palet Warna (Luxury & Modern Clean):**
  * **Dark / Deep Obsidian Mode (Default/Rekomendasi Mewah):** Latar belakang deep rich slate/black (`#0B0F17` & `#111827`) dipadukan dengan aksen mewah seperti *Champagne Gold* (`#F59E0B` / `#D97706`) atau *Emerald / Violet Glow* halus (`#6366F1` & `#10B981`).
  * **Light Mode (Clean & Minimalist):** Off-white canvas (`#F8FAFC`) dengan kartu putih berbayang lembut dan border tipis elegan.
* **Tipografi:**
  * Header/Display: `Plus Jakarta Sans` atau `Outfit` (bersih, modern, berkelas).
  * Body Text: `Inter` (tingkat keterbacaan tinggi dan rapi).
* **Efek & Animasi (Tasteful & Non-distracting):**
  * **Glassmorphism:** Efek kaca blur halus pada navbar dan kartu (`backdrop-blur-md`, border translusen 1px).
  * **Micro-Interactions:** Efek lift/elevate lembut saat kursor melayang di atas kartu proyek/skill.
  * **Scroll Reveal:** Animasi fade-in & slide-up bertahap saat elemen masuk ke viewport.
  * **Floating / Ambient Aura:** Efek cahaya gradasi lembut (soft blurred gradient blobs) di latar belakang hero section.

---

## 2. 🏗️ Arsitektur & Struktur Halaman

Website ini dirancang dalam bentuk **Single-Page Application (SPA)** yang responsif (Mobile, Tablet, Desktop) dengan struktur sebagai berikut:

```
[ Navigation Bar (Sticky Glassmorphic) ]
                   │
[ 1. Hero Section (Foto Profil, Nama, Role, Tagline, Quick CTA) ]
                   │
[ 2. Tentang Saya (About Me - Background, Hobi, Quick Stats) ]
                   │
[ 3. Keahlian & Keterampilan (Skills - Tech Stack & Tools) ]
                   │
[ 4. Portofolio & Sertifikat (Karya, Proyek, Modal Preview) ]
                   │
[ 5. Kontak & Call-to-Action (WhatsApp CTA, Form/Links, Footer) ]
```

---

## 3. 📑 Rincian Setiap Bagian (Section Breakdown)

### A. Navigation Bar (Sticky Header)
* Logo / Monogram Inisial nama yang elegan.
* Menu Navigasi: *Beranda*, *Tentang*, *Keahlian*, *Portofolio*, *Kontak*.
* Tombol Dark/Light mode toggle.
* Tombol CTA cepat: *"Hubungi Saya"* (link langsung ke WhatsApp/Kontak).

### B. Header / Hero Section
* **Foto Profil:**
  * Bingkai foto melingkar atau rounded-rect dengan border gradasi mewah (*subtle glow*).
  * Efek foto profesional, bersih, dan rapi.
* **Identitas Diri:**
  * Greeting ramah & hangat (*"Halo, Saya..."*).
  * **Nama Lengkap** dengan tipografi tegas & elegan.
  * **Badge Julukan/Role:** Dinamis atau berhias badge eksklusif (misal: *Web Developer Enthusiast*, *UI/UX Designer*, dsb.).
* **Ringkasan Singkat (Bio 1–2 kalimat):**
  * Pengantar singkat yang profesional, menggambarkan passion, dedikasi, dan nilai yang dibawa.
* **Aksi Cepat (Quick CTA):**
  * Tombol utama *"Lihat Portofolio"* & *"Hubungi Saya via WhatsApp"*.
  * Tautan ikon sosial (GitHub, LinkedIn, Instagram).

### C. Tentang Saya (About Me)
* **Cerita Latar Belakang:**
  * Pendidikan terakhir / saat ini.
  * Passion, minat, dan fokus ketertarikan di dunia teknologi/desain.
  * Hobi relevan yang menunjukkan kreativitas dan cara berpikir pemecahan masalah.
* **Kartu Ringkasan (Highlights):**
  * *Education Card* (Kampus / Jurusan).
  * *Fun Facts / Interests* dengan pill badge yang interaktif.
  * *Key Metrics* (misal: Jumlah Proyek, Sertifikat, Klien/Pengalaman).

### D. Keahlian (Skills)
* **Kategori Keterampilan:**
  * **Frontend & Web:** HTML5, CSS3/Tailwind, JavaScript, dsb.
  * **Tools & Software:** Git, Figma, VS Code, Postman, dll.
  * **Soft Skills:** Problem Solving, Team Collaboration, Adaptability.
* **Tampilan Interaktif:**
  * Kartu skill dengan icon resmi (Lucide/Devicon).
  * Efek hover glow warna aksen yang hidup saat disentuh kursor.

### E. Portofolio & Karya Singkat (Portfolio & Certificates)
* **Filter Kategori (Opsional/Tab):** *Semua*, *Proyek Web*, *Desain/Karya*, *Sertifikat*.
* **Kartu Proyek (Project Cards):**
  * Thumbnail mockup / preview proyek berkualitas tinggi.
  * Judul proyek, deskripsi singkat (1-2 kalimat).
  * Tag teknologi yang digunakan (misal: `HTML`, `Tailwind`, `JS`).
  * Tombol aksi: *Demo Langsung (Live Preview)* dan *Source Code (GitHub)*.
* **Bagian Sertifikat:**
  * Grid sertifikasi atau pencapaian dengan modal popup (lightbox) untuk melihat sertifikat ukuran penuh.

### F. Kontak & Tombol WhatsApp (Call to Action / Footer)
* **Banner Kontak Elegan:**
  * Pesan ajakan kolaborasi yang menarik (*"Tertarik bekerja sama atau berdiskusi seputar proyek baru?"*).
* **Tombol Utama WhatsApp (Primary CTA):**
  * Tombol berdesain menonjol dengan icon WhatsApp resmi.
  * Dilengkapi fitur pesan otomatis (*pre-filled message*), misalnya:  
    `"Halo [Nama], saya melihat portofolio Anda dan tertarik untuk berdiskusi mengenai proyek..."`
* **Informasi Tambahan:**
  * Alamat Email, Lokasi/Kota, Profil LinkedIn.
* **Footer:**
  * Copyright personal, tautan kembali ke atas (*Back to top*), dan kredit pembuat.

---

## 4. 💻 Rekomendasi Teknologi (Tech Stack)

| Komponen | Pilihan Rekomendasi | Alasan Pemilihan |
| :--- | :--- | :--- |
| **Markup & Struktur** | **HTML5 Semantik** | Ringan, SEO-friendly, dan aksesibilitas maksimal. |
| **Styling & Desain** | **Tailwind CSS** | Styling modern, utilitas cepat, responsif, dan mudah dikustomisasi tema mewah/glassmorphic. |
| **Icons** | **Lucide Icons / Boxicons** | Ikon clean, tajam, dan elegan. |
| **Logika & Animasi** | **Vanilla JS + AOS / ScrollReveal** | Performa kilat (0 overhead bundle), animasi halus berbasis scroll tanpa beban memori. |
| **Penyimpanan/Deploy** | **GitHub Pages / Vercel / Netlify** | Gratis, cepat, dan siap pakai kapan saja. |

---

## 5. 📝 Data & Konten yang Perlu Dipersiapkan

Berikut data yang bisa Anda berikan atau dapat kami bantu isi dengan placeholder profesional terlebih dahulu:

1. **Nama Lengkap & Panggilan:** (misal: *Rian Pratama*)
2. **Julukan / Role:** (misal: *Frontend Developer & Creative Designer*)
3. **Bio Singkat:** (1–2 kalimat pengantar hero)
4. **Foto Profil:** (File foto formal/semi-formal yang jelas)
5. **Nomor WhatsApp:** (Untuk integrasi tombol CTA langsung)
6. **Latar Belakang Pendidikan & Hobi:**
7. **Daftar Keahlian (Skills):**
8. **Daftar Karya / Proyek / Sertifikat:** (Judul, deskripsi singkat, link/gambar jika ada)

---

## 6. 🚀 Tahapan Pengerjaan (Step-by-Step Roadmap)

* [ ] **Fase 1: Setup Struktur Proyek & Asset**
  * Inisialisasi file proyek (`index.html`, `style.css`, `script.js`).
  * Konfigurasi font Google (`Plus Jakarta Sans`), Tailwind CSS, dan icon pack.
* [ ] **Fase 2: Pembuatan Komponen Layout**
  * Pembuatan Header & Hero section dengan foto profil & bio.
  * Pembuatan section Tentang Saya (About Me) & Keahlian (Skills).
  * Pembuatan section Portofolio & Sertifikat dengan modal preview.
  * Pembuatan Footer & Call-to-Action WhatsApp.
* [ ] **Fase 3: Sentuhan Estetika & Animasi (The "Fun & Luxury" Polish)**
  * Penerapan glassmorphism & ambient glowing gradients.
  * Penambahan efek scroll reveal & micro-interaction hover pada kartu.
  * Integrasi pesan otomatis WhatsApp generator.
* [ ] **Fase 4: Testing & Responsiveness**
  * Uji tampilan di layar smartphone, tablet, dan desktop.
  * Verifikasi fungsionalitas tombol navigasi dan tautan WhatsApp.
