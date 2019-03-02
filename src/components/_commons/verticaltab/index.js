import React, { PureComponent } from 'react';
import './styles.css';
const _DEFAULT_STYLES = 'vtab-style valign-wrapper'; 

export default class VTab extends PureComponent {
  render() {
    const { className, icon, tabLabel, ...rest } = this.props;
    const tabStyles = [ _DEFAULT_STYLES ];
    if(className) tabStyles.push(className);
    return (
      <li className={tabStyles.join(' ')} {...rest}>
        <i className="small material-icons">
          {icon}
        </i>
        {tabLabel}
      </li>
    )
  }
}
