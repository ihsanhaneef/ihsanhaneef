import { motion } from 'framer-motion';
import { Server, Database, Code2, Cpu } from 'lucide-react';
import { fadeIn, staggerContainer } from '../animations/motionVariants';

const About = () => {
  const highlights = [
    {
      icon: <Code2 className="text-primary-400" size={24} />,
      title: 'Clean Code',
      desc: 'Writing maintainable, readable, and well-documented robust code.',
    },
    {
      icon: <Server className="text-primary-400" size={24} />,
      title: 'API Development',
      desc: 'Building secure and fast RESTful APIs for seamless integration.',
    },
    {
      icon: <Database className="text-primary-400" size={24} />,
      title: 'Scalable Architecture',
      desc: 'Designing database architectures that scale efficiently with load.',
    },
    {
      icon: <Cpu className="text-primary-400" size={24} />,
      title: 'Performance',
      desc: 'Optimizing database queries and backend logic for speed.',
    },
  ];

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={staggerContainer(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Text Content */}
          <div className="space-y-6">
            <motion.div variants={fadeIn('up')}>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                About <span className="text-primary-500">Me</span>
              </h2>
              <div className="w-20 h-1 bg-primary-500 rounded-full mb-8"></div>
            </motion.div>

            <motion.p variants={fadeIn('up')} className="text-gray-300 text-lg leading-relaxed">
              I am a passionate <strong className="text-white">Backend Developer</strong> with a Master's degree in Computer Applications. I specialize in crafting robust, scalable backend systems and APIs that power modern web applications.
            </motion.p>
            
            <motion.p variants={fadeIn('up')} className="text-gray-300 text-lg leading-relaxed">
              My approach focuses on clean architecture, performance optimization, and writing secure, maintainable code. With experience in Laravel and Node.js, I bridge the gap between complex business logic and efficient database management.
            </motion.p>

            <motion.div variants={fadeIn('up')} className="pt-4">
              <div className="flex gap-12 font-mono">
                <div>
                  <span className="block text-4xl font-bold text-white mb-1">2+</span>
                  <span className="text-sm text-gray-400">Years Experience</span>
                </div>
                <div>
                  <span className="block text-4xl font-bold text-white mb-1">15+</span>
                  <span className="text-sm text-gray-400">Projects Completed</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Highlights Grid */}
          <motion.div variants={fadeIn('left')} className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div key={index} className="glass-card p-6 hover:bg-white/5 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-primary-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
