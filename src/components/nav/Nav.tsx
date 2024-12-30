import React from 'react';
import NavLink from './NavLink';
import GradientText from '../ui/GradientText';

const Nav = () => (
  <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full px-4 md:px-0">
    <div className="backdrop-blur-lg bg-black/50 rounded-full px-4 md:px-8 py-4 border border-white/5 max-w-fit mx-auto">
      <div className="flex items-center gap-4 md:gap-8">
        <NavLink href="#home">Home</NavLink>
        <NavLink href="#work">Work</NavLink>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </div>
    </div>
  </nav>
);

export default Nav;
