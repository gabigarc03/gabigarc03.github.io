import { Component } from 'preact';
import View from '../../../View';
import './design.scss';

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
            </div>
            <div class='image'>
              <img
                alt='United Awards landing page on desktop'
                src={require('../../../../../assets/images/portfolio/design/awards-desktop-closed.png')}
              />
            </div>
          </div>
          {/* 
          ON THIS PAGE:
          - title, project summary, image at top
          - section with role, teams involved, dates, tools
          - background
          - problem
          - why it's important
          - usability goals
          - business goals
          - design goals
          - three learnings
          */}
        </div>
      </View>
    );
  }
}
