import { useEffect, useRef, useState, type CSSProperties } from 'react';

const calculateOverflowPosition = (
  x: number,
  y: number,
  elementWidth: number,
  elementHeight: number,
  options?: { x: CSSProperties['left']; y: CSSProperties['top'] },
) => {
  const docWidth = document.documentElement.clientWidth;
  const docHeight = document.documentElement.clientHeight;
  const padding = 10;

  const toLeft = x;
  const toRight = docWidth - x;
  const toTop = y;
  const toBottom = docHeight - y;

  const position = {
    x: x,
    y: y,
    transform: '',
    nearestEdge: {
      horizontal: toLeft < toRight ? 'left' : 'right',
      vertical: toTop < toBottom ? 'top' : 'bottom',
    },
  };

  if (x + elementWidth + padding > docWidth) {
    position.transform = `translateX(${options?.x ?? '-100%'})`;
  }

  if (y + elementHeight + padding > docHeight) {
    position.transform += `translateY(${options?.y ?? '-100%'})`;
  }

  return position;
};

type BounceBoundaryProps = {
  children: React.ReactNode;

  /**
   * Value that shifts element by
   */
  transform?: { x: CSSProperties['right']; y: CSSProperties['top'] };
};

const BounceBoundary = ({ children, transform }: BounceBoundaryProps) => {
  const childrenRef = useRef<HTMLDivElement>(null);
  const [locationResult, setLocation] = useState(calculateOverflowPosition(0, 0, 0, 0));
  useEffect(() => {
    const handlePositionChange = () => {
      const { x, y, width, height } = childrenRef.current?.firstElementChild?.getBoundingClientRect() || { x: 0, y: 0 };
      setLocation(
        calculateOverflowPosition(x, y, width || 0, height || 0, {
          x: transform?.x ?? '-100%',
          y: transform?.y ?? '-100%',
        }),
      );
    };

    const element = childrenRef.current?.firstElementChild;

    if (!element) return;

    handlePositionChange();
  }, [transform?.x, transform?.y]);

  return (
    <div
      style={{
        position: 'relative',
      }}>
      <div
        style={{
          transform: locationResult.transform,
          position: locationResult.nearestEdge.vertical == 'bottom' ? 'absolute' : 'unset',
          bottom: 0,
        }}
        ref={childrenRef}>
        {children}
      </div>
    </div>
  );
};

export default BounceBoundary;
