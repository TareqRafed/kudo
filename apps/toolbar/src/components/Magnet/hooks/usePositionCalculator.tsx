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
 * This hook calculates the position of elements based on captured data from mounting.
 * In case a target element isn't specified it just go absolute on screen instead of tracking that element
 */
const usePositionCalculator = (data: PositionData) => {
  const [position, setPosition] = useState({
    left: data.x,
    top: data.y,
    fail: false,
  });

  useEffect(() => {
    const calculatePosition = () => {
      if (!data.rect) return;
      const newRect = data.targetSelector && document.querySelector(data.targetSelector)?.getBoundingClientRect();

      if (newRect) {
        const { newX, newY } = calculateScalePosition(data.rect, newRect, data.x, data.y);
        setPosition({ left: newX, top: newY, fail: false });
      } else {
        setPosition({ left: data.x, top: data.y, fail: true });
      }
    };

    const calculateSPosition = () => {
      if (!data.rect) return;
      const newRect = data.targetSelector && document.querySelector(data.targetSelector)?.getBoundingClientRect();

      if (newRect) {
        const { newX, newY } = calculateScrollPosition(data.rect, newRect, data.x, data.y);
        setPosition({ left: newX, top: newY, fail: false });
      } else {
        setPosition({ left: data.x, top: data.y, fail: true });
      }
    };

    calculatePosition();

    window.addEventListener('resize', calculatePosition);
    window.addEventListener('scroll', calculateSPosition);
    window.addEventListener('urlchange', calculatePosition);

    return () => {
      window.removeEventListener('resize', calculatePosition);
      window.removeEventListener('scroll', calculateSPosition);
      window.removeEventListener('urlchange', calculatePosition);
    };
  }, [data.x, data.y, data.targetSelector, data.rect]);

  return { position };
};

export default usePositionCalculator;
