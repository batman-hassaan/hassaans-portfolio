// // // // import { personalInfo, education, experience } from '../data/portfolioData';

// // // // const TimelineItem = ({ item, isExperience, index }) => (
// // // //   <div className="reveal relative pl-6 sm:pl-8 border-l-2 border-purple-500/30 group" style={{ transitionDelay: `${index * 0.1}s` }}>
// // // //     <div className="absolute -left-2 top-1 w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 border-purple-500 bg-[#0a0612] flex items-center justify-center group-hover:scale-125 transition-transform">
// // // //       <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-purple-400" />
// // // //     </div>

// // // //     <div className="glow-card p-4 sm:p-6 mb-4 sm:mb-6 group-hover:transform group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-all">
// // // //       <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-2 mb-3">
// // // //         <div className="flex-1">
// // // //           <h3 className="font-display font-bold text-lg sm:text-xl text-white leading-tight group-hover:text-purple-300 transition-colors">
// // // //             {isExperience ? item.title : item.degree}
// // // //           </h3>
// // // //           <p className="text-purple-300/80 font-medium text-xs sm:text-sm mt-1 flex items-center gap-2">
// // // //             <span className="w-1 h-1 rounded-full bg-purple-400" />
// // // //             {isExperience ? item.company : item.institution}
// // // //           </p>
// // // //         </div>
// // // //         <div className="text-left sm:text-right">
// // // //           <span className="label-pill text-[10px] sm:text-xs group-hover:bg-purple-500/20 transition-all">{item.period}</span>
// // // //           {item.type && (
// // // //             <p className="text-white/30 text-[10px] sm:text-xs mt-1 font-mono">{item.type}</p>
// // // //           )}
// // // //           {item.grade && (
// // // //             <p className="text-emerald-400/70 text-[10px] sm:text-xs mt-1 font-mono flex items-center gap-1 sm:justify-end">
// // // //               <span>🏆</span> {item.grade}
// // // //             </p>
// // // //           )}
// // // //         </div>
// // // //       </div>

// // // //       {item.detail && (
// // // //         <p className="text-white/50 text-xs sm:text-sm mb-3 italic border-l-2 border-purple-500/30 pl-3">{item.detail}</p>
// // // //       )}

// // // //       {item.description && (
// // // //         <ul className="space-y-1.5 sm:space-y-2 mt-2 sm:mt-3">
// // // //           {item.description.map((d, i) => (
// // // //             <li key={i} className="flex gap-2 text-white/60 text-xs sm:text-sm leading-relaxed group-hover:text-white/80 transition-colors">
// // // //               <span className="text-purple-400 mt-0.5 flex-shrink-0">▸</span>
// // // //               <span>{d}</span>
// // // //             </li>
// // // //           ))}
// // // //         </ul>
// // // //       )}

// // // //       {item.skills && (
// // // //         <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3 sm:mt-4 pt-2 sm:pt-3 border-t border-purple-500/20">
// // // //           {item.skills.map(s => (
// // // //             <span key={s} className="skill-chip text-[10px] sm:text-xs">{s}</span>
// // // //           ))}
// // // //         </div>
// // // //       )}
// // // //     </div>
// // // //   </div>
// // // // );

// // // // export default function About() {
// // // //   return (
// // // //     <section id="about" className="py-20 sm:py-28 lg:py-36 relative">
// // // //       <div className="absolute inset-0 pointer-events-none">
// // // //         <div className="absolute top-1/4 left-0 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
// // // //         <div className="absolute bottom-1/4 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
// // // //       </div>

// // // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
// // // //         <div className="reveal mb-12 sm:mb-16 lg:mb-20">
// // // //           <p className="section-num mb-2 sm:mb-3 flex items-center gap-2">
// // // //             <span className="w-6 sm:w-8 h-px bg-purple-500/60"></span>
// // // //             // 01 — ABOUT
// // // //           </p>
// // // //           <h2 className="font-display font-bold gradient-text-subtle leading-none"
// // // //             style={{ fontSize: 'clamp(2rem, 6vw, 5rem)' }}>
// // // //             Building intelligent<br />
// // // //             <span className="text-white">systems from data</span>
// // // //           </h2>
// // // //           <div className="section-divider mt-3 sm:mt-4" />
// // // //         </div>

// // // //         <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24">
// // // //           <div>
// // // //             <div className="reveal space-y-4 sm:space-y-6 mb-8 sm:mb-12">
// // // //               {personalInfo.bio.map((para, i) => (
// // // //                 <p key={i} className="text-white/60 text-sm sm:text-base md:text-lg leading-relaxed hover:text-white/80 transition-colors">
// // // //                   {para}
// // // //                 </p>
// // // //               ))}
// // // //             </div>

// // // //             <div className="reveal flex flex-wrap gap-3 sm:gap-4">
// // // //               <a
// // // //                 href={`mailto:${personalInfo.email}`}
// // // //                 className="flex items-center gap-2 sm:gap-3 glow-card px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium text-white/70 hover:text-white hover:border-purple-500/50 transition-all group"
// // // //               >
// // // //                 <svg width="16" height="16" sm:width="18" sm:height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:scale-110 transition-transform">
// // // //                   <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
// // // //                   <polyline points="22,6 12,13 2,6" />
// // // //                 </svg>
// // // //                 <span className="hidden sm:inline">{personalInfo.email}</span>
// // // //                 <span className="sm:hidden">Email</span>
// // // //               </a>
// // // //               <a
// // // //                 href={personalInfo.socials.linkedin}
// // // //                 target="_blank"
// // // //                 rel="noopener noreferrer"
// // // //                 className="flex items-center gap-2 sm:gap-3 glow-card px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium text-white/70 hover:text-white hover:border-purple-500/50 transition-all group"
// // // //               >
// // // //                 <svg width="16" height="16" sm:width="18" sm:height="18" viewBox="0 0 24 24" fill="currentColor" className="group-hover:scale-110 transition-transform">
// // // //                   <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
// // // //                 </svg>
// // // //                 LinkedIn
// // // //               </a>
// // // //               <a
// // // //                 href={personalInfo.socials.github}
// // // //                 target="_blank"
// // // //                 rel="noopener noreferrer"
// // // //                 className="flex items-center gap-2 sm:gap-3 glow-card px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium text-white/70 hover:text-white hover:border-purple-500/50 transition-all group"
// // // //               >
// // // //                 <svg width="16" height="16" sm:width="18" sm:height="18" viewBox="0 0 24 24" fill="currentColor" className="group-hover:scale-110 transition-transform">
// // // //                   <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
// // // //                 </svg>
// // // //                 GitHub
// // // //               </a>
// // // //             </div>
// // // //           </div>

// // // //           <div className="space-y-10 sm:space-y-12">
// // // //             <div>
// // // //               <h3 className="reveal font-display font-bold text-xl sm:text-2xl text-white mb-6 sm:mb-8 flex items-center gap-3">
// // // //                 <span className="text-purple-400 text-2xl sm:text-3xl">⚡</span> 
// // // //                 <span className="gradient-text-subtle">Experience</span>
// // // //               </h3>
// // // //               {experience.map((item, i) => (
// // // //                 <TimelineItem key={i} item={item} isExperience index={i} />
// // // //               ))}
// // // //             </div>

// // // //             <div>
// // // //               <h3 className="reveal font-display font-bold text-xl sm:text-2xl text-white mb-6 sm:mb-8 flex items-center gap-3">
// // // //                 <span className="text-purple-400 text-2xl sm:text-3xl">🎓</span> 
// // // //                 <span className="gradient-text-subtle">Education</span>
// // // //               </h3>
// // // //               {education.map((item, i) => (
// // // //                 <TimelineItem key={i} item={item} isExperience={false} index={i} />
// // // //               ))}
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // }


// // // import { personalInfo, education, experience } from '../data/portfolioData';

// // // // Animated Timeline Dot
// // // const TimelineDot = () => (
// // //   <div className="absolute -left-[1.15rem] top-1 z-10">
// // //     <div className="w-4 h-4 rounded-full border-2 border-purple-500 bg-[#0a0612] group-hover:scale-125 group-hover:border-purple-400 transition-all duration-300 flex items-center justify-center">
// // //       <div className="w-1.5 h-1.5 rounded-full bg-purple-400 group-hover:animate-ping" />
// // //     </div>
// // //     {/* The vertical connector line */}
// // //     <div className="absolute top-1/2 left-1/2 w-px h-full bg-gradient-to-b from-purple-500/50 to-transparent -translate-x-1/2 -z-10" />
// // //   </div>
// // // );

// // // const TimelineItem = ({ item, isExperience, index }) => (
// // //   <div className="reveal relative pl-8 group" style={{ transitionDelay: `${index * 0.15}s` }}>
// // //     <TimelineDot />
    
// // //     <div className="glow-card p-6 mb-8 relative overflow-hidden transition-all duration-500 hover:border-purple-500/40 hover:shadow-[0_0_30px_-10px_rgba(139,92,246,0.3)]">
// // //       {/* Top accent line */}
// // //       <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-purple-500/0 via-purple-500/50 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

// // //       <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
// // //         <div className="flex-1">
// // //           <h3 className="font-display font-bold text-xl text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-purple-300 transition-all duration-300">
// // //             {isExperience ? item.title : item.degree}
// // //           </h3>
// // //           <p className="text-purple-300/80 font-medium text-sm mt-1 flex items-center gap-2">
// // //             <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
// // //             {isExperience ? item.company : item.institution}
// // //           </p>
// // //         </div>
// // //         <div className="flex flex-col items-start sm:items-end gap-2">
// // //           <span className="px-3 py-1 rounded-full text-xs font-mono border border-purple-500/30 text-purple-300 bg-purple-500/5">
// // //             {item.period}
// // //           </span>
// // //           {item.type && (
// // //             <span className="text-white/40 text-xs font-mono">{item.type}</span>
// // //           )}
// // //           {item.grade && (
// // //             <span className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
// // //               <span className="text-base">🏆</span> {item.grade}
// // //             </span>
// // //           )}
// // //         </div>
// // //       </div>

// // //       {item.detail && (
// // //         <p className="text-white/50 text-sm mb-4 border-l-2 border-purple-500/20 pl-3 italic">
// // //           "{item.detail}"
// // //         </p>
// // //       )}

// // //       {item.description && (
// // //         <ul className="space-y-2 mb-4">
// // //           {item.description.map((d, i) => (
// // //             <li key={i} className="flex gap-3 text-white/60 text-sm leading-relaxed group-hover:text-white/80 transition-colors">
// // //               <span className="text-purple-400 mt-1 flex-shrink-0">▹</span>
// // //               <span>{d}</span>
// // //             </li>
// // //           ))}
// // //         </ul>
// // //       )}

