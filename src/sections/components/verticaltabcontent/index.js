import React, { PureComponent } from "react";
import "./styles.css";

export default class VerticalTabContent extends PureComponent {
  render() {
    return (
      <div className="col s10 v-tab-content">
        {this.props.children}
      </div>
    )
  }
}
