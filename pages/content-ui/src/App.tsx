import useToolbarStore from './store/toolbar';
import { useHotkeys } from 'react-hotkeys-hook';
import Provider from './providers';
import Toolbar from './components/Toolbar/Toolbar';
import { CommentLayer } from './components';
import { useRegisterDocument } from './hooks/useRegisterDocument';
import Inbox from './components/Inbox/Inbox';

export default function App() {
  const { toggleToolbarItem } = useToolbarStore();

  useHotkeys('ctrl+c', () => toggleToolbarItem('comment'));

  useRegisterDocument();

  return (
    <Provider>
      <Toolbar />
      <CommentLayer />
    </Provider>
  );
}