// // //       {item.skills && (
// // //         <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
// // //           {item.skills.map(s => (
// // //             <span key={s} className="px-2 py-1 text-xs rounded bg-white/5 text-purple-300 border border-white/5 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all cursor-default">
// // //               {s}
// // //             </span>
// // //           ))}
// // //         </div>
// // //       )}
// // //     </div>
// // //   </div>
// // // );

// // // export default function About() {
// // //   return (
// // //     <section id="about" className="py-24 relative overflow-hidden">
// // //       {/* Background Elements */}
// // //       <div className="absolute inset-0 pointer-events-none overflow-hidden">
// // //         <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-blob" />
// // //         <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
// // //         {/* Grid Pattern */}
// // //         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black_40%,transparent_100%)]" />
// // //       </div>

// // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
// // //         {/* Section Header */}
// // //         <div className="reveal mb-20">
// // //           <div className="flex items-center gap-4 mb-4">
// // //             <span className="w-8 h-px bg-purple-500" />
// // //             <span className="font-mono text-purple-400 text-sm tracking-widest">// 01. ABOUT ME</span>
// // //           </div>
// // //           <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight">
// // //             <span className="text-white">Rooted in</span>
// // //             <span className="gradient-text"> logic,</span>
// // //             <br />
// // //             <span className="text-white">designed for</span>
// // //             <span className="gradient-text"> impact.</span>
// // //           </h2>
// // //         </div>

// // //         <div className="grid lg:grid-cols-12 gap-16">
          
// // //           {/* Left Column - Bio & Contact */}
// // //           <div className="lg:col-span-5 space-y-8">
// // //             <div className="reveal space-y-6 text-lg text-gray-400 leading-relaxed font-light">
// // //               {personalInfo.bio.map((para, i) => (
// // //                 <p key={i} className="hover:text-gray-200 transition-colors duration-300">
// // //                   {para}
// // //                 </p>
// // //               ))}
// // //             </div>

// // //             {/* Contact Cards */}
// // //             <div className="reveal pt-4 space-y-4">
// // //               <h4 className="text-xs font-mono text-white/40 uppercase tracking-widest">Connect with me</h4>
// // //               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
// // //                 <a href={`mailto:${personalInfo.email}`} className="group flex items-center gap-4 p-4 rounded-lg border border-white/5 bg-white/[0.02] hover:border-purple-500/30 hover:bg-purple-500/5 transition-all">
// // //                   <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
// // //                     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
// // //                   </div>
// // //                   <div className="flex-1 min-w-0">
// // //                     <p className="text-sm font-medium text-white truncate">{personalInfo.email}</p>
// // //                     <p className="text-xs text-white/40">Email</p>
// // //                   </div>
// // //                 </a>
                
// // //                 <div className="grid grid-cols-2 gap-4">
// // //                   <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer" className="group flex flex-col items-center justify-center gap-2 p-4 rounded-lg border border-white/5 bg-white/[0.02] hover:border-purple-500/30 transition-all">
// // //                     <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-white/60 group-hover:text-purple-400 transition-colors"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
// // //                     <span className="text-xs text-white/40 group-hover:text-white/80">LinkedIn</span>
// // //                   </a>
// // //                   <a href={personalInfo.socials.github} target="_blank" rel="noreferrer" className="group flex flex-col items-center justify-center gap-2 p-4 rounded-lg border border-white/5 bg-white/[0.02] hover:border-purple-500/30 transition-all">
// // //                     <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-white/60 group-hover:text-purple-400 transition-colors"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
// // //                     <span className="text-xs text-white/40 group-hover:text-white/80">GitHub</span>
// // //                   </a>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           {/* Right Column - Timeline */}
// // //           <div className="lg:col-span-7 relative">
// // //             {/* The Vertical Line */}
// // //             <div className="absolute left-[0.6rem] top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/20 via-purple-500/10 to-transparent" />

// // //             {/* Experience Section */}
// // //             <div className="mb-16">
// // //               <div className="sticky top-24 z-20 mb-8 flex items-center gap-3 backdrop-blur-sm bg-[#05020a]/50 py-2 w-fit">
// // //                 <span className="text-2xl">⚡</span>
// // //                 <h3 className="font-display font-bold text-xl text-white">Experience</h3>
// // //               </div>
// // //               {experience.map((item, i) => (
// // //                 <TimelineItem key={i} item={item} isExperience index={i} />
// // //               ))}
// // //             </div>

// // //             {/* Education Section */}
// // //             <div>
// // //               <div className="sticky top-24 z-20 mb-8 flex items-center gap-3 backdrop-blur-sm bg-[#05020a]/50 py-2 w-fit">
// // //                 <span className="text-2xl">🎓</span>
// // //                 <h3 className="font-display font-bold text-xl text-white">Education</h3>
// // //               </div>
// // //               {education.map((item, i) => (
// // //                 <TimelineItem key={i} item={item} isExperience={false} index={i} />
// // //               ))}
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }


// // import { personalInfo, education, experience } from '../data/portfolioData';
// // import { useState, useRef, useEffect } from 'react';

// // // Enhanced Timeline Dot with 3D effect
// // const TimelineDot = ({ isActive }) => (
// //   <div className="absolute -left-[1.15rem] top-1 z-10">
// //     <div className={`relative w-4 h-4 rounded-full border-2 transition-all duration-500 flex items-center justify-center ${
// //       isActive 
// //         ? 'border-purple-400 shadow-lg shadow-purple-500/50 scale-125' 
// //         : 'border-purple-500 group-hover:border-purple-400 group-hover:scale-110'
// //     }`}
// //     style={{ background: 'linear-gradient(135deg, #0a0612, #0d081a)' }}>
// //       <div className={`w-1.5 h-1.5 rounded-full bg-purple-400 transition-all duration-300 ${
// //         isActive ? 'animate-pulse' : ''
// //       }`} />
// //     </div>
// //     {/* Glow ring */}
// //     <div className={`absolute inset-0 rounded-full bg-purple-500/20 transition-opacity duration-500 ${
// //       isActive ? 'opacity-100 animate-ping' : 'opacity-0'
// //     }`} />
// //   </div>
// // );

// // // Enhanced Timeline Item with 4D hover effects
// // const TimelineItem = ({ item, isExperience, index }) => {
// //   const [isHovered, setIsHovered] = useState(false);
// //   const [isVisible, setIsVisible] = useState(false);
// //   const itemRef = useRef(null);

// //   useEffect(() => {
// //     const observer = new IntersectionObserver(
// //       ([entry]) => {
// //         if (entry.isIntersecting) setIsVisible(true);
// //       },
// //       { threshold: 0.2 }
// //     );
// //     if (itemRef.current) observer.observe(itemRef.current);
// //     return () => observer.disconnect();
// //   }, []);

// //   return (
// //     <div 
// //       ref={itemRef}
// //       className={`relative pl-8 group transition-all duration-700 ${
// //         isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
// //       }`}
// //       style={{ transitionDelay: `${index * 0.1}s` }}
// //       onMouseEnter={() => setIsHovered(true)}
// //       onMouseLeave={() => setIsHovered(false)}
// //     >
// //       <TimelineDot isActive={isHovered} />
      
// //       <div className={`relative rounded-2xl p-6 mb-8 overflow-hidden transition-all duration-500 ${
// //         isHovered 
// //           ? 'border-purple-500/50 shadow-2xl shadow-purple-500/20 translate-x-1' 
// //           : 'border-white/10 shadow-lg'
// //       }`}
// //       style={{
// //         background: isHovered 
// //           ? 'linear-gradient(145deg, rgba(20,15,40,0.95), rgba(15,10,30,0.98))'
// //           : 'linear-gradient(145deg, rgba(15,12,25,0.9), rgba(10,8,20,0.95))',
// //         border: '1px solid',
// //         borderColor: isHovered ? 'rgba(139,92,246,0.5)' : 'rgba(255,255,255,0.08)',
// //         backdropFilter: 'blur(20px)',
// //       }}>
        
// //         {/* Animated gradient border */}
// //         <div className={`absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-700 pointer-events-none ${
// //           isHovered ? 'opacity-100' : ''
// //         }`}
// //         style={{
// //           background: 'linear-gradient(135deg, rgba(139,92,246,0.2), rgba(236,72,153,0.2), rgba(6,182,212,0.2))',
// //           padding: '1px',
// //           mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
// //           WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
// //           WebkitMaskComposite: 'xor',
// //           maskComposite: 'exclude',
// //         }} />

// //         {/* Top shine effect */}
// //         <div className={`absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white/5 to-transparent transition-opacity duration-500 rounded-t-2xl ${
// //           isHovered ? 'opacity-100' : 'opacity-0'
// //         }`} />

// //         {/* Content */}
// //         <div className="relative z-10">
// //           <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
// //             <div className="flex-1">
// //               <h3 className={`font-bold text-xl transition-all duration-300 ${
// //                 isHovered 
// //                   ? 'bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent'
// //                   : 'text-white'
// //               }`}>
// //                 {isExperience ? item.title : item.degree}
// //               </h3>
// //               <p className="text-purple-300/80 font-medium text-sm mt-1 flex items-center gap-2">
// //                 <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
// //                 {isExperience ? item.company : item.institution}
// //               </p>
// //             </div>
// //             <div className="flex flex-col items-start sm:items-end gap-2">
// //               <span className={`px-3 py-1 rounded-full text-xs font-mono transition-all duration-300 ${
// //                 isHovered
// //                   ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
// //                   : 'border border-purple-500/30 text-purple-300 bg-purple-500/5'
// //               }`}>
// //                 {item.period}
// //               </span>
// //               {item.type && (
// //                 <span className="text-white/40 text-xs font-mono">{item.type}</span>
// //               )}
// //               {item.grade && (
// //                 <span className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
// //                   <span className="text-base animate-pulse">🏆</span> 
// //                   {item.grade}
// //                 </span>
// //               )}
// //             </div>
// //           </div>

// //           {item.detail && (
// //             <p className="text-white/50 text-sm mb-4 border-l-2 border-purple-500/30 pl-3 italic transition-colors duration-300 hover:text-white/70">
// //               "{item.detail}"
// //             </p>
// //           )}

// //           {item.description && (
// //             <ul className="space-y-2 mb-4">
// //               {item.description.map((d, i) => (
// //                 <li key={i} className="flex gap-3 text-white/60 text-sm leading-relaxed transition-all duration-300 hover:text-white/80 hover:translate-x-1">
// //                   <span className="text-purple-400 mt-1 flex-shrink-0 transition-transform duration-300 group-hover:rotate-12">▹</span>
// //                   <span>{d}</span>
// //                 </li>
// //               ))}
// //             </ul>
// //           )}

