import { Component } from 'preact';
import View from '../View';
import '../../../shared/style/design.scss';

export default class Awards extends Component {
  render() {
    return (
      <View name='awards'>
        <div class='design'>
          <h1>Awards Landing Page</h1>
          <div class='summary-and-image'>
            <div class='summary'>
              <h2>summary</h2>
              <p>
                The awards landing page highlights United's recent awards.
                Awards are categorized by applicable business goals or values.
              </p>
              <div class='summary-data'>
                <div class='datum'>
                  <h3>role</h3>
                  <p>UX Designer</p>
                </div>
                <div class='datum'>
                  <h3>teams involved</h3>
                  <p>Design, Content Strategy, Brand, Development</p>
                </div>
                <div class='datum'>
                  <h3>dates</h3>
                  <p>August 2024 - January 2025</p>
                </div>
                <div class='datum'>
                  <h3>tools</h3>
                  <p>Figma, Zeplin, Jira</p>
                </div>
              </div>
              <a
                href='https://www.united.com/en/us/fly/company/company-info/awards.html'
                target='_blank'
              >
                View the live page ►
              </a>
            </div>
            <div class='image'>
              <img
                alt='United awards landing page on desktop'
                src={require('../../../assets/images/portfolio/design/awards-desktop-open.png')}
              />
            </div>
          </div>

          <div class='background'>
            <h2>background</h2>
            <div class='background-item'>
              <p>
                United had recently won many awards, and the business wanted a
                place to showcase them.
              </p>
            </div>
            <div class='background-item'>
              <h3>problem</h3>
              <p>
                The awards page needed to provide relevant information about
                United's awards without overwhelming or boring the user.
              </p>
            </div>
            <div class='background-item'>
              <h3>why it's important</h3>
              <p>
                Awards are material evidence of United's status as a leader in
                the airline industry, and few other airlines had webiste pages
                for their awards at the time.
              </p>
            </div>
          </div>

          <div class='goals'>
            <h2>goals</h2>
            <div class='goals-items'>
              <div class='goals-item'>
                <h3>usability</h3>
                <p>
                  An awards page can easily be a simple list, but a wall of text
                  is not engaging or interesting. The user should be able to
                  quickly and easily grasp the information on the page without
                  getting bored or overwhelmed.
                </p>
              </div>
              <div class='goals-item'>
                <h3>business</h3>
                <p>
                  Position United as a leader in the airline industry by
                  highlighting significant awards and recognition.
                </p>
              </div>
              <div class='goals-item'>
                <h3>design</h3>
                <p>
                  Clearly provide all relevant information without overwhelming
                  the user while adhering to United's brand standards.
                </p>
              </div>
            </div>
          </div>

          <div class='process'>
            <h2>process</h2>
            <div class='process-step'>
              <h3>one: alignment</h3>
              <p>
                The strategy team led a kickoff to introduce the awards page and
                highlight existing examples of other awards pages. They also
                gave me the list of awards and other page copy.
              </p>
            </div>
            <div class='process-step'>
              <h3>two: initial design</h3>
              <p>
                I created an initial design for the page that addressed the
                original ask with support from my principal designer.
              </p>
            </div>
            <div class='process-step'>
              <h3>three: review and iteration</h3>
              <p>
                Through a series of reviews, I updated the design. Updates
                included the addition of accordions for each category of awards
                and an interchangeable header to highlight specific awards.
              </p>
            </div>
            <div class='process-step'>
              <h3>four: development and release</h3>
              <p>
                Once the design was approved, it was handed off to the
                development team to build the page. I then performed final QA
                checks before the page was released.
              </p>
            </div>
          </div>

          <div class='learnings'>
            <h2>learnings</h2>
            <div class='learnings-items'>
              <div class='learnings-item'>
                <h3>how to design</h3>
                <p>
                  This was my first professional design, and it introduced me to
                  many core concepts of UX design. I also learned several Figma
                  best practices, including Autolayout and how to work with a
                  design system.
                </p>
              </div>
              <div class='learnings-item'>
                <h3>you are not the expert</h3>
                <p>
                  My development background had me inclined to reject the
                  feedback of "non-experts". Through this design process, I
                  learned to understand critical feedback from stakeholders as
                  an opportunity to explore, rather than as an indication of my
                  failings.
                </p>
              </div>
              <div class='learnings-item'>
                <h3>explore the possibilities</h3>
                <p>
                  As a developer, I was inclined to pursue the first reasonable
                  solution I could find. I learned that giving yourself options
                  by exploring different variations of an idea often leads to a
                  more successful design.
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
