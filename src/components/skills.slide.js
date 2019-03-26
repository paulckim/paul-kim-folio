/**
 * @author Paul Cheor Kim
 * @fileoverview The HTML content that represents the Skills section of the portfolio.
 */
import React, { PureComponent, Fragment } from 'react';
import { renderToString } from 'react-dom/server';
import SkillChart from './content/skills/skillchart';
import SkillTab from './content/skills/skilltab';
import SkillBubble from './content/skills/skillbubble';
import {
  JavaSkillToolTip, NodeSkillToolTip, CppSkillToolTip
} from './content/skills/skillbubble/tooltip/languages';
import {
  HttpServerToolTip, WebAppToolTip, CssLibraryToolTip, 
  UnitTestToolTip, StubMockToolTip
} from './content/skills/skillbubble/tooltip/libraries';
import './content/skills/styles.css';

export default class SkillsSlide extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { id: 0 }
    this._tabRef = React.createRef();
    this.tabContentStyle = this.tabContentStyle.bind(this);
    this.renderChartData = this.renderChartData.bind(this);
  }

  componentDidMount() {
    this._isMounted = true;
    this._tabInst = window.M.Tabs.init(this._tabRef.current);
  }
  
  componentWillUnmount() {
    if(!this._isMounted) return;
    this._tabInst.destroy();
    this._isMounted = false;
  }

  tabContentStyle(id) {
    return this.state.id === id 
      ? 'active' : '';
  }

  /**
   * 
   * @param {number} id 
   */
  renderChartData(id) {
    switch(id) {
      case 2:
        return {
          name: 'Infrastructure & Tooling',
          data: [
            { name: 'Docker', y: 70 },
            { name: 'GitLab CI', y: 65 },
            { name: 'NGINX', y: 55 },
            { name: 'AWS CloudFormation', y: 65 },
            { name: 'AWS Lambda', y: 60 },
            { name: 'AWS CloudWatch', y: 70 },
            { name: 'AWS ECS', y: 65 },
            { name: 'AWS FarGate', y: 50 },
            { name: 'AWS EC2', y: 60 },
            { name: 'Datadog', y: 40 }
          ]
        }
      case 1:
        return {
          name: 'Libraries & Frameworks',
          data: [
            { name: 'Express', y: 75 },
            { name: 'React', y: 70 },
            { name: 'Sinon', y: 70 },
            { name: 'Mocha', y: 75 },
            { name: 'Unstated', y: 65 },
            { name: 'Redux', y: 65 },
            { name: 'Materialize CSS', y: 70 },
            { name: 'Bootstrap', y: 65 },
            { name: 'React Router', y: 70 },
            { name: 'GraphQL', y: 70 }
          ]
        }
      case 0:
      default:
        return {
          name: 'Runtime Environments & Languages',
          data: [
            { name: 'Node', y: 80 },
            { name: 'Java', y: 70 },
            { name: 'Python', y: 50 },
            { name: 'C/ C++', y: 35 }
          ]
        }
    }
  }

  render() {
    const { name, data } = this.renderChartData(this.state.id);
    return (
      <Fragment>
        <h2 className='center-align'>Skills</h2>
        <div className='divider' style={{ marginBottom: '10px' }} />
        <div className='row'>
          <div className='col s12 m12 l6'>
            <SkillChart name={name} data={data} />
          </div>
          <div className='col s12 m12 l6'>
            <div className='row'>
              <div className='col s12'>
                <ul ref={this._tabRef} className='tabs'>
                  <SkillTab
                    tabRef='#languages' tabLabel='Runtime Environments & Languages'
                    className='tab col s4'
                    onClick={() => this.setState({ id: 0 })}
                  />
                  <SkillTab
                    tabRef='#frameworks' tabLabel='Libraries & Frameworks'
                    className='tab col s4'
                    onClick={() => this.setState({ id: 1 })}
                  />
                  <SkillTab
                    tabRef='#infrastructure' tabLabel='Infrastructure & Tooling'
                    className='tab col s4'
                    onClick={() => this.setState({ id: 2 })}
                  />
                </ul>
              </div>
              <div id='languages' className='col s12'>
                <div className={`skill-tab-content ${this.tabContentStyle(0)}`}>
                  <h5 style={{ textAlign: 'center' }}>Runtime Environments & Languages</h5>
                  <div className='divider' />
                  <p>
                    A software engineer will have to learn a multitude of programming languages and runtime environment throughout their career. Most of my professional, software development experience resolves around Java, Node and Python while my experience with C++ comes from a variety of assignments as a university student.
                  </p>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-evenly'
                    }}
                  >
                    <SkillBubble 
                      text='Java'
                      tooltipText={renderToString(<JavaSkillToolTip />)}
                    />
                    <SkillBubble 
                      text='Node'
                      tooltipText={renderToString(<NodeSkillToolTip />)}
                    />
                    <SkillBubble 
                      text='C++'
                      tooltipText={renderToString(<CppSkillToolTip />)}
                    />
                  </div>
                </div>
              </div>
              <div id='frameworks' className='col s12'>
                <div className={`skill-tab-content ${this.tabContentStyle(1)}`}>
                  <h5 style={{ textAlign: 'center' }}>Library & Framework</h5>
                  <div className='divider' />
                  <p>
                    Programming languages and runtime environments are usually the minimum requirements for building/ running executables on machines. For any given context of programming language and and runtime environment, there is usually a plethora of shareable software called libraries and frameworks. These library and frameworks package functionalities to prevent redundancy and encourage abstract logic.
                  </p>
                  <p>
                    Here's a list of library and framework categories I have experience with - not limited to:
                  </p>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-evenly'
                    }}
                  >
                    <SkillBubble 
                      text='HTTP(S) Web Server'
                      tooltipText={renderToString(<HttpServerToolTip />)}
                    />
                    <SkillBubble 
                      text='Web App Framework'
                      tooltipText={renderToString(<WebAppToolTip />)}
                    />
                    <SkillBubble 
                      text='CSS Libraries'
                      tooltipText={renderToString(<CssLibraryToolTip />)}
                    />
                    <SkillBubble 
                      text='Unit Testing Framework'
                      tooltipText={renderToString(<UnitTestToolTip />)}
                    />
                    <SkillBubble 
                      text='Stubbing/ Mocking Libraries'
                      tooltipText={renderToString(<StubMockToolTip />)}
                    />
                  </div>
                </div>
              </div>
              <div id='infrastructure' className='col s12'>
                <div className={`skill-tab-content ${this.tabContentStyle(2)}`}>
                  <h5 style={{ textAlign: 'center' }}>Infrastructure & Tooling</h5>
                  <div className='divider' />
                  <p>
                    I have experience with developing and maintaining infrastructure at different levels of production. This authority and responsibility includes editing the CI/CD pipeline, AWS infrastructure (e.g. CloudFormation), deploying on-premise servers (e.g. Dockerized, NGINX images), etc.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
