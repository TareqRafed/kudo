import { domHelper } from '@src/util';
import { type RefObject, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

type Position = {
  x: number;
  y: number;
  bottom: number;
  nearestEdge: {
    horizontal: 'left' | 'right';
    vertical: 'top' | 'bottom';
  };
};

const calculateOverflowPosition = (
  x: number,
  y: number,
  elementWidth: number,
  elementHeight: number,
  targetElement: HTMLElement,
) => {
  const docWidth = document.documentElement.clientWidth;
  const docHeight = document.documentElement.clientHeight;
  const padding = 10;

  const toLeft = x;
  const toRight = docWidth - x - padding;
  const toTop = y;
  const toBottom = docHeight - y - padding;

  const position: Position = {
    x: x,
    y: y,
    bottom: 0,
    nearestEdge: {
      horizontal: toLeft < toRight ? 'left' : 'right',
      vertical: toTop < toBottom ? 'top' : 'bottom',
    },
  };

  const targetRect = targetElement.getBoundingClientRect();

  if (position.nearestEdge.horizontal == 'left') {
    position.x += targetRect.width + padding;
  }

  if (position.nearestEdge.horizontal == 'right') {
    position.x -= padding + elementWidth;
  }

  if (position.nearestEdge.vertical == 'top') {
    position.y += targetRect.height + padding;
  }

  if (position.nearestEdge.vertical == 'bottom') {
    position.y -= padding + elementHeight;
  }

  position.bottom = docHeight - position.y - elementHeight;

  return position;
};

type BounceBoundaryProps = {
  children: React.ReactNode;
  targetRef: RefObject<HTMLElement>;
  helper: {
    width: number;
    height: number;
  };
};

const BounceBoundary = ({ children, targetRef, helper }: BounceBoundaryProps) => {
  const [locationResult, setLocation] = useState<Position | null>(null);

  useEffect(() => {
    const handlePositionChange = () => {
      if (!targetRef.current) return;
      const target = targetRef.current?.getBoundingClientRect() || { x: 0, y: 0 };
      setLocation(calculateOverflowPosition(target.x, target.y, helper.width, helper.height, targetRef.current));
    };

    handlePositionChange();
    window.addEventListener('scroll', handlePositionChange);
    window.addEventListener('resize', handlePositionChange);

    return () => {
      window.removeEventListener('scroll', handlePositionChange);
      window.removeEventListener('resize', handlePositionChange);
    };
  }, [targetRef.current]);

  console.log(targetRef, helper, locationResult, 'location');

  if (!locationResult) return <></>;

  return createPortal(
    <div
      className="z-max"
      style={{
        position: 'fixed',
        left: locationResult.x,
        bottom: locationResult.nearestEdge.vertical == 'bottom' ? locationResult.bottom : 'unset',
        top: locationResult.nearestEdge.vertical == 'top' ? locationResult.y : 'unset',
      }}
    >
      {children}
    </div>,
    domHelper.getRoot()!,
  );
};

export default BounceBoundary;
