import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ArrowDown } from 'lucide-react';

// ─── Character-by-character reveal animation ───────────────────────────────
const sentence = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.3,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 20, rotateX: -90 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { 
      type: 'spring', 
      stiffness: 200, 
      damping: 18,
    },
  },
};

// ─── Animated text with reveal ────────────────────────────────────────────
const AnimatedText = ({ text, className }) => (
  <motion.span
    variants={sentence}
    initial="hidden"
    animate="visible"
    aria-label={text}
    className={`inline-flex flex-wrap justify-center lg:justify-start perspective-[600px] ${className}`}
  >
    {text.split('').map((char, i) => (
      <motion.span 
        key={i} 
        variants={letter} 
        className="inline-block"
        style={{ transformOrigin: 'top center' }}
      >
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    ))}
  </motion.span>
);

// ─── Cursor spotlight card ─────────────────────────────────────────────────
const SpotlightCard = () => {
  const cardRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 200, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 200, damping: 30 });

  const rotateX = useTransform(springY, [-150, 150], [12, -12]);
  const rotateY = useTransform(springX, [-150, 150], [-12, 12]);

  const handleMouseMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Spotlight position in percent
  const spotW = useTransform(springX, [-150, 150], [10, 90]);
  const spotH = useTransform(springY, [-150, 150], [10, 90]);

  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { handleMouseLeave(); setHovered(false); }}
      onMouseEnter={() => setHovered(true)}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 1000 }}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, duration: 1, type: 'spring', stiffness: 100 }}
      className="relative hidden lg:flex w-full aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 bg-dark-500/50 backdrop-blur-xl items-center justify-center shadow-2xl shadow-primary-900/30 cursor-none"
    >
      {/* Cursor spotlight gradient */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-20 transition-opacity"
        style={{
          opacity: hovered ? 1 : 0,
          background: `radial-gradient(400px circle at ${spotW.get()}% ${spotH.get()}%, rgba(139, 92, 246, 0.18) 0%, transparent 70%)`,
        }}
      />

      {/* Animated border glow */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-3xl z-10"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          boxShadow: 'inset 0 0 0 1px rgba(139,92,246,0.5)',
        }}
      />

      {/* Header bar decoration */}
      <div className="absolute top-0 inset-x-0 h-10 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2 z-10" style={{ transform: 'translateZ(20px)' }}>
        {['bg-red-400','bg-yellow-400','bg-green-400'].map((c, i) => (
          <div key={i} className={`w-3 h-3 rounded-full ${c} opacity-70`} />
        ))}
        <div className="flex-1 mx-3">
          <div className="bg-white/5 rounded-full h-5 w-48 max-w-full" />
        </div>
      </div>

      {/* Code lines decoration */}
      <div className="px-6 pt-12 pb-6 w-full h-full flex flex-col gap-3 z-10" style={{ transform: 'translateZ(30px)' }}>
        {[
          { w: 'w-3/4', c: 'text-primary-400', txt: 'class BackendDeveloper {' },
          { w: 'w-1/2', c: 'text-purple-300', txt: '  build(api, db, infra) {', pad: 'pl-4' },
          { w: 'w-5/6', c: 'text-green-400', txt: '    return scalable.system()', pad: 'pl-8' },
          { w: 'w-1/3', c: 'text-purple-300', txt: '  }', pad: 'pl-4' },
          { w: 'w-2/3', c: 'text-yellow-300', txt: '  optimize(queries, performance)' },
          { w: 'w-1/4', c: 'text-gray-500', txt: '}' },
        ].map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + i * 0.12, duration: 0.4 }}
            className={`font-mono text-sm ${line.c} ${line.pad || ''}`}
          >
            {line.txt}
            {i === 2 && (
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ repeat: Infinity, duration: 1 }}
                className="inline-block w-2 h-4 bg-primary-400 ml-0.5 align-middle"
              />
            )}
          </motion.div>
        ))}

        {/* Status bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="mt-auto pt-3 border-t border-white/10 flex items-center gap-3"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs text-gray-400 font-mono">Laravel · Node.js · REST API · Docker</span>
        </motion.div>
      </div>
    </motion.div>
  );
};

// ─── Hero Section ─────────────────────────────────────────────────────────
const Hero = () => {
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const bgX = useSpring(mouseX, { stiffness: 40, damping: 30 });
  const bgY = useSpring(mouseY, { stiffness: 40, damping: 30 });

  const handleMouseMove = (e) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  return (
    <section
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden"
    >
      {/* ── Background orbs (mouse-reactive) ─── */}
      <motion.div
        className="pointer-events-none absolute w-[600px] h-[600px] rounded-full -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 70%)',
          x: useTransform(bgX, [0, window.innerWidth], [-60, 60]),
          y: useTransform(bgY, [0, window.innerHeight], [-60, 60]),
          top: '5%',
          left: '10%',
        }}
      />
      <motion.div
        className="pointer-events-none absolute w-[500px] h-[500px] rounded-full -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(168,85,247,0.14) 0%, transparent 70%)',
          x: useTransform(bgX, [0, window.innerWidth], [60, -60]),
          y: useTransform(bgY, [0, window.innerHeight], [60, -60]),
          bottom: '10%',
          right: '5%',
        }}
      />

      {/* ── Subtle grid pattern ─── */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center w-full">
        {/* ── Text Side ─── */}
        <div className="flex flex-col gap-6 text-center lg:text-left z-10">

          {/* Animated badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center justify-center lg:justify-start"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-400 text-sm font-medium">
              <motion.span
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                className="w-2 h-2 rounded-full bg-primary-400 block"
              />
              Available for work
            </span>
          </motion.div>

          {/* Name — character reveal */}
          <div className="space-y-2">
            <p className="text-gray-400 font-mono text-sm mb-2">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Hello, I am
              </motion.span>
            </p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
              <AnimatedText text="Ihsan Haneef P" className="block" />
            </h1>

            {/* Gradient role text — delayed reveal */}
            <motion.div
              initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
              animate={{ opacity: 1, clipPath: 'inset(0 0% 0 0)' }}
              transition={{ delay: 1.4, duration: 0.8, ease: 'easeOut' }}
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight"
            >
              Backend Developer
            </motion.div>
          </div>

          {/* Description — fade in */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.6 }}
            className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            Specializing in building scalable architectures, robust REST APIs, and high-performance backend systems with{' '}
            <span className="text-primary-400 font-medium">Laravel</span> and{' '}
            <span className="text-primary-400 font-medium">Node.js</span>.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.0, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(139,92,246,0.5)' }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3.5 rounded-full bg-primary-600 hover:bg-primary-500 text-white font-semibold transition-colors shadow-lg shadow-primary-500/25"
            >
              Contact Me
            </motion.a>
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3.5 rounded-full glass hover:bg-white/10 text-white font-semibold flex items-center gap-2 transition-colors"
            >
              <Download size={18} />
              Resume
            </motion.a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 0.6 }}
            className="flex items-center justify-center lg:justify-start gap-4 pt-4"
          >
            {[
              { href: 'https://github.com', icon: Github, label: 'GitHub' },
              { href: 'https://linkedin.com', icon: Linkedin, label: 'LinkedIn' },
              { href: 'mailto:ihsanhaneef@gmail.com', icon: Mail, label: 'Email' },
            ].map(({ href, icon: Icon, label }, i) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                aria-label={label}
                whileHover={{ y: -4, color: '#a78bfa' }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                className="w-11 h-11 rounded-full glass flex items-center justify-center text-gray-400 hover:border-primary-500/50 transition-colors"
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* ── Right Side — 3-D spotlight card ─── */}
        <SpotlightCard />
      </div>

      {/* ── Scroll hint ─── */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
      >
        <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ArrowDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
