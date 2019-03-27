import React, { PureComponent } from 'react';

export default class MediaIcon extends PureComponent {
  render() {
    const { href, iconName, iconSize } = this.props;
    return (
      <a href={href} style={{ color: 'inherit'}}>
        <i className={`fab ${iconName} ${iconSize}`} />
      </a>
    );
  }
}
