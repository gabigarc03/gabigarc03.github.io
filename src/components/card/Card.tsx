import { Component, Fragment } from 'preact';
import register from 'preact-custom-element';
import cardStyles from './styles';

/**
 * Card props/slots
 * - href: link to navigate to on click
 * - image: card header image path
 * - title: project title
 * - desc: project description
 * - onMouseOver: optional function to run on mouse over
 */
interface CardProps {
  href: string;
  image: string;
  title: string;
  desc: string;
  onMouseOver?: () => void;
}

class Card extends Component<CardProps> {
  handleClick = () => {
    if (this.props.href) window.open(this.props.href, '_self');
  };

  render({ image, title, desc, onMouseOver }: CardProps) {
    return (
      <Fragment>
        <div class='card' onClick={this.handleClick} onMouseOver={onMouseOver}>
          <div class='img-container'>
            <img src={image} />
          </div>
          <div class='text-container'>
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
          {this.props.children}
        </div>
      </Fragment>
    );
  }
}

register(Card, 'tech-card', ['href'], {
  shadow: true,
  mode: 'open',
  adoptedStyleSheets: [cardStyles],
});
