import { NavData } from './types';
/**
 * Navigation data for the nav bar in the header.
 */

export const NavLinks: Array<NavData> = [
  {
    name: 'home', 
    href: '/', 
    isActive: true
  },
  {
    name: 'about', 
    href: '/about', 
    isActive: false
  },
  {
    name: 'tech', 
    href: '/tech', 
    isActive: false
  },
  {
    name: 'writing', 
    href: '/writing', 
    isActive: false
  },
  {
    name: 'resume', 
    href: '/resume', 
    isActive: false
  },
  {
    name: 'contact', 
    href: '/contact', 
    isActive: false
  }
];