// import { useState, useEffect } from 'react';

// const navLinks = [
//   { href: '#about', label: 'About' },
//   { href: '#skills', label: 'Skills' },
//   { href: '#projects', label: 'Projects' },
//   { href: '#certificates', label: 'Certificates' },
//   { href: '#contact', label: 'Contact' },
// ];

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [hidden, setHidden] = useState(false);
//   const [lastY, setLastY] = useState(0);
//   const [mobileOpen, setMobileOpen] = useState(false);

//   useEffect(() => {
//     const onScroll = () => {
//       const y = window.scrollY;
//       setScrolled(y > 40);
//       setHidden(y > lastY && y > 120);
//       setLastY(y);
//     };
//     window.addEventListener('scroll', onScroll, { passive: true });
//     return () => window.removeEventListener('scroll', onScroll);
//   }, [lastY]);

//   const handleNav = (e, href) => {
//     e.preventDefault();
//     setMobileOpen(false);
//     document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
//   };

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
//         hidden ? '-translate-y-full' : 'translate-y-0'
//       } ${scrolled ? 'bg-[#0a0612]/90 backdrop-blur-xl border-b border-purple-500/20' : ''}`}
//     >
//       <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-3 sm:py-5 flex items-center justify-between">
//         <a
//           href="#"
//           onClick={e => handleNav(e, '#')}
//           className="font-display font-bold text-lg sm:text-xl tracking-tight group"
//         >
//           <span className="gradient-text">MHS</span>
//           <span className="text-purple-400/50 ml-0.5 sm:ml-1 text-xs sm:text-sm font-mono group-hover:text-purple-400 transition-colors">
//             .dev
//           </span>
//         </a>

//         <div className="hidden md:flex items-center gap-6 lg:gap-8">
//           {navLinks.map(link => (
//             <a
//               key={link.href}
//               href={link.href}
//               onClick={e => handleNav(e, link.href)}
//               className="text-xs lg:text-sm font-medium text-white/60 hover:text-white transition-colors relative group"
//             >
//               {link.label}
//               <span className="absolute -bottom-1 left-0 w-0 h-px bg-purple-400 group-hover:w-full transition-all duration-300" />
//             </a>
//           ))}
//           <a
//             href="/resume.pdf"
//             download
//             className="btn-primary text-xs py-2 px-4 sm:py-2.5 sm:px-5"
//           >
//             📄 Resume
//           </a>
//         </div>

//         <button
//           className="md:hidden w-7 h-7 flex flex-col justify-center items-center gap-1.5"
//           onClick={() => setMobileOpen(!mobileOpen)}
//           aria-label="Toggle menu"
//         >
//           <span className={`block w-5 h-px bg-white transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
//           <span className={`block w-5 h-px bg-white transition-all duration-300 ${mobileOpen ? 'opacity-0 w-0' : ''}`} />
//           <span className={`block w-5 h-px bg-white transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
//         </button>
//       </nav>

//       <div className={`md:hidden transition-all duration-300 overflow-hidden ${mobileOpen ? 'max-h-96' : 'max-h-0'}`}>
//         <div className="bg-[#0a0612]/95 backdrop-blur-xl border-t border-purple-500/20 px-4 sm:px-6 py-5 flex flex-col gap-4">
//           {navLinks.map(link => (
//             <a
//               key={link.href}
//               href={link.href}
//               onClick={e => handleNav(e, link.href)}
//               className="text-white/70 hover:text-white font-medium text-sm transition-colors"
//             >
//               {link.label}
//             </a>
//           ))}
//           <a href="/resume.pdf" download className="btn-primary text-xs py-2.5 text-center">
//             📄 Resume
//           </a>
//         </div>
//       </div>
//     </header>
//   );
// }


