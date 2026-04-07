// // // // import { useEffect, useRef } from 'react';
// // // // import { personalInfo, techMarquee } from '../data/portfolioData';

// // // // export default function Hero() {
// // // //   const canvasRef = useRef(null);

// // // //   useEffect(() => {
// // // //     const canvas = canvasRef.current;
// // // //     if (!canvas) return;
// // // //     const ctx = canvas.getContext('2d');
    
// // // //     const resizeCanvas = () => {
// // // //       canvas.width = window.innerWidth;
// // // //       canvas.height = window.innerHeight;
// // // //     };
// // // //     resizeCanvas();
// // // //     window.addEventListener('resize', resizeCanvas);

// // // //     // Responsive particle count
// // // //     const particleCount = window.innerWidth < 768 ? 80 : 150;
    
// // // //     const particles = Array.from({ length: particleCount }, () => ({
// // // //       x: Math.random() * canvas.width,
// // // //       y: Math.random() * canvas.height,
// // // //       r: Math.random() * 2 + 0.5,
// // // //       vx: (Math.random() - 0.5) * (window.innerWidth < 768 ? 0.4 : 0.8),
// // // //       vy: (Math.random() - 0.5) * (window.innerWidth < 768 ? 0.4 : 0.8),
// // // //       alpha: Math.random() * 0.4 + 0.1,
// // // //       pulse: Math.random() * Math.PI * 2,
// // // //     }));

// // // //     let animationId;
// // // //     let time = 0;
    
// // // //     const animate = () => {
// // // //       time += 0.02;
// // // //       ctx.clearRect(0, 0, canvas.width, canvas.height);
      
// // // //       particles.forEach(p => {
// // // //         p.x += p.vx;
// // // //         p.y += p.vy;
// // // //         if (p.x < 0) p.x = canvas.width;
// // // //         if (p.x > canvas.width) p.x = 0;
// // // //         if (p.y < 0) p.y = canvas.height;
// // // //         if (p.y > canvas.height) p.y = 0;
        
// // // //         const pulseFactor = 0.5 + Math.sin(time + p.pulse) * 0.3;
        
// // // //         ctx.beginPath();
// // // //         ctx.arc(p.x, p.y, p.r * (0.8 + pulseFactor * 0.4), 0, Math.PI * 2);
// // // //         ctx.fillStyle = `rgba(139, 92, 246, ${p.alpha * pulseFactor})`;
// // // //         ctx.fill();
// // // //       });
      
// // // //       particles.forEach((a, i) => {
// // // //         particles.slice(i + 1).forEach(b => {
// // // //           const dx = a.x - b.x;
// // // //           const dy = a.y - b.y;
// // // //           const dist = Math.hypot(dx, dy);
// // // //           const maxDist = window.innerWidth < 768 ? 100 : 150;
// // // //           if (dist < maxDist) {
// // // //             ctx.beginPath();
// // // //             ctx.moveTo(a.x, a.y);
// // // //             ctx.lineTo(b.x, b.y);
// // // //             ctx.strokeStyle = `rgba(139, 92, 246, ${0.1 * (1 - dist / maxDist) * (0.5 + Math.sin(time) * 0.2)})`;
// // // //             ctx.lineWidth = window.innerWidth < 768 ? 0.5 : 0.8;
// // // //             ctx.stroke();
// // // //           }
// // // //         });
// // // //       });
      
// // // //       animationId = requestAnimationFrame(animate);
// // // //     };
    
// // // //     animate();
// // // //     return () => {
// // // //       cancelAnimationFrame(animationId);
// // // //       window.removeEventListener('resize', resizeCanvas);
// // // //     };
// // // //   }, []);

// // // //   const handleScroll = (href) => {
// // // //     document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
// // // //   };

// // // //   return (
// // // //     <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
// // // //       <canvas ref={canvasRef} className="particle-canvas opacity-80" />
      
// // // //       {/* Animated Background Blobs */}
// // // //       <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
// // // //       <div className="absolute bottom-1/4 right-1/4 w-80 h-80 md:w-[500px] md:h-[500px] bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
// // // //       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[1000px] md:h-[1000px] rounded-full pointer-events-none"
// // // //         style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.2) 0%, rgba(139,92,246,0.05) 50%, transparent 80%)' }}
// // // //       />
      
// // // //       {/* Orbital Rings */}
// // // //       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full border border-purple-500/30 pointer-events-none">
// // // //         <div className="orbit-1 absolute top-1/2 left-1/2">
// // // //           <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-purple-500/80 -ml-1.5 -mt-1.5 md:-ml-2 md:-mt-2 shadow-lg shadow-purple-500/50 glow-animation" />
// // // //         </div>
// // // //       </div>
// // // //       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] md:w-[600px] md:h-[600px] rounded-full border border-purple-500/20 pointer-events-none">
// // // //         <div className="orbit-2 absolute top-1/2 left-1/2">
// // // //           <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-purple-400/60 -ml-1 -mt-1" />
// // // //         </div>
// // // //       </div>

// // // //       <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 pt-20 sm:pt-28 pb-16 sm:pb-20 text-center">
// // // //         <div className="label-pill mb-6 sm:mb-8 inline-flex animate-fade-in">
// // // //           <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse mr-2" />
// // // //           ✨ Available for opportunities · Karachi, Pakistan ✨
// // // //         </div>

// // // //         <h1 className="font-display font-bold leading-none tracking-tight mb-4 sm:mb-6">
// // // //           <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl block gradient-text animate-fade-in">
// // // //             Muhammad
// // // //           </span>
// // // //           <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl block text-white mt-2 sm:mt-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
// // // //             Hassan Shahid
// // // //           </span>
// // // //         </h1>

// // // //         <div className="flex items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
// // // //           <span className="h-px w-8 sm:w-12 md:w-16 bg-gradient-to-r from-transparent to-purple-500/60" />
// // // //           <p className="font-mono text-purple-300/90 text-xs sm:text-sm tracking-widest uppercase font-semibold">
// // // //             Data Scientist · ML Engineer · Full Stack Dev
// // // //           </p>
// // // //           <span className="h-px w-8 sm:w-12 md:w-16 bg-gradient-to-l from-transparent to-purple-500/60" />
// // // //         </div>

// // // //         <p className="text-white/60 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-12 px-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
// // // //           {personalInfo.subtitle}
// // // //         </p>

// // // //         <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 animate-fade-in" style={{ animationDelay: '0.8s' }}>
// // // //           <button onClick={() => handleScroll('#projects')} className="btn-primary w-full sm:w-auto group">
// // // //             <span>✨ View My Work</span>
// // // //             <svg width="16" height="16" sm:width="18" sm:height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-1 transition-transform">
// // // //               <path d="M5 12h14M12 5l7 7-7 7" />
// // // //             </svg>
// // // //           </button>
// // // //           <button onClick={() => handleScroll('#contact')} className="btn-outline w-full sm:w-auto group">
// // // //             <span>💬 Get In Touch</span>
// // // //             <svg width="16" height="16" sm:width="18" sm:height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-1 transition-transform">
// // // //               <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
// // // //             </svg>
// // // //           </button>
// // // //           <a href="/resume.pdf" download className="btn-outline w-full sm:w-auto group">
// // // //             <span>📄 Download Resume</span>
// // // //             <svg width="16" height="16" sm:width="18" sm:height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-y-1 transition-transform">
// // // //               <path d="M12 3v12m0 0-3-3m3 3 3-3M5 21h14" />
// // // //             </svg>
// // // //           </a>
// // // //         </div>

// // // //         <div className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-5 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '1s' }}>
// // // //           {[
// // // //             { num: "2+", label: "Years Experience", icon: "🚀" },
// // // //             { num: "10+", label: "Projects Completed", icon: "💻" },
// // // //             { num: "8+", label: "Certifications", icon: "🏆" },
// // // //             { num: "98%", label: "Client Satisfaction", icon: "⭐" },
// // // //           ].map(s => (
// // // //             <div key={s.label} className="glow-card p-3 sm:p-4 md:p-5 text-center group hover:scale-105 transition-transform">
// // // //               <div className="text-2xl sm:text-3xl mb-1 sm:mb-2">{s.icon}</div>
// // // //               <div className="font-display font-bold text-2xl sm:text-3xl gradient-text">{s.num}</div>
// // // //               <div className="text-white/50 text-[10px] sm:text-xs mt-1 uppercase tracking-wider font-mono">{s.label}</div>
// // // //             </div>
// // // //           ))}
// // // //         </div>
// // // //       </div>

// // // //       <div className="relative z-10 overflow-hidden pb-6 sm:pb-8 pointer-events-none select-none">
// // // //         <div className="flex">
// // // //           <div className="marquee-track">
// // // //             {[...techMarquee, ...techMarquee].map((tech, i) => (
// // // //               <span key={i} className="flex items-center gap-2 sm:gap-4 px-3 sm:px-6">
// // // //                 <span className="text-white/50 text-xs sm:text-sm font-mono hover:text-purple-400 transition-colors cursor-pointer whitespace-nowrap">{tech}</span>
// // // //                 <span className="w-0.5 h-0.5 rounded-full bg-purple-500/40" />
// // // //               </span>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 sm:gap-2 animate-bounce">
// // // //         <span className="text-white/30 text-[10px] sm:text-xs font-mono tracking-widest">scroll down</span>
// // // //         <div className="w-px h-8 sm:h-12 bg-gradient-to-b from-purple-500/60 to-transparent" />
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // }


// // // // import { useEffect, useRef, useState } from 'react';
// // // // import { personalInfo, techMarquee } from '../data/portfolioData';

// // // // export default function Hero() {
// // // //   const canvasRef = useRef(null);
// // // //   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

// // // //   useEffect(() => {
// // // //     const canvas = canvasRef.current;
// // // //     if (!canvas) return;
// // // //     const ctx = canvas.getContext('2d');
    
// // // //     const resizeCanvas = () => {
// // // //       canvas.width = window.innerWidth;
// // // //       canvas.height = window.innerHeight;
// // // //     };
// // // //     resizeCanvas();
// // // //     window.addEventListener('resize', resizeCanvas);

// // // //     // Mouse interaction state
// // // //     const mouse = { x: null, y: null, radius: 150 };
    
// // // //     const handleMouseMove = (e) => {
// // // //       mouse.x = e.x;
// // // //       mouse.y = e.y;
// // // //       setMousePos({ x: e.clientX, y: e.clientY }); // For the global glow
// // // //     };
    
// // // //     window.addEventListener('mousemove', handleMouseMove);

// // // //     // Responsive particle count
// // // //     const particleCount = window.innerWidth < 768 ? 60 : 100;
    
// // // //     const particles = Array.from({ length: particleCount }, () => ({
// // // //       x: Math.random() * canvas.width,
// // // //       y: Math.random() * canvas.height,
// // // //       r: Math.random() * 2 + 1,
// // // //       vx: (Math.random() - 0.5) * 0.5,
// // // //       vy: (Math.random() - 0.5) * 0.5,
// // // //       alpha: Math.random() * 0.5 + 0.2,
// // // //       pulse: Math.random() * Math.PI * 2,
// // // //     }));

// // // //     let animationId;
// // // //     let time = 0;
    
// // // //     const animate = () => {
// // // //       time += 0.01;
// // // //       ctx.clearRect(0, 0, canvas.width, canvas.height);
      
// // // //       particles.forEach(p => {
// // // //         // Mouse Interaction - Repel
// // // //         const dx = mouse.x - p.x;
// // // //         const dy = mouse.y - p.y;
// // // //         const dist = Math.hypot(dx, dy);
        
// // // //         if (dist < mouse.radius) {
// // // //           const forceDirectionX = dx / dist;
// // // //           const forceDirectionY = dy / dist;
// // // //           const maxDist = mouse.radius;
// // // //           const force = (maxDist - dist) / maxDist;
// // // //           const directionX = forceDirectionX * force * 2;
// // // //           const directionY = forceDirectionY * force * 2;
          
// // // //           p.x -= directionX;
// // // //           p.y -= directionY;
// // // //         }

// // // //         p.x += p.vx;
// // // //         p.y += p.vy;
        
// // // //         // Wrap around edges
// // // //         if (p.x < -10) p.x = canvas.width + 10;
// // // //         if (p.x > canvas.width + 10) p.x = -10;
// // // //         if (p.y < -10) p.y = canvas.height + 10;
// // // //         if (p.y > canvas.height + 10) p.y = -10;
        
// // // //         // Pulse size
// // // //         const pulseFactor = 0.5 + Math.sin(time * 2 + p.pulse) * 0.3;
        
// // // //         // Draw particle with glow
// // // //         ctx.beginPath();
// // // //         ctx.arc(p.x, p.y, p.r * pulseFactor, 0, Math.PI * 2);
// // // //         ctx.fillStyle = `rgba(167, 139, 250, ${p.alpha})`; // Purple-400
// // // //         ctx.fill();
        
// // // //         // Glow effect
// // // //         ctx.beginPath();
// // // //         ctx.arc(p.x, p.y, p.r * pulseFactor * 2, 0, Math.PI * 2);
// // // //         ctx.fillStyle = `rgba(139, 92, 246, ${p.alpha * 0.2})`; // Purple-500
// // // //         ctx.fill();
// // // //       });
      
// // // //       // Draw connections
// // // //       particles.forEach((a, i) => {
// // // //         particles.slice(i + 1).forEach(b => {
// // // //           const dx = a.x - b.x;
// // // //           const dy = a.y - b.y;
// // // //           const dist = Math.hypot(dx, dy);
// // // //           const maxDist = 120;
          
// // // //           if (dist < maxDist) {
// // // //             ctx.beginPath();
// // // //             ctx.moveTo(a.x, a.y);
// // // //             ctx.lineTo(b.x, b.y);
// // // //             ctx.strokeStyle = `rgba(167, 139, 250, ${0.15 * (1 - dist / maxDist)})`;
// // // //             ctx.lineWidth = 0.5;
// // // //             ctx.stroke();
// // // //           }
// // // //         });
        
