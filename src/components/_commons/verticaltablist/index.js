import React, { PureComponent } from 'react';
import './styles.css';

export default class VTabList extends PureComponent {
  render() {
    const { className, ...rest } = this.props;
    const vTabListStyles = [];
    if(className) vTabListStyles.push(className);
    return (
      <span className={vTabListStyles.join(' ')} {...rest}>
        <ul className='v-tab-list'>
          {this.props.children}
        </ul>
      </span>
    )
  }
}
