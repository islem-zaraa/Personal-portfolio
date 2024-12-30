import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import NavIcon from './NavIcon';

const Nav = () => (
  <nav className="fixed top-6 right-6 z-50">
    <div className="backdrop-blur-lg bg-black/50 rounded-full p-2 border border-white/5">
      <div className="flex items-center gap-2">
        <NavIcon Icon={Mail} href="#contact" label="Contact" />
        <NavIcon Icon={Github} href="https://github.com" label="GitHub" />
        <NavIcon Icon={Linkedin} href="https://linkedin.com" label="LinkedIn" />
      </div>
    </div>
  </nav>
);

export default Nav;