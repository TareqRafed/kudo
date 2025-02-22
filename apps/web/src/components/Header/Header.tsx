'use client';

import Image from 'next/image';
import ImageController from '../ImageController';
import { Toggle, Button, ContextMenu, ContextMenuContent, ContextMenuTrigger } from '@kudo/ui';
import { useTheme } from 'next-themes';
import { MonitorCog, Moon, Sun } from 'lucide-react';
import Logo from '@/assets/icons/logo-icon.png';
import LogoFilled from '@/assets/icons/logo-filled.png';
import { cn } from '@/lib/utils';
import { Link, useRouter } from '@/i18n/routing';

const Header = ({ className }: { className?: string }) => {
  const { setTheme, theme } = useTheme();
  const router = useRouter();

  return (
    <header
      className={cn(['pt-1 md:pt-5 w-[100%] md:w-[80%] xl:w-[45%] max-w-[45rem] mx-auto w-full px-3', className])}
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center">
          <ContextMenu>
            <ContextMenuTrigger>
              <Link href={'/'}>
                <Image priority alt="Kudo logo" width={30} height={30} src="/logo-icon.svg" />
              </Link>
            </ContextMenuTrigger>
            <ContextMenuContent className="border-none bg-transparent">
              <div className="mb-3">
                <ImageController png={Logo.src} svg={'/logo-icon.svg'} />
              </div>
              <div className="mt-3">
                <ImageController png={LogoFilled.src} svg={'/logo-filled.svg'} />
              </div>
            </ContextMenuContent>
          </ContextMenu>
        </div>
        <div className="items-center md:flex hidden">
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
            className="mx-1"
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

          <Button
            className="ml-5"
            variant={'secondary'}
            onClick={() => {
              router.push('/login');
            }}
          >
            Get Started
          </Button>
        </div>
      </div>
      <div className="rtl:left-5 ltr:right-5 rounded items-center md:hidden flex">
        <Toggle
          aria-label="Switch theme to light mode"
          suppressHydrationWarning
          pressed={theme === 'light'}
          onClick={() => setTheme('light')}
        >
          <Sun />{' '}
        </Toggle>
        <Toggle
          aria-label="Switch theme to dark mode"
          suppressHydrationWarning
          className="mx-1"
          pressed={theme === 'dark'}
          onClick={() => setTheme('dark')}
        >
          <Moon />{' '}
        </Toggle>
        <Toggle
          aria-label="Switch theme to system preference"
          suppressHydrationWarning
          pressed={theme === 'system'}
          onClick={() => setTheme('system')}
        >
          <MonitorCog />
        </Toggle>

        <Button
          className="ml-5"
          variant={'secondary'}
          onClick={() => {
            router.push('/login');
          }}
        >
          Get Started
        </Button>
      </div>
    </header>
  );
};

export default Header;
