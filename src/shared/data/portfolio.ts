import { PortfolioData } from './types';

/**
 * List of all portfolio projects for portfolio page.
 */

export const Portfolio: Array<PortfolioData> = [
  {
    name: 'Scav Hunt Website',
    href: '/tech/dev/scav',
    desc: `I rebuilt the website for the University of Chicago Scavenger Hunt, the world's largest annual scavenger hunt, and currently maintain it.`,
    imageSrc: 'scav-logo.png',
    type: 'dev',
  },
  {
    name: 'Starlink Landing Page',
    href: '/tech/design/starlink',
    desc: `The first iteration of United's informational Starlink landing page, which was sent to all United customers in January 2025.`,
    imageSrc: 'starlink-desktop-small.png',
    type: 'design',
  },
  {
    name: 'Brightline Landing Page',
    href: '/tech/design/brightline',
    desc: `An informational page for United's proposed partnership with the Brightline railroad.`,
    imageSrc: 'brightline-desktop-open-small.png',
    type: 'design',
  },
  {
    name: 'Coupon Landing Page Template',
    href: '/tech/design/coupon',
    desc: `A flexible template for United's personalized promotional coupons.`,
    imageSrc: 'coupon-desktop-open-small.png',
    type: 'design',
  },
  {
    name: 'Awards Landing Page',
    href: '/tech/design/awards',
    desc: `A page enumerating United's various awards.`,
    imageSrc: 'awards-desktop-closed-small.png',
    type: 'design',
  },
];