// // // //         // Connect to mouse
// // // //         if (mouse.x && mouse.y) {
// // // //           const dx = a.x - mouse.x;
// // // //           const dy = a.y - mouse.y;
// // // //           const dist = Math.hypot(dx, dy);
// // // //           if (dist < 200) {
// // // //              ctx.beginPath();
// // // //              ctx.moveTo(a.x, a.y);
// // // //              ctx.lineTo(mouse.x, mouse.y);
// // // //              ctx.strokeStyle = `rgba(167, 139, 250, ${0.4 * (1 - dist / 200)})`;
// // // //              ctx.lineWidth = 1;
// // // //              ctx.stroke();
// // // //           }
// // // //         }
// // // //       });
      
// // // //       animationId = requestAnimationFrame(animate);
// // // //     };
    
// // // //     animate();
    
// // // //     return () => {
// // // //       cancelAnimationFrame(animationId);
// // // //       window.removeEventListener('resize', resizeCanvas);
// // // //       window.removeEventListener('mousemove', handleMouseMove);
// // // //     };
// // // //   }, []);

// // // //   const handleScroll = (href) => {
// // // //     document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
// // // //   };

// // // //   return (
// // // //     <section 
// // // //       className="relative min-h-screen flex flex-col justify-center overflow-hidden"
// // // //       onMouseMove={(e) => setMousePos({ x: e.clientX, y: e.clientY })}
// // // //     >
// // // //       <canvas ref={canvasRef} className="particle-canvas opacity-70" />
      
// // // //       {/* Global Mouse Glow Effect */}
// // // //       <div 
// // // //         className="pointer-events-none fixed z-0 h-[600px] w-[600px] rounded-full transition-transform duration-200 ease-out"
// // // //         style={{
// // // //           background: 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)',
// // // //           transform: `translate(${mousePos.x - 300}px, ${mousePos.y - 300}px)`,
// // // //         }}
// // // //       />

// // // //       {/* Decorative Floating Code Snippet */}
// // // //       <div className="hidden lg:block absolute top-32 right-16 text-xs font-mono text-purple-500/20 rotate-6 border border-purple-500/10 p-4 rounded-lg bg-black/20 backdrop-blur-sm animate-float pointer-events-none select-none">
// // // //         &lt;Hero&gt;<br />
// // // //         &nbsp;&nbsp;&lt;status="available" /&gt;<br />
// // // //         &lt;/Hero&gt;
// // // //       </div>

// // // //       {/* Animated Background Blobs - Gradient Animation */}
// // // //       <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-purple-600/30 rounded-full blur-3xl animate-blob" />
// // // //       <div className="absolute bottom-1/4 right-1/4 w-80 h-80 md:w-[500px] md:h-[500px] bg-indigo-600/20 rounded-full blur-3xl animate-blob animation-delay-2000" />

// // // //       <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 pt-20 sm:pt-28 pb-16 sm:pb-20 text-center">
// // // //         <div className="label-pill mb-6 sm:mb-8 inline-flex animate-fade-in">
// // // //           <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse mr-2 shadow-[0_0_10px_rgba(74,222,128,0.7)]" />
// // // //           Available for opportunities
// // // //         </div>

// // // //         <h1 className="font-display font-bold leading-tight tracking-tight mb-4 sm:mb-6">
// // // //           <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl block text-white animate-fade-in glitch-wrapper">
// // // //             <span className="glitch" data-text="Muhammad">Muhammad</span>
// // // //           </span>
// // // //           <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl block gradient-text mt-2 sm:mt-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
// // // //             Hassan Shahid
// // // //           </span>
// // // //         </h1>

// // // //         <div className="flex items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
// // // //           <span className="h-px w-8 sm:w-12 md:w-16 bg-gradient-to-r from-transparent to-purple-500/60" />
// // // //           <p className="font-mono text-purple-300/90 text-xs sm:text-sm tracking-widest uppercase font-semibold">
// // // //             Data Scientist · ML Engineer · Full Stack Dev
// // // //           </p>
// // // //           <span className="h-px w-8 sm:w-12 md:w-16 bg-gradient-to-l from-transparent to-purple-500/60" />
// // // //         </div>

// // // //         <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-12 px-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
// // // //           {personalInfo.subtitle}
// // // //         </p>

// // // //         <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 animate-fade-in" style={{ animationDelay: '0.8s' }}>
// // // //           <button onClick={() => handleScroll('#projects')} className="btn-primary w-full sm:w-auto group">
// // // //             <span>View My Work</span>
// // // //             <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-1 transition-transform">
// // // //               <path d="M5 12h14M12 5l7 7-7 7" />
// // // //             </svg>
// // // //           </button>
// // // //           <button onClick={() => handleScroll('#contact')} className="btn-outline w-full sm:w-auto group">
// // // //             <span>Get In Touch</span>
// // // //             <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:rotate-12 transition-transform">
// // // //               <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
// // // //             </svg>
// // // //           </button>
// // // //         </div>

// // // //         {/* Stats Grid with Spotlight Effect */}
// // // //         <div className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '1s' }}>
// // // //           {[
// // // //             { num: "2+", label: "Years Exp", icon: "🚀" },
// // // //             { num: "10+", label: "Projects", icon: "💻" },
// // // //             { num: "8+", label: "Certs", icon: "🏆" },
// // // //             { num: "100%", label: "Effort", icon: "⭐" },
// // // //           ].map((s, i) => (
// // // //             <div 
// // // //               key={s.label} 
// // // //               className="spotlight-card p-4 rounded-xl border border-white/5 bg-white/[0.02] text-center transition-all duration-300 hover:border-purple-500/30"
// // // //               style={{ animationDelay: `${1.2 + i * 0.1}s` }}
// // // //             >
// // // //               <div className="text-2xl mb-2 opacity-80">{s.icon}</div>
// // // //               <div className="font-display font-bold text-2xl sm:text-3xl text-white">{s.num}</div>
// // // //               <div className="text-gray-500 text-xs mt-1 uppercase tracking-wider font-mono">{s.label}</div>
// // // //             </div>
// // // //           ))}
// // // //         </div>
// // // //       </div>

// // // //       {/* Tech Marquee */}
// // // //       <div className="relative z-10 overflow-hidden pb-6 sm:pb-8 border-t border-white/5 pt-6 mt-10">
// // // //         <div className="flex mask-gradient">
// // // //           <div className="marquee-track hover:pause-animation">
// // // //             {[...techMarquee, ...techMarquee].map((tech, i) => (
// // // //               <span key={i} className="flex items-center gap-4 px-6 text-gray-400 text-sm font-mono hover:text-purple-400 transition-colors cursor-pointer whitespace-nowrap">
// // // //                 {tech}
// // // //               </span>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 sm:gap-2 animate-bounce-slow">
// // // //         <span className="text-gray-600 text-[10px] sm:text-xs font-mono tracking-widest uppercase">Scroll</span>
// // // //         <svg width="16" height="24" viewBox="0 0 16 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-purple-500/50">
// // // //             <rect x="1" y="1" width="14" height="22" rx="7" />
// // // //             <circle cx="8" cy="8" r="2" fill="currentColor" className="animate-scroll-dot" />
// // // //         </svg>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // }


// // // // import { useEffect, useRef, useState } from 'react';
// // // // import { personalInfo, techMarquee } from '../data/portfolioData';

// // // // export default function Hero() {
// // // //   const canvasRef = useRef(null);
// // // //   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
// // // //   const [isHovering, setIsHovering] = useState(false);

// // // //   useEffect(() => {
// // // //     const canvas = canvasRef.current;
// // // //     if (!canvas) return;
// // // //     const ctx = canvas.getContext('2d');
    
// // // //     const resizeCanvas = () => {
// // // //       canvas.width = window.innerWidth;
// // // //       canvas.height = window.innerHeight;
// // // //     };
// // // //     resizeCanvas();
// // // //     window.addEventListener('resize', resizeCanvas);

// // // //     const mouse = { x: null, y: null, radius: 200 };
    
// // // //     const handleMouseMove = (e) => {
// // // //       mouse.x = e.x;
// // // //       mouse.y = e.y;
// // // //       setMousePos({ x: e.clientX, y: e.clientY });
// // // //     };
    
// // // //     window.addEventListener('mousemove', handleMouseMove);

// // // //     // Enhanced particle system
// // // //     const particleCount = window.innerWidth < 768 ? 80 : 150;
    
// // // //     const particles = Array.from({ length: particleCount }, () => ({
// // // //       x: Math.random() * canvas.width,
// // // //       y: Math.random() * canvas.height,
// // // //       r: Math.random() * 3 + 1,
// // // //       vx: (Math.random() - 0.5) * 0.8,
// // // //       vy: (Math.random() - 0.5) * 0.8,
// // // //       alpha: Math.random() * 0.6 + 0.2,
// // // //       pulse: Math.random() * Math.PI * 2,
// // // //       color: Math.random() > 0.7 ? '#a78bfa' : '#8b5cf6',
// // // //     }));

// // // //     let animationId;
// // // //     let time = 0;
    
// // // //     const animate = () => {
// // // //       time += 0.015;
// // // //       ctx.clearRect(0, 0, canvas.width, canvas.height);
      
// // // //       particles.forEach(p => {
// // // //         // Mouse repulsion with smooth falloff
// // // //         if (mouse.x && mouse.y) {
// // // //           const dx = mouse.x - p.x;
// // // //           const dy = mouse.y - p.y;
// // // //           const dist = Math.hypot(dx, dy);
          
// // // //           if (dist < mouse.radius) {
// // // //             const forceDirectionX = dx / dist;
// // // //             const forceDirectionY = dy / dist;
// // // //             const force = (mouse.radius - dist) / mouse.radius;
// // // //             const strength = force * 3;
            
// // // //             p.x -= forceDirectionX * strength;
// // // //             p.y -= forceDirectionY * strength;
// // // //           }
// // // //         }

// // // //         p.x += p.vx;
// // // //         p.y += p.vy;
        
// // // //         // Wrap with padding
// // // //         if (p.x < -50) p.x = canvas.width + 50;
// // // //         if (p.x > canvas.width + 50) p.x = -50;
// // // //         if (p.y < -50) p.y = canvas.height + 50;
// // // //         if (p.y > canvas.height + 50) p.y = -50;
        
// // // //         // Dynamic pulse based on mouse distance
// // // //         let pulseFactor = 0.5 + Math.sin(time * 2 + p.pulse) * 0.3;
// // // //         if (mouse.x && mouse.y) {
// // // //           const distToMouse = Math.hypot(p.x - mouse.x, p.y - mouse.y);
// // // //           if (distToMouse < 100) {
// // // //             pulseFactor += (1 - distToMouse / 100) * 0.8;
// // // //           }
// // // //         }
        
// // // //         // Draw particle with glow
// // // //         ctx.beginPath();
// // // //         ctx.arc(p.x, p.y, p.r * (0.8 + pulseFactor * 0.4), 0, Math.PI * 2);
// // // //         ctx.fillStyle = p.color;
// // // //         ctx.fill();
        
// // // //         // Outer glow
// // // //         ctx.beginPath();
// // // //         ctx.arc(p.x, p.y, p.r * pulseFactor * 2.5, 0, Math.PI * 2);
// // // //         ctx.fillStyle = `rgba(139, 92, 246, ${p.alpha * 0.15})`;
// // // //         ctx.fill();
// // // //       });
      
// // // //       // Draw connections with mouse interactions
// // // //       particles.forEach((a, i) => {
// // // //         particles.slice(i + 1).forEach(b => {
// // // //           const dx = a.x - b.x;
// // // //           const dy = a.y - b.y;
// // // //           const dist = Math.hypot(dx, dy);
// // // //           const maxDist = 150;
          
// // // //           if (dist < maxDist) {
// // // //             ctx.beginPath();
// // // //             ctx.moveTo(a.x, a.y);
// // // //             ctx.lineTo(b.x, b.y);
// // // //             const opacity = 0.2 * (1 - dist / maxDist);
// // // //             ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`;
// // // //             ctx.lineWidth = 0.8;
// // // //             ctx.stroke();
// // // //           }
// // // //         });
        
// // // //         // Connect to mouse with glowing lines
// // // //         if (mouse.x && mouse.y) {
// // // //           const dx = a.x - mouse.x;
// // // //           const dy = a.y - mouse.y;
// // // //           const dist = Math.hypot(dx, dy);
// // // //           if (dist < 250) {
// // // //             ctx.beginPath();
// // // //             ctx.moveTo(a.x, a.y);
// // // //             ctx.lineTo(mouse.x, mouse.y);
// // // //             const opacity = 0.3 * (1 - dist / 250);
// // // //             ctx.strokeStyle = `rgba(167, 139, 250, ${opacity})`;
// // // //             ctx.lineWidth = 1.2;
// // // //             ctx.stroke();
// // // //           }
// // // //         }
// // // //       });
      
// // // //       animationId = requestAnimationFrame(animate);
// // // //     };
    
// // // //     animate();
    
// // // //     return () => {
// // // //       cancelAnimationFrame(animationId);
// // // //       window.removeEventListener('resize', resizeCanvas);
// // // //       window.removeEventListener('mousemove', handleMouseMove);
// // // //     };
// // // //   }, []);

// // // //   const handleScroll = (href) => {
// // // //     document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
// // // //   };

// // // //   return (
// // // //     <section 
// // // //       className="relative min-h-screen flex flex-col justify-center overflow-hidden"
// // // //       onMouseMove={(e) => setMousePos({ x: e.clientX, y: e.clientY })}
// // // //     >
// // // //       <canvas ref={canvasRef} className="particle-canvas opacity-80" />
      
// // // //       {/* Premium Mouse Glow Effect */}
// // // //       <div 
// // // //         className="pointer-events-none fixed z-0 transition-transform duration-300 ease-out"
// // // //         style={{
// // // //           background: 'radial-gradient(circle, rgba(139,92,246,0.25) 0%, rgba(139,92,246,0.1) 30%, transparent 70%)',
// // // //           width: '800px',
// // // //           height: '800px',
// // // //           borderRadius: '50%',
// // // //           transform: `translate(${mousePos.x - 400}px, ${mousePos.y - 400}px)`,
// // // //           filter: 'blur(40px)',
// // // //         }}
// // // //       />
      
