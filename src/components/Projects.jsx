// // import { useState, useRef } from 'react';
// // import { motion } from 'framer-motion';
// // import { projects } from '../data/portfolioData';

// // const tagColors = {
// //   "ML": "bg-purple-500/30 text-purple-200 border-purple-400/30",
// //   "NLP": "bg-violet-500/30 text-violet-200 border-violet-400/30",
// //   "Deep Learning": "bg-indigo-500/30 text-indigo-200 border-indigo-400/30",
// //   "Computer Vision": "bg-cyan-500/30 text-cyan-200 border-cyan-400/30",
// //   "AI": "bg-amber-500/30 text-amber-200 border-amber-400/30",
// //   "Time Series": "bg-emerald-500/30 text-emerald-200 border-emerald-400/30",
// //   "Finance": "bg-green-500/30 text-green-200 border-green-400/30",
// //   "Full Stack": "bg-blue-500/30 text-blue-200 border-blue-400/30",
// //   "YOLOv8": "bg-red-500/30 text-red-200 border-red-400/30"
// // };

// // const allTags = ["All", "ML", "NLP", "Computer Vision", "AI", "Full Stack"];

// // // 3D Tilt Card Wrapper
// // function TiltWrapper({ children }) {
// //   const cardRef = useRef(null);

// //   const handleMouseMove = (e) => {
// //     if (!cardRef.current) return;
// //     const rect = cardRef.current.getBoundingClientRect();
// //     const x = e.clientX - rect.left;
// //     const y = e.clientY - rect.top;
// //     const centerX = rect.width / 2;
// //     const centerY = rect.height / 2;
    
// //     const rotateX = ((y - centerY) / centerY) * -5; // Subtle tilt
// //     const rotateY = ((x - centerX) / centerX) * 5;
    
// //     cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
// //   };

// //   const handleMouseLeave = () => {
// //     if (!cardRef.current) return;
// //     cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
// //   };

// //   return (
// //     <div 
// //       ref={cardRef}
// //       onMouseMove={handleMouseMove}
// //       onMouseLeave={handleMouseLeave}
// //       className="transition-transform duration-200 ease-out h-full"
// //     >
// //       {children}
// //     </div>
// //   );
// // }

// // function ProjectCard({ project, index }) {
// //   return (
// //     <TiltWrapper>
// //       <article className="h-full bg-[#0a0612] rounded-2xl border border-white/5 overflow-hidden flex flex-col group relative">
        
// //         {/* Top Shine Effect on Hover */}
// //         <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />

// //         {/* Project Header / Image Area */}
// //         <div className={`h-48 relative overflow-hidden bg-gradient-to-br ${project.color}`}>
// //           {/* Grid Pattern Overlay */}
// //           <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
          
// //           {/* Glow Effect */}
// //           <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />

// //           {/* MacOS Style Window Dots */}
// //           <div className="absolute top-4 left-4 flex gap-2 z-20">
// //             <span className="w-3 h-3 rounded-full bg-red-500/80 group-hover:bg-red-500 transition-colors" />
// //             <span className="w-3 h-3 rounded-full bg-yellow-500/80 group-hover:bg-yellow-500 transition-colors" />
// //             <span className="w-3 h-3 rounded-full bg-green-500/80 group-hover:bg-green-500 transition-colors" />
// //           </div>

// //           {/* Featured Icon/Code Symbol */}
// //           <div className="absolute bottom-4 right-4 text-white/20 group-hover:text-white/40 transition-colors duration-300">
// //             <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="opacity-50">
// //               <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
// //             </svg>
// //           </div>

// //           {/* Floating Tags */}
// //           <div className="absolute top-4 right-4 flex gap-2 z-20">
// //             {project.tags.slice(0, 2).map(tag => (
// //               <span key={tag} className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border backdrop-blur-md ${tagColors[tag] || 'bg-white/15 text-white/80 border-white/20'}`}>
// //                 {tag}
// //               </span>
// //             ))}
// //           </div>
// //         </div>

// //         {/* Content */}
// //         <div className="p-6 flex flex-col flex-grow relative z-10">
// //           <div className="mb-4">
// //             <p className="text-purple-400 text-xs font-mono mb-1">{project.subtitle}</p>
// //             <h3 className="font-display font-bold text-2xl text-white group-hover:text-purple-300 transition-colors">
// //               {project.title}
// //             </h3>
// //           </div>

// //           <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
// //             {project.description}
// //           </p>

// //           {/* Tech Stack */}
// //           <div className="mb-6">
// //             <div className="flex flex-wrap gap-2">
// //               {project.stack.map(s => (
// //                 <span key={s} className="px-2.5 py-1 text-xs rounded-lg bg-white/5 text-gray-300 border border-white/5 group-hover:border-purple-500/30 transition-colors">
// //                   {s}
// //                 </span>
// //               ))}
// //             </div>
// //           </div>

// //           {/* Highlights & Actions */}
// //           <div className="border-t border-white/5 pt-4 flex items-center justify-between">
// //              <div className="flex gap-2 text-xs text-gray-500">
// //                 {project.highlights.slice(0, 2).map(h => (
// //                   <span key={h} className="flex items-center gap-1">
// //                     <span className="w-1 h-1 rounded-full bg-purple-500/50" />
// //                     {h}
// //                   </span>
// //                 ))}
// //              </div>

