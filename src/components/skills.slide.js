/**
 * @author Paul Cheor Kim
 * @fileoverview The HTML content that represents the About Me section of the portfolio.
 */
import React, { PureComponent } from 'react';
import { Slide, Container } from './_commons';
import SkillsWrapper from './content/skills/wrapper';
import SkillCategory from './content/skills/category';
import SkillList from './content/skills/list';
import './content/skills/styles.css';

const skillsImageUrl = 'https://i.imgur.com/ZmU1Hro.png';
const SLIDE_IMAGE_URL = `url(${skillsImageUrl})`;

export default class SkillsSlide extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { isActive: false, detailsId: 0 }
    this.isVisible = this.isVisible.bind(this);
    this.expandCategories = this.expandCategories.bind(this);
    this.toggleDetails = this.toggleDetails.bind(this);
  }

  /**
   * 
   * @param {number} detailsId 
   */
  isVisible(detailsId) {
    return this.state.detailsId === detailsId ? '' : 'hide';
  }

  expandCategories() {
    return this.state.isActive ? '' : 'expand';
  }

  /**
   * 
   * @param {number} detailsId 
   */
  toggleDetails(detailsId) {
    return () => {
      const nextId = this.state.isActive 
        ? this.state.detailsId : detailsId;
      this.setState({ 
        isActive: !this.state.isActive, 
        detailsId: nextId 
      });
    };
  }

  render() {
    return (
      <Slide className='dark-theme' imgUrl={SLIDE_IMAGE_URL}>
        <Container>
          <SkillsWrapper className='dark-theme'>
            <div className='skills-root-flex-row'>
              <div className='light-theme skills-col-details'>
                <SkillList className={this.isVisible(0)}>
                  <h4>Programming Languages</h4>
                  <div className='divider' />
                  <p>A list of Programming languages that I am familiar with:</p>
                  <ul>
                    <li>
                      Java:
                      <div className='progress' style={{ width: '70%', color: 'black' }}>
                        <span className='determinate' style={{ width: '65%' }} />
                      </div>
                    </li>
                    <li>
                      JavaScript:
                      <div className='progress' style={{ width: '70%', color: 'black' }}>
                        <span className='determinate' style={{ width: '75%' }} />
                      </div>
                    </li>
                    <li>
                      Python:
                      <div className='progress' style={{ width: '70%', color: 'black' }}>
                        <span className='determinate' style={{ width: '40%' }} />
                      </div>
                    </li>
                    <li>
                      C++:
                      <div className='progress' style={{ width: '70%', color: 'black' }}>
                        <span className='determinate' style={{ width: '40%' }} />
                      </div>
                    </li>
                  </ul>
                </SkillList>
                <SkillList className={this.isVisible(1)}>
                  <h4>Development Tools</h4>
                  <div className='divider' />
                  <p>A list of IDEs that I am familiar with:</p>
                  <ul>
                    <li>
                      Visual Studio Code:
                      <div className='progress' style={{ width: '70%' }}>
                        <span className='determinate' style={{ width: '75%' }} />
                      </div>
                    </li>
                    <li>
                      Eclipse:
                      <div className='progress' style={{ width: '70%' }}>
                        <span className='determinate' style={{ width: '60%' }} />
                      </div>
                    </li>
                    <li>
                      Docker:
                      <div className='progress' style={{ width: '70%' }}>
                        <span className='determinate' style={{ width: '75%' }} />
                      </div>
                    </li>
                  </ul>
                </SkillList>
                <SkillList className={this.isVisible(2)}>
                  List of AWS skills
                </SkillList>
                <SkillList className={this.isVisible(3)}>
                  List of CI/CD related skills
                </SkillList>
              </div>
              <div className={`skills-col-categories ${this.expandCategories()}`}>
                <div className='skills-centered-flex-row'>
                  <SkillCategory
                    className='light-theme' onClick={this.toggleDetails(0)}>
                    Languages
                  </SkillCategory>
                  <SkillCategory
                    className='light-theme' onClick={this.toggleDetails(1)}>
                    Development Tools
                  </SkillCategory>
                  <SkillCategory
                    className='light-theme' onClick={this.toggleDetails(2)}>
                    AWS
                  </SkillCategory>
                  <SkillCategory
                    className='light-theme' onClick={this.toggleDetails(3)}>
                    CI/CD
                  </SkillCategory>
                </div>
              </div>
            </div>
          </SkillsWrapper>
        </Container>
      </Slide>
    );
  }
}
