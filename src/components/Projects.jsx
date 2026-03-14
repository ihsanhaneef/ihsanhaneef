import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Zap, Server, Globe, Database } from 'lucide-react';
import { fadeIn, staggerContainer, cardReveal } from '../animations/motionVariants';

const projects = [
  {
    title: 'FastAPI Task Manager',
    description: 'A high-performance async REST API built with FastAPI + PostgreSQL. Features JWT auth, background tasks, WebSockets, and OpenAPI docs.',
    tags: ['FastAPI', 'Python', 'PostgreSQL', 'JWT', 'Async'],
    icon: <Zap size={20} />,
    color: '#009688',
    gradient: 'from-[#009688]/20 to-primary-500/5',
    github: '#',
    live: '#',
  },
  {
    title: 'Laravel E-Commerce API',
    description: 'Full-featured e-commerce backend with Laravel, featuring product management, cart, orders, payments, and admin dashboard.',
    tags: ['Laravel', 'MySQL', 'Stripe', 'REST API', 'Redis'],
    icon: <Server size={20} />,
    color: '#FF2D20',
    gradient: 'from-red-500/15 to-primary-500/5',
    github: '#',
    live: '#',
  },
  {
    title: 'Microservices Platform',
    description: 'A containerized microservices architecture using Node.js, Docker, and NGINX. Services communicate via REST and message queues.',
    tags: ['Node.js', 'Docker', 'NGINX', 'MySQL', 'RabbitMQ'],
    icon: <Globe size={20} />,
    color: '#339933',
    gradient: 'from-green-500/15 to-primary-500/5',
    github: '#',
    live: '#',
  },
  {
    title: 'Multi-tenant SaaS Backend',
    description: 'A multi-tenant SaaS application with Laravel, featuring role-based authentication, team management, and subscription billing.',
    tags: ['Laravel', 'Sanctum', 'MSSQL', 'Stripe', 'Queue'],
    icon: <Database size={20} />,
    color: '#8b5cf6',
    gradient: 'from-primary-500/20 to-purple-500/5',
    github: '#',
    live: '#',
  },
];

const ProjectCard = ({ project, index, isActive, onClick }) => (
  <motion.div
    variants={cardReveal(index)}
    onClick={onClick}
    whileHover={{ y: -6 }}
    transition={{ type: 'spring', stiffness: 280, damping: 20 }}
    className={`glass-card p-6 cursor-pointer relative overflow-hidden transition-all duration-300 ${
      isActive ? 'ring-1 ring-primary-500/40' : ''
    }`}
  >
    {/* Gradient bg */}
    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`} />

    <div className="relative z-10">
      {/* Icon */}
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 text-white"
        style={{ background: `${project.color}20`, border: `1px solid ${project.color}30` }}
      >
        <span style={{ color: project.color }}>{project.icon}</span>
      </div>

      <h3 className="text-base font-bold text-white mb-2">{project.title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4">{project.description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tags.slice(0, 3).map((tag, i) => (
          <span key={i} className="tech-pill text-[10px]">{tag}</span>
        ))}
        {project.tags.length > 3 && (
          <span className="tech-pill text-[10px]">+{project.tags.length - 3}</span>
        )}
      </div>

      {/* Links */}
      <div className="flex gap-3">
        <a
          href={project.github}
          onClick={(e) => e.stopPropagation()}
          className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors"
        >
          <Github size={13} /> Code
        </a>
        <a
          href={project.live}
          onClick={(e) => e.stopPropagation()}
          className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-primary-400 transition-colors"
        >
          <ExternalLink size={13} /> Live Demo
        </a>
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="projects" className="py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={fadeIn('up')}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <span className="section-tag mb-5 inline-flex">Portfolio</span>
          <h2 className="heading-xl mt-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto">
            Real-world backend projects showcasing Laravel, FastAPI, and scalable architecture.
          </p>
        </motion.div>

        {/* Project Grid */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              isActive={activeIndex === index}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </motion.div>

        {/* Detail panel for active project */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 glass-card p-8 relative overflow-hidden"
          >
            <div
              className="absolute inset-0 opacity-5"
              style={{
                background: `radial-gradient(ellipse at 0% 50%, ${projects[activeIndex].color} 0%, transparent 60%)`,
              }}
            />
            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-start">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span style={{ color: projects[activeIndex].color }}>{projects[activeIndex].icon}</span>
                  <h3 className="text-2xl font-bold text-white">{projects[activeIndex].title}</h3>
                </div>
                <p className="text-gray-400 leading-relaxed">{projects[activeIndex].description}</p>
              </div>
              <div>
                <p className="text-xs text-gray-600 mb-3 uppercase tracking-widest font-medium">Technologies Used</p>
                <div className="flex flex-wrap gap-2">
                  {projects[activeIndex].tags.map((tag, i) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.06 }}
                      className="tech-pill"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
                <div className="flex gap-4 mt-6">
                  <motion.a
                    href={projects[activeIndex].github}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full glass border border-white/10 hover:border-white/25 text-white text-sm font-medium transition-colors"
                  >
                    <Github size={15} /> View Code
                  </motion.a>
                  <motion.a
                    href={projects[activeIndex].live}
                    whileHover={{ scale: 1.04, boxShadow: `0 0 20px ${projects[activeIndex].color}40` }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary-600 hover:bg-primary-500 text-white text-sm font-medium transition-colors"
                  >
                    <ExternalLink size={15} /> Live Demo
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