import { useState, useEffect } from 'react';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#certificates', label: 'Certificates' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <nav
            className={`relative flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-full transition-all duration-500 ${
              scrolled
                ? 'bg-[#0a0612]/80 backdrop-blur-xl border border-white/10 shadow-[0_0_30px_-10px_rgba(139,92,246,0.2)]'
                : 'bg-transparent border border-transparent'
            }`}
          >
            {/* Logo Section */}
            <a
              href="#"
              onClick={(e) => handleNav(e, '#hero')}
              className="relative z-10 flex items-center gap-2 group"
            >
              <div className="relative w-9 h-9 rounded-lg bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/50 transition-all duration-300 group-hover:rotate-6">
                <span className="text-white font-bold text-sm font-mono">M</span>
              </div>
              <div className="hidden sm:block overflow-hidden">
                <span className="block text-white font-bold text-lg tracking-tight transition-all duration-300 group-hover:tracking-wider">
                  Hassan
                  <span className="text-purple-400">.dev</span>
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNav(e, link.href)}
                  className="relative px-4 py-2 text-sm font-medium text-gray-400 transition-all duration-300 rounded-lg group overflow-hidden"
                >
                  {/* Hover Background Glow */}
                  <span className="absolute inset-0 bg-purple-500/0 group-hover:bg-purple-500/10 rounded-lg transition-all duration-300" />
                  
                  {/* Text */}
                  <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                    {link.label}
                  </span>

                  {/* Center-out Underline Animation */}
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-purple-400 rounded-full group-hover:w-1/2 transition-all duration-300" />
                  <span className="absolute bottom-1 right-1/2 translate-x-1/2 w-0 h-0.5 bg-purple-400 rounded-full group-hover:w-1/2 transition-all duration-300" />
                </a>
              ))}
            </div>

            {/* Right Side CTA */}
            <div className="flex items-center gap-3 relative z-10">
              {/* Rotating Gradient Border Button */}
              <a
                href="/hassaan%20shahid%20resume.pdf"
                download="Hassaan-Shahid-Resume.pdf"
                className="hidden sm:flex items-center gap-2 px-1 py-1 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 bg-[length:200%_200%] animate-border-spin hover:bg-right transition-all duration-500 group"
              >
                {/* Inner Content to hide background */}
                <span className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0a0612] group-hover:bg-transparent transition-colors duration-300 text-white text-sm font-semibold">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:animate-bounce">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                  </svg>
                  Resume
                </span>
              </a>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden flex items-center justify-center w-10 h-10 rounded-full border border-white/10 hover:bg-white/5 transition-colors group"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                <div className="w-4 h-4 flex flex-col justify-center items-center gap-1.5">
                  <span className={`block w-4 h-px bg-white transition-all duration-300 origin-center ${mobileOpen ? 'rotate-45 translate-y-[3px]' : ''}`} />
                  <span className={`block w-4 h-px bg-white transition-all duration-300 ${mobileOpen ? 'opacity-0 scale-0' : ''}`} />
                  <span className={`block w-4 h-px bg-white transition-all duration-300 origin-center ${mobileOpen ? '-rotate-45 -translate-y-[3px]' : ''}`} />
                </div>
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-[#05020a]/90 backdrop-blur-xl" onClick={() => setMobileOpen(false)} />

        {/* Menu Content */}
        <div className="relative h-full flex flex-col items-center justify-center gap-8">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNav(e, link.href)}
              className="text-3xl font-bold text-white/70 hover:text-white transition-all duration-300 transform hover:scale-110"
              style={{ transitionDelay: mobileOpen ? `${i * 0.1}s` : '0s' }}
            >
              {link.label}
            </a>
          ))}
          
          <a
            href="/hassaan%20shahid%20resume.pdf"
            download="Hassaan-Shahid-Resume.pdf"
            className="mt-8 flex items-center gap-2 px-8 py-3 rounded-full bg-purple-600 text-white font-semibold shadow-lg shadow-purple-500/30"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
            </svg>
            Download Resume
          </a>
        </div>
      </div>
    </>
  );
}