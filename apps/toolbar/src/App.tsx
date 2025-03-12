import Provider from './providers';
import Toolbar from './components/Toolbar/Toolbar';
import { CommentLayer } from './components';

export default function App() {
  return (
    <Provider>
      <Toolbar />
      <CommentLayer />
    </Provider>
  );
}
