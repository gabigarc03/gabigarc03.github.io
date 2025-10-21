// Navigation link data interface
/**
 * name: page name
 * href: page link
 * isActive: whether the page is active
 */
export interface NavData {
  name: string;
  href: string;
  isActive: boolean;
};

// Portfolio card link data interface
/**
 * name: project name
 * href: link to portfolio page
 * desc: project description
 * imageSrc: path to image for card
 * type: either dev or design
 */
export interface PortfolioData {
  name: string;
  href: string;
  desc: string;
  imageSrc: string;
  type: string;
}