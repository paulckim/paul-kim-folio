/**
 * @author Paul Cheor Kim
 * @fileoverview The root component that represents the portfolio website.
 */
import React, { PureComponent, Fragment } from 'react';
import { NavBar, NavItem, Parallax, ParallaxSection } from './components/_commons'; 
import AboutSlide from './components/about.slide';
// eslint-disable-next-line
import SlideMetaData from './components';
import './index.css';

class App extends PureComponent {
  render() {
    // eslint-disable-next-line
    const { HOME, ABOUT, EXPERIENCE, SKILLS } = SlideMetaData;
    return (
      <Fragment>

        <NavBar className='dark-theme' logoText='Paul 철 Kim'>
          <NavItem targetId='#about'>About</NavItem>
          <NavItem targetId='#experience'>Experience</NavItem>
          <NavItem targetId='#skills'>Skills</NavItem>
        </NavBar>

        <scroll-container>
          <Parallax src='https://i.imgur.com/jdBlxYT.jpg'/>
          <ParallaxSection className='dark-theme'>
            <h2>Home!</h2>
            <p>Landing page section!</p>
          </ParallaxSection>

          <Parallax 
            src='https://archive-media-1.nyafuu.org/wg/image/1409/00/1409002784203.png' 
          />
          <scroll-page id='about'>
            <ParallaxSection className='dark-theme'>
              <AboutSlide />
            </ParallaxSection>
          </scroll-page>

          <Parallax 
            src='https://orig00.deviantart.net/08d8/f/2015/303/b/1/everest_polyscape_by_kermitnirmit-d9eyroo.jpg' 
          />
          <scroll-page id='experience'>
            <ParallaxSection className='dark-theme'>
              <h2>Experience!</h2>
              <p>Experience page section!</p>
            </ParallaxSection>
          </scroll-page>

          <scroll-page id='skills'>
            <Parallax src='https://i.imgur.com/ZmU1Hro.png'/>
            <ParallaxSection className='dark-theme'>
              <h2>Skills!</h2>
              <p>Skills page section!</p>
            </ParallaxSection>
          </scroll-page>

        </scroll-container>

      </Fragment>
    );
  }
}

export default App;

// LANDSCAPE BACKGROUNDS
// https://images5.alphacoders.com/598/thumb-1920-598602.png
