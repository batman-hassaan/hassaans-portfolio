// import { useState } from 'react';
// import { personalInfo } from '../data/portfolioData';

// const socials = [
//   {
//     label: "GitHub",
//     handle: "@batman-hassaan",
//     href: personalInfo.socials.github,
//     icon: (
//       <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
//         <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
//       </svg>
//     ),
//   },
//   {
//     label: "LinkedIn",
//     handle: "hassaanshahid217",
//     href: personalInfo.socials.linkedin,
//     icon: (
//       <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
//         <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
//       </svg>
//     ),
//   },
//   {
//     label: "Twitter",
//     handle: "@hassaan_217",
//     href: personalInfo.socials.twitter,
//     icon: (
//       <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
//         <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
//       </svg>
//     ),
//   },
// ];

// export default function Contact() {
//   const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
//   const [sent, setSent] = useState(false);

//   const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const mailto = `mailto:${personalInfo.email}?subject=${encodeURIComponent(form.subject || 'Portfolio Contact')}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
//     window.location.href = mailto;
//     setSent(true);
//     setTimeout(() => setSent(false), 3000);
//   };

//   return (
//     <section id="contact" className="z-10 py-28 lg:py-36 relative overflow-hidden">
//       <div className="absolute inset-0 pointer-events-none"
//         style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 100%, rgba(109,40,217,0.12) 0%, transparent 60%)' }}
//       />
//       <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

//       <div className="max-w-7xl mx-auto px-6 lg:px-12">
//         <div className="reveal text-center mb-16 lg:mb-20">
//           <p className="section-num mb-3 justify-center">// 05 — CONTACT</p>
//           <h2 className="font-display font-bold leading-none" style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)' }}>
//             <span className="text-white">Let's Work</span>
//             <br />
//             <span className="gradient-text">Together</span>
//           </h2>
//           <div className="section-divider mx-auto mt-4" />
//           <p className="text-white/40 mt-6 max-w-lg mx-auto text-base">
//             I'm open to freelance projects, full-time opportunities, and exciting collaborations in data science, ML, and full-stack development.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
//           <div className="reveal">
//             <a href={`mailto:${personalInfo.email}`} className="block mb-10 group">
//               <p className="text-white/30 text-xs font-mono uppercase tracking-widest mb-2">Email me</p>
//               <p className="font-display font-bold text-2xl lg:text-3xl text-white group-hover:text-purple-300 transition-colors break-all">
//                 {personalInfo.email}
//               </p>
//             </a>

//             <div className="space-y-4 mb-10">
//               <div className="flex items-center gap-4 text-white/50">
//                 <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0">
//                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-purple-400">
//                     <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
//                     <circle cx="12" cy="10" r="3" />
//                   </svg>
//                 </div>
//                 <div>
//                   <p className="text-xs text-white/30 font-mono uppercase tracking-wider">Location</p>
//                   <p className="text-white/70 font-medium">{personalInfo.location}</p>
//                 </div>
//               </div>
//               <div className="flex items-center gap-4">
//                 <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
//                   <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
//                 </div>
//                 <div>
//                   <p className="text-xs text-white/30 font-mono uppercase tracking-wider">Status</p>
//                   <p className="text-emerald-400/80 font-medium text-sm">Available for new opportunities</p>
//                 </div>
//               </div>
//             </div>

//             <div>
//               <p className="text-xs text-white/30 font-mono uppercase tracking-widest mb-4">Find me on</p>
//               <div className="flex flex-wrap gap-3">
//                 {socials.map(s => (
//                   <a
//                     key={s.label}
//                     href={s.href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-2.5 glow-card px-4 py-3 text-sm text-white/60 hover:text-white font-medium"
//                   >
//                     <span className="text-purple-400">{s.icon}</span>
//                     <span className="text-xs font-mono">{s.handle}</span>
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div className="reveal">
//             <form onSubmit={handleSubmit} className="glow-card p-8 space-y-5">
//               <h3 className="font-display font-bold text-xl text-white mb-2">Send a message</h3>

//               <div className="grid sm:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-xs text-white/40 font-mono uppercase tracking-wider mb-2">Name</label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={form.name}
//                     onChange={handleChange}
//                     placeholder="Your name"
//                     required
//                     className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/25 text-sm focus:outline-none focus:border-purple-500/50 focus:bg-white/8 transition-all"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-xs text-white/40 font-mono uppercase tracking-wider mb-2">Email</label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={form.email}
//                     onChange={handleChange}
//                     placeholder="your@email.com"
//                     required
//                     className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/25 text-sm focus:outline-none focus:border-purple-500/50 focus:bg-white/8 transition-all"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-xs text-white/40 font-mono uppercase tracking-wider mb-2">Subject</label>
//                 <input
//                   type="text"
//                   name="subject"
//                   value={form.subject}
//                   onChange={handleChange}
//                   placeholder="What's this about?"
//                   className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/25 text-sm focus:outline-none focus:border-purple-500/50 transition-all"
//                 />
//               </div>

//               <div>
//                 <label className="block text-xs text-white/40 font-mono uppercase tracking-wider mb-2">Message</label>
//                 <textarea
//                   name="message"
//                   value={form.message}
//                   onChange={handleChange}
//                   placeholder="Tell me about your project..."
//                   required
//                   rows={5}
//                   className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/25 text-sm focus:outline-none focus:border-purple-500/50 transition-all resize-none"
//                 />
//               </div>

