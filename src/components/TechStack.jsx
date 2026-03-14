import { useRef } from 'react';
import { motion, useAnimationFrame, useMotionValue } from 'framer-motion';
import { 
  SiLaravel, SiNodedotjs, SiDocker, SiStrapi, 
  SiFastapi, SiMysql, SiMongodb, 
  SiGit, SiWordpress, SiPhp, SiPython, SiReact, SiTailwindcss
} from 'react-icons/si';
import { FaDatabase } from 'react-icons/fa';
import { fadeIn } from '../animations/motionVariants';

const technologies = [
  { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
  { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'PHP', icon: SiPhp, color: '#777BB4' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'Strapi', icon: SiStrapi, color: '#2E7EEA' },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'MSSQL', icon: FaDatabase, color: '#CC2927' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'WordPress', icon: SiWordpress, color: '#21759B' },
  { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
];

// Infinite sliding row
const InfiniteLogoRow = ({ items, speed = 30, reverse = false }) => {
  const x = useMotionValue(0);
  const containerRef = useRef(null);
  
  useAnimationFrame((_, delta) => {
    const dir = reverse ? -1 : 1;
    const move = (delta / 1000) * speed * dir;
    let newX = x.get() - move;
    const totalWidth = items.length * 176; // 160px card + 16px gap ~= 176
    if (!reverse && newX < -totalWidth) newX = 0;
    if (reverse && newX > 0) newX = -totalWidth;
    x.set(newX);
  });

  const allItems = [...items, ...items];

  return (
    <div className="overflow-hidden relative" ref={containerRef}>
      <motion.div
        style={{ x }}
        className="flex gap-4 w-max"
      >
        {allItems.map((tech, i) => (
          <TechCard key={i} tech={tech} />
        ))}
      </motion.div>
    </div>
  );
};

const TechCard = ({ tech }) => {
  const Icon = tech.icon;
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="flex-shrink-0 w-40 glass rounded-2xl flex flex-col items-center justify-center gap-3 py-5 px-4 group cursor-default relative overflow-hidden"
      style={{ border: '1px solid rgba(255,255,255,0.06)' }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${tech.color}40`;
        e.currentTarget.style.boxShadow = `0 0 20px ${tech.color}20`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
        e.currentTarget.style.boxShadow = '';
      }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"
        style={{ backgroundColor: tech.color }}
      />
      <Icon
        size={36}
        className="transition-all duration-300 relative z-10"
        style={{ color: 'rgba(255,255,255,0.35)', transition: 'color 0.3s' }}
        onMouseEnter={(e) => { e.currentTarget.style.color = tech.color; }}
        onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.35)'; }}
      />
      <span className="text-xs font-medium text-gray-500 group-hover:text-gray-300 transition-colors z-10">
        {tech.name}
      </span>
    </motion.div>
  );
};

const TechStack = () => {
  const half = Math.ceil(technologies.length / 2);
  const row1 = technologies.slice(0, half);
  const row2 = technologies.slice(half);

  return (
    <section className="py-28 relative overflow-hidden" id="techstack">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-900/5 via-transparent to-primary-900/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 mb-16">
        <motion.div
          variants={fadeIn('up')}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center"
        >
          <span className="section-tag mb-5 inline-flex">My Stack</span>
          <h2 className="heading-xl mt-4">
            Core <span className="text-gradient">Technologies</span>
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            Tools and frameworks I leverage to build production-grade systems.
          </p>
        </motion.div>
      </div>

      <div className="space-y-5">
        <div className="relative">
          <InfiniteLogoRow items={row1} speed={28} />
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-dark-600 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-dark-600 to-transparent z-10 pointer-events-none" />
        </div>
        <div className="relative">
          <InfiniteLogoRow items={row2} speed={22} reverse />
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-dark-600 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-dark-600 to-transparent z-10 pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default TechStack;
