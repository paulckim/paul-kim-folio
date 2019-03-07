/**
 * @author Paul Cheor Kim
 * @fileoverview The HTML content that represents the About Me section of the portfolio.
 */
import React, { PureComponent, Fragment } from 'react';
import { Slide, Container } from './_commons';
import ExperienceWrapper from './content/experience';
import ExperienceCard from './content/experience/experiencecard';
import 'css-fx/css-fx.min.css';
import { fxFadeInDown, fxFadeInUp } from 'css-fx/fade-in';
import ExperienceDetails from './content/experience/experiencedetails';

const expImageUrl = "https://orig00.deviantart.net/08d8/f/2015/303/b/1/everest_polyscape_by_kermitnirmit-d9eyroo.jpg";
const SLIDE_IMAGE_URL = `url(${expImageUrl})`;

export default class ExperienceSlide extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { isActive: false, detailId: 0 }
    this.getAnimation = this.getAnimation.bind(this);
    this.renderExperienceCards = this.renderExperienceCards.bind(this);
    this.renderDetails = this.renderDetails.bind(this);
    this.renderExpCardOrDetails = this.renderExpCardOrDetails.bind(this);
  }

  renderExpCardOrDetails() {
    if(!this.state.isActive) return this.renderExperienceCards();
    return this.renderDetails(this.state.detailId);
  }

  render() {
    return (
      <Slide className='dark-theme' imgUrl={SLIDE_IMAGE_URL}>
        <Container>
          <ExperienceWrapper className='dark-theme'>
            {this.renderExpCardOrDetails()}
          </ExperienceWrapper>
        </Container>
      </Slide>
    );
  }

  renderExperienceCards() {
    return (
      <Fragment>
        <ExperienceCard 
          className={this.getAnimation()}
          title='Siemens PLM Software'
          position='Cloud Software Engineer'
          time='2017 - present'
          onBtnClick={() => {
            this.setState({
              isActive: true,
              detailId: 0
            });
          }}
        >
          {SiemensLogo}
        </ExperienceCard>

        <ExperienceCard 
          className={this.getAnimation()}
          title='Siemens PLM Software'
          position='Software Engineering Intern'
          time='2013 - 2017'
          onBtnClick={() => {
            this.setState({
              isActive: true,
              detailId: 1 
            });
          }}
        > 
          {SiemensLogo}
        </ExperienceCard>
      </Fragment>
    );
  }

  /**
   * 
   */
  renderDetails(id) {
    return [
      <ExperienceDetails
        className={this.getAnimation()}
        company='Siemens PLM'
        position='Cloud Software Engineer'
        location='California'
        date='2017 - Present'
        onBtnClick={() => this.setState({ isActive: false })}
      >
        <p>
          I am a core developer of the License Delivery Service (LDS). LDS is a backend, subscription-based service that generates and encrypts licenses for Siemens software. These encrypted licenses are integrated into software products and specify which product features are enabled based on customer purchase.
        </p>
        <p>Responsible for developing and maintaining:</p>
        <ul className='browser-default'>
          <li>
            RESTful microservices using Java and Spring Boot
          </li>
          <li>
            Unit, System & other end-to-end based testing using Junit, Python, Lua etc.
          </li>
          <li>
            a internal, web application that allows authorized users to read api resources using React React-Router, Materialize CSS, Docker, Node, Express, Sinon, etc.
          </li>
          <li>
            a internal, web application that generates and auto-fills api resources for authorized users using React, React-Router, Bootstrap, Docker, Node, Express, Sinon, etc.
          </li>
          <li>
            the AWS infrastructure for different production levels (e.g. CloudFormation, API Gateway, Lambdas, ECS, Fargate, Datadog, PagerDuty, etc.)
          </li>
          <li>
            a GitLab CI/ CD pipeline using shell scripts, etc.
          </li>
        </ul>
      </ExperienceDetails>,
      <ExperienceDetails
        className={this.getAnimation()}
        company='Siemens PLM'
        position='Software Engineering Intern'
        location='California'
        date='2013 - 2017'
        onBtnClick={() => this.setState({ isActive: false })}
      >
        <p>
          I was a Software Engineering Intern on the Service-Oriented Infrastructure (SOA) Team. As an intern, I was responsible for reducing the amount of auto-generated SOA framework code/ binaries.
        </p>
        <p>Successfully accomplished:</p>
        <ul className='browser-default'>
          <li>
            Java api generation by XML Unmarshalling requests using Simple API for XML (SAX) Parsing and Java Reflection
          </li>
          <li>
            Auto-generated Service-Oriented Architecture code reduction (~80%) while retaining runtime speed
          </li>
          <li>
            System and Integration Testing using JUnit
          </li>
        </ul>
      </ExperienceDetails>
    ][id];
  }

  getAnimation() { return !this.state.isActive ? fxFadeInDown : fxFadeInUp; }
}

const SiemensLogo = (
  <img
    className='responsive-img'
    style={{ maxWidth: '75%' }}
    src='https://infuser.eu/wp-content/uploads/2018/08/siemens-logo.png'
    alt='Siemens Logo'
  />
);
