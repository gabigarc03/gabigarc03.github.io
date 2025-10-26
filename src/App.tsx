import { LocationProvider, ErrorBoundary, Router, Route } from 'preact-iso';
import './App.scss';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/view/views/Home';
import About from './components/view/views/About';
import Tech from './components/view/views/Tech';
import Writing from './components/view/views/Writing';
import Resume from './components/view/views/Resume';
import Contact from './components/view/views/Contact';
import PortfolioPage from './components/view/views/portfolio/PortfolioPage';
import NotFound from './components/view/views/NotFound';

const App = () => {
  return (
    <LocationProvider>
      <ErrorBoundary onError={e => console.error(e)}>
        <div className='content'>
          <Header />
          <Router>
            <Route path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/tech' component={Tech} />
            <Route path='/tech/:type/:project' component={PortfolioPage} />
            <Route path='/writing' component={Writing} />
            <Route path='/resume' component={Resume} />
            <Route path='/contact' component={Contact} />
            <Route default component={NotFound} />
          </Router>
          <Footer />
        </div>
      </ErrorBoundary>
    </LocationProvider>
  );
};

export default App;
