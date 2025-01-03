import type { MutableRefObject, ReactNode, RefObject } from 'react';
import { useEffect, useState } from 'react';
import Draggable from 'react-draggable';
import usePositionCalculator from './hooks/usePositionCalculator';
import type { PositionData } from './types';
import { getCssSelector } from './util';
import type { DraggableProps } from 'framer-motion';

export type OnDropEvent = {
  windowW: number;
  windowH: number;
  rect: DOMRect | null;
  x: number;
  y: number;
  targetSelector: string;
};

type MagnetProps<T extends HTMLElement> = {
  children: ReactNode;
  initData: PositionData;
  onDrop: (val: OnDropEvent) => void;
  layerRef: RefObject<T>;
} & DraggableProps;

/**
 * Returns data of the dropped on element
 */
const handlePositionUpdate = (x: number, y: number, layer: HTMLElement) => {
  const documentWidth = document.documentElement.clientWidth;
  const documentHeight = document.documentElement.clientHeight;

  // Clamp clientX and clientY
  const clampedX = Math.max(5, Math.min(x, documentWidth - 40));
  const clampedY = Math.max(5, Math.min(y, documentHeight - 30));
  const pointerEventsPrevState = layer.style.pointerEvents;
  layer.style.pointerEvents = 'none';
  const elements = document.elementsFromPoint(clampedX, clampedY);
  layer.style.pointerEvents = pointerEventsPrevState;
  let target = elements[0];
  // sometime it fails and it pickups the extension
  if (elements[0]?.id === 'ab-cursor-content-view-root') {
    target = elements?.[1] || document.body;
  } else {
    target = elements[0];
  }

  //	layer.style.pointerEvents = 'auto'

  const selector = target ? getCssSelector(target) : '';
  const rect = target?.getBoundingClientRect();

  return {
    windowW: window.innerWidth,
    windowH: window.innerHeight,
    rect: rect ?? null,
    x: clampedX,
    y: clampedY,
    targetSelector: selector,
  };
};

const Magnet = <T extends HTMLElement>({ children, initData, onDrop, layerRef, ...rest }: MagnetProps<T>) => {
  const { position } = usePositionCalculator(initData);
  console.log(position, 'position-in-magnet');
  /**
   * locally drag position because setPos is slow
   */
  const [dragPos, setDragPos] = useState({ x: position.left, y: position.top });
  useEffect(() => {
    setDragPos({ x: position.left, y: position.top }); // update drag position only after setPos executes
  }, [position.left, position.top]);

  if (!position.fail)
    return (
      <Draggable
        defaultClassName="z-max-2 hover:z-max"
        handle="pre"
        {...rest}
        position={{ x: dragPos.x, y: dragPos.y }}
        onDrag={(_, { x, y }) => {
          setDragPos({ x, y });
        }}
        onStop={(_, data) => {
          if (!layerRef.current) return;
          const calData = handlePositionUpdate(data.x, data.y, layerRef.current);
          onDrop(calData);
        }}
        enableUserSelectHack>
        {children}
      </Draggable>
    );
  return <></>;
};

export default Magnet;
