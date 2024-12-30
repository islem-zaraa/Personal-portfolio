import React from 'react';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

const GradientText = ({ children, className = '' }: GradientTextProps) => (
  <span className={`bg-gradient-to-r from-[#FF512F] to-[#DD2476] text-transparent bg-clip-text ${className}`}>
    {children}
  </span>
);

export default GradientText;