import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import SocialIcon from './SocialIcon';
import GradientText from '../ui/GradientText';

const Footer = () => (
  <footer className="py-12 bg-[#050505] border-t border-[#1A1A1A]">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div>
          <h3 className="text-2xl font-bold mb-4">
            <GradientText>IZ</GradientText>
          </h3>
          <p className="text-gray-400 text-sm">
            Network Engineer & Junior Cybersecurity Analyst passionate about securing digital infrastructure.
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-medium mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#home" className="text-gray-400 hover:text-[#FF512F] transition-colors">Home</a></li>
            <li><a href="#work" className="text-gray-400 hover:text-[#FF512F] transition-colors">Work</a></li>
            <li><a href="#blog" className="text-gray-400 hover:text-[#FF512F] transition-colors">Blog</a></li>
            <li><a href="#contact" className="text-gray-400 hover:text-[#FF512F] transition-colors">Contact</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-medium mb-4">Services</h4>
          <ul className="space-y-2">
            <li className="text-gray-400">Network Security</li>
            <li className="text-gray-400">Infrastructure Design</li>
            <li className="text-gray-400">Security Consulting</li>
            <li className="text-gray-400">Incident Response</li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-medium mb-4">Connect</h4>
          <div className="flex gap-4">
            <SocialIcon Icon={Github} href="https://github.com" label="GitHub" />
            <SocialIcon Icon={Linkedin} href="https://linkedin.com" label="LinkedIn" />
            <SocialIcon Icon={Twitter} href="https://twitter.com" label="Twitter" />
            <SocialIcon Icon={Mail} href="mailto:hello@example.com" label="Email" />
          </div>
        </div>
      </div>
      
      <div className="pt-8 border-t border-[#1A1A1A] text-center">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Islem Zaraa. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;