// //              <div className="flex gap-2">
// //               {project.githubUrl !== '#' && (
// //                 <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
// //                    className="p-2 rounded-lg border border-white/10 text-gray-400 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 transition-all"
// //                    title="View Code">
// //                   <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
// //                     <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
// //                   </svg>
// //                 </a>
// //               )}
// //               {project.liveUrl !== '#' && (
// //                 <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
// //                    className="px-4 py-2 rounded-lg bg-purple-500/10 text-purple-300 text-xs font-semibold border border-purple-500/20 hover:bg-purple-500 hover:text-white transition-all flex items-center gap-2"
// //                    title="Live Demo">
// //                   Live Demo
// //                   <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
// //                     <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
// //                     <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
// //                   </svg>
// //                 </a>
// //               )}
// //              </div>
// //           </div>
// //         </div>
// //       </article>
// //     </TiltWrapper>
// //   );
// // }

// // export default function Projects() {
// //   const [filter, setFilter] = useState('All');

// //   const filtered = filter === 'All'
// //     ? projects
// //     : projects.filter(p => p.tags.includes(filter));

// //   return (
// //     <section id="projects" className="py-24 relative overflow-hidden">
// //       {/* Background Glows */}
// //       <div className="absolute inset-0 pointer-events-none">
// //         <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-blob" />
// //         <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
// //       </div>

// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
// //         {/* Section Header */}
// //         <div className="reveal mb-16 text-center lg:text-left">
// //           <div className="flex items-center gap-4 mb-4 justify-center lg:justify-start">
// //             <span className="w-8 h-px bg-purple-500" />
// //             <span className="font-mono text-purple-400 text-sm tracking-widest">// 03. PROJECTS</span>
// //           </div>
// //           <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-4">
// //             <span className="text-white">Featured</span>
// //             <span className="gradient-text"> Works</span>
// //           </h2>
// //           <p className="text-gray-400 max-w-xl text-base mx-auto lg:mx-0">
// //             A selection of projects I've worked on, ranging from Machine Learning models to Full-Stack applications.
// //           </p>
// //         </div>

// //         {/* Filter Buttons */}
// //         <div className="reveal flex flex-wrap justify-center lg:justify-start gap-3 mb-12">
// //           {allTags.map(tag => (
// //             <button
// //               key={tag}
// //               onClick={() => setFilter(tag)}
// //               className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
// //                 filter === tag
// //                   ? 'bg-white text-black shadow-lg shadow-white/20 scale-105'
// //                   : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5'
// //               }`}
// //             >
// //               {tag}
// //             </button>
// //           ))}
// //         </div>

// //         {/* Projects Grid */}
// //         <motion.div 
// //           className="grid md:grid-cols-2 xl:grid-cols-3 gap-8"
// //           layout
// //         >
// //           {filtered.map((project, i) => (
// //             <motion.div
// //               key={project.id}
// //               layout
// //               initial={{ opacity: 0, y: 20 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               exit={{ opacity: 0, scale: 0.9 }}
// //               transition={{ duration: 0.3, delay: i * 0.05 }}
// //               className="reveal"
// //             >
// //               <ProjectCard project={project} index={i} />
// //             </motion.div>
// //           ))}
// //         </motion.div>

// //         {/* Footer Button */}
// //         <div className="reveal mt-16 text-center">
// //           <a
// //             href="https://github.com/batman-hassaan"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //             className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-white/5 text-white hover:bg-purple-500/10 hover:border-purple-500/30 transition-all group"
// //           >
// //             <span className="text-sm font-semibold">View All Projects on GitHub</span>
// //             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-1 transition-transform">
// //               <path d="M5 12h14M12 5l7 7-7 7" />
// //             </svg>
// //           </a>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }


// import { useState, useRef, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { projects } from '../data/portfolioData';

// // Enhanced Tag Colors with better contrast
// const tagColors = {
//   "ML": "from-purple-500 to-purple-700",
//   "NLP": "from-violet-500 to-violet-700", 
//   "Deep Learning": "from-indigo-500 to-indigo-700",
//   "Computer Vision": "from-cyan-500 to-cyan-700",
//   "AI": "from-amber-500 to-amber-700",
//   "Time Series": "from-emerald-500 to-emerald-700",
//   "Finance": "from-green-500 to-green-700",
//   "Full Stack": "from-blue-500 to-blue-700",
//   "YOLOv8": "from-red-500 to-red-700"
// };

// const allTags = ["All", "ML", "NLP", "Computer Vision", "AI", "Full Stack"];

// // 4D Tilt Card with Enhanced Effects
// function TiltCard({ children, project }) {
//   const cardRef = useRef(null);
//   const [glowStyle, setGlowStyle] = useState({});
//   const [isHovered, setIsHovered] = useState(false);

//   const handleMouseMove = (e) => {
//     if (!cardRef.current) return;
//     const rect = cardRef.current.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;
//     const centerX = rect.width / 2;
//     const centerY = rect.height / 2;
    
//     const rotateX = ((y - centerY) / centerY) * -12;
//     const rotateY = ((x - centerX) / centerX) * 12;
//     const rotateZ = ((x - centerX) / centerX) * 2;
    
//     // Calculate glow position
//     const glowX = (x / rect.width) * 100;
//     const glowY = (y / rect.height) * 100;
    
