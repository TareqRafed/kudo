'use client';

import Image from 'next/image';
import ImageController from '../ImageController';
import { Button, ContextMenu, ContextMenuContent, ContextMenuTrigger } from '@kudo/ui';
import { useTheme } from 'next-themes';
import Logo from '@/assets/icons/logo-icon.png';
import LogoFilled from '@/assets/icons/logo-filled.png';
import { cn } from '@/lib/utils';
import { Link, useRouter } from '@/i18n/routing';
import ThemeToggler from '../ThemeToggler';

const Header = ({ className }: { className?: string }) => {
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
        <div className="md:flex space-x-5 hidden">
          <ThemeToggler />
          <Button
            variant={'secondary'}
            onClick={() => {
              router.push('/login');
            }}
          >
            Get Started
          </Button>
        </div>
      </div>
      <div className="space-x-5 rounded items-center md:hidden flex">
        <ThemeToggler />
        <Button
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
