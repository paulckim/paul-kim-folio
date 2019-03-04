/**
 * @author Paul Cheor Kim
 * @fileoverview The root component that represents the portfolio website.
 */
import React, { PureComponent, Fragment } from 'react';
import swiperConfig from './swiper.config';
import Swiper from 'swiper';
import { Slide, NavBar, NavItem } from './components/_commons';
import AboutSlide from './components/about.slide';
import ExperienceSlide from './components/experience.slide';
import SlideMetaData from './components';
import './index.css';

class App extends PureComponent {
  componentDidMount() {
    this._isMounted = true;
    const navElems = window.document.querySelectorAll('.sidenav');
    this._navInst = window.M.Sidenav.init(navElems);
    this._swiperInst = new Swiper("#swiper", swiperConfig);
  }

  componentWilUnmount() {
    if(!this._isMounted) return;
    this._swiperInst.destroy();
    this._navInst.destroy();
    this._isMounted = false;
  }

  render() {
    const { HOME, ABOUT, EXPERIENCE, SKILLS } = SlideMetaData;
    return (
      <Fragment>
        <div className="swiper-container" id="swiper">
          <div className="swiper-wrapper">
            <Slide className='dark-theme' imgUrl={HOME.imgUrl} />
            <AboutSlide />
            <ExperienceSlide />
            <Slide className='dark-theme' imgUrl={SKILLS.imgUrl} />
          </div>
          <div className="swiper-pagination" />
        </div>
        <NavBar 
          logoText={HOME.navText} 
          logoHandler={() => {
            this._swiperInst.slideTo(0, swiperConfig.speed);
          }}
        >
          <NavItem 
            navText={ABOUT.navText}
            onClick={() => {
              this._swiperInst.slideTo(1, swiperConfig.speed);
            }}
          />
          <NavItem 
            navText={EXPERIENCE.navText}
            onClick={() => {
              this._swiperInst.slideTo(2, swiperConfig.speed);
            }}
          />
          <NavItem 
            navText={SKILLS.navText}
            onClick={() => {
              this._swiperInst.slideTo(3, swiperConfig.speed);
            }}
          />
        </NavBar>
      </Fragment>
    );
  }
}

export default App;

// LANDSCAPE BACKGROUNDS
// https://images5.alphacoders.com/598/thumb-1920-598602.png
