import type { ValueOf, User } from '@kudo/shared';
import browser from 'webextension-polyfill';

type Storage = {
  auth: User | null;
};

export const setStorage = (key: keyof Storage, value: ValueOf<Storage>) => browser.storage.local.set({ [key]: value });
export const getStorage = (key: keyof Storage) => browser.storage.local.get(key);
