import { Component } from 'preact';
import View from '../../../View';
import './design.scss';

export default class Brightline extends Component {
  render() {
    return (
      <View name='brightline'>
        <div class='design'>
          <h1>Brightline Landing Page</h1>
          <div class='summary-and-image'>
            <div class='summary'>
              <h2>summary</h2>
              <p>
                The Brightline landing page summarizes necessary passenger
                information for United's proposed partnership with the
                Brightline railroad.
              </p>
              <div class='summary-data'>
                <div class='datum'>
                  <h3>role</h3>
                  <p>UX Designer</p>
                </div>
                <div class='datum'>
                  <h3>teams involved</h3>
                  <p>Design, Content Strategy, Copy, Development</p>
                </div>
                <div class='datum'>
                  <h3>dates</h3>
                  <p>October 2024 - January 2025</p>
                </div>
                <div class='datum'>
                  <h3>tools</h3>
                  <p>Figma, Zeplin, Jira</p>
                </div>
              </div>
            </div>
            <div class='image'>
              <img
                alt='United Brightline landing page on desktop'
                src={require('../../../../../assets/images/portfolio/design/brightline-desktop-open.png')}
              />
            </div>
          </div>

          <div class='background'>
            <h2>background</h2>
            <div class='background-item'>
              <p>
                United maintains informational pages for all of its{' '}
                <a
                  href='https://www.united.com/en/us/fly/company/transportation-partners.html'
                  target='_blank'
                >
                  transportation partners
                </a>
                , including railroads like{' '}
                <a
                  href='https://www.united.com/en/us/fly/company/transportation-partners/deutsche-bahn.html'
                  target='_blank'
                >
                  Deutsche Bahn
                </a>{' '}
                and{' '}
                <a
                  href='https://www.united.com/en/us/fly/company/transportation-partners/sbb.html'
                  target='_blank'
                >
                  Swiss Federal Railways
                </a>
                .
              </p>
            </div>
            <div class='background-item'>
              <h3>problem</h3>
              <p>
                A proposed partnership with the Brightline railroad meant that
                it also needed a page with clear yet detailed information about
                booking and using a ticket on the railroad.
              </p>
            </div>
            <div class='background-item'>
              <h3>why it's important</h3>
              <p>
                Brightline's booking and check-in processes differ significantly
                from the other railroads United partners with. A new page would
                centralize information and allow customers to quickly and easily
                find answers to any questions they have.
              </p>
            </div>
          </div>

          <div class='goals'>
            <h2>goals</h2>
            <div class='goals-items'>
              <div class='goals-item'>
                <h3>usability</h3>
                <p>
                  Quickly and easily understand how to book a Brightline ticket
                  through United and use it.
                </p>
              </div>
              <div class='goals-item'>
                <h3>business</h3>
                <p>
                  Make the process of booking Brightline through United as
                  painless as possible to boost revenue and minimize customer
                  frustration.
                </p>
              </div>
              <div class='goals-item'>
                <h3>design</h3>
                <p>
                  Clearly present all necessary information in a visually
                  engaging manner that is consistent with United's brand
                  standards.
                </p>
              </div>
            </div>
          </div>

          <div class='process'>
            <h2>process</h2>
            <div class='process-step'>
              <h3>one: alignment and research</h3>
              <p>
                The strategy team led a kickoff to introduce the page and go
                over similar train partner informational pages. Next, a
                copywriter wrote the copy for the Brightline page while I
                evaluated the design of the existing pages for patterns I could
                use.
              </p>
            </div>
            <div class='process-step'>
              <h3>two: initial design</h3>
              <p>
                Once I received the initial copy, I laid out the page to match
                United's other train partner pages as much as possible.
              </p>
            </div>
            <div class='process-step'>
              <h3>three: review and iteration</h3>
              <p>
                Stakeholders reviewed the design and requested updates,
                predominantly to the copy. I updated the page after receiving
                updated copy from the copywriter.
              </p>
            </div>
            <div class='process-step'>
              <h3>four: approval</h3>
              <p>
                The final design was approved by the stakeholders, though it
                never went into production due to the Brightline partnership
                falling through.
              </p>
            </div>
          </div>

          <div class='learnings'>
            <h2>learnings</h2>
            <div class='learnings-items'>
              <div class='learnings-item'>
                <h3>communication is key</h3>
                <p>
                  I checked in frequently with the copywriter I was working with
                  to ensure we were on the same page. My questions to the
                  copywriter allowed us to collaborate on making the page as
                  consistent with the other train partner pages as possible.
                </p>
              </div>
              <div class='learnings-item'>
                <h3>consistency is critical</h3>
                <p>
                  Keeping my design consistent with other train partner pages
                  made it easier for customers to understand how to book
                  Brightline through United and also ensured consistency with
                  brand standards established on the other train partner pages.
                </p>
              </div>
              <div class='learnings-item'>
                <h3>it's okay to deviate from a template</h3>
                <p>
                  I ended up mixing and matching patterns I found on United's
                  other train partner pages, as Brightline's booking and riding
                  policies differed significantly from the other train partners.
                  Even with these differences, I made sure to work within the
                  design system to prevent too much overhead for developers.
                </p>
              </div>
            </div>
          </div>

          <a href='/tech' class='link-back'>
            <h3>◄ back to my portfolio</h3>
          </a>
        </div>
      </View>
    );
  }
}
