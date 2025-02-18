export type ThreadPosition = {
  windowWidth?: number;
  windowHeight?: number;
  rect?: DOMRect | null;
  x: number;
  y: number;
  active: boolean;
  targetSelector: string | null;
};
