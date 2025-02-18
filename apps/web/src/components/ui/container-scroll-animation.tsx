'use client';
import React, { useRef } from 'react';
import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';
import { useMediaQuery } from '@uidotdev/usehooks';

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const isMobile = useMediaQuery('only screen and (max-width : 768px)');

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [0.85, 1];
  };

  const translateDimensions = () => {
    return isMobile ? [-300, 0] : [0, 300];
  };

  const rotate = useTransform(scrollYProgress, [0, 0.5], [10, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.6], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], translateDimensions());

  return (
    <div className="h-[30rem] md:h-[80rem] flex items-start justify-center relative" ref={containerRef}>
      <div
        className="py-10 w-full relative"
        style={{
          perspective: '1000px',
        }}>
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }: any) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="div max-w-5xl mx-auto text-center">
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  translate,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        translateY: translate,
        rotateX: rotate,
        scale,
      }}
      className="max-w-5xl -mt-12 mx-auto w-full p-2 md:p-6 ">
      <div className=" h-full w-full  rounded-2xl md:p-4 ">{children}</div>
    </motion.div>
  );
};
