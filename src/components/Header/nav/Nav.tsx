import { useLocation } from 'preact-iso';
import { useState, useEffect } from 'preact/hooks';
import './Nav.scss';
import NavButton from '../nav-button/NavButton';
import { NavLinks } from '../../../shared/data/navigation';
import { NavData } from '../../../shared/data/types';

/**
 * Navigation component for the header.
 */
export default function Nav() {
  const { path } = useLocation();
  const [activePage, setActivePage] = useState(getPageName());

  useEffect(() => {
    setActivePage(getPageName());
  }, [path]);

  function getPageName() {
    return path === '/' ? 'home' : path.substring(1);
  }

  return (
    <nav>
      {NavLinks.map((link: NavData) => {
        return(
          <NavButton href={link.href} isActive={link.name === activePage ? true : false}>{link.name}</NavButton>
        );
      })}
    </nav>
  );
}