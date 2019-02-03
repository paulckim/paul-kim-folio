/**
 * @author Paul Cheor Kim
 * @fileoverview The HTML content that represents the About Me section of the portfolio.
 */
import React, { PureComponent } from "react";

export default class AboutCard extends PureComponent {
  render() {
    const { className, ...rest } = this.props;
    return (
      <div className={`card ${className}`} {...rest}>
        {this.props.children}
      </div>
    )
  }
}
