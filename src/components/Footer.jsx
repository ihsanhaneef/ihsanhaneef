import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-xl font-bold tracking-tighter">
          Ihsan<span className="text-primary-500">.</span>
        </div>
        
        <p className="text-gray-400 text-sm">
          &copy; {currentYear} Ihsan Haneef P. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full">
            <Linkedin size={20} />
          </a>
          <a href="mailto:ihsanhaneef@gmail.com" className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
