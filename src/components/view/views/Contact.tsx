import { Component } from 'preact';
import View from '../View';

export default class Contact extends Component {
  render () {
    return (
      <View name='contact'>
        <h1>contact</h1>
        <p>You can reach me at the places linked in the footer or at:</p>
        <p>gabigarc [at] pm [dot] me</p>
      </View>
    );
  }
}