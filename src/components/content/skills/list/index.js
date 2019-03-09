import React, { PureComponent } from 'react';
import './styles.css';

export default class SkillList extends PureComponent {
  render() {
    const { className, ...rest } = this.props;
    const styles = [ 'skills-list' ];
    if(className) styles.push(className);
    return (
      <span className={styles.join(' ')} {...rest}>
        {this.props.children}
      </span>
    );
  }
}
