/**
 * @author Paul Cheor Kim
 * @fileoverview Generic Splitable Component
 */
import React, { PureComponent } from 'react';
import './styles.css';
const _DEFAULT_STYLES = 'container-style';

export default class Container extends PureComponent {
  render() {
    const { className, ...rest } = this.props;
    const styles = [ _DEFAULT_STYLES ];
    if(className) styles.push(className);
    return (
      <div className={styles.join(" ")} {...rest}>
        {this.props.children}
      </div>
    )
  }
}
