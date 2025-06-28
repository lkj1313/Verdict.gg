import * as React from 'react';
import { cn } from '@/shared/lib/utils/cn';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  variant?: 'default' | 'checkbox';
};

function Input({
  className,
  type = 'text',
  variant = 'default',
  ...props
}: InputProps) {
  const baseStyle = {
    default:
      'flex h-8 xs:h-12 w-full min-w-0 rounded-md border border-gray-300 bg-white px-3 py-1 text-base shadow-xs outline-none transition-all ' +
      'placeholder:text-gray-400 focus:ring-2 focus:ring-black ' +
      'placeholder:text-xs xs:placeholder:text-sm ' +
      'selection:selection:text-black disabled:opacity-50 disabled:cursor-not-allowed',
    checkbox:
      'w-3 h-3 text-red-500 border-gray-300 rounded focus:ring-red-500 disabled:opacity-50 disabled:cursor-not-allowed',
  };

  return (
    <input
      type={type}
      data-slot="input"
      className={cn(baseStyle[variant], className)}
      {...props}
    />
  );
}

export { Input };
