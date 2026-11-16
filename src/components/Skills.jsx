import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';

// Interactive Card dengan Efek 3D Tilt + Cursor Glow
function InteractiveSkillCard({ skill, index }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["14deg", "-14deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-14deg", "14deg"]);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clientX = e.clientX - rect.left;
    const clientY = e.clientY - rect.top;

    setMousePos({ x: clientX, y: clientY });
    x.set(clientX / rect.width - 0.5);
    y.set(clientY / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <div style={{ perspective: 800 }}>
      <motion.div
        layout
        initial={{ opacity: 0, y: 25, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, scale: 0.85, transition: { duration: 0.2 } }}
        transition={{
          type: "spring",
          stiffness: 280,
          damping: 22,
          delay: index * 0.04
        }}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ y: -8, scale: 1.05 }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        className="relative p-5 rounded-2xl bg-white border border-zinc-200/90 hover:border-zinc-950 transition-colors duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between overflow-hidden group cursor-pointer"
      >
        {/* Dynamic Interactive Cursor Glow */}
        {isHovered && (
          <div
            className="pointer-events-none absolute -inset-px rounded-2xl opacity-100 transition-opacity duration-300"
            style={{
              background: `radial-gradient(150px circle at ${mousePos.x}px ${mousePos.y}px, rgba(24, 24, 27, 0.08), transparent 75%)`,
            }}
          />
        )}

        {/* Top Header of Card: Official Icon + Category Badge */}
        <div style={{ transform: "translateZ(20px)" }} className="flex items-center justify-between mb-4 relative z-10">
          <motion.div
            whileHover={{ rotate: [0, -10, 10, 0], scale: 1.15 }}
            transition={{ duration: 0.35 }}
            className="w-10 h-10 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-500 group-hover:text-zinc-950 group-hover:bg-white group-hover:shadow-md transition-all duration-300 shadow-inner"
          >
            {skill.devicon ? (
              <i className={`${skill.devicon} text-2xl text-zinc-500 group-hover:text-zinc-950 transition-colors`} />
            ) : skill.lucide ? (
              <skill.lucide className="w-5 h-5 text-zinc-500 group-hover:text-zinc-950 transition-colors" />
            ) : null}
          </motion.div>

          <span className="text-[10px] font-mono tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-zinc-100 text-zinc-600 font-medium border border-zinc-200/70 group-hover:bg-zinc-950 group-hover:text-white transition-colors duration-200">
            {skill.tag}
          </span>
        </div>

        {/* Bottom Name & Micro-interaction Arrow */}
        <div style={{ transform: "translateZ(15px)" }} className="relative z-10">
          <h3 className="text-sm font-heading font-bold text-zinc-900 group-hover:text-black tracking-tight flex items-center justify-between">
            <span>{skill.name}</span>
            <span className="text-xs text-zinc-300 group-hover:text-zinc-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200">
              ↗
            </span>
          </h3>
        </div>
      </motion.div>
    </div>
  );
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'Semua' },
    { id: 'design', label: 'Desain & Grafis' },
    { id: 'dev', label: 'Web Development' },
    { id: 'tools', label: 'Tools & Editor' },
  ];

  // Daftar perangkat dan teknologi yang digunakan
  const skillItems = [
    // 1. Desain Grafis & Kreatif Visual
    { name: 'Adobe Photoshop', category: 'design', devicon: 'devicon-photoshop-plain', tag: 'Photo Editing' },
    { name: 'Adobe Illustrator', category: 'design', devicon: 'devicon-illustrator-plain', tag: 'Vector & Logo' },
    { name: 'Figma', category: 'design', devicon: 'devicon-figma-plain', tag: 'UI/UX Design' },
    { name: 'Canva', category: 'design', devicon: 'devicon-canva-original', tag: 'Visual Content' },

    // 2. Web Development
    { name: 'Laravel', category: 'dev', devicon: 'devicon-laravel-original', tag: 'Backend Web' },
    { name: 'React.js', category: 'dev', devicon: 'devicon-react-original', tag: 'Frontend Web' },
    { name: 'JavaScript', category: 'dev', devicon: 'devicon-javascript-plain', tag: 'Web Logic' },
    { name: 'HTML5 & CSS3', category: 'dev', devicon: 'devicon-html5-plain', tag: 'Markup & Style' },
    { name: 'Tailwind CSS', category: 'dev', devicon: 'devicon-tailwindcss-plain', tag: 'Utility CSS' },

    // 3. Tools Pendukung
    { name: 'Git & GitHub', category: 'tools', devicon: 'devicon-github-original', tag: 'Version Control' },
    { name: 'VS Code', category: 'tools', devicon: 'devicon-vscode-plain', tag: 'Code Editor' },
  ];

  const filteredSkills = activeCategory === 'all'
    ? skillItems
    : skillItems.filter(item => item.category === activeCategory);

  return (
    <section id="skills" className="py-20 md:py-28 bg-white border-t border-zinc-100 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header & Animated Category Filter Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-zinc-950 tracking-tight">
              Skills
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500 font-sans mt-1">
              Eksplorasi perangkat lunak kreatif visual dan teknologi pengembangan web yang digunakan.
            </p>
          </div>

          {/* Animated Tab Bar with Framer Motion layoutId */}
          <div className="flex flex-wrap gap-1 p-1.5 rounded-full bg-zinc-100/90 border border-zinc-200/60 self-start sm:self-auto relative shadow-inner">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-semibold font-sans transition-colors duration-200 z-10 ${
                    isActive ? 'text-white' : 'text-zinc-600 hover:text-zinc-950'
                  }`}
                >
                  {/* Floating active background pill */}
                  {isActive && (
                    <motion.div
                      layoutId="activeSkillTabPill"
                      className="absolute inset-0 rounded-full bg-zinc-950 shadow-sm"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic & Animated Skills Grid with 3D Tilt */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3.5 sm:gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <InteractiveSkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
