/**
 * @author Paul Cheor Kim
 * @fileoverview The HTML content that represents the About Me section of the portfolio.
 */
import React, { PureComponent, Fragment } from 'react';
import Swiper from 'swiper';
import { TypingElement } from './_commons';
import OverviewSlide from './content/about/overview';
import MoreSlide from './content/about/more';
import './content/about/styles.css';

export default class AboutSlide extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      chevronLeftClass: 'disabled',
      chevronRightClass: 'pulse'
    }
    this._aboutSlideRef = React.createRef();
    this._chevronLeftRef = React.createRef();
    this._chevronRightRef = React.createRef();
    this.updateChevronClasses = this.updateChevronClasses.bind(this);
  }

  updateChevronClasses() {
    const { length } = this._aboutSlidesInst.slides;
    const { activeIndex } = this._aboutSlidesInst;
    this.setState({
      chevronLeftClass: activeIndex !== 0 ? 'pulse' : 'disabled',
      chevronRightClass: activeIndex !== (length - 1) ? 'pulse' : 'disabled'
    });
  }

  componentDidMount() {
    this._isMounted = true;
    this._aboutSlidesInst = new Swiper(this._aboutSlideRef.current, {
      navigation: {
        prevEl: this._chevronLeftRef.current,
        nextEl: this._chevronRightRef.current,
        // disabledClass: 'disabled'
      }
    });
    this._aboutSlidesInst.on('slideChange', this.updateChevronClasses);
    this.updateChevronClasses();
  }

  componentWillUnmount() {
    if(!this._isMounted) return;
    this._aboutSlidesInst.destroy();
    this._isMounted = false;
  }

  render() {
    const { chevronLeftClass, chevronRightClass } = this.state;
    return (
      <Fragment>
        <h2 className='center-align'>About Me</h2>
        <h5 
          className='center-align' style={{ lineHeight: '1', minHeight: '1em' }}
        >
          <TypingElement 
            insertDelay={150} deleteDelay={4000} 
            typeInterval={40} blinkPeriod={1200} 
            texts={[
              'A Cloud Software Engineer',
              'A Full Stack Engineer',
              'Passionate | Curious | Proud'
            ]}
          />
        </h5>
        <div className='divider' style={{marginBottom: '10px'}} />
        
        <div ref={this._aboutSlideRef} className='swiper-container'>

          <div className='swiper-wrapper'>
            <div className='swiper-slide about-slide'>
              <OverviewSlide />
            </div>
            <div className='swiper-slide about-slide'>
              <MoreSlide />
            </div>
          </div>
          
          <div 
            ref={this._chevronLeftRef} 
            className={`btn-floating chevron_left ${chevronLeftClass}`}
          >
            <i className='medium material-icons'>chevron_left</i>
          </div>
          <div 
            ref={this._chevronRightRef} 
            className={`btn-floating chevron_right ${chevronRightClass}`}
          >
            <i className='medium material-icons'>chevron_right</i>
          </div>
        </div>
        
      </Fragment>
    );
  }
}
