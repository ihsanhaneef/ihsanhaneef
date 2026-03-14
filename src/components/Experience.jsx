import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Calendar, ChevronDown, ExternalLink } from 'lucide-react';
import { fadeIn, containerReveal, cardReveal } from '../animations/motionVariants';

const experiences = [
  {
    role: 'Back-End Developer',
    company: 'Aufait Technologies',
    location: 'Calicut, India',
    period: 'Mar 2025 – Present',
    type: 'Full-time',
    tags: ['Laravel', 'FastAPI', 'REST API', 'MySQL', 'Docker'],
    description: [
      'Built scalable Laravel & FastAPI applications and backend architectures.',
      'Developed robust RESTful APIs consumed by mobile and web frontends.',
      'Integrated backend systems seamlessly with modern frontend frameworks.',
      'Customized WordPress solutions to meet specific client requirements.',
      'Optimized database queries and indexing for enhanced performance.',
    ],
  },
  {
    role: 'Back-End Developer Intern',
    company: 'Aufait Technologies',
    location: 'Calicut, India',
    period: 'Sep 2024 – Feb 2025',
    type: 'Internship',
    tags: ['Laravel', 'Node.js', 'SQL', 'Git', 'REST API'],
    description: [
      'Developed core Laravel backend systems from scratch.',
      'Implemented modular and secure REST APIs with robust auth.',
      'Analyzed and optimized SQL query performance.',
      'Followed strict clean coding standards and collaborative git workflows.',
    ],
  },
];

const ExperienceCard = ({ exp, index }) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <motion.div
      variants={cardReveal(index)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      className="relative pl-8 md:pl-14"
    >
      {/* Timeline dot with pulse */}
      <div className="absolute -left-[11px] top-6 flex items-center justify-center">
        <div className="w-5 h-5 rounded-full bg-dark-600 border-[3px] border-primary-500 z-10 relative">
          <div className="absolute inset-0 rounded-full border border-primary-500/50 animate-ping opacity-30" />
        </div>
      </div>

      {/* Card */}
      <motion.div
        className="glass-card overflow-hidden group"
        whileHover={{ borderColor: 'rgba(139, 92, 246, 0.25)' }}
      >
        {/* Card header */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full text-left p-6 md:p-8"
        >
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <Briefcase size={16} className="text-primary-400" />
                <h3 className="text-xl font-bold text-white">{exp.role}</h3>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-sm text-gray-400 mt-1">
                <span className="text-primary-400 font-medium">{exp.company}</span>
                <span className="text-gray-600">·</span>
                <span>{exp.location}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <span
                className="text-xs px-3 py-1 rounded-full font-mono"
                style={{
                  background: 'rgba(139, 92, 246, 0.1)',
                  border: '1px solid rgba(139, 92, 246, 0.2)',
                  color: '#a78bfa',
                }}
              >
                {exp.type}
              </span>
              <span className="flex items-center gap-1.5 text-xs font-mono text-gray-500 bg-white/5 py-1.5 px-3 rounded-full">
                <Calendar size={11} />
                {exp.period}
              </span>
              <motion.span
                animate={{ rotate: expanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-gray-500"
              >
                <ChevronDown size={16} />
              </motion.span>
            </div>
          </div>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {exp.tags.map((tag, i) => (
              <span key={i} className="tech-pill">{tag}</span>
            ))}
          </div>
        </button>

        {/* Expandable body */}
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="px-6 md:px-8 pb-6 md:pb-8 border-t border-white/5">
                <ul className="space-y-3 pt-5">
                  {exp.description.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06 }}
                      className="flex items-start gap-3 text-gray-400 text-sm"
                    >
                      <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-primary-500" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-28 relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          variants={fadeIn('up')}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <span className="section-tag mb-5 inline-flex">Work History</span>
          <h2 className="heading-xl mt-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
        </motion.div>

        <div className="relative border-l-2 border-primary-500/20 ml-3 space-y-10 pb-8">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
