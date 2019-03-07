import React, { PureComponent } from 'react';
import './styles.css';

export default class SkillsWrapper extends PureComponent {
  render() {
    const { className, ...rest } = this.props;
    const styles = [ 'skills-style' ];
    if(className) styles.push(className);
    return (
      <div className={styles.join(' ')} {...rest}>
        <h3 className='center-align'>Skills</h3>
        <div className='divider' />
        <div className='skills-content'>
          {this.props.children}
        </div>
      </div>
    );
  }
}
