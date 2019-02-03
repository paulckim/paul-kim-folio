import React, { PureComponent } from "react";
import "./styles.css";

const DEFAULT_STYLES = Object.freeze([
  "col", // materialize-css col class
  "s10", // materialize-css s10, column ratio class
  "v-tab-content" // default vertical tab content style
]);

export default class VerticalTabContent extends PureComponent {
  render() {
    const { className, ...rest } = this.props;
    const vTabContentStyles = [ ...DEFAULT_STYLES ];
    if(className) vTabContentStyles.push(className.trim());

    return (
      <div className={vTabContentStyles.join(' ')} {...rest}>
        {this.props.children}
      </div>
    )
  }
}
