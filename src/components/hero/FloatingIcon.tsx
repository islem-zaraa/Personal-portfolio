import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FloatingIconProps {
  Icon: LucideIcon;
  delay?: number;
  position: string;
}

const FloatingIcon = ({ Icon, delay = 0, position }: FloatingIconProps) => (
  <div
    className={`absolute ${position} animate-float opacity-20 hover:opacity-100 transition-opacity duration-300`}
    style={{
      animation: `float 3s ease-in-out infinite`,
      animationDelay: `${delay}s`,
    }}
  >
    <Icon className="w-8 h-8 text-[#FF512F]" />
  </div>
);

export default FloatingIcon;