// //           {item.skills && (
// //             <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
// //               {item.skills.map((s, i) => (
// //                 <span 
// //                   key={s} 
// //                   className={`px-2.5 py-1 text-xs rounded-lg transition-all duration-300 cursor-default ${
// //                     isHovered
// //                       ? 'bg-purple-500/20 text-purple-300 border-purple-500/40 hover:bg-purple-500/30 hover:scale-105'
// //                       : 'bg-white/5 text-gray-400 border-white/10 hover:border-purple-500/30'
// //                   } border`}
// //                   style={{ transitionDelay: `${i * 20}ms` }}
// //                 >
// //                   {s}
// //                 </span>
// //               ))}
// //             </div>
// //           )}
// //         </div>

// //         {/* Bottom accent bar */}
// //         <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 transition-transform duration-700 origin-left ${
// //           isHovered ? 'scale-x-100' : 'scale-x-0'
// //         }`} />
// //       </div>
// //     </div>
// //   );
// // };

// // // Animated Counter Component
// // const AnimatedCounter = ({ value, label, icon }) => {
// //   const [count, setCount] = useState(0);
// //   const [isVisible, setIsVisible] = useState(false);
// //   const ref = useRef(null);

// //   useEffect(() => {
// //     const observer = new IntersectionObserver(
// //       ([entry]) => {
// //         if (entry.isIntersecting) {
// //           setIsVisible(true);
// //           let start = 0;
// //           const end = parseInt(value);
// //           const duration = 2000;
// //           const stepTime = 20;
// //           const steps = duration / stepTime;
// //           let currentStep = 0;
// //           const timer = setInterval(() => {
// //             currentStep++;
// //             const progress = currentStep / steps;
// //             const eased = 1 - Math.pow(1 - progress, 3);
// //             setCount(Math.floor(eased * end));
// //             if (currentStep >= steps) clearInterval(timer);
// //           }, stepTime);
// //           observer.disconnect();
// //         }
// //       },
// //       { threshold: 0.5 }
// //     );
// //     if (ref.current) observer.observe(ref.current);
// //     return () => observer.disconnect();
// //   }, [value]);

// //   return (
// //     <div ref={ref} className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20">
// //       <div className="text-3xl mb-2">{icon}</div>
// //       <div className="text-3xl font-bold text-purple-400">{isVisible ? count : 0}+</div>
// //       <div className="text-xs text-gray-400 mt-1 uppercase tracking-wider">{label}</div>
// //     </div>
// //   );
// // };

// // export default function About() {
// //   const [activeSection, setActiveSection] = useState('experience');
// //   const sectionRef = useRef(null);

// //   const stats = [
// //     { value: "5", label: "Years Experience", icon: "⏱️" },
// //     { value: "50", label: "Projects Completed", icon: "🚀" },
// //     { value: "30", label: "Technologies", icon: "💻" },
// //     { value: "24", label: "Happy Clients", icon: "😊" }
// //   ];

// //   return (
// //     <section id="about" className="py-28 relative overflow-hidden">
// //       {/* Animated Background Elements */}
// //       <div className="absolute inset-0 pointer-events-none overflow-hidden">
// //         <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl animate-float" />
// //         <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl animate-float-delayed" />
// //         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-3xl animate-pulse-slow" />
        
// //         {/* Grid Pattern */}
// //         <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,black_40%,transparent_100%)]" />
// //       </div>

// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
// //         {/* Section Header */}
// //         <div className="mb-20 text-center">
// //           <div className="flex items-center justify-center gap-4 mb-4">
// //             <div className="w-12 h-px bg-gradient-to-r from-transparent to-purple-500" />
// //             <span className="font-mono text-purple-400 text-sm tracking-widest animate-pulse">// 01. ABOUT ME</span>
// //             <div className="w-12 h-px bg-gradient-to-l from-transparent to-purple-500" />
// //           </div>
          
// //           <h2 className="font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-4">
// //             <span className="text-white">Rooted in </span>
// //             <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
// //               logic,
// //             </span>
// //             <br />
// //             <span className="text-white">designed for </span>
// //             <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
// //               impact.
// //             </span>
// //           </h2>
          
// //           <p className="text-gray-400 max-w-2xl mx-auto text-base">
// //             Data Scientist & ML Engineer passionate about building intelligent systems that solve real-world problems
// //           </p>
// //         </div>

// //         {/* Stats Row */}
// //         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
// //           {stats.map((stat, i) => (
// //             <div key={i} className="animate-fadeInUp" style={{ animationDelay: `${i * 0.1}s` }}>
// //               <AnimatedCounter {...stat} />
// //             </div>
// //           ))}
// //         </div>

// //         <div className="grid lg:grid-cols-12 gap-12">
          
// //           {/* Left Column - Bio & Contact */}
// //           <div className="lg:col-span-5 space-y-8">
// //             {/* Bio Text */}
// //             <div className="space-y-6">
// //               {personalInfo.bio.map((para, i) => (
// //                 <div 
// //                   key={i} 
// //                   className="animate-fadeInUp opacity-0"
// //                   style={{ animationDelay: `${0.2 + i * 0.1}s`, animationFillMode: 'forwards' }}
// //                 >
// //                   <p className="text-gray-300 text-base leading-relaxed hover:text-white transition-colors duration-300">
// //                     {para}
// //                   </p>
// //                 </div>
// //               ))}
// //             </div>

// //             {/* Contact Cards */}
// //             <div className="pt-4 space-y-4 animate-fadeInUp opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
// //               <h4 className="text-xs font-mono text-white/40 uppercase tracking-widest flex items-center gap-2">
// //                 <span className="w-6 h-px bg-purple-500" />
// //                 Connect with me
// //               </h4>
              
// //               <div className="space-y-3">
// //                 {/* Email Card */}
// //                 <a 
// //                   href={`mailto:${personalInfo.email}`} 
// //                   className="group flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:border-purple-500/40 hover:bg-purple-500/5 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
// //                 >
// //                   <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-all duration-300">
// //                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
// //                       <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
// //                       <polyline points="22,6 12,13 2,6" />
// //                     </svg>
// //                   </div>
// //                   <div className="flex-1 min-w-0">
// //                     <p className="text-sm font-medium text-white truncate">{personalInfo.email}</p>
// //                     <p className="text-xs text-white/40">Email me</p>
// //                   </div>
// //                   <div className="text-white/20 group-hover:text-purple-400 transition-colors">
// //                     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
// //                       <path d="M7 17L17 7M17 7H7M17 7V17" />
// //                     </svg>
// //                   </div>
// //                 </a>
                
// //                 {/* Social Links Grid */}
// //                 <div className="grid grid-cols-2 gap-3">
// //                   <a 
// //                     href={personalInfo.socials.linkedin} 
// //                     target="_blank" 
// //                     rel="noreferrer" 
// //                     className="group flex flex-col items-center justify-center gap-2 p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:border-purple-500/40 hover:bg-purple-500/5 transition-all duration-300 hover:scale-105"
// //                   >
// //                     <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white/60 group-hover:text-purple-400 transition-colors">
// //                       <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
// //                     </svg>
// //                     <span className="text-xs text-white/40 group-hover:text-white/80">LinkedIn</span>
// //                   </a>
// //                   <a 
// //                     href={personalInfo.socials.github} 
// //                     target="_blank" 
// //                     rel="noreferrer" 
// //                     className="group flex flex-col items-center justify-center gap-2 p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:border-purple-500/40 hover:bg-purple-500/5 transition-all duration-300 hover:scale-105"
// //                   >
// //                     <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white/60 group-hover:text-purple-400 transition-colors">
// //                       <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
// //                     </svg>
// //                     <span className="text-xs text-white/40 group-hover:text-white/80">GitHub</span>
// //                   </a>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Right Column - Timeline */}
// //           <div className="lg:col-span-7 relative">
// //             {/* Section Toggle */}
// //             <div className="sticky top-24 z-20 mb-8 flex gap-4 backdrop-blur-sm bg-[#05020a]/80 py-3 px-1 rounded-xl border border-white/10 w-fit">
// //               <button
// //                 onClick={() => setActiveSection('experience')}
// //                 className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
// //                   activeSection === 'experience'
// //                     ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
// //                     : 'text-gray-400 hover:text-white'
// //                 }`}
// //               >
// //                 ⚡ Experience
// //               </button>
// //               <button
// //                 onClick={() => setActiveSection('education')}
// //                 className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
// //                   activeSection === 'education'
// //                     ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
// //                     : 'text-gray-400 hover:text-white'
// //                 }`}
// //               >
// //                 🎓 Education
// //               </button>
// //             </div>

// //             {/* Timeline Vertical Line */}
// //             <div className="absolute left-[0.6rem] top-28 bottom-0 w-px bg-gradient-to-b from-purple-500/30 via-purple-500/10 to-transparent" />

// //             {/* Experience Section */}
// //             {activeSection === 'experience' && (
// //               <div className="space-y-4">
// //                 {experience.map((item, i) => (
// //                   <TimelineItem key={i} item={item} isExperience index={i} />
// //                 ))}
// //               </div>
// //             )}

// //             {/* Education Section */}
// //             {activeSection === 'education' && (
// //               <div className="space-y-4">
// //                 {education.map((item, i) => (
// //                   <TimelineItem key={i} item={item} isExperience={false} index={i} />
// //                 ))}
// //               </div>
// //             )}
// //           </div>
// //         </div>
// //       </div>

// //       <style jsx>{`
// //         @keyframes float {
// //           0%, 100% { transform: translate(0, 0) rotate(0deg); }
// //           50% { transform: translate(20px, -20px) rotate(5deg); }
// //         }
// //         @keyframes float-delayed {
// //           0%, 100% { transform: translate(0, 0) rotate(0deg); }
// //           50% { transform: translate(-20px, 20px) rotate(-5deg); }
// //         }
// //         @keyframes pulse-slow {
// //           0%, 100% { opacity: 0.3; transform: translate(-50%, -50%) scale(1); }
// //           50% { opacity: 0.6; transform: translate(-50%, -50%) scale(1.05); }
// //         }
// //         @keyframes gradient {
// //           0%, 100% { background-position: 0% 50%; }
// //           50% { background-position: 100% 50%; }
// //         }
// //         @keyframes fadeInUp {
// //           from {
// //             opacity: 0;
// //             transform: translateY(20px);
// //           }
// //           to {
// //             opacity: 1;
// //             transform: translateY(0);
// //           }
// //         }
// //         .animate-float { animation: float 8s ease-in-out infinite; }
// //         .animate-float-delayed { animation: float-delayed 10s ease-in-out infinite; }
// //         .animate-pulse-slow { animation: pulse-slow 6s ease-in-out infinite; }
// //         .animate-gradient { background-size: 200% 200%; animation: gradient 3s ease infinite; }
// //         .animate-fadeInUp { animation: fadeInUp 0.6s ease-out forwards; }
// //       `}</style>
// //     </section>
// //   );
// // }


// import { personalInfo, education, experience } from '../data/portfolioData';
// import { useState, useRef, useEffect, useCallback } from 'react';

