import { Component } from 'preact';
import View from '../View';

export default class NotFound extends Component {
  render () {
    return (
      <View name='not-found'>
        <h1>Page not found</h1>
        <p>Uh oh! You must've gotten here by mistake.</p>
      </View>
    );
  }
}