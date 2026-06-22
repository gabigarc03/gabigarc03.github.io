import { Component } from 'preact';
import './footer.scss';
import SocialLink, { GH, LN } from './social-link/SocialLink';

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <SocialLink href='https://www.github.com/gabigarc03'>
          <GH />
        </SocialLink>
        <SocialLink href='https://www.linkedin.com/in/g-c-garcia/'>
          <LN />
        </SocialLink>
      </footer>
    );
  }
}
