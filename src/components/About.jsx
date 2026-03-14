import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Server, Database, Code2, Cpu } from 'lucide-react';
import { fadeIn, staggerContainer, cardReveal, containerReveal } from '../animations/motionVariants';

// Animated counter
const Counter = ({ target, suffix = '' }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <span ref={ref} className="block text-4xl md:text-5xl font-bold text-white mb-1">
      {inView ? (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {target}{suffix}
        </motion.span>
      ) : '0'}
    </span>
  );
};

const About = () => {
  const highlights = [
    {
      icon: <Code2 className="text-primary-400" size={22} />,
      title: 'Clean Code',
      desc: 'Writing maintainable, readable, and well-documented robust code.',
      gradient: 'from-primary-500/20 to-purple-500/5',
    },
    {
      icon: <Server className="text-[#22d3ee]" size={22} />,
      title: 'API Development',
      desc: 'Building secure, fast RESTful & FastAPI endpoints for seamless integration.',
      gradient: 'from-[#22d3ee]/20 to-primary-500/5',
    },
    {
      icon: <Database className="text-green-400" size={22} />,
      title: 'Scalable Architecture',
      desc: 'Designing database architectures that scale efficiently with load.',
      gradient: 'from-green-500/20 to-primary-500/5',
    },
    {
      icon: <Cpu className="text-yellow-400" size={22} />,
      title: 'Performance',
      desc: 'Optimizing database queries and backend logic for blazing speed.',
      gradient: 'from-yellow-500/20 to-primary-500/5',
    },
  ];

  return (
    <section id="about" className="py-28 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={staggerContainer(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid lg:grid-cols-2 gap-20 items-center"
        >
          {/* Text Content */}
          <div className="space-y-8">
            <motion.div variants={fadeIn('up')}>
              <span className="section-tag mb-5 inline-flex">About Me</span>
              <h2 className="heading-xl mt-4">
                Passionate about<br />
                <span className="text-gradient">backend excellence</span>
              </h2>
              <motion.div
                variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1, transition: { duration: 0.8, delay: 0.3 } } }}
                style={{ originX: 0 }}
                className="w-20 h-1 bg-primary-500 rounded-full mt-6"
              />
            </motion.div>

            <motion.p variants={fadeIn('up')} className="text-gray-400 text-lg leading-relaxed">
              I am a passionate <strong className="text-white">Backend Developer</strong> with a Master's degree in Computer Applications. I specialize in crafting robust, scalable backend systems and APIs that power modern web applications.
            </motion.p>

            <motion.p variants={fadeIn('up')} className="text-gray-400 text-lg leading-relaxed">
              My approach focuses on clean architecture, performance optimization, and writing secure, maintainable code. With experience in <span className="text-primary-400 font-medium">Laravel</span>, <span className="text-[#22d3ee] font-medium">FastAPI</span>, and <span className="text-green-400 font-medium">Node.js</span>, I bridge complex business logic with efficient database management.
            </motion.p>

            {/* Stats */}
            <motion.div variants={fadeIn('up')} className="grid grid-cols-3 gap-6 pt-2">
              {[
                { value: '2', suffix: '+', label: 'Years Experience' },
                { value: '15', suffix: '+', label: 'Projects Completed' },
                { value: '10', suffix: '+', label: 'Technologies' },
              ].map((stat, i) => (
                <div key={i} className="text-center p-4 rounded-2xl gradient-border" style={{ background: 'rgba(17,24,39,0.6)' }}>
                  <Counter target={stat.value} suffix={stat.suffix} />
                  <span className="text-xs text-gray-500 font-medium">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Highlights Grid */}
          <motion.div variants={containerReveal} className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                variants={cardReveal(index)}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="glass-card p-6 group cursor-default relative overflow-hidden"
              >
                {/* Gradient bg */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.12, rotate: 5 }}
                    className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center mb-4 transition-transform"
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="text-base font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
