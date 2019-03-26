import React, { PureComponent } from 'react';

export default class SkillTab extends PureComponent {
  render() {
    const { className, onClick, tabRef, tabLabel } = this.props;
    return (
      <li className={className} onClick={onClick}>
        <a href={tabRef}>{tabLabel}</a>
      </li>
    );
  }
}
