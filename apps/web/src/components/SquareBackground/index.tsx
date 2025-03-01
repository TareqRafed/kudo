'use client';

import { Squares } from '@kudo/ui';
import { useTheme } from 'next-themes';

export const SquareBackground = () => {
  const { theme } = useTheme();
  return (
    <Squares
      className="opacity-50 w-full h-full absolute left-0 top-0 z-10"
      direction="diagonal"
      speed={0.5}
      squareSize={900}
      borderColor="#125CBD"
      hoverFillColor="#125CBD"
      theme={(theme as 'dark' | 'light') ?? 'dark'}
    />
  );
};
