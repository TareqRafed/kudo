export type ValueOf<T> = T[keyof T];

export type NonFunctionKeys<T> = {
  [K in keyof T]: T[K] extends Function ? never : K;
}[keyof T];

export type OnlyFunctionKeys<T> = {
  [K in keyof T]: T[K] extends Function ? K : never;
}[keyof T];
