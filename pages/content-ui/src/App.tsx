import Provider from './providers';
import Toolbar from './components/Toolbar/Toolbar';
import { CommentLayer } from './components';
import { useRegisterDocument } from './hooks/useRegisterDocument';
import { useSendMessage } from './hooks/useSendMessage';

export default function App() {
  useSendMessage({ action: 'GET_AUTH', payload: '' });
  useRegisterDocument();

  return (
    <Provider>
      <Toolbar />
      <CommentLayer />
    </Provider>
  );
}
