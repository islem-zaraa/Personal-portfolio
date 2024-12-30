import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className = '' }: CardProps) => (
  <div className={`bg-[#0A0A0A] border border-[#1A1A1A] rounded-xl p-6 gradient-border ${className}`}>
    {children}
  </div>
);

export default Card;