import React, { PureComponent } from "react";
import "./styles.css";

const DEFAULT_STYLES = Object.freeze([
  "col", // materialize-css col class
  "v-tab-list-wrapper" // default vertical tab list style
]);

export default class VTabList extends PureComponent {
  render() {
    const { className, ...rest } = this.props;
    const vTabListStyles = [ ...DEFAULT_STYLES ];
    if(className) vTabListStyles.push(className.trim());

    return (
      <span className={vTabListStyles.join(' ')} {...rest}>
        <ul className="v-tab-list">
          {this.props.children}
        </ul>
      </span>
    )
  }
}