// // // //       {/* Animated Gradient Orbs */}
// // // //       <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] animate-pulse-slow" />
// // // //       <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] animate-pulse-slow animation-delay-2000" />
// // // //       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[100px] animate-pulse-slow" />
      
// // // //       {/* Floating Code Snippets */}
// // // //       <div className="hidden xl:block absolute top-24 right-12 text-xs font-mono text-purple-400/30 rotate-6 border border-purple-500/10 p-4 rounded-xl bg-black/30 backdrop-blur-sm animate-float pointer-events-none select-none">
// // // //         <div className="space-y-1">
// // // //           <div className="text-purple-300/50">{">"} import torch</div>
// // // //           <div className="text-purple-300/50">{">"} model = GPT()</div>
// // // //           <div className="text-purple-300/40 animate-pulse">{">"} training...</div>
// // // //         </div>
// // // //       </div>
      
// // // //       <div className="hidden xl:block absolute bottom-32 left-12 text-xs font-mono text-purple-400/30 -rotate-3 border border-purple-500/10 p-4 rounded-xl bg-black/30 backdrop-blur-sm animate-float-delay pointer-events-none select-none">
// // // //         <div className="space-y-1">
// // // //           <div className="text-purple-300/50">{">"} accuracy: 0.98</div>
// // // //           <div className="text-purple-300/50">{">"} f1-score: 0.96</div>
// // // //           <div className="text-green-400/40">✓ model saved</div>
// // // //         </div>
// // // //       </div>

// // // //       <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 pt-20 sm:pt-28 pb-16 sm:pb-20 text-center">
// // // //         {/* Premium Status Badge */}
// // // //         <div className="mb-6 sm:mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm animate-fade-in">
// // // //           <span className="relative flex h-2 w-2">
// // // //             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
// // // //             <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
// // // //           </span>
// // // //           <span className="text-xs font-mono text-purple-300">Available for opportunities</span>
// // // //           <span className="text-purple-400/50 text-xs">✨</span>
// // // //         </div>

// // // //         {/* Premium Glitch Text */}
// // // //         <h1 className="font-display font-bold leading-tight tracking-tight mb-4 sm:mb-6">
// // // //           <div className="relative inline-block">
// // // //             <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl block text-white animate-fade-in relative glitch-text">
// // // //               Muhammad
// // // //             </span>
// // // //             <div className="absolute inset-0 text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-purple-500/30 blur-sm -z-10">
// // // //               Muhammad
// // // //             </div>
// // // //           </div>
// // // //           <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl block mt-2 sm:mt-4 relative">
// // // //             <span className="gradient-text bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-300% animate-gradient">
// // // //               Hassan Shahid
// // // //             </span>
// // // //           </span>
// // // //         </h1>

// // // //         {/* Role Badge with Icons */}
// // // //         <div className="flex items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
// // // //           <span className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-purple-500/60" />
// // // //           <div className="flex items-center gap-2 flex-wrap justify-center">
// // // //             <span className="text-xs sm:text-sm font-mono text-purple-300/90">🤖 Data Scientist</span>
// // // //             <span className="w-1 h-1 rounded-full bg-purple-500/40" />
// // // //             <span className="text-xs sm:text-sm font-mono text-purple-300/90">⚡ ML Engineer</span>
// // // //             <span className="w-1 h-1 rounded-full bg-purple-500/40" />
// // // //             <span className="text-xs sm:text-sm font-mono text-purple-300/90">💻 Full Stack Dev</span>
// // // //           </div>
// // // //           <span className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-purple-500/60" />
// // // //         </div>

// // // //         {/* Enhanced Subtitle with Typing Effect */}
// // // //         <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-12 px-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
// // // //           {personalInfo.subtitle}
// // // //         </p>

// // // //         {/* Premium CTA Buttons */}
// // // //         <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 animate-fade-in" style={{ animationDelay: '0.6s' }}>
// // // //           <button 
// // // //             onClick={() => handleScroll('#projects')} 
// // // //             className="group relative px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-purple-500 text-white font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30"
// // // //             onMouseEnter={() => setIsHovering(true)}
// // // //             onMouseLeave={() => setIsHovering(false)}
// // // //           >
// // // //             <span className="relative z-10 flex items-center gap-2">
// // // //               View My Work
// // // //               <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-1 transition-transform">
// // // //                 <path d="M5 12h14M12 5l7 7-7 7" />
// // // //               </svg>
// // // //             </span>
// // // //             <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
// // // //           </button>
          
// // // //           <button 
// // // //             onClick={() => handleScroll('#contact')} 
// // // //             className="group px-8 py-3.5 rounded-full border-2 border-purple-500/30 text-white font-semibold hover:border-purple-500/80 hover:bg-purple-500/10 transition-all duration-300 hover:scale-105"
// // // //           >
// // // //             <span className="flex items-center gap-2">
// // // //               Get In Touch
// // // //               <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:rotate-12 transition-transform">
// // // //                 <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
// // // //               </svg>
// // // //             </span>
// // // //           </button>
          
// // // //           <a 
// // // //             href="/resume.pdf" 
// // // //             download 
// // // //             className="group px-8 py-3.5 rounded-full border border-white/20 text-white/80 font-semibold hover:border-purple-500/50 hover:text-white transition-all duration-300 hover:scale-105"
// // // //           >
// // // //             <span className="flex items-center gap-2">
// // // //               📄 Resume
// // // //               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-y-0.5 transition-transform">
// // // //                 <path d="M12 3v12m0 0-3-3m3 3 3-3M5 21h14" />
// // // //               </svg>
// // // //             </span>
// // // //           </a>
// // // //         </div>

// // // //         {/* Premium Stats Cards */}
// // // //         <div className="mt-16 sm:mt-20 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
// // // //           {[
// // // //             { num: "2+", label: "Years Experience", icon: "🚀", desc: "in Data Science" },
// // // //             { num: "10+", label: "Projects", icon: "💻", desc: "Production Ready" },
// // // //             { num: "8+", label: "Certifications", icon: "🏆", desc: "Verified" },
// // // //             { num: "100%", label: "Commitment", icon: "⭐", desc: "To Excellence" },
// // // //           ].map((s, i) => (
// // // //             <div 
// // // //               key={s.label} 
// // // //               className="group relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.02] to-purple-500/[0.02] p-5 text-center transition-all duration-500 hover:border-purple-500/30 hover:scale-105"
// // // //               style={{ animationDelay: `${0.8 + i * 0.1}s` }}
// // // //             >
// // // //               <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-purple-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
// // // //               <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">{s.icon}</div>
// // // //               <div className="font-display font-bold text-3xl sm:text-4xl bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
// // // //                 {s.num}
// // // //               </div>
// // // //               <div className="text-white/60 text-xs mt-1 font-semibold">{s.label}</div>
// // // //               <div className="text-purple-400/50 text-[10px] mt-0.5 font-mono">{s.desc}</div>
// // // //             </div>
// // // //           ))}
// // // //         </div>
// // // //       </div>

// // // //       {/* Premium Tech Marquee */}
// // // //       <div className="relative z-10 overflow-hidden pb-6 sm:pb-8 mt-8">
// // // //         <div className="relative">
// // // //           <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#05020a] to-transparent z-10" />
// // // //           <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#05020a] to-transparent z-10" />
// // // //           <div className="flex overflow-hidden">
// // // //             <div className="marquee-track flex gap-8 sm:gap-12 animate-marquee">
// // // //               {[...techMarquee, ...techMarquee, ...techMarquee].map((tech, i) => (
// // // //                 <span 
// // // //                   key={i} 
// // // //                   className="flex items-center gap-3 px-4 text-gray-500 text-sm font-mono hover:text-purple-400 transition-all duration-300 whitespace-nowrap hover:scale-110 cursor-pointer"
// // // //                 >
// // // //                   <span className="w-1.5 h-1.5 rounded-full bg-purple-500/40 group-hover:bg-purple-500"></span>
// // // //                   {tech}
// // // //                 </span>
// // // //               ))}
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       {/* Premium Scroll Indicator */}
// // // //       <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-slow z-10">
// // // //         <span className="text-gray-600 text-[10px] sm:text-xs font-mono tracking-[0.2em] uppercase">Scroll to explore</span>
// // // //         <div className="w-6 h-10 rounded-full border-2 border-purple-500/30 flex justify-center">
// // // //           <div className="w-1 h-2 bg-purple-500 rounded-full mt-2 animate-scroll-dot" />
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // }


// // // // import { useEffect, useRef, useState } from 'react';
// // // // import { personalInfo, techMarquee } from '../data/portfolioData';

// // // // export default function Hero() {
// // // //   const canvasRef = useRef(null);
// // // //   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
// // // //   const [isHovering, setIsHovering] = useState(false);
// // // //   const [scrollOpacity, setScrollOpacity] = useState(0);

// // // //   useEffect(() => {
// // // //     const canvas = canvasRef.current;
// // // //     if (!canvas) return;
// // // //     const ctx = canvas.getContext('2d');
    
// // // //     const resizeCanvas = () => {
// // // //       canvas.width = window.innerWidth;
// // // //       canvas.height = window.innerHeight;
// // // //     };
// // // //     resizeCanvas();
// // // //     window.addEventListener('resize', resizeCanvas);

// // // //     // Handle scroll opacity
// // // //     const handleScroll = () => {
// // // //       const scrollY = window.scrollY;
// // // //       const maxScroll = window.innerHeight;
// // // //       const opacity = Math.min(scrollY / maxScroll, 0.7);
// // // //       setScrollOpacity(opacity);
// // // //     };
    
// // // //     window.addEventListener('scroll', handleScroll);
// // // //     handleScroll();

// // // //     const mouse = { x: null, y: null, radius: 200 };
    
// // // //     const handleMouseMove = (e) => {
// // // //       mouse.x = e.x;
// // // //       mouse.y = e.y;
// // // //       setMousePos({ x: e.clientX, y: e.clientY });
// // // //     };
    
// // // //     window.addEventListener('mousemove', handleMouseMove);

// // // //     // Enhanced particle system
// // // //     const particleCount = window.innerWidth < 768 ? 80 : 150;
    
// // // //     const particles = Array.from({ length: particleCount }, () => ({
// // // //       x: Math.random() * canvas.width,
// // // //       y: Math.random() * canvas.height,
// // // //       r: Math.random() * 3 + 1,
// // // //       vx: (Math.random() - 0.5) * 0.8,
// // // //       vy: (Math.random() - 0.5) * 0.8,
// // // //       alpha: Math.random() * 0.6 + 0.2,
// // // //       pulse: Math.random() * Math.PI * 2,
// // // //       color: Math.random() > 0.7 ? '#a78bfa' : '#8b5cf6',
// // // //     }));

// // // //     let animationId;
// // // //     let time = 0;
    
// // // //     const animate = () => {
// // // //       time += 0.015;
// // // //       ctx.clearRect(0, 0, canvas.width, canvas.height);
      
// // // //       particles.forEach(p => {
// // // //         // Mouse repulsion with smooth falloff
// // // //         if (mouse.x && mouse.y) {
// // // //           const dx = mouse.x - p.x;
// // // //           const dy = mouse.y - p.y;
// // // //           const dist = Math.hypot(dx, dy);
          
// // // //           if (dist < mouse.radius) {
// // // //             const forceDirectionX = dx / dist;
// // // //             const forceDirectionY = dy / dist;
// // // //             const force = (mouse.radius - dist) / mouse.radius;
// // // //             const strength = force * 3;
            
// // // //             p.x -= forceDirectionX * strength;
// // // //             p.y -= forceDirectionY * strength;
// // // //           }
// // // //         }

// // // //         p.x += p.vx;
// // // //         p.y += p.vy;
        
// // // //         // Wrap with padding
// // // //         if (p.x < -50) p.x = canvas.width + 50;
// // // //         if (p.x > canvas.width + 50) p.x = -50;
// // // //         if (p.y < -50) p.y = canvas.height + 50;
// // // //         if (p.y > canvas.height + 50) p.y = -50;
        
// // // //         // Dynamic pulse based on mouse distance
// // // //         let pulseFactor = 0.5 + Math.sin(time * 2 + p.pulse) * 0.3;
// // // //         if (mouse.x && mouse.y) {
// // // //           const distToMouse = Math.hypot(p.x - mouse.x, p.y - mouse.y);
// // // //           if (distToMouse < 100) {
// // // //             pulseFactor += (1 - distToMouse / 100) * 0.8;
// // // //           }
// // // //         }
        
// // // //         // Draw particle with glow
// // // //         ctx.beginPath();
// // // //         ctx.arc(p.x, p.y, p.r * (0.8 + pulseFactor * 0.4), 0, Math.PI * 2);
// // // //         ctx.fillStyle = p.color;
// // // //         ctx.fill();
        
// // // //         // Outer glow
// // // //         ctx.beginPath();
// // // //         ctx.arc(p.x, p.y, p.r * pulseFactor * 2.5, 0, Math.PI * 2);
// // // //         ctx.fillStyle = `rgba(139, 92, 246, ${p.alpha * 0.15})`;
// // // //         ctx.fill();
// // // //       });
      
// // // //       // Draw connections with mouse interactions
// // // //       particles.forEach((a, i) => {
// // // //         particles.slice(i + 1).forEach(b => {
// // // //           const dx = a.x - b.x;
// // // //           const dy = a.y - b.y;
// // // //           const dist = Math.hypot(dx, dy);
// // // //           const maxDist = 150;
          
// // // //           if (dist < maxDist) {
// // // //             ctx.beginPath();
// // // //             ctx.moveTo(a.x, a.y);
// // // //             ctx.lineTo(b.x, b.y);
// // // //             const opacity = 0.2 * (1 - dist / maxDist);
// // // //             ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`;
// // // //             ctx.lineWidth = 0.8;
// // // //             ctx.stroke();
// // // //           }
// // // //         });
        
