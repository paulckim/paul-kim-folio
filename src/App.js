/**
 * @author Paul Cheor Kim
 * @fileoverview The root component that represents the portfolio website.
 */
import React, { PureComponent, Fragment } from 'react';
import { NavBar, NavItem, Parallax, ParallaxSection } from './components/_commons'; 
import AboutSlide from './components/about.slide';
import ExperienceSlide from './components/experience.slide';
import SkillsSlide from './components/skills.slide';
import SocialSection from './components/social.slide';
import './index.css';

class App extends PureComponent {
  render() {
    return (
      <Fragment>

        <NavBar className='dark-theme' logoText='Paul 철 Kim'>
          <NavItem targetId='#about'>About</NavItem>
          <NavItem targetId='#experience'>Experience</NavItem>
          <NavItem targetId='#skills'>Skills</NavItem>
          <NavItem targetId='#social'>Social</NavItem>
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
                {/* TODO: Add floating animation here */}
              </div>
            <Parallax
              src='https://images5.alphacoders.com/523/523514.png' 
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

          <Parallax 
            src='https://orig00.deviantart.net/08d8/f/2015/303/b/1/everest_polyscape_by_kermitnirmit-d9eyroo.jpg'
          />
          <scroll-page id='skills'>
            <ParallaxSection className='dark-theme'>
              <SkillsSlide />
            </ParallaxSection>
          </scroll-page>

          <Parallax src='https://images3.alphacoders.com/828/828895.jpg'/>
          <scroll-page id='social'>
            <ParallaxSection className='dark-theme'>
              <SocialSection />
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
