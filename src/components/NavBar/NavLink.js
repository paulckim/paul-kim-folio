import React, { Component } from 'react';
import './styles.css'

class NavLink extends Component {
  render() {
    return (
      <li><a className='nav-text' href={this.props.href}>{this.props.text}</a></li>
    );
  }
}

export default NavLink;
