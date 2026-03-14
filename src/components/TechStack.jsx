import { motion } from 'framer-motion';
import { 
  SiLaravel, SiNodedotjs, SiDocker, SiStrapi, 
  SiFastapi, SiMysql, SiMongodb, 
  SiGit, SiWordpress 
} from 'react-icons/si';
import { FaDatabase } from 'react-icons/fa';
import { fadeIn, staggerContainer } from '../animations/motionVariants';

const TechStack = () => {
  const technologies = [
    { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    { name: 'Docker', icon: SiDocker, color: '#2496ED' },
    { name: 'Strapi', icon: SiStrapi, color: '#2E7EEA' },
    { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
    { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'MSSQL', icon: FaDatabase, color: '#CC2927' },
    { name: 'Git', icon: SiGit, color: '#F05032' },
    { name: 'WordPress', icon: SiWordpress, color: '#21759B' },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-primary-900/5 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
           variants={fadeIn('up')}
           initial="hidden"
           whileInView="show"
           viewport={{ once: true, amount: 0.2 }}
           className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Core <span className="text-primary-500">Technologies</span>
          </h2>
          <div className="w-24 h-1 bg-primary-500 rounded-full mx-auto"></div>
        </motion.div>

        <motion.div
           variants={staggerContainer(0.05)}
           initial="hidden"
           whileInView="show"
           viewport={{ once: true, amount: 0.2 }}
           className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={fadeIn('up', index * 0.05)}
              className="glass p-6 rounded-2xl flex flex-col items-center justify-center gap-4 group hover:bg-white/5 transition-all cursor-pointer relative overflow-hidden h-32"
            >
              {/* Hover glow background */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
                style={{ backgroundColor: tech.color }}
              ></div>
              
              <tech.icon 
                className="text-4xl text-gray-400 group-hover:text-white transition-colors duration-300 z-10" 
                style={{ '--hover-color': tech.color }}
              />
              
              <span className="font-medium text-gray-300 group-hover:text-white transition-colors z-10">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
