// // import { skillCategories } from '../data/portfolioData';

// // const categoryIcons = {
// //   "🐍": (
// //     <svg className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
// //       <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
// //     </svg>
// //   ),
// //   "🧠": (
// //     <svg className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
// //       <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
// //     </svg>
// //   ),
// //   "⚡": (
// //     <svg className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
// //       <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
// //     </svg>
// //   ),
// //   "☁️": (
// //     <svg className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
// //       <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
// //     </svg>
// //   ),
// // };

// // export default function Skills() {
// //   return (
// //     <section id="skills" className="py-20 sm:py-28 lg:py-36 relative">
// //       <div className="absolute inset-0 pointer-events-none">
// //         <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse" />
// //       </div>

// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
// //         <div className="reveal mb-12 sm:mb-16 lg:mb-20">
// //           <p className="section-num mb-2 sm:mb-3 flex items-center gap-2">
// //             <span className="w-6 sm:w-8 h-px bg-purple-500/60"></span>
// //             // 02 — SKILLS
// //           </p>
// //           <h2 className="font-display font-bold leading-none" style={{ fontSize: 'clamp(2rem, 6vw, 5rem)' }}>
// //             <span className="gradient-text-subtle">Technical</span>
// //             <br />
// //             <span className="text-white">Expertise</span>
// //           </h2>
// //           <div className="section-divider mt-3 sm:mt-4" />
// //           <p className="text-white/50 mt-4 sm:mt-6 max-w-xl text-xs sm:text-sm md:text-base">
// //             🚀 Mastering cutting-edge technologies across data science, machine learning, and full-stack development
// //           </p>
// //         </div>

// //         <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
// //           {skillCategories.map((cat, i) => (
// //             <div
// //               key={cat.title}
// //               className="reveal glow-card p-5 sm:p-7 group hover:scale-105 transition-all duration-500"
// //               style={{ transitionDelay: `${i * 0.1}s` }}
// //             >
// //               <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-500/30 flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-all group-hover:shadow-lg group-hover:shadow-purple-500/30">
// //                 {categoryIcons[cat.icon]}
// //               </div>

// //               <h3 className="font-display font-bold text-lg sm:text-xl text-white mb-4 sm:mb-6 leading-tight group-hover:text-purple-300 transition-colors">
// //                 {cat.title}
// //               </h3>

// //               <div className="flex flex-wrap gap-1.5 sm:gap-2">
// //                 {cat.skills.map(skill => (
// //                   <span key={skill} className="skill-chip text-xs sm:text-sm font-medium">{skill}</span>
// //                 ))}
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //         <div className="reveal mt-12 sm:mt-16">
// //           <div className="glow-card p-5 sm:p-8 relative overflow-hidden">
// //             <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-transparent" />
// //             <h3 className="font-display font-bold text-white/90 text-lg sm:text-xl mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
// //               <span className="text-xl sm:text-2xl">✨</span>
// //               <span className="gradient-text-subtle">Also experienced with</span>
// //             </h3>
// //             <div className="flex flex-wrap gap-2 sm:gap-3">
// //               {[
// //                 "HTML5", "CSS3", "Tailwind", "Redux", "Next.js", "Express", "Firebase",
// //                 "Power BI", "Hadoop", "R", "Streamlit", "Joblib", "MLflow", "Airflow",
// //                 "Docker", "Kubernetes", "MongoDB", "PostgreSQL"
// //               ].map(t => (
// //                 <span key={t} className="skill-chip text-xs sm:text-sm opacity-80 hover:opacity-100 hover:scale-105 transition-all">{t}</span>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }


// import { skillCategories } from '../data/portfolioData';
// import { useRef, useState } from 'react';

// // Enhanced Icon Components
// const categoryIcons = {
//   "🐍": (
//     <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
//       <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
//     </svg>
//   ),
//   "🧠": (
//     <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
//       <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
//     </svg>
//   ),
//   "⚡": (
//     <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
//       <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
//     </svg>
//   ),
//   "☁️": (
//     <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
//       <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
//     </svg>
//   ),
// };

