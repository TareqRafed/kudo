'use client';

import CalButton from '@/components/CalButton/CalButton';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';
import Thread from '@/components/Thread/Thread';
import { Button } from '@/components/ui/button';

import DisplayCards from '@/components/ui/display-cards';
import { PricingBasic } from './pricing';
import { Safari } from '@/components/ui/safari';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import { Globe } from '@/components/ui/globe';
import { ShimmerButton } from '@/components/ui/shimmer-button';
import { ArrowUpRight } from 'lucide-react';

const defaultCards = [
  {
    description: 'Discover amazing content',
    className:
      "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    description: 'Trending this week',
    className:
      "[grid-area:stack] translate-x-12 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    description: 'Latest updates and features',
    className: '[grid-area:stack] translate-x-24 translate-y-20 hover:translate-y-10',
  },
];

function DisplayCardsView() {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="w-full max-w-3xl">
        <DisplayCards cards={defaultCards} />
      </div>
    </div>
  );
}

const Hero = () => {
  const t = useTranslations('HomePage');
  return (
    <section className="mx-auto mt-10 flex size-full h-[50vh] max-w-[45rem] flex-col items-center justify-start px-3 text-6xl md:w-4/5 lg:mt-20 lg:justify-center lg:text-5xl xl:w-[45%]">
      <motion.h1 initial={{ y: -10, opacity: 0.8 }} animate={{ y: 0, opacity: 1 }} className="relative font-light">
        {t.rich('title', {
          power: chunk => (
            <motion.span
              initial={{ textShadow: '0px 0px 5px rgba(255, 255, 255, 0.5)' }}
              animate={{
                textShadow: [
                  '0px 0px 5px rgba(250, 250, 255, 0.5)',
                  '0px 0px 10px rgba(250, 250, 255, 1)',
                  '0px 0px 15px rgba(250, 250, 255, 1)',
                  '0px 0px 20px rgba(250, 250, 255, 0.5)',
                  '0px 0px 5px rgba(250, 250, 255, 0.5)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'mirror',
              }}
              style={{
                textAlign: 'center',
                marginTop: '50px',
              }}
              className="font-thin">
              {chunk}
            </motion.span>
          ),
        })}
        <Thread
          className="absolute -bottom-1/4 left-full"
          data={{
            comments: [
              {
                created_at: new Date().toString(),
                content: 'test',
                id: 1,
                creator: {
                  id: 'test',
                  last_name: '',
                  first_name: 'You',
                  profile_picture: '',
                },
              },
            ],
          }}
        />
      </motion.h1>
      <span className="mt-5 px-5 text-center text-sm lg:text-xl">{t('slogan')}</span>
      <div className="mt-20 flex items-center">
        <Button className="ltr:mr-4 rtl:ml-4">{t('action')}</Button>
        <Link href={'/contact'} className="text-sm hover:underline">
          {t('secondaryAction')}
        </Link>
      </div>
    </section>
  );
};

export default function Home() {
  const t = useTranslations('HomePage');

  return (
    <>
      <Hero />
      <main className="relative row-start-2 mx-auto my-10 flex w-full flex-col items-center gap-8 overflow-hidden px-2 sm:items-start md:w-[70%] lg:px-0">
        <Thread
          className="relative left-1/2"
          data={{
            comments: [
              {
                created_at: new Date().toString(),
                content: 'We should fill this space',
                id: 1,
                creator: {
                  id: 'test',
                  last_name: '',
                  first_name: 'You',
                  profile_picture: '',
                },
              },
            ],
          }}
        />

        <section className="my-0 grid w-full grid-cols-2 gap-2 lg:my-5 lg:grid-cols-4">
          <div className="col-span-2 h-[240px] lg:h-auto">
            <DisplayCardsView />
          </div>
          <div className="relative col-span-2">
            <h1 className="mb-4 text-2xl font-light font-normal lg:text-4xl">
              {t.rich('section1.title', {
                power: chunk => <span className="font-thin">{chunk}</span>,
              })}
            </h1>
            <span className="text-sm lg:text-xl">{t('section1.content')}</span>
          </div>
        </section>
        <section className="mx-auto hidden lg:mt-10 lg:block">
          <ContainerScroll
            titleComponent={
              <>
                <h1 className="text-4xl font-bold">
                  {t.rich('section2.title', {
                    power: chunk => (
                      <span className="mt-1 text-4xl font-thin leading-none md:text-[6rem]">
                        <br />
                        {chunk}
                      </span>
                    ),
                  })}
                </h1>
              </>
            }>
            <Thread
              className="z-100 relative left-1/2 top-1/4"
              data={{
                comments: [
                  {
                    created_at: new Date().toString(),
                    content: 'We should fill this space',
                    id: 1,
                    creator: {
                      id: 'test',
                      last_name: '',
                      first_name: 'You',
                      profile_picture: '',
                    },
                  },
                ],
              }}
            />

            <Thread
              className="relative left-1/3 top-3/4"
              data={{
                comments: [
                  {
                    created_at: new Date().toString(),
                    content: 'We should fill this space',
                    id: 1,
                    creator: {
                      id: 'test',
                      last_name: '',
                      first_name: 'You',
                      profile_picture: '',
                    },
                  },
                ],
              }}
            />

            <Thread
              className="relative left-1/2 top-1/2"
              data={{
                comments: [
                  {
                    created_at: new Date().toString(),
                    content: 'We should fill this space',
                    id: 1,
                    creator: {
                      id: 'test',
                      last_name: '',
                      first_name: 'You',
                      profile_picture: '',
                    },
                  },
                ],
              }}
            />

            <Safari url="anywebsite.com" src="/images/home-1.png" className="size-full" />
          </ContainerScroll>
        </section>

        <section className="relative grid h-[600px] w-full grid-cols-2 content-center gap-2 lg:grid-cols-4">
          <div className="relative col-span-2 mx-auto block flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border bg-background px-40 pb-40 pt-8 md:pb-60 md:shadow-xl lg:hidden">
            <span className="pointer-events-none absolute left-1/2 top-5 -translate-x-1/2 whitespace-pre-wrap bg-gradient-to-b from-black to-primary bg-clip-text text-center text-6xl leading-none text-transparent dark:from-white dark:to-primary">
              {t('section3.decoration')}
            </span>
            <Globe className="top-22" />
            <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
          </div>

          <div className="relative col-span-2 mt-10 content-center lg:mt-0">
            <h1 className="mb-4 text-2xl font-bold lg:text-4xl">
              {t.rich('section3.title', {
                power: chunk => <span className="font-thin">{chunk}</span>,
              })}
            </h1>
            <span className="text-sm lg:text-xl">{t('section3.content')}</span>
            <Thread
              className="absolute left-full"
              data={{
                comments: [
                  {
                    created_at: new Date().toString(),
                    content: 'test',
                    id: 1,
                    creator: {
                      id: 'test',
                      last_name: '',
                      first_name: 'You',
                      profile_picture: '',
                    },
                  },
                ],
              }}
            />
          </div>
          <div className="relative col-span-2 mx-auto flex hidden size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border bg-background px-40 pb-40 pt-8 md:pb-60 md:shadow-xl lg:block">
            <span className="pointer-events-none absolute left-1/2 top-5 -translate-x-1/2 whitespace-pre-wrap bg-gradient-to-b from-black to-primary bg-clip-text text-center text-[4vw] leading-none text-transparent dark:from-white dark:to-primary">
              {t('section3.decoration')}
            </span>
            <Globe className="top-22" />
            <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
          </div>
        </section>

        <PricingBasic />

        <section className="mb-5 w-full">
          <div className="col-span-4 flex flex-col">
            <h1 className="mb-4 text-2xl font-light lg:text-4xl">{t('section4.title')}</h1>
            <span className="text-sm lg:text-xl">{t('section4.content')}</span>
            <span className="mt-10 w-full">
              <ShimmerButton className="">
                <span className="w-full whitespace-pre-wrap py-1 text-left text-xl leading-none tracking-tight text-white dark:to-slate-900/10">
                  Get Started
                </span>
                <span className="text-white">
                  <ArrowUpRight strokeWidth={0.5} className="size-10" />
                </span>
              </ShimmerButton>
            </span>
          </div>

          <div className="relative col-span-2">
            <Thread
              className="absolute left-full"
              data={{
                comments: [
                  {
                    created_at: new Date().toString(),
                    content: 'Probably needs more decoration',
                    id: 1,
                    creator: {
                      id: 'test',
                      last_name: '',
                      first_name: 'You',
                      profile_picture: '',
                    },
                  },
                ],
              }}
            />
          </div>
        </section>
      </main>
    </>
  );
}
