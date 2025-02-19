'use client';
import { setClarity } from '@/lib/clarity';
import { cn } from '@/lib/utils';
import React, { useState, useEffect } from 'react';

const WhackAMole = ({ className }: { className?: string }) => {
  const [activeMole, setActiveMole] = useState<number | null>(null);
  const [score, setScore] = useState(0);

  const holes = Array.from({ length: 9 }, (_, i) => i);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomHole = Math.floor(Math.random() * holes.length);
      setActiveMole(randomHole);
    }, 1000);

    return () => clearInterval(interval);
  }, [holes.length]);

  const whackMole = (index: number) => {
    if (index === activeMole) {
      setScore(score + 1);
      setActiveMole(null);
    } else {
      setClarity({ key: 'WhackMole', value: `Lost(${score})` });
      setScore(0);
    }
  };

  return (
    <div className={cn(['flex flex-col items-center mt-5', className])}>
      <p className="text-lg mb-4">Score: {score}</p>
      <div className="grid grid-cols-3 gap-4">
        {holes.map((index) => (
          <div
            key={index}
            className={`w-8 h-8 bg-background border rounded flex items-center justify-center cursor-pointer tab:bg-blue-400 ${
              index === activeMole ? 'bg-primary shadow-md ring-2 ring-blue-500/50' : ''
            }`}
            onClick={() => whackMole(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default WhackAMole;
