'use client';

import { type ComponentPropsWithoutRef, useRef } from 'react';
import { useScroll, useTransform, motion, type MotionValue } from 'framer-motion';
import { useMediaQuery } from '@uidotdev/usehooks';

interface Props extends ComponentPropsWithoutRef<'div'> {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}

const ContainerScroll = ({ titleComponent, children, ...rest }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end'],
  });

  const isMobile = useMediaQuery('only screen and (max-width : 768px)');

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [0.7, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 0.5], [10, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.6], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], ['-10', '0%']);
  const headerTranslate = useTransform(scrollYProgress, [0, 0.8], ['50%', '0%']);

  return (
    <div className="relative" ref={containerRef} {...rest}>
      <Header translate={headerTranslate} titleComponent={titleComponent} />
      <Card rotate={rotate} translate={translate} scale={scale}>
        {children}
      </Card>
    </div>
  );
};

const Header = ({ translate, titleComponent }: any) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

const Card = ({
  rotate,
  scale,
  translate,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<string>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        translateY: translate,
        rotateX: rotate,
        scale,
      }}
      className="mx-auto w-full"
    >
      <div className=" h-full w-full  rounded-2xl md:p-4 ">{children}</div>
    </motion.div>
  );
};

export default ContainerScroll;