//     setGlowStyle({
//       transform: `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) scale3d(1.03, 1.03, 1.03)`,
//       transition: 'transform 0.1s ease-out',
//       background: `radial-gradient(circle at ${glowX}% ${glowY}%, rgba(255,255,255,0.15) 0%, transparent 60%)`,
//     });
//   };

//   const handleMouseEnter = () => {
//     setIsHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//     setGlowStyle({
//       transform: 'perspective(1200px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale3d(1, 1, 1)',
//       transition: 'transform 0.3s cubic-bezier(0.23, 1, 0.32, 1)',
//       background: 'none',
//     });
//   };

//   return (
//     <div
//       ref={cardRef}
//       onMouseMove={handleMouseMove}
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//       style={{
//         ...glowStyle,
//         height: '100%',
//         cursor: 'pointer',
//       }}
//     >
//       {children}
//     </div>
//   );
// }

// // Enhanced Project Card Component
// function ProjectCard({ project, index }) {
//   const [isImageLoaded, setIsImageLoaded] = useState(false);
  
//   return (
//     <TiltCard project={project}>
//       <article className="h-full bg-gradient-to-br from-gray-900/95 to-gray-950/95 rounded-2xl border border-white/10 overflow-hidden flex flex-col group backdrop-blur-sm relative">
        
//         {/* Animated Border Glow */}
//         <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
//              style={{
//                background: 'linear-gradient(135deg, rgba(139,92,246,0.3), rgba(236,72,153,0.3), rgba(6,182,212,0.3))',
//                padding: '1px',
//                mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
//                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
//                WebkitMaskComposite: 'xor',
//                maskComposite: 'exclude',
//              }} />

//         {/* Top Shine Effect */}
//         <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-t-2xl" />

//         {/* Project Header Area */}
//         <div className={`h-52 relative overflow-hidden bg-gradient-to-br ${project.color || 'from-purple-900 to-indigo-900'}`}>
//           {/* Animated Grid Pattern */}
//           <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] group-hover:bg-[size:24px_24px] transition-all duration-700" />
          
//           {/* Rotating Gradient Orb */}
//           <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl group-hover:scale-150 group-hover:rotate-45 transition-all duration-700" />
//           <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl group-hover:scale-150 group-hover:-rotate-45 transition-all duration-700" />

//           {/* macOS Style Window Dots */}
//           <div className="absolute top-4 left-4 flex gap-2 z-20">
//             <span className="w-3 h-3 rounded-full bg-red-500/80 group-hover:bg-red-500 transition-all duration-300 group-hover:scale-110" />
//             <span className="w-3 h-3 rounded-full bg-yellow-500/80 group-hover:bg-yellow-500 transition-all duration-300 group-hover:scale-110" />
//             <span className="w-3 h-3 rounded-full bg-green-500/80 group-hover:bg-green-500 transition-all duration-300 group-hover:scale-110" />
//           </div>

//           {/* Project Icon */}
//           <div className="absolute bottom-4 right-4 text-white/10 group-hover:text-white/30 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
//             <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8">
//               <polyline points="16 18 22 12 16 6" />
//               <polyline points="8 6 2 12 8 18" />
//             </svg>
//           </div>

//           {/* Tags */}
//           <div className="absolute top-4 right-4 flex gap-2 z-20">
//             {project.tags.slice(0, 2).map((tag, i) => (
//               <span 
//                 key={tag} 
//                 className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-gradient-to-r ${tagColors[tag] || 'from-gray-600 to-gray-800'} text-white shadow-lg backdrop-blur-sm border border-white/20 group-hover:scale-105 transition-transform duration-300`}
//                 style={{ transitionDelay: `${i * 50}ms` }}
//               >
//                 {tag}
//               </span>
//             ))}
//           </div>

//           {/* Animated Scan Line */}
//           <div className="absolute inset-0 pointer-events-none overflow-hidden">
//             <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent animate-scan" />
//           </div>
//         </div>

//         {/* Content Area */}
//         <div className="p-6 flex flex-col flex-grow relative">
//           {/* Category Badge */}
//           <div className="mb-3">
//             <span className="text-xs font-mono px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
//               {project.subtitle || 'Featured Project'}
//             </span>
//           </div>

//           {/* Title */}
//           <h3 className="font-bold text-2xl text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
//             {project.title}
//           </h3>

//           {/* Description */}
//           <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-grow">
//             {project.description}
//           </p>

//           {/* Tech Stack */}
//           <div className="mb-4">
//             <div className="flex flex-wrap gap-2">
//               {project.stack.slice(0, 4).map((tech, i) => (
//                 <span 
//                   key={tech} 
//                   className="px-2.5 py-1 text-xs rounded-lg bg-white/5 text-gray-300 border border-white/10 group-hover:border-purple-500/40 group-hover:bg-purple-500/10 transition-all duration-300 hover:scale-105"
//                   style={{ transitionDelay: `${i * 20}ms` }}
//                 >
//                   {tech}
//                 </span>
//               ))}
//               {project.stack.length > 4 && (
//                 <span className="px-2.5 py-1 text-xs rounded-lg bg-white/5 text-gray-400 border border-white/10">
//                   +{project.stack.length - 4}
//                 </span>
//               )}
//             </div>
//           </div>

