/**
 * @author Paul Cheor Kim
 * @fileoverview The HTML content that represents the About Me section of the portfolio.
 */
import React, { PureComponent, Fragment } from 'react';
import { FlipCard, FrontCard, BackCard } from './_commons';
import './content/experience/styles.css';

export default class ExperienceSlide extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { 0: true, 1: true }
    this.toggleFlip = this.toggleFlip.bind(this);
    this.getFlipStyle = this.getFlipStyle.bind(this);
  }

  /**
   * 
   * @param {number} cardId 
   */
  toggleFlip(cardId) {
    const newState = { ...this.state };
    newState[cardId] = !this.state[cardId];
    this.setState(newState);
  }

  /**
   * 
   * @param {number} cardId 
   */
  getFlipStyle(cardId) {
    return this.state[cardId] ? '' : 'flip';
  }

  render() {
    return (
      <Fragment>
        <h2 className='center-align'>Experience</h2>
        <div className='divider' style={{ marginBottom: '10px' }} />

        <Timeline>
          <TimelineEvent className='left'>
            <FlipCard className={this.getFlipStyle(0)}>
              <FrontCard 
                className='flip-card-style' 
                onBtnClick={() => this.toggleFlip(0)}
              >
                <h5>Cloud Software Engineer</h5>
                <h6>Siemens PLM</h6>
                <div className='divider' />
                <p>
                  I am a core developer of the License Delivery Service (LDS). LDS is a backend, subscription-based service that generates and encrypts licenses for Siemens software. These encrypted licenses are integrated into software products and specify which product features are enabled based on customer purchase.
                </p>
              </FrontCard>
              <BackCard 
                className='flip-card-style' 
                onBtnClick={() => this.toggleFlip(0)}
              >
                <h5>Responsibilities</h5>
                <div className='divider' />
                <ul className='browser-default'>
                  <li>
                    Developing and maintaining RESTful microservices using Java and Spring Boot
                  </li>
                  <li>
                    Unit, System & other end-to-end based testing using Junit, Python, Lua etc.
                  </li>
                  <li>
                    Developed an internal, web application that allows authorized users to read api resources using React React-Router, Materialize CSS, Docker, Node, Express, Sinon, etc.
                  </li>
                  <li>
                    Developed an internal, web application that generates and auto-fills api resources for authorized users using React, React-Router, Bootstrap, Docker, Node, Express, Sinon, etc.
                  </li>
                  <li>
                    Maintaining and improving the AWS infrastructure for different production levels (e.g. CloudFormation, API Gateway, Lambdas, ECS, Fargate, Datadog, PagerDuty, etc.)
                  </li>
                  <li>
                    Maintaining and improving the team's GitLab CI/ CD pipeline using shell scripts, etc.
                  </li>
                </ul>
              </BackCard>
            </FlipCard>
          </TimelineEvent>

          <TimelineEvent className='right'>
            <FlipCard className={this.getFlipStyle(1)}>
              <FrontCard 
                className='flip-card-style' 
                onBtnClick={() => this.toggleFlip(1)}
              >
                <h5>Software Engineering Intern</h5>
                <h6>Siemens PLM</h6>
                <div className='divider' />
                <p>
                  I worked for Siemens PLM as a Software Engineering Intern on the Service-Oriented Infrastructure (SOA) Team. I was responsible for reducing the amount of auto-generated SOA framework code/ binaries.
                </p>
              </FrontCard>
              <BackCard 
                className='flip-card-style' 
                onBtnClick={() => this.toggleFlip(1)}
              >
                <h5>Responsibilities</h5>
                <div className='divider' />
                <ul className='browser-default'>
                  <li>
                    Java api generation by XML Unmarshalling requests and using Simple API for XML (SAX) Parsing and Java Reflection
                  </li>
                  <li>
                    Auto-generated Service-Oriented Architecture code reduction (~80%) while retaining runtime speed
                  </li>
                  <li>
                    System and Integration Testing using JUnit
                  </li>
                </ul>
              </BackCard>
            </FlipCard>
          </TimelineEvent>
        </Timeline>
      </Fragment>
    );
  }
}

class Timeline extends PureComponent {
  render() {
    return (
      <div style={{ position: 'relative' }}>
        <div className='timeline'>
          {this.props.children}
        </div>
      </div>
    );
  }
}

class TimelineEvent extends PureComponent {
  render() {
    const { className } = this.props;
    const styles = [];
    if(className === 'left') styles.push('col s12 m6 l6');
    if(className === 'right') styles.push('col s12 m6 offset-m6 l6 offset-l6');
    return (
      <div className='row' style={{ position: 'relative' }}>

        <span 
          className='btn-floating btn-small waves-effect waves-light pulse timeline-button'
        >
          <i className='material-icons'>timeline</i>
        </span>
        <div className={styles.join(' ')}>
          <div style={{ position: 'relative', paddingLeft: '15px', paddingRight: '15px' }}>
            {this.props.children}
          </div>
        </div>
        
      </div>
      
    );
  }
}
