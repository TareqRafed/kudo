import { useEffect } from 'react';

function deepMerge<T extends object>(target: T, source: T): T {
  for (const key in source) {
    if (source[key] instanceof Object && key in target && target[key] instanceof Object) {
      Object.assign(source[key], deepMerge(target[key] as object, source[key] as object));
    }
  }
  return Object.assign(target, source);
}

type Motion = {
  [key: string]: Motion | (() => void);
};

const bufferKeys = new Set(['t', 'g']);
let buffer: Motion = {};
let motions: Motion = {};

const cleanBuffer = () => {
  buffer = {};
};

export const addMotion = (motionKeys: string[], action: () => void) => {
  if (!bufferKeys.has(motionKeys[0])) throw new Error(`${motionKeys[0]} doesnt exsit in ${bufferKeys.values()}`);
  if (motionKeys.length <= 1) throw new Error(`Moton should be at least two keys, fouund ${motionKeys.length}`);

  let motionMap: Motion = {};
  for (let i = motionKeys.length - 1; i >= 0; i--) {
    if (motionKeys.length - 1 === i) {
      motionMap[motionKeys[i]] = action;
      continue;
    }
    motionMap = { [motionKeys[i]]: motionMap };
  }
  mergeMotion(motionMap);
};

const mergeMotion = (motion: Motion) => {
  const keys = Object.keys(motion);
  for (const key of keys) {
    if (!bufferKeys.has(key)) {
      throw new Error(`Broken motion, expected one of ${[...bufferKeys]} but found ${key}`);
    }
  }

  motions = deepMerge(motions, motion);
};

export const useMotions = () => {
  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const handler = (event) => {
      console.log({ buffer, motions });
      if (typeof buffer?.[event.key] === 'function') {
        buffer?.[event.key]?.();
        cleanBuffer();
        return;
      }

      if (bufferKeys.has(event.key)) {
        cleanBuffer();
        buffer = motions[event.key];
      }

      if (buffer?.[event.key]) {
        buffer = buffer?.[event.key];
        return;
      }
    };

    window.addEventListener(
      'keydown',
      (event) => {
        if (document.activeElement !== document.body) return;
        handler(event);
      },
      { signal },
    );

    return () => controller.abort();
  }, []);
};
