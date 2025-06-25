import * as React from 'react';
import { cn } from '@/shared/lib/utils/cn';

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        // 기본 스타일
        'flex h-8 xs:h-12 w-full min-w-0 rounded-md border border-gray-300 bg-white px-3 py-1 text-base shadow-xs outline-none transition-all',
        // 상태별 스타일
        'placeholder:text-gray-400  focus:ring-2 focus:ring-black',
        'placeholder:text-xs xs:placeholder:text-sm',
        // 선택 및 비활성화
        'selection:selection:text-black disabled:opacity-50 disabled:cursor-not-allowed',
        className
      )}
      {...props}
    />
  );
}

export { Input };
