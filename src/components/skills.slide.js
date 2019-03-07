/**
 * @author Paul Cheor Kim
 * @fileoverview The HTML content that represents the About Me section of the portfolio.
 */
import React, { PureComponent } from 'react';
import { Slide, Container } from './_commons';
import SkillsWrapper from './content/skills/skills.wrapper';
import SkillCategory from './content/skills/skills.category';

const skillsImageUrl = "https://i.imgur.com/ZmU1Hro.png";
const SLIDE_IMAGE_URL = `url(${skillsImageUrl})`;

export default class SkillsSlide extends PureComponent {
  render() {
    return (
      <Slide className='dark-theme' imgUrl={SLIDE_IMAGE_URL}>
        <Container>
          <SkillsWrapper className='dark-theme'>
            <SkillCategory className='light-theme'>Languages</SkillCategory>
            <SkillCategory className='light-theme'>IDE(s)</SkillCategory>
            <SkillCategory className='light-theme'>AWS</SkillCategory>
            <SkillCategory className='light-theme'>CI/CD</SkillCategory>
            <SkillCategory className='light-theme'>Build Tools</SkillCategory>
          </SkillsWrapper>
        </Container>
      </Slide>
    );
  }
}
