import React, { PureComponent } from "react";
import "./styles.css";

export default class Tab extends PureComponent {
  render() {
    const { className, icon, tabLabel, ...rest } = this.props;
    return (
      <li {...rest} className={`tab-style valign-wrapper ${className}`}>
        <i className="small material-icons">{icon}</i>
        {tabLabel}
      </li>
    )
  }
}
