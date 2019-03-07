import React, { PureComponent } from 'react';
import './styles.css';

export default class SkillCategory extends PureComponent {
  render() {
    const { className, ...rest } = this.props;
    const styles = [ 'btn-floating circle pulse' ];
    if(className) styles.push(className);
    return (
      <span className={styles.join(' ')} {...rest}>
        {this.props.children}
      </span>
    );
  }
}
