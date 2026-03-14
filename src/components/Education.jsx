import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';
import { fadeIn, staggerContainer } from '../animations/motionVariants';

const Education = () => {
  const education = [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'University of Calicut',
      year: '2024',
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'University of Calicut',
      year: '2021',
    },
  ];

  const certifications = [
    {
      name: 'CCNA Enterprise',
      institution: 'Soften Technologies',
      year: '2022',
    },
    {
      name: 'Software Testing Fundamentals',
      institution: 'Great Learning',
      year: '2021',
    },
  ];

  return (
    <section id="education" className="py-24 relative bg-dark-500/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
           variants={fadeIn('up')}
           initial="hidden"
           whileInView="show"
           viewport={{ once: true, amount: 0.2 }}
           className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Education & <span className="text-primary-500">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-primary-500 rounded-full mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education Block */}
          <motion.div
             variants={staggerContainer(0.2)}
             initial="hidden"
             whileInView="show"
             viewport={{ once: true, amount: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="text-primary-500" size={32} />
              <h3 className="text-2xl font-bold text-white">Academic Journey</h3>
            </div>
            
            <div className="space-y-6">
              {education.map((item, index) => (
                <motion.div 
                  key={index} 
                  variants={fadeIn('left', index * 0.1)}
                  className="glass-card p-6 border-l-4 border-l-primary-500 hover:-translate-y-1 transition-transform"
                >
                  <h4 className="text-xl font-bold text-white mb-2">{item.degree}</h4>
                  <div className="flex justify-between items-center text-gray-400">
                    <span>{item.institution}</span>
                    <span className="font-mono bg-white/5 px-2 py-1 rounded text-sm">{item.year}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications Block */}
          <motion.div
             variants={staggerContainer(0.2, 0.2)}
             initial="hidden"
             whileInView="show"
             viewport={{ once: true, amount: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Award className="text-purple-400" size={32} />
              <h3 className="text-2xl font-bold text-white">Certifications</h3>
            </div>
            
            <div className="space-y-6">
              {certifications.map((item, index) => (
                <motion.div 
                  key={index}
                  variants={fadeIn('right', index * 0.1)}
                  className="glass-card p-6 border-l-4 border-l-purple-500 hover:-translate-y-1 transition-transform"
                >
                  <h4 className="text-xl font-bold text-white mb-2">{item.name}</h4>
                  <div className="flex justify-between items-center text-gray-400">
                    <span>{item.institution}</span>
                    <span className="font-mono bg-white/5 px-2 py-1 rounded text-sm">{item.year}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