// // ─── HOOKS ─────────────────────────────────────────────────────────────────
// function useInView(threshold = 0.15) {
//   const ref = useRef(null);
//   const [inView, setInView] = useState(false);
//   useEffect(() => {
//     const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } }, { threshold });
//     if (ref.current) obs.observe(ref.current);
//     return () => obs.disconnect();
//   }, [threshold]);
//   return [ref, inView];
// }

// function useCountUp(target, active, duration = 1800) {
//   const [val, setVal] = useState(0);
//   useEffect(() => {
//     if (!active) return;
//     let start = null;
//     const step = ts => {
//       if (!start) start = ts;
//       const p = Math.min((ts - start) / duration, 1);
//       setVal(Math.floor((1 - Math.pow(1 - p, 3)) * target));
//       if (p < 1) requestAnimationFrame(step);
//     };
//     requestAnimationFrame(step);
//   }, [active, target, duration]);
//   return val;
// }

// // ─── CONSTANTS ─────────────────────────────────────────────────────────────
// const STATS = [
//   { value: 5,  suffix: '+', label: 'Years Exp',   mono: 'IN_FIELD'  },
//   { value: 50, suffix: '+', label: 'Projects',    mono: 'SHIPPED'   },
//   { value: 30, suffix: '+', label: 'Technologies',mono: 'MASTERED'  },
//   { value: 24, suffix: '+', label: 'Clients',     mono: 'HAPPY'     },
// ];

// const SOCIAL_LINKS = [
//   {
//     key: 'linkedin',
//     label: 'LinkedIn',
//     color: '#0ea5e9',
//     icon: (
//       <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
//         <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
//       </svg>
//     ),
//   },
//   {
//     key: 'github',
//     label: 'GitHub',
//     color: '#a78bfa',
//     icon: (
//       <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
//         <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
//       </svg>
//     ),
//   },
// ];

// // ─── STAT CARD ─────────────────────────────────────────────────────────────
// function StatCard({ stat, active, idx }) {
//   const count = useCountUp(stat.value, active, 1600 + idx * 150);
//   const [hov, setHov] = useState(false);
//   return (
//     <div
//       onMouseEnter={() => setHov(true)}
//       onMouseLeave={() => setHov(false)}
//       style={{
//         position: 'relative',
//         padding: '22px 16px',
//         borderRadius: 14,
//         background: hov ? 'rgba(30,16,56,0.95)' : 'rgba(255,255,255,0.025)',
//         border: `1px solid ${hov ? 'rgba(167,139,250,0.45)' : 'rgba(255,255,255,0.07)'}`,
//         boxShadow: hov ? '0 0 40px rgba(124,58,237,0.25), 0 12px 30px rgba(0,0,0,0.5)' : '0 4px 16px rgba(0,0,0,0.3)',
//         transform: hov ? 'translateY(-5px) scale(1.03)' : 'translateY(0) scale(1)',
//         transition: 'all 0.35s cubic-bezier(0.23,1,0.32,1)',
//         cursor: 'default', textAlign: 'center', overflow: 'hidden',
//         opacity: active ? 1 : 0,
//         animation: active ? `revealUp 0.7s cubic-bezier(0.23,1,0.32,1) ${idx * 0.1}s both` : 'none',
//       }}
//     >
//       {/* Corner marks */}
//       <div style={{ position:'absolute', top:0, left:0, width:12, height:12, borderTop:'1.5px solid rgba(167,139,250,0.6)', borderLeft:'1.5px solid rgba(167,139,250,0.6)' }} />
//       <div style={{ position:'absolute', bottom:0, right:0, width:12, height:12, borderBottom:'1.5px solid rgba(167,139,250,0.6)', borderRight:'1.5px solid rgba(167,139,250,0.6)' }} />

//       {hov && <div style={{ position:'absolute', inset:0, background:'radial-gradient(circle at 50% 0%, rgba(124,58,237,0.15) 0%, transparent 65%)', pointerEvents:'none' }} />}

//       <div style={{ fontFamily:"'Space Mono',monospace", fontSize:'clamp(26px,3.5vw,36px)', fontWeight:700, color:'#a78bfa', lineHeight:1, marginBottom:4 }}>
//         {count}{stat.suffix}
//       </div>
//       <div style={{ fontFamily:"'Syne',sans-serif", fontSize:13, fontWeight:600, color:'rgba(255,255,255,0.8)', marginBottom:3 }}>{stat.label}</div>
//       <div style={{ fontFamily:"'Space Mono',monospace", fontSize:8, color:'rgba(167,139,250,0.45)', letterSpacing:'0.18em' }}>{stat.mono}</div>
//     </div>
//   );
// }

// // ─── LIVE BIO PANEL ────────────────────────────────────────────────────────
// function BioPanel({ inView }) {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const c = canvasRef.current;
//     if (!c) return;
//     const ctx = c.getContext('2d');
//     let t = 0, animId;
//     const resize = () => { c.width = c.offsetWidth; c.height = c.offsetHeight; };
//     resize();
//     window.addEventListener('resize', resize);

//     const draw = () => {
//       t += 0.012;
//       const W = c.width, H = c.height;
//       ctx.clearRect(0, 0, W, H);
//       // Breathing grid
//       for (let x = 0; x < W; x += 30) {
//         const a = (Math.sin(t + x * 0.05) * 0.5 + 0.5) * 0.045;
//         ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H);
//         ctx.strokeStyle = `rgba(167,139,250,${a})`; ctx.lineWidth = 0.5; ctx.stroke();
//       }
//       for (let y = 0; y < H; y += 30) {
//         const a = (Math.sin(t * 0.7 + y * 0.06) * 0.5 + 0.5) * 0.035;
//         ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y);
//         ctx.strokeStyle = `rgba(96,165,250,${a})`; ctx.lineWidth = 0.5; ctx.stroke();
//       }
//       // Pulse ring
//       const pr = (t * 25) % 120;
//       const pa = 1 - pr / 120;
//       ctx.beginPath(); ctx.arc(W * 0.88, H * 0.15, pr, 0, Math.PI * 2);
//       ctx.strokeStyle = `rgba(167,139,250,${pa * 0.12})`; ctx.lineWidth = 1.5; ctx.stroke();
//       animId = requestAnimationFrame(draw);
//     };
//     draw();
//     return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); };
//   }, []);

//   return (
//     <div style={{
//       position: 'relative', borderRadius: 18, overflow: 'hidden',
//       background: 'linear-gradient(145deg, #0e0920, #07040f)',
//       border: '1px solid rgba(167,139,250,0.14)',
//       boxShadow: '0 8px 40px rgba(0,0,0,0.4)',
//       opacity: inView ? 1 : 0,
//       animation: inView ? 'revealUp 0.8s cubic-bezier(0.23,1,0.32,1) 0.1s both' : 'none',
//     }}>
//       <canvas ref={canvasRef} style={{ position:'absolute', inset:0, width:'100%', height:'100%', opacity:0.9 }} />

//       <div style={{ position:'relative', zIndex:2, padding:'28px 26px' }}>
//         {/* Header bar */}
//         <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:22, paddingBottom:14, borderBottom:'1px solid rgba(255,255,255,0.06)' }}>
//           <div style={{ display:'flex', gap:6 }}>
//             {['#ff5f57','#febc2e','#28c840'].map((c,i) => (
//               <div key={i} style={{ width:8, height:8, borderRadius:'50%', background:c, boxShadow:`0 0 5px ${c}` }} />
//             ))}
//           </div>
//           <div style={{ flex:1, display:'flex', alignItems:'center', justifyContent:'center' }}>
//             <span style={{ fontFamily:"'Space Mono',monospace", fontSize:9, color:'rgba(255,255,255,0.2)', letterSpacing:'0.12em' }}>DOSSIER :: HASSAN_SHAHID.md</span>
//           </div>
//           <div style={{ width:6, height:6, borderRadius:'50%', background:'#22c55e', boxShadow:'0 0 6px #22c55e', animation:'blinkDot 2s infinite' }} />
//         </div>

//         {/* Bio text */}
//         <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
//           {(personalInfo.bio || [
//             'Data Scientist & ML Engineer passionate about building intelligent systems that convert raw data into meaningful insights.',
//             'I specialize in end-to-end ML pipelines, computer vision, and full-stack AI-powered web applications.',
//             'Currently leading Zenehrix — crafting data-driven products with sharp design sensibilities.',
//           ]).map((para, i) => (
//             <p key={i} style={{
//               fontFamily:"'Syne',sans-serif", fontSize:14, color:'rgba(255,255,255,0.55)',
//               lineHeight:1.75, margin:0,
//               paddingLeft:12, borderLeft:'2px solid rgba(167,139,250,0.2)',
//               opacity: inView ? 1 : 0,
//               animation: inView ? `revealUp 0.6s cubic-bezier(0.23,1,0.32,1) ${0.3 + i * 0.12}s both` : 'none',
//               transition: 'color 0.3s',
//             }}
//             onMouseEnter={e => e.currentTarget.style.color='rgba(255,255,255,0.85)'}
//             onMouseLeave={e => e.currentTarget.style.color='rgba(255,255,255,0.55)'}
//             >
//               {para}
//             </p>
//           ))}
//         </div>

//         {/* Email */}
//         <a
//           href={`mailto:${personalInfo.email}`}
//           style={{
//             display:'flex', alignItems:'center', gap:12, marginTop:22,
//             padding:'12px 16px', borderRadius:10, textDecoration:'none',
//             background:'rgba(167,139,250,0.06)', border:'1px solid rgba(167,139,250,0.15)',
//             transition:'all 0.3s cubic-bezier(0.23,1,0.32,1)',
//           }}
//           onMouseEnter={e => { e.currentTarget.style.background='rgba(167,139,250,0.12)'; e.currentTarget.style.borderColor='rgba(167,139,250,0.4)'; e.currentTarget.style.transform='translateY(-2px)'; }}
//           onMouseLeave={e => { e.currentTarget.style.background='rgba(167,139,250,0.06)'; e.currentTarget.style.borderColor='rgba(167,139,250,0.15)'; e.currentTarget.style.transform='translateY(0)'; }}
//         >
//           <div style={{ width:36, height:36, borderRadius:10, background:'rgba(167,139,250,0.12)', display:'flex', alignItems:'center', justifyContent:'center', color:'#a78bfa', flexShrink:0 }}>
//             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
//           </div>
//           <div style={{ flex:1, overflow:'hidden' }}>
//             <div style={{ fontFamily:"'Space Mono',monospace", fontSize:11, color:'rgba(255,255,255,0.75)', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>{personalInfo.email}</div>
//             <div style={{ fontFamily:"'Space Mono',monospace", fontSize:9, color:'rgba(255,255,255,0.25)', letterSpacing:'0.1em', marginTop:2 }}>SEND_MESSAGE</div>
//           </div>
//           <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(167,139,250,0.6)" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
//         </a>

