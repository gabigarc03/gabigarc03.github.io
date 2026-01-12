import { Component } from 'preact';
import View from '../View';

export default class Home extends Component {
  render() {
    return (
      <View name='home'>
        <img
          alt='Gabriela Garcia'
          src={require('../../../assets/images/headshot.jpg')}
        ></img>
        <p>
          I am a writer, software engineer, and UX designer seeking work in
          London, England.
        </p>
      </View>
    );
  }
}
