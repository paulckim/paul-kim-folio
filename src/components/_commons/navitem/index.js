import React, { PureComponent } from 'react';

export default class NavItem extends PureComponent {
  render() {
    const { onClick, navText } = this.props;
    return (
      <li className='waves-effect waves-light' onClick={onClick}>
        <span>{navText}</span>
      </li>
    );
  }
}
