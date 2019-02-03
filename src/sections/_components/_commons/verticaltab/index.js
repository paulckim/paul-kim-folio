import React, { PureComponent } from "react";
import "./styles.css";

const DEFAULT_STYLES = Object.freeze([
  "vtab-style",
  "valign-wrapper"
]);

export default class VTab extends PureComponent {
  render() {
    const { className, icon, tabLabel, ...rest } = this.props;
    const tabStyles = [ ...DEFAULT_STYLES ];
    if(className) tabStyles.push(className.trim());

    return (
      <li className={tabStyles.join(' ')} {...rest}>
        <i className="small material-icons">{icon}</i>
        {tabLabel}
      </li>
    )
  }
}
