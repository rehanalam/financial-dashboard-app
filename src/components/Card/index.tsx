import { cn } from '@/lib/utils';
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
  return <div className={cn('w-full max-w-sm rounded-xl bg-white p-4', className)}>{children}</div>;
};

export default Card;
