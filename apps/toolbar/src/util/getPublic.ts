import Browser from 'webextension-polyfill';
export const getPublic = (url: string) => Browser.runtime.getURL(`/kudo/${url}`);
// chrome-extension://hahbjmnjmbgijbfmeojncnkddjfeomec/kudo