// // 3D Tilt Card Component
// const TiltCard = ({ children, index }) => {
//   const cardRef = useRef(null);
//   const [style, setStyle] = useState({ transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)' });

//   const handleMouseMove = (e) => {
//     if (!cardRef.current) return;
//     const rect = cardRef.current.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;
//     const centerX = rect.width / 2;
//     const centerY = rect.height / 2;
    
//     const rotateX = ((y - centerY) / centerY) * -10; // Max 10deg rotation
//     const rotateY = ((x - centerX) / centerX) * 10;
    
//     setStyle({
//       transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
//     });
//   };

//   const handleMouseLeave = () => {
//     setStyle({
//       transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
//     });
//   };

//   return (
//     <div
//       ref={cardRef}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={handleMouseLeave}
//       className="reveal transition-transform duration-200 ease-out"
//       style={{ ...style, transitionDelay: `${index * 0.1}s` }}
//     >
//       {children}
//     </div>
//   );
// };

// export default function Skills() {
//   const otherSkills = [
//     "HTML5", "CSS3", "Tailwind", "Redux", "Next.js", "Express", "Firebase",
//     "Power BI", "Hadoop", "R", "Streamlit", "Joblib", "MLflow", "Airflow",
//     "Docker", "Kubernetes", "MongoDB", "PostgreSQL"
//   ];

//   // Split other skills into two rows for the marquee
//   const row1 = otherSkills.slice(0, Math.ceil(otherSkills.length / 2));
//   const row2 = otherSkills.slice(Math.ceil(otherSkills.length / 2));

//   return (
//     <section id="skills" className="py-24 relative overflow-hidden">
//       {/* Background Elements */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/5 rounded-full blur-3xl animate-blob" />
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
//         {/* Section Header */}
//         <div className="reveal mb-16 text-center sm:text-left">
//           <div className="flex items-center gap-4 mb-4 justify-center sm:justify-start">
//             <span className="w-8 h-px bg-purple-500" />
//             <span className="font-mono text-purple-400 text-sm tracking-widest">// 02. SKILLS</span>
//           </div>
//           <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight">
//             <span className="text-white">My</span>
//             <span className="gradient-text"> Tech Stack</span>
//           </h2>
//           <p className="text-gray-400 mt-4 max-w-xl text-sm sm:text-base mx-auto sm:mx-0">
//             A curated collection of technologies I use to build data-driven solutions and scalable applications.
//           </p>
//         </div>

//         {/* Main Skills Grid */}
//         <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-20">
//           {skillCategories.map((cat, i) => (
//             <TiltCard key={cat.title} index={i}>
//               <div className="glow-card p-7 h-full relative overflow-hidden group border border-white/5 hover:border-purple-500/30 transition-colors">
//                 {/* Top Shine Effect */}
//                 <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
//                 <div className="relative z-10">
//                   <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-900/20 border border-purple-500/20 flex items-center justify-center mb-6 text-purple-400 group-hover:text-white group-hover:scale-110 group-hover:border-purple-400/50 transition-all duration-300 shadow-lg shadow-purple-900/20">
//                     {categoryIcons[cat.icon]}
//                   </div>

//                   <h3 className="font-display font-bold text-xl text-white mb-6 group-hover:text-purple-300 transition-colors">
//                     {cat.title}
//                   </h3>

//                   <div className="flex flex-wrap gap-2">
//                     {cat.skills.map(skill => (
//                       <span 
//                         key={skill} 
//                         className="px-3 py-1.5 text-xs font-medium rounded-lg bg-white/5 text-gray-300 border border-white/5 group-hover:border-purple-500/30 transition-all cursor-default hover:bg-purple-500/10 hover:text-white"
//                       >
//                         {skill}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </TiltCard>
//           ))}
//         </div>

