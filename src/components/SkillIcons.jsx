import React from 'react';

// Official & Authentic Brand SVGs for Skills
export const HtmlIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path d="M4.5 21L2.5 3H21.5L19.5 21L12 23L4.5 21Z" fill="#E44D26"/>
    <path d="M12 21.2L18.1 19.5L19.7 4.7H12V21.2Z" fill="#F16529"/>
    <path d="M12 8.7H8.2L8.5 11.8H12V14.9H8.7L9 18.2L12 19L15 18.2L15.3 14.5H13.2L13.1 16.3L12 16.6L10.9 16.3L10.7 13.9H15.4L15.9 7.7H7.9L8.1 8.7H12V8.7Z" fill="white"/>
  </svg>
);

export const CssIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path d="M4.5 21L2.5 3H21.5L19.5 21L12 23L4.5 21Z" fill="#1572B6"/>
    <path d="M12 21.2L18.1 19.5L19.7 4.7H12V21.2Z" fill="#33A9DC"/>
    <path d="M12 8.7H8.2L8.5 11.8H12V8.7ZM12 14.9H8.7L9 18.2L12 19L15 18.2L15.3 14.5H13.2L13.1 16.3L12 16.6L10.9 16.3L10.7 13.9H12V11.8H15.6L15.9 7.7H7.9L8.1 8.7H15.4L15.3 9.7H12V14.9Z" fill="white"/>
  </svg>
);

export const JsIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="4" fill="#F7DF1E"/>
    <path d="M6.5 17.5C7.2 18.2 8.1 18.6 9.3 18.6C11 18.6 11.9 17.7 11.9 16.1V9.5H9.7V16.1C9.7 16.9 9.3 17.2 8.7 17.2C8.1 17.2 7.7 16.9 7.3 16.4L6.5 17.5ZM13.8 17.5C14.7 18.3 16 18.8 17.5 18.8C20 18.8 21.3 17.5 21.3 15.5C21.3 13.8 20.3 13 18.4 12.2L17.7 11.9C16.5 11.4 16 10.9 16 10.1C16 9.2 16.7 8.6 17.8 8.6C18.8 8.6 19.6 9 20.2 9.8L21.2 8.5C20.3 7.5 19.1 7 17.7 7C15.5 7 14.1 8.4 14.1 10.2C14.1 12 15.2 12.8 16.9 13.5L17.6 13.8C19 14.4 19.6 15 19.6 15.8C19.6 16.9 18.6 17.5 17.4 17.5C16.1 17.5 15.1 16.9 14.5 16L13.8 17.5Z" fill="#000000"/>
  </svg>
);

export const ReactIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <ellipse cx="12" cy="12" rx="3" ry="8" transform="rotate(30 12 12)" stroke="#61DAFB" strokeWidth="1.5"/>
    <ellipse cx="12" cy="12" rx="3" ry="8" transform="rotate(90 12 12)" stroke="#61DAFB" strokeWidth="1.5"/>
    <ellipse cx="12" cy="12" rx="3" ry="8" transform="rotate(150 12 12)" stroke="#61DAFB" strokeWidth="1.5"/>
    <circle cx="12" cy="12" r="1.8" fill="#61DAFB"/>
  </svg>
);

export const TailwindIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path d="M12 6C9 6 7.5 7.5 7.5 10.5C8.5 9 9.5 8.5 10.5 9C11.5 9.5 12 10.5 13 12C14 13.5 15.5 15 18.5 15C21.5 15 23 13.5 23 10.5C22 12 21 12.5 20 12C19 11.5 18.5 10.5 17.5 9C16.5 7.5 15 6 12 6ZM5.5 12C2.5 12 1 13.5 1 16.5C2 15 3 14.5 4 15C5 15.5 5.5 16.5 6.5 18C7.5 19.5 9 21 12 21C15 21 16.5 19.5 16.5 16.5C15.5 18 14.5 18.5 13.5 18C12.5 17.5 12 16.5 11 15C10 13.5 8.5 12 5.5 12Z" fill="#38BDF8"/>
  </svg>
);

export const ResponsiveIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="13" rx="2" className="stroke-zinc-800"/>
    <path d="M8 21h8m-4-5v5" className="stroke-zinc-800"/>
    <rect x="15" y="10" width="7" height="11" rx="1.5" fill="#FAFAFA" className="stroke-zinc-950"/>
    <line x1="18.5" y1="18.5" x2="18.51" y2="18.5" className="stroke-zinc-950" strokeWidth="2.5"/>
  </svg>
);

export const GitIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path d="M22.06 10.59L13.41 1.94C12.63 1.16 11.37 1.16 10.59 1.94L8.71 3.82L10.82 5.93C11.66 5.65 12.64 5.84 13.31 6.51C14.15 7.35 14.28 8.64 13.72 9.61L15.86 11.75C16.83 11.19 18.12 11.32 18.96 12.16C19.99 13.19 19.99 14.86 18.96 15.89C17.93 16.92 16.26 16.92 15.23 15.89C14.47 15.13 14.31 14 14.73 13.09L12.78 11.14V16.3C13.09 16.48 13.37 16.74 13.58 17.06C14.44 18.39 14.07 20.15 12.74 21.01C11.41 21.87 9.65 21.5 8.79 20.17C8.1 19.11 8.21 17.72 9.03 16.78V11.23C8.21 10.29 8.1 8.9 8.79 7.84C8.97 7.56 9.2 7.32 9.47 7.13L7.38 5.04L1.94 10.48C1.16 11.26 1.16 12.52 1.94 13.3L10.59 21.95C11.37 22.73 12.63 22.73 13.41 21.95L22.06 13.3C22.84 12.52 22.84 11.26 22.06 10.59Z" fill="#F05032"/>
  </svg>
);

