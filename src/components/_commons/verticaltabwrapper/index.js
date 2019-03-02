import React, { PureComponent } from 'react';
import './styles.css';
const _DEFAULT_STYLES = 'v-tab-wrapper'; // default trim vertical tab style

export default class VerticalTabWrapper extends PureComponent {
  render() {
    return (
      <div className={_DEFAULT_STYLES}>
        {this.props.children}
      </div>
    );
  }
}
