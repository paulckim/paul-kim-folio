/**
 * @author Paul Cheor Kim
 * @fileoverview Wrapper for Swiper Slide
 */
import React, { PureComponent } from 'react';
import './styles.css';
const _DEFAULT_STYLES = 'swiper-slide autoscale-img';

export default class Slide extends PureComponent {
  render() {
    const { className, imgUrl, ...rest } = this.props;
    const tabStyles = [ _DEFAULT_STYLES ];
    if(className) tabStyles.push(className);
    return (
      <div 
        className={tabStyles.join(' ')} 
        style={{ backgroundImage: imgUrl }}
        {...rest}
      >
        <div className='swiper-layer'>
          {this.props.children}
        </div>
      </div>
    );
  }
}
