'use client';

import { Button } from '@kudo/ui';

import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';
import type { ComponentPropsWithoutRef } from 'react';
import { GithubLogo } from '@phosphor-icons/react';
import Link from 'next/link';

interface Props extends ComponentPropsWithoutRef<'footer'> {}

const Footer = ({ ...rest }: Props) => {
  const t = useTranslations('Footer');

  return (
    <footer
      className={cn(['my-[5rem] w-[100%] md:w-[80%] xl:w-[45%] max-w-[45rem] mx-auto px-3 mb-20', rest.className])}
    >
      <div className="mt-10 flex flex-col md:flex-row justify-between items-center">
        <div className="flex-col lg:flex-row flex items-center lg:justify-start justify-center">
          <Button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            variant={'secondary'}
            className="rtl:ml-2 ltr:mr-2"
            size={'sm'}
          >
            {t('helperAction')}
          </Button>
          <span className="my-5 mx-2">{t('copyright', { year: new Date().getFullYear() })}</span>
        </div>
        <Link href={'https://github.com/tareqrafed'} className="flex items-center justify-center">
          Source <GithubLogo className="ml-2" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
