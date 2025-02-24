import type React from 'react';
import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface KeyboardShortcutProps {
  children: ReactNode;
  className?: string;
}

export const KeyboardShortcut: React.FC<KeyboardShortcutProps> = ({ children, className }) => {
  return (
    <kbd
      className={cn(
        'inline-flex items-center justify-center rounded mx-0 px-1 py-[1px] text-[10px] font-medium text-gray-800 bg-gray-100 border border-gray-200 shadow-sm',
        'dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700',
        'transition-all duration-200 ease-in-out',
        'hover:bg-gray-200 dark:hover:bg-gray-700',
        'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500',
        className,
      )}
    >
      {children}
    </kbd>
  );
};
