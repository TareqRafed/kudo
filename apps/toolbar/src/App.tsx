import Provider from './providers';
import Toolbar from './components/Toolbar/Toolbar';
import { CommentLayer } from './components';
import { useRegisterDocument } from './hooks/useRegisterDocument';

export default function App() {
  useRegisterDocument();

  return (
    <Provider>
      <Toolbar />
      <CommentLayer />
    </Provider>
  );
}
