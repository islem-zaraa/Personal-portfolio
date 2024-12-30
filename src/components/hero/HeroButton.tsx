import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroButtonProps {
  href: string;
  children: React.ReactNode;
}

const HeroButton = ({ href, children }: HeroButtonProps) => (
  <a
    href={href}
    className="group relative inline-flex items-center gap-2 px-8 py-4 bg-[#1A1A1A] rounded-full overflow-hidden transition-all duration-300 hover:bg-[#222]"
  >
    <span className="relative z-10 text-gray-300 group-hover:text-white transition-colors">
      {children}
    </span>
    <ArrowRight className="w-5 h-5 text-[#FF512F] group-hover:translate-x-1 transition-transform" />
    <div className="absolute inset-0 bg-gradient-to-r from-[#FF512F] to-[#DD2476] opacity-0 group-hover:opacity-10 transition-opacity" />
  </a>
);

export default HeroButton;