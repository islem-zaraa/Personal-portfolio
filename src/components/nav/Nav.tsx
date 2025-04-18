import React, { useEffect, useRef } from 'react';
import NavLink from './NavLink';

const Nav = () => {
  const navRef = useRef<HTMLDivElement>(null);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full px-4 md:px-0">
      <div className="max-w-fit mx-auto">
        {/* Animated gradient border container */}
        <div className="relative overflow-hidden rounded-full p-[1.5px] border-gradient-mask">
          {/* Moving gradient border */}
          <div className="absolute inset-0 rounded-full overflow-hidden">
            <div className="h-full w-[400%] bg-gradient-to-r from-[#FF512F] via-[#DD2476] to-[#FF512F] via-[#FF512F] animate-move-gradient"></div>
          </div>
          
          {/* Inner navbar content */}
          <div ref={navRef} className="relative backdrop-blur-lg bg-black/50 rounded-full px-6 md:px-10 py-4 z-10">
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