// // // //         // Connect to mouse with glowing lines
// // // //         if (mouse.x && mouse.y) {
// // // //           const dx = a.x - mouse.x;
// // // //           const dy = a.y - mouse.y;
// // // //           const dist = Math.hypot(dx, dy);
// // // //           if (dist < 250) {
// // // //             ctx.beginPath();
// // // //             ctx.moveTo(a.x, a.y);
// // // //             ctx.lineTo(mouse.x, mouse.y);
// // // //             const opacity = 0.3 * (1 - dist / 250);
// // // //             ctx.strokeStyle = `rgba(167, 139, 250, ${opacity})`;
// // // //             ctx.lineWidth = 1.2;
// // // //             ctx.stroke();
// // // //           }
// // // //         }
// // // //       });
      
// // // //       animationId = requestAnimationFrame(animate);
// // // //     };
    
// // // //     animate();
    
// // // //     return () => {
// // // //       cancelAnimationFrame(animationId);
// // // //       window.removeEventListener('resize', resizeCanvas);
// // // //       window.removeEventListener('mousemove', handleMouseMove);
// // // //       window.removeEventListener('scroll', handleScroll);
// // // //     };
// // // //   }, []);

// // // //   const handleScroll = (href) => {
// // // //     document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
// // // //   };

// // // //   return (
// // // //     <section 
// // // //       className="relative min-h-screen flex flex-col justify-center overflow-hidden"
// // // //       onMouseMove={(e) => setMousePos({ x: e.clientX, y: e.clientY })}
// // // //     >
// // // //       <canvas ref={canvasRef} className="particle-canvas opacity-80" />
      
// // // //       {/* Scroll-based darkening overlay - FIXED Z-INDEX LOWER */}
// // // //       <div 
// // // //         className="fixed inset-0 pointer-events-none transition-opacity duration-300"
// // // //         style={{
// // // //           background: `linear-gradient(to bottom, 
// // // //             rgba(5, 2, 10, ${0.2 + scrollOpacity * 0.6}) 0%,
// // // //             rgba(5, 2, 10, ${0.4 + scrollOpacity * 0.8}) 100%)`,
// // // //           backdropFilter: `blur(${scrollOpacity * 4}px)`,
// // // //           zIndex: 1, // Lower z-index so content appears above
// // // //         }}
// // // //       />
      
// // // //       {/* Premium Mouse Glow Effect - Higher z-index for visual effect */}
// // // //       <div 
// // // //         className="pointer-events-none fixed transition-transform duration-300 ease-out"
// // // //         style={{
// // // //           background: 'radial-gradient(circle, rgba(139,92,246,0.25) 0%, rgba(139,92,246,0.1) 30%, transparent 70%)',
// // // //           width: '800px',
// // // //           height: '800px',
// // // //           borderRadius: '50%',
// // // //           transform: `translate(${mousePos.x - 400}px, ${mousePos.y - 400}px)`,
// // // //           filter: 'blur(40px)',
// // // //           zIndex: 2,
// // // //         }}
// // // //       />
      
// // // //       {/* Animated Gradient Orbs - Behind content */}
// // // //       <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] animate-pulse-slow" style={{ zIndex: 0 }} />
// // // //       <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] animate-pulse-slow animation-delay-2000" style={{ zIndex: 0 }} />
// // // //       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[100px] animate-pulse-slow" style={{ zIndex: 0 }} />
      
// // // //       {/* Floating Code Snippets - Above overlay */}
// // // //       <div className="hidden xl:block absolute top-24 right-12 text-xs font-mono text-purple-400/30 rotate-6 border border-purple-500/10 p-4 rounded-xl bg-black/30 backdrop-blur-sm animate-float pointer-events-none select-none" style={{ zIndex: 3 }}>
// // // //         <div className="space-y-1">
// // // //           <div className="text-purple-300/50">{">"} import torch</div>
// // // //           <div className="text-purple-300/50">{">"} model = GPT()</div>
// // // //           <div className="text-purple-300/40 animate-pulse">{">"} training...</div>
// // // //         </div>
// // // //       </div>
      
// // // //       <div className="hidden xl:block absolute bottom-32 left-12 text-xs font-mono text-purple-400/30 -rotate-3 border border-purple-500/10 p-4 rounded-xl bg-black/30 backdrop-blur-sm animate-float-delay pointer-events-none select-none" style={{ zIndex: 3 }}>
// // // //         <div className="space-y-1">
// // // //           <div className="text-purple-300/50">{">"} accuracy: 0.98</div>
// // // //           <div className="text-purple-300/50">{">"} f1-score: 0.96</div>
// // // //           <div className="text-green-400/40">✓ model saved</div>
// // // //         </div>
// // // //       </div>

// // // //       {/* MAIN CONTENT - Highest z-index to appear above all */}
// // // //       <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 pt-20 sm:pt-28 pb-16 sm:pb-20 text-center">
// // // //         {/* Premium Status Badge */}
// // // //         <div className="mb-6 sm:mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm animate-fade-in">
// // // //           <span className="relative flex h-2 w-2">
// // // //             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
// // // //             <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
// // // //           </span>
// // // //           <span className="text-xs font-mono text-purple-300">Available for opportunities</span>
// // // //           <span className="text-purple-400/50 text-xs">✨</span>
// // // //         </div>

// // // //         {/* Premium Glitch Text */}
// // // //         <h1 className="font-display font-bold leading-tight tracking-tight mb-4 sm:mb-6">
// // // //           <div className="relative inline-block">
// // // //             <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl block text-white animate-fade-in relative glitch-text">
// // // //               Muhammad
// // // //             </span>
// // // //             <div className="absolute inset-0 text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-purple-500/30 blur-sm -z-10">
// // // //               Muhammad
// // // //             </div>
// // // //           </div>
// // // //           <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl block mt-2 sm:mt-4 relative">
// // // //             <span className="gradient-text bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-300% animate-gradient">
// // // //               Hassan Shahid
// // // //             </span>
// // // //           </span>
// // // //         </h1>

// // // //         {/* Role Badge with Icons */}
// // // //         <div className="flex items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
// // // //           <span className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-purple-500/60" />
// // // //           <div className="flex items-center gap-2 flex-wrap justify-center">
// // // //             <span className="text-xs sm:text-sm font-mono text-purple-300/90">🤖 Data Scientist</span>
// // // //             <span className="w-1 h-1 rounded-full bg-purple-500/40" />
// // // //             <span className="text-xs sm:text-sm font-mono text-purple-300/90">⚡ ML Engineer</span>
// // // //             <span className="w-1 h-1 rounded-full bg-purple-500/40" />
// // // //             <span className="text-xs sm:text-sm font-mono text-purple-300/90">💻 Full Stack Dev</span>
// // // //           </div>
// // // //           <span className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-purple-500/60" />
// // // //         </div>

// // // //         {/* Enhanced Subtitle with Typing Effect */}
// // // //         <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-12 px-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
// // // //           {personalInfo.subtitle}
// // // //         </p>

// // // //         {/* Premium CTA Buttons */}
// // // //         <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 animate-fade-in" style={{ animationDelay: '0.6s' }}>
// // // //           <button 
// // // //             onClick={() => handleScroll('#projects')} 
// // // //             className="group relative px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-purple-500 text-white font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30"
// // // //             onMouseEnter={() => setIsHovering(true)}
// // // //             onMouseLeave={() => setIsHovering(false)}
// // // //           >
// // // //             <span className="relative z-10 flex items-center gap-2">
// // // //               View My Work
// // // //               <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-1 transition-transform">
// // // //                 <path d="M5 12h14M12 5l7 7-7 7" />
// // // //               </svg>
// // // //             </span>
// // // //             <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
// // // //           </button>
          
// // // //           <button 
// // // //             onClick={() => handleScroll('#contact')} 
// // // //             className="group px-8 py-3.5 rounded-full border-2 border-purple-500/30 text-white font-semibold hover:border-purple-500/80 hover:bg-purple-500/10 transition-all duration-300 hover:scale-105"
// // // //           >
// // // //             <span className="flex items-center gap-2">
// // // //               Get In Touch
// // // //               <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:rotate-12 transition-transform">
// // // //                 <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
// // // //               </svg>
// // // //             </span>
// // // //           </button>
          
// // // //           <a 
// // // //             href="/resume.pdf" 
// // // //             download 
// // // //             className="group px-8 py-3.5 rounded-full border border-white/20 text-white/80 font-semibold hover:border-purple-500/50 hover:text-white transition-all duration-300 hover:scale-105"
// // // //           >
// // // //             <span className="flex items-center gap-2">
// // // //               📄 Resume
// // // //               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-y-0.5 transition-transform">
// // // //                 <path d="M12 3v12m0 0-3-3m3 3 3-3M5 21h14" />
// // // //               </svg>
// // // //             </span>
// // // //           </a>
// // // //         </div>

// // // //         {/* Premium Stats Cards */}
// // // //         <div className="mt-16 sm:mt-20 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
// // // //           {[
// // // //             { num: "2+", label: "Years Experience", icon: "🚀", desc: "in Data Science" },
// // // //             { num: "10+", label: "Projects", icon: "💻", desc: "Production Ready" },
// // // //             { num: "8+", label: "Certifications", icon: "🏆", desc: "Verified" },
// // // //             { num: "100%", label: "Commitment", icon: "⭐", desc: "To Excellence" },
// // // //           ].map((s, i) => (
// // // //             <div 
// // // //               key={s.label} 
// // // //               className="group relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.08] to-purple-500/[0.08] backdrop-blur-sm p-5 text-center transition-all duration-500 hover:border-purple-500/40 hover:scale-105"
// // // //               style={{ animationDelay: `${0.8 + i * 0.1}s` }}
// // // //             >
// // // //               <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
// // // //               <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">{s.icon}</div>
// // // //               <div className="font-display font-bold text-3xl sm:text-4xl bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
// // // //                 {s.num}
// // // //               </div>
// // // //               <div className="text-white/70 text-xs mt-1 font-semibold">{s.label}</div>
// // // //               <div className="text-purple-400/60 text-[10px] mt-0.5 font-mono">{s.desc}</div>
// // // //             </div>
// // // //           ))}
// // // //         </div>
// // // //       </div>

// // // //       {/* Premium Tech Marquee */}
// // // //       <div className="relative z-20 overflow-hidden pb-6 sm:pb-8 mt-8">
// // // //         <div className="relative">
// // // //           <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#05020a] to-transparent z-10" />
// // // //           <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#05020a] to-transparent z-10" />
// // // //           <div className="flex overflow-hidden">
// // // //             <div className="marquee-track flex gap-8 sm:gap-12 animate-marquee">
// // // //               {[...techMarquee, ...techMarquee, ...techMarquee].map((tech, i) => (
// // // //                 <span 
// // // //                   key={i} 
// // // //                   className="flex items-center gap-3 px-4 text-gray-500 text-sm font-mono hover:text-purple-400 transition-all duration-300 whitespace-nowrap hover:scale-110 cursor-pointer"
// // // //                 >
// // // //                   <span className="w-1.5 h-1.5 rounded-full bg-purple-500/40"></span>
// // // //                   {tech}
// // // //                 </span>
// // // //               ))}
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       {/* Premium Scroll Indicator */}
// // // //       <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-slow z-20">
// // // //         <span className="text-gray-600 text-[10px] sm:text-xs font-mono tracking-[0.2em] uppercase">Scroll to explore</span>
// // // //         <div className="w-6 h-10 rounded-full border-2 border-purple-500/30 flex justify-center">
// // // //           <div className="w-1 h-2 bg-purple-500 rounded-full mt-2 animate-scroll-dot" />
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // }


import { useEffect, useRef, useState } from 'react';
import { personalInfo, techMarquee } from '../data/portfolioData';