//         {/* Social */}
//         <div style={{ display:'flex', gap:10, marginTop:10 }}>
//           {SOCIAL_LINKS.map(s => (
//             <a
//               key={s.key}
//               href={personalInfo.socials?.[s.key] || '#'}
//               target="_blank" rel="noreferrer"
//               style={{
//                 flex:1, display:'flex', flexDirection:'column', alignItems:'center', gap:6,
//                 padding:'12px 8px', borderRadius:10, textDecoration:'none',
//                 background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.07)',
//                 color:'rgba(255,255,255,0.4)', transition:'all 0.3s ease',
//               }}
//               onMouseEnter={e => { e.currentTarget.style.color=s.color; e.currentTarget.style.borderColor=s.color+'55'; e.currentTarget.style.background=s.color+'12'; e.currentTarget.style.transform='translateY(-3px)'; e.currentTarget.style.boxShadow=`0 8px 24px ${s.color}22`; }}
//               onMouseLeave={e => { e.currentTarget.style.color='rgba(255,255,255,0.4)'; e.currentTarget.style.borderColor='rgba(255,255,255,0.07)'; e.currentTarget.style.background='rgba(255,255,255,0.03)'; e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='none'; }}
//             >
//               {s.icon}
//               <span style={{ fontFamily:"'Space Mono',monospace", fontSize:9, letterSpacing:'0.1em' }}>{s.label.toUpperCase()}</span>
//             </a>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// // ─── TIMELINE DOT ──────────────────────────────────────────────────────────
// function TimelineDot({ accent, hov }) {
//   return (
//     <div style={{ position:'absolute', left:-22, top:4, zIndex:10 }}>
//       <div style={{
//         width:14, height:14, borderRadius:'50%',
//         border:`2px solid ${hov ? accent : 'rgba(167,139,250,0.35)'}`,
//         background:'#07040f',
//         display:'flex', alignItems:'center', justifyContent:'center',
//         transform: hov ? 'scale(1.35)' : 'scale(1)',
//         transition:'all 0.3s cubic-bezier(0.23,1,0.32,1)',
//         boxShadow: hov ? `0 0 14px ${accent}99` : 'none',
//       }}>
//         <div style={{ width:5, height:5, borderRadius:'50%', background: hov ? accent : 'rgba(167,139,250,0.5)', transition:'all 0.3s', animation: hov ? 'blinkDot 1s infinite' : 'none' }} />
//       </div>
//       {hov && <div style={{ position:'absolute', inset:-3, borderRadius:'50%', border:`1px solid ${accent}55`, animation:'pingRing 1s ease-out infinite' }} />}
//     </div>
//   );
// }

// // ─── TIMELINE ITEM ─────────────────────────────────────────────────────────
// const ITEM_ACCENTS = ['#a78bfa','#22d3ee','#34d399','#f472b6','#60a5fa','#fbbf24'];

// function TimelineItem({ item, isExperience, index, parentInView }) {
//   const [hov, setHov] = useState(false);
//   const [tilt, setTilt] = useState({ rx:0, ry:0 });
//   const [spot, setSpot] = useState({ x:50, y:50 });
//   const ref = useRef(null);
//   const accent = ITEM_ACCENTS[index % ITEM_ACCENTS.length];

//   const onMove = useCallback((e) => {
//     if (!ref.current) return;
//     const r = ref.current.getBoundingClientRect();
//     const x = e.clientX - r.left, y = e.clientY - r.top;
//     setTilt({ rx: ((y - r.height/2) / (r.height/2)) * -6, ry: ((x - r.width/2) / (r.width/2)) * 6 });
//     setSpot({ x:(x/r.width)*100, y:(y/r.height)*100 });
//   }, []);

//   const onLeave = useCallback(() => { setHov(false); setTilt({ rx:0, ry:0 }); }, []);

//   const delay = index * 0.12;

//   return (
//     <div
//       style={{
//         position:'relative', paddingLeft:28, marginBottom:20,
//         opacity: parentInView ? 1 : 0,
//         animation: parentInView ? `slideInLeft 0.65s cubic-bezier(0.23,1,0.32,1) ${delay}s both` : 'none',
//       }}
//     >
//       <TimelineDot accent={accent} hov={hov} />

//       <div
//         ref={ref}
//         onMouseMove={onMove}
//         onMouseEnter={() => setHov(true)}
//         onMouseLeave={onLeave}
//         style={{
//           position:'relative', borderRadius:16, overflow:'hidden',
//           background: hov ? 'linear-gradient(145deg, rgba(22,12,42,0.97), rgba(12,8,24,0.99))' : 'linear-gradient(145deg, rgba(14,9,28,0.92), rgba(8,5,18,0.95))',
//           border:`1px solid ${hov ? accent + '55' : 'rgba(255,255,255,0.07)'}`,
//           boxShadow: hov ? `0 0 60px ${accent}22, 0 20px 50px rgba(0,0,0,0.6)` : '0 4px 20px rgba(0,0,0,0.35)',
//           transform: `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) scale(${hov?1.015:1}) translateX(${hov?3:0}px)`,
//           transition: hov ? 'box-shadow 0.3s ease, border-color 0.3s ease' : 'all 0.45s cubic-bezier(0.23,1,0.32,1)',
//           transformStyle:'preserve-3d', cursor:'default',
//         }}
//       >
//         {/* Spotlight */}
//         {hov && <div style={{ position:'absolute', inset:0, zIndex:1, pointerEvents:'none', background:`radial-gradient(circle at ${spot.x}% ${spot.y}%, ${accent}18 0%, transparent 55%)` }} />}

//         {/* Top accent bar */}
//         <div style={{ position:'absolute', top:0, left: hov ? 0 : '50%', right: hov ? 0 : '50%', height:2, background:`linear-gradient(90deg, transparent, ${accent}, transparent)`, transition:'left 0.4s ease, right 0.4s ease', zIndex:5 }} />

//         <div style={{ position:'relative', zIndex:2, padding:'20px 22px' }}>
//           {/* Header row */}
//           <div style={{ display:'flex', flexWrap:'wrap', gap:12, justifyContent:'space-between', alignItems:'flex-start', marginBottom:12 }}>
//             <div style={{ flex:1, minWidth:0 }}>
//               <h3 style={{
//                 fontFamily:"'Syne',sans-serif", fontWeight:800,
//                 fontSize:'clamp(15px,2vw,18px)', lineHeight:1.2, margin:'0 0 6px',
//                 color: hov ? accent : 'rgba(255,255,255,0.92)',
//                 transition:'color 0.3s ease',
//               }}>
//                 {isExperience ? item.title : item.degree}
//               </h3>
//               <div style={{ display:'flex', alignItems:'center', gap:6 }}>
//                 <span style={{ width:5, height:5, borderRadius:'50%', background: accent, boxShadow:`0 0 5px ${accent}`, animation: hov ? 'blinkDot 1.2s infinite' : 'none' }} />
//                 <span style={{ fontFamily:"'Space Mono',monospace", fontSize:11, color: hov ? accent+'cc' : 'rgba(255,255,255,0.4)', transition:'color 0.3s', letterSpacing:'0.04em' }}>
//                   {isExperience ? item.company : item.institution}
//                 </span>
//               </div>
//             </div>
//             <div style={{ display:'flex', flexDirection:'column', alignItems:'flex-end', gap:6, flexShrink:0 }}>
//               <span style={{
//                 padding:'3px 10px', borderRadius:99,
//                 fontFamily:"'Space Mono',monospace", fontSize:10, letterSpacing:'0.08em',
//                 background: hov ? `linear-gradient(135deg, ${accent}33, ${accent}22)` : 'rgba(167,139,250,0.06)',
//                 color: hov ? accent : 'rgba(167,139,250,0.6)',
//                 border:`1px solid ${hov ? accent+'55' : 'rgba(167,139,250,0.2)'}`,
//                 transition:'all 0.3s',
//               }}>
//                 {item.period}
//               </span>
//               {item.type && <span style={{ fontFamily:"'Space Mono',monospace", fontSize:9, color:'rgba(255,255,255,0.2)', letterSpacing:'0.08em' }}>{item.type}</span>}
//               {item.grade && (
//                 <span style={{ fontFamily:"'Space Mono',monospace", fontSize:10, color:'#34d399', display:'flex', alignItems:'center', gap:4 }}>
//                   <span style={{ animation:'blinkDot 2s infinite' }}>★</span> {item.grade}
//                 </span>
//               )}
//             </div>
//           </div>

//           {/* Detail quote */}
//           {item.detail && (
//             <div style={{
//               marginBottom:12, padding:'8px 12px',
//               background:'rgba(255,255,255,0.03)', borderLeft:`2px solid ${accent}55`, borderRadius:'0 6px 6px 0',
//               fontFamily:"'Syne',sans-serif", fontSize:12, color:'rgba(255,255,255,0.38)', fontStyle:'italic', lineHeight:1.6,
//               transition:'color 0.3s',
//             }}
//             onMouseEnter={e=>e.currentTarget.style.color='rgba(255,255,255,0.65)'}
//             onMouseLeave={e=>e.currentTarget.style.color='rgba(255,255,255,0.38)'}
//             >
//               "{item.detail}"
//             </div>
//           )}

//           {/* Description bullets */}
//           {item.description && (
//             <ul style={{ margin:'0 0 12px', padding:0, listStyle:'none', display:'flex', flexDirection:'column', gap:7 }}>
//               {item.description.map((d, i) => (
//                 <li key={i} style={{ display:'flex', gap:10, alignItems:'flex-start', cursor:'default', transition:'transform 0.2s' }}
//                   onMouseEnter={e=>e.currentTarget.style.transform='translateX(4px)'}
//                   onMouseLeave={e=>e.currentTarget.style.transform='translateX(0)'}
//                 >
//                   <span style={{ color:accent, fontFamily:"'Space Mono',monospace", fontSize:11, flexShrink:0, marginTop:1 }}>▹</span>
//                   <span style={{ fontFamily:"'Syne',sans-serif", fontSize:13, color:'rgba(255,255,255,0.5)', lineHeight:1.6, transition:'color 0.2s' }}
//                     onMouseEnter={e=>e.currentTarget.style.color='rgba(255,255,255,0.8)'}
//                     onMouseLeave={e=>e.currentTarget.style.color='rgba(255,255,255,0.5)'}
//                   >{d}</span>
//                 </li>
//               ))}
//             </ul>
//           )}

//           {/* Skill chips */}
//           {item.skills && (
//             <div style={{ display:'flex', flexWrap:'wrap', gap:6, paddingTop:12, borderTop:'1px solid rgba(255,255,255,0.06)' }}>
//               {item.skills.map((s, i) => (
//                 <SkillChip key={s} label={s} accent={accent} delay={i * 0.03} />
//               ))}
//             </div>
//           )}
//         </div>

//         {/* Bottom sweep bar */}
//         <div style={{ position:'absolute', bottom:0, left:0, right:0, height:2, background:`linear-gradient(90deg, transparent, ${accent}88, transparent)`, transform: hov ? 'scaleX(1)' : 'scaleX(0)', transformOrigin:'left', transition:'transform 0.5s cubic-bezier(0.23,1,0.32,1)', zIndex:5 }} />
//       </div>
//     </div>
//   );
// }

