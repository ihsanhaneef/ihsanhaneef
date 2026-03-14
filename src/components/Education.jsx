import { motion } from 'framer-motion';
import { GraduationCap, Award, MapPin, Calendar } from 'lucide-react';
import { fadeIn, staggerContainer, cardReveal } from '../animations/motionVariants';

const Education = () => {
  const education = [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'University of Calicut',
      location: 'Kerala, India',
      year: '2024',
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'University of Calicut',
      location: 'Kerala, India',
      year: '2021',
    },
  ];

  const certifications = [
    {
      name: 'CCNA Enterprise',
      institution: 'Soften Technologies',
      year: '2022',
      badge: '🏅',
    },
    {
      name: 'Software Testing Fundamentals',
      institution: 'Great Learning',
      year: '2021',
      badge: '🎓',
    },
  ];

  return (
    <section id="education" className="py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-900/4 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={fadeIn('up')}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <span className="section-tag mb-5 inline-flex">Background</span>
          <h2 className="heading-xl mt-4">
            Education & <span className="text-gradient">Certifications</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            variants={staggerContainer(0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center">
                <GraduationCap className="text-primary-400" size={20} />
              </div>
              <h3 className="text-xl font-bold text-white">Academic Journey</h3>
            </div>

            <div className="space-y-4">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  variants={cardReveal(index)}
                  whileHover={{ x: 6, transition: { duration: 0.2 } }}
                  className="glass-card p-6 relative overflow-hidden group"
                  style={{ borderLeft: '3px solid rgba(139, 92, 246, 0.5)' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <h4 className="text-base font-bold text-white mb-2 leading-snug">{item.degree}</h4>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-500">
                      <span className="text-gray-400">{item.institution}</span>
                      <span className="flex items-center gap-1">
                        <MapPin size={11} />
                        {item.location}
                      </span>
                      <span className="flex items-center gap-1 font-mono text-xs bg-white/5 px-2 py-0.5 rounded-full">
                        <Calendar size={10} />
                        {item.year}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            variants={staggerContainer(0.2, 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                <Award className="text-purple-400" size={20} />
              </div>
              <h3 className="text-xl font-bold text-white">Certifications</h3>
            </div>

            <div className="space-y-4">
              {certifications.map((item, index) => (
                <motion.div
                  key={index}
                  variants={cardReveal(index)}
                  whileHover={{ x: 6, transition: { duration: 0.2 } }}
                  className="glass-card p-6 relative overflow-hidden group"
                  style={{ borderLeft: '3px solid rgba(192, 132, 252, 0.5)' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10 flex items-start gap-4">
                    <div className="text-2xl">{item.badge}</div>
                    <div className="flex-1">
                      <h4 className="text-base font-bold text-white mb-1">{item.name}</h4>
                      <div className="flex flex-wrap items-center gap-x-3 text-sm text-gray-500">
                        <span className="text-gray-400">{item.institution}</span>
                        <span className="font-mono text-xs bg-white/5 px-2 py-0.5 rounded-full">{item.year}</span>
                      </div>
                    </div>
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