export default function Hero() {
  const canvasRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollOpacity, setScrollOpacity] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = window.innerHeight;
      const opacity = Math.min(scrollY / maxScroll, 0.7);
      setScrollOpacity(opacity);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    const mouse = { x: null, y: null, radius: 200 };
    
    const handleMouseMove = (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);

    const particleCount = window.innerWidth < 768 ? 80 : 150;
    
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 3 + 1,
      vx: (Math.random() - 0.5) * 0.8,
      vy: (Math.random() - 0.5) * 0.8,
      alpha: Math.random() * 0.6 + 0.2,
      pulse: Math.random() * Math.PI * 2,
      color: Math.random() > 0.7 ? '#a78bfa' : '#8b5cf6',
    }));

    let animationId;
    let time = 0;
    
    const animate = () => {
      time += 0.015;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => {
        if (mouse.x && mouse.y) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.hypot(dx, dy);
          
          if (dist < mouse.radius) {
            const forceDirectionX = dx / dist;
            const forceDirectionY = dy / dist;
            const force = (mouse.radius - dist) / mouse.radius;
            const strength = force * 3;
            
            p.x -= forceDirectionX * strength;
            p.y -= forceDirectionY * strength;
          }
        }

        p.x += p.vx;
        p.y += p.vy;
        
        if (p.x < -50) p.x = canvas.width + 50;
        if (p.x > canvas.width + 50) p.x = -50;
        if (p.y < -50) p.y = canvas.height + 50;
        if (p.y > canvas.height + 50) p.y = -50;
        
        let pulseFactor = 0.5 + Math.sin(time * 2 + p.pulse) * 0.3;
        if (mouse.x && mouse.y) {
          const distToMouse = Math.hypot(p.x - mouse.x, p.y - mouse.y);
          if (distToMouse < 100) {
            pulseFactor += (1 - distToMouse / 100) * 0.8;
          }
        }
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * (0.8 + pulseFactor * 0.4), 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * pulseFactor * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139, 92, 246, ${p.alpha * 0.15})`;
        ctx.fill();
      });
      
      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach(b => {
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          const maxDist = 150;
          
          if (dist < maxDist) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            const opacity = 0.2 * (1 - dist / maxDist);
            ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        });
        
        if (mouse.x && mouse.y) {
          const dx = a.x - mouse.x;
          const dy = a.y - mouse.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 250) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(mouse.x, mouse.y);
            const opacity = 0.3 * (1 - dist / 250);
            ctx.strokeStyle = `rgba(167, 139, 250, ${opacity})`;
            ctx.lineWidth = 1.2;
            ctx.stroke();
          }
        }
      });
      
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollClick = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Duplicate arrays for seamless infinite scroll
  const topRowSkills = [...techMarquee, ...techMarquee];
  const bottomRowSkills = [...techMarquee, ...techMarquee].reverse();

  return (
    <section 
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      onMouseMove={(e) => setMousePos({ x: e.clientX, y: e.clientY })}
    >
      {/* Custom Keyframe Styles for Dynamic Scroll */}
      <style>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scrollLeft 35s linear infinite;
        }
        .animate-scroll-right {
          animation: scrollRight 40s linear infinite;
        }
        .skill-row:hover .animate-scroll-left,
        .skill-row:hover .animate-scroll-right {
          animation-play-state: paused;
        }
      `}</style>

      <canvas ref={canvasRef} className="particle-canvas opacity-80" />
      
      <div 
        className="fixed inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          background: `linear-gradient(to bottom, 
            rgba(5, 2, 10, ${0.2 + scrollOpacity * 0.6}) 0%,
            rgba(5, 2, 10, ${0.4 + scrollOpacity * 0.8}) 100%)`,
          backdropFilter: `blur(${scrollOpacity * 4}px)`,
          zIndex: 1,
        }}
      />
      
      <div 
        className="pointer-events-none fixed transition-transform duration-300 ease-out"
        style={{
          background: 'radial-gradient(circle, rgba(139,92,246,0.25) 0%, rgba(139,92,246,0.1) 30%, transparent 70%)',
          width: '800px',
          height: '800px',
          borderRadius: '50%',
          transform: `translate(${mousePos.x - 400}px, ${mousePos.y - 400}px)`,
          filter: 'blur(40px)',
          zIndex: 2,
        }}
      />
      
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] animate-pulse-slow" style={{ zIndex: 0 }} />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] animate-pulse-slow animation-delay-2000" style={{ zIndex: 0 }} />
      
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 pt-20 sm:pt-28 pb-16 sm:pb-20 text-center">
        
        <div className="mb-8 inline-flex items-center gap-3 px-5 py-2 border border-purple-500/30 bg-black/20 backdrop-blur-sm animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
          </span>
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-purple-200/80">Available for Opportunities</span>
        </div>

        <h1 className="font-display font-bold leading-tight tracking-tight mb-4 sm:mb-6">
          <div className="relative inline-block">
            <span style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'clamp(2rem,6vw,4rem)', margin:'0 0 14px', lineHeight:1.05, letterSpacing:'-0.03em' }} className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl block text-white animate-fade-in relative">
              Muhammad
            </span>
          </div>
          <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl block mt-2 sm:mt-4 relative">
            <span style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'clamp(2rem,6vw,4rem)', margin:'0 0 14px', lineHeight:1.05, letterSpacing:'-0.03em' ,
              
             
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              backgroundSize: '200% 200%',
              animation: 'gradientShift 4s ease infinite',
              position: 'relative',
              display: 'inline-block',
              transition: 'all 0.3s ease',
            }} className="  gradient-text bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-300% animate-gradient">
              Hassan Shahid
            </span>
          </span>
        </h1>

        <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-white/30" />
          <span className="text-sm font-light text-gray-300 tracking-widest uppercase">Data Scientist</span>
          <span className="text-purple-500 text-xs">◆</span>
          <span className="text-sm font-light text-gray-300 tracking-widest uppercase">ML Engineer</span>
          <span className="h-px w-12 bg-gradient-to-l from-transparent to-white/30" />
        </div>

        <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10 px-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          {personalInfo.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <button 
            onClick={() => handleScrollClick('#projects')} 
            className="group relative px-8 py-3.5 bg-white text-black font-semibold overflow-hidden transition-all duration-300 hover:bg-purple-100"
          >
            <span className="relative z-10 flex items-center gap-2">
              View My Work
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-1 transition-transform">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </button>
          
          <button 
            onClick={() => handleScrollClick('#contact')} 
            className="group px-8 py-3.5 border border-white/20 text-white font-semibold hover:border-white/80 hover:bg-white/5 transition-all duration-300"
          >
            <span className="flex items-center gap-2">
              Get In Touch
            </span>
          </button>
        </div>

        {/* CLASSICAL STATS SECTION */}
        <div className="mt-20 w-full max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-500/40 to-transparent mb-10" />
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-0">
            {[
              { num: "02+", label: "Years Experience" },
              { num: "10+", label: "Projects" },
              { num: "08+", label: "Certifications" },
              { num: "100%", label: "Commitment" },
            ].map((s, i) => (
              <div key={s.label} className="relative flex flex-col items-center px-6 sm:px-10 group">
                {i !== 0 && <div className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 h-12 w-px bg-white/10" />}
                <div className="font-serif text-5xl sm:text-6xl text-white group-hover:text-purple-300 transition-colors duration-300 tracking-tight">{s.num}</div>
                <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-gray-500 mt-2 text-center">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-500/20 to-transparent mt-10" />
        </div>
      </div>

      {/* DYNAMIC MULTI-DIRECTIONAL SKILLS TICKER */}
      <div className="relative z-20 w-full mt-10 py-8 space-y-4 overflow-hidden">
        
        {/* Top Row - Moves Left */}
        <div 
          className="skill-row relative flex overflow-hidden"
          style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
        >
          <div className="flex gap-4 animate-scroll-left">
            {topRowSkills.map((tech, i) => (
              <div 
                key={`top-${i}`} 
                className="flex items-center gap-2 px-5 py-2.5 rounded border border-white/10 bg-white/5 backdrop-blur-sm text-sm font-mono text-gray-300 hover:text-white hover:border-purple-500/60 hover:bg-purple-500/10 transition-all duration-300 cursor-pointer whitespace-nowrap"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Row - Moves Right */}
        <div 
          className="skill-row relative flex overflow-hidden"
          style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
        >
          <div className="flex gap-4 animate-scroll-right">
            {bottomRowSkills.map((tech, i) => (
              <div 
                key={`bottom-${i}`} 
                className="flex items-center gap-2 px-5 py-2.5 rounded border border-white/10 bg-white/5 backdrop-blur-sm text-sm font-mono text-gray-300 hover:text-white hover:border-purple-500/60 hover:bg-purple-500/10 transition-all duration-300 cursor-pointer whitespace-nowrap"
              >
                {tech}
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
              </div>
            ))}
          </div>
        </div>
        
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-slow z-20">
        <div className="w-px h-8 bg-gradient-to-b from-transparent to-purple-500/50" />
      </div>
    </section>
  );
}




// // import { useEffect, useRef, useState, useCallback } from 'react';

// // export default function Hero() {
// //   const canvasRef = useRef(null);
// //   const glowRef = useRef(null);
// //   const sceneRef = useRef(null);
// //   const mouseRef = useRef({ x: 0, y: 0, vx: 0, vy: 0 });
// //   const smoothMouseRef = useRef({ x: 0, y: 0 });
// //   const rafRef = useRef(null);
// //   const scrollRafRef = useRef(null);

// //   const [scrollY, setScrollY] = useState(0);
// //   const [isLoaded, setIsLoaded] = useState(false);
// //   const [activeKey, setActiveKey] = useState(null);
// //   const [typedText, setTypedText] = useState('');

// //   const TITLE_LINE1 = 'Muhammad';
// //   const TITLE_LINE2 = 'Hassan Shahid';
// //   const SUBTITLE = 'Data Scientist  •  ML Engineer  •  AI Architect';

// //   // Typewriter effect
// //   useEffect(() => {
// //     const full = SUBTITLE;
// //     let i = 0;
// //     const t = setInterval(() => {
// //       setTypedText(full.slice(0, i));
// //       i++;
// //       if (i > full.length) clearInterval(t);
// //     }, 45);
// //     return () => clearInterval(t);
// //   }, []);

// //   useEffect(() => {
// //     const timer = setTimeout(() => setIsLoaded(true), 100);
// //     return () => clearTimeout(timer);
// //   }, []);

// //   // Keyboard typing animation on keyboard visual
// //   useEffect(() => {
// //     const keys = Array.from({ length: 48 }, (_, i) => i);
// //     let idx = 0;
// //     const t = setInterval(() => {
// //       setActiveKey(keys[Math.floor(Math.random() * keys.length)]);
// //       setTimeout(() => setActiveKey(null), 80);
// //       idx++;
// //     }, 150);
// //     return () => clearInterval(t);
// //   }, []);

// //   // Smooth mouse tracking
// //   useEffect(() => {
// //     const handleMouseMove = (e) => {
// //       mouseRef.current = { x: e.clientX, y: e.clientY, vx: 0, vy: 0 };
// //     };
// //     window.addEventListener('mousemove', handleMouseMove);
// //     return () => window.removeEventListener('mousemove', handleMouseMove);
// //   }, []);

// //   // Lerp smooth mouse + apply to scene
// //   useEffect(() => {
// //     let prev = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

// //     const loop = () => {
// //       const target = mouseRef.current;
// //       prev.x += (target.x - prev.x) * 0.06;
// //       prev.y += (target.y - prev.y) * 0.06;
// //       smoothMouseRef.current = { ...prev };

// //       if (sceneRef.current) {
// //         const cx = window.innerWidth / 2;
// //         const cy = window.innerHeight / 2;
// //         const rx = ((cy - prev.y) / cy) * 12;
// //         const ry = ((prev.x - cx) / cx) * 18;
// //         sceneRef.current.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
// //       }

// //       if (glowRef.current) {
// //         glowRef.current.style.left = prev.x + 'px';
// //         glowRef.current.style.top = prev.y + 'px';
// //       }

// //       rafRef.current = requestAnimationFrame(loop);
// //     };
// //     rafRef.current = requestAnimationFrame(loop);
// //     return () => cancelAnimationFrame(rafRef.current);
// //   }, []);

// //   // Scroll handler
// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setScrollY(window.scrollY);
// //     };
// //     window.addEventListener('scroll', handleScroll, { passive: true });
// //     return () => window.removeEventListener('scroll', handleScroll);
// //   }, []);

// //   // Canvas particle system — dual-layer particles + grid lines
// //   useEffect(() => {
// //     const canvas = canvasRef.current;
// //     if (!canvas) return;
// //     const ctx = canvas.getContext('2d');

// //     const resize = () => {
// //       canvas.width = window.innerWidth;
// //       canvas.height = window.innerHeight;
// //     };
// //     resize();
// //     window.addEventListener('resize', resize);

// //     // Particles
// //     const mkParticle = (canvas) => ({
// //       x: Math.random() * canvas.width,
// //       y: Math.random() * canvas.height,
// //       r: Math.random() * 1.8 + 0.3,
// //       vx: (Math.random() - 0.5) * 0.4,
// //       vy: (Math.random() - 0.5) * 0.4,
// //       alpha: Math.random() * 0.6 + 0.1,
// //       hue: Math.random() > 0.7 ? 260 : 200, // purple or cyan accent
// //       pulse: Math.random() * Math.PI * 2,
// //     });

// //     const count = window.innerWidth < 768 ? 60 : 130;
// //     const particles = Array.from({ length: count }, () => mkParticle(canvas));

// //     // Grid
// //     const GRID_COLS = 16;
// //     const GRID_ROWS = 10;

// //     let frame = 0;
// //     let animId;

// //     const draw = () => {
// //       frame++;
// //       ctx.clearRect(0, 0, canvas.width, canvas.height);

// //       // Perspective grid
// //       const mx = smoothMouseRef.current.x || canvas.width / 2;
// //       const my = smoothMouseRef.current.y || canvas.height / 2;
// //       const horizon = canvas.height * 0.55 + (my - canvas.height / 2) * 0.05;
// //       const vp = { x: canvas.width / 2 + (mx - canvas.width / 2) * 0.04, y: horizon };

// //       ctx.save();
// //       ctx.globalAlpha = 0.07;
// //       ctx.strokeStyle = '#7c3aed';
// //       ctx.lineWidth = 0.5;

// //       for (let c = 0; c <= GRID_COLS; c++) {
// //         const bx = (c / GRID_COLS) * canvas.width;
// //         ctx.beginPath();
// //         ctx.moveTo(vp.x, vp.y);
// //         ctx.lineTo(bx, canvas.height);
// //         ctx.stroke();
// //       }
// //       for (let r = 1; r <= GRID_ROWS; r++) {
// //         const t = r / GRID_ROWS;
// //         const y = vp.y + (canvas.height - vp.y) * t;
// //         const xLeft = vp.x + (0 - vp.x) * t;
// //         const xRight = vp.x + (canvas.width - vp.x) * t;
// //         ctx.beginPath();
// //         ctx.moveTo(xLeft, y);
// //         ctx.lineTo(xRight, y);
// //         ctx.stroke();
// //       }
// //       ctx.restore();

// //       // Particles
// //       particles.forEach((p) => {
// //         p.x += p.vx;
// //         p.y += p.vy;
// //         p.pulse += 0.02;

// //         // Mouse repel
// //         const dx = mx - p.x;
// //         const dy = my - p.y;
// //         const dist = Math.sqrt(dx * dx + dy * dy);
// //         if (dist < 120) {
// //           p.x -= (dx / dist) * 0.8;
// //           p.y -= (dy / dist) * 0.8;
// //         }

// //         if (p.x < 0) p.x = canvas.width;
// //         if (p.x > canvas.width) p.x = 0;
// //         if (p.y < 0) p.y = canvas.height;
// //         if (p.y > canvas.height) p.y = 0;

// //         const a = p.alpha * (0.7 + 0.3 * Math.sin(p.pulse));
// //         ctx.beginPath();
// //         ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
// //         ctx.fillStyle = `hsla(${p.hue}, 80%, 65%, ${a})`;
// //         ctx.fill();
// //       });

// //       // Connection lines
// //       ctx.save();
// //       for (let i = 0; i < particles.length; i++) {
// //         for (let j = i + 1; j < particles.length; j++) {
// //           const dx = particles[i].x - particles[j].x;
// //           const dy = particles[i].y - particles[j].y;
// //           const d = Math.sqrt(dx * dx + dy * dy);
// //           if (d < 90) {
// //             ctx.beginPath();
// //             ctx.moveTo(particles[i].x, particles[i].y);
// //             ctx.lineTo(particles[j].x, particles[j].y);
// //             ctx.strokeStyle = `rgba(139,92,246,${(1 - d / 90) * 0.15})`;
// //             ctx.lineWidth = 0.5;
// //             ctx.stroke();
// //           }
// //         }
// //       }
// //       ctx.restore();

// //       animId = requestAnimationFrame(draw);
// //     };

// //     draw();
// //     return () => {
// //       cancelAnimationFrame(animId);
// //       window.removeEventListener('resize', resize);
// //     };
// //   }, []);

// //   const handleScrollClick = (href) => {
// //     document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
// //   };

// //   const scrollProgress = Math.min(scrollY / window.innerHeight, 1);
// //   const heroOpacity = 1 - scrollProgress * 1.4;
// //   const heroScale = 1 - scrollProgress * 0.08;
// //   const heroTranslateY = scrollY * 0.35;

// //   return (
// //     <section
// //       className="relative min-h-screen flex items-center justify-center overflow-hidden"
// //       style={{ background: '#04010a' }}
// //     >
// //       <style>{`
// //         @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=Space+Mono:wght@400;700&display=swap');

