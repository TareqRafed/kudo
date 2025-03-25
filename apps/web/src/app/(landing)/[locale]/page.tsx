'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useActionState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { GoogleLogo } from '@phosphor-icons/react';
import { ArrowUpRight } from 'lucide-react';

import { Link } from '@/i18n/routing';
import Thread from '@/components/Thread/Thread';
import { loginWithOAuth } from '@/actions/loginWithOAuth';
import ContainerScroll from '@/components/ContainerScroll';
import DisplayCards from '@/components/DisplayCards';
import Globe from '@/components/Globe';
import Safari from '@/components/Safari';
import { PricingBasic } from '@/features/Pricing';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Button, GradientText } from '@kudo/ui';
import posthog from 'posthog-js';

// Constants for reusable data
const DISPLAY_CARDS = [
  {
    description: 'We have a reflow issue here',
    className:
      "dark [grid-area:stack] hover:-translate-y-5 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
];

const FAQ_ITEMS = [
  {
    question: 'How secure is my data?',
    answer:
      'Kudo is open-source, and our software implementation is available in our GitHub repository. We host everything on Vercel and Supabase, both of which offer robust security measures. Your data is encrypted, and we follow best practices to keep it safe. We will never share your data with any third party.',
  },
  {
    question: 'Why not just use issue tracker like Github, Linear or Jira?',
    answer:
      'Focus and fast iterations are the keys to any successful project. last thing you want is unnecessary bureaucracy, your team can avoid jumping between multiple applications, private chats and keep important discussions right where they belong.',
  },
  {
    question: 'Can I just self-host it and have the software for free?',
    answer:
      'Yes, you can go into the repo and self-host it, or you can contact us, and we’ll configure your server for a fee.',
  },
  {
    question: 'Why would I pay for a subscription when I can self-host it?',
    answer:
      "If you're an individual or a small business, it's actually better to self-host it yourself. However, if you need technical support and the extra features that come with the Pro and Enterprise editions, we offer those as well. Additionally, at any time, you can extract your data and switch to self-hosting.",
  },
  {
    question: 'What would I need if I wanted to self-host it?',
    answer: 'You just need a running postgres instance, no traditional servers or anything like that',
  },
];

// Component for displaying cards
const DisplayCardsView = () => (
  <div className="flex w-full items-center justify-center">
    <div className="w-full max-w-3xl">
      <DisplayCards cards={DISPLAY_CARDS} />
    </div>
  </div>
);

// Hero section component
const Hero = () => {
  const t = useTranslations('HomePage');
  const [_, loginWithOAuthAction, isLoginPending] = useActionState(loginWithOAuth, null);

  const handleGoogleLogin = () => {
    posthog.capture('Continue with Google', { url: '/' });
    const formData = new FormData();
    formData.append('provider', 'google');
    loginWithOAuthAction(formData);
  };

  return (
    <section className="mx-auto mt-20 flex size-full h-[50vh] max-w-[45rem] flex-col items-center justify-start px-3 text-6xl md:w-4/5 lg:mt-20 lg:justify-center xl:w-[45%]">
      <motion.h1
        initial={{ y: -10, opacity: 0.8 }}
        animate={{ y: 0, opacity: 1 }}
        className="relative whitespace-nowrap font-light text-2xl lg:text-6xl"
      >
        <GradientText>
          {t.rich('title', {
            power: (chunk) => (
              <motion.span
                initial={{ textShadow: '0px 0px 5px rgba(18, 92, 189, 0.5)' }}
                animate={{
                  textShadow: [
                    '0px 0px 5px rgba(18, 92, 189, 0.5)',
                    '0px 0px 10px rgba(18, 92, 189, 1)',
                    '0px 0px 15px rgba(18, 92, 189, 1)',
                    '0px 0px 20px rgba(18, 92, 189, 0.5)',
                    '0px 0px 5px rgba(18, 92, 189, 0.5)',
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: 'mirror',
                }}
                style={{
                  textAlign: 'center',
                  marginTop: '50px',
                }}
                className="font-thin"
              >
                {chunk}
              </motion.span>
            ),
          })}
        </GradientText>
        <motion.span
          className="absolute -bottom-3/4 left-[85%] md:-bottom-1/4 md:left-full"
          initial={{ x: 100, y: 100, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 1 }}
        >
          <Thread
            data={{
              comments: [
                {
                  created_at: new Date().toString(),
                  content: 'on the* Web',
                  id: 1,
                  creator: {
                    id: '1',
                    last_name: '',
                    first_name: 'You',
                    profile_picture: '',
                  },
                },
              ],
            }}
          />
        </motion.span>
      </motion.h1>

      <span className="mt-5 px-5 text-center text-sm lg:text-xl">{t('slogan')}</span>

      <div className="mt-20 space-y-5 md:space-y-0 lg:space-x-2 flex flex-col md:flex-row items-center">
        <Button onClick={handleGoogleLogin} status={isLoginPending ? 'loading' : 'ready'}>
          <GoogleLogo weight="duotone" className="mb-0.5" />
          {t('action')}
        </Button>
        <Button onClick={() => posthog.capture('Continue with other options', { url: '/' })} variant="link" asChild>
          <Link href="/login">{t('secondaryAction')}</Link>
        </Button>
      </div>
    </section>
  );
};

// Thread comment factory helper function
const createThreadComment = (content: string) => ({
  data: {
    comments: [
      {
        created_at: new Date().toString(),
        content,
        id: 1,
        creator: {
          id: '1',
          last_name: '',
          first_name: 'You',
          profile_picture: '',
        },
      },
    ],
  },
});

// Main Home component
export default function Home() {
  const t = useTranslations('HomePage');
  const { resolvedTheme } = useTheme();

  return (
    <>
      <Hero />

      <div className="relative mx-auto space-y-40 pb-20 pt-0 md:py-20 flex w-full flex-col items-center gap-8 px-2 sm:items-start md:w-[70%] lg:px-0">
        {/* Feature section 1 */}
        <section className="my-0 grid w-full grid-cols-2 gap-2 lg:my-5 lg:grid-cols-4">
          <div className="col-span-2 h-[240px] lg:h-auto justify-center flex">
            <DisplayCardsView />
          </div>
          <div className="relative col-span-2">
            <h1 className="mb-4 text-2xl font-light font-normal lg:text-4xl">
              <GradientText>
                {t.rich('section1.title', {
                  power: (chunk) => <span className="font-thin">{chunk}</span>,
                })}
              </GradientText>
            </h1>
            <span className="text-sm lg:text-xl">{t('section1.content')}</span>
          </div>
        </section>

        {/* Feature section 2 - Container Scroll */}
        <section className="mx-auto hidden lg:mt-10 lg:block">
          <ContainerScroll
            titleComponent={
              <h1 className="text-4xl font-bold">
                {t.rich('section2.title', {
                  power: (chunk) => (
                    <span className="mt-1 text-4xl font-thin leading-none md:text-[6rem]">
                      <br />
                      {chunk}
                    </span>
                  ),
                })}
              </h1>
            }
          >
            <motion.span
              initial={{ x: 50, y: 50, opacity: 0 }}
              whileInView={{ x: 0, y: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 1.2 }}
              className="absolute left-[55%] top-[70%]"
            >
              <Thread data={createThreadComment('Maybe more horizontal padding?').data} />
            </motion.span>

            <motion.span
              initial={{ x: 20, y: 70, opacity: 0 }}
              whileInView={{ x: 0, y: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 2.2 }}
              className="absolute left-[47%] top-[55%]"
            >
              <Thread data={createThreadComment('Logo seems a bit off?').data} />
            </motion.span>

            <Safari
              url="anywebsite.com"
              src={resolvedTheme === 'dark' ? '/images/home-1-dark.png' : '/images/home-1.png'}
              className="size-full"
            />
          </ContainerScroll>
        </section>

        {/* Feature section 3 - Global collaboration */}
        <section className="relative grid w-full grid-cols-2 content-center gap-2 lg:grid-cols-4">
          {/* Mobile globe */}
          <div className="relative col-span-2 mx-auto block flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border bg-background px-40 pb-40 pt-8 md:pb-60 md:shadow-xl lg:hidden">
            <span className="pointer-events-none absolute left-1/2 top-5 -translate-x-1/2 whitespace-pre-wrap bg-gradient-to-b from-black to-primary bg-clip-text text-center text-6xl leading-none text-transparent dark:from-white dark:to-primary">
              {t('section3.decoration')}
            </span>
            <Globe className="top-22" />
            <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
          </div>

          {/* Content */}
          <div className="relative col-span-2 mt-10 content-center lg:mt-0">
            <h1 className="mb-4 text-2xl font-bold lg:text-4xl">
              <GradientText>
                {t.rich('section3.title', {
                  power: (chunk) => <span className="font-thin">{chunk}</span>,
                })}
              </GradientText>
            </h1>
            <span className="text-sm lg:text-xl">{t('section3.content')}</span>
          </div>

          {/* Desktop globe */}
          <div className="relative col-span-2 mx-auto flex hidden size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border bg-background px-40 pb-40 pt-8 md:pb-60 md:shadow-xl lg:block">
            <span className="pointer-events-none absolute left-1/2 top-5 -translate-x-1/2 whitespace-pre-wrap bg-gradient-to-b from-black to-primary bg-clip-text text-center text-[4vw] leading-none text-transparent dark:from-white dark:to-primary">
              {t('section3.decoration')}
            </span>
            <Globe className="top-22" />
            <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
          </div>
        </section>

        {/* Pricing section */}
        <PricingBasic />

        {/* CTA and FAQ section */}
        <section className="grid grid-cols-2 lg:grid-cols-4 mb-10 w-full gap-20">
          <div className="col-span-2 flex flex-col">
            <h1 className="mb-4 text-2xl font-light lg:text-4xl">{t('section4.title')}</h1>
            <span className="text-sm lg:text-xl">{t('section4.content')}</span>
            <span className="mt-10 w-full">
              <Button>
                Get Started
                <span className="text-white">
                  <ArrowUpRight strokeWidth={0.5} className="size-10" />
                </span>
              </Button>
            </span>
          </div>

          <div className="relative col-span-2 space-y-10">
            <GradientText from="from-primary" to="to-accent" className="text-5xl">
              FAQ
            </GradientText>
            <Accordion
              type="single"
              collapsible
              className="bg-accent/30 backdrop-blur-md rounded px-5 py-2 w-full col-span-4"
            >
              {FAQ_ITEMS.map(({ question, answer }) => (
                <AccordionItem
                  onClick={() => posthog.capture('FAQ', { url: '/', question, answer })}
                  value={question}
                  key={question}
                >
                  <AccordionTrigger>{question}</AccordionTrigger>
                  <AccordionContent>{answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </div>
    </>
  );
}
