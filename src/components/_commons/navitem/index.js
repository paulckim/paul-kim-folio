import React, { PureComponent } from 'react';

export default class NavItem extends PureComponent {
  render() {
    const { targetId } = this.props;
    return (
      <li className='waves-effect waves-light'>
        <a href={targetId}>{this.props.children}</a>
      </li>
    );
  }
}