// //         .hero-font { font-family: 'Syne', sans-serif; }
// //         .mono-font { font-family: 'Space Mono', monospace; }

// //         .glow-cursor {
// //           position: fixed;
// //           pointer-events: none;
// //           width: 500px;
// //           height: 500px;
// //           border-radius: 50%;
// //           transform: translate(-50%, -50%);
// //           background: radial-gradient(circle, rgba(120,60,255,0.12) 0%, transparent 70%);
// //           z-index: 1;
// //           transition: none;
// //         }

// //         .scene-3d {
// //           transform-style: preserve-3d;
// //           transition: transform 0.12s cubic-bezier(0.23,1,0.32,1);
// //           will-change: transform;
// //         }

// //         .monitor-screen {
// //           background: linear-gradient(135deg, #0d0918 0%, #06030f 100%);
// //           position: relative;
// //           overflow: hidden;
// //         }

// //         .monitor-screen::before {
// //           content: '';
// //           position: absolute;
// //           inset: 0;
// //           background: repeating-linear-gradient(
// //             0deg,
// //             transparent,
// //             transparent 3px,
// //             rgba(120,60,220,0.03) 3px,
// //             rgba(120,60,220,0.03) 4px
// //           );
// //           pointer-events: none;
// //           z-index: 10;
// //         }

// //         .monitor-screen::after {
// //           content: '';
// //           position: absolute;
// //           inset: 0;
// //           background: radial-gradient(ellipse at 30% 30%, rgba(120,60,255,0.08) 0%, transparent 60%);
// //           pointer-events: none;
// //         }

// //         .glitch-text {
// //           position: relative;
// //           display: inline-block;
// //         }
// //         .glitch-text::before,
// //         .glitch-text::after {
// //           content: attr(data-text);
// //           position: absolute;
// //           left: 0; top: 0;
// //           width: 100%;
// //           background: inherit;
// //           -webkit-background-clip: text;
// //           -webkit-text-fill-color: transparent;
// //           background-clip: text;
// //         }
// //         .glitch-text::before {
// //           left: 2px;
// //           text-shadow: -1px 0 rgba(0,255,255,0.3);
// //           animation: glitch1 4s infinite;
// //           clip-path: polygon(0 20%, 100% 20%, 100% 40%, 0 40%);
// //         }
// //         .glitch-text::after {
// //           left: -2px;
// //           text-shadow: 1px 0 rgba(255,0,150,0.2);
// //           animation: glitch2 4s infinite;
// //           clip-path: polygon(0 60%, 100% 60%, 100% 80%, 0 80%);
// //         }

// //         @keyframes glitch1 {
// //           0%,90%,100% { transform: translateX(0); opacity: 0; }
// //           91% { transform: translateX(-3px); opacity: 1; }
// //           93% { transform: translateX(3px); opacity: 1; }
// //           95% { transform: translateX(0); opacity: 0; }
// //         }
// //         @keyframes glitch2 {
// //           0%,92%,100% { transform: translateX(0); opacity: 0; }
// //           93% { transform: translateX(2px); opacity: 1; }
// //           95% { transform: translateX(-2px); opacity: 1; }
// //           97% { transform: translateX(0); opacity: 0; }
// //         }

// //         .float-z {
// //           animation: floatZ 6s ease-in-out infinite;
// //         }
// //         @keyframes floatZ {
// //           0%,100% { transform: translateZ(50px) translateY(0px); }
// //           50% { transform: translateZ(50px) translateY(-8px); }
// //         }

// //         .key-active {
// //           background: rgba(139,92,246,0.6) !important;
// //           box-shadow: 0 0 8px rgba(139,92,246,0.8);
// //         }

// //         .btn-primary {
// //           position: relative;
// //           overflow: hidden;
// //           background: linear-gradient(135deg, #7c3aed, #6d28d9);
// //           border: 1px solid rgba(139,92,246,0.4);
// //           transition: all 0.3s cubic-bezier(0.23,1,0.32,1);
// //         }
// //         .btn-primary::before {
// //           content: '';
// //           position: absolute;
// //           inset: 0;
// //           background: linear-gradient(135deg, rgba(255,255,255,0.15), transparent);
// //           transform: translateX(-100%) skewX(-15deg);
// //           transition: transform 0.4s ease;
// //         }
// //         .btn-primary:hover::before { transform: translateX(100%) skewX(-15deg); }
// //         .btn-primary:hover {
// //           transform: translateY(-2px) scale(1.03);
// //           box-shadow: 0 0 30px rgba(139,92,246,0.5), 0 8px 24px rgba(0,0,0,0.4);
// //         }

// //         .btn-ghost {
// //           position: relative;
// //           border: 1px solid rgba(255,255,255,0.12);
// //           transition: all 0.3s cubic-bezier(0.23,1,0.32,1);
// //           background: rgba(255,255,255,0.03);
// //           backdrop-filter: blur(8px);
// //         }
// //         .btn-ghost:hover {
// //           transform: translateY(-2px) scale(1.03);
// //           border-color: rgba(139,92,246,0.5);
// //           background: rgba(139,92,246,0.08);
// //           box-shadow: 0 0 20px rgba(139,92,246,0.2), 0 8px 24px rgba(0,0,0,0.3);
// //         }

// //         .depth-layer-1 { transform: translateZ(80px); }
// //         .depth-layer-2 { transform: translateZ(40px); }
// //         .depth-layer-3 { transform: translateZ(0px); }
// //         .depth-layer-neg { transform: translateZ(-30px); }

// //         .cpu-led {
// //           animation: cpuLed 1.2s ease-in-out infinite;
// //         }
// //         @keyframes cpuLed {
// //           0%,100% { opacity: 0.3; }
// //           50% { opacity: 1; }
// //         }

// //         .scroll-dot {
// //           animation: scrollDot 2s ease-in-out infinite;
// //         }
// //         @keyframes scrollDot {
// //           0% { transform: translateY(0); opacity: 1; }
// //           80% { transform: translateY(14px); opacity: 0; }
// //           100% { transform: translateY(0); opacity: 0; }
// //         }

// //         .noise-overlay {
// //           background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E");
// //           opacity: 0.025;
// //           pointer-events: none;
// //         }

// //         .tag-chip {
// //           display: inline-flex;
// //           align-items: center;
// //           gap: 4px;
// //           padding: 2px 8px;
// //           border-radius: 999px;
// //           font-size: 9px;
// //           letter-spacing: 0.08em;
// //           font-family: 'Space Mono', monospace;
// //           border: 1px solid rgba(139,92,246,0.3);
// //           background: rgba(139,92,246,0.08);
// //           color: rgba(139,92,246,0.9);
// //         }

// //         .stat-block {
// //           display: flex;
// //           flex-direction: column;
// //           align-items: center;
// //           gap: 1px;
// //         }
// //         .stat-num {
// //           font-family: 'Space Mono', monospace;
// //           font-size: 14px;
// //           font-weight: 700;
// //           background: linear-gradient(135deg, #a78bfa, #60a5fa);
// //           -webkit-background-clip: text;
// //           -webkit-text-fill-color: transparent;
// //           background-clip: text;
// //         }
// //         .stat-label {
// //           font-family: 'Space Mono', monospace;
// //           font-size: 8px;
// //           color: rgba(255,255,255,0.3);
// //           letter-spacing: 0.1em;
// //           text-transform: uppercase;
// //         }

// //         .fade-in-up {
// //           opacity: 0;
// //           transform: translateY(24px);
// //           animation: fadeInUp 0.8s cubic-bezier(0.23,1,0.32,1) forwards;
// //         }
// //         @keyframes fadeInUp {
// //           to { opacity: 1; transform: translateY(0); }
// //         }

// //         .loaded .fade-in-up { }
        
// //         .ambient-orb {
// //           position: absolute;
// //           border-radius: 50%;
// //           filter: blur(80px);
// //           pointer-events: none;
// //         }
// //       `}</style>

// //       {/* Mouse glow */}
// //       <div ref={glowRef} className="glow-cursor" />

// //       {/* Canvas */}
// //       <canvas ref={canvasRef} className="absolute inset-0 z-0" style={{ opacity: 0.55 }} />

// //       {/* Noise overlay */}
// //       <div className="absolute inset-0 z-0 noise-overlay" />

// //       {/* Ambient orbs */}
// //       <div className="ambient-orb" style={{ width: 500, height: 500, background: 'radial-gradient(circle, rgba(109,40,217,0.15) 0%, transparent 70%)', top: '10%', left: '5%', zIndex: 1 }} />
// //       <div className="ambient-orb" style={{ width: 400, height: 400, background: 'radial-gradient(circle, rgba(29,78,216,0.1) 0%, transparent 70%)', bottom: '15%', right: '8%', zIndex: 1 }} />
// //       <div className="ambient-orb" style={{ width: 300, height: 300, background: 'radial-gradient(circle, rgba(168,85,247,0.08) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', zIndex: 1 }} />

// //       {/* Scroll darkening */}
// //       <div
// //         className="fixed inset-0 pointer-events-none z-50"
// //         style={{
// //           background: `rgba(4,1,10,${scrollProgress * 0.97})`,
// //           transition: 'background 0.1s linear',
// //         }}
// //       />

// //       {/* Main scene wrapper — scroll parallax */}
// //       <div
// //         className="relative z-10 w-full h-screen flex items-center justify-center"
// //         style={{
// //           perspective: '1400px',
// //           perspectiveOrigin: '50% 45%',
// //           opacity: Math.max(heroOpacity, 0),
// //           transform: `scale(${heroScale}) translateY(${-heroTranslateY * 0.2}px)`,
// //           transition: 'opacity 0.05s linear',
// //         }}
// //       >
// //         {/* 3D rotating scene */}
// //         <div
// //           ref={sceneRef}
// //           className="scene-3d relative"
// //           style={{ transformStyle: 'preserve-3d' }}
// //         >

// //           {/* ─── MONITOR ─── */}
// //           <div
// //             className="float-z relative"
// //             style={{
// //               width: 'clamp(300px, 55vw, 640px)',
// //               height: 'clamp(190px, 35vw, 400px)',
// //               transform: 'translateZ(50px)',
// //               transformStyle: 'preserve-3d',
// //             }}
// //           >
// //             {/* Monitor bezel */}
// //             <div
// //               className="w-full h-full rounded-xl overflow-hidden"
// //               style={{
// //                 background: 'linear-gradient(160deg, #1c1824 0%, #0d0b14 100%)',
// //                 border: '5px solid #1a1625',
// //                 boxShadow: `
// //                   0 0 0 1px rgba(139,92,246,0.15),
// //                   0 0 40px rgba(109,40,217,0.25),
// //                   0 0 100px rgba(109,40,217,0.1),
// //                   0 40px 80px rgba(0,0,0,0.8),
// //                   inset 0 1px 0 rgba(255,255,255,0.05)
// //                 `,
// //               }}
// //             >
// //               {/* Browser bar */}
// //               <div style={{ height: 28, background: '#0f0b1a', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', padding: '0 12px', gap: 6, flexShrink: 0 }}>
// //                 <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57' }} />
// //                 <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#febc2e' }} />
// //                 <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#28c840' }} />
// //                 <div style={{ flex: 1, height: 14, background: 'rgba(255,255,255,0.04)', borderRadius: 4, marginLeft: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
// //                   <span style={{ fontFamily: 'Space Mono', fontSize: 8, color: 'rgba(255,255,255,0.2)', letterSpacing: '0.05em' }}>portfolio.hassanshahid.dev</span>
// //                 </div>
// //               </div>

// //               {/* Screen */}
// //               <div className="monitor-screen w-full" style={{ height: 'calc(100% - 28px)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '12px 20px', gap: 8 }}>

// //                 {/* Top status row */}
// //                 <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
// //                   <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 6px #22c55e' }} />
// //                   <span className="mono-font" style={{ fontSize: 9, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Available for work</span>
// //                 </div>

// //                 {/* Avatar + Name */}
// //                 <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
// //                   <div style={{
// //                     width: 44, height: 44, borderRadius: '50%',
// //                     background: 'linear-gradient(135deg, #7c3aed, #2563eb)',
// //                     display: 'flex', alignItems: 'center', justifyContent: 'center',
// //                     fontFamily: 'Syne', fontWeight: 800, fontSize: 18, color: 'white',
// //                     boxShadow: '0 0 20px rgba(124,58,237,0.6), 0 0 40px rgba(124,58,237,0.2)',
// //                     flexShrink: 0,
// //                   }}>
// //                     H
// //                   </div>