// function SkillChip({ label, accent, delay }) {
//   const [hov, setHov] = useState(false);
//   return (
//     <span
//       onMouseEnter={() => setHov(true)}
//       onMouseLeave={() => setHov(false)}
//       style={{
//         padding:'3px 10px', borderRadius:6,
//         fontFamily:"'Space Mono',monospace", fontSize:10, letterSpacing:'0.04em',
//         color: hov ? accent : 'rgba(255,255,255,0.35)',
//         background: hov ? accent + '18' : 'rgba(255,255,255,0.04)',
//         border:`1px solid ${hov ? accent + '55' : 'rgba(255,255,255,0.07)'}`,
//         transform: hov ? 'translateY(-2px) scale(1.06)' : 'translateY(0) scale(1)',
//         boxShadow: hov ? `0 4px 14px ${accent}33` : 'none',
//         transition:'all 0.22s cubic-bezier(0.23,1,0.32,1)',
//         cursor:'default', whiteSpace:'nowrap',
//         animationDelay: delay + 's',
//       }}
//     >
//       {label}
//     </span>
//   );
// }

// // ─── TAB SWITCHER ──────────────────────────────────────────────────────────
// function TabBtn({ label, active, onClick }) {
//   const [hov, setHov] = useState(false);
//   return (
//     <button
//       onClick={onClick}
//       onMouseEnter={() => setHov(true)}
//       onMouseLeave={() => setHov(false)}
//       style={{
//         padding:'9px 22px', borderRadius:8,
//         fontFamily:"'Space Mono',monospace", fontSize:11, letterSpacing:'0.08em',
//         textTransform:'uppercase', cursor:'pointer', outline:'none',
//         background: active ? 'linear-gradient(135deg, #7c3aed, #6d28d9)' : hov ? 'rgba(255,255,255,0.07)' : 'transparent',
//         color: active ? 'white' : hov ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.35)',
//         border:`1px solid ${active ? 'rgba(167,139,250,0.5)' : hov ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.06)'}`,
//         boxShadow: active ? '0 0 20px rgba(124,58,237,0.35)' : 'none',
//         transform: active ? 'scale(1.04)' : hov ? 'scale(1.02)' : 'scale(1)',
//         transition:'all 0.25s cubic-bezier(0.23,1,0.32,1)',
//       }}
//     >
//       {label}
//     </button>
//   );
// }

// // ─── MAIN ──────────────────────────────────────────────────────────────────
// export default function About() {
//   const [activeSection, setActiveSection] = useState('experience');
//   const [sectionRef, sectionInView] = useInView(0.05);
//   const [statsRef, statsInView] = useInView(0.2);
//   const [timelineRef, timelineInView] = useInView(0.05);
//   const [bioRef, bioInView] = useInView(0.1);

//   const items = activeSection === 'experience' ? experience : education;

//   return (
//     <section
//       ref={sectionRef}
//       id="about"
//       style={{
//         position:'relative', padding:'120px 0 110px',
//         overflow:'hidden',
//         background:'linear-gradient(180deg, #04020c 0%, #06030f 50%, #04020c 100%)',
//       }}
//     >
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Space+Mono:wght@400;700&display=swap');

//         @keyframes revealUp {
//           from { opacity:0; transform:translateY(28px) scale(0.96); }
//           to   { opacity:1; transform:translateY(0) scale(1); }
//         }
//         @keyframes slideInLeft {
//           from { opacity:0; transform:translateX(-24px); }
//           to   { opacity:1; transform:translateX(0); }
//         }
//         @keyframes blinkDot {
//           0%,100% { opacity:0.5; } 50% { opacity:1; }
//         }
//         @keyframes pingRing {
//           0%   { transform:scale(1); opacity:0.7; }
//           100% { transform:scale(2.2); opacity:0; }
//         }
//         @keyframes floatOrb {
//           0%,100% { transform:translate(0,0); }
//           50%     { transform:translate(20px,-16px); }
//         }
//         @keyframes headerIn {
//           from { opacity:0; transform:translateY(24px); }
//           to   { opacity:1; transform:translateY(0); }
//         }
//         @keyframes timelineGrow {
//           from { transform:scaleY(0); }
//           to   { transform:scaleY(1); }
//         }
//       `}</style>

//       {/* Ambient orbs */}
//       <div style={{ position:'absolute', inset:0, pointerEvents:'none', overflow:'hidden' }}>
//         <div style={{ position:'absolute', top:'8%', left:'-6%', width:460, height:460, borderRadius:'50%', background:'radial-gradient(circle, rgba(109,40,217,0.12) 0%, transparent 70%)', filter:'blur(30px)', animation:'floatOrb 18s ease-in-out infinite' }} />
//         <div style={{ position:'absolute', bottom:'12%', right:'-5%', width:380, height:380, borderRadius:'50%', background:'radial-gradient(circle, rgba(8,145,178,0.09) 0%, transparent 70%)', filter:'blur(30px)', animation:'floatOrb 22s ease-in-out infinite reverse' }} />
//         {/* dot grid */}
//         <div style={{ position:'absolute', inset:0, backgroundImage:'radial-gradient(rgba(167,139,250,0.07) 1px, transparent 1px)', backgroundSize:'36px 36px' }} />
//       </div>

//       <div style={{ maxWidth:1240, margin:'0 auto', padding:'0 24px', position:'relative', zIndex:10 }}>

//         {/* ── HEADER ── */}
//         <div style={{
//           textAlign:'center', marginBottom:72,
//           opacity: sectionInView ? 1 : 0,
//           animation: sectionInView ? 'headerIn 0.8s cubic-bezier(0.23,1,0.32,1) both' : 'none',
//         }}>
//           <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:14, marginBottom:20 }}>
//             <div style={{ flex:1, maxWidth:80, height:1, background:'linear-gradient(90deg, transparent, rgba(167,139,250,0.5))' }} />
//             <div style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'5px 14px', borderRadius:99, background:'rgba(124,58,237,0.1)', border:'1px solid rgba(124,58,237,0.3)' }}>
//               <span style={{ width:5, height:5, borderRadius:'50%', background:'#a78bfa', boxShadow:'0 0 6px #a78bfa', animation:'blinkDot 2s infinite' }} />
//               <span style={{ fontFamily:"'Space Mono',monospace", fontSize:10, color:'#a78bfa', letterSpacing:'0.16em' }}>01. ABOUT ME</span>
//             </div>
//             <div style={{ flex:1, maxWidth:80, height:1, background:'linear-gradient(90deg, rgba(167,139,250,0.5), transparent)' }} />
//           </div>

//           <h2 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'clamp(2rem,6vw,4rem)', margin:'0 0 14px', lineHeight:1.05, letterSpacing:'-0.03em' }}>
//             <span style={{ color:'rgba(255,255,255,0.9)' }}>Rooted in </span>
//             <span style={{ background:'linear-gradient(135deg, #a78bfa 0%, #60a5fa 55%, #34d399 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>logic,</span>
//             <br />
//             <span style={{ color:'rgba(255,255,255,0.9)' }}>designed for </span>
//             <span className="gradient-text" style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'clamp(2rem,6vw,4rem)', margin:'0 0 14px', lineHeight:1.05, letterSpacing:'-0.03em' ,
              
             
//               WebkitBackgroundClip: 'text',
//               WebkitTextFillColor: 'transparent',
//               backgroundClip: 'text',
//               backgroundSize: '200% 200%',
//               animation: 'gradientShift 4s ease infinite',
//               position: 'relative',
//               display: 'inline-block',
//               transition: 'all 0.3s ease',
//             }}>impact.</span>
//           </h2>

//           <p style={{ fontFamily:"'Syne',sans-serif", color:'rgba(255,255,255,0.32)', maxWidth:480, margin:'0 auto', fontSize:15, lineHeight:1.7 }}>
//             Data Scientist &amp; ML Engineer building intelligent systems that convert raw data into meaningful insights.
//           </p>
//         </div>

//         {/* ── STATS ── */}
//         <div
//           ref={statsRef}
//           style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(160px, 1fr))', gap:14, marginBottom:72 }}
//         >
//           {STATS.map((stat, i) => <StatCard key={stat.label} stat={stat} active={statsInView} idx={i} />)}
//         </div>

//         {/* ── MAIN GRID ── */}
//         <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(min(100%, 380px), 1fr))', gap:32, alignItems:'start' }}>

//           {/* LEFT — Bio panel */}
//           <div ref={bioRef}>
//             <BioPanel inView={bioInView} />
//           </div>

//           {/* RIGHT — Timeline */}
//           <div ref={timelineRef}>
//             {/* Tab switcher */}
//             <div style={{
//               display:'inline-flex', gap:6, marginBottom:32,
//               padding:'6px', borderRadius:12,
//               background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.07)',
//               backdropFilter:'blur(16px)',
//               opacity: timelineInView ? 1 : 0,
//               animation: timelineInView ? 'revealUp 0.6s cubic-bezier(0.23,1,0.32,1) both' : 'none',
//             }}>
//               <TabBtn label="⚡ Experience" active={activeSection==='experience'} onClick={() => setActiveSection('experience')} />
//               <TabBtn label="🎓 Education"  active={activeSection==='education'}  onClick={() => setActiveSection('education')}  />
//             </div>

//             {/* Timeline */}
//             <div style={{ position:'relative', paddingLeft:6 }}>
//               {/* Vertical line */}
//               <div style={{
//                 position:'absolute', left:8, top:6, bottom:0, width:1,
//                 background:'linear-gradient(180deg, rgba(167,139,250,0.35) 0%, rgba(167,139,250,0.1) 70%, transparent 100%)',
//                 transformOrigin:'top',
//                 animation: timelineInView ? 'timelineGrow 1s cubic-bezier(0.23,1,0.32,1) 0.2s both' : 'none',
//               }} />

//               {(items || []).map((item, i) => (
//                 <TimelineItem
//                   key={i}
//                   item={item}
//                   isExperience={activeSection === 'experience'}
//                   index={i}
//                   parentInView={timelineInView}
//                 />
//               ))}

//               {(!items || items.length === 0) && (
//                 <div style={{ fontFamily:"'Space Mono',monospace", fontSize:12, color:'rgba(255,255,255,0.2)', padding:'40px 0', letterSpacing:'0.1em' }}>
//                   NO DATA FOUND
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { personalInfo, education, experience } from '../data/portfolioData';
import { useState, useRef, useEffect } from 'react';

// ─── HOOKS ─────────────────────────────────────────────────────────────────
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { 
      if (e.isIntersecting) { 
        setInView(true); 
        obs.disconnect(); 
      } 
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
    let animationId;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.floor(eased * target));
      if (p < 1) {
        animationId = requestAnimationFrame(step);
      }
    };
    animationId = requestAnimationFrame(step);
    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [active, target, duration]);
  return val;
}