//               <button type="submit" className={`btn-primary w-full justify-center ${sent ? 'opacity-70' : ''}`}>
//                 {sent ? (
//                   <>
//                     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
//                       <polyline points="20 6 9 17 4 12" />
//                     </svg>
//                     Message Sent!
//                   </>
//                 ) : (
//                   <>
//                     Send Message
//                     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
//                       <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
//                     </svg>
//                   </>
//                 )}
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  
  const formRef = useRef(null);
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // --- OPTION 1: Mailto (Currently Active) ---
    const mailto = `mailto:${personalInfo.email}?subject=${encodeURIComponent(form.subject || 'Portfolio Contact')}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.location.href = mailto;
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1000);

    // --- OPTION 2: API Integration (Uncomment to use) ---
    /*
    try {
      const API_URL = import.meta.env.VITE_API_URL;
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!response.ok) throw new Error('Failed');
      setSubmitStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 4000);
    }
    */
  };

  // Social Links Data
  const socials = [
    { name: "GitHub", handle: "@batman-hassaan", href: personalInfo.socials.github, icon: <path d="M12 0c-6.626 0-12 5.373-12 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/> },
    { name: "LinkedIn", handle: "hassaanshahid217", href: personalInfo.socials.linkedin, icon: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/> },
    { name: "LeetCode", handle: "batman_hassaan", href: "https://leetcode.com/u/batman_hassaan/", icon: <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/> },
    { name: "Instagram", handle: "@hassaan_217", href: "https://instagram.com/hassaan_217", icon: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/> },
  ];

  // Contact Details Data - FIXED WRAPPING
  const contactDetails = [
    { icon: <><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></>, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></>, label: "Location", value: personalInfo.location, href: null },
    { icon: <><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></>, label: "Phone", value: "0314-2239812", href: "tel:+923142239812" }
  ];

  return (
    <section id="contact" className="relative py-28 lg:py-36 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="reveal text-center mb-20">
          <div className="flex items-center gap-4 mb-4 justify-center">
            <span className="w-8 h-px bg-purple-500" />
            <span className="font-mono text-purple-400 text-sm tracking-widest">// 05. CONTACT</span>
            <span className="w-8 h-px bg-purple-500" />
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight">
            <span style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'clamp(2rem,6vw,4rem)', margin:'0 0 14px', lineHeight:1.05, letterSpacing:'-0.03em' }} className="text-white">Let's Start a</span>
            <span style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'clamp(2rem,6vw,4rem)', margin:'0 0 14px', lineHeight:1.05, letterSpacing:'-0.03em' }}className="gradient-text"> Project Together</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto text-base">
            Have an idea? Let's turn it into reality. I'm currently available for freelance work and full-time positions.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Info & Socials */}
          <div className="lg:col-span-5 space-y-10 reveal">
            
            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactDetails.map((item, i) => (
                <a 
                  key={i}
                  href={item.href}
                  className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:border-purple-500/30 hover:bg-purple-500/5 transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-purple-400">{item.icon}</svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-mono uppercase tracking-wider">{item.label}</p>
                    <p className="text-white font-medium mt-0.5">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Status Indicator */}
            <div className="flex items-center gap-3 p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <p className="text-emerald-300 text-sm font-medium">
                Currently available for new opportunities
              </p>
            </div>

            {/* Social Links Grid */}
            <div>
              <p className="text-xs text-gray-500 font-mono uppercase tracking-widest mb-4">Find me on</p>
              <div className="grid grid-cols-2 gap-3">
                {socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg border border-white/5 bg-white/[0.02] hover:border-purple-500/30 transition-all group"
                  >
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">{s.icon}</svg>
                    <span className="text-xs text-gray-500 font-mono truncate group-hover:text-white transition-colors">{s.handle}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <motion.div 
            className="lg:col-span-7 reveal"
            ref={formRef}
            animate={controls}
          >
            <form onSubmit={handleSubmit} className="glow-card p-8 sm:p-10 relative overflow-hidden">
              {/* Decorative top line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
              
              <h3 className="font-display font-bold text-2xl text-white mb-8 flex items-center gap-3">
                <span className="text-purple-400">⟨</span> Send Message <span className="text-purple-400">⟩</span>
              </h3>

              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs text-gray-500 font-mono">// Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-purple-500/50 focus:bg-white/8 transition-all font-mono"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs text-gray-500 font-mono">// Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-purple-500/50 focus:bg-white/8 transition-all font-mono"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs text-gray-500 font-mono">// Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-purple-500/50 focus:bg-white/8 transition-all font-mono"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs text-gray-500 font-mono">// Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-purple-500/50 focus:bg-white/8 transition-all resize-none font-mono"
                    placeholder="Hi, I'd like to talk about..."
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="btn-primary w-full justify-center text-base py-4 disabled:opacity-50 relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      <>
                        Send Transmission
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-1 transition-transform">
                          <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                        </svg>
                      </>
                    )}
                  </span>
                </button>
              </div>

              {/* Success/Error Message */}
              <AnimatePresence>
                {submitStatus === 'success' && (
                  <motion.div
                    className="mt-6 p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-center text-sm"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                  >
                    ✓ Message prepared! Check your email client to send.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}