//           {/* Highlights & Actions */}
//           <div className="border-t border-white/10 pt-4 flex items-center justify-between">
//             <div className="flex gap-3 text-xs">
//               {project.highlights?.slice(0, 2).map((highlight, i) => (
//                 <div key={highlight} className="flex items-center gap-1.5 group/highlight">
//                   <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 group-hover/highlight:scale-150 transition-all duration-300" />
//                   <span className="text-gray-400 group-hover/highlight:text-gray-300 transition-colors">{highlight}</span>
//                 </div>
//               ))}
//             </div>

//             <div className="flex gap-2">
//               {project.githubUrl && project.githubUrl !== '#' && (
//                 <a 
//                   href={project.githubUrl} 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   className="p-2 rounded-lg border border-white/10 text-gray-400 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/20 transition-all duration-300 hover:scale-110"
//                 >
//                   <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
//                     <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
//                   </svg>
//                 </a>
//               )}
//               {project.liveUrl && project.liveUrl !== '#' && (
//                 <a 
//                   href={project.liveUrl} 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-semibold hover:from-purple-500 hover:to-pink-500 transition-all duration-300 flex items-center gap-2 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30"
//                 >
//                   Live Demo
//                   <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
//                     <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
//                     <polyline points="15 3 21 3 21 9" />
//                     <line x1="10" y1="14" x2="21" y2="3" />
//                   </svg>
//                 </a>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Bottom Accent Line */}
//         <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
//       </article>
//     </TiltCard>
//   );
// }

// export default function Projects() {
//   const [filter, setFilter] = useState('All');
//   const [hoveredFilter, setHoveredFilter] = useState(null);

//   const filtered = filter === 'All'
//     ? projects
//     : projects.filter(p => p.tags?.includes(filter));

//   return (
//     <section id="projects" className="py-28 relative overflow-hidden">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl animate-float" />
//         <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl animate-float-delayed" />
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-3xl animate-pulse-slow" />
//       </div>

//       {/* Grid Pattern Overlay */}
//       <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
//         {/* Section Header */}
//         <motion.div 
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="mb-16 text-center"
//         >
//           <div className="flex items-center justify-center gap-4 mb-4">
//             <div className="w-12 h-px bg-gradient-to-r from-transparent to-purple-500" />
//             <span className="font-mono text-purple-400 text-sm tracking-widest animate-pulse">// 03. PORTFOLIO</span>
//             <div className="w-12 h-px bg-gradient-to-l from-transparent to-purple-500" />
//           </div>
          
//           <h2 className="font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-4">
//             <span className="text-white">Featured </span>
//             <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
//               Projects
//             </span>
//           </h2>
          
//           <p className="text-gray-400 max-w-2xl mx-auto text-base">
//             Exploring the intersection of AI, Machine Learning, and modern web technologies
//           </p>
//         </motion.div>

//         {/* Filter Buttons */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           className="flex flex-wrap justify-center gap-3 mb-12"
//         >
//           {allTags.map(tag => (
//             <button
//               key={tag}
//               onClick={() => setFilter(tag)}
//               onMouseEnter={() => setHoveredFilter(tag)}
//               onMouseLeave={() => setHoveredFilter(null)}
//               className={`relative px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
//                 filter === tag
//                   ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/30 scale-105'
//                   : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
//               }`}
//             >
//               {tag}
//               {filter === tag && (
//                 <motion.span 
//                   layoutId="activeFilter"
//                   className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 -z-10"
//                   transition={{ type: "spring", duration: 0.5 }}
//                 />
//               )}
//             </button>
//           ))}
//         </motion.div>

//         {/* Projects Grid */}
//         <AnimatePresence mode="wait">
//           <motion.div 
//             key={filter}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.4 }}
//             className="grid md:grid-cols-2 xl:grid-cols-3 gap-8"
//           >
//             {filtered.map((project, i) => (
//               <motion.div
//                 key={project.id}
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: i * 0.1 }}
//               >
//                 <ProjectCard project={project} index={i} />
//               </motion.div>
//             ))}
//           </motion.div>
//         </AnimatePresence>

//         {/* View More Button */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5, delay: 0.4 }}
//           className="mt-16 text-center"
//         >
//           <a
//             href="https://github.com/batman-hassaan"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 text-white hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25"
//           >
//             <span className="text-sm font-semibold">View All Projects on GitHub</span>
//             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
//               <path d="M5 12h14M12 5l7 7-7 7" />
//             </svg>
//           </a>
//         </motion.div>
//       </div>

//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translate(0, 0) rotate(0deg); }
//           50% { transform: translate(20px, -20px) rotate(5deg); }
//         }
//         @keyframes float-delayed {
//           0%, 100% { transform: translate(0, 0) rotate(0deg); }
//           50% { transform: translate(-20px, 20px) rotate(-5deg); }
//         }
//         @keyframes pulse-slow {
//           0%, 100% { opacity: 0.3; transform: translate(-50%, -50%) scale(1); }
//           50% { opacity: 0.6; transform: translate(-50%, -50%) scale(1.05); }
//         }
//         @keyframes scan {
//           0% { transform: translateY(-100%); }
//           100% { transform: translateY(1000%); }
//         }
//         @keyframes gradient {
//           0%, 100% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//         }
//         .animate-float { animation: float 8s ease-in-out infinite; }
//         .animate-float-delayed { animation: float-delayed 10s ease-in-out infinite; }
//         .animate-pulse-slow { animation: pulse-slow 6s ease-in-out infinite; }
//         .animate-scan { animation: scan 3s linear infinite; }
//         .animate-gradient { background-size: 200% 200%; animation: gradient 3s ease infinite; }
//       `}</style>
//     </section>
//   );
// }


