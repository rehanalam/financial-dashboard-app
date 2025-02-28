import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card = ({ children, className }: CardProps) => {
  return <div className={cn('w-full rounded-[25px] bg-white p-6', className)}>{children}</div>;
};

export default Card;
