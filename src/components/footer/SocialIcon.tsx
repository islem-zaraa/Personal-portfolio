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
    className="text-gray-500 hover:text-[#FF512F] transition-colors"
  >
    <Icon className="w-5 h-5" />
  </a>
);

export default SocialIcon;