//         {/* Other Skills - Infinite Marquee */}
//         <div className="reveal">
//           <div className="flex items-center gap-3 mb-6 justify-center">
//             <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-500/40" />
//             <h3 className="font-mono text-xs text-purple-400 uppercase tracking-widest">Also Experienced With</h3>
//             <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-500/40" />
//           </div>

//           <div className="relative space-y-4 py-4 overflow-hidden" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
//             {/* Row 1: Left to Right */}
//             <div className="flex gap-4 animate-marquee-left">
//               {[...row1, ...row1].map((tech, i) => (
//                 <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/5 bg-white/[0.02] text-sm text-gray-400 hover:text-purple-300 hover:border-purple-500/30 transition-all cursor-default flex-shrink-0">
//                   <span className="w-1.5 h-1.5 rounded-full bg-purple-500/50" />
//                   {tech}
//                 </div>
//               ))}
//             </div>
            
//             {/* Row 2: Right to Left */}
//             <div className="flex gap-4 animate-marquee-right">
//               {[...row2, ...row2].map((tech, i) => (
//                 <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/5 bg-white/[0.02] text-sm text-gray-400 hover:text-purple-300 hover:border-purple-500/30 transition-all cursor-default flex-shrink-0">
//                   <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/50" />
//                   {tech}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }


import { useRef, useState, useEffect, useCallback } from 'react';
import { skillCategories } from '../data/portfolioData';

// ─── STATS DATA ──────────────────────────────────────────────────────────────
const STATS = [
  { value: 5, suffix: '+', label: 'Years Experience', sublabel: 'IN AI/ML FIELD' },
  { value: 50, suffix: '+', label: 'Projects', sublabel: 'COMPLETED' },
  { value: 30, suffix: '+', label: 'Technologies', sublabel: 'MASTERED' },
  { value: 99, suffix: '%', label: 'Accuracy', sublabel: 'ML MODELS' },
];

const OTHER_SKILLS = [
  'HTML5', 'CSS3', 'Tailwind', 'Redux', 'Next.js', 'Express', 'Firebase',
  'Power BI', 'Hadoop', 'R', 'Streamlit', 'Joblib', 'MLflow', 'Airflow',
  'Docker', 'Kubernetes', 'MongoDB', 'PostgreSQL', 'GraphQL', 'TypeScript',
  'AWS', 'Git', 'Jest', 'WebGL', 'Figma', 'Jupyter', 'Tableau'
];

// Enhanced Color Schemes with better contrast
const CAT_COLORS = [
  { accent: '#c084fc', glow: 'rgba(192,132,252,0.25)', border: 'rgba(192,132,252,0.4)', bg: 'rgba(192,132,252,0.08)', text: '#e9d5ff' },
  { accent: '#34d399', glow: 'rgba(52,211,153,0.25)', border: 'rgba(52,211,153,0.4)', bg: 'rgba(52,211,153,0.08)', text: '#d1fae5' },
  { accent: '#60a5fa', glow: 'rgba(96,165,250,0.25)', border: 'rgba(96,165,250,0.4)', bg: 'rgba(96,165,250,0.08)', text: '#dbeafe' },
  { accent: '#f472b6', glow: 'rgba(244,114,182,0.25)', border: 'rgba(244,114,182,0.4)', bg: 'rgba(244,114,182,0.08)', text: '#fce7f3' },
];

// Beautiful Icons
const CAT_ICONS = [
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
  </svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
  </svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
  </svg>,
];

// ─── HOOKS ───────────────────────────────────────────────────────────────────
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { 
      if (e.isIntersecting) { setInView(true); obs.disconnect(); } 
    }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

function useCountUp(target, active, duration = 1800) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setVal(Math.floor(ease * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, target, duration]);
  return val;
}

