import { useEffect, useState } from 'react';
import type { PositionData } from '../types';

function calculateScalePosition(oldRect: DOMRect, newRect: DOMRect, x: number, y: number) {
  if (oldRect.width === 0 || oldRect.height === 0) {
    console.error('oldRect has zero width or height, cannot scale position.');
    return { newX: x, newY: y }; // Fallback to original position
  }

  const relativeX = (x - oldRect.left) / oldRect.width;
  const relativeY = (y - oldRect.top) / oldRect.height;

  const newX = newRect.left + relativeX * newRect.width;
  const newY = newRect.top + relativeY * newRect.height;

  return { newX, newY };
}

function calculateScrollPosition(oldRect: DOMRect, newRect: DOMRect, x: number, y: number) {
  const deltaX = newRect.left - oldRect.left;
  const deltaY = newRect.top - oldRect.top;

  const newX = x + deltaX;
  const newY = y + deltaY;

  return { newX, newY };
}

/**
 * This hook calculates the position of threads or threads initializers based on captured data from spawning.
 * In case a target element isn't specified it just go absulote on screen instead of following that element
 */
const usePositionCalculator = (data: PositionData) => {
  const [position, setPosition] = useState({
    left: data.x,
    top: data.y,
  });

  useEffect(() => {
    const calculatePosition = () => {
      if (!data.rect) return;
      const newRect = data.targetSelector && document.querySelector(data.targetSelector)?.getBoundingClientRect();

      if (newRect) {
        const { newX, newY } = calculateScalePosition(data.rect, newRect, data.x, data.y);
        setPosition({ left: newX, top: newY });
      } else {
        setPosition({ left: data.x, top: data.y });
      }
    };

    const calculateSPosition = () => {
      if (!data.rect) return;
      const newRect = data.targetSelector && document.querySelector(data.targetSelector)?.getBoundingClientRect();

      if (newRect) {
        const { newX, newY } = calculateScrollPosition(data.rect, newRect, data.x, data.y);
        setPosition({ left: newX, top: newY });
      }
    };

    calculatePosition();

    window.addEventListener('resize', calculatePosition);
    window.addEventListener('scroll', calculateSPosition);
    return () => {
      window.removeEventListener('resize', calculatePosition);
      window.removeEventListener('scroll', calculateSPosition);
    };
  }, [data.x, data.y, data.targetSelector, data.rect]);

  return { position };
};

export default usePositionCalculator;
