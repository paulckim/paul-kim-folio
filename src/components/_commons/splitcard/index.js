/**
 * @author Paul Cheor Kim
 * @fileoverview Generic Splitable Component
 */
import React, { PureComponent } from 'react';
import 'css-fx/css-fx.min.css';
import { fxRootSplit, fxLeftSplit, fxRightSplit, fxHideOverflow } from 'css-fx/split';

export default class SplitCard extends PureComponent {
  render() {
    const { className, ...rest } = this.props;
    const styles = [fxRootSplit, fxHideOverflow];
    if(className) styles.push(className);
    return (
      <div className={styles.join(" ")} {...rest}>
        <div className={fxLeftSplit}>
          {this.props.children}
        </div>
        <div className={fxRightSplit}>
          {this.props.children}
        </div>
      </div>
    )
  }
}
