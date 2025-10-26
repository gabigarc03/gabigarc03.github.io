import { Component } from 'preact';
import Nav from './nav/Nav';
import './header.scss';

export default class Header extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <header>
        <span class='logo-link'>
          <a href='/'>g.c. garcia</a>
        </span>
        <Nav />
      </header>
    );
  }
}
