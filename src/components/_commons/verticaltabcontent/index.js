import React, { PureComponent } from 'react';
import './styles.css';
const _DEFAULT_STYLES = 'v-tab-content'; // default vertical tab content style

export default class VerticalTabContent extends PureComponent {
  render() {
    const { className, ...rest } = this.props;
    const vTabContentStyles = [ _DEFAULT_STYLES ];
    if(className) vTabContentStyles.push(className);
    return (
      <div className={vTabContentStyles.join(' ')} {...rest}>
        {this.props.children}
      </div>
    );
  }
}
