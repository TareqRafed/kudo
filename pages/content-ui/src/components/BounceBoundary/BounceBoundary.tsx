import type { CSSProperties } from 'react';

function isPointInDocument(x: number, y: number) {
  const docWidth = document.documentElement.clientWidth;
  const docHeight = document.documentElement.clientHeight;
  const inXzone = x >= 0 && x <= docWidth;
  const inYzone = y >= 0 && y <= docHeight;

  console.log('height', inYzone, y, docHeight);

  return {
    inXzone,
    inYzone,
  };
}

type BounceBoundaryProps = {
  position: { x: number; y: number };
  children: React.ReactNode;

  /**
   * Value that shifts element by
   */
  factor?: { x: CSSProperties['right']; y: CSSProperties['top'] };
  transform?: { x?: number; y?: number };
};

const BounceBoundary = ({ position, children, factor, transform }: BounceBoundaryProps) => {
  const locationResult = isPointInDocument(position.x + 400, position.y + 200);

  return (
    <div
      style={{
        transform: `translate(${locationResult.inXzone ? 0 : transform?.x || -100}%, ${locationResult.inYzone ? 0 : transform?.y || -100}%)`,
        bottom: locationResult.inYzone ? '0' : factor?.x || '40px',
        right: locationResult.inXzone ? '0' : factor?.y || '40px',
        position: 'relative',
      }}>
      {children}
    </div>
  );
};

export default BounceBoundary;
