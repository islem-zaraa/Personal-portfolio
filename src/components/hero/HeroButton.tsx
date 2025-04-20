import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroButtonProps {
  href: string;
  children: React.ReactNode;
  primary?: boolean;
  secondary?: boolean;
}

const HeroButton = ({ href, children, primary, secondary }: HeroButtonProps) => {
  const baseClasses = "group relative inline-flex items-center gap-2 px-8 py-4 rounded-full overflow-hidden transition-all duration-300";
  
  const buttonClasses = primary
    ? `${baseClasses} bg-gradient-to-r from-[#FF512F] to-[#DD2476] text-white shadow-lg shadow-[#FF512F]/20 hover:shadow-xl hover:shadow-[#FF512F]/30 hover:scale-105`
    : secondary
    ? `${baseClasses} bg-[#1A1A1A] text-gray-300 border border-[#333] hover:bg-[#222] hover:text-white hover:border-[#555]`
    : `${baseClasses} bg-[#1A1A1A] text-gray-300 hover:bg-[#222] hover:text-white`;

  return (
  <a
    href={href}
      className={buttonClasses}
  >
      <span className="relative z-10 transition-colors">
      {children}
    </span>
      <ArrowRight className={`w-5 h-5 ${primary ? 'text-white' : 'text-[#FF512F]'} group-hover:translate-x-1 transition-transform`} />
      {!primary && (
    <div className="absolute inset-0 bg-gradient-to-r from-[#FF512F] to-[#DD2476] opacity-0 group-hover:opacity-10 transition-opacity" />
      )}
  </a>
);
};

export default HeroButton;