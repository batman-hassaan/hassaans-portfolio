import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useCursor, useScrollProgress, useReveal } from './hooks/useAnimations';

export default function App() {
  useCursor();
  useScrollProgress();
  useReveal();

  useEffect(() => {
    const timeout = setTimeout(() => {
      const elements = document.querySelectorAll('.reveal');
      const observer = new IntersectionObserver(
        entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
        { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
      );
      elements.forEach(el => observer.observe(el));
      return () => observer.disconnect();
    }, 200);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="noise">
      <div className="cursor" />
      <div className="cursor-dot" />
      <div className="scroll-progress" />

      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}