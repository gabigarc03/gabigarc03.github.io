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
          Hi! I am a London-based writer, software engineer, and UX designer.
        </p>
      </View>
    );
  }
}
