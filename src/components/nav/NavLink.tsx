import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => (
  <a
    href={href}
    className="relative text-white hover:text-white/90 transition-colors duration-300 text-sm font-medium px-2 py-1.5 group"
  >
    <span className="relative z-10">{children}</span>
    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#FF512F] to-[#DD2476] opacity-80 group-hover:w-full transition-all duration-300"></span>
  </a>
);

export default NavLink;