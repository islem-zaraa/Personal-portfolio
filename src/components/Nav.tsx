import React from 'react';
import { Github, Linkedin, Mail, Menu } from 'lucide-react';

const Nav = () => {
  return (
    <nav className="fixed top-6 right-6 z-50">
      <div className="backdrop-blur-md bg-black/30 rounded-full p-4 border border-white/10 shadow-lg hover:shadow-[#FF512F]/20 transition-all duration-300">
        <div className="flex items-center gap-4">
          <a href="#contact" className="nav-icon">
            <Mail className="w-5 h-5 hover:text-[#FF512F] transition-all duration-300 hover:scale-110" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="nav-icon">
            <Github className="w-5 h-5 hover:text-[#FF512F] transition-all duration-300 hover:scale-110" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="nav-icon">
            <Linkedin className="w-5 h-5 hover:text-[#FF512F] transition-all duration-300 hover:scale-110" />
          </a>
          <button className="lg:hidden">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;