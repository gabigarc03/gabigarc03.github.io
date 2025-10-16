import './App.scss';
import NavButton from './components/nav-button/NavButton';

const App = () => {
  return (
    <div className='content'>
      <h1>Rsbuild with Preact</h1>
      <p>Start building amazing things with Rsbuild.</p>
      <NavButton href='/'>label</NavButton>
      <NavButton href='/' isActive>
        label
      </NavButton>
    </div>
  );
};

export default App;
