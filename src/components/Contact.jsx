import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { fadeIn, staggerContainer } from '../animations/motionVariants';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
           variants={fadeIn('up')}
           initial="hidden"
           whileInView="show"
           viewport={{ once: true, amount: 0.2 }}
           className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="text-primary-500">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-primary-500 rounded-full mx-auto"></div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            Discuss a project, evaluate an idea, or simply say hello.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Information */}
          <motion.div
             variants={staggerContainer(0.2)}
             initial="hidden"
             whileInView="show"
             viewport={{ once: true, amount: 0.2 }}
             className="lg:col-span-2 space-y-6"
          >
            <motion.div variants={fadeIn('right')} className="glass-card p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary-500/10 flex items-center justify-center shrink-0">
                <Mail className="text-primary-400" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">Email</h4>
                <a href="mailto:ihsanhaneef@gmail.com" className="text-gray-400 hover:text-primary-400 transition-colors">
                  ihsanhaneef@gmail.com
                </a>
              </div>
            </motion.div>

            <motion.div variants={fadeIn('right')} className="glass-card p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary-500/10 flex items-center justify-center shrink-0">
                <Phone className="text-primary-400" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">Phone</h4>
                <a href="tel:+919400442456" className="text-gray-400 hover:text-primary-400 transition-colors">
                  +91 9400442456
                </a>
              </div>
            </motion.div>

            <motion.div variants={fadeIn('right')} className="glass-card p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary-500/10 flex items-center justify-center shrink-0">
                <MapPin className="text-primary-400" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">Location</h4>
                <p className="text-gray-400">
                  Calicut, India
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            variants={fadeIn('left', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-3 glass-card p-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-400">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="John Doe"
                  className="w-full bg-dark-600/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-400">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="john@example.com"
                  className="w-full bg-dark-600/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors"
                />
              </div>
            </div>
            
            <div className="space-y-2 mb-8">
              <label htmlFor="message" className="text-sm font-medium text-gray-400">Your Message</label>
              <textarea 
                id="message" 
                rows="5" 
                placeholder="How can I help you?"
                className="w-full bg-dark-600/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors resize-none"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full py-4 rounded-lg bg-primary-600 hover:bg-primary-500 text-white font-medium flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary-500/20 hover:shadow-primary-500/40"
            >
              Send Message
              <Send size={18} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
