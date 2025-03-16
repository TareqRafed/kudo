import fs from 'node:fs';

const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));

/**
 * After changing, please reload the extension at `chrome://extensions`
 * @type {chrome.runtime.ManifestV3}
 */
const manifest = {
  manifest_version: 3,
  // default_locale: 'en',
  /**
   * if you want to support multiple languages, you can use the following reference
   * https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Internationalization
   */
  name: 'Start Discussions on Any Website - Kudo',
  version: packageJson.version,
  description: 'The comment layer for the web - Kudo',
  // host_permissions: ['<all_urls>'],
  permissions: ['storage', 'scripting', 'tabs', 'activeTab'],
  externally_connectable: {
    matches: ['http://localhost:3000/*', 'https://trykudo.com/*'],
  },
  background: {
    service_worker: 'background.iife.js',
    type: 'module',
  },
  action: {
    default_icon: 'icon-128-off.png',
  },
  icons: {
    128: 'icon-128-off.png',
  },
  web_accessible_resources: [
    {
      resources: ['*.js', '*.css', '*.svg', '*.png'],
      matches: ['*://*/*'],
    },
  ],
};

export default manifest;
