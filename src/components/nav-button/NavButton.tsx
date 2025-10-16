import { h, Component } from 'preact';
import './NavButton.scss';

/**
 * Nav button component.
 * href: link to navigate to
 * isActive: whether the nav link is active
 */

interface NavButtonProps {
  href: string;
  isActive: boolean;
}

export default class NavButton extends Component<NavButtonProps> {
  constructor(props: NavButtonProps) {
    super(props);
  }

  getCSSClasses = () => {
    return `nav-button ${this.props.isActive ? 'nav-button--active' : ''}`;
  };

  render({ href }: NavButtonProps) {
    return (
      <a class={this.getCSSClasses()} href={href}>
        {this.props.children}
      </a>
    );
  }
}
