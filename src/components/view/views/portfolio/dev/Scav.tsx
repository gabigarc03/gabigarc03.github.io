import { Component } from 'preact';
import View from '../../../View';
import './dev.scss';

export default class Scav extends Component {
  render() {
    return (
      <View name='scav'>
        <div class='dev'>
          <h1>Scav Hunt Website</h1>
          <div class='role-and-dates'>
            <p class='role'>Principal developer & webmaster</p>
            <p class='dates'>July 2022 - present</p>
          </div>
          <div class='overview'>
            <h2>overview</h2>
            <p>
              Website for the{' '}
              <a
                href='https://scavhunt.uchicago.edu/'
                target='_blank'
              >
                University of Chicago Scavenger Hunt
              </a>
              , the world's largest annual scavenger hunt.
            </p>
          </div>
          <div class='project-details'>
            <h2>the project</h2>
            <p>
              As of{' '}
              <a
                href='https://web.archive.org/web/20220505131505/https://scavhunt.uchicago.edu/'
                target='_blank'
              >
                spring 2022
              </a>
              , Scav Hunt's website had not seen any major updates{' '}
              <a
                href='https://web.archive.org/web/20100514113127/http://scavhunt.uchicago.edu/'
                target='_blank'
              >
                since 2010
              </a>
              . It was sorely in need of modernization &mdash; both style- and
              architecture-wise.
            </p>
            <h3>goals</h3>
            <p>The new Scav Hunt website needed to:</p>
            <ul>
              <li>be easily updateable, even by nontechnical users</li>
              <li>
                reflect Scav Hunt's modern brand styling, which had been
                introduced in the leadup to the 2022 Hunt
              </li>
              <li>be accessible for all users</li>
              <li>be responsive</li>
              <li>provide Hunt information in a logical and clear format</li>
            </ul>
            <h3>my work</h3>
            <p>
              I rebuilt the site to run on GitHub Pages using Jekyll, replacing
              its prior completely vanilla configuration. Moving the logo and
              navigation to the left-hand side allowed page content to be more
              visible to the user, enabling more efficient access to Hunt
              information. It also gave me more real estate to push up Scav's
              social media links from the true footer of the page. I
              componentized repeated patterns in the site to ease future
              updates.
            </p>
            <div class='skills-and-tech'>
              <div class='skills'>
                <h4>skills</h4>
                <ul>
                  <li>Frontend development</li>
                  <li>UX design</li>
                  <li>Technical leadership</li>
                </ul>
              </div>
              <div class='tech'>
                <h4>technologies</h4>
                <ul>
                  <li>Jekyll</li>
                  <li>GitHub Pages</li>
                  <li>Figma</li>
                </ul>
              </div>
            </div>
            <h3>ongoing work</h3>
            <p>
              I now lead a team of four webmasters that maintain and extend the
              site. Recent enhancements have included support for dark mode, a
              time-dependent style variant called "Cool Mode", and Easter eggs
              for Hunts and other Scav-related events.
            </p>
          </div>
        </div>
        <div class='img-and-link'>
          <img
            alt='Scav Hunt website home page'
            src={require('../../../../../assets/images/portfolio/dev/scav-home.png')}
            class='scav-image'
          />
          <a
            href='/tech'
            class='link-back'
          >
            <h3>◄ back to my portfolio</h3>
          </a>
        </div>
      </View>
    );
  }
}
