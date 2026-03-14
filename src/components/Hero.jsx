import { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ArrowDown, Zap, Server, Globe } from 'lucide-react';

// ─── Character-by-character reveal animation ───────────────────────────────
const sentence = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.04, delayChildren: 0.3 },
  },
};

const letter = {
  hidden: { opacity: 0, y: 20, rotateX: -90 },
  visible: {
    opacity: 1, y: 0, rotateX: 0,
    transition: { type: 'spring', stiffness: 200, damping: 18 },
  },
};

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

// ─── Floating particles background ────────────────────────────────────────
const FloatingParticles = () => {
  const particles = Array.from({ length: 22 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 8 + 6,
    delay: Math.random() * 4,
  }));

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-primary-500/30"
          style={{ width: p.size, height: p.size, left: `${p.x}%`, top: `${p.y}%` }}
          animate={{
            y: [0, -40, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: p.duration,
            delay: p.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

// ─── Animated role switcher ────────────────────────────────────────────────
const roles = ['Backend Developer', 'API Architect', 'Laravel Expert', 'FastAPI Engineer'];

const RoleSwitcher = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % roles.length), 2800);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="h-12 md:h-14 overflow-hidden relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ y: 40, opacity: 0, filter: 'blur(6px)' }}
          animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
          exit={{ y: -40, opacity: 0, filter: 'blur(6px)' }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-5xl font-bold leading-tight"
          style={{
            background: 'linear-gradient(135deg, #a78bfa 0%, #8b5cf6 45%, #c084fc 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {roles[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

// ─── Spotlight Card (Enhanced) ────────────────────────────────────────────
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

  const handleMouseLeave = () => { mouseX.set(0); mouseY.set(0); };

  const [hovered, setHovered] = useState(false);

  const codeLines = [
    { c: 'text-primary-400', txt: 'class BackendEngineer {', indent: '' },
    { c: 'text-purple-300', txt: 'framework = "Laravel";', indent: 'pl-5' },
    { c: 'text-[#22d3ee]', txt: 'api_type = "FastAPI";', indent: 'pl-5' },
    { c: 'text-green-400', txt: 'build() → scalable_system()', indent: 'pl-5' },
    { c: 'text-yellow-300', txt: 'optimize(queries, perf)', indent: 'pl-5' },
    { c: 'text-gray-500', txt: '}', indent: '' },
  ];

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { handleMouseLeave(); setHovered(false); }}
      onMouseEnter={() => setHovered(true)}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 1000 }}
      initial={{ opacity: 0, scale: 0.85, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 1, type: 'spring', stiffness: 100 }}
      className="relative hidden lg:flex w-full aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 bg-dark-500/60 backdrop-blur-xl items-center justify-center shadow-2xl shadow-primary-900/30 cursor-none"
    >
      {/* Animated gradient border */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-3xl z-10"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ boxShadow: 'inset 0 0 0 1px rgba(139,92,246,0.5), 0 0 40px rgba(139,92,246,0.15)' }}
      />

      {/* Cursor spotlight */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-20 transition-opacity duration-300"
        style={{
          opacity: hovered ? 1 : 0,
          background: `radial-gradient(450px circle at ${mouseX.get() + 50}% ${mouseY.get() + 50}%, rgba(139, 92, 246, 0.15) 0%, transparent 70%)`,
        }}
      />

      {/* Header bar */}
      <div className="absolute top-0 inset-x-0 h-10 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2 z-10" style={{ transform: 'translateZ(20px)' }}>
        {['bg-red-400', 'bg-yellow-400', 'bg-green-400'].map((c, i) => (
          <div key={i} className={`w-2.5 h-2.5 rounded-full ${c} opacity-75`} />
        ))}
        <div className="flex-1 mx-3">
          <div className="bg-white/5 rounded-full h-4 w-40 max-w-full" />
        </div>
        <div className="text-[10px] text-gray-500 font-mono">portfolio.js</div>
      </div>

      {/* Code lines */}
      <div className="px-6 pt-12 pb-6 w-full h-full flex flex-col gap-3 z-10" style={{ transform: 'translateZ(30px)' }}>
        {codeLines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + i * 0.13, duration: 0.4 }}
            className={`font-mono text-sm ${line.c} ${line.indent}`}
          >
            <span className="text-gray-600 mr-3 select-none text-xs">{i + 1}</span>
            {line.txt}
            {i === 3 && (
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
          transition={{ delay: 1.8 }}
          className="mt-auto pt-4 border-t border-white/10 flex flex-wrap items-center gap-2"
        >
          {['Laravel', 'FastAPI', 'Node.js', 'Docker'].map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2 + i * 0.1 }}
              className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-mono"
              style={{
                background: 'rgba(139, 92, 246, 0.1)',
                border: '1px solid rgba(139, 92, 246, 0.25)',
                color: '#a78bfa',
              }}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-red-400' : i === 1 ? 'bg-[#22d3ee]' : i === 2 ? 'bg-green-400' : 'bg-blue-400'}`} />
              {tech}
            </motion.span>
          ))}
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
      <FloatingParticles />

      {/* Background orbs */}
      <motion.div
        className="pointer-events-none absolute w-[700px] h-[700px] rounded-full -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(139,92,246,0.14) 0%, transparent 70%)',
          x: useTransform(bgX, [0, window.innerWidth], [-80, 80]),
          y: useTransform(bgY, [0, window.innerHeight], [-80, 80]),
          top: '0%', left: '5%',
        }}
      />
      <motion.div
        className="pointer-events-none absolute w-[500px] h-[500px] rounded-full -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(192,132,252,0.10) 0%, transparent 70%)',
          x: useTransform(bgX, [0, window.innerWidth], [60, -60]),
          y: useTransform(bgY, [0, window.innerHeight], [60, -60]),
          bottom: '5%', right: '5%',
        }}
      />

      {/* Grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center w-full">
        {/* Text Side */}
        <div className="flex flex-col gap-6 text-center lg:text-left z-10">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center justify-center lg:justify-start"
          >
            <span className="section-tag">
              <motion.span
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                className="w-2 h-2 rounded-full bg-green-400 block"
              />
              Available for work
            </span>
          </motion.div>

          {/* Name */}
          <div className="space-y-2">
            <p className="text-gray-500 font-mono text-sm mb-2">
              <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                Hello, I am
              </motion.span>
            </p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
              <AnimatedText text="Ihsan Haneef P" className="block" />
            </h1>
            <RoleSwitcher />
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.6 }}
            className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            Specializing in scalable architectures, robust REST APIs, and high-performance systems with{' '}
            <span className="text-primary-400 font-medium">Laravel</span>,{' '}
            <span className="text-[#22d3ee] font-medium">FastAPI</span> &{' '}
            <span className="text-green-400 font-medium">Node.js</span>.
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
                whileHover={{ y: -5, color: '#a78bfa', boxShadow: '0 8px 24px rgba(139,92,246,0.25)' }}
                whileTap={{ scale: 0.93 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                className="w-11 h-11 rounded-full glass flex items-center justify-center text-gray-400 hover:border-primary-500/50 transition-colors"
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Right Side — 3-D spotlight card */}
        <SpotlightCard />
      </div>

      {/* Scroll hint */}
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
