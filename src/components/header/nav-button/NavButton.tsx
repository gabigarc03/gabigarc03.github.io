import { Component } from 'preact';
import './NavButton.scss';

/**
 * Nav button props
 * - href: link to navigate to
 * - isActive: whether nav button is the active page
 * - onMouseOver: optional action to perform on mouse over
 */
interface NavButtonProps {
  href: string;
  isActive: boolean;
  onMouseOver?: () => void;
}

/**
 * Nav button component for header.
 */
export default class NavButton extends Component<NavButtonProps> {
  constructor(props: NavButtonProps) {
    super(props);
  }

  getCSSClasses = () => {
    return `nav-button ${this.props.isActive ? 'nav-button--active' : ''}`;
  };

  render({ href, onMouseOver }: NavButtonProps) {
    return (
      <a
        class={this.getCSSClasses()}
        href={href}
        id={href === '/' ? 'home' : href.substring(1)}
        key={href === '/' ? 'home' : href.substring(1)}
        onMouseOver={onMouseOver}
      >
        {this.props.children}
      </a>
    );
  }
}
