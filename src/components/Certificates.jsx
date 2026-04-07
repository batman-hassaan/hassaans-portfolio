import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { certifications } from '../data/portfolioData';

// ─── helpers ────────────────────────────────────────────────────────────────
const initials = (str) =>
  str
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0])
    .join('');

const catMeta = {
  'Data Science': {
    gradient: 'from-violet-600 to-indigo-600',
    text: 'text-indigo-300',
    border: 'border-indigo-500/30',
    bg: 'bg-indigo-500/10',
    glow: 'rgba(99, 102, 241, 0.15)'
  },
  'Development': {
    gradient: 'from-cyan-600 to-teal-500',
    text: 'text-cyan-300',
    border: 'border-cyan-500/30',
    bg: 'bg-cyan-500/10',
    glow: 'rgba(6, 182, 212, 0.15)'
  },
  'AI': {
    gradient: 'from-fuchsia-600 to-pink-500',
    text: 'text-pink-300',
    border: 'border-pink-500/30',
    bg: 'bg-pink-500/10',
    glow: 'rgba(236, 72, 153, 0.15)'
  },
  'Productivity': {
    gradient: 'from-amber-500 to-orange-500',
    text: 'text-amber-300',
    border: 'border-amber-500/30',
    bg: 'bg-amber-500/10',
    glow: 'rgba(245, 158, 11, 0.15)'
  }
};

const getCatMeta = (cat) => catMeta[cat] || catMeta['Data Science'];

// ─── sub-components ─────────────────────────────────────────────────────────
function IssuerBadge({ issuer, category }) {
  const meta = getCatMeta(category);
  return (
    <div className={`relative w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center font-display font-extrabold text-sm tracking-tight bg-white/5 border border-white/10`}>
      <span className={`bg-gradient-to-br ${meta.gradient} bg-clip-text text-transparent`}>
        {initials(issuer)}
      </span>
      <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${meta.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
    </div>
  );
}

function CertCard({ cert, index }) {
  const meta = getCatMeta(cert.category);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.05, type: 'spring', stiffness: 100 }}
      className="group relative"
    >
      {/* Ambient Glow Effect */}
      <div
        className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur-xl"
        style={{ background: meta.glow }}
      />

      <div className={`relative h-full bg-[#0a0a10] border border-white/[0.07] rounded-2xl overflow-hidden transition-all duration-300 group-hover:border-white/20 group-hover:shadow-2xl`}>

        {/* Top Gradient Accent Line */}
        <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${meta.gradient} opacity-80`} />

        <div className="p-6">
          {/* Header */}
          <div className="flex items-start justify-between gap-4 mb-6">
            <div className="flex items-center gap-4">
              <IssuerBadge issuer={cert.issuer} category={cert.category} />
              <div>
                <p className="text-white/80 text-sm font-semibold tracking-wide">
                  {cert.issuer}
                </p>
                <p className="text-white/40 text-xs font-mono mt-1 tracking-wider">
                  Issued {cert.date}
                </p>
              </div>
            </div>
          </div>

          {/* Title */}
          <h3
            className="text-white font-bold text-lg leading-snug mb-5 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            {cert.title}
          </h3>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {cert.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className={`px-3 py-1 text-[10px] rounded-full border ${meta.border} ${meta.text} ${meta.bg} font-mono tracking-wider uppercase`}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-white/[0.05]">
            <div className="flex items-center gap-2 text-emerald-400">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <span className="text-[10px] font-mono tracking-[.12em] uppercase">
                Verified
              </span>
            </div>

            <button className="text-[11px] text-white/40 font-mono tracking-[.08em] uppercase flex items-center gap-1.5 hover:text-white transition-colors group/btn">
              Show Credential
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5 transition-transform duration-200"
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── main component ──────────────────────────────────────────────────────────
export default function Certificates() {
  const [selected, setSelected] = useState('All');
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const categories = certifications?.length
    ? ['All', ...new Set(certifications.map((c) => c.category))]
    : ['All'];

  const filtered =
    selected === 'All'
      ? certifications
      : certifications.filter((c) => c.category === selected);

  const stats = [
    { label: 'Certifications', value: certifications.length, icon: '📜' },
    { label: 'Top Institutions', value: '6+', icon: '🏛️' },
    { label: 'Skills Mastered', value: '25+', icon: '⚡' },
    { label: 'Learning Hours', value: '200+', icon: '⏱️' },
  ];

  return (
    <>
      {/* Font Import */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Inter:wght@300;400;500;600&display=swap');`}</style>

      <section
        id="certificates"
        className="py-32 relative overflow-hidden bg-[#050508]"
      >
        {/* ── Enhanced Background ── */}
        {/* Ambient Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

        {/* Dot Pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(ellipse 80% 50% at 50% 50%, black 40%, transparent 100%)',
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginBottom: 24 }}>
            <div style={{ width: 60, height: 1, background: 'linear-gradient(90deg, transparent, rgba(192,132,252,0.5))' }} />
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, color: '#c084fc', letterSpacing: '2px' }}>// 04. Certificates</span>
            <div style={{ width: 60, height: 1, background: 'linear-gradient(90deg, rgba(192,132,252,0.5), transparent)' }} />
          </div>

          {/* Header */}
          <motion.div
            ref={ref}
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/5"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.1 }}
            >
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
              <span className="text-purple-300 text-xs font-mono tracking-[0.2em] uppercase">
                Professional Credentials
              </span>
            </motion.div>

            <h2
              className="font-extrabold text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.1] tracking-[-0.03em] mb-6"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              <span className="text-white">Verified</span>{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400">
                  Certifications
                </span>
                <span className="absolute -inset-1 bg-purple-500/20 blur-2xl filter opacity-50" aria-hidden="true" />
              </span>
            </h2>

            <p className="text-white/40 text-base max-w-2xl mx-auto leading-relaxed">
              A curated collection of professional certifications demonstrating expertise in cutting-edge technologies and methodologies.
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelected(cat)}
                className={`px-5 py-2 text-xs font-semibold tracking-widest uppercase rounded-full transition-all duration-300 ${selected === cat
                    ? 'bg-white text-black shadow-lg shadow-white/20'
                    : 'bg-white/5 text-white/50 border border-white/10 hover:bg-white/10 hover:text-white hover:border-white/20'
                  }`}
              >
                {cat === 'All' ? 'All Certificates' : cat}
              </button>
            ))}
          </motion.div>

          {/* Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((cert, i) => (
                <CertCard key={cert.title} cert={cert} index={i} />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Stats Section - Redesigned */}
          <motion.div
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="group relative bg-white/[0.02] border border-white/[0.05] rounded-xl p-6 text-center hover:bg-white/[0.04] hover:border-purple-500/20 transition-all duration-300"
              >
                <div className="text-3xl mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold text-white mb-1" style={{ fontFamily: "'Syne', sans-serif" }}>
                  {stat.value}
                </div>
                <div className="text-[11px] font-mono text-white/40 tracking-wider uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </section>
    </>
  );
}