export const GithubIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017C2 16.446 4.87 20.198 8.84 21.523C9.34 21.617 9.52 21.306 9.52 21.042C9.52 20.806 9.51 20.18 9.51 19.352C6.73 19.957 6.14 18.016 6.14 18.016C5.69 16.87 5.03 16.565 5.03 16.565C4.12 15.945 5.1 15.958 5.1 15.958C6.11 16.028 6.64 16.997 6.64 16.997C7.53 18.528 8.98 18.086 9.55 17.831C9.64 17.185 9.9 16.744 10.18 16.495C7.96 16.242 5.63 15.38 5.63 11.536C5.63 10.44 6.02 9.544 6.66 8.843C6.56 8.59 6.21 7.57 6.76 6.208C6.76 6.208 7.6 5.94 9.51 7.234C10.31 7.012 11.16 6.902 12.01 6.898C12.86 6.902 13.71 7.012 14.51 7.234C16.42 5.94 17.26 6.208 17.26 6.208C17.81 7.57 17.46 8.59 17.36 8.843C18 9.544 18.39 10.44 18.39 11.536C18.39 15.391 16.05 16.239 13.82 16.487C14.18 16.797 14.5 17.411 14.5 18.353C14.5 19.704 14.49 20.796 14.49 21.042C14.49 21.309 14.67 21.624 15.18 21.522C19.14 20.193 22.01 16.444 22.01 12.017C22.01 6.484 17.533 2 12 2Z"/>
  </svg>
);

export const FigmaIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path d="M8 24C10.2091 24 12 22.2091 12 20V16H8C5.79086 16 4 17.7909 4 20C4 22.2091 5.79086 24 8 24Z" fill="#0ACF83"/>
    <path d="M4 12C4 9.79086 5.79086 8 8 8H12V16H8C5.79086 16 4 14.2091 4 12Z" fill="#A259FF"/>
    <path d="M4 4C4 1.79086 5.79086 0 8 0H12V8H8C5.79086 8 4 6.20914 4 4Z" fill="#F24E1E"/>
    <path d="M12 0H16C18.2091 0 20 1.79086 20 4C20 6.20914 18.2091 8 16 8H12V0Z" fill="#FF7262"/>
    <path d="M20 12C20 14.2091 18.2091 16 16 16C13.7909 16 12 14.2091 12 12C12 9.79086 13.7909 8 16 8C18.2091 8 20 9.79086 20 12Z" fill="#1ABCFE"/>
  </svg>
);

export const VsCodeIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path d="M17.4 22.9C18 23.2 18.7 23 19.1 22.5L23.4 18.3C23.8 17.9 24 17.4 24 16.9V7.1C24 6.6 23.8 6.1 23.4 5.7L19.1 1.5C18.7 1 18 0.8 17.4 1.1C16.9 1.4 16.5 1.9 16.5 2.5V4.6L7.9 11.2L4.5 8.6C4 8.2 3.3 8.2 2.8 8.6L0.4 10.6C-0.1 11 -0.1 11.8 0.3 12.3L3.1 15.3L0.3 18.3C-0.1 18.8 -0.1 19.6 0.4 20L2.8 22C3.3 22.4 4 22.4 4.5 22L7.9 19.4L16.5 26V21.5C16.5 22.1 16.9 22.6 17.4 22.9Z" fill="#007ACC" fillOpacity="0"/>
    <path d="M19.5 2.2L6.8 12L19.5 21.8C20 22.2 20.7 21.9 20.7 21.3V2.7C20.7 2.1 20 1.8 19.5 2.2Z" fill="#0065A9"/>
    <path d="M19.5 2.2L8.2 11L1.2 5.5C0.7 5.1 0 5.4 0 6V18C0 18.6 0.7 18.9 1.2 18.5L8.2 13L19.5 21.8C20.1 22.3 21 21.8 21 21V3C21 2.2 20.1 1.7 19.5 2.2Z" fill="#007ACC"/>
    <path d="M16 12L3.5 2.3C2.8 1.8 1.8 2.3 1.8 3.2V20.8C1.8 21.7 2.8 22.2 3.5 21.7L16 12Z" fill="#1F9CF0"/>
  </svg>
);

export const ViteIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path d="M23.3 3.6L12.8 23C12.5 23.5 11.8 23.5 11.5 23L1 3.6C0.7 3 1.1 2.3 1.8 2.3L22.5 2.3C23.2 2.3 23.6 3 23.3 3.6Z" fill="url(#viteGradient)"/>
    <path d="M15.4 1.1L7.7 8.5L11.5 8.9L8.6 15.6L16.6 8.3L12.8 7.9L15.4 1.1Z" fill="#FFD62E"/>
    <defs>
      <linearGradient id="viteGradient" x1="1.5" y1="2.5" x2="22.5" y2="23" gradientUnits="userSpaceOnUse">
        <stop stopColor="#41D1FF"/>
        <stop offset="1" stopColor="#BD34FE"/>
      </linearGradient>
    </defs>
  </svg>
);

export const ProblemSolvingIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a6 6 0 0 0-6 6c0 2.2 1.2 4.1 3 5.2V17a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-3.8c1.8-1.1 3-3 3-5.2a6 6 0 0 0-6-6z" className="stroke-amber-500 fill-amber-500/10"/>
    <path d="M10 21h4" className="stroke-zinc-900"/>
    <path d="M12 9v3m-1.5-1.5h3" className="stroke-amber-600"/>
  </svg>
);

export const CleanCodeIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" className="stroke-emerald-600"/>
    <polyline points="8 6 2 12 8 18" className="stroke-emerald-600"/>
    <line x1="14" y1="4" x2="10" y2="20" className="stroke-zinc-800"/>
  </svg>
);
