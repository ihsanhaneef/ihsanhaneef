import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp, Heart } from 'lucide-react';
import { SiLaravel, SiFastapi, SiReact } from 'react-icons/si';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socials = [
    { href: 'https://github.com', icon: Github, label: 'GitHub' },
    { href: 'https://linkedin.com', icon: Linkedin, label: 'LinkedIn' },
    { href: 'mailto:ihsanhaneef@gmail.com', icon: Mail, label: 'Email' },
  ];

  const builtWith = [
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
    { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
  ];

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative pt-16 pb-8 border-t border-white/5 overflow-hidden">
      {/* Background ambient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary-900/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Top section */}
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <a href="#home" className="text-2xl font-bold tracking-tighter">
              Ihsan<span className="text-primary-500">.</span>
            </a>
            <p className="text-gray-500 text-sm mt-3 leading-relaxed max-w-xs">
              Backend Developer specializing in Laravel, FastAPI, and scalable system design.
            </p>
            <div className="flex gap-3 mt-5">
              {socials.map(({ href, icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  whileHover={{ y: -4, color: '#a78bfa' }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                  className="w-9 h-9 rounded-full glass flex items-center justify-center text-gray-500 hover:text-primary-400 transition-colors"
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="text-xs font-semibold text-gray-600 uppercase tracking-widest mb-4">Navigation</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-primary-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-primary-500 transition-all duration-300 group-hover:w-4" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech stack used */}
          <div>
            <h4 className="text-xs font-semibold text-gray-600 uppercase tracking-widest mb-4">Built With</h4>
            <div className="flex flex-col gap-2.5">
              {builtWith.map(({ name, icon: Icon, color }) => (
                <div key={name} className="flex items-center gap-3">
                  <Icon size={16} style={{ color }} />
                  <span className="text-sm text-gray-500">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600 flex items-center gap-1.5">
            © {currentYear} Ihsan Haneef P. Made with
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
              className="inline-block"
            >
              <Heart size={12} className="text-red-500 fill-red-500" />
            </motion.span>
            All rights reserved.
          </p>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3, boxShadow: '0 8px 20px rgba(139,92,246,0.3)' }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-2 text-xs text-gray-500 hover:text-primary-400 transition-colors glass px-4 py-2 rounded-full"
          >
            <ArrowUp size={13} />
            Back to top
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