// //                   <div>
// //                     <h1 className="hero-font" style={{ margin: 0, lineHeight: 1 }}>
// //                       <span
// //                         className="glitch-text"
// //                         data-text="Muhammad"
// //                         style={{
// //                           display: 'block',
// //                           fontSize: 'clamp(16px, 3.5vw, 32px)',
// //                           fontWeight: 800,
// //                           background: 'linear-gradient(90deg, #a78bfa, #818cf8)',
// //                           WebkitBackgroundClip: 'text',
// //                           WebkitTextFillColor: 'transparent',
// //                           backgroundClip: 'text',
// //                         }}
// //                       >
// //                         Muhammad
// //                       </span>
// //                       <span style={{
// //                         display: 'block',
// //                         fontSize: 'clamp(18px, 4vw, 36px)',
// //                         fontWeight: 800,
// //                         background: 'linear-gradient(90deg, #ffffff, #c4b5fd)',
// //                         WebkitBackgroundClip: 'text',
// //                         WebkitTextFillColor: 'transparent',
// //                         backgroundClip: 'text',
// //                         marginTop: 2,
// //                       }}>
// //                         Hassan Shahid
// //                       </span>
// //                     </h1>
// //                   </div>
// //                 </div>

// //                 {/* Subtitle typewriter */}
// //                 <div className="mono-font" style={{ fontSize: 'clamp(8px, 1vw, 11px)', color: 'rgba(167,139,250,0.7)', letterSpacing: '0.15em', textTransform: 'uppercase', minHeight: 14 }}>
// //                   {typedText}<span style={{ animation: 'glitch1 1s infinite', borderRight: '1px solid rgba(167,139,250,0.8)', marginLeft: 1 }} />
// //                 </div>

// //                 {/* Stats row */}
// //                 <div style={{ display: 'flex', gap: 20, marginTop: 4 }}>
// //                   {[['5+', 'YEARS'], ['30+', 'PROJECTS'], ['99%', 'ACCURACY']].map(([n, l]) => (
// //                     <div key={l} className="stat-block">
// //                       <span className="stat-num">{n}</span>
// //                       <span className="stat-label">{l}</span>
// //                     </div>
// //                   ))}
// //                 </div>

// //                 {/* Tags */}
// //                 <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', justifyContent: 'center', marginTop: 4 }}>
// //                   {['Python', 'React', 'FastAPI', 'XGBoost'].map(t => (
// //                     <span key={t} className="tag-chip">⬡ {t}</span>
// //                   ))}
// //                 </div>

// //               </div>
// //             </div>

// //             {/* Monitor edge glow bottom */}
// //             <div style={{
// //               position: 'absolute', bottom: -2, left: '10%', right: '10%', height: 2,
// //               background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.8), transparent)',
// //               filter: 'blur(2px)',
// //             }} />
// //           </div>

// //           {/* ─── STAND NECK ─── */}
// //           <div style={{
// //             position: 'absolute',
// //             left: '50%', transform: 'translateX(-50%) translateZ(20px)',
// //             bottom: -32, width: 60, height: 28,
// //             background: 'linear-gradient(180deg, #1a1625, #111018)',
// //             borderRadius: '0 0 8px 8px',
// //             boxShadow: 'inset 0 -1px 0 rgba(255,255,255,0.05)',
// //           }} />

// //           {/* ─── STAND BASE ─── */}
// //           <div style={{
// //             position: 'absolute',
// //             left: '50%', transform: 'translateX(-50%) translateZ(8px)',
// //             bottom: -44, width: 160, height: 10,
// //             background: 'linear-gradient(180deg, #151220, #0d0a17)',
// //             borderRadius: '50%',
// //             boxShadow: '0 4px 20px rgba(0,0,0,0.6)',
// //           }} />

// //           {/* ─── KEYBOARD ─── */}
// //           <div style={{
// //             position: 'absolute',
// //             left: '50%',
// //             top: 'calc(100% + 30px)',
// //             transform: 'translateX(-50%) translateZ(-20px) rotateX(65deg) translateY(10px)',
// //             width: 'clamp(240px, 48vw, 560px)',
// //             height: 'clamp(60px, 8vw, 100px)',
// //             background: 'linear-gradient(160deg, #18142a, #0e0b1c)',
// //             borderRadius: 8,
// //             border: '1px solid rgba(255,255,255,0.06)',
// //             boxShadow: '0 8px 40px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.05)',
// //             padding: 8,
// //             display: 'grid',
// //             gridTemplateColumns: 'repeat(14, 1fr)',
// //             gridTemplateRows: 'repeat(4, 1fr)',
// //             gap: 2,
// //           }}>
// //             {Array.from({ length: 56 }).map((_, i) => (
// //               <div
// //                 key={i}
// //                 style={{
// //                   background: activeKey === i ? 'rgba(139,92,246,0.7)' : 'rgba(255,255,255,0.05)',
// //                   borderRadius: 2,
// //                   border: '1px solid rgba(255,255,255,0.04)',
// //                   boxShadow: activeKey === i ? '0 0 8px rgba(139,92,246,0.8)' : 'none',
// //                   transition: 'background 0.05s, box-shadow 0.05s',
// //                 }}
// //               />
// //             ))}
// //           </div>

// //           {/* ─── MOUSE ─── */}
// //           <div style={{
// //             position: 'absolute',
// //             right: '-8%',
// //             top: 'calc(100% + 26px)',
// //             transform: 'translateZ(-20px) rotateX(65deg) translateY(10px)',
// //             width: 'clamp(28px, 3.5vw, 42px)',
// //             height: 'clamp(52px, 7vw, 76px)',
// //             background: 'linear-gradient(180deg, #252035, #130f20)',
// //             borderRadius: '40% 40% 50% 50% / 30% 30% 60% 60%',
// //             border: '1px solid rgba(255,255,255,0.07)',
// //             boxShadow: '0 6px 20px rgba(0,0,0,0.6)',
// //             display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 8,
// //           }}>
// //             <div style={{ width: 1, height: 12, background: 'rgba(139,92,246,0.5)', borderRadius: 1 }} />
// //             <div style={{ width: '80%', height: 1, background: 'rgba(255,255,255,0.06)', marginTop: 4, borderRadius: 1 }} />
// //           </div>

// //           {/* ─── CPU TOWER ─── */}
// //           <div
// //             className="hidden sm:flex"
// //             style={{
// //               position: 'absolute',
// //               left: '-16%',
// //               top: '5%',
// //               transform: 'translateZ(-50px)',
// //               width: 64,
// //               height: 190,
// //               background: 'linear-gradient(160deg, #1c1728, #0e0b19)',
// //               borderRadius: 8,
// //               border: '1px solid rgba(255,255,255,0.06)',
// //               boxShadow: '0 8px 40px rgba(0,0,0,0.7), -4px 0 20px rgba(109,40,217,0.08)',
// //               flexDirection: 'column',
// //               alignItems: 'center',
// //               padding: '16px 8px',
// //               gap: 8,
// //             }}
// //           >
// //             {/* Power button */}
// //             <div style={{
// //               width: 20, height: 20, borderRadius: '50%',
// //               border: '1.5px solid rgba(139,92,246,0.5)',
// //               display: 'flex', alignItems: 'center', justifyContent: 'center',
// //             }}>
// //               <div className="cpu-led" style={{ width: 6, height: 6, borderRadius: '50%', background: '#a78bfa' }} />
// //             </div>

// //             {/* Drive bays */}
// //             <div style={{ width: '85%', height: 4, background: 'rgba(255,255,255,0.06)', borderRadius: 2 }} />
// //             <div style={{ width: '85%', height: 4, background: 'rgba(255,255,255,0.04)', borderRadius: 2 }} />

// //             {/* LED grid */}
// //             <div style={{ flex: 1, width: '85%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 3 }}>
// //               {Array.from({ length: 10 }).map((_, i) => (
// //                 <div
// //                   key={i}
// //                   className="cpu-led"
// //                   style={{
// //                     borderRadius: 2,
// //                     background: `rgba(${i % 2 === 0 ? '139,92,246' : '59,130,246'},0.4)`,
// //                     animationDelay: `${i * 0.13}s`,
// //                     height: '100%',
// //                     minHeight: 8,
// //                   }}
// //                 />
// //               ))}
// //             </div>

// //             {/* USB ports */}
// //             <div style={{ display: 'flex', flexDirection: 'column', gap: 4, width: '70%' }}>
// //               {[0, 1].map(i => (
// //                 <div key={i} style={{ height: 5, background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 2 }} />
// //               ))}
// //             </div>
// //           </div>

// //           {/* ─── FLOATING SKILL BADGES (depth layers) ─── */}
// //           {[
// //             { label: 'XGBoost', x: '-28%', y: '8%', z: 90, delay: '0s' },
// //             { label: 'FastAPI', x: '108%', y: '12%', z: 70, delay: '0.3s' },
// //             { label: 'React', x: '110%', y: '55%', z: 50, delay: '0.6s' },
// //             { label: 'MediaPipe', x: '-30%', y: '60%', z: 60, delay: '0.2s' },
// //           ].map(({ label, x, y, z, delay }) => (
// //             <div
// //               key={label}
// //               className="hidden sm:flex fade-in-up"
// //               style={{
// //                 position: 'absolute', left: x, top: y,
// //                 transform: `translateZ(${z}px)`,
// //                 animationDelay: delay,
// //                 background: 'rgba(13,9,25,0.85)',
// //                 border: '1px solid rgba(139,92,246,0.25)',
// //                 borderRadius: 6,
// //                 padding: '4px 10px',
// //                 backdropFilter: 'blur(12px)',
// //                 boxShadow: '0 4px 20px rgba(0,0,0,0.5), 0 0 12px rgba(139,92,246,0.1)',
// //                 display: 'flex', alignItems: 'center', gap: 5,
// //               }}
// //             >
// //               <div style={{ width: 5, height: 5, borderRadius: '50%', background: 'rgba(139,92,246,0.9)' }} />
// //               <span className="mono-font" style={{ fontSize: 9, color: 'rgba(167,139,250,0.9)', letterSpacing: '0.08em' }}>{label}</span>
// //             </div>
// //           ))}

// //           {/* ─── ACTION BUTTONS ─── */}
// //           <div style={{
// //             position: 'absolute',
// //             left: '50%',
// //             top: 'calc(100% + 110px)',
// //             transform: 'translateX(-50%) translateZ(80px)',
// //             display: 'flex',
// //             gap: 12,
// //             zIndex: 20,
// //           }}>
// //             <button
// //               onClick={() => handleScrollClick('#projects')}
// //               className="btn-primary hero-font"
// //               style={{
// //                 padding: '10px 24px',
// //                 color: 'white',
// //                 fontSize: 13,
// //                 fontWeight: 700,
// //                 borderRadius: 6,
// //                 cursor: 'pointer',
// //                 letterSpacing: '0.04em',
// //               }}
// //             >
// //               View Projects
// //             </button>
// //             <button
// //               onClick={() => handleScrollClick('#contact')}
// //               className="btn-ghost hero-font"
// //               style={{
// //                 padding: '10px 24px',
// //                 color: 'rgba(255,255,255,0.8)',
// //                 fontSize: 13,
// //                 fontWeight: 700,
// //                 borderRadius: 6,
// //                 cursor: 'pointer',
// //                 letterSpacing: '0.04em',
// //               }}
// //             >
// //               Get in Touch
// //             </button>
// //           </div>

// //         </div>
// //       </div>

// //       {/* ─── SCROLL INDICATOR ─── */}
// //       <div
// //         className="absolute bottom-8 left-1/2 z-30"
// //         style={{ transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, opacity: 1 - scrollProgress * 3 }}
// //       >
// //         <span className="mono-font" style={{ fontSize: 8, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Scroll</span>
// //         <div style={{
// //           width: 22, height: 36,
// //           border: '1.5px solid rgba(255,255,255,0.15)',
// //           borderRadius: 11,
// //           display: 'flex', justifyContent: 'center', paddingTop: 6,
// //         }}>
// //           <div
// //             className="scroll-dot"
// //             style={{ width: 3, height: 6, background: 'rgba(139,92,246,0.8)', borderRadius: 2 }}
// //           />
// //         </div>
// //       </div>

// //     </section>
// //   );
// // }


// import { useEffect, useRef, useState } from 'react';

// export default function Hero() {
//   const canvasRef = useRef(null);
//   const glowRef = useRef(null);
//   const sceneRef = useRef(null);
//   const mouseRef = useRef({ x: 0, y: 0 });
//   const smoothMouseRef = useRef({ x: 0, y: 0 });
//   const rafRef = useRef(null);

//   const [scrollY, setScrollY] = useState(0);
//   const [activeKey, setActiveKey] = useState(null);
//   const [typedText, setTypedText] = useState('');

//   const SUBTITLE = 'Data Scientist  •  ML Engineer  •  AI Architect';

//   // Typewriter effect
//   useEffect(() => {
//     let i = 0;
//     const t = setInterval(() => {
//       setTypedText(SUBTITLE.slice(0, i));
//       i++;
//       if (i > SUBTITLE.length) clearInterval(t);
//     }, 40);
//     return () => clearInterval(t);
//   }, []);

//   // Random keyboard animation
//   useEffect(() => {
//     const t = setInterval(() => {
//       setActiveKey(Math.floor(Math.random() * 48));
//       setTimeout(() => setActiveKey(null), 80);
//     }, 120);
//     return () => clearInterval(t);
//   }, []);

//   // Mouse tracking
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       mouseRef.current = { x: e.clientX, y: e.clientY };
//     };
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   // Animation Loop (Mouse smoothing + Scene transform)
//   useEffect(() => {
//     const loop = () => {
//       const target = mouseRef.current;
//       smoothMouseRef.current.x += (target.x - smoothMouseRef.current.x) * 0.08;
//       smoothMouseRef.current.y += (target.y - smoothMouseRef.current.y) * 0.08;

//       if (sceneRef.current) {
//         const cx = window.innerWidth / 2;
//         const cy = window.innerHeight / 2;
//         // Reduced rotation degrees for better readability
//         const rx = ((cy - smoothMouseRef.current.y) / cy) * 5; 
//         const ry = ((smoothMouseRef.current.x - cx) / cx) * 8;
//         sceneRef.current.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
//       }

//       if (glowRef.current) {
//         glowRef.current.style.left = smoothMouseRef.current.x + 'px';
//         glowRef.current.style.top = smoothMouseRef.current.y + 'px';
//       }

