import React from 'react';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';
import GradientText from './ui/GradientText';

const navigationLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#work' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: Github, href: 'https://github.com/islem-zaraa', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/islem-zaraa', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:islemzaraapro@gmail.com', label: 'Email' },
];

const skillsList = [
  'Network Security',
  'Cloud Infrastructure',
  'Web Development',
  'CI/CD Pipelines',
  'React & Next.js',
  'TypeScript',
  'Python',
  'Cybersecurity',
  'System Design'
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="pt-12 pb-6 bg-[#050505] relative">
      {/* Gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF512F]/50 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div className="md:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2"><GradientText>Islem Zaraa</GradientText></h3>
              <p className="text-gray-400 text-sm">Network Engineer & Cybersecurity Analyst</p>
            </div>
            <p className="text-gray-500 mb-6 max-w-md">
              Building secure networks and robust system architectures 
              with a focus on performance optimization and security implementation.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={link.label}
                  className="bg-[#0D0D0D] p-2 rounded-full hover:bg-[#1A1A1A] hover:text-[#FF512F] transition-all duration-300"
                >
                  <link.icon className="w-5 h-5" />
            </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-1 group"
                  >
                    <span className="w-0 h-px bg-[#FF512F] transition-all duration-300 group-hover:w-2"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {skillsList.map((skill, index) => (
                <li key={index} className="text-gray-400 flex items-center gap-1">
                  <span className="w-1 h-1 rounded-full bg-[#FF512F]"></span>
                  {skill}
                </li>
              ))}
            </ul>
            <div className="mt-4 text-gray-400">
              <p>islemzaraapro@gmail.com</p>
            </div>
          </div>
        </div>
        
        <div className="pt-6 mt-6 border-t border-[#1A1A1A] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© 2024 Islem Zaraa. All rights reserved.</p>
          
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Crafted with</span>
            <Heart className="w-4 h-4 text-[#FF512F] animate-pulse" fill="#FF512F" />
            <span>and modern tech</span>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="bg-[#0D0D0D] hover:bg-[#1A1A1A] p-2 rounded-full transition-all duration-300 group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 text-gray-400 group-hover:text-[#FF512F]" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;