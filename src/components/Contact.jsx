import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { fadeIn, staggerContainer } from '../animations/motionVariants';

const InputField = ({ label, id, type = 'text', placeholder, rows }) => {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState('');

  const Component = rows ? 'textarea' : 'input';

  return (
    <div className="relative">
      <motion.label
        htmlFor={id}
        animate={{
          y: focused || value ? -26 : 0,
          x: focused || value ? -2 : 0,
          scale: focused || value ? 0.82 : 1,
          color: focused ? '#a78bfa' : 'rgba(156, 163, 175, 1)',
        }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="absolute left-4 top-3.5 text-sm pointer-events-none origin-left"
        style={{ transformOrigin: 'top left' }}
      >
        {label}
      </motion.label>
      <Component
        id={id}
        type={type}
        rows={rows}
        placeholder={focused ? placeholder : ''}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`w-full bg-dark-600/60 border rounded-xl px-4 pt-6 pb-3 text-white text-sm focus:outline-none transition-all duration-200 resize-none ${
          focused
            ? 'border-primary-500/60 shadow-[0_0_0_3px_rgba(139,92,246,0.12)]'
            : 'border-white/8 hover:border-white/15'
        }`}
      />
    </div>
  );
};

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
  };

  const contactItems = [
    {
      icon: <Mail size={18} className="text-primary-400" />,
      title: 'Email',
      value: 'ihsanhaneef@gmail.com',
      href: 'mailto:ihsanhaneef@gmail.com',
      color: 'primary',
    },
    {
      icon: <Phone size={18} className="text-green-400" />,
      title: 'Phone',
      value: '+91 9400442456',
      href: 'tel:+919400442456',
      color: 'green',
    },
    {
      icon: <MapPin size={18} className="text-purple-400" />,
      title: 'Location',
      value: 'Calicut, Kerala, India',
      href: null,
      color: 'purple',
    },
  ];

  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      {/* BG glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary-500/6 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={fadeIn('up')}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <span className="section-tag mb-5 inline-flex">Contact</span>
          <h2 className="heading-xl mt-4">
            Let's <span className="text-gradient">Work Together</span>
          </h2>
          <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto">
            Got a project idea? Evaluating a backend solution? Let's talk.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact info */}
          <motion.div
            variants={staggerContainer(0.15)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-2 space-y-4"
          >
            {contactItems.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeIn('right', i * 0.1)}
                whileHover={{ x: 6 }}
                transition={{ duration: 0.2 }}
                className="glass-card p-5 flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs text-gray-600 mb-1 font-medium uppercase tracking-wider">{item.title}</p>
                  {item.href ? (
                    <a href={item.href} className="text-gray-300 hover:text-primary-400 transition-colors text-sm">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-gray-300 text-sm">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Available badge */}
            <motion.div
              variants={fadeIn('up', 0.3)}
              className="glass-card p-5 text-center"
            >
              <div className="inline-flex items-center gap-2 text-sm text-green-400">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Currently open to new opportunities
              </div>
              <p className="text-xs text-gray-600 mt-2">Response time: within 24 hours</p>
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.form
            variants={fadeIn('left', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-3 glass-card p-8"
            onSubmit={handleSubmit}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full py-12 gap-4 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                >
                  <CheckCircle size={52} className="text-green-400" />
                </motion.div>
                <h3 className="text-xl font-bold text-white">Message Sent!</h3>
                <p className="text-gray-400">Thanks for reaching out. I'll get back to you soon.</p>
              </motion.div>
            ) : (
              <div className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <InputField label="Your Name" id="name" placeholder="John Doe" />
                  <InputField label="Your Email" id="email" type="email" placeholder="john@example.com" />
                </div>
                <InputField label="Subject" id="subject" placeholder="Project collaboration" />
                <InputField label="Your Message" id="message" placeholder="Tell me about your project..." rows={5} />

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, boxShadow: '0 0 25px rgba(139,92,246,0.4)' }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-xl bg-primary-600 hover:bg-primary-500 text-white font-semibold flex items-center justify-center gap-3 transition-all shadow-lg shadow-primary-500/20"
                >
                  Send Message
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <Send size={17} />
                  </motion.span>
                </motion.button>
              </div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
