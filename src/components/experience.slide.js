/**
 * @author Paul Cheor Kim
 * @fileoverview The HTML content that represents the About Me section of the portfolio.
 */
import React, { PureComponent } from 'react';
import { Slide, Container } from './_commons';
import ExperienceWrapper from './content/experience';
import ExperienceCard from './content/experience/experiencecard';
// import ExperienceDetails from './content/experience/experiencedetails';

const expImageUrl = "https://orig00.deviantart.net/08d8/f/2015/303/b/1/everest_polyscape_by_kermitnirmit-d9eyroo.jpg";
const SLIDE_IMAGE_URL = `url(${expImageUrl})`;

export default class ExperienceSlide extends PureComponent {
  render() {
    return (
      <Slide className='dark-theme' imgUrl={SLIDE_IMAGE_URL}>
        <Container>
          <ExperienceWrapper className='dark-theme'>
            
            <ExperienceCard 
              title='Siemens PLM Software'
              position='Cloud Software Engineer'
              time='2017 - present'
            >
              {SiemensLogo}
            </ExperienceCard>

            <ExperienceCard 
              title='Siemens PLM Software'
              position='Software Engineering Intern'
              time='2013 - 2017'
            > 
              {SiemensLogo}
            </ExperienceCard>

          </ExperienceWrapper>
        </Container>
      </Slide>
    );
  }
}

const SiemensLogo = (
  <img
    className='responsive-img'
    src='https://infuser.eu/wp-content/uploads/2018/08/siemens-logo.png'
    alt='Siemens Logo'
  />
);