// ─── STAT CARD ──────────────────────────────────────────────────────────────
function StatCard({ stat, active, idx }) {
  const count = useCountUp(stat.value, active, 1600 + idx * 200);
  const [hov, setHov] = useState(false);
  
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        position: 'relative',
        padding: '32px 20px',
        borderRadius: '20px',
        background: hov
          ? 'linear-gradient(135deg, rgba(30,20,50,0.98), rgba(20,12,40,0.98))'
          : 'linear-gradient(135deg, rgba(20,15,35,0.9), rgba(15,10,30,0.9))',
        border: `1px solid ${hov ? 'rgba(192,132,252,0.5)' : 'rgba(192,132,252,0.15)'}`,
        backdropFilter: 'blur(16px)',
        boxShadow: hov ? '0 8px 32px rgba(192,132,252,0.25), 0 0 0 1px rgba(192,132,252,0.1)' : '0 4px 20px rgba(0,0,0,0.3)',
        transform: hov ? 'translateY(-6px) scale(1.02)' : 'translateY(0) scale(1)',
        transition: 'all 0.35s cubic-bezier(0.23,1,0.32,1)',
        cursor: 'default',
        opacity: active ? 1 : 0,
        animation: active ? `statReveal 0.6s cubic-bezier(0.23,1,0.32,1) ${idx * 0.1}s both` : 'none',
        textAlign: 'center',
      }}
    >
      {/* Animated corner accents */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: 30, height: 30, borderTop: `2px solid ${hov ? '#c084fc' : 'rgba(192,132,252,0.3)'}`, borderLeft: `2px solid ${hov ? '#c084fc' : 'rgba(192,132,252,0.3)'}`, borderRadius: '8px 0 0 0', transition: 'all 0.3s' }} />
      <div style={{ position: 'absolute', bottom: 0, right: 0, width: 30, height: 30, borderBottom: `2px solid ${hov ? '#c084fc' : 'rgba(192,132,252,0.3)'}`, borderRight: `2px solid ${hov ? '#c084fc' : 'rgba(192,132,252,0.3)'}`, borderRadius: '0 0 8px 0', transition: 'all 0.3s' }} />

      <div style={{ fontSize: 'clamp(32px, 5vw, 44px)', fontWeight: 800, color: '#c084fc', lineHeight: 1, marginBottom: 8, textShadow: hov ? '0 0 20px rgba(192,132,252,0.5)' : 'none' }}>
        {typeof stat.value === 'number' ? count + stat.suffix : stat.value}
      </div>
      <div style={{ fontSize: 14, fontWeight: 700, color: 'white', marginBottom: 4, letterSpacing: '-0.3px' }}>{stat.label}</div>
      <div style={{ fontSize: 9, color: 'rgba(192,132,252,0.6)', letterSpacing: '1px', textTransform: 'uppercase' }}>{stat.sublabel}</div>
      
      {/* Glow effect on hover */}
      {hov && <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 0%, rgba(192,132,252,0.1) 0%, transparent 70%)', pointerEvents: 'none', borderRadius: '20px' }} />}
    </div>
  );
}

// ─── SKILL CHIP (FIXED VISIBILITY) ─────────────────────────────────────────
function SkillChip({ skill, accentColor, bgColor, textColor, delay }) {
  const [hov, setHov] = useState(false);
  
  return (
    <span
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        padding: '6px 14px',
        borderRadius: '8px',
        fontSize: '12px',
        fontWeight: 500,
        fontFamily: "'Inter', system-ui, sans-serif",
        background: hov ? accentColor : bgColor,
        color: hov ? 'white' : textColor,
        border: `1px solid ${hov ? accentColor : 'rgba(255,255,255,0.1)'}`,
        transform: hov ? 'translateY(-2px) scale(1.05)' : 'translateY(0) scale(1)',
        boxShadow: hov ? `0 4px 12px ${accentColor}40` : 'none',
        transition: 'all 0.25s cubic-bezier(0.23,1,0.32,1)',
        cursor: 'default',
        animation: `chipIn 0.4s ease ${delay}s both`,
      }}
    >
      <span style={{ width: 6, height: 6, borderRadius: '50%', background: hov ? 'white' : accentColor, transition: 'all 0.2s' }} />
      {skill}
    </span>
  );
}

