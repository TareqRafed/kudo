import { createRoot } from 'react-dom/client';
import App from '@src/App';
import tailwindcssOutput from '../dist/tailwind-output.css?inline';
import { addMessageListener } from '@extension/shared';
import { GlobalStateStorage } from '@extension/storage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { domHelper } from './util';

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
  const root = domHelper.createElement('div', { parent: document.body, id: rootId });
  const rootIntoShadow = domHelper.createElement('div', { parent: root, root: true, id: shadowRootId });
  const shadowRoot = root.attachShadow({ mode: 'closed' });

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
    if (message.action == 'ACTION_CLICK') {
      message.payload.isOnScreen ? createRootContainer() : removeRootContainer();
    }
  });
};

const init = async () => {
  registerListeners();
  const state = await GlobalStateStorage.get();
  state.isOnScreen ? createRootContainer() : removeRootContainer();
};

init();