import { useState, useRef, useEffect, useCallback } from 'react';
import { projects } from '../data/portfolioData';

// ─── CONSTANTS ─────────────────────────────────────────────────────────────
const ALL_TAGS = ['All', 'ML', 'NLP', 'Computer Vision', 'AI', 'Full Stack'];

const TAG_META = {
  'ML':              { color: '#c084fc', bg: 'rgba(192,132,252,0.15)', border: 'rgba(192,132,252,0.4)' },
  'NLP':             { color: '#e879f9', bg: 'rgba(232,121,249,0.15)', border: 'rgba(232,121,249,0.4)' },
  'Deep Learning':   { color: '#818cf8', bg: 'rgba(129,140,248,0.15)', border: 'rgba(129,140,248,0.4)' },
  'Computer Vision': { color: '#2dd4bf', bg: 'rgba(45,212,191,0.15)',  border: 'rgba(45,212,191,0.4)'  },
  'AI':              { color: '#fbbf24', bg: 'rgba(251,191,36,0.15)',  border: 'rgba(251,191,36,0.4)'  },
  'Time Series':     { color: '#34d399', bg: 'rgba(52,211,153,0.15)', border: 'rgba(52,211,153,0.4)' },
  'Finance':         { color: '#4ade80', bg: 'rgba(74,222,128,0.15)', border: 'rgba(74,222,128,0.4)' },
  'Full Stack':      { color: '#60a5fa', bg: 'rgba(96,165,250,0.15)', border: 'rgba(96,165,250,0.4)' },
  'YOLOv8':          { color: '#f87171', bg: 'rgba(248,113,113,0.15)', border: 'rgba(248,113,113,0.4)' },
};

const CARD_ACCENTS = [
  { accent: '#c084fc', glow: 'rgba(192,132,252,0.25)', top: 'rgba(109,40,217,0.6)', bot: 'rgba(79,70,229,0.6)' },
  { accent: '#2dd4bf', glow: 'rgba(45,212,191,0.25)',  top: 'rgba(8,145,178,0.6)',  bot: 'rgba(6,182,212,0.6)' },
  { accent: '#34d399', glow: 'rgba(52,211,153,0.25)',  top: 'rgba(5,150,105,0.6)',  bot: 'rgba(16,185,129,0.6)' },
  { accent: '#f472b6', glow: 'rgba(244,114,182,0.25)', top: 'rgba(219,39,119,0.6)', bot: 'rgba(236,72,153,0.6)' },
  { accent: '#60a5fa', glow: 'rgba(96,165,250,0.25)',  top: 'rgba(37,99,235,0.6)',  bot: 'rgba(59,130,246,0.6)' },
  { accent: '#fbbf24', glow: 'rgba(251,191,36,0.25)',  top: 'rgba(180,83,9,0.6)',   bot: 'rgba(217,119,6,0.6)' },
];

// Icons
const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const ExternalIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
    <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