//       rafRef.current = requestAnimationFrame(loop);
//     };
//     rafRef.current = requestAnimationFrame(loop);
//     return () => cancelAnimationFrame(rafRef.current);
//   }, []);

//   // Scroll handler
//   useEffect(() => {
//     const handleScroll = () => setScrollY(window.scrollY);
//     window.addEventListener('scroll', handleScroll, { passive: true });
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Canvas Particle System
//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext('2d');

//     const resize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };
//     resize();
//     window.addEventListener('resize', resize);

//     const particles = Array.from({ length: 60 }, () => ({
//       x: Math.random() * canvas.width,
//       y: Math.random() * canvas.height,
//       r: Math.random() * 1.5 + 0.5,
//       vx: (Math.random() - 0.5) * 0.3,
//       vy: (Math.random() - 0.5) * 0.3,
//       alpha: Math.random() * 0.5 + 0.2,
//     }));

//     let animId;
//     const draw = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
      
//       // Draw connections
//       ctx.strokeStyle = 'rgba(139, 92, 246, 0.05)';
//       ctx.lineWidth = 1;
//       for (let i = 0; i < particles.length; i++) {
//         for (let j = i + 1; j < particles.length; j++) {
//           const dx = particles[i].x - particles[j].x;
//           const dy = particles[i].y - particles[j].y;
//           const d = Math.sqrt(dx * dx + dy * dy);
//           if (d < 150) {
//             ctx.beginPath();
//             ctx.moveTo(particles[i].x, particles[i].y);
//             ctx.lineTo(particles[j].x, particles[j].y);
//             ctx.stroke();
//           }
//         }
//       }

//       // Draw and update particles
//       particles.forEach(p => {
//         p.x += p.vx;
//         p.y += p.vy;
//         if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
//         if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

//         ctx.beginPath();
//         ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
//         ctx.fillStyle = `rgba(167, 139, 250, ${p.alpha})`;
//         ctx.fill();
//       });

//       animId = requestAnimationFrame(draw);
//     };
//     draw();
//     return () => {
//       cancelAnimationFrame(animId);
//       window.removeEventListener('resize', resize);
//     };
//   }, []);

//   const handleScrollClick = (href) => {
//     document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
//   };

//   const scrollProgress = Math.min(scrollY / window.innerHeight, 1);
//   const heroOpacity = 1 - scrollProgress * 1.5;

//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&family=JetBrains+Mono:wght@400;700&display=swap');

//         .hero-font { font-family: 'Inter', sans-serif; }
//         .mono-font { font-family: 'JetBrains Mono', monospace; }

//         /* Reduced Z-depths for flatter, cleaner look */
//         .scene-3d {
//           transform-style: preserve-3d;
//           will-change: transform;
//           transition: transform 0.15s ease-out;
//         }

//         .glow-cursor {
//           position: fixed;
//           pointer-events: none;
//           width: 600px;
//           height: 600px;
//           border-radius: 50%;
//           transform: translate(-50%, -50%);
//           background: radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 60%);
//           z-index: 2; /* Low z-index */
//         }

//         .monitor-frame {
//           background: linear-gradient(145deg, #1e1830 0%, #0e0a17 100%);
//           border: 4px solid #2a2342;
//           box-shadow: 
//             0 0 0 1px rgba(139,92,246,0.2),
//             0 20px 50px rgba(0,0,0,0.5),
//             0 0 100px rgba(109,40,217,0.15);
//         }

//         .screen-content {
//           background: linear-gradient(180deg, #08050f 0%, #05030c 100%);
//         }

//         .glitch-text { position: relative; }
//         .glitch-text::before, .glitch-text::after {
//           content: attr(data-text);
//           position: absolute;
//           left: 0; top: 0;
//           opacity: 0.8;
//         }
//         .glitch-text::before {
//           color: #ff00ff;
//           animation: glitch-anim 3s infinite linear alternate-reverse;
//           clip-path: polygon(0 0, 100% 0, 100% 35%, 0 35%);
//         }
//         .glitch-text::after {
//           color: #00ffff;
//           animation: glitch-anim 2s infinite linear alternate-reverse;
//           clip-path: polygon(0 65%, 100% 65%, 100% 100%, 0 100%);
//         }

//         @keyframes glitch-anim {
//           0% { transform: translateX(0); }
//           20% { transform: translateX(-2px); }
//           40% { transform: translateX(2px); }
//           60% { transform: translateX(-1px); }
//           80% { transform: translateX(1px); }
//           100% { transform: translateX(0); }
//         }

//         .btn-glow {
//           background: linear-gradient(135deg, #7c3aed, #5b21b6);
//           box-shadow: 0 0 20px rgba(124, 58, 237, 0.4);
//           transition: all 0.3s ease;
//         }
//         .btn-glow:hover {
//           transform: translateY(-3px);
//           box-shadow: 0 0 30px rgba(124, 58, 237, 0.6);
//         }

//         .btn-outline {
//           border: 1px solid rgba(255,255,255,0.2);
//           background: rgba(255,255,255,0.05);
//           transition: all 0.3s ease;
//         }
//         .btn-outline:hover {
//           background: rgba(139, 92, 246, 0.1);
//           border-color: rgba(139, 92, 246, 0.5);
//           transform: translateY(-3px);
//         }

//         .typing-cursor {
//           display: inline-block;
//           width: 2px;
//           height: 1em;
//           background: #a78bfa;
//           margin-left: 2px;
//           animation: blink 1s steps(1) infinite;
//         }
//         @keyframes blink { 50% { opacity: 0; } }

//         .stat-card {
//           background: rgba(255,255,255,0.03);
//           border: 1px solid rgba(255,255,255,0.08);
//           border-radius: 8px;
//           padding: 10px 14px;
//           text-align: center;
//           min-width: 70px;
//         }

//         .tag-pill {
//           background: rgba(139, 92, 246, 0.1);
//           border: 1px solid rgba(139, 92, 246, 0.3);
//           color: #c4b5fd;
//           padding: 3px 10px;
//           border-radius: 100px;
//           font-size: 11px;
//           font-weight: 500;
//         }

//         .scroll-indicator {
//           animation: bounce 2s infinite;
//         }
//         @keyframes bounce {
//           0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
//           40% { transform: translateY(-10px); }
//           60% { transform: translateY(-5px); }
//         }
//       `}</style>

//       {/* 1. Deep Gradient Background (Base Layer) */}
//       <div className="absolute inset-0 z-0" style={{ background: 'radial-gradient(ellipse at 50% 0%, #1a0b2e 0%, #050208 60%, #000000 100%)' }} />
      
//       {/* 2. Mesh Overlay */}
//       <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

//       {/* 3. Canvas Particles (Z-0) */}
//       <canvas ref={canvasRef} className="absolute inset-0 z-0" style={{ opacity: 0.6 }} />

//       {/* Cursor Glow (Z-1) */}
//       <div ref={glowRef} className="glow-cursor" />

//       {/* Main Content Container */}
//       <div
//         className="relative z-10 w-full flex items-center justify-center"
//         style={{
//           perspective: '1200px',
//           perspectiveOrigin: '50% 50%',
//           opacity: Math.max(heroOpacity, 0),
//           transition: 'opacity 0.1s linear'
//         }}
//       >
//         {/* 3D Scene Wrapper */}
//         <div ref={sceneRef} className="scene-3d relative" style={{ transformStyle: 'preserve-3d' }}>

//           {/* ─── MONITOR ─── */}
//           <div
//             className="relative"
//             style={{
//               width: 'clamp(380px, 75vw, 1000px)', // Bigger size
//               height: 'clamp(240px, 50vw, 620px)', // Adjusted aspect ratio
//               transform: 'translateZ(10px)', // Reduced depth
//               transformStyle: 'preserve-3d',
//             }}
//           >
//             <div className="monitor-frame w-full h-full rounded-2xl overflow-hidden flex flex-col">
              
//               {/* Browser Chrome */}
//               <div className="flex items-center h-8 px-4 border-b border-white/10 bg-black/30">
//                 <div className="flex gap-2">
//                   <div className="w-3 h-3 rounded-full bg-red-500/80" />
//                   <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
//                   <div className="w-3 h-3 rounded-full bg-green-500/80" />
//                 </div>
//                 <div className="flex-1 flex justify-center">
//                   <div className="bg-white/5 rounded-md px-4 py-0.5 text-xs text-white/30 mono-font">
//                     muhammadhassanshahid.dev
//                   </div>
//                 </div>
//               </div>

//               {/* Screen Content */}
//               <div className="screen-content flex-1 flex flex-col items-center justify-center p-8 relative overflow-hidden">
                
//                 {/* Inner Glow Overlay */}
//                 <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 50% 30%, rgba(139,92,246,0.08) 0%, transparent 70%)' }} />

//                 {/* Status Badge */}
//                 <div className="flex items-center gap-2 mb-6 px-4 py-1.5 bg-green-500/10 border border-green-500/30 rounded-full">
//                   <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
//                   <span className="mono-font text-xs text-green-400 font-semibold tracking-wider">AVAILABLE FOR PROJECTS</span>
//                 </div>

//                 {/* Profile Info */}
//                 <div className="flex flex-col items-center gap-5 text-center">
                  
//                   {/* Avatar */}
//                   <div className="w-20 h-20 rounded-full bg-gradient-to-br from-violet-500 to-blue-600 flex items-center justify-center text-3xl font-bold text-white shadow-lg shadow-violet-500/30 ring-4 ring-black/20">
//                     H
//                   </div>

//                   {/* Name */}
//                   <div>
//                     <h1 className="hero-font text-5xl md:text-6xl font-extrabold text-white leading-tight glitch-text" data-text="Muhammad Hassan">
//                       Muhammad Hassan
//                     </h1>
//                     <div className="h-1 w-24 bg-violet-500 mx-auto mt-2 rounded-full" />
//                   </div>

//                   {/* Subtitle Typewriter */}
//                   <div className="mono-font text-sm md:text-base text-violet-300 h-6 flex items-center">
//                     <span>{typedText}</span>
//                     <span className="typing-cursor" />
//                   </div>

//                   {/* Stats Row */}
//                   <div className="flex gap-4 mt-2">
//                     {[
//                       { num: '5+', label: 'Years Exp' },
//                       { num: '50+', label: 'Projects' },
//                       { num: '99%', label: 'Success' }
//                     ].map((s) => (
//                       <div key={s.label} className="stat-card">
//                         <div className="text-lg font-bold text-white hero-font">{s.num}</div>
//                         <div className="text-[10px] text-white/40 mono-font uppercase tracking-wider">{s.label}</div>
//                       </div>
//                     ))}
//                   </div>

//                   {/* Tech Stack */}
//                   <div className="flex flex-wrap gap-2 justify-center mt-4">
//                     {['Python', 'TensorFlow', 'React', 'FastAPI', 'AWS'].map(tech => (
//                       <span key={tech} className="tag-pill mono-font">{tech}</span>
//                     ))}
//                   </div>

//                   {/* CTA Buttons */}
//                   <div className="flex gap-4 mt-6">
//                     <button onClick={() => handleScrollClick('#projects')} className="btn-glow px-8 py-3 rounded-lg text-white font-semibold text-sm hero-font tracking-wide">
//                       View Projects
//                     </button>
//                     <button onClick={() => handleScrollClick('#contact')} className="btn-outline px-8 py-3 rounded-lg text-white/80 font-semibold text-sm hero-font tracking-wide">
//                       Contact Me
//                     </button>
//                   </div>

//                 </div>
//               </div>
//             </div>

//             {/* Monitor Base Reflection */}
//             <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-4 bg-violet-500/10 blur-xl rounded-full" />
//           </div>

//           {/* ─── KEYBOARD (Reduced Z-Depth) ─── */}
//           <div
//             className="absolute left-1/2 -translate-x-1/2"
//             style={{
//               top: '100%',
//               marginTop: '20px',
//               width: 'clamp(260px, 50vw, 700px)',
//               height: 'clamp(60px, 10vw, 140px)',
//               background: 'linear-gradient(to bottom, #1a1625, #0c0a14)',
//               borderRadius: '8px',
//               border: '1px solid rgba(255,255,255,0.1)',
//               transform: `translateX(-50%) translateZ(-10px) rotateX(60deg)`, // Flatter depth
//               boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
//               display: 'grid',
//               gridTemplateColumns: 'repeat(14, 1fr)',
//               gridTemplateRows: 'repeat(4, 1fr)',
//               gap: '3px',
//               padding: '6px',
//             }}
//           >
//             {Array.from({ length: 56 }).map((_, i) => (
//               <div
//                 key={i}
//                 style={{
//                   background: activeKey === i ? 'rgba(167, 139, 250, 0.8)' : 'rgba(255,255,255,0.05)',
//                   borderRadius: '2px',
//                   transition: 'background 0.1s',
//                 }}
//               />
//             ))}
//           </div>

//           {/* ─── MOUSE (Reduced Z-Depth) ─── */}
//           <div
//             className="absolute"
//             style={{
//               right: '5%',
//               top: '100%',
//               marginTop: '30px',
//               width: 'clamp(26px, 3vw, 40px)',
//               height: 'clamp(42px, 5vw, 65px)',
//               background: 'linear-gradient(to bottom, #1a1625, #0c0a14)',
//               borderRadius: '20px',
//               border: '1px solid rgba(255,255,255,0.1)',
//               transform: 'translateZ(-10px) rotateX(45deg)', // Flatter depth
//               boxShadow: '0 5px 20px rgba(0,0,0,0.5)',
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'center',
//               paddingTop: '8px',
//             }}
//           >
//             <div style={{ width: '4px', height: '10px', background: 'rgba(167, 139, 250, 0.5)', borderRadius: '2px' }} />
//           </div>

//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <div 
//         className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10" 
//         style={{ opacity: Math.max(1 - scrollY / 200, 0) }}
//       >
//         <span className="mono-font text-[10px] text-white/30 uppercase tracking-widest">Scroll</span>
//         <div className="scroll-indicator w-5 h-8 border-2 border-white/20 rounded-full flex justify-center pt-1.5">
//           <div className="w-1 h-2 bg-white/40 rounded-full" />
//         </div>
//       </div>

//     </section>
//   );
// }