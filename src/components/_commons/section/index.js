import React, { PureComponent } from 'react';
import './styles.css';

export default class ParallaxSection extends PureComponent {
  render() {
    const { className, ...rest } = this.props;
    const styles = ['section'];
    if(className) styles.push(className);
    return(
      <div className={styles.join(' ')} {...rest}>
        <div className='container'>
          {this.props.children}
        </div>
      </div>
    );
  }
}
