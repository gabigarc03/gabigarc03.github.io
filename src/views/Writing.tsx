import { Component } from 'preact';
import View from '../components/view/View';

export default class Writing extends Component {
  render () {
    return (
      <View name='writing'>
        <h1>writing</h1>
        <h2>playwriting</h2>
        <p><em>Ismene</em></p>
        <ul>
          <li>
            Produced at the 2019 International Thespian Festival
            <ul>
              <li>Awarded 2019 International Thespian Playworks Finalist</li>
              <li>Published in October 2019 issue of Dramatics Magazine</li>
              <li>Published by Concord Theatricals (<a href='https://www.concordtheatricals.com/s/92169/ismene' target='_blank'>get the script</a>)</li>
            </ul>
          </li>
        </ul>

        <p><em>I Love Steve</em></p>
        <ul>
          <li>Read at Portland Center Stage’s 2019 Visions and Voices showcase</li>
          <li>Read in the University of Chicago’s 2020 New Work Week</li>
        </ul>

        <p><em>Past, Present, Future</em></p>
        <ul>
          <li>Read in UChicago’s University Theater’s Fall 2021 Staged Readings</li>
          <li>
            Performed at the 2018 Oregon State Thespian Festival
            <ul>
              <li>Won State Select for writing</li>
              <li>Won Chapter Select for performance</li>
            </ul>
          </li>
          <li>Performed at Sunset High School’s 2018 One Acts Festival</li>
          <li>Read at Portland Center Stage’s 2018 Visions and Voices showcase</li>
        </ul>

        <h2>academic writing</h2>
        <p><strong>Animus Classics Journal</strong></p>
        <ul>
          <li><a href='https://www.yumpu.com/en/document/view/66958042/animus-classics-journal-vol-2-issue-2' target='_blank'>Ode to Love (from Sophocles’ Antigone)</a> (Print journal - June 1, 2022)</li>
          <li><a href='https://voices.uchicago.edu/animus/2022/05/23/aristophaness-nukterides/' target='_blank'>Aristophanes’s Nukterides</a> (Blog - May 23, 2022)</li>
        </ul>

        <h2>journalism</h2>
        <p><strong>The Chicago Maroon</strong></p>
        <ul>
          <li><a href='https://chicagomaroon.com/article/2021/10/13/everybody-talking-jamie/' target='_blank'>Everybody Should Be Talking About Jamie</a> (October 13, 2021)</li>
          <li><a href='https://www.chicagomaroon.com/article/2021/3/9/century-house-culture-story-snell-hitchcock/' target='_blank'>Over a Century of House Culture: The Story of Snell-Hitchcock</a> (March 9, 2021 - co-written with Solana Adedokun)</li>
          <li><a href='https://www.chicagomaroon.com/article/2021/1/19/knew-smelled-rat-review-ratatouille-tiktok-musical/' target='_blank'>I KNEW I Smelled a Rat!: A Review of "Ratatouille: The TikTok Musical"</a> (January 19, 2021 - co-written with Alina Kim)</li>
          <li><a href='https://www.chicagomaroon.com/article/2020/10/15/maybe-real-chaotic-betrayal-friends-made-along-way/' target='_blank'>Maybe the Real Chaotic Betrayal Was the Friends We Made Along the Way</a> (October 14, 2020)</li>
          <li><a href='https://www.chicagomaroon.com/article/2020/9/17/curtain-rises-theater-campus/' target='_blank'>The Curtain Rises: Theater on Campus</a> (September 16, 2020)</li>
          <li><a href='https://www.chicagomaroon.com/article/2020/4/21/radio-24-socially-distanced-theater-24/' target='_blank'>Radio 24: a Socially-Distanced Theater 24</a> (April 20, 2020)</li>
          <li><a href='https://www.chicagomaroon.com/article/2020/4/8/uchicago-students-alumna-appear-chicago-musical-th/' target='_blank'>UChicago Students, Alumna Appear in the Chicago Musical Theatre Festival</a> (April 8, 2020)</li>
          <li><a href='https://www.chicagomaroon.com/article/2020/2/28/baked-musical-harvard-weed-life-lessons/' target='_blank'>"Baked! The Musical:" Harvard, Weed, and Life Lessons</a> (February 28, 2020)</li>
          <li><a href='https://www.chicagomaroon.com/article/2020/2/25/chasing-white-whale-moby-dick-chicago-musical-thea/' target='_blank'>Chasing a White Whale: "Moby Dick" at the Chicago Musical Theatre Festival</a> (February 24, 2020)</li>
        </ul>
      </View>
    );
  }
}