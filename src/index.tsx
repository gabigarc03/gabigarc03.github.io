import { render } from 'preact';
import App from './App';
import './style/index.scss';

const root = document.getElementById('root');
if (root) {
  render(<App />, root);
}
