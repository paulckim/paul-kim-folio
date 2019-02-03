import React, { PureComponent } from "react";
import "./styles.css";

export default class VerticalTabWrapper extends PureComponent {
  render() {
    return (
      <div className="trim">
        <div className="row trim">
          {this.props.children}
        </div>
      </div>
    )
  }
}
