import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => (
  <a
    href={href}
    className="relative text-gray-400 hover:text-white transition-colors duration-300 text-sm font-medium px-1 py-1 group"
  >
    <span className="relative z-10">{children}</span>
    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#FF512F] to-[#DD2476] group-hover:w-full transition-all duration-300"></span>
  </a>
);

export default NavLink;