// ─── CONSTANTS ─────────────────────────────────────────────────────────────
const STATS = [
  { value: 5, suffix: '+', label: 'Years Experience', mono: 'IN FIELD' },
  { value: 50, suffix: '+', label: 'Projects Completed', mono: 'SHIPPED' },
  { value: 30, suffix: '+', label: 'Technologies', mono: 'MASTERED' },
  { value: 24, suffix: '+', label: 'Happy Clients', mono: 'WORLDWIDE' },
];

const SOCIAL_LINKS = [
  {
    key: 'linkedin',
    label: 'LinkedIn',
    color: '#0ea5e9',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    key: 'github',
    label: 'GitHub',
    color: '#a78bfa',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
];

// ─── STAT CARD ─────────────────────────────────────────────────────────────
function StatCard({ stat, active, idx }) {
  const count = useCountUp(stat.value, active, 1600 + idx * 150);
  const [hov, setHov] = useState(false);
  
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        position: 'relative',
        padding: '28px 20px',
        borderRadius: 16,
        background: hov ? 'rgba(139,92,246,0.15)' : 'rgba(255,255,255,0.03)',
        border: `1px solid ${hov ? '#8b5cf6' : 'rgba(255,255,255,0.08)'}`,
        boxShadow: hov ? '0 0 40px rgba(139,92,246,0.25), 0 10px 30px rgba(0,0,0,0.4)' : '0 4px 20px rgba(0,0,0,0.3)',
        transform: hov ? 'translateY(-5px) scale(1.02)' : 'translateY(0) scale(1)',
        transition: 'all 0.35s cubic-bezier(0.23,1,0.32,1)',
        cursor: 'default',
        textAlign: 'center',
        opacity: active ? 1 : 0,
        animation: active ? `revealUp 0.6s ease-out ${idx * 0.1}s both` : 'none',
      }}
    >
      <div style={{ position: 'absolute', top: 0, left: 0, width: 12, height: 12, borderTop: '2px solid rgba(139,92,246,0.5)', borderLeft: '2px solid rgba(139,92,246,0.5)' }} />
      <div style={{ position: 'absolute', bottom: 0, right: 0, width: 12, height: 12, borderBottom: '2px solid rgba(139,92,246,0.5)', borderRight: '2px solid rgba(139,92,246,0.5)' }} />
      
      <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 'clamp(28px,4vw,40px)', fontWeight: 700, color: '#c084fc', lineHeight: 1, marginBottom: 8 }}>
        {count}{stat.suffix}
      </div>
      <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 14, fontWeight: 600, color: 'white', marginBottom: 4 }}>{stat.label}</div>
      <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 9, color: 'rgba(192,132,252,0.5)', letterSpacing: '0.15em' }}>{stat.mono}</div>
    </div>
  );
}

// ─── SKILL CHIP ──────────────────────────────────────────────────────────
function SkillChip({ label }) {
  const [hov, setHov] = useState(false);
  
  return (
    <span
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        padding: '4px 12px',
        borderRadius: 8,
        fontFamily: "'Space Mono', monospace",
        fontSize: 11,
        color: hov ? 'white' : 'rgba(255,255,255,0.7)',
        background: hov ? '#8b5cf6' : 'rgba(255,255,255,0.05)',
        border: `1px solid ${hov ? '#8b5cf6' : 'rgba(255,255,255,0.1)'}`,
        transform: hov ? 'translateY(-2px) scale(1.05)' : 'translateY(0) scale(1)',
        boxShadow: hov ? '0 4px 12px rgba(139,92,246,0.3)' : 'none',
        transition: 'all 0.25s cubic-bezier(0.23,1,0.32,1)',
        cursor: 'default',
        whiteSpace: 'nowrap',
      }}
    >
      {label}
    </span>
  );
}

// ─── TIMELINE ITEM (NO TRANSFORM) ─────────────────────────────────────────
function TimelineItem({ item, isExperience, index, parentInView }) {
  const [hov, setHov] = useState(false);
  const accent = '#8b5cf6';
  const delay = index * 0.1;

  return (
    <div
      style={{
        position: 'relative',
        paddingLeft: 28,
        marginBottom: 24,
        opacity: parentInView ? 1 : 0,
        animation: parentInView ? `slideInLeft 0.5s ease-out ${delay}s both` : 'none',
      }}
    >
      {/* Timeline Dot */}
      <div style={{ position: 'absolute', left: -20, top: 6, zIndex: 10 }}>
        <div style={{
          width: 14,
          height: 14,
          borderRadius: '50%',
          border: `2px solid ${hov ? accent : 'rgba(139,92,246,0.4)'}`,
          background: '#07040f',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transform: hov ? 'scale(1.3)' : 'scale(1)',
          transition: 'all 0.3s ease',
          boxShadow: hov ? `0 0 12px ${accent}` : 'none',
        }}>
          <div style={{ 
            width: 5, 
            height: 5, 
            borderRadius: '50%', 
            background: hov ? accent : 'rgba(139,92,246,0.6)', 
            transition: 'all 0.3s' 
          }} />
        </div>
      </div>

      {/* Card - NO 3D TRANSFORM */}
      <div
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        style={{
          position: 'relative',
          borderRadius: 16,
          background: hov ? 'linear-gradient(145deg, rgba(25,15,45,0.98), rgba(15,8,28,0.98))' : 'linear-gradient(145deg, rgba(14,9,28,0.95), rgba(8,5,18,0.96))',
          border: `1px solid ${hov ? accent : 'rgba(255,255,255,0.08)'}`,
          boxShadow: hov ? `0 0 40px ${accent}20, 0 10px 30px rgba(0,0,0,0.4)` : '0 4px 20px rgba(0,0,0,0.3)',
          transition: 'all 0.3s cubic-bezier(0.23,1,0.32,1)',
          cursor: 'default',
        }}
      >
        {/* Top accent bar */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
          opacity: hov ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }} />

        <div style={{ padding: '20px 24px' }}>
          {/* Header row */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
            <div style={{ flex: 1, minWidth: 0 }}>
              <h3 style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(16px, 2vw, 19px)',
                lineHeight: 1.3,
                margin: '0 0 6px',
                color: hov ? accent : 'white',
                transition: 'color 0.3s ease',
              }}>
                {isExperience ? item.title : item.degree}
              </h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: accent }} />
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 16, color: hov ? 'rgba(192,132,252,0.9)' : 'rgba(255,255,255,0.6)' }}>
                  {isExperience ? item.company : item.institution}
                </span>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 5, flexShrink: 0 }}>
              <span style={{
                padding: '3px 12px',
                borderRadius: 20,
                fontFamily: "'Space Mono', monospace",
                fontSize: 14,
                background: hov ? 'rgba(139,92,246,0.15)' : 'rgba(139,92,246,0.08)',
                color: hov ? '#c084fc' : 'rgba(192,132,252,0.8)',
                border: `1px solid ${hov ? '#c084fc' : 'rgba(192,132,252,0.3)'}`,
              }}>
                {item.period}
              </span>
              {item.type && <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 14, color: 'rgba(255,255,255,0.35)' }}>{item.type}</span>}
              {item.grade && (
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: '#34d399' }}>★ {item.grade}</span>
              )}
            </div>
          </div>

          {/* Detail quote */}
          {item.detail && (
            <div style={{
              marginBottom: 12,
              padding: '8px 12px',
              background: 'rgba(139,92,246,0.05)',
              borderLeft: `2px solid ${hov ? accent : 'rgba(139,92,246,0.4)'}`,
              borderRadius: '0 8px 8px 0',
              fontFamily: "'Syne', sans-serif",
              fontSize: 18,
              color: hov ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.5)',
              fontStyle: 'italic',
              lineHeight: 1.6,
              transition: 'all 0.3s ease',
            }}>
              "{item.detail}"
            </div>
          )}

          {/* Description bullets - WHITE TEXT */}
          {item.description && (
            <ul style={{ margin: '0 0 12px', padding: 0, listStyle: 'none' }}>
              {item.description.map((d, i) => (
                <li key={i} style={{ display: 'flex', gap: 10, marginBottom: 8 }}>
                  <span style={{ color: accent, fontSize: 12, marginTop: 2 }}>▹</span>
                  <span style={{ 
                    fontFamily: "'Syne', sans-serif", 
                    fontSize: 18, 
                    color: hov ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.7)', 
                    lineHeight: 1.6,
                    transition: 'color 0.2s ease',
                  }}>
                    {d}
                  </span>
                </li>
              ))}
            </ul>
          )}

          {/* Skills */}
          {item.skills && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, paddingTop: 12, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              {item.skills.map((s) => (
                <SkillChip key={s} label={s} />
              ))}
            </div>
          )}
        </div>

        {/* Bottom bar */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 2,
          background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
          opacity: hov ? 0.5 : 0,
          transition: 'opacity 0.3s ease',
        }} />
      </div>
    </div>
  );
}

// ─── TAB BUTTON ──────────────────────────────────────────────────────────
function TabBtn({ label, active, onClick }) {
  const [hov, setHov] = useState(false);
  
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        padding: '10px 28px',
        borderRadius: 10,
        fontFamily: "'Space Mono', monospace",
        fontSize: 14,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        cursor: 'pointer',
        border: 'none',
        fontWeight: 600,
        background: active ? 'linear-gradient(135deg, #8b5cf6, #7c3aed)' : hov ? 'rgba(139,92,246,0.15)' : 'transparent',
        color: active ? 'white' : hov ? '#c084fc' : 'rgba(255,255,255,0.5)',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: active ? '#8b5cf6' : hov ? 'rgba(139,92,246,0.4)' : 'rgba(255,255,255,0.1)',
        boxShadow: active ? '0 0 20px rgba(139,92,246,0.3)' : 'none',
        transform: active ? 'scale(1.02)' : hov ? 'scale(1.01)' : 'scale(1)',
        transition: 'all 0.25s ease',
      }}
    >
      {label}
    </button>
  );
}

