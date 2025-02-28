import { ReactNode } from 'react';

interface LabelProps {
  children: ReactNode;
  className?: string;
  htmlFor?: string;
}

const Label = ({ children, className = '', htmlFor }: LabelProps) => {
  return (
    <label htmlFor={htmlFor} className={`text-primary mb-3 block ${className}`}>
      {children}
    </label>
  );
};

export default Label;
