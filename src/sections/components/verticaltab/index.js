import React, { PureComponent } from "react";
import "./styles.css";

export default class VerticalTab extends PureComponent {
  render() {
    return (
      <div className="col v-tab">
        <ul className="v-tab-list">
          {this.props.children}
        </ul>
      </div>
    )
  }
}