// ─── TILT SKILL CARD ───────────────────────────────────────────────────────
function SkillCard({ cat, colors, idx, inView }) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const [hov, setHov] = useState(false);
  const [mouseLocal, setMouseLocal] = useState({ x: 0, y: 0 });

  const onMove = useCallback((e) => {
    if (!cardRef.current) return;
    const r = cardRef.current.getBoundingClientRect();
    const x = e.clientX - r.left, y = e.clientY - r.top;
    const cx = r.width / 2, cy = r.height / 2;
    setTilt({ rx: ((y - cy) / cy) * -8, ry: ((x - cx) / cx) * 8 });
    setMouseLocal({ x: (x / r.width) * 100, y: (y / r.height) * 100 });
  }, []);

  const onLeave = useCallback(() => {
    setTilt({ rx: 0, ry: 0 });
    setHov(false);
  }, []);

  const delay = idx * 0.12;

  return (
    <div
      ref={cardRef}
      onMouseMove={onMove}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={onLeave}
      style={{
        position: 'relative',
        borderRadius: '24px',
        padding: '28px',
        background: 'linear-gradient(145deg, rgba(20,15,40,0.95), rgba(15,10,30,0.95))',
        border: `1px solid ${hov ? colors.border : 'rgba(255,255,255,0.08)'}`,
        backdropFilter: 'blur(20px)',
        boxShadow: hov ? `0 0 0 1px ${colors.border}, 0 20px 40px rgba(0,0,0,0.5)` : '0 4px 20px rgba(0,0,0,0.3)',
        transform: `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) scale(${hov ? 1.02 : 1})`,
        transition: hov ? 'box-shadow 0.3s ease, border-color 0.3s ease' : 'all 0.4s cubic-bezier(0.23,1,0.32,1)',
        transformStyle: 'preserve-3d',
        opacity: inView ? 1 : 0,
        animation: inView ? `cardReveal 0.6s cubic-bezier(0.23,1,0.32,1) ${delay}s both` : 'none',
        cursor: 'default',
        overflow: 'hidden',
      }}
    >
      {/* Spotlight effect */}
      {hov && (
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: `radial-gradient(circle at ${mouseLocal.x}% ${mouseLocal.y}%, ${colors.glow} 0%, transparent 60%)`,
        }} />
      )}

      {/* Animated top border */}
      <div style={{
        position: 'absolute', top: 0, left: hov ? 0 : '50%', right: hov ? 0 : '50%', height: '2px',
        background: `linear-gradient(90deg, transparent, ${colors.accent}, transparent)`,
        transition: 'left 0.4s ease, right 0.4s ease',
      }} />

      {/* Category number */}
      <div style={{
        position: 'absolute', top: 20, right: 24,
        fontFamily: "'Space Mono', monospace", fontSize: 11,
        color: 'rgba(255,255,255,0.15)',
      }}>
        {String(idx + 1).padStart(2, '0')}
      </div>

      {/* Icon Container */}
      <div style={{
        width: 56, height: 56, borderRadius: '16px',
        background: hov ? colors.bg : 'rgba(255,255,255,0.05)',
        border: `1px solid ${hov ? colors.border : 'rgba(255,255,255,0.08)'}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: colors.accent,
        marginBottom: 20,
        transform: hov ? 'translateZ(20px) scale(1.05)' : 'translateZ(0)',
        transition: 'all 0.3s ease',
      }}>
        <div style={{ width: 26, height: 26 }}>{CAT_ICONS[idx % CAT_ICONS.length]}</div>
      </div>

      {/* Title */}
      <h3 style={{
        fontSize: 22, fontWeight: 700,
        color: hov ? colors.accent : 'white',
        marginBottom: 8,
        letterSpacing: '-0.3px',
        transition: 'all 0.3s ease',
      }}>
        {cat.title}
      </h3>

      {/* Skill count badge */}
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        padding: '3px 10px', borderRadius: '20px',
        background: colors.bg,
        border: `1px solid ${colors.border}`,
        fontSize: 9, color: colors.accent,
        marginBottom: 20,
      }}>
        <span style={{ width: 4, height: 4, borderRadius: '50%', background: colors.accent }} />
        {cat.skills.length} TECHNOLOGIES
      </div>

      {/* Skills Chips - NOW VISIBLE */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {cat.skills.map((skill, i) => (
          <SkillChip 
            key={skill} 
            skill={skill} 
            accentColor={colors.accent}
            bgColor={colors.bg}
            textColor={colors.text}
            delay={inView ? delay + i * 0.03 : 999} 
          />
        ))}
      </div>
    </div>
  );
}

// ─── OTHER SKILL PILL ──────────────────────────────────────────────────────
function OtherPill({ skill, idx }) {
  const [hov, setHov] = useState(false);
  const colors = CAT_COLORS[idx % CAT_COLORS.length];
  
  return (
    <span
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 8,
        padding: '8px 18px', borderRadius: '40px',
        fontSize: 12, fontWeight: 500,
        fontFamily: "'Inter', system-ui, sans-serif",
        background: hov ? colors.accent : 'rgba(255,255,255,0.05)',
        color: hov ? 'white' : 'rgba(255,255,255,0.7)',
        border: `1px solid ${hov ? colors.accent : 'rgba(255,255,255,0.1)'}`,
        transform: hov ? 'translateY(-3px) scale(1.05)' : 'translateY(0) scale(1)',
        boxShadow: hov ? `0 6px 16px ${colors.accent}40` : 'none',
        transition: 'all 0.3s cubic-bezier(0.23,1,0.32,1)',
        cursor: 'default',
        animation: `chipIn 0.4s ease ${0.5 + idx * 0.015}s both`,
      }}
    >
      <span style={{ width: 6, height: 6, borderRadius: '50%', background: hov ? 'white' : colors.accent }} />
      {skill}
    </span>
  );
}

// ─── MAIN COMPONENT ────────────────────────────────────────────────────────
export default function Skills() {
  const [sectionRef, sectionInView] = useInView(0.08);
  const [statsRef, statsInView] = useInView(0.2);
  const [gridRef, gridInView] = useInView(0.08);
  const [otherRef, otherInView] = useInView(0.15);

  return (
    <section
      ref={sectionRef}
      id="skills"
      style={{
        position: 'relative',
        padding: '120px 0 100px',
        overflow: 'hidden',
        background: 'radial-gradient(ellipse at 20% 30%, #0a0618 0%, #05030a 100%)',
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,300;14..32,400;14..32,500;14..32,600;14..32,700;14..32,800&family=Space+Mono:wght@400;700&display=swap');

        @keyframes statReveal {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes cardReveal {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes chipIn {
          from { opacity: 0; transform: scale(0.9) translateY(8px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes floatOrb {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, -20px) scale(1.05); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
      `}</style>

      {/* Floating Orbs */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '5%', left: '-5%', width: 500, height: 500, background: 'radial-gradient(circle, rgba(192,132,252,0.12) 0%, transparent 70%)', borderRadius: '50%', animation: 'floatOrb 20s ease-in-out infinite' }} />
        <div style={{ position: 'absolute', bottom: '10%', right: '-5%', width: 450, height: 450, background: 'radial-gradient(circle, rgba(96,165,250,0.08) 0%, transparent 70%)', borderRadius: '50%', animation: 'floatOrb 25s ease-in-out infinite reverse' }} />
        <div style={{ position: 'absolute', top: '40%', left: '30%', width: 300, height: 300, background: 'radial-gradient(circle, rgba(52,211,153,0.06) 0%, transparent 70%)', borderRadius: '50%', animation: 'floatOrb 18s ease-in-out infinite 2s' }} />
      </div>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 10 }}>

        {/* ─── HEADER ─── */}
        <div style={{
          textAlign: 'center', marginBottom: 72,
          opacity: sectionInView ? 1 : 0,
          animation: sectionInView ? 'statReveal 0.8s ease-out both' : 'none',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginBottom: 24 }}>
            <div style={{ width: 60, height: 1, background: 'linear-gradient(90deg, transparent, rgba(192,132,252,0.5))' }} />
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, color: '#c084fc', letterSpacing: '2px' }}>// 02. EXPERTISE</span>
            <div style={{ width: 60, height: 1, background: 'linear-gradient(90deg, rgba(192,132,252,0.5), transparent)' }} />
          </div>

          <h2 style={{
            fontSize: 'clamp(2rem, 6vw, 3.5rem)',
            fontWeight: 800,
            marginBottom: 16,
            lineHeight: 1.2,
          }}>
            <span style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'clamp(2rem,6vw,4rem)', margin:'0 0 14px', lineHeight:1.05, letterSpacing:'-0.03em' }} >Technical </span>
            <span className="gradient-text" style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'clamp(2rem,6vw,4rem)', margin:'0 0 14px', lineHeight:1.05, letterSpacing:'-0.03em' ,
              
             
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              backgroundSize: '200% 200%',
              animation: 'gradientShift 4s ease infinite',
              position: 'relative',
              display: 'inline-block',
              transition: 'all 0.3s ease',
            }}>Mastery</span>
          </h2>

          <p style={{ color: 'rgba(255,255,255,0.4)', maxWidth: 500, margin: '0 auto', fontSize: 15, lineHeight: 1.6 }}>
            Specialized in modern AI/ML frameworks, cloud infrastructure, and scalable full-stack development.
          </p>
        </div>

        {/* ─── STATS ROW ─── */}
        {/* <div
          ref={statsRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 20,
            marginBottom: 80,
          }}
        >
          {STATS.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} active={statsInView} idx={i} />
          ))}
        </div> */}

        {/* ─── SKILL CARDS GRID ─── */}
        <div
          ref={gridRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 24,
            marginBottom: 80,
          }}
        >
          {skillCategories.map((cat, i) => (
            <SkillCard
              key={cat.title}
              cat={cat}
              colors={CAT_COLORS[i % CAT_COLORS.length]}
              idx={i}
              inView={gridInView}
            />
          ))}
        </div>

        {/* ─── OTHER SKILLS SECTION ─── */}
        <div
          ref={otherRef}
          style={{
            borderRadius: 28,
            padding: '40px 36px',
            background: 'linear-gradient(145deg, rgba(20,15,40,0.8), rgba(15,10,30,0.9))',
            border: '1px solid rgba(192,132,252,0.15)',
            backdropFilter: 'blur(20px)',
            opacity: otherInView ? 1 : 0,
            animation: otherInView ? 'cardReveal 0.8s ease-out 0.1s both' : 'none',
          }}
        >
          {/* Animated scan line */}
          <div style={{
            position: 'absolute', left: 0, right: 0, top: 0, height: 2,
            background: 'linear-gradient(90deg, transparent, rgba(192,132,252,0.4), transparent)',
            animation: 'pulse 3s ease-in-out infinite',
            pointerEvents: 'none',
          }} />

          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32, flexWrap: 'wrap' }}>
            <div style={{ width: 40, height: 2, background: 'linear-gradient(90deg, transparent, #c084fc)' }} />
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: '#c084fc', letterSpacing: '2px' }}>ALSO EXPERIENCED WITH</span>
            <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, rgba(192,132,252,0.3), transparent)' }} />
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: 'rgba(255,255,255,0.2)' }}>{OTHER_SKILLS.length} TOOLS</span>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {OTHER_SKILLS.map((skill, i) => (
              <OtherPill key={skill} skill={skill} idx={i} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}