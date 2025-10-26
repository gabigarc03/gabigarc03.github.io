import { Component } from 'preact';
import View from '../View';
import '../../../shared/style/design.scss';

export default class Coupon extends Component {
  render() {
    return (
      <View name='coupon'>
        <div class='design'>
          <h1>Coupon Landing Page Template</h1>
          <div class='summary-and-image'>
            <div class='summary'>
              <h2>summary</h2>
              <p>
                The coupon landing page is a template for United's personalized
                short-term offers.
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
                  <p>August 2024 - November 2024</p>
                </div>
                <div class='datum'>
                  <h3>tools</h3>
                  <p>Figma, Zeplin, Jira</p>
                </div>
              </div>
            </div>
            <div class='image'>
              <img
                alt='United coupon landing page template on desktop'
                src={require('../../../assets/images/portfolio/design/coupon-desktop-open.png')}
              />
            </div>
          </div>

          <div class='background'>
            <h2>background</h2>
            <div class='background-item'>
              <p>
                United regularly sends out short-term offers for Economy Plus
                upgrades or ticket discounts to MileagePlus members.
              </p>
            </div>
            <div class='background-item'>
              <h3>problem</h3>
              <p>
                There was no existing template for these offers, and coupon
                information in the variety of pages these offers appeared in was
                often obscured by image on the page.
              </p>
            </div>
            <div class='background-item'>
              <h3>why it's important</h3>
              <p>
                Customers should be able to easily access promotional offers
                they're eligible for, and the existing offer pages were often
                confusing or out of date.
              </p>
            </div>
          </div>

          <div class='goals'>
            <h2>goals</h2>
            <div class='goals-items'>
              <div class='goals-item'>
                <h3>usability</h3>
                <p>
                  Quickly and easily understand how to access and use a
                  promotional offer.
                </p>
              </div>
              <div class='goals-item'>
                <h3>business</h3>
                <p>
                  Encourage customer loyalty and retention. Use a flexible
                  template to cut down on design and development costs.
                </p>
              </div>
              <div class='goals-item'>
                <h3>design</h3>
                <p>
                  Clearly and concisely present coupon information in a visually
                  engaging manner that is consistent with United's brand
                  standards.
                </p>
              </div>
            </div>
          </div>

          <div class='process'>
            <h2>process</h2>
            <div class='process-step'>
              <h3>one: alignment</h3>
              <p>
                The strategy team led a kickoff to introduce the page. They
                provided several relevant brand assets and sample copy for a
                promotional offer.
              </p>
            </div>
            <div class='process-step'>
              <h3>two: initial design</h3>
              <p>
                I explored several options for the image and promo code
                combination, making sure the promo code remained above the fold.
                I then presented an initial variant to stakeholders for
                feedback.
              </p>
            </div>
            <div class='process-step'>
              <h3>three: review and iteration</h3>
              <p>
                Stakeholders responded with feedback and updated copy for the
                usage instructions. I incorporated the feedback and ended up
                switching the initial pattern for the image and promo code to a
                different variant to allow for more flexibility with reuse.
              </p>
            </div>
            <div class='process-step'>
              <h3>four: development and release</h3>
              <p>
                Once the design was approved by the stakeholders, it was handed
                off to the development team. After development, I performed
                final QA checks before the page was released.
              </p>
            </div>
          </div>

          <div class='learnings'>
            <h2>learnings</h2>
            <div class='learnings-items'>
              <div class='learnings-item'>
                <h3>designing responsively</h3>
                <p>
                  It bothers me when things don't line up precisely, but I
                  learned that this template would often have text of different
                  lengths and look a little different on different viewports.
                  This design taught me to become more comfortable with how a
                  design changes across different viewports and with adjusted
                  content.
                </p>
              </div>
              <div class='learnings-item'>
                <h3>generalizing with specifics</h3>
                <p>
                  I was initially given copy for the next offer that was being
                  sent out with this template, but I had to keep in mind that
                  the template would be used for other offers in the future.
                  Remembering that flexibility needed to be built in gave me
                  constraints to explore ideas in specific directions.
                </p>
              </div>
              <div class='learnings-item'>
                <h3>textual instructions last longer</h3>
                <p>
                  Previous coupon pages had screenshots in the instructions for
                  how to use the coupon. However, United updates its app and
                  website so frequently that screenshots accompanying text
                  become dated extremely quickly, so we opted for textual
                  instructions only that would be easier to update should
                  booking processes change.
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