// ─── ANIMATED CARD HEADER ─────────────────────────────────────────────────
function CardHeader({ accent, top, bot, idx }) {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = canvas.offsetWidth || 400;
    let height = canvas.offsetHeight || 180;
    let t = 0, animId;
    
    const resize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width;
      canvas.height = height;
    };
    
    window.addEventListener('resize', resize);
    resize();

    const draw = () => {
      t += 0.015;
      ctx.clearRect(0, 0, width, height);

      const grad = ctx.createLinearGradient(0, 0, width, height);
      grad.addColorStop(0, top);
      grad.addColorStop(1, bot);
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      ctx.strokeStyle = 'rgba(255,255,255,0.08)';
      ctx.lineWidth = 0.5;
      const step = 30;
      for (let x = 0; x < width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      for (let w = 0; w < 3; w++) {
        ctx.beginPath();
        for (let x = 0; x <= width; x += 4) {
          const y = height * 0.5 + Math.sin(x * 0.015 + t * 1.5 + w * 1.5) * 18 * (1 - w * 0.25);
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = `rgba(255,255,255,${0.1 - w * 0.03})`;
        ctx.lineWidth = 1 - w * 0.2;
        ctx.stroke();
      }

      for (let i = 0; i < 12; i++) {
        const x = ((i * 47 + t * 25) % width);
        const y = height * 0.3 + Math.sin(t * 0.8 + i) * height * 0.25;
        ctx.beginPath();
        ctx.arc(x, y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${0.3 + Math.sin(t * 2 + i) * 0.1})`;
        ctx.fill();
      }

      const scanY = ((t * 40) % (height + 30)) - 15;
      const scanGrad = ctx.createLinearGradient(0, scanY, 0, scanY + 4);
      scanGrad.addColorStop(0, 'rgba(255,255,255,0)');
      scanGrad.addColorStop(0.5, `rgba(255,255,255,0.15)`);
      scanGrad.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = scanGrad;
      ctx.fillRect(0, scanY, width, 4);

      animId = requestAnimationFrame(draw);
    };
    
    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, [top, bot]);

  return (
    <div style={{ position: 'relative', height: '170px', overflow: 'hidden', flexShrink: 0 }}>
      <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }} />
      
      <div style={{ position: 'absolute', top: '14px', left: '16px', display: 'flex', gap: '8px', zIndex: 10 }}>
        <div style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#ff5f57', boxShadow: '0 0 6px rgba(255,95,87,0.5)' }} />
        <div style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#febc2e', boxShadow: '0 0 6px rgba(254,188,46,0.5)' }} />
        <div style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#28c840', boxShadow: '0 0 6px rgba(40,200,64,0.5)' }} />
      </div>

      <div style={{
        position: 'absolute', top: '14px', right: '16px',
        fontFamily: "'Space Mono', monospace", fontSize: '10px',
        color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em', zIndex: 10,
      }}>
        {String(idx + 1).padStart(2, '0')}
      </div>

      <div style={{ position: 'absolute', bottom: '12px', right: '12px', opacity: 0.12, zIndex: 10 }}>
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="0.8">
          <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
        </svg>
      </div>

      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '50px', background: 'linear-gradient(to top, rgba(7,4,15,0.9), transparent)', zIndex: 5 }} />
    </div>
  );
}

// ─── STACK CHIP ──────────────────────────────────────────────────────────
function StackChip({ label, accent }) {
  const [hov, setHov] = useState(false);
  
  return (
    <span
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        padding: '5px 14px',
        borderRadius: '8px',
        fontFamily: "'Space Mono', monospace",
        fontSize: '11px',
        fontWeight: 500,
        color: hov ? accent : 'rgba(255,255,255,0.6)',
        background: hov ? `${accent}20` : 'rgba(255,255,255,0.05)',
        border: `1px solid ${hov ? accent + '60' : 'rgba(255,255,255,0.08)'}`,
        transform: hov ? 'translateY(-2px) scale(1.05)' : 'translateY(0) scale(1)',
        boxShadow: hov ? `0 4px 12px ${accent}40` : 'none',
        transition: 'all 0.25s cubic-bezier(0.23,1,0.32,1)',
        cursor: 'default',
        letterSpacing: '0.03em',
      }}
    >
      {label}
    </span>
  );
}

// ─── ACTION BUTTON ────────────────────────────────────────────────────────
function ActionBtn({ href, accent, children }) {
  const [hov, setHov] = useState(false);
  
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: '36px', height: '36px', borderRadius: '8px',
        background: hov ? `${accent}15` : 'rgba(255,255,255,0.04)',
        border: `1px solid ${hov ? accent + '60' : 'rgba(255,255,255,0.1)'}`,
        color: hov ? accent : 'rgba(255,255,255,0.5)',
        textDecoration: 'none',
        transition: 'all 0.25s ease',
        cursor: 'pointer',
      }}
    >
      {children}
    </a>
  );
}

// ─── MAIN PROJECT CARD ────────────────────────────────────────────────────
function ProjectCard({ project, idx, visible }) {
  const cardRef = useRef(null);
  const [hov, setHov] = useState(false);
  const [mouseXY, setMouseXY] = useState({ x: 0, y: 0 });
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const colors = CARD_ACCENTS[idx % CARD_ACCENTS.length];

  const onMove = useCallback((e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    setTilt({ rx: ((y - centerY) / centerY) * -12, ry: ((x - centerX) / centerX) * 12 });
    setMouseXY({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
  }, []);

  const onLeave = useCallback(() => {
    setHov(false);
    setTilt({ rx: 0, ry: 0 });
  }, []);

  const animDelay = (idx % 6) * 0.08;

  return (
    <div
      ref={cardRef}
      onMouseMove={onMove}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={onLeave}
      style={{
        position: 'relative',
        borderRadius: '20px',
        overflow: 'hidden',
        background: 'linear-gradient(145deg, #0f0a1e, #080512)',
        border: `1px solid ${hov ? colors.accent + '60' : 'rgba(255,255,255,0.06)'}`,
        boxShadow: hov
          ? `0 0 0 1px ${colors.accent}30, 0 20px 50px rgba(0,0,0,0.6), 0 0 40px ${colors.glow}`
          : '0 4px 20px rgba(0,0,0,0.4)',
        transform: `perspective(1200px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) scale(${hov ? 1.02 : 1})`,
        transition: hov ? 'box-shadow 0.3s ease, border-color 0.3s ease' : 'all 0.4s cubic-bezier(0.23,1,0.32,1)',
        transformStyle: 'preserve-3d',
        display: 'flex',
        flexDirection: 'column',
        opacity: visible ? 1 : 0,
        animation: visible ? `projReveal 0.6s cubic-bezier(0.23,1,0.32,1) ${animDelay}s forwards` : 'none',
        cursor: 'pointer',
      }}
    >
      {hov && (
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
          background: `radial-gradient(circle at ${mouseXY.x}% ${mouseXY.y}%, ${colors.glow} 0%, transparent 60%)`,
        }} />
      )}

      <div style={{
        position: 'absolute', top: 0, left: hov ? 0 : '50%', right: hov ? 0 : '50%', height: '2px', zIndex: 20,
        background: `linear-gradient(90deg, transparent, ${colors.accent}, transparent)`,
        transition: 'left 0.4s ease, right 0.4s ease',
      }} />

      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '2px', zIndex: 20,
        background: `linear-gradient(90deg, transparent, ${colors.accent}, ${colors.accent}, transparent)`,
        transform: hov ? 'scaleX(1)' : 'scaleX(0)',
        transformOrigin: 'left',
        transition: 'transform 0.5s cubic-bezier(0.23,1,0.32,1)',
      }} />

      <CardHeader accent={colors.accent} top={colors.top} bot={colors.bot} idx={idx} />

      <div style={{ padding: '22px 24px 24px', display: 'flex', flexDirection: 'column', flex: 1, position: 'relative', zIndex: 2 }}>
        
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '14px' }}>
          {project.tags?.slice(0, 3).map(tag => {
            const tm = TAG_META[tag] || { color: '#aaa', bg: 'rgba(170,170,170,0.1)', border: 'rgba(170,170,170,0.3)' };
            return (
              <span key={tag} style={{
                padding: '3px 10px', borderRadius: '20px',
                fontFamily: "'Space Mono', monospace", fontSize: '9px', fontWeight: 600,
                letterSpacing: '0.08em', textTransform: 'uppercase',
                color: tm.color, background: tm.bg, border: `1px solid ${tm.border}`,
              }}>
                {tag}
              </span>
            );
          })}
        </div>

        <div style={{
          fontFamily: "'Space Mono', monospace", fontSize: '10px',
          color: colors.accent + 'cc', letterSpacing: '0.12em',
          textTransform: 'uppercase', marginBottom: '8px',
        }}>
          {project.subtitle || 'Featured Work'}
        </div>

        <h3 style={{
          fontFamily: "'Syne', 'Inter', system-ui, sans-serif",
          fontWeight: 700,
          fontSize: 'clamp(20px, 2.5vw, 24px)',
          lineHeight: 1.3,
          color: hov ? colors.accent : 'white',
          marginBottom: '14px',
          transition: 'color 0.3s ease',
        }}>
          {project.title}
        </h3>

        <p style={{
          fontSize: '14px', lineHeight: 1.65,
          color: 'rgba(255,255,255,0.5)',
          marginBottom: '20px', flex: 1,
        }}>
          {project.description}
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
          {project.stack?.slice(0, 5).map((s) => (
            <StackChip key={s} label={s} accent={colors.accent} />
          ))}
          {project.stack?.length > 5 && (
            <span style={{
              padding: '5px 12px', borderRadius: '8px',
              fontFamily: "'Space Mono', monospace", fontSize: '11px',
              color: 'rgba(255,255,255,0.35)', background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.06)',
            }}>
              +{project.stack.length - 5}
            </span>
          )}
        </div>

        <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)', marginBottom: '18px' }} />

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', gap: '14px' }}>
            {project.highlights?.slice(0, 2).map(h => (
              <div key={h} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: colors.accent + 'aa' }} />
                <span style={{ fontSize: '10px', fontFamily: "'Space Mono', monospace", color: 'rgba(255,255,255,0.4)', letterSpacing: '0.05em' }}>
                  {h}
                </span>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '8px' }}>
            {project.githubUrl && project.githubUrl !== '#' && (
              <ActionBtn href={project.githubUrl} accent={colors.accent}>
                <GithubIcon />
              </ActionBtn>
            )}
            {project.liveUrl && project.liveUrl !== '#' && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  padding: '7px 16px', borderRadius: '8px',
                  fontFamily: "'Space Mono', monospace", fontSize: '11px', fontWeight: 600,
                  color: 'white', textDecoration: 'none', letterSpacing: '0.05em',
                  background: `linear-gradient(135deg, ${colors.top}, ${colors.bot})`,
                  border: `1px solid ${colors.accent}60`,
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.filter = 'brightness(1.15)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.filter = 'brightness(1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Live Demo <ExternalIcon />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── FILTER BUTTON ────────────────────────────────────────────────────────
function FilterBtn({ tag, active, onClick }) {
  const [hov, setHov] = useState(false);
  
  return (
    <button
      onClick={() => onClick(tag)}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        padding: '10px 28px',
        borderRadius: '40px',
        fontFamily: "'Space Mono', monospace",
        fontSize: '12px',
        fontWeight: 600,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        cursor: 'pointer',
        border: 'none',
        background: active
          ? 'linear-gradient(135deg, #7c3aed, #6d28d9)'
          : hov ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.03)',
        color: active ? 'white' : hov ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.45)',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: active ? 'rgba(192,132,252,0.5)' : hov ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.06)',
        boxShadow: active ? '0 0 25px rgba(124,58,237,0.5)' : 'none',
        transform: active ? 'scale(1.05)' : hov ? 'scale(1.02)' : 'scale(1)',
        transition: 'all 0.25s cubic-bezier(0.23,1,0.32,1)',
      }}
    >
      {tag}
    </button>
  );
}

// ─── MAIN COMPONENT ────────────────────────────────────────────────────────
export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [visible, setVisible] = useState(false);
  const [gridVisible, setGridVisible] = useState(false);
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const obs1 = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs1.disconnect(); } },
      { threshold: 0.1 }
    );
    const obs2 = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setGridVisible(true); obs2.disconnect(); } },
      { threshold: 0.05 }
    );
    if (sectionRef.current) obs1.observe(sectionRef.current);
    if (gridRef.current) obs2.observe(gridRef.current);
    return () => { obs1.disconnect(); obs2.disconnect(); };
  }, []);

  const filtered = filter === 'All' ? projects : projects.filter(p => p.tags?.includes(filter));

  return (
    <section
      ref={sectionRef}
      id="projects"
      style={{
        position: 'relative',
        padding: '120px 0 110px',
        overflow: 'hidden',
        background: 'radial-gradient(ellipse at 30% 40%, #0a0618 0%, #04020c 100%)',
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Inter:opsz,wght@14..32,300;14..32,400;14..32,500;14..32,600;14..32,700;14..32,800&family=Space+Mono:wght@400;700&display=swap');

        @keyframes projReveal {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatOrb1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -20px) scale(1.05); }
        }
        @keyframes floatOrb2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-25px, 25px) scale(1.05); }
        }
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>

      {/* Background Orbs */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', top: '5%', left: '-5%', width: '500px', height: '500px',
          borderRadius: '50%', background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)',
          filter: 'blur(40px)', animation: 'floatOrb1 18s ease-in-out infinite',
        }} />
        <div style={{
          position: 'absolute', bottom: '10%', right: '-5%', width: '450px', height: '450px',
          borderRadius: '50%', background: 'radial-gradient(circle, rgba(45,212,191,0.08) 0%, transparent 70%)',
          filter: 'blur(40px)', animation: 'floatOrb2 22s ease-in-out infinite',
        }} />
        <div style={{
          position: 'absolute', top: '50%', left: '30%', width: '350px', height: '350px',
          borderRadius: '50%', background: 'radial-gradient(circle, rgba(168,85,247,0.06) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }} />
      </div>

      {/* Grid Pattern */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(rgba(192,132,252,0.06) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        zIndex: 0,
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 10 }}>

        {/* Header - UPDATED with Syne font and larger text */}
        <div style={{
          textAlign: 'center', marginBottom: '60px',
          opacity: visible ? 1 : 0,
          animation: visible ? 'projReveal 0.7s ease-out forwards' : 'none',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '20px' }}>
            <div style={{ width: '60px', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(192,132,252,0.5))' }} />
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '12px', color: '#c084fc', letterSpacing: '2px' }}>// 03. PORTFOLIO</span>
            <div style={{ width: '60px', height: '1px', background: 'linear-gradient(90deg, rgba(192,132,252,0.5), transparent)' }} />
          </div>

          {/* MAIN HEADING - Using Syne font exactly like "Rooted in logic, designed for impact" */}
          <h2 style={{
            fontFamily: "'Syne', 'Inter', system-ui, sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
            marginBottom: '20px',
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
          }}>
            <span style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'clamp(2rem,6vw,4rem)', margin:'0 0 14px', lineHeight:1.05, letterSpacing:'-0.03em' }}>Featured </span>
            <span className="gradient-text" style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'clamp(2rem,6vw,4rem)', margin:'0 0 14px', lineHeight:1.05, letterSpacing:'-0.03em' ,
              
             
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              backgroundSize: '200% 200%',
              animation: 'gradientShift 4s ease infinite',
              position: 'relative',
              display: 'inline-block',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'scale(1.02)';
              e.currentTarget.style.filter = 'brightness(1.1)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.filter = 'brightness(1)';
            }}>
              Projects
            </span>
          </h2>

          <p style={{ 
            color: 'rgba(255,255,255,0.45)', 
            maxWidth: '600px', 
            margin: '0 auto', 
            fontSize: '16px', 
            lineHeight: 1.7,
            fontWeight: 400,
          }}>
            Exploring the intersection of AI, Machine Learning, and modern web technologies — built for scale and impact.
          </p>
        </div>

        {/* Filters */}
        <div style={{
          display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px',
          marginBottom: '56px',
          opacity: visible ? 1 : 0,
          animation: visible ? 'projReveal 0.7s ease-out 0.1s forwards' : 'none',
        }}>
          {ALL_TAGS.map(tag => (
            <FilterBtn key={tag} tag={tag} active={filter === tag} onClick={setFilter} />
          ))}
        </div>

        {/* Projects Grid */}
        <div
          ref={gridRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
            gap: '24px',
            marginBottom: '64px',
          }}
        >
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} idx={i} visible={gridVisible} />
          ))}

          {filtered.length === 0 && (
            <div style={{
              gridColumn: '1/-1', textAlign: 'center', padding: '60px 20px',
              fontFamily: "'Space Mono', monospace", fontSize: '13px',
              color: 'rgba(255,255,255,0.25)', letterSpacing: '0.1em',
            }}>
              NO PROJECTS FOUND FOR "{filter}"
            </div>
          )}
        </div>

        {/* Footer CTA */}
        <div style={{
          textAlign: 'center',
          opacity: visible ? 1 : 0,
          animation: visible ? 'projReveal 0.7s ease-out 0.2s forwards' : 'none',
        }}>
          <a
            href="https://github.com/batman-hassaan"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              padding: '14px 32px', borderRadius: '40px',
              fontFamily: "'Space Mono', monospace", fontSize: '12px',
              fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase',
              textDecoration: 'none', color: 'rgba(255,255,255,0.7)',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.1)',
              transition: 'all 0.3s cubic-bezier(0.23,1,0.32,1)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(124,58,237,0.15)';
              e.currentTarget.style.borderColor = '#c084fc80';
              e.currentTarget.style.color = '#c084fc';
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 0 30px rgba(124,58,237,0.3)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
              e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <GithubIcon />
            View All Projects on GitHub
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}