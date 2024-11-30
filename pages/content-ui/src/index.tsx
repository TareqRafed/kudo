import { createRoot } from 'react-dom/client';
import App from '@src/App';
import tailwindcssOutput from '../dist/tailwind-output.css?inline';
import './auth';

const rootId = 'ab-cursor-content-view-root';
let onScreen = false;

const createRootContainer = () => {
  const root = document.createElement('div');
  root.id = rootId;

  document.body.prepend(root);

  const rootIntoShadow = document.createElement('div');
  rootIntoShadow.id = 'shadow-root';

  const shadowRoot = root.attachShadow({ mode: 'open' });
  onScreen = true;

  if (navigator.userAgent.includes('Firefox')) {
    /**
     * In the firefox environment, adoptedStyleSheets cannot be used due to the bug
     * @url https://bugzilla.mozilla.org/show_bug.cgi?id=1770592
     *
     * Injecting styles into the document, this may cause style conflicts with the host page
     */
    const styleElement = document.createElement('style');
    styleElement.innerHTML = tailwindcssOutput;
    shadowRoot.appendChild(styleElement);
  } else {
    /** Inject styles into shadow dom */
    const globalStyleSheet = new CSSStyleSheet();
    globalStyleSheet.replaceSync(tailwindcssOutput);
    shadowRoot.adoptedStyleSheets = [globalStyleSheet];
  }

  shadowRoot.appendChild(rootIntoShadow);
  createRoot(rootIntoShadow).render(<App />);
};

const removeRootContainer = () => {
  if (!onScreen) return;
  const root = document.getElementById(rootId);
  root?.remove();
  onScreen = false;
};

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log('Message received from background script:', message);

  // Respond to the background script if needed
  if (message.action === 'TOGGLE') {
    if (!onScreen) {
      createRootContainer();
    } else {
      removeRootContainer();
    }
  }
});
