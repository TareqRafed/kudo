import type React from 'react';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface KeyboardShortcutProps {
  children: ReactNode;
  className?: string;
}

export const KeyboardShortcut: React.FC<KeyboardShortcutProps> = ({ children, className }) => {
  return (
    <kbd
      className={cn(
        'border-b-2 inline-flex items-center justify-center rounded mx-1 px-2 py-[1px] py-[1px] text-xs font-medium text-gray-800 bg-gray-100 border-gray-200 shadow-sm',
        'dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700',
        'transition-all duration-200 ease-in-out',
        'hover:bg-gray-200 dark:hover:bg-gray-700',
        'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500',
        className,
      )}>
      {children}
    </kbd>
  );
};
