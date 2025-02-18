import { createRoot } from 'react-dom/client';
import App from '@src/App';
import tailwindcssOutput from '../dist/tailwind-output.css?inline';
import { addMessageListener, sendMessage } from '@kudo/shared';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { domHelper } from './util';
import useEnvStore from './store/env';

const rootId = 'ab-cursor-content-view-root';
const shadowRootId = 'ab-cursor-shadow-root';
const queryClient = new QueryClient();

let lastUrl = window.location.href;
setInterval(() => {
  if (window.location.href !== lastUrl) {
    lastUrl = window.location.href;
    window.dispatchEvent(new Event('urlchange'));
  }
}, 1000);

const createRootContainer = () => {
  chrome.runtime.connect();
  const root = domHelper.createElement('div', { parent: document.body, id: rootId });
  const rootIntoShadow = domHelper.createElement('div', { parent: root, root: true, id: shadowRootId });
  const shadowRoot = root.attachShadow({ mode: 'closed', delegatesFocus: true });

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
  createRoot(rootIntoShadow).render(
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>,
  );
};

const removeRootContainer = () => {
  const root = domHelper.getElementById(rootId);
  root?.remove();
};

const registerListeners = () => {
  addMessageListener(message => {
    if (message.action == 'TOGGLE') {
      toggleConnection();
      return Promise.resolve({ success: true, data: 'Unknown message type' });
    }
    if (message.action == 'PING') {
      return Promise.resolve({ success: true, data: 'PONG' });
    }
    return Promise.resolve({ success: false, error: 'Unknown message type' });
  });
};

let port: chrome.runtime.Port | null = null;
let isConnected = false;

function toggleConnection(): void {
  if (isConnected && port) {
    port.disconnect();
    port = null;
    removeRootContainer();
  } else {
    port = chrome.runtime.connect();
    // Listen for disconnection events.
    port.onDisconnect.addListener((): void => {
      console.log('Port disconnected');
      isConnected = false;
      port = null;
    });
    createRootContainer();
  }
  isConnected = !isConnected;
}

const init = async () => {
  const res = await sendMessage({ action: 'PING' }).catch(() => {
    useEnvStore.getState().setEnvironment('injected');
  });

  if (res?.success) {
    useEnvStore.getState().setEnvironment('extension');
    registerListeners();
    toggleConnection();
  } else {
    createRootContainer();
  }
};

init();
