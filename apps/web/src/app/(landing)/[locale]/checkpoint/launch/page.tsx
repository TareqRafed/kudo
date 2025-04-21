import { NewsletterButton } from '@/components/NewsletterButton/NewsletterButton';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Announcing our launch - Mersal',
  description:
    'Mersal is an AI-powered solution designed to dramatically reduce your sale loss. As we look forward to the start of the new year, our team is thrilled to share our some updates',
};

const Launch = () => {
  return (
    <>
      <div className="mb-10">
        <span>Date 11.11.2024</span>
      </div>
      <section className="mb-10">
        <h1 className="text-5xl">Announcing our launch</h1>
        <div className="flex items-center gap-2 my-6">
          <Image
            width={50}
            height={50}
            src="/authors/tariq-rafid.jpg"
            alt="Tariq Rafid"
            className="w-[24px] h-[24px] rounded-full bg-white shadow-sm"
          />
          <span className="font-sans font-semibold text-sm tracking-normal">Tariq Rafid</span>
        </div>
      </section>
      <section>
        <p>
          As we look forward to the start of the new year, our team is thrilled to share updates that tackles what sales
          teams face these days!
          <br />
          Mersal is a product that will help your bussniess thrive in a world were data became a valuable assest. if you
          can&apos;t manage and extract value out of it. well, you probably won&apos;t last that long.
          <br /> Mersal will be ready in production on the first day of 2025
          <br />
        </p>
        <h2 className="text-xl mb-2 mt-5">Because little details make a different</h2>
        <p>
          We&apos;re building smart sales suite and training our own LLM co-pilot that will help your business in
          unexpected ways. By tracking and connecting your implicit data, you&apos;ll get access to insights you
          didn&apos;t even know existed, cold approach will become way easier and more personal and will create value
          when it&apos;s put in the right context. Our goal is to reach a state where the end customer get what they
          truly want in the most effective way possible, even when your customers fail to articulate their intreset.
          LLMs are uniquely positioned to make that happen. It&apos;s all about simplicity—effortless integration,
          one-click actions, actionable data, and minimizing missed opportunities.
        </p>
        <h2 className="text-xl mb-2 mt-5">Sounds intresting?</h2>
        <p>
          Then{' '}
          <NewsletterButton variant={'ghost'} size={'sm'}>
            Sign Up
          </NewsletterButton>{' '}
          to our news letter, early subscribers will get a chance to have early-access features, behind the scenes view
          and Mersal road maps.
        </p>
      </section>
    </>
  );
};

export default Launch;
