/* eslint-disable @typescript-eslint/no-explicit-any */
import { createClient } from '@supabase/supabase-js';
import type { Database } from './database.types';

// To fetch items from storage
export const getLocalStorage = async (key: string): Promise<any> => (await chrome.storage.local.get(key))[key];

// To remove storage key from the chrome storage
export const removeLocalStorage = async (key: string): Promise<void> => await chrome.storage.local.remove(key);

// For setting storage
export const setLocalStorage = async (dataObject: any): Promise<void> => await chrome.storage.local.set(dataObject);

const storageAdapter = {
  getItem: async (name: string) => {
    return await getLocalStorage(name);
  },

  setItem: async (name: string, value: string) => {
    return await setLocalStorage({ [name]: value });
  },

  removeItem: async (name: string) => {
    return await removeLocalStorage(name);
  },
};

const options = {
  auth: {
    persistSession: true,
    storage: storageAdapter,
  },
};

export const initSupabase = () => {
  const supabase = createClient<Database>(
    'https://pfwrdyygogowjxyqcene.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBmd3JkeXlnb2dvd2p4eXFjZW5lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI0ODUwNDQsImV4cCI6MjA0ODA2MTA0NH0.gAsMmRrQCjnj25m4VJcYaRmwFDu_cjfiTaFv1_YMvFY',
    {
      ...options,
    },
  );

  return supabase;
};
