import { cn } from '@/lib/utils';
import { Toggle } from '@kudo/ui';
import { MonitorCog, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import React, { type ComponentPropsWithoutRef } from 'react';

interface Props extends ComponentPropsWithoutRef<'div'> {}

const ThemeToggler = ({ className, ...rest }: Props) => {
  const { setTheme, theme } = useTheme();

  return (
    <div className={cn([className, 'items-center space-x-1 flex'])} {...rest}>
      <Toggle
        suppressHydrationWarning
        aria-label="Switch theme to light mode"
        pressed={theme === 'light'}
        onClick={() => setTheme('light')}
      >
        <Sun />
      </Toggle>

      <Toggle
        suppressHydrationWarning
        aria-label="Switch theme to dark mode"
        pressed={theme === 'dark'}
        onClick={() => setTheme('dark')}
      >
        <Moon />
      </Toggle>

      <Toggle
        suppressHydrationWarning
        aria-label="Switch theme to system preference"
        pressed={theme === 'system'}
        onClick={() => setTheme('system')}
      >
        <MonitorCog />
      </Toggle>
    </div>
  );
};

export default ThemeToggler;
