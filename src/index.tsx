import { render } from 'preact';
import App from './App';
import './shared/style/index.scss';

const root = document.getElementById('root');
if (root) {
  render(<App />, root);
}
