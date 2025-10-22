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
    desc: `I designed the first iteration of United's informational Starlink landing page, which was sent to all United customers in January 2025.`,
    imageSrc: 'headshot.jpg',
    type: 'design',
  },
  {
    name: 'Brightline Content Landing Page',
    href: '/tech/design/brightline',
    desc: `My work on an informational page about United's new partnership with the Brightline train line.`,
    imageSrc: 'headshot.jpg',
    type: 'design',
  },
  {
    name: 'Coupon Landing Page Template',
    href: '/tech/design/coupon',
    desc: `My work on a flexible template for United's personalized promotional coupons.`,
    imageSrc: 'headshot.jpg',
    type: 'design',
  },
  {
    name: 'Awards Landing Page',
    href: '/tech/design/awards',
    desc: `My work on a page enumerating United's various awards.`,
    imageSrc: 'headshot.jpg',
    type: 'design',
  },
];
