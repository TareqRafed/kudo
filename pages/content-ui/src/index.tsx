import { createRoot } from 'react-dom/client';
import App from '@src/App';
import tailwindcssOutput from '../dist/tailwind-output.css?inline';
import { addMessageListener } from '@extension/shared';
import { GlobalStateStorage } from '@extension/storage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const rootId = 'ab-cursor-content-view-root';
const queryClient = new QueryClient();

const createRootContainer = () => {
  const root = document.createElement('div');
  root.id = rootId;

  document.body.prepend(root);

  const rootIntoShadow = document.createElement('div');
  rootIntoShadow.id = 'shadow-root';

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
  const root = document.getElementById(rootId);
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
