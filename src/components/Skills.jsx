import { useRef } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../animations/motionVariants';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Backend Technologies',
      color: '#8b5cf6',
      skills: ['Laravel', 'Node.js', 'Express.js', 'FastAPI', 'Strapi'],
    },
    {
      title: 'Programming Languages',
      color: '#22d3ee',
      skills: ['PHP', 'Python', 'JavaScript', 'TypeScript'],
    },
    {
      title: 'Databases',
      color: '#34d399',
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'MSSQL', 'Redis'],
    },
    {
      title: 'Frontend',
      color: '#f472b6',
      skills: ['HTML', 'CSS', 'Bootstrap', 'React', 'Tailwind CSS'],
    },
    {
      title: 'Dev Tools & DevOps',
      color: '#fbbf24',
      skills: ['Git', 'GitHub', 'Bitbucket', 'Postman', 'Docker'],
    },
    {
      title: 'Core Concepts',
      color: '#a78bfa',
      skills: ['MVC Architecture', 'OOP', 'REST APIs', 'Database Design', 'Query Optimization'],
    },
  ];

  // Duplicate for seamless marquee
  const row1 = [...skillCategories.slice(0, 3), ...skillCategories.slice(0, 3)];
  const row2 = [...skillCategories.slice(3), ...skillCategories.slice(3)];

  return (
    <section id="skills" className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-900/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 mb-16">
        <motion.div
          variants={fadeIn('up')}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center"
        >
          <span className="section-tag mb-5 inline-flex">Expertise</span>
          <h2 className="heading-xl mt-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="mt-6 text-gray-500 max-w-2xl mx-auto text-lg">
            A comprehensive overview of my technical expertise, categorized by domain.
          </p>
        </motion.div>
      </div>

      {/* Carousel Row 1 */}
      <div className="relative overflow-hidden mb-6">
        <div className="flex gap-5 animate-marquee w-max">
          {row1.map((category, index) => (
            <SkillCard key={index} category={category} />
          ))}
        </div>
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-dark-600 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-dark-600 to-transparent z-10 pointer-events-none" />
      </div>

      {/* Carousel Row 2 (reverse) */}
      <div className="relative overflow-hidden">
        <div className="flex gap-5 animate-marquee-fast w-max" style={{ animationDirection: 'reverse' }}>
          {row2.map((category, index) => (
            <SkillCard key={index} category={category} />
          ))}
        </div>
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-dark-600 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-dark-600 to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
};

const SkillCard = ({ category }) => (
  <div
    className="flex-shrink-0 w-80 glass-card p-6 group hover:glass-card-hover cursor-default"
    style={{ '--card-color': category.color }}
  >
    {/* Category title with colored accent */}
    <div className="flex items-center gap-3 mb-5">
      <div
        className="w-2 h-6 rounded-full"
        style={{ background: category.color, boxShadow: `0 0 10px ${category.color}60` }}
      />
      <h3 className="text-base font-semibold text-white">{category.title}</h3>
    </div>

    <div className="flex flex-wrap gap-2">
      {category.skills.map((skill, sIndex) => (
        <motion.span
          key={sIndex}
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
          className="px-3 py-1.5 text-xs text-gray-300 bg-white/5 border border-white/8 rounded-full transition-all cursor-default"
          style={{
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = `${category.color}18`;
            e.currentTarget.style.borderColor = `${category.color}40`;
            e.currentTarget.style.color = category.color;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
            e.currentTarget.style.color = '#d1d5db';
          }}
        >
          {skill}
        </motion.span>
      ))}
    </div>
  </div>
);

export default Skills;
