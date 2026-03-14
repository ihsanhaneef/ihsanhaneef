import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import { fadeIn, staggerContainer } from '../animations/motionVariants';

const Experience = () => {
  const experiences = [
    {
      role: 'Back-End Developer',
      company: 'Aufait Technologies — Calicut',
      period: 'Mar 2025 – Present',
      description: [
        'Built scalable Laravel applications and backend architectures.',
        'Developed robust RESTful APIs for mobile and web consumption.',
        'Integrated backend systems seamlessly with modern frontend frameworks.',
        'Customized WordPress solutions to meet specific client requirements.',
        'Optimized database queries for enhanced application performance.',
      ],
    },
    {
      role: 'Back-End Developer Intern',
      company: 'Aufait Technologies — Calicut',
      period: 'Sep 2024 – Feb 2025',
      description: [
        'Worked on developing core Laravel backend systems.',
        'Implemented modular and secure REST APIs.',
        'Analyzed and optimized SQL query performance.',
        'Followed strict clean coding standards and collaborative git workflows.',
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
           variants={fadeIn('up')}
           initial="hidden"
           whileInView="show"
           viewport={{ once: true, amount: 0.2 }}
           className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional <span className="text-primary-500">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-primary-500 rounded-full mx-auto"></div>
        </motion.div>

        <div className="relative border-l-2 border-primary-500/30 ml-3 md:ml-6 space-y-12 pb-8">
          {experiences.map((exp, index) => (
            <motion.div
               key={index}
               variants={fadeIn('right', index * 0.2)}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true, amount: 0.5 }}
               className="relative pl-8 md:pl-12"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-dark-600 border-4 border-primary-500"></div>
              
              <div className="glass-card p-6 md:p-8 relative group hover:border-primary-500/50 transition-colors">
                {/* Glowing edge effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>
                
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6 relative z-10">
                  <div>
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                       <Briefcase size={20} className="text-primary-400 hidden sm:block" />
                       {exp.role}
                    </h3>
                    <div className="text-lg text-primary-400 font-medium mt-1">{exp.company}</div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm font-mono text-gray-400 bg-white/5 py-1.5 px-3 rounded-full shrink-0 h-fit">
                    <Calendar size={14} />
                    {exp.period}
                  </div>
                </div>

                <ul className="space-y-3 text-gray-300 relative z-10">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-primary-400 mt-1.5 shrink-0 block w-1.5 h-1.5 rounded-full bg-primary-500"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
