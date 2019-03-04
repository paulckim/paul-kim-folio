import React, { PureComponent } from 'react';
import './styles.css';

export default class ExperienceWrapper extends PureComponent {
  render() {
    const { className, ...rest } = this.props;
    const styles = [ 'experience-style' ];
    if(className) styles.push(className);
    return (
      <div className={styles.join(' ')} {...rest}>
        <h3 className='center-align'>Experience</h3>
        <div className='divider' />
        <div className='experience-content'>
          {this.props.children}
        </div>

      </div>
    );
  }
}
