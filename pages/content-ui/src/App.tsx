import useToolbarStore from './store/toolbar';
import { useHotkeys } from 'react-hotkeys-hook';
import Provider from './providers';
import Toolbar from './components/Toolbar/Toolbar';
import { CommentLayer } from './components';
import { useSendMessage } from './hooks/useSendMessage';

export default function App() {
  const { toggleToolbarItem } = useToolbarStore();

  useHotkeys('ctrl+c', () => toggleToolbarItem('comment'));
  const [res, loading] = useSendMessage({ action: 'FETCH_DATA', payload: 'members' });

  return (
    <>
      <Provider>
        <Toolbar />
        <CommentLayer />
      </Provider>
    </>
  );
}