// ─── BIO PANEL ──────────────────────────────────────────────────────────
function BioPanel({ inView }) {
    const canvasRef = useRef(null);
  
    useEffect(() => {
      const c = canvasRef.current;
      if (!c) return;
      const ctx = c.getContext('2d');
      let t = 0, animId;
      const resize = () => { c.width = c.offsetWidth; c.height = c.offsetHeight; };
      resize();
      window.addEventListener('resize', resize);
  
      const draw = () => {
        t += 0.012;
        const W = c.width, H = c.height;
        ctx.clearRect(0, 0, W, H);
        // Breathing grid
        for (let x = 0; x < W; x += 30) {
          const a = (Math.sin(t + x * 0.05) * 0.5 + 0.5) * 0.045;
          ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H);
          ctx.strokeStyle = `rgba(167,139,250,${a})`; ctx.lineWidth = 0.5; ctx.stroke();
        }
        for (let y = 0; y < H; y += 30) {
          const a = (Math.sin(t * 0.7 + y * 0.06) * 0.5 + 0.5) * 0.035;
          ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y);
          ctx.strokeStyle = `rgba(96,165,250,${a})`; ctx.lineWidth = 0.5; ctx.stroke();
        }
        // Pulse ring
        const pr = (t * 25) % 120;
        const pa = 1 - pr / 120;
        ctx.beginPath(); ctx.arc(W * 0.88, H * 0.15, pr, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(167,139,250,${pa * 0.12})`; ctx.lineWidth = 1.5; ctx.stroke();
        animId = requestAnimationFrame(draw);
      };
      draw();
      return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); };
    }, []);
  
    return (
      <div style={{
        position: 'relative', borderRadius: 18, overflow: 'hidden',
        background: 'linear-gradient(145deg, #0e0920, #07040f)',
        border: '1px solid rgba(167,139,250,0.14)',
        boxShadow: '0 8px 40px rgba(0,0,0,0.4)',
        opacity: inView ? 1 : 0,
        animation: inView ? 'revealUp 0.8s cubic-bezier(0.23,1,0.32,1) 0.1s both' : 'none',
      }}>
        <canvas ref={canvasRef} style={{ position:'absolute', inset:0, width:'100%', height:'100%', opacity:0.9 }} />
  
        <div style={{ position:'relative', zIndex:2, padding:'28px 26px' }}>
          {/* Header bar */}
          <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:22, paddingBottom:14, borderBottom:'1px solid rgba(255,255,255,0.06)' }}>
            <div style={{ display:'flex', gap:6 }}>
              {['#ff5f57','#febc2e','#28c840'].map((c,i) => (
                <div key={i} style={{ width:8, height:8, borderRadius:'50%', background:c, boxShadow:`0 0 5px ${c}` }} />
              ))}
            </div>
            <div style={{ flex:1, display:'flex', alignItems:'center', justifyContent:'center' }}>
              <span style={{ fontFamily:"'Space Mono',monospace", fontSize:12, color:'rgba(255,255,255,0.2)', letterSpacing:'0.12em' }}>DOSSIER :: HASSAN_SHAHID.md</span>
            </div>
            <div style={{ width:6, height:6, borderRadius:'50%', background:'#22c55e', boxShadow:'0 0 6px #22c55e', animation:'blinkDot 2s infinite' }} />
          </div>
  
          {/* Bio text */}
          <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
            {(personalInfo.bio || [
              'Data Scientist & ML Engineer passionate about building intelligent systems that convert raw data into meaningful insights.',
              'I specialize in end-to-end ML pipelines, computer vision, and full-stack AI-powered web applications.',
              'Currently leading Zenehrix — crafting data-driven products with sharp design sensibilities.',
            ]).map((para, i) => (
              <p key={i} style={{
                fontFamily:"'Syne',sans-serif", fontSize:18, color:'rgba(255,255,255,0.55)',
                lineHeight:1.75, margin:0,
                paddingLeft:12, borderLeft:'2px solid rgba(167,139,250,0.2)',
                opacity: inView ? 1 : 0,
                // animation: inView ? `revealUp 0.6s cubic-bezier(0.23,1,0.32,1) ${0.3 + i * 0.12}s both` : 'none',
                transition: 'color 0.3s',
              }}
              onMouseEnter={e => e.currentTarget.style.color='rgba(255,255,255,0.85)'}
              onMouseLeave={e => e.currentTarget.style.color='rgba(255,255,255,0.55)'}
              >
                {para}
              </p>
            ))}
          </div>
  
          {/* Email */}
          <a
            href={`mailto:${personalInfo.email}`}
            style={{
              display:'flex', alignItems:'center', gap:12, marginTop:22,
              padding:'12px 16px', borderRadius:10, textDecoration:'none',
              background:'rgba(167,139,250,0.06)', border:'1px solid rgba(167,139,250,0.15)',
              transition:'all 0.3s cubic-bezier(0.23,1,0.32,1)',
            }}
            onMouseEnter={e => { e.currentTarget.style.background='rgba(167,139,250,0.12)'; e.currentTarget.style.borderColor='rgba(167,139,250,0.4)'; e.currentTarget.style.transform='translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background='rgba(167,139,250,0.06)'; e.currentTarget.style.borderColor='rgba(167,139,250,0.15)'; e.currentTarget.style.transform='translateY(0)'; }}
          >
            <div style={{ width:36, height:36, borderRadius:10, background:'rgba(167,139,250,0.12)', display:'flex', alignItems:'center', justifyContent:'center', color:'#a78bfa', flexShrink:0 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </div>
            <div style={{ flex:1, overflow:'hidden' }}>
              <div style={{ fontFamily:"'Space Mono',monospace", fontSize:11, color:'rgba(255,255,255,0.75)', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>{personalInfo.email}</div>
              <div style={{ fontFamily:"'Space Mono',monospace", fontSize:9, color:'rgba(255,255,255,0.25)', letterSpacing:'0.1em', marginTop:2 }}>SEND_MESSAGE</div>
            </div>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(167,139,250,0.6)" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
          </a>
  
          {/* Social */}
          <div style={{ display:'flex', gap:10, marginTop:10 }}>
            {SOCIAL_LINKS.map(s => (
              <a
                key={s.key}
                href={personalInfo.socials?.[s.key] || '#'}
                target="_blank" rel="noreferrer"
                style={{
                  flex:1, display:'flex', flexDirection:'column', alignItems:'center', gap:6,
                  padding:'12px 8px', borderRadius:10, textDecoration:'none',
                  background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.07)',
                  color:'rgba(255,255,255,0.4)', transition:'all 0.3s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.color=s.color; e.currentTarget.style.borderColor=s.color+'55'; e.currentTarget.style.background=s.color+'12'; e.currentTarget.style.transform='translateY(-3px)'; e.currentTarget.style.boxShadow=`0 8px 24px ${s.color}22`; }}
                onMouseLeave={e => { e.currentTarget.style.color='rgba(255,255,255,0.4)'; e.currentTarget.style.borderColor='rgba(255,255,255,0.07)'; e.currentTarget.style.background='rgba(255,255,255,0.03)'; e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='none'; }}
              >
                {s.icon}
                <span style={{ fontFamily:"'Space Mono',monospace", fontSize:9, letterSpacing:'0.1em' }}>{s.label.toUpperCase()}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  }

// ─── MAIN COMPONENT ────────────────────────────────────────────────────────
export default function About() {
  const [activeSection, setActiveSection] = useState('experience');
  const [sectionRef, sectionInView] = useInView(0.05);
  const [statsRef, statsInView] = useInView(0.2);
  const [timelineRef, timelineInView] = useInView(0.05);
  const [bioRef, bioInView] = useInView(0.1);

  const items = activeSection === 'experience' ? experience : education;

  return (
    <section
      ref={sectionRef}
      id="about"
      style={{
        position: 'relative',
        padding: '120px 0 110px',
        overflow: 'hidden',
        background: 'radial-gradient(ellipse at 30% 40%, #0a0618 0%, #04020c 100%)',
      }}
    >
      <style>{`
        @keyframes revealUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>

      {/* Background Orbs */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', top: '10%', left: '-5%', width: 500, height: 500,
          borderRadius: '50%', background: 'radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }} />
        <div style={{
          position: 'absolute', bottom: '10%', right: '-5%', width: 400, height: 400,
          borderRadius: '50%', background: 'radial-gradient(circle, rgba(45,212,191,0.08) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(rgba(139,92,246,0.05) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 10 }}>

        {/* HEADER */}
        <div style={{
          textAlign: 'center',
          marginBottom: 72,
          opacity: sectionInView ? 1 : 0,
          animation: sectionInView ? 'revealUp 0.6s ease-out both' : 'none',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, marginBottom: 20 }}>
            <div style={{ width: 60, height: 1, background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.5))' }} />
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: '#c084fc', letterSpacing: '0.15em' }}>01. ABOUT ME</span>
            <div style={{ width: 60, height: 1, background: 'linear-gradient(90deg, rgba(139,92,246,0.5), transparent)' }} />
          </div>

          <h2 style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(2.2rem, 7vw, 4rem)',
            margin: '0 0 16px',
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
          }}>
            <span style={{ color: 'white' }}>Rooted in </span>
            <span style={{
              background: 'linear-gradient(135deg, #c084fc 0%, #60a5fa 55%, #34d399 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              backgroundSize: '200% 200%',
              animation: 'gradientShift 4s ease infinite',
              display: 'inline-block',
              transition: 'transform 0.3s ease',
              cursor: 'default',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
              logic,
            </span>
            <br />
            <span style={{ color: 'white' }}>designed for </span>
            <span style={{
              background: 'linear-gradient(135deg, #f472b6 0%, #fb923c 55%, #fbbf24 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              backgroundSize: '200% 200%',
              animation: 'gradientShift 4s ease infinite',
              display: 'inline-block',
              transition: 'transform 0.3s ease',
              cursor: 'default',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
              impact.
            </span>
          </h2>

          <p style={{
            fontFamily: "'Syne', sans-serif",
            color: 'rgba(255,255,255,0.45)',
            maxWidth: 520,
            margin: '0 auto',
            fontSize: 16,
            lineHeight: 1.7,
          }}>
            Data Scientist &amp; ML Engineer building intelligent systems that convert raw data into meaningful insights.
          </p>
        </div>

        {/* STATS */}
        {/* <div
          ref={statsRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: 16,
            marginBottom: 72,
          }}
        >
          {STATS.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} active={statsInView} idx={i} />
          ))}
        </div> */}

        {/* MAIN GRID */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 40, alignItems: 'start' }}>
          
          {/* LEFT - Bio */}
          <div ref={bioRef}>
            <BioPanel inView={bioInView} />
          </div>

          {/* RIGHT - Timeline */}
          <div ref={timelineRef}>
            <div style={{
              display: 'inline-flex',
              gap: 8,
              marginBottom: 32,
              padding: '6px',
              borderRadius: 14,
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}>
              <TabBtn label="⚡ Experience" active={activeSection === 'experience'} onClick={() => setActiveSection('experience')} />
              <TabBtn label="🎓 Education" active={activeSection === 'education'} onClick={() => setActiveSection('education')} />
            </div>

            <div style={{ position: 'relative', paddingLeft: 6 }}>
              <div style={{
                position: 'absolute',
                left: 6,
                top: 6,
                bottom: 0,
                width: 1,
                background: 'linear-gradient(180deg, rgba(139,92,246,0.4) 0%, rgba(139,92,246,0.1) 70%, transparent 100%)',
              }} />

              {(items || []).map((item, i) => (
                <TimelineItem
                  key={i}
                  item={item}
                  isExperience={activeSection === 'experience'}
                  index={i}
                  parentInView={timelineInView}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}