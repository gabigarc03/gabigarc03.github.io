import { Component } from 'preact';
import './View.scss';

/**
 * View props
 * - name: Page name
 */
interface ViewProps {
  name: string;
}

/**
 * View component for all pages on the site.
 */
export default class View extends Component<ViewProps> {
  getCSSClasses = () => {
    return `view ${this.props.name}`;
  };

  render() {
    return (
      <section class={this.getCSSClasses()}>{this.props.children}</section>
    );
  }
}
