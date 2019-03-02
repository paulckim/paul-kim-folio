import React, { PureComponent } from 'react';
import './styles.css';

export default class NavBar extends PureComponent {
  render() {
    const { logoText, logoHandler } = this.props;
    return (
      <div>
        <nav className='floating-nav nav-dark'>
          <div className='nav-wrapper'>
            <span
              className='waves-effect waves-light brand-logo center'
              onClick={logoHandler}>
              {logoText}
            </span>
            <a href="#!" data-target='mobile-nav' className='sidenav-trigger'>
              <i className='material-icons'>menu</i>
            </a>
            <ul className='right hide-on-med-and-down'>
              {this.props.children}
            </ul>
          </div>
        </nav>
        <ul className='sidenav sidenav-dark' id='mobile-nav'>
          {this.props.children}
        </ul>
      </div>
    )
  }
}
