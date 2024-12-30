import React from 'react';
import { LucideIcon } from 'lucide-react';

interface NavIconProps {
  Icon: LucideIcon;
  href: string;
  label: string;
}

const NavIcon = ({ Icon, href, label }: NavIconProps) => (
  <a
    href={href}
    aria-label={label}
    className="p-2 hover:bg-white/5 rounded-full transition-all duration-300 group"
  >
    <Icon className="w-5 h-5 text-gray-400 group-hover:text-[#FF512F] transition-colors" />
  </a>
);

export default NavIcon;