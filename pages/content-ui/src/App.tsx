import useToolbarStore from './store/toolbar';
import { useHotkeys } from 'react-hotkeys-hook';
import Provider from './providers';
import Toolbar from './components/Toolbar/Toolbar';
import { CommentLayer } from './components';
import { useSendMessage } from './hooks/useSendMessage';

export default function App() {
  const { toggleToolbarItem } = useToolbarStore();
  // const { website } = useWebsiteStore(); // TODO: set website data from supabase edge function

  useHotkeys('ctrl+c', () => toggleToolbarItem('comment'));
  const { data } = useSendMessage({ action: 'GET_AUTH', payload: '' });
  console.log(data, 'get_auth');

  return (
    <Provider>
      <Toolbar />
      <CommentLayer />
    </Provider>
  );
}
