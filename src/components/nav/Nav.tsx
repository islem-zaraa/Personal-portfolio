import React from 'react';
import NavLink from './NavLink';

const Nav = () => {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full px-4 md:px-0">
      <div className="max-w-fit mx-auto">
        <div className="relative border-gradient">
          <div className="backdrop-blur-md bg-white/10 shadow-lg rounded-full px-6 md:px-10 py-4 border border-white/20">
            <div className="flex items-center gap-6 md:gap-10">
              <NavLink href="#home">Home</NavLink>
              <NavLink href="#skills">Skills</NavLink>
              <NavLink href="#work">Work</NavLink>
              <NavLink href="#experience">Experience</NavLink>
              <NavLink href="#blog">Blog</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;