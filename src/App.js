/**
 * @author Paul Cheor Kim
 * @fileoverview The root component that represents the portfolio website.
 */
import React, { PureComponent, Fragment } from 'react';
import { NavBar, NavItem, Parallax, ParallaxSection } from './components/_commons'; 
import AboutSlide from './components/about.slide';
import ExperienceSlide from './components/experience.slide';
import SkillsSlide from './components/skills.slide';
// TODO: remove useless imports if necessary
// eslint-disable-next-line
import SlideMetaData from './components';
import './index.css';

class App extends PureComponent {
  render() {
    // TODO: remove useless metadata if necessary
    // eslint-disable-next-line
    const { HOME, ABOUT, EXPERIENCE, SKILLS } = SlideMetaData;
    return (
      <Fragment>

        <NavBar className='dark-theme' logoText='Paul 철 Kim'>
          <NavItem targetId='#about'>About</NavItem>
          <NavItem targetId='#experience'>Experience</NavItem>
          <NavItem targetId='#skills'>Skills</NavItem>
          <NavItem targetId='#contact'>Contact</NavItem>
        </NavBar>

        <scroll-container>

          <div 
            style={{
              position:'static',
              width: '100%',
              height: '100%'
            }}
          >
            <div 
              style={{
                position:'absolute',
                background: 'rgb(0, 0, 0, 0.4)'
              }}>
                {/* Add floating animation here */}
              </div>
            <Parallax
              src='https://archive-media-1.nyafuu.org/wg/image/1409/00/1409002784203.png' 
            />
          </div>
          <scroll-page id='about'>
            <ParallaxSection className='dark-theme'>
              <AboutSlide />
            </ParallaxSection>
          </scroll-page>

          <Parallax src='https://i.imgur.com/ZmU1Hro.png' />
          <scroll-page id='experience'>
            <ParallaxSection className='dark-theme'>
              <ExperienceSlide />
            </ParallaxSection>
          </scroll-page>

          <Parallax src='https://orig00.deviantart.net/08d8/f/2015/303/b/1/everest_polyscape_by_kermitnirmit-d9eyroo.jpg'/>
          <scroll-page id='skills'>
            <ParallaxSection className='dark-theme'>
              <SkillsSlide />
            </ParallaxSection>
          </scroll-page>

          <Parallax src='https://i.imgur.com/jdBlxYT.jpg'/>
          <scroll-page id='contact'>
            <ParallaxSection className='dark-theme'>
              <h2>Contact</h2>
              <p>Landing page section!</p>
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
