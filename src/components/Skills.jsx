import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../animations/motionVariants';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Backend Technologies',
      skills: ['Laravel', 'Node.js', 'Express.js', 'FastAPI', 'Strapi'],
    },
    {
      title: 'Programming Languages',
      skills: ['PHP', 'JavaScript', 'MySQL'],
    },
    {
      title: 'Databases',
      skills: ['MySQL', 'MongoDB', 'MSSQL'],
    },
    {
      title: 'Frontend',
      skills: ['HTML', 'CSS', 'Bootstrap', 'React', 'Tailwind CSS'],
    },
    {
      title: 'Dev Tools',
      skills: ['Git', 'GitHub', 'Bitbucket', 'Postman', 'Docker'],
    },
    {
      title: 'Core Concepts',
      skills: ['MVC Architecture', 'OOP', 'REST APIs', 'Database Design', 'Query Optimization'],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-dark-500/30 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
           variants={fadeIn('up')}
           initial="hidden"
           whileInView="show"
           viewport={{ once: true, amount: 0.2 }}
           className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="text-primary-500">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-primary-500 rounded-full mx-auto"></div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise, categorized by domain.
          </p>
        </motion.div>

        <motion.div
           variants={staggerContainer(0.1)}
           initial="hidden"
           whileInView="show"
           viewport={{ once: true, amount: 0.1 }}
           className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div 
               key={index}
               variants={fadeIn('up', index * 0.1)}
               className="glass-card p-8 group hover:-translate-y-2 transition-transform duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-primary-500/20 flex items-center justify-center text-primary-400 text-sm font-mono">
                  {`0${index + 1}`}
                </span>
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, sIndex) => (
                  <span 
                    key={sIndex}
                    className="px-4 py-2 text-sm text-gray-300 bg-white/5 border border-white/10 rounded-full hover:bg-primary-500/20 hover:text-primary-300 hover:border-primary-500/30 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
