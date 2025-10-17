import { LocationProvider, ErrorBoundary, Router, Route } from 'preact-iso';
import './App.scss';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './views/Home';
import About from './views/About';
import Tech from './views/Tech';
import Writing from './views/Writing';
import Resume from './views/Resume';
import Contact from './views/Contact';

/** TODO: implement routing with preact-iso. Maybe introduce a 'routes' component. */

const App = () => {
  return (
      <LocationProvider>
        <ErrorBoundary onError={(e) => console.error(e)}>
          <div className='content'>
            <Header />
            <Router>
              <Route path='/' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/tech' component={Tech} />
              <Route path='/writing' component={Writing} />
              <Route path='/resume' component={Resume} />
              <Route path='/contact' component={Contact} />
            </Router>            
            <Footer />
          </div>
        </ErrorBoundary>
      </LocationProvider>
  );
};

export default App;
