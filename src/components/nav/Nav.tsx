import React, { useEffect, useRef } from 'react';
import NavLink from './NavLink';

const Nav = () => {
  const navRef = useRef<HTMLDivElement>(null);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full px-4 md:px-0">
      <div className="max-w-fit mx-auto">
        {/* Animated gradient border container */}
        <div className="relative p-[1px] rounded-full overflow-hidden">
          {/* Moving gradient */}
          <div className="absolute top-0 left-0 right-0 bottom-0 rounded-full overflow-hidden">
            <div className="absolute -inset-[100%] animate-move-gradient">
              <div className="absolute top-[40%] w-[25%] h-[20%] bg-gradient-to-r from-[#FF512F] via-[#DD2476] to-[#FF512F] blur-sm opacity-70"></div>
            </div>
          </div>
          
          {/* Inner navbar content */}
          <div ref={navRef} className="relative backdrop-blur-lg bg-black/50 rounded-full px-6 md:px-10 py-4 border border-white/5 z-10">
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