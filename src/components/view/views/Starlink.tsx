import { Component } from 'preact';
import View from '../View';
import '../../../shared/style/design.scss';

export default class Starlink extends Component {
  render() {
    return (
      <View name='starlink'>
        <div class='design'>
          <h1>Starlink Landing Page</h1>
          <div class='summary-and-image'>
            <div class='summary'>
              <h2>summary</h2>
              <p></p>
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
                  <p>December 2024 - January 2025</p>
                </div>
                <div class='datum'>
                  <h3>tools</h3>
                  <p>Figma, Zeplin, Jira</p>
                </div>
              </div>
              <a
                href='https://www.united.com/en/us/fly/travel/inflight/starlink-wifi.html'
                target='_blank'
              >
                View the live page ►
              </a>
            </div>
            <div class='image'>
              <img
                alt='United Starlink landing page on desktop'
                src={require('../../../assets/images/portfolio/design/starlink-desktop.png')}
              />
            </div>
          </div>

          <div class='background'>
            <h2>background</h2>
            <div class='background-item'>
              <p>
                United had announced a partnership with Starlink to offer faster
                internet onboard in late 2024.
              </p>
            </div>
            <div class='background-item'>
              <h3>problem</h3>
              <p>
                With the first Starlink-enabled flights taking off in 2025,
                United needed to inform customers about the policies and perks
                of the initiative.
              </p>
            </div>
            <div class='background-item'>
              <h3>why it's important</h3>
              <p>
                United's partnership with Starlink was poised to revolutionize
                in-flight internet service, and there was no landing page for
                the service at the time. Additionally, a press release and email
                were planned for early 2025 with a more detailed announcement
                about the Starlink partnership.
              </p>
            </div>
          </div>

          <div class='goals'>
            <h2>goals</h2>
            <div class='goals-items'>
              <div class='goals-item'>
                <h3>usability</h3>
                <p>
                  Quickly and easily comprehend the benefits and policies of
                  Starlink internet connection. Understand that the service is
                  not available at the time of announcement.
                </p>
              </div>
              <div class='goals-item'>
                <h3>business</h3>
                <p>
                  Encourage MileagePlus signups in preparation for Starlink
                  availability. Drive traffic to the Starlink page in
                  preparation for its availability.
                </p>
              </div>
              <div class='goals-item'>
                <h3>design</h3>
                <p>
                  Clearly present all information to customers in a visually
                  engaging manner consistent with United brand standards. Ensure
                  the page is easy to update as more information becomes
                  available.
                </p>
              </div>
            </div>
          </div>

          <div class='process'>
            <h2>process</h2>
            <div class='process-step'>
              <h3>one: alignment</h3>
              <p>
                The strategy team led a kickoff with the Design and Copy teams
                to introduce the ask and its tight timeline due to the holidays
                and quick turnaround. Each team (Copy, Design, Development) had
                about two to three days for their contribution.
              </p>
            </div>
            <div class='process-step'>
              <h3>two: initial design</h3>
              <p>
                Once I received the initial copy, I began laying out the page. I
                intentionally chose images from United's asset library that I
                felt conveyed a space-age-y tone that would be consistent with
                Starlink's outer-space-based satellite internet connection.
              </p>
            </div>
            <div class='process-step'>
              <h3>three: review and iteration</h3>
              <p>
                Stakeholders reviewed the design and requested a few updates.
                Some were copy updates, but also the mid-page offer to sign up
                for Starlink took up too much vertical real estate. I updated
                the design with the changes and made the offer as short as the
                design system allowed.
              </p>
            </div>
            <div class='process-step'>
              <h3>four: development and release</h3>
              <p>
                Once the final design was approved by stakeholders, it was
                handed off to the development team. Due to the quick turnaround,
                the strategy team performed QA.
              </p>
            </div>
          </div>

          <div class='learnings'>
            <h2>learnings</h2>
            <div class='learnings-items'>
              <div class='learnings-item'>
                <h3>trust is earned</h3>
                <p>
                  Since I'd been designing for five months at the time, I was
                  honored to be trusted by my team to work on such a
                  high-profile design. I'd never designed on a timeline this
                  short, but I proved to myself that I was capable of delivering
                  high-quality designs on short notice.
                </p>
              </div>
              <div class='learnings-item'>
                <h3>trust yourself</h3>
                <p>
                  Due to the short turnaround on the design, I had little time
                  to request feedback from mentors before passing it along to
                  stakeholders. I instead trusted my instincts when it came to
                  layout and image selection, and my choices were highly
                  regarded by stakeholders.
                </p>
              </div>
              <div class='learnings-item'>
                <h3>constraints offer direction</h3>
                <p>
                  The MileagePlus signup offer in the middle of the page was
                  designed using a component from United's customer-facing
                  design system. When asked to decrease its height, I was able
                  to easily work with the system's existing flexibility to use
                  the component's minimum possible height. Stakeholders liked
                  the component, copy, and image combination so much that it has
                  since appeared on other pages on the United website.
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
