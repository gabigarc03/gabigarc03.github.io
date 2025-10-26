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
import Scav from './components/view/views/Scav';
import Starlink from './components/view/views/Starlink';
import Brightline from './components/view/views/Brightline';
import Awards from './components/view/views/Awards';
import Coupon from './components/view/views/Coupon';

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
            <Route path='/scav' component={Scav} />
            <Route path='/starlink' component={Starlink} />
            <Route path='/brightline' component={Brightline} />
            <Route path='/awards' component={Awards} />
            <Route path='/coupon' component={Coupon} />
            <Route default component={NotFound} />
          </Router>
          <Footer />
        </div>
      </ErrorBoundary>
    </LocationProvider>
  );
};

export default App;
