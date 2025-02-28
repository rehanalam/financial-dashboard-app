import { cn } from '@/lib/utils';
import * as React from 'react';

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'border-input file:text-foreground selection:text-primary flex h-[50px] w-full min-w-0 rounded-md border bg-transparent px-6 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none selection:bg-blue-400 file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:font-light placeholder:text-blue-200 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        // 'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
        'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
        className
      )}
      {...props}
    />
  );
}

export { Input };
