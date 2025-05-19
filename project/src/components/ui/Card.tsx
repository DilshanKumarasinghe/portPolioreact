import React, { ReactNode } from 'react';

interface CardProps {
  className?: string;
  children: ReactNode;
  hoverEffect?: boolean;
}

const Card: React.FC<CardProps> = ({ 
  className = '',
  children,
  hoverEffect = true
}) => {
  const hoverClass = hoverEffect 
    ? 'transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg' 
    : '';
  
  return (
    <div 
      className={`bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 ${hoverClass} ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;