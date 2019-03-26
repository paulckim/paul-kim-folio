/**
 * @author Paul Cheor Kim
 * @fileoverview The HTML content that represents the Experience section of the portfolio.
 */
import React, { PureComponent, Fragment } from 'react';
import ExperienceCard from './content/experience/experiencecard';

export default class ExperienceSlide extends PureComponent {
  render() {
    return (
      <Fragment>
        <h2 className='center-align'>Experience</h2>
        <div className='divider' style={{ marginBottom: '10px' }} />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            minHeight: '600px'
          }}
        >
          <ExperienceCard 
            imgUrl='https://coverfiles.alphacoders.com/480/48072.jpg'
            position='Cloud Software Engineer'
            time='Sept. 2017 - Present'
          >
            <p>
              I am a core developer of the License Delivery Service (LDS). LDS is a backend, subscription-based service that generates and encrypts licenses for Siemens software. These encrypted licenses are integrated into software products and specify which product features are enabled based on customer purchase.
            </p>
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
          </ExperienceCard>

          <ExperienceCard 
            imgUrl='https://coverfiles.alphacoders.com/480/48073.jpg'
            position='Software Engineering Intern'
            time='May 2016 - June 2017'
          >
            <p>
              I worked for Siemens PLM as a Software Engineering Intern on the Service-Oriented Infrastructure (SOA) Team. I was responsible for reducing the amount of auto-generated SOA framework code/ binaries.
            </p>
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
          </ExperienceCard>

        </div>
      </Fragment>
    );
  }
}
