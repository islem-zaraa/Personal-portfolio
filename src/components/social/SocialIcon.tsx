import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SocialIconProps {
  Icon: LucideIcon;
  href: string;
  label: string;
}

const SocialIcon = ({ Icon, href, label }: SocialIconProps) => (
  <a
    href={href}
    aria-label={label}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative p-2 hover:-translate-y-1 transition-all duration-300"
  >
    <div className="absolute inset-0 bg-gradient-to-tr from-[#FF512F] to-[#DD2476] rounded-lg opacity-0 group-hover:opacity-20 transition-opacity" />
    <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
  </a>
);

export default